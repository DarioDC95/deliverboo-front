<script>
import axios from 'axios'
import { store } from './store'
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'


export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      store,
    }
  },
  mounted() {
    this.getRestaurants();
  },
  methods: {
    getRestaurants() {
      axios.get(`${store.url_restaurants}api/restaurants?page=${store.current_page}`).then((response) => {
        if (response.data.success) {
          store.restaurants = response.data.result.data;
          store.loading = false;
          store.last_page = response.data.result.last_page;
          store.loading = false;

          console.log(store.restaurants)
        }
        else {
          this.$router.push('/failed');
        }
      })
    },
    changePage() {
      this.getRestaurants();
    }
  }
}
</script>

<template>
  <AppHeader />
  <router-view @increase-by="changePage" @decrease-by="changePage" @selectPage="changePage" />
  <AppFooter />
</template>

<style lang="scss"></style>
