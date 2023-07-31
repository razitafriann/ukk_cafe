<template>
    <div>
        <div class="container-xxl bg-white p-0">



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
                            <a href="/manager" class="nav-item nav-link">Home</a>
                            <a href="/alltransaction" class="nav-item nav-link">Semua Transaksi</a>
                            <a href="/filtertransaction" class="nav-item nav-link">Filter Transaksi</a>
                            <a href="/profit" class="nav-item nav-link">Profit</a>
                            <a href="#" @click="logout" class="nav-item nav-link">LogOut</a>
                        </div>
                    </div>
                </nav>

                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container text-center my-5 pt-5 pb-4">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Semua Transaksi</h1>
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
                    </div>

                    <input type="text" class="form-control mt-2" v-model="cari_kasir" autocomplete="off"
                        placeholder="Cari nama kasir">

                    <div class="card mt-4" v-for="transaksi in filterdata" :key="transaksi.id_history">
                        <div class="card-header">
                            Transaksi pada tanggal {{ transaksi.tgl_transaksi }}
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Transaksi di layani oleh kasir: {{ transaksi.nama }}</h5>
                            <p class="card-text">Dengan nama pelanggan <b>{{ transaksi.nama_pelanggan }}</b> </p>
                            <a href="#" class="btn btn-outline-dark" data-bs-toggle="modal" data-bs-target="#detail"
                                @click="getfunction(transaksi)">Lihat
                                detail</a>
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

            <!-- DETAIL -->
            <div class="modal fade" id="detail" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">DETAIL</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <table class="table table-hover table-striped">
                                <thead class="bg-light text dark">
                                    <tr>
                                        <th>No</th>
                                        <th>Menu</th>
                                        <th>Jumlah</th>
                                        <th>Harga</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(t, nomor) in detail" :key="nomor">
                                        <td>{{ nomor + 1 }}</td>
                                        <td>{{ t.nama }}</td>
                                        <td>{{ t.total_pesanan }}</td>
                                        <td>{{ t.total_harga }}</td>
                                    </tr>
                                </tbody>
                            </table>
                            <p>Total Harga: <b>{{ total }}</b></p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- END DETAIL -->

            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>

        </div>
    </div>
</template>

<script>
import axios from 'axios'
import swal from 'sweetalert'
// import { filter } from 'vue/types/umd'

export default {
    data() {
        return {
            alltransaction: {},
            cari_kasir: '',
            detail: {},
            total: ''
        }
    },
    mounted() {
        this.gettransaksi()
        this.gettotal()
    },
    computed: {
        filterdata() {
            let filterdata = this.alltransaction
            if (this.cari_kasir) {
                filterdata = filterdata.filter(transaksi => transaksi.nama.toString().toLowerCase().includes(this.cari_kasir.toLowerCase()))
            }
            return filterdata
        }
    },
    methods: {
        gettransaksi() {
            axios.get('http://localhost:8000/api/gethistory')
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.alltransaction = data
                    }
                )
        },
        getfunction(history) {
            this.gettotal(history)
            this.getdetail(history)
        },
        gettotal(history) {
            axios.get('http://localhost:8000/api/gettotal/' + history.id_pelayanan)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.total = data
                    }
                )
        },
        getdetail(history) {
            axios.get('http://localhost:8000/api/gethistory/' + history.id_pelayanan)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.detail = data
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
                            icon: 'success',
                            button: false
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