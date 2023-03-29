<script>
    export default {
        name: 'AppHeader',
        data() {
            return {
                
            }
        }
    }
</script>

<template>
    <header class="sticky-top w-100">
        <nav class="navbar flex-row navbar-expand-md flex-md-nowrap p-3 shadow" style="background-color:#159895">
            <div class="container d-flex">
                <a class="navbar-brand col-md-3 col-lg-2 me-0" href=""><img style="width: 10rem" src="" alt=""></a>
            
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse flex-row-reverse" id="navbarSupportedContent">
                    
                    <ul class="navbar-nav me-auto ">
                        <li class="nav-item">
                            <a class="nav-link" href=""></a>
                        </li>
                    </ul>

                    <ul class="navbar-nav ml-auto">
                        
                        <li class="nav-item dropdown">
                            <a id="navbarDropdown" class="nav-link dropdown-toggle text-white" href="#" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre>
                                
                            </a>

                            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                                <a class="dropdown-item" href="">Dashboard</a>
                                <a class="dropdown-item" href=""></a>
                                <a class="dropdown-item" href=""></a>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </header>
</template>

<style scoped lang="scss">
    
</style>