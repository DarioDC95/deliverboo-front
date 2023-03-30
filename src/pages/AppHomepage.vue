<script>

import Jumbotron from "../components/Jumbotron.vue";
export default {
    components: { Jumbotron },
    name: "AppHome",
    data() {
        return {

        }
    }
}
</script>

<template>
    <Jumbotron></Jumbotron>
    <div class="container-delive-section">
        <h2 style="margin-bottom: 35px;">La selezione di Deliveboo</h2>
        <div class="row">
            <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <img src="../../public/img/menu-tag-image.webp" class="card-img-top" alt="panino">
                    <div class="card-body">
                        <p class="card-text">I grandi classici che scaldano il cuore, perfetti in ogni momento.</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Scopri confort food</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <img src="../../public/img/fast-food-dolci-milano-1024x683.jpg" class="card-img-top" alt="dolci">
                    <div class="card-body">
                        <p class="card-text">Dolci piaceri per rendere la giornata ancora più gustosa.</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Scopri i dolci e dessert</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <img src="../../public/img/menu-tag-image.webp" class="card-img-top" alt="piatti">
                    <div class="card-body">
                        <p class="card-text">I grandi classici che scaldano il cuore, perfetti in ogni momento.</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Scopri confort food</a>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-md-6 col-lg-6">
                <div class="card">
                    <img src="../../public/img/menu-tag-image.webp" class="card-img-top" alt="panino">
                    <div class="card-body">
                        <p class="card-text">I grandi classici che scaldano il cuore, perfetti in ogni momento.</p>
                    </div>
                    <div class="card-body">
                        <a href="#" class="card-link">Scopri confort food</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    height: 300px;

    img {
        height: 170px;
    }

    .card-link {
        color: #00ccbc;
        text-decoration: none;
    }
}

.container-delive-section {
    padding: 50px 0 80px;
}
</style>