var car = {
       	make:  'VW',
       	type:  'Beetle',
       	color: 'Green',
		iRunning: false,
       	numberOfTires: 4,
       	seats: [
	       	'seat 1', 
	       	'seat 2',
	       	'seat 3',
	       	'seat 4'
	       	],
	       	turnOn: function () {
	       		this.isRunning = true;
	       	},
	       	fly: function () {
	       		alert('fly');
	       	},
	       	switchCar: function (isOn) {
	       		console.log('turn car' + isOn)
	       		if (isOn == true) {
	       			this.iRunning = true;
	       		} else { 
	       			this.iRunning = false;
	       		}
	       	},
       };
       	console.log('Hello there friends')
