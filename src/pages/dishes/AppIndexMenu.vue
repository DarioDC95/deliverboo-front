<script>
import {store} from '../../store';
import axios from 'axios';
export default {
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
    }
}
</script>

<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div v-for="(dish, index) in store.dishes_by_restaurant" :key="index" class="col-3">
                        <div class="card h-100">
                            <img :src="dish.image_path == null ? 'https://picsum.photos/id/1/200/300' : `${store.url_restaurants}storage/${dish.image_path}`" :alt="dish.name" class="card-img-top">
                            <div class="card-body d-flex flex-column">
                                <div>
                                    <h4>{{ dish.name }}</h4>
                                    <h6>Via: {{ dish.vegan }}</h6>
                                </div>
                                <div class="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div>
                                        <p>
                                            <em><strong>Tipologia:</strong></em>
                                        </p>
                                        <div>
                                            <!-- <span class="badge bg-success mx-1" v-for="(type, index) in restaurant.types" :key="index">{{type.name}}</span> -->
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            QUESTO E' IL BUTTON PER AGGIUNGERLO AL CARRELLO
                                            <!-- <router-link :to="{ name: 'dishes', params: { id: restaurant.id } }" class="btn btn-secondary">Vai al Menù</router-link>  -->
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
    
</style>