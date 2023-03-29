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
                console.log(response)
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
            <div >
                
            </div>
        </section>
    </main>
</template>

<style scoped lang="scss">
    
</style>