# jconvert - A simple conversion utility jQuery plugin
convert is a jQuery plugin that you can call on a selector to convert from one unit to another. Supports weight, length, volume, and temperature

## Installation

```
npm install jconvert
```

## Usage

* include jquery and convert
* call convert()

```javascript 
	<script src="jquery.min.js"></script>
	<script src="convert.js"></script>
	<script>
	$("#test").convert({
		from: 'ton',
		to: 'lb'
	});
	</script>
```

## Options
* from: the unit you want to convert from (default is oz)
* to: the unit you want to convert from (default is gm)

### Weight Conversions

#### Imperial
* dram: dr
* ounce: oz
* pound: lb
* stone: st
* quarter: qr
* hundredweigth: cwt
* ton: ton

#### Metric
* milligram: mg
* gram: gm
* kilogram: kg
* tonne: Mg

### Length Conversions

#### Standard
* millimeter: mm
* centimeter: cm
* meter: m
* kilometer: km

#### Metric
* inch: in
* foot: ft
* yard: yd
* mile: mi

### Vol Conversions

#### Standard

* fluid Ounce: fl oz
* cup: cup
* pint: pt
* quart: qt
* gallon: gal

#### Metric

* centileter: cl
* milliliter: ml
* liter: l

### Temperature

* celcius: C
* fahrenheit: F

