// Get image URLs directly from the gallery
let galleryImages = Array.from(
    document.querySelectorAll(".image-box img")
);

let images = galleryImages.map(img => img.src);

let currentImage = 0;

// Open large image
function openLightbox(index) {
    currentImage = index;

    let lightbox = document.getElementById("lightbox");
    let lightboxImage = document.getElementById("lightboxImage");

    // Use the exact URL of the gallery image
    lightboxImage.src = galleryImages[index].src;

    lightbox.style.display = "flex";
}

// Close large image
function closeLightbox() {
    document.getElementById("lightbox").style.display = "none";
}

// Show next image
function nextImage() {
    currentImage++;

    if (currentImage >= galleryImages.length) {
        currentImage = 0;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage].src;
}

// Show previous image
function previousImage() {
    currentImage--;

    if (currentImage < 0) {
        currentImage = galleryImages.length - 1;
    }

    document.getElementById("lightboxImage").src =
        galleryImages[currentImage].src;
}

// Filter gallery images
function filterImages(category) {
    let imageBoxes = document.querySelectorAll(".image-box");

    imageBoxes.forEach(function(box) {
        if (
            category === "all" ||
            box.classList.contains(category)
        ) {
            box.style.display = "block";
        } else {
            box.style.display = "none";
        }
    });
}

// Close when clicking outside the large image
document.getElementById("lightbox").onclick = function(event) {
    if (event.target === this) {
        closeLightbox();
    }
};