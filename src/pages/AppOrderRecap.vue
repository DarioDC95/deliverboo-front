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
            axios.post(`${store.url_restaurants}api/cart`, store.form).then((response) => {
                console.log(response)
                if (!response.data.success) {
                    store.loading = false
                }
                else {
                    store.form
                    this.success = true,
                    store.loading = false

                }
            })
        }

    }
}

</script>
<template >
    <div class="container">
        <div class="row">
            <div class="col-12 d-flex justify-content-center my-5">
                <img src="../../img/logo-blue.png" class="w-25" alt="logo">
            </div>
            <div class="col-12 text-center my-1">
                <h2>Ottima scelta, 'nome di chi compra'</h2>
                <h2>Grazie per il tuo ordine</h2>
            </div>
        </div>

        <div class="col-12 border border-secondary my-2"></div>
        <div class="row mt-2">
            <div class="col-12 d-flex justify-content-around">
                <div>
                    
                </div>
                <img src="../../img/rider.gif" class="w-25 " alt=" gif-rider">
            </div>
        </div>
        <div class="col-12 border border-secondary my-2"></div>
        <div class="row">
            <div class="col-12 d-flex justify-content-around">
                <h1>Totale</h1>
                <h1>'total ammount'</h1>
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
<style lang="">
    
</style>
