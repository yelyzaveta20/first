document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper('.product-swiper', {
        slidesPerView: getSlidesPerView(),
        spaceBetween: parseInt(document.querySelector('.product-swiper').dataset.space) || 10,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    function getSlidesPerView() {
        const width = window.innerWidth;
        if (width >= 1024) return parseInt(document.body.dataset.slidesDesktop) || 3;
        if (width >= 768) return parseInt(document.body.dataset.slidesTablet) || 2;
        return parseInt(document.body.dataset.slidesMobile) || 1;
    }

    // 🎨 Фільтрація зображень за кольором
    const variantSelector = document.querySelector('select[name="options[Color]"]');
    if (variantSelector) {
        variantSelector.addEventListener("change", function (e) {
            const selectedColor = e.target.value.toLowerCase();
            document.querySelectorAll('.swiper-slide').forEach(slide => {
                const color = slide.dataset.color;
                slide.style.display = color === selectedColor ? "block" : "none";
            });
            swiper.update();
        });
    }
});
