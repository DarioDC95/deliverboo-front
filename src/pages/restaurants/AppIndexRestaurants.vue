<script>
import { store } from '../../store';

import AppLoader from '../../components/AppLoader.vue';

export default {
    components: {
        AppLoader,
    },
    emits: [
        'increase-by',
        'decrease-by',
        'select-page',
    ],
    data() {
        return {
            store,
        }
    },
    methods: {
        increaseByOne() {
            if (store.current_page < store.last_page) {
                store.current_page += 1;
                this.$emit('increase-by')
            }
        },
        decreaseByOne() {
            if (store.current_page > 1) {
                store.current_page -= 1;
                this.$emit('decrease-by')
            }
        },
        selectPage(value) {
            store.current_page = value;
            this.$emit('select-page')
        }
    },
}
</script>

<template>
    <AppLoader v-if="store.loading" />
    <main v-else>
        <section>
            <div class="container mt-5">
                <div class="row gy-4">
                    <div class="col-12 col-sm-6 col-md-3" v-for="(restaurant, index) in store.restaurants" :key="index">
                        <div class="card h-100">
                            <div class="container-img">
                                <img :src="restaurant.cover_path == null ? 'https://picsum.photos/id/1/200/300' : `${store.url_restaurants}storage/${restaurant.cover_path}`"
                                    :alt="restaurant.user.name" class="card-img-top">
                            </div>
                            <div class="card-body d-flex flex-column">
                                <div>
                                    <h4>{{ restaurant.user.name }}</h4>
                                    <h6>Via: {{ restaurant.address }}</h6>
                                </div>
                                <div class="flex-grow-1 d-flex flex-column justify-content-between">
                                    <div class="mb-4">
                                        <p class="mb-0">
                                            <em><strong>Tipologia:</strong></em>
                                        </p>
                                        <div>
                                            <span class="badge bg-success mx-1" v-for="(type, index) in restaurant.types"
                                                :key="index">{{ type.name }}</span>
                                        </div>
                                    </div>
                                    <div>
                                        <div>
                                            <router-link :to="{ name: 'dishes', params: { id: restaurant.id } }"
                                                class="btn btn-secondary">Vai al Menù</router-link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row my-5">
                    <div class="col">
                        <div class="mycard">
                            <div class="d-flex justify-content-center">
                                <button @click="increaseByOne()" class="btn btn-square btn-primary fs-6"
                                    :class="store.current_page == store.last_page ? 'disabled' : ''">&#8680;</button>
                                <ul class="list-unstyled d-flex mb-0">
                                    <li v-for="(value, index) in store.last_page" :key="index">
                                        <button @click="selectPage((value))" class="btn btn-square btn-light"
                                            :class="store.current_page == value ? 'bg-dark-subtle' : ''">{{ value
                                            }}</button>
                                    </li>
                                </ul>
                                <button @click="decreaseByOne()" class="btn btn-square btn-primary fs-6"
                                    :class="store.current_page == 1 ? 'disabled' : ''">&#8678;</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style lang="scss" scoped>
.container-img {
    height: 230px;

    img {
        max-height: 100%;
    }
}
</style>