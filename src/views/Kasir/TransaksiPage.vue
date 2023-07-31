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
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Transaksi</h1>
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
                        <h5 class="">Laporan Transaksi</h5>
                        <!-- <h1 class="mb-5">Explore Our Services</h1> -->
                    </div>
                    <a href="/addmenu"><button class="btn btn-outline-dark mb-4 mt-4"><i
                                class="bi bi-cart-plus-fill"></i></button></a>

                    <table class="table table-hover table-striped">
                        <thead>
                            <tr class="bg-dark text-light">
                                <th>No</th>
                                <th>Menu</th>
                                <th>Jumlah</th>
                                <th>Total Harga</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(menu, nomor) in cart" :key="nomor">
                                <td>{{ nomor + 1 }}</td>
                                <td>{{ menu.nama }}</td>
                                <td>{{ menu.total_pesanan }}</td>
                                <td>{{ menu.total_harga }}</td>
                                <td><button class="btn btn-outline-danger" @click="hapus(menu)">Hapus</button></td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-outline-dark mt-3" data-bs-toggle="modal" data-bs-target="#checkout">Check
                        Out</button>
                    <!-- <div class="row g-4">

                        <div class="col-lg-3 col-sm-6 wow fadeInUp" data-wow-delay="0.1s">
                            <div class="service-item rounded pt-3">
                                <div class="p-4">
                                    <i class="fa fa-3x fa-user-tie text-primary mb-4"></i>
                                    <h5>Master Chefs</h5>
                                    <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                                </div>
                            </div>
                        </div>

                    </div> -->
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

            <!-- NEW TRANSAKSI -->
            <div class="modal fade" id="checkout" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Check Out</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="checkoutnow">
                            <div class="modal-body">

                                <label for="user">Kasir:</label>
                                <input type="text" class="form-control" readonly v-model="nama">

                                <label for="meja">Meja</label>
                                <select required class="form-control" v-model="checkout.id_meja" id="meja">
                                    <option v-for="nomor in meja" :key="nomor.id_meja" :value="nomor.id_meja">{{
                                        nomor.nomor_meja }}</option>
                                </select>

                                <label for="nama">Pelanggan:</label>
                                <input type="text" class="form-control" v-model="checkout.nama_pelanggan" required
                                    autocomplete="off" placeholder="Masukkan nama pelanggan...">

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Check Out</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END NEW TRANSAKSI -->

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
            cart: {},
            kasir: {},
            meja: {},
            checkout: {
                id_user: localStorage.getItem('id')
            },
            nama: localStorage.getItem('nama')
        }
    },
    mounted() {
        this.getcart()
        this.getkasir()
        this.getmeja()
    },
    methods: {
        getkasir() {
            axios.get('http://localhost:8000/api/getkasir')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.kasir = data
                    }
                )
        },
        getmeja() {
            axios.get('http://localhost:8000/api/getmejakosong')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.meja = data
                    }
                )
        },
        getcart() {
            axios.get('http://localhost:8000/api/getcart')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.cart = data
                    }
                )
        },
        checkoutnow() {
            swal({
                title: 'Are you sure?',
                icon: 'warning',
                dangerMode: true,
                buttons: true,
            }).then(
                (checkout) => {
                    if (checkout) {
                        axios.put('http://localhost:8000/api/checkout', this.checkout)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success'
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    console.log(error)
                                    swal({
                                        title: 'Failed Check Out',
                                        icon: 'error',
                                        button: true
                                    })
                                }
                            )
                    }
                }
            )
        },
        hapus(menu) {
            axios.delete('http://localhost:8000/api/deletetransaksi/' + menu.id_transaksi)
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