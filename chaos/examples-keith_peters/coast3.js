window.onload = function() {
	var points = [],
		offset = 0,
		scaleFactor = .35;

	init();

	function init() {

		chaos.init();

		offset = chaos.height / 2;

		points.push({
			x: 0,
			y: chaos.height / 2
		});

		points.push({
			x: chaos.width,
			y: chaos.height / 2
		});

		drawCoast();

		document.body.addEventListener("keyup", function(event) {
			// console.log(event.keyCode);
			switch(event.keyCode) {
				case 32: // space
					iterate();
					drawCoast();
					break;

				case 80: // p
					chaos.popImage();
					break;

				default: 
					break;
			}
		});


	}

	function drawCoast() {
		var length = 0;
		chaos.clear();
		chaos.context.lineWidth = 2;
		chaos.context.beginPath();
		chaos.context.moveTo(points[0].x, points[0].y);
		for(var i = 1; i < points.length; i += 1) {
			chaos.context.lineTo(points[i].x, points[i].y);
			length += measureLine(points[i], points[i - 1]);
		}
		chaos.context.stroke();
		length = Math.round(length * 10) / 10;
		console.log(length);
	}

	function iterate() {
		var newPoints = [];
		for(var i = 0; i < points.length - 1; i += 1) {
			var p0 = points[i],
				p1 = points[i + 1],
				newPoint = {
					x: (p0.x + p1.x) / 2,
					y: (p0.y + p1.y) / 2
				};

			newPoint.x += Math.random() * offset * 2 - offset;
			newPoint.y += Math.random() * offset * 2 - offset;
			newPoints.push(p0, newPoint);
		}
		newPoints.push(points[points.length - 1]);
		points = newPoints;
		offset *= scaleFactor;
	}

	function measureLine(p0, p1) {
		var dx = p1.x - p0.x,
			dy = p1.y - p0.y;
		return Math.sqrt(dx * dx + dy * dy);
	}
}
