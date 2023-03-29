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
        axios.get(`${store.url_restaurants}api/dishes/${this.$router.params.id}`).then((response) => {
            console.log('sono entrato nella chiamata')
            if (response.data.success) {
            store.dishes_by_restaurant = response.data.result.data;
            store.loading = false;
            
            console.log(store.dishes_by_restaurant)
            }
            else {
            this.$router.push('/failed');
            }
        })
    },
    methods:{
    //     getDishes(){
    //     // axios.get(`${store.url_restaurants}api/dishes/${this.$router.params.id}`).then((response) => {
    //     //     console.log('sono entrato nella chiamata')
    //     //     if (response.data.success) {
    //     //     store.dishes_by_restaurant = response.data.result.data;
    //     //     store.loading = false;
            
    //     //     console.log(store.dishes_by_restaurant)
    //     //     }
    //     //     else {
    //     //     this.$router.push('/failed');
    //     //     }
    //     // })
    //     // }
    // },

    }
}
</script>

<template>
    <main>
        <section>
            <div >
                
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    
</style>