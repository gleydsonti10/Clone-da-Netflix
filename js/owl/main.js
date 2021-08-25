$('.owl-carousel').owlCarousel({
    loop:true, // catalago de navegação infinita
    margin:5, // espaçamento entre as imagens5
    nav:false, // <> setas de navegação do catalago 
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
html