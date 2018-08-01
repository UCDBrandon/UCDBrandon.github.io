function hideEnter() {
	var enter = document.getElementById("enter");
	enter.style.visibility = "hidden";
	enter.style.opacity = "0";
}

function showPage() {
	var enter = document.getElementById("enter");
	var bigDiv = document.getElementById("bigContainer");
	enter.style.display = "none";
	enter.style.margin = "0";
	bigDiv.style.display = "flex";
}

function changeImage(){
    var currentImage = document.getElementById("currentImageMods");
    var image = currentImage.src;
    console.log(currentImage.src);
    image = image.replace("images/", "");
    console.log(image);
    if (image = "project5-1.jpg"){
        currentImage.src = "images/project5-2.jpg";
    } else if (image = "project5-2.jpg") {
        currentImage.src = "images/project5-3.jpg";
    } else {
        currentImage.src = "images/project5-1.jpg";
    }
}



setTimeout(hideEnter, 0);
setTimeout(showPage,2000);