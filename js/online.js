'use strict';
//mask phone
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask('+39 (999) 999-99-99');
im.mask(inputs);


// player

var player = new Playerjs({id:"player", file:"video/promo.mp4" , poster:"../img/poster.webp"});


//SWIPER

var swiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    spaceBetween:50,
    zoom: false,
    speed: 1000,
    effect: 'slide',
    loop: true,
    
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    breakpoints: {
        // // when window width is >= 320px
        // 320: {
        //   slidesPerView: 1,
        //   spaceBetween: 20
        // },
        // // when window width is >= 480px
        // 480: {
        //   slidesPerView: 1,
        //   spaceBetween: 30
        // },
        // // when window width is >= 640px
        1100: {
          slidesPerView: 2,
          spaceBetween: 40
        }
    }
});

// create MODAL

class Modal {

    constructor(id) {
        this.elem = document.getElementById(id);
        this.loadHideListeners();
    }

    show(callback) {
        this.elem.classList.add('_visibility');
        if (callback) callback();
    }

    hide(callback) {
        this.elem.classList.remove('_visibility');
        this.createCloseEvent();
        if (callback) callback();
    }

    createCloseEvent() {
        let event = new Event('modalClose');
        document.dispatchEvent(event);
    }

    // Create event listeners for close modal
    loadHideListeners() {

        // Hide modal when you press close
        this.elem.addEventListener('click', e => {
            if (e.target.classList.contains('modal__close')) {
                this.hide();
            }
        });

        // Also hide modal when you press outside
        this.elem.addEventListener('click', e => {
            if (e.target.classList.contains('modal')) {
                this.hide();
            }
        });
    }

}

// function Initialization Modal

function initialModal(modalNumber) {
    const modal1 = new Modal(`myModal_${modalNumber}`);
    document.getElementById(`showModal_${modalNumber}`).addEventListener('click', (e) => {

        modal1.show();

    });
}


//off scroll if modal open
let body = document.querySelector('.body');
let modal = document.querySelector('.modal');

body.addEventListener('click', (e) => {
    if (modal.classList.contains('_visibility')) {
        body.classList.add('_removeScrole');
    } else {
        body.classList.remove('_removeScrole');
    }
});


// Modals
initialModal(1);
initialModal(2);
initialModal(3);
initialModal(4);
initialModal(5);
initialModal(6);
initialModal(7);

