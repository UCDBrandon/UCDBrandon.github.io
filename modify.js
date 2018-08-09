var projects = ["PhotoQ", "Bookclub"];

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

function changeImage(id){
    var currentImage = document.getElementById(id);
    var image = currentImage.src;
    console.log(image);
    //Github pages
    //image = image.replace("https://ucdbrandon.github.io/images/", "")
    //Bracket
    image = image.replace("http://127.0.0.1:49823/images/","");
    //Regular open
    //image = image.replace("file:///C:/Users/Brandon/Desktop/UCDBrandon.github.io-master/images/", "");
    if (image.includes("PhotoQ")){
        if (image == "PhotoQ1.png") {
            currentImage.src = "./images/PhotoQ2.png"
        } else if (image == "PhotoQ2.png") {
            currentImage.src = "./images/PhotoQ3.png"
        } else {
            currentImage.src = "./images/PhotoQ1.png"
        }
    } else if (image.includes("Bookclub")){
        if (image == "Bookclub1.png") {
            currentImage.src = "./images/Bookclub2.png"
        } else if (image == "Bookclub2.png") {
            currentImage.src = "./images/Bookclub3.png"
        } else {
            currentImage.src = "./images/Bookclub1.png"
        }
    }
}



setTimeout(hideEnter, 0);
setTimeout(showPage,2000);