<script>
export default {
    name: 'AppFooter',
}
</script>

<template>
    <footer class="bd-footer  mt-5 bg-body-tertiary">
        <section class="footer-section py-4 py-md-5">
            <div class="container-fluid py-md-3 px-5 px-md-3 text-body-secondary shadow">
                <div class="row d-flex">
                    <nav class="d-flex flex-column flex-md-row navbar-expand-md flex-md-nowrap p-3 shadow my-5 bg-navbar shadow">

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Scopri Deliveboo</h4>
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
                            <h4 class="text-uppercase mb-4 front-weight-bold">Note legali</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Termini & Condizioni</a></li>
                                <li class="mb-1"><a href="#">Informativa sulla privaci</a></li>
                                <li class="mb-1"><a href="#">Cookies</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Aiuto</h4>
                            <ul class="list-unstyled">
                                <li class="mb-1"><a href="#">Contatti</a></li>
                                <li class="mb-1"><a href="#">FAQ</a></li>
                                <li class="mb-1"><a href="#">Tipi di cucina</a></li>
                            </ul>
                        </div>

                        <div class="col-md-3 col-sm-6 col-12 footer-links">
                            <h4 class="text-uppercase mb-4 front-weight-bold">Porta Deliveboo con te</h4>
                            <div class="social-links">
                                <ul class="list-unstyled">
                                    <li class="mb-1"><a
                                            href="https://itunes.apple.com/us/app/Deliveboo-della-tua-app/idid-numero-del-tuo-bundle">
                                            <img alt="Disponibile su App Store"
                                                src="https://linkmaker.itunes.apple.com/assets/shared/badges/it-it/appstore-lrg.svg"
                                                height="50" />
                                        </a>
                                    </li>
                                    <li class="mb-1"><a
                                            href="https://play.google.com/store/apps/details?id=nome-del-tuo-pacchetto">
                                            <img alt="Disponibile su Google Play"
                                                src="https://play.google.com/intl/en_us/badges/static/images/badges/it_badge_web_generic.png"
                                                height="65" />
                                        </a>
                                    </li>

                                    <li class="mb-1"><a href="#"><i class="fa-brands fa-facebook"></i></a></li>
                                    <li class="mb-1"><a href="#"><i class="fa-brands fa-instagram"></i></a></li>
                                    <li class="mb-1"><a href="#"><i class="fa-brands fa-twitter"></i></a></li>
                                    <li class="mb-1"><a href="#"><i class="fa-brands fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div class="col-md-7 col-lg-8 text-white">
                        <p><i class="fa-regular fa-copyright"> 2023</i> Deliveboo
                
                        </p>
                    </div>
    
                </div>
            </div>
        </section>
    </footer>
</template>

<style scoped lang="scss">
@use "../styles/partials/mixins" as *;
@use "../styles/partials/variables" as *;

section {
    background-color: rgba(0, 204, 188, 255);
    display: flex;
    align-items: center;
}

.bg-navbar {
    background-color: #2e3333;
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