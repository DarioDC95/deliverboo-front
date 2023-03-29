<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                data_navbar: [
                    {
                        label: 'Homepage',
                        routeName: 'homepage'
                    },
                    {
                        label: 'Restaurants',
                        routeName: 'restaurants'
                    },
                ]
            }
        }
    }
</script>

<template>
    <header class="sticky-top">
        <nav class="navbar flex-row navbar-expand-md flex-md-nowrap p-3 shadow" style="background-color:#159895">
            <div class="container-fluid">
                <router-link :to="{ name: 'homepage' }" class="navbar-brand me-0">
                    <img style="width: 10rem" src="../../img/logo-white.png" alt="Logo deliveboo">
                </router-link>
            
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
                    <ul class="navbar-nav">
                        <li v-for="(value, index) in data_navbar" :key="index" class="nav-item">
                            <router-link :to="{ name: value.routeName }" class="nav-link" :class="$route.name == value.routeName ? 'text-white' : ''" aria-current="page" href="#">{{ value.label }}</router-link>
                        </li>
                        <li class="nav-item ms-md-4">
                            <a class="btn btn-info" href="http://127.0.0.1:8000/">Area Clienti</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    
</style>