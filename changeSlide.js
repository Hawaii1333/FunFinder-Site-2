function changeSlide(index) {
    slideIndex = index;
    var slider = document.querySelector('.slider');
    slider.style.marginLeft = '-' + (index * 100) + '%';
}
