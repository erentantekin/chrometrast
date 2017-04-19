var plist = document.querySelectorAll("p, article")

for (var i = 0; i < plist.length; i++) {
	if (isRGBDark(getRGB(plist[i]))) {
		plist[i].style.cssText = "color:rgba(0, 0, 0, 1.0) !important"
		console.log("element number " + i + " is dark enough. SO IM BLACKIFYING IT.")
	}
}


function getRGB(element) {
	//return window.getComputedStyle(element, null).getPropertyValue("color")
	var col = window.getComputedStyle(element, null).color
	col = col.slice(4,-1).split(",")
	return col
}

function isRGBDark(rgbArray) {
	var val=90
	return rgbArray[0]<val && rgbArray[1]<val && rgbArray[2]<val
}