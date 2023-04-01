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
            prime: [
                {
                    image: "/img/ristorante-hamburger1.jpg",
                    description: "Short description of restaurant 1"
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
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 8"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 9"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 8"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 9"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 10"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 11"
                },
                {
                    image: "/img/ristorante-pizzeria.jpg",
                    description: "Short description of restaurant 12"
                },

            ],

            /* titoli delle sezioni */
            title0: 'Scopri i nostri ristoranti',
            title0a: 'Scegli tra centinaia di opzioni per il tuo prossimo pasto',
            title1: 'La selezione di Deliveboo',



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
            title2c: 'Esclusiva Deliveboo',

            //* 3° Sezione
            titele3: 'I tuoi piatti preferiti, consegnati da noi.',
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
            ristoranti13: 'Grom', -->

<template>
    <Jumbotron></Jumbotron>

    <!-- * Main top -->

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
            <div class="slide" v-for="(restaurant, index) in restaurants" :key="index"
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

    <!-- * 1° sezione -->

    <!-- 2 colonne -->
    <div class="container-xl">

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

        <!-- 3 colonne -->
        <div class="card-group gap-4">
            <div class="card shadow">
                <img src="/img/ristorante-dolci.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ title2a }}</h5>
                    <p class="card-text">Dolci piaceri per rendere la giornata ancora più gustosa.</p>
                </div>

            </div>
            <div class="card shadow">
                <img src="/img/ristorante-pizzeria.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ title2b }}</h5>
                    <p class="card-text">Una base leggera per una farcitura sempre diversa.</p>
                </div>

            </div>
            <div class="card shadow">
                <img src="/img/ristorante-giapponesi.jpg" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">{{ title2c }}</h5>
                    <p class="card-text">Le grandi esclusive che scaldano il cuore, selezionate da noi.</p>
                </div>
            </div>
        </div>
    </div>

    <!--* 2° Sezione -->

    <div class="container-xl">
        <h2 class="my-5 fs-1">{{ title1 }}</h2>

        <div class="row">
            <!-- 3 colonne -->
            <div class="card-group gap-4">
                <div class="card shadow">
                    <img src="/img/ristorante-dolci.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ title2a }}</h5>
                        <p class="card-text">Dolci piaceri per rendere la giornata ancora più gustosa.</p>
                    </div>

                </div>
                <div class="card shadow">
                    <img src="/img/ristorante-pizzeria.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ title2b }}</h5>
                        <p class="card-text">Una base leggera per una farcitura sempre diversa.</p>
                    </div>

                </div>
                <div class="card shadow">
                    <img src="/img/ristorante-giapponesi.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">{{ title2c }}</h5>
                        <p class="card-text">Le grandi esclusive che scaldano il cuore, selezionate da noi.</p>
                    </div>
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
}

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
</style>