import Swiper from "swiper";
import {Navigation, Pagination, Autoplay, EffectFade} from "swiper/modules";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
console.log('--- SWIPER VIEW.JS: Start ---');
document.addEventListener('DOMContentLoaded', () => {
    const sliders = document.querySelectorAll('.wp-block-gutenberg-swiper-container.swiper')
    sliders.forEach(slider => {
        const configDataJSON = slider.getAttribute('data-swiper-config');
        const options = configDataJSON ? JSON.parse(configDataJSON) : {};
        try {
            const swiper = new Swiper(slider, {
                modules: [Navigation, Pagination, Autoplay, EffectFade],
                loop: true,
                navigation: {
                    nextEl: slider.querySelector('.swiper-button-next'),
                    prevEl: slider.querySelector('.swiper-button-prev'),
                },
                pagination: {
                    el: slider.querySelector('.swiper-pagination'),
                    clickable: true,
                },
                ...options
            });
        } catch (error) {
        }
    })
})