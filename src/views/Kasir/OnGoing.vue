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
                            <a href="/kasir" class="nav-item nav-link">Home</a>
                            <a href="/transaksi" class="nav-item nav-link">Transaksi</a>
                            <a href="/ongoing" class="nav-item nav-link">Berlangsung</a>
                            <a href="/history" class="nav-item nav-link">History</a>
                            <!-- <a href="/menu" class="nav-item nav-link">Menu</a> -->
                            <a href="#" @click="logout" class="nav-item nav-link">LogOut</a>
                        </div>
                     
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container text-center my-5 pt-5 pb-4">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">On Going</h1>
                        <nav aria-label="breadcrumb">
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->


            <!-- Service Start -->
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h5 class="">Yang Sedang Digunakan</h5>
                    </div>
                    <input type="number" class="form-control mb-4" v-model="cari_meja" placeholder="Cari nomor meja"
                        autocomplete="off">
                    <div class="row g-4">

                        <div data-bs-toggle="modal" data-bs-target="#finish" @click="handleclick(meja)"
                            class="col-lg-3 col-sm-6 wow fadeInUp" v-for="meja in filter_ongoing" :key="meja.id_meja"
                            data-wow-delay="0.3s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-utensils text-primary mb-4"></i>
                                    <h5>Meja Nomor : {{ meja.nomor_meja }}</h5>
                                    <p>
                                        <span v-if="meja.status == 'digunakan'" class="badge bg-danger">Di Gunakan</span>
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            <!-- Service End -->


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

            <!-- FINISH TRANSAKSI -->
            <div class="modal fade" id="finish" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">SELESAIKAN TRANSAKSI</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="selesaitransaksi">
                            <div class="modal-body">
                                <span style="font-family: 'Times New Roman', Times, serif;">ATAS NAMA: <b>{{
                                    detail_ongoing.nama_pelanggan }}</b> </span>
                                <br>
                                <span style="font-family: 'Times New Roman', Times, serif;">TOTAL HARGA: <b>{{
                                    totalharga }}</b> </span>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Selesai</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END FINISH TRANSAKSI -->

            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            ongoing: {},
            totalharga: '',
            detail_ongoing: {},
            cari_meja: ''
        }
    },
    mounted() {
        this.getongoing()
        this.gettotalharga()
    },
    computed: {
        filter_ongoing() {
            let filtered = this.ongoing
            if (this.cari_meja) {
                filtered = filtered.filter(meja => meja.nomor_meja.toString().toLowerCase().includes(this.cari_meja.toLowerCase()))
            }
            return filtered
        }
    },
    methods: {
        getongoing() {
            axios.get('http://localhost:8000/api/getongoing')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.ongoing = data
                    }
                )
        },
        handleclick(meja) {
            this.getdetailtransaksi(meja)
            this.gettotalharga(meja)
        },
        getdetailtransaksi(meja) {
            axios.get('http://localhost:8000/api/get_ongoing_transaksi/' + meja.id_meja)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail_ongoing = data
                    }
                )
        },
        gettotalharga(meja) {
            axios.get('http://localhost:8000/api/gettotalharga/' + meja.id_meja)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.totalharga = data
                    }
                )
        },
        selesaitransaksi() {
            swal({
                icon: 'warning',
                title: 'Complete the transaction?',
                dangerMode: true,
                buttons: true
            }).then(
                (response) => {
                    if (response) {
                        axios.put('http://localhost:8000/api/done_transaksi/' + this.detail_ongoing.id_meja, this.detail_ongoing.id_meja)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success'
                                    })
                                    setTimeout(() => {
                                        location.href = '/printnota/' + this.detail_ongoing.id_pelayanan
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed',
                                        icon: 'error'
                                    })
                                }
                            )
                    }
                }
            )
        },
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