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
			$(this).html(cAmt)
		});
	};
}(jQuery));

var convert = function(amt, from, to) {
	var IMP_WEIGHT = ['dr', 'oz', 'lb', 'st', 'qr', 'cwt', 'ton'],
		IMP_UNIT = [0.0625, 1, 16, 224, 448, 1792, 35840],
		METRIC_WEIGHT = ['mg', 'gm', 'kg', 'Mg'],
		METRIC_UNIT = [.001, 1, 1000, 1000000],
		cAmt = 0;

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
	} else {
		return -1;
	}
}
