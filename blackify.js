var plist = document.querySelectorAll("p, article, div")

window.onload = function() {
	for (var i = 0; i < plist.length; i++) {
		if (isRGBDark(getRGB(plist[i]))) {
			plist[i].style.color = "rgba(0, 0, 0, 1.0)"
		}
	}
}

function getRGB(element) {
	var col = window.getComputedStyle(element, null).color
	col = col.slice(0,-1).split("(")[1].split(",")
	return col
}

function isRGBDark(rgbArray) {
	var val=105
	return rgbArray[0]<val && rgbArray[1]<val && rgbArray[2]<val
}