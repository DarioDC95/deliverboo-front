<script>
import { store } from '../store';
import axios, { formToJSON } from 'axios';
export default {
    data(){
        return{
            store,
        }
    },
    methods:{
        getForm(){
            let dataform = JSON.parse(localStorage.getItem("form"));
            store.form = dataform.formstorage
            console.log(store.form)
            axios.post(`${store.url_restaurants}api/cart`, store.form).then((response) => {
                if (!response.data.success) {
                    store.loading = false
                }
                else {
                    store.form
                    this.success = true,
                    store.loading = false

                }
            })
        },
        totalPrice() {
            store.totalPrice = 0;
            for (let i = 0; i < store.cart.length; i++) {
                for (let j = 0; j < store.cart[i].length; j++) {
                    store.totalPrice += (store.cart[i][j].dish.price * store.cart[i][j].quantity)
                }
            }

            return store.totalPrice
        },

    },
    mounted(){
        this.getForm()
    }
    
}

</script>
<template >
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center my-5">
                <img src="../../img/logo-blue.png" id="logo" alt="logo">
            </div>
            <div class="col-12 text-center my-1">
                <h2>Ottima scelta, {{ store.form.name_client }}</h2>
                <h2>Grazie per il tuo ordine</h2>
            </div>
        </div>

        <div class="col-12 border border-secondary my-2"></div>
        <div class="row mt-2">
            <div class="col-12 d-flex justify-content-between">
                <div class="d-flex flex-column fs-2">
                    <div>
                       Nome: {{ store.form.name_client }}
                    </div>
                    <div>
                      Cognome:  {{ store.form.surname_client }}
                    </div>
                    <div>
                    Email: {{ store.form.email_client }}
                    </div>
                    <div>
                     Via:   {{ store.form.address_client }}
                    </div>
                    <div>
                     Tel:   {{ store.form.phone_client }}
                    </div>
                   

                </div>
                <img src="../../img/rider.gif" class="w-25 " alt=" gif-rider">
            </div>
        </div>
        <div class="col-12 border border-secondary my-2"></div>
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                <h1>Totale</h1>
                <!-- <h1>{{totalPrice()}}&#8364;</h1> -->
            </div>
        </div>
        <div class="col-12 border border-secondary my-2"></div>
        <div class="row">
            <div class="col-12 text-center mt-2">
                <h4>Domande sull ordine?</h4>
                <h5 class="my-4">Chiama il partner al numero +39 333 333 333</h5>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
#logo {
    width: 50vw;
}
</style>
