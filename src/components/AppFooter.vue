<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer class="bd-footer py-4 py-md-5 mt-5 bg-body-tertiary">
        <section class="footer-section ">
            <div class="container py-md-3 px-5 px-md-3 text-body-secondary shadow">
                <div class="row d-flex">
                    <nav class="d-flex flex-column flex-md-row navbar-expand-md flex-md-nowrap p-3 shadow my-5 bg-navbar">
                    
                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4>Scopri Deliveboo</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Investitori</a></li>
                                <li class="mb-1"><a href="#">Chi siamo</a></li>
                                <li class="mb-1"><a href="#">Ristoranti</a></li>
                                <li class="mb-1"><a href="#">Altro</a></li>
                                <li class="mb-1"><a href="#">Programmazione</a></li>
                                <li class="mb-1"><a href="#">Design</a></li>
                                <li class="mb-1"><a href="#">Lavora con noi</a></li>
                                <li class="mb-1"><a href="#">Diventa nostro partner</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4>Note legali</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Termini & Condizioni</a></li>
                                <li class="mb-1"><a href="#">Informativa sulla privaci</a></li>
                                <li class="mb-1"><a href="#">Cookies</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4>Aiuto</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Contatti</a></li>
                                <li class="mb-1"><a href="#">FAQ</a></li>
                                <li class="mb-1"><a href="#">Tipi di cucina</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4>Porta Deliveboo con te</h4>
                            <div class="image-store">
                                <ul class="list-unstyled">
                                    <li class="mb-1"><a href="#">logo App Store</a></li>
                                    <li class="mb-1"><a href="#">logo Google Play</a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section{
    background-color: rgba(0,204,188,255);
    height: 35em;
    display: flex;
    align-items: center;
}
.bg-navbar{
    background-color: #2e3333 ;
    color: #c8c8fa;
} 
.footer-links {
    

    ul li {
        list-style: none;
        

    }

    a {
        text-decoration: none;
        color: #827f7f;

    }
}
</style>