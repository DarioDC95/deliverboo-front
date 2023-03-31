<script>

import Jumbotron from "../components/Jumbotron.vue";
export default {
    components: { Jumbotron },
    name: "AppHome",
    data() {
        return {
            //* carosello
            title: 'La selezione di Deliveboo',
            description1: 'I grandi classici che scaldano il cuore, perfetti in ogni momento.',
            description2: 'Dolci piaceri per rendere la giornata ancora più gustosa.',
            description3: 'Serve una scusa per stare insieme? Ordina dai ristoranti che trasformeranno la tua serata in un vera festa.',
            description4: 'I più famosi, i più buoni, i preferiti. Quelli che trovi solo su Deliveboo.',

            //* 2° Sezione 
            title2: 'I tuo piatti preferiti, consegnati da noi.',
            title2a: 'Dolci e Dessert',
            title2b: 'Pizzeria e Rosticceria',
            title2c: 'Esclusiva Deliveboo',
            
            ristoranti1: 'McDonald\'s ',
            ristoranti2: 'Nima Sushi',
            ristoranti3: 'Pokèria by NIMA',
            ristoranti4: 'Dauruma Kosher',
            ristoranti5: 'Temakinho',
            ristoranti6: 'Old Wild West',
            ristoranti7: 'Roadhouse',
            ristoranti8: 'Grom',
            ristoranti9: 'KFC',
            ristoranti10: 'La piadineria',
            ristoranti11: 'Berberè Pizzeria',
            ristoranti12: 'Burger King',
            ristoranti13: 'Grom',
        }
    }
}
</script>

<template>
    <Jumbotron></Jumbotron>

    <!-- * main top -->

    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h1 class="fw-bold">Scopri i nostri ristoranti</h1>
                <p class="lead fs-3">Scegli tra centinaia di opzioni per il tuo prossimo pasto</p>
            </div>
        </div>
    </div>

    <!-- * inizio carosello -->

    <div class="container-fluid">
        <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
            </div>
            <div class="carousel-inner shadow">
                <div class="carousel-item shadow active" data-bs-interval="10000">
                    <img src="/img/ristorante-fastfood.jpg" class="d-block w-100" alt="Image-Restaurant">
                    <div class="carousel-caption d-none d-md-block text-white">
                        <div class="">
                            <p class="fs-2">{{ description1 }}</p>
                        </div>
                    </div>
                </div>
                <div class="carousel-item" data-bs-interval="2000">
                    <img src="/img/ristorante-dolci.jpg" class="d-block w-100" alt="Image-Restaurant">
                    <div class="carousel-caption d-none d-md-block text-white">
                        <p class="fs-2">{{ description2 }}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/img/ristorante-giapponesi.jpg" class="d-block w-100" alt="Image-Restaurant">
                    <div class="carousel-caption d-none d-md-block text-white">
                        <p class="fs-2">{{ description3 }}</p>
                    </div>
                </div>
                <div class="carousel-item">
                    <img src="/img/ristorante-pizzeria.jpg" class="d-block w-100" alt="Image-Restaurant">
                    <div class="carousel-caption d-none d-md-block text-white">
                        <p class="fs-2">{{ description4 }}</p>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </div>

    <!-- * fine carosello -->

    <!-- * 1° sezione -->
    <!-- 2 colonne -->

    <div class="container-xl">
        <h2 class="my-3 fs-1">{{ title }}</h2>

        <div class="row my-5 text-center">
            <div class="col-sm-7">
                <div class="card light">
                    <img src="/img/ristorante-giapponesi.jpg" style="height: 15em;" class="card-img-top img-cover "
                        alt="Image-Restaurant">
                    <div class="card-body">
                        <p class="card-text">{{ description3 }}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-5">
                <div class="card">
                    <img src="/img/OIP.jpg" style="height: 15em;" class="card-img-top img-fluid img-cover" alt="Image-Restaurant">
                    <div class="card-body ">
                        <p class="card-text">{{ description4 }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3 colonne -->
        <div class="card-group gap-4">
            <div class="card shadow">
                <img src="/img/ristorante-dolci.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{title2a}}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This content is a little bit longer.</p>
                </div>
                
            </div>
            <div class="card shadow">
                <img src="/img/ristorante-pizzeria.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{title2b}}</h5>
                    <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                </div>
                
            </div>
            <div class="card shadow">
                <img src="/img/ristorante-giapponesi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{title2c}}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional
                        content. This card has even longer content than the first to show that equal height action.</p>
                </div>
            </div>
        </div>
    </div>


    <!-- sezione 2 -->


</template>

<style scoped lang="scss">
//*Carosello

.carousel-item img {
    max-height: 500px;
    /* Altezza massima delle immagini del carosello */
}

.img-cover {
    background-size: cover;
}
</style>