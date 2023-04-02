<script>

import Jumbotron from "../components/Jumbotron.vue";
export default {
    components: { Jumbotron },
    name: "AppHome",
    data() {
        return {

            //* Carosello
            activeIndex: 0,

            restaurants: [
                {
                    image: "/img/ristorante-hamburger1.jpg",
                    description: "I grandi classici che scaldano il cuore, perfetti in ogni momento."
                },
                {
                    image: "/img/ristorante-dolci.jpg",
                    description: "Short description of restaurant 2"
                },
                {
                    image: "/img/ristorante-foodfotos1.jpg",
                    description: "Short description of restaurant 3"
                },
                {
                    image: "/img/ristorante-giapponesi.jpg",
                    description: "Short description of restaurant 4"
                },
                {
                    image: "/img/ristorante-dolce.jpg",
                    description: "Short description of restaurant 5"
                },
                {
                    image: "/img/ristorante-finger.jpg",
                    description: "Short description of restaurant 6"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 7"
                },

            ],

            //* 2° Sezione
            premiums: [
                {
                    image: "/img/premium/McDonald.webp",
                    description: "McDonald's"
                },
                {
                    image: "/img/premium/nima-sushi.webp",
                    description: "Nima Sushi"
                },
                {
                    image: "/img/premium/Pokeria-by-Nima.webp",
                    description: "Pokèria by NIMA"
                },
                {
                    image: "/img/premium/daruma_kosher.webp",
                    description: "Daruma Kosher"
                },
                {
                    image: "/img/premium/temakinho.webp",
                    description: "Temakinho"
                },
                {
                    image: "/img/premium/pizza-barberè.webp",
                    description: "Berberè Pizzeria"
                },
                {
                    image: "/img/premium/Old-Wild-West-1.jpg",
                    description: "Old Wild West"
                },
                {
                    image: "/img/premium/roadhouse_experience.jpg",
                    description: "Roadhouse"
                },
                {
                    image: "/img/premium/kfc-faxafeni.jpg",
                    description: "KFC"
                },
                {
                    image: "/img/premium/la-piadineria.jpg",
                    description: "La piadineria"
                },
                {
                    image: "/img/premium/burger-king.jpg",
                    description: "Burger King"
                },
                {
                    image: "/img/premium/grom.jpg",
                    description: "Grom"
                },

            ],

            /* titoli delle sezioni */
            title0: 'Scopri i nostri ristoranti',
            title0a: 'Scegli tra centinaia di opzioni per il tuo prossimo pasto',
            title1: 'La selezione di Deliveboo',
            title2: 'I tuoi piatti preferiti, consegnati da noi.',

            /* 1° Sezione */
            description1: 'I grandi classici che scaldano il cuore, perfetti in ogni momento.',
            description2: 'Dolci piaceri per rendere la giornata ancora più gustosa.',
            description3: 'Serve una scusa per stare insieme? Ordina dai ristoranti che trasformeranno la tua serata in un vera festa.',
            description4: 'I più famosi, i più buoni, i preferiti. Quelli che trovi solo su Deliveboo.',

        };
    },
    methods: {
        previousSlide() {
            this.activeIndex =
                (this.activeIndex === 0) ? this.restaurants.length - 1 : this.activeIndex - 1;
        },
        nextSlide() {
            this.activeIndex =
                (this.activeIndex === this.restaurants.length - 1) ? 0 : this.activeIndex + 1;
        }

    }

}
</script>

<!--  
            //* 2° Sezione 
            title2: 'I tuo piatti preferiti, consegnati da noi.',
            title2a: 'Dolci e Dessert',
            title2b: 'Pizzeria e Rosticceria',
            title2c: 'Esclusiva Deliveboo',-->

          

<template>
    <Jumbotron></Jumbotron>

    <!-- * Main top -->

    <!-- Scopri i ristoranti -->
    <div class="container-fluid mt-5">
        <div class="row">
            <div class="col-12 text-center mb-5">
                <h1 class="fw-bold">{{ title0 }}</h1>
                <p class="lead fs-3">{{ title0a }}</p>
            </div>
        </div>
    </div>

    <!-- * Inizio Carosello -->
    <div class="container">
        <div class="carousel">
            <div class="slide shadow" v-for="(restaurant, index) in restaurants" :key="index"
                :class="{ active: index === activeIndex }">
                <img :src="restaurant.image" alt="Restaurant image" class="rounded">
                <p class="description shadow">{{ restaurant.description }}</p>
            </div>
            <div class="controls">
                <button @click="previousSlide" class="prev-btn">&#10094;</button>
                <button @click="nextSlide" class="next-btn">&#10095;</button>
            </div>
        </div>
    </div>
    <!-- * fine carosello -->

    <!-- * 1° sezione - La selezione -->

    <!-- 2 colonne -->
    <div class="container-xl">

        <div class="row">
            <div class="col-12 text-center mb-2 my-5">
                <h1 class="fw-bold">{{ title1 }}</h1>
            </div>
        </div>

        <div class="row my-5 text-center">
            <div class="col-sm-6">
                <div class="card shadow">
                    <img src="/img/ristorante-giapponesi.jpg" style="height: 15em;" class="card-img-top img-cover "
                        alt="Image-Restaurant">
                    <div class="card-body">
                        <p class="card-text">{{ description3 }}</p>
                    </div>
                </div>
            </div>
            <div class="col-sm-6">
                <div class="card shadow " style="height: 100%;">
                    <img src="/img/OIP.jpg" style="height: 15em;" class="card-img-top img-fluid img-cover"
                        alt="Image-Restaurant">
                    <div class="card-body">
                        <p class="card-text">{{ description4 }}</p>
                    </div>
                </div>
            </div>
        </div>

        <!-- 3 colonne - 1° Sezione -->
        <div class="card-group gap-4">
            <div class="card shadow">
                <img src="/img/ristorante-dolci.jpg" class="card-img-top" alt="Image-Restaurant">
                <div class="card-body">
                    <p class="card-text">Dolci piaceri per rendere la giornata ancora più gustosa.</p>
                </div>

            </div>
            <div class="card shadow">
                <img src="/img/ristorante-pizzeria.jpg" class="card-img-top" alt="Image-Restaurant">
                <div class="card-body">
                    <p class="card-text">Una base leggera per una farcitura sempre diversa.</p>
                </div>

            </div>
            <div class="card shadow">
                <img src="/img/ristorante-giapponesi.jpg" class="card-img-top" alt="Image-Restaurant">
                <div class="card-body">
                    <p class="card-text">Le grandi esclusive che scaldano il cuore, selezionate da noi.</p>
                </div>
            </div>
        </div>
    </div>

    <!--* 2° Sezione - I preferiti -->
    <div class="colore-bg bg-warning">
        <div class="container-fluid text-center">
            <h2 class="my-5 fs-1 pt-5">{{ title2 }}</h2>

            <div class="row row-cols-1 text-center d-flex align-content-center text-white">
                <!-- 3 colonne -->
                <div class="d-flex flex-wrap justify-content-center align-content-center" id="gap">
                    <span class="card-group my-2 col-sm-3 col-md-3 col-xl-3 shadow" v-for="(premium, index) in premiums" :key="index">
                        <img :src="premium.image" class="card-img-top img-cover" alt="Image-premium">
                        <div class="card-body p-4">
                            <p class="card-text">{{ premium.description }}</p>
                        </div>
                    </span>
                </div>

            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
//* Carousel

.carousel {
    position: relative;
    margin: 0 auto;
    max-width: 100%;
    height: 22rem;
    overflow: hidden;


    .slide {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        transition: opacity 0.5s ease;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
    }

    .slide.active {
        opacity: 1;
    }

    .slide img {
        width: 100%;
        height: 21rem;
        object-fit: cover;
    }

    .description {
        position: absolute;
        top: 77%;
        left: 50%;
        transform: translate(-50%, -50%);
        padding: 0rem;
        color: white;
        background-color: rgba(0, 0, 0, 0.3);
        font-size: 1.5rem;
        width: 60%;
        max-width: 65%;
        z-index: 1;
    }

    .controls {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        width: 100%;
        display: flex;
        justify-content: space-between;
        z-index: 1;
    }

    .prev-btn,
    .next-btn {
        background-color: rgba(0, 0, 0, 0.2);
        color: white;
        font-size: 2rem;
        /* padding: 0.5rem 1rem; */
        border: none;
        cursor: pointer;
    }

    .prev-btn:hover,
    .next-btn:hover {
        background-color: rgba(0, 0, 0, 0.8);
    }
}

/* Fine Carosello */

//! sezione 1 da visionare
/* .margin-top {
    margin-bottom: 10px;
}

.img-cover {
    object-fit: cover;
}

.carousel-container {
    height: 500px;

    .carousel-height {
        max-height: 100%;
    }
} */

/* 2° Sezione */
#gap {
    grid-template-columns: auto auto auto;
    gap: 20px 50px;
}



</style>