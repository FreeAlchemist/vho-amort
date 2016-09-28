$("#cost").change(function(){getVal()})
$("#cost").click(function(){getVal()})
$("#spi-month").change(function(){getVal()})
$("#spi-month").click(function(){getVal()})
$("#period").change(function(){getVal()})
$("#period").click(function(){getVal()})
$("#test-period").change(function(){getVal()})
$("#test-period").click(function(){getVal()})
$("#test-sum-day").change(function(){getVal()})
$("#test-sum-day").click(function(){getVal()})
$("#comma-range").change(function(){getVal()})
$("#comma-range").click(function(){getVal()})

function getVal(){
	// var commarange = parseInt($("#comma-range").val())
	// var cost = parseFloat($("#cost").val())
	// var spimonth = parseFloat($("#spi-month").val())
	// var spiyear = spimonth/12
	// var normayear = 100/spiyear
	// var sumyear = cost*normayear/100
	// var normamonth = normayear/12
	// var summonth = sumyear/12
	// var sumday = summonth/30
	// var period = parseFloat($("#period").val())
	// var testsumday = parseFloat($("#test-sum-day").val())
	// var testperiod = parseFloat($("#test-period").val())
	

	var commarange = parseInt($("#comma-range").val())
	console.log(commarange)

	// var floatcost = parseFloat($("#cost").val())
	// var cost = round_mod(floatcost)
	var cost = parseFloat($("#cost").val())

	// var floatspimonth = parseFloat($("#spi-month").val())
	// var floatspimonth = parseInt($("#spi-month").val())
	// var spimonth = round_mod(floatspimonth)
	var spimonth = parseInt($("#spi-month").val())
	console.log(spimonth)
	var spimonth = parseFloat($("#spi-month").val())
	console.log(spimonth)

	// var floatspiyear = parseFloat(spimonth/12)
	// var floatspiyear = parseInt(spimonth/12)
	// var spiyear = round_mod(floatspiyear)
	var spiyear = parseFloat((spimonth/12).toFixed(8))
	console.log(spiyear)
	// var spiyear = parseInt(spimonth/12)
	// console.log(spiyear)

	// var normayear = 100/spiyear
	var testnormayear = 100/spiyear
	// console.log(testnormayear)
	// var normayear = round_mod(testnormayear)
	// console.log(normayear)
	// console.log(testnormayear*100/100)
	// console.log(testnormayear.toFixed(8))
	var normayear = parseFloat(testnormayear.toFixed(commarange))
	console.log(normayear)
	console.log(parseFloat(normayear))

	var testsumyear = (cost*normayear)/100
	console.log(sumyear)
	var sumyear = parseFloat(testsumyear.toFixed(2))
	console.log(sumyear)

	// var normamonth = normayear/12
	// console.log(normamonth)
	var testnormamonth = normayear/12
	console.log(testnormamonth)
	var normamonth = parseFloat(testnormamonth.toFixed(commarange))
	console.log(normamonth)
	console.log(parseFloat(normamonth))

	var testsummonth = sumyear/12
	console.log(summonth)
	var summonth = parseFloat(testsummonth.toFixed(2))
	console.log(summonth)

	var testsumday = summonth/30.4483679583
	console.log(sumday)
	var sumday = summonth/30.4483679583
	console.log(sumday)
	var sumday = parseFloat(testsumday.toFixed(10))
	//31.5619871369
	console.log(sumday)
	// var sumday = round_mod(summonth/30)
	// for(i=30;i<=31;i+=0.11){
	// 	console.log(i+' : '+summonth/i)
	// }
	// console.log(summonth/28)
	// console.log(summonth/29)
	// console.log(summonth/30)
	// console.log(summonth/31)
	/*
	30.4444 : 4.525627044711014 

	*/

	// var floatperiod = parseFloat($("#period").val())
	// var period = round_mod(floatperiod)
	// console.log(period)
	var period = parseFloat($("#period").val())
	console.log(period)

	var sumperiod = parseFloat((sumday*period).toFixed(2))

	// var floattestsumday = parseFloat($("#test-sum-day").val())
	// var testsumday = round_mod(floattestsumday)
	var testsumday = parseFloat($("#test-sum-day").val())

	// var floattestperiod = parseFloat($("#test-period").val())
	// var testperiod = round_mod(floattestperiod)
	var testperiod = parseFloat($("#test-period").val())

	var testsum = parseFloat((testsumday*testperiod).toFixed(2))
	
	
	$("#spi-year").html(spiyear)
	$("#norma-year").html(normayear)
	$("#sum-year").html(sumyear)
	$("#norma-month").html(normamonth)
	$("#sum-month").html(summonth)
	$("#sum-day").html(sumday)

	$("#sum-period").html(sumperiod)

	$("#test-sum-period").html(testsum)

	$("#comma-text").html(commarange)

}

// function round_mod(value){
// 	var precision = parseFloat($("#comma-range").val())
// 	// console.log(precision)
// 	return Math.round(value * precision) / precision
// }

getVal()