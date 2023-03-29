<script>
import {store} from '../../store';
export default {
    components:{
    

    },
    data(){
        return{
            store
        }
    }
}
</script>
<template>
    <main>
        <section>
            <div class="container">
                <div class="row">
                    <div class="col-3" v-for="(restaurant, index) in store.restaurants" :key="index">
                        <div class="card h-100">
                            <img :src="restaurant.cover_path == null ? 'https://picsum.photos/id/1/200/300' : `${store.url_restaurants}storage/${restaurant.cover_path}`" :alt="restaurant.user.name" class="card-img-top">
                            <div class="card-body d-flex flex-column">
                                <div>
                                    <h4>{{ restaurant.user.name }}</h4>
                                    <h6>Via: {{ restaurant.address }}</h6>
                                </div>
                                <div class="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div>
                                        <p>
                                            <em><strong>Tipologia:</strong></em>
                                        </p>
                                        <div>
                                            <span class="badge bg-success mx-1" v-for="(type, index) in restaurant.types" :key="index">{{type.name}}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            QUESTO è IL BUTTON DEL MENU
                                            <router-link :to="{ name: 'dishes', params: { id: restaurant.id } }" class="btn btn-secondary">Vai al Menù</router-link> 
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
<style lang="scss" scoped>
    
</style>