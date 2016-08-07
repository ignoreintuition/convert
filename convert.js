// convert.js
// https://github.com/ignoreintuition/convert
// Created by Brian Greig
// Last updated 8/6/2016
// A jQuery plugin for converting selectors to different units

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
		
		METRIC_VOL = ['cl', 'ml', 'l'],
		METRIC_VOL_UNIT = [0.01, 0.001, 1],

		STD_VOL = ['fl oz', 'cup', 'pt', 'qt', 'gal']
		STD_VOL_UNIT = [1, 8, 16, 32, 128]

		TEMP = ['F', 'C']

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

	// Volume Conversions
	} else if (METRIC_VOL.indexOf(from) > -1 && METRIC_VOL.indexOf(to) > -1) {
		cAmt = amt * METRIC_VOL_UNIT[METRIC_VOL.indexOf(from)];
		cAmt = cAmt / METRIC_VOL_UNIT[METRIC_VOL.indexOf(to)];
		return cAmt;
	} else if (STD_VOL.indexOf(from) > -1 && STD_VOL.indexOf(to) > -1) {
		cAmt = amt * STD_VOL_UNIT[STD_VOL.indexOf(from)];
		cAmt = cAmt / STD_VOL_UNIT[STD_VOL.indexOf(to)];
		return cAmt;
	} else if (STD_VOL.indexOf(from) > -1 && METRIC_VOL.indexOf(to) > -1) {
		cAmt = amt * STD_VOL_UNIT[STD_VOL.indexOf(from)];
		cAmt = cAmt / 33.814022;
		cAmt = cAmt / METRIC_VOL_UNIT[METRIC_VOL.indexOf(to)];
		return cAmt;
	} else if (METRIC_VOL.indexOf(from) > -1 && STD_VOL.indexOf(to) > -1) {
		cAmt = amt * METRIC_VOL_UNIT[METRIC_VOL.indexOf(from)];
		cAmt = cAmt * 33.814022;
		cAmt = cAmt / STD_VOL_UNIT[STD_VOL.indexOf(to)];
		return cAmt;

	// Temperature Conversions
	} else if (TEMP.indexOf(from) > -1 && TEMP.indexOf(to) > -1) {
		if(from == 'F' && to == 'C') {
			cAmt = (amt - 32) * 5/9;
		} else if (from == 'C' && to == 'F') {
			cAmt = amt * 9/5 + 32; 
		} else {
			cAmt = amt;
		}
	return cAmt;

	// Default
	} else {
		return amt;
	}
}
