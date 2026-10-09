// Store all image names

let images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg",
    "images/image5.jpg",
    "images/image6.jpg",
    "images/image7.jpg",
    "images/image8.jpg",
    "images/image9.jpg"
];


// Current image number

let currentImage = 0;


// Open lightbox

function openLightbox(index) {

    currentImage = index;

    document.getElementById("lightbox").style.display = "flex";

    document.getElementById("lightboxImage").src =
        images[currentImage];
}


// Close lightbox

function closeLightbox() {

    document.getElementById("lightbox").style.display = "none";
}


// Next image

function nextImage() {

    currentImage++;

    if (currentImage >= images.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src =
        images[currentImage];
}


// Previous image

function previousImage() {

    currentImage--;

    if (currentImage < 0) {
        currentImage = images.length - 1;
    }

    document.getElementById("lightboxImage").src =
        images[currentImage];
}


// Filter images

function filterImages(category) {

    let imageBoxes =
        document.querySelectorAll(".image-box");


    imageBoxes.forEach(function(box) {

        if (category === "all") {

            box.style.display = "block";

        }

        else if (box.classList.contains(category)) {

            box.style.display = "block";

        }

        else {

            box.style.display = "none";

        }

    });
}


// Close lightbox when clicking outside image

document.getElementById("lightbox").onclick =
    function(event) {

        if (event.target === this) {
            closeLightbox();
        }

    };