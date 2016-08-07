# convert - A simple conversion utility jQuery plugin
convert is a jQuery plugin that you can call on a selector to convert from one unit to another. 

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

convert currently only supports weight conversions

Imperial
* dram: dr
* ounce: oz
* pound: lb
* stone: st
* quarter: qr
* hundredweigth: cwt
* ton: ton

Metric
* milligram: mg
* gram: gm
* kilogram: kg
* tonne: Mg