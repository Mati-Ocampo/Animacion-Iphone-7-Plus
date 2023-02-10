// Made by Robin Savemark

function background() {
	var background = ["http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_005.jpg", "http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_002.jpg", "http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_001.jpg", "http://www.droidviews.com/wp-content/uploads/2016/09/iOS10_wall_droidviews_010.jpg"];
	var $screen = $("#screen");
	var random = Math.floor(Math.random() * background.length);
	$screen.css({"background-image": "url(" + background[random] + ")"});
};

function internet() {
	var array = ["4G", "<i class='fa fa-wifi'></i>"];
	
	var $internet = $("#internet");
	var random = Math.floor(Math.random() * array.length);
	$internet.html(array[random]);
};

function battery() {
	var percent = ["48%", "97%", "98%", "100%", "50%", "53%", "70%", "69%", "33%", "28%", "21%"];
	var $battery = $("#battery");
	var randomPercent = Math.floor(Math.random() * percent.length);
	
	$battery.html(percent[randomPercent]);
	
	if (percent[randomPercent] === "97%" || percent[randomPercent] ===  "98%" || percent[randomPercent] ===  "100%") {
		$battery.append(" <i class='fa fa-battery-full'></i>");
	} else if (percent[randomPercent] === "48%" || percent[randomPercent] === "50%" || percent[randomPercent] ===  "53%") {
		$battery.append(" <i class='fa fa-battery-half'></i>");
	} else if (percent[randomPercent] === "70%" || percent[randomPercent] === "69%") {
		$battery.append(" <i class='fa fa-battery-three-quarters'></i>");
	} else if (percent[randomPercent] === "33%" || percent[randomPercent] === "28%" || percent[randomPercent] === "21%") {
		$battery.append(" <i class='fa fa-battery-quarter'></i>");
	}
};

function date() {
	var date = new Date();
	var today = new Array(7);
	var month = new Array(12);

	today[0] = "Lunes";
	today[1] = "Martes";
	today[2] = "Miercoles";
	today[3] = "Jueves";
	today[4] = "Viernes";
	today[5] = "Sabado";
	today[6] = "Domingo";

	month[0] = "Enero";
	month[1] = "Febrero";
	month[2] = "Marzo";
	month[3] = "Abril";
	month[4] = "Mayo";
	month[5] = "Junio";
	month[6] = "Julio";
	month[7] = "Agosto";
	month[8] = "Septiembre";
	month[9] = "Octubre";
	month[10] = "Noviembre";
	month[11] = "Deciembre";

	todayIs = today[date.getDay()] + ", " + date.getDate() + " " + month[date.getMonth()];

	$("#date").html(todayIs);
};

function time() {
	var today = new Date();
	var hour = today.getHours();
	var min = today.getMinutes();

	if (hour.toString().length == 1) {
		hour = "0" + hour;
	}

	if (min.toString().length == 1) {
		min = "0" + min;
	}

	$("#time").html(hour + ':' + min);
};

background();
internet();
battery();
date();
time();

$(function() {
	var home = $("#home");
	var text = $(".iphone_screen-text");
	
	home.on("click touchstart", function () {
		background();
		internet();
		battery();
		date();
		time();
		if (text.hasClass("unlock")) {
			text.removeClass("unlock");
		} else {
			text.addClass("unlock");
		}
		setTimeout(function () {
			text.removeClass("unlock");
		}, 800);
	});
});
























































// Matias Ocampo - Web Developer Services