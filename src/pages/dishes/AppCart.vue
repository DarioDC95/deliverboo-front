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

            let cartstorage = store.cart
            localStorage.setItem("cart", JSON.stringify({cartstorage}))
        },
        totalPrice() {
            store.totalPrice = 0;
            for(let i = 0; i< store.cart.length; i++){
                console.log('sono dentro il primo for')
                
                for(let j=0 ; j< store.cart[i].length ; j++){
                    console.log('sono dentro nel secondo for')
                    store.totalPrice += (store.cart[i][j].dish.price * store.cart[i][j].quantity)
                    console.log(store.cart[i][j].dish.price)
                }
            }
        },
        partialPrice(item) {
            let partialPriceOk = 0;

            for(let i = 0; i < item.length; i++) {
                console.log('sono dentro nel secondo for')
                partialPriceOk += item[i].dish.price * item[i].quantity
                console.log(partialPriceOk)
            }

            return partialPriceOk
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
                        <div v-for="(value, beta) in store.cart[index]" :key="beta">
                            <p><span>{{ value.dish.name }}</span><span class="mx-2">{{ `${value.dish.price}&#8364;` }}</span></p>
                            <p>Quantità: {{ value.quantity }}</p>
                            <h5>{{ value.dish.price * value.quantity }}</h5>
                            <div>
                                <button @click="removeCart(index)" class="btn btn-danger btn-sm "><i
                                        class="fa-solid fa-minus"></i></button>

                            </div>

                        </div>
                        <h5>{{ partialPrice(item) }}</h5>
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