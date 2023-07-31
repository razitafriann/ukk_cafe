<template>
    <div>
        <div class="container-xxl bg-white p-0">
            <!-- Spinner Start -->
            <!-- <div id="spinner"
                class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                    <span class="sr-only">Loading...</span>
                </div>
            </div> -->
            <!-- Spinner End -->


            <!-- Navbar & Hero Start -->
            <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>Kayfe</h1>
                        <!-- <img src="img/logo.png" alt="Logo"> -->
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0 pe-4">
                            <a href="/kasir" class="nav-item nav-link active">Home</a>
                            <a href="/transaksi" class="nav-item nav-link">Transaksi</a>
                            <a href="/ongoing" class="nav-item nav-link">Berlangsung</a>
                            <a href="/history" class="nav-item nav-link">History</a>
                            <!-- <a href="/menu" class="nav-item nav-link">Menu</a> -->
                            <a href="#" @click="logout" class="nav-item nav-link">LogOut</a>
                        </div>
                     
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container my-5 py-5">
                        <div class="row align-items-center g-5">
                            <div class="col-lg-6 text-center text-lg-start">
                                <h1 class="display-3 text-white animated slideInLeft">Welcome<br> "Kasir" Kayfe</h1>
                            </div>
                            <div class="col-lg-6 text-center text-lg-end overflow-hidden">
                                <img class="img-fluid" src="" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->


            <!-- Service Start -->
           
            <!-- Service End -->


            <!-- About Start -->
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="row g-5 align-items-center">
                        <div class="col-lg-6">
                            <div class="row g-3">
                                <div class="col-6 text-start">
                                    
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-6">
                            <h5 class="">Tentang Kami</h5>
                            <h1 class="mb-4">Welcome to <i class="fa fa-utensils text-primary me-2"></i>Kayfe</h1>
                            <p class="mb-4">Selamat datang di Coffeeshop kami, tempat yang sempurna untuk menikmati secangkir kopi yang nikmat!

Jelajahi dunia rasa kopi dengan menu kami yang beragam, dan nikmati setiap tegukan yang kaya dan aromatik yang akan memanjakan lidah Anda.</p>
                            <p class="mb-4">Jangan lewatkan juga pilihan makanan ringan kami yang lezat, seperti spagheti, roti panggang, dan snack.

Kunjungi kami sekarang di Coffeeshop kami, dan biarkan kami membawa Anda dalam perjalanan nikmat rasa kopi yang tak terlupakan.</p>
                            <div class="row g-4 mb-4">
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">
                                        </h1>
                                        <div class="ps-4">
                                        
                                        </div>
                                    </div>
                                </div>
                                <div class="col-sm-6">
                                    <div class="d-flex align-items-center border-start border-5 border-primary px-3">
                                        <h1 class="flex-shrink-0 display-5 text-primary mb-0" data-toggle="counter-up">
                                        </h1>
                                        <div class="ps-4">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- About End -->


            <!-- Menu Start -->
            
            <!-- Menu End -->


            <!-- Reservation Start -->
           
            <!-- Reservation Start -->


            <!-- Team Start -->
            
            <!-- Team End -->


            <!-- Testimonial Start -->
           
            <!-- Testimonial End -->


            <!-- Footer Start -->
            <div class="container-fluid bg-dark text-light footer pt-5 mt-5 wow fadeIn" data-wow-delay="0.1s">
                <div class="container py-5">
                    <div class="row g-5">
                        <div class="col-lg-3 col-md-6">
                            <h4 class="">Company</h4>
                            <a class="btn btn-link" href="">About Us</a>
                            <a class="btn btn-link" href="">Contact Us</a>
                            <a class="btn btn-link" href="">Reservation</a>
                            <a class="btn btn-link" href="">Privacy Policy</a>
                            <a class="btn btn-link" href="">Terms & Condition</a>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="">Contact</h4>
                            <p class="mb-2"><i class="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
                            <p class="mb-2"><i class="fa fa-phone-alt me-3"></i>+012 345 67890</p>
                            <p class="mb-2"><i class="fa fa-envelope me-3"></i>info@example.com</p>
                            <div class="d-flex pt-2">
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-twitter"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-facebook-f"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-youtube"></i></a>
                                <a class="btn btn-outline-light btn-social" href=""><i class="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="">Opening</h4>
                            <h5 class="text-light fw-normal">Monday - Saturday</h5>
                            <p>09AM - 09PM</p>
                            <h5 class="text-light fw-normal">Sunday</h5>
                            <p>10AM - 08PM</p>
                        </div>
                        <div class="col-lg-3 col-md-6">
                            <h4 class="">Newsletter</h4>
                            <div class="position-relative mx-auto" style="max-width: 400px;">
                                <input class="form-control border-primary w-100 py-3 ps-4 pe-5" type="text"
                                    placeholder="Your email">
                                <button type="button"
                                    class="btn btn-primary py-2 position-absolute top-0 end-0 mt-2 me-2">SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="container">
                    <div class="copyright">
                        <div class="row">
                            <div class="col-md-6 text-center text-md-start mb-3 mb-md-0">
                                &copy; <a class="border-bottom" href="#">Your Site Name</a>, All Right Reserved.

                                <!--/*** This template is free as long as you keep the footer author’s credit link/attribution link/backlink. If you'd like to use the template without the footer author’s credit link/attribution link/backlink, you can purchase the Credit Removal License from "https://htmlcodex.com/credit-removal". Thank you for your support. ***/-->
                                Designed By <a class="border-bottom" href="https://htmlcodex.com">HTML Codex</a><br><br>
                                Distributed By <a class="border-bottom" href="https://themewagon.com"
                                    target="_blank">ThemeWagon</a>
                            </div>
                            <div class="col-md-6 text-center text-md-end">
                                <div class="footer-menu">
                                    <a href="">Home</a>
                                    <a href="">Cookies</a>
                                    <a href="">Help</a>
                                    <a href="">FQAs</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Footer End -->


            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>
    </div>
</template>

<script>
import swal from 'sweetalert'

export default {
    data() {
        return {

        }
    },
    methods: {
        logout() {
            swal({
                icon: 'warning',
                title: 'Ingin Log Out?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        localStorage.removeItem('role')
                        localStorage.removeItem('token')
                        swal({
                            icon: 'success'
                        })
                        setTimeout(() => {
                            location.href = '/'
                        }, 1200);
                    }
                }
            )
        }
    }
}
</script>