import { reactive } from 'vue'

export const store = reactive({
    url_restaurants: 'http://127.0.0.1:8000/',
    loading: true,
    restaurants: null,
    current_page: 1,
    last_page: null,
})