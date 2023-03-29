<script lang="ts">
export default {
    data() {
        return {};
    },
};
</script>
<template>
    <div class="my-container">
        <section id="jumbo" class="jumbotron">
            <div class="container">
                <div class="row">
                    <div class="col-sm-12 col-md-6 col-lg-6 d-flex align-items-center">
                        <h1 class="text-purple"><strong>I piatti che ami a domicilio!</strong> </h1>
                    </div>
                    <div class="col-sm-12 overflow-hidden col-md-6 col-lg-6">
                        <img src="img/deliveboo.png" alt="deliveboo" class="img-fluid img-deliveboo">
                    </div>
                    <div class="row container-button">
                        <div class="btn-jumbo col-6">
                            <!-- <router-link :to="{ name: 'restaurants' }" class="btn mybtn">Scopri i ristoranti</router-link>  -->
                        </div>
                    </div>
                </div>
                <div class="col text-center text-lg-start">
                    <img src="src\assets\" class="img-fluid rotate" alt="" data-aos="zoom-out" data-aos-delay="300" />
                </div>
            </div>
        </section>
    </div>
    <div>
        <CategoryList class="text-center" />
    </div>
</template>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Bungee&display=swap");

.text-purple {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #440063;
}

.my-rotate {
    transform: rotate(180deg);
}

.my-container {
    background-color: #d0eb99;

}

.my-button {
    background-color: #00ccbc;
    width: 100%;

}

.verde {
    background-color: #d0eb99;
}



.form {
    background-color: #fff;
    border-radius: 4px;
    position: relative;
    padding: 24px 35px;
    z-index: 102;

    box-shadow: 0 1px 4px rgba(0, 0, 0, .08);
    display: flex;
    flex-direction: column;

    font-family: sans-serif;
    margin: 0;
    font-weight: 400;

}

.jumbotron h1 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    color: #440063;
}

.jumbotron h2 span {
    color: var(--color-primary);
}

.logo-jumbo {
    width: 300px;
    margin-bottom: -100px;
}
</style>