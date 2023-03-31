<script>
import { store } from '../../store';
export default {
    data() {
        return {
            store
        }
    },
    methods: {
        removeCart(index) {
            store.cart.splice(index, 1)

        },
        totalPrice() {
            store.totalPrice = 0;
            store.cart.forEach(item => {
                store.totalPrice += parseFloat(item.price)
            })
        },
        prova() {
            console.log(store.totalPrice)
        }
    },
    mounted() {
        this.totalPrice()
    }
}
</script>

<template>
    <main>
        <section>
            <div>
                <ul>
                    <li v-for="(item, index) in store.cart" :key="index">
                        <div v-for="(value, beta) in store.cart[index]" :key="beta" class="d-flex">
                            <p><span>{{ value.dish.name }}</span><span class="mx-2">{{ `${value.dish.price}&#8364;` }}</span></p>
                            <p>Quantità: {{ value.quantity }}</p>
                            <div>
                                <button @click="removeCart(index)" class="btn btn-danger btn-sm "><i
                                        class="fa-solid fa-minus"></i></button>

                            </div>

                        </div>
                    </li>
                </ul>
                <button class="btn btn-primary mx-2" @click="totalPrice()">aggiorna totale</button>

            </div>
            <div>
                <h2>Totale: {{ store.totalPrice }}</h2>
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss"></style>