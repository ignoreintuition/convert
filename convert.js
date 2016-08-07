(function($) {
	$.fn.convert = function(options) {
		var settings = $.extend({
			from: 'oz',
			to: 'gm'
		}, options);

		return this.each(function() {
			var amt = 0,
				cAmt = 0;
			if (!isNaN($(this).html())) {
				amt = $(this).html();
				cAmt = convert(amt, settings.from, settings.to);
			}
			$(this).html(cAmt);
		});
	};
}(jQuery));

var convert = function(amt, from, to) {
	var IMP_WEIGHT = ['dr', 'oz', 'lb', 'st', 'qr', 'cwt', 'ton'],
		IMP_UNIT = [0.0625, 1, 16, 224, 448, 1792, 35840],
		
		METRIC_WEIGHT = ['mg', 'gm', 'kg', 'Mg'],
		METRIC_UNIT = [0.001, 1, 1000, 1000000],
		
		STD_LEN = ['in', 'ft', 'yd', 'mi'],
		STD_LEN_UNIT = [1, 12, 36, 63360],
		
		METRIC_LEN = ['mm', 'cm', 'm', 'km'],
		METRIC_LEN_UNIT = [0.001, .01, 1, 1000],
		
		cAmt = 0;

	// Weight Conversions
	if (METRIC_WEIGHT.indexOf(from) > -1 && METRIC_WEIGHT.indexOf(to) > -1) {
		cAmt = amt * METRIC_UNIT[METRIC_WEIGHT.indexOf(from)];
		cAmt = cAmt / METRIC_UNIT[METRIC_WEIGHT.indexOf(to)];
		return cAmt;
	} else if (IMP_WEIGHT.indexOf(from) > -1 && IMP_WEIGHT.indexOf(to) > -1) {
		cAmt = amt * IMP_UNIT[IMP_WEIGHT.indexOf(from)];
		cAmt = cAmt / IMP_UNIT[IMP_WEIGHT.indexOf(to)];
		return cAmt;
	} else if (IMP_WEIGHT.indexOf(from) > -1 && METRIC_WEIGHT.indexOf(to) > -1) {
		cAmt = amt * IMP_UNIT[IMP_WEIGHT.indexOf(from)];
		cAmt = cAmt / 0.035274;
		cAmt = cAmt / METRIC_UNIT[METRIC_WEIGHT.indexOf(to)];
		return cAmt;
	} else if (METRIC_WEIGHT.indexOf(from) > -1 && IMP_WEIGHT.indexOf(to) > -1) {
		cAmt = amt * METRIC_UNIT[METRIC_WEIGHT.indexOf(from)];
		cAmt = cAmt * 0.035274;
		cAmt = cAmt / IMP_UNIT[IMP_WEIGHT.indexOf(to)];
		return cAmt;

	// Length Conversions
	} else if (METRIC_LEN.indexOf(from) > -1 && METRIC_LEN.indexOf(to) > -1) {
		cAmt = amt * METRIC_LEN_UNIT[METRIC_LEN.indexOf(from)];
		cAmt = cAmt / METRIC_LEN_UNIT[METRIC_LEN.indexOf(to)];
		return cAmt;
	} else if (STD_LEN.indexOf(from) > -1 && STD_LEN.indexOf(to) > -1) {
		cAmt = amt * STD_LEN_UNIT[STD_LEN.indexOf(from)];
		cAmt = cAmt / STD_LEN_UNIT[STD_LEN.indexOf(to)];
		return cAmt;
	} else if (STD_LEN.indexOf(from) > -1 && METRIC_LEN.indexOf(to) > -1) {
		cAmt = amt * STD_LEN_UNIT[STD_LEN.indexOf(from)];
		cAmt = cAmt / 39.37008;
		cAmt = cAmt / METRIC_LEN_UNIT[METRIC_LEN.indexOf(to)];
		return cAmt;
	} else if (METRIC_LEN.indexOf(from) > -1 && STD_LEN.indexOf(to) > -1) {
		cAmt = amt * METRIC_LEN_UNIT[METRIC_LEN.indexOf(from)];
		cAmt = cAmt * 39.37008;
		cAmt = cAmt / STD_LEN_UNIT[STD_LEN.indexOf(to)];
		return cAmt;

	// Default
	} else {
		return -1;
	}
}
