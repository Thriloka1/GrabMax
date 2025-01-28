function searchImages() {
    let input = document.getElementById('searchBox').value.toLowerCase();
    let images = document.querySelectorAll('.image-container');

    images.forEach(image => {
        let title = image.getAttribute('data-title').toLowerCase();
        if (title.includes(input)) {
            image.style.display = "block";
            
        } else {
            image.style.display = "none";
        }
    });
}
