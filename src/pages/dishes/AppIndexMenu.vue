<script>
import {store} from '../../store';
import axios from 'axios';

import AppLoader from '../../components/AppLoader.vue';

export default {
    components: {
        AppLoader,
    },
    data(){
        return{
            store

        }
    },
    mounted(){
        this.getDishes()
    },
    methods:{
        getDishes(){
            store.loading = true;
            axios.get(`${store.url_restaurants}api/dishes/${this.$route.params.id}`).then((response) => {
                if (response.data.success) {
                    store.dishes_by_restaurant = response.data.result;
                    store.loading = false;
                    
                    console.log(store.dishes_by_restaurant)
                }
                else {
                    this.$router.push('/failed');
                }
            })
        },
        addCart(dish){
           store.cart.push(dish)
           console.log(store.cart)
        }

        // removeCart(dish){
        //     store.cart.pop(dish)
        //     console.log(store.cart)
        // }
    }
}
</script>

<template>
    <AppLoader v-if="store.loading"/>
    <main v-else>
        <section class="menu">
            <div class="container">
                <div class="row mt-3 gy-4">
                    <div v-for="(dish, index) in store.dishes_by_restaurant" :key="index" class="col-12 col-sm-6 col-md-3" :class="dish.visible ? '' : 'd-none'">
                        <div class="card h-100">
                            <img :src="dish.image_path == null ? 'https://picsum.photos/id/1/200/300' : `${store.url_restaurants}storage/${dish.image_path}`" :alt="dish.name" class="card-img-top">
                            <div class="card-body d-flex flex-column">
                                <div>
                                    <h4>{{ dish.name }}</h4>
                                </div>
                                <div class="flex-grow-1 d-flex flex-column ">
                                    <div class="mb-2">
                                        <p class="mb-0">
                                            <em><strong>Ingredienti:</strong></em>
                                        </p>
                                        <div>
                                            {{ dish.ingredients }}
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <p class="mb-0">
                                            <em><strong>Descrizione:</strong></em>
                                        </p>
                                        <div>
                                            {{ dish.description }}
                                        </div>
                                    </div>
                                    <div class="mb-4">
                                        <p class="mb-0">
                                            <em><strong>Prezzo:</strong></em>
                                        </p>
                                        <div>
                                            {{ `${dish.price}&#8364;` }}
                                        </div>
                                    </div>
                                    <div class="icons mb-4">
                                        <div class="mb-2">
                                            <div v-if="dish.vegan" class="d-flex align-items-center">
                                                <div class="vegan me-2">
                                                    <i class="fa-solid fa-seedling"></i>
                                                </div>
                                                <div>Vegano</div>
                                            </div>
                                            <div v-else class="d-flex align-items-center">
                                                <div class="no-vegan me-2">
                                                    <div class="slash"></div>
                                                    <i class="fa-solid fa-seedling"></i>
                                                </div>
                                                <div>No Vegano</div>
                                            </div>
                                        </div>
                                        <div>
                                            <div v-if="dish.vegan" class="d-flex align-items-center">
                                                <div class="vegan me-2">
                                                    <i class="fa-solid fa-leaf"></i>
                                                </div>
                                                <div class="text-break">Vegetariano</div>
                                            </div>
                                            <div v-else class="d-flex align-items-center">
                                                <div class="no-vegan me-2">
                                                    <div class="slash"></div>
                                                    <i class="fa-solid fa-leaf"></i>
                                                </div>
                                                <div class="text-break">No Vegetariano</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <button @click="addCart(dish)" class="btn btn-primary btn-sm"><i class="fa-solid fa-plus"></i></button>
                                            <!-- <button @click="removeCart(dish)" class="btn btn-danger btn-sm"><i class="fa-solid fa-minus"></i></button> -->
                                            QUESTO E' IL BUTTON PER AGGIUNGERLO AL CARRELLO
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    .menu {

        .icons {

            .vegan, .no-vegan {
                display: flex;
                align-items: center;
                justify-content: center;
                font-size: 1.5rem;
                min-width: 40px;
                min-height: 40px;
                border-radius: 50%;
                
                .fa-solid {
                    color: green;
                }
            }

            .vegan {
                border: 3px solid green;
            }

            .no-vegan {
                position: relative;
                border: 3px solid red;

                .slash {
                    height: 5px;
                    width: 100%;
                    background-color: red;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%) rotate(45deg);
                }
            }
        }
    }
</style>