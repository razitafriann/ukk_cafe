<template>
    <div>
        <div class="container-xxl bg-white p-0">
            <!-- Spinner Start -->
            <!-- <div id="spinner"
                class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
                <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status"> -->
            <!-- <span class="sr-only">Loading...</span> -->
            <!-- </div> -->
            <!-- </div> -->
            <!-- Spinner End -->


            <!-- Navbar & Hero Start -->
            <div class="container-xxl position-relative p-0">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark px-4 px-lg-5 py-3 py-lg-0">
                    <a href="" class="navbar-brand p-0">
                        <h1 class="text-primary m-0"><i class="fa fa-utensils me-3"></i>KAYFE</h1>
                        <!-- <img src="img/logo.png" alt="Logo"> -->
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                        <span class="fa fa-bars"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav ms-auto py-0 pe-4">
                            <a href="/admin" class="nav-item nav-link">Home</a>
                            <a href="/manageuser" class="nav-item nav-link">User</a>
                            <a href="/managetable" class="nav-item nav-link">Table</a>
                            <a href="/managemenu" class="nav-item nav-link">Menu</a>
                            <a href="#" class="nav-item nav-link">About</a>
                            <a href="#" @click="logout" class="nav-item nav-link">Logout</a>

                            <!-- <a href="contact.html" class="nav-item nav-link">Report</a> -->
                        </div>

                    </div>
                </nav>


                <div class="container-xxl py-5 bg-dark hero-header mb-5">
                    <div class="container text-center my-5 pt-5 pb-4">
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Daftar Menu</h1>
                        <nav aria-label="breadcrumb">
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->


            <!-- Menu Start -->
            <div class="container-xxl py-5">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-5">Menu Tersedia</h1>
                    </div>

                    <button class="btn btn-outline-dark mb-4" data-bs-toggle="modal" data-bs-target="#addmenu"><i
                            class="bi bi-cart-plus-fill"></i></button>

                    <input type="text" class="form-control mb-4" v-model="carimenu" placeholder="Search menu...">
                    <div class="tab-class text-center wow fadeInUp" data-wow-delay="0.1s">

                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane fade show p-0 active">
                                <!-- MENU -->
                                <div class="row g-4 mb-5" v-for="menu in filter_menu" :key="menu.id_menu">
                                    <div class="col-lg-6">
                                        <div class="d-flex align-items-center">
                                            <img class="flex-shrink-0 img-fluid rounded"
                                                :src="'http://localhost/razitacafe/public/images/' + menu.foto"
                                                alt="" style="width: 80px;">
                                            <div class="w-100 d-flex flex-column text-start ps-4">
                                                <h5 class="d-flex justify-content-between border-bottom pb-2">
                                                    <span>{{ menu.nama }} <button class="btn btn-outlie-primary"
                                                            data-bs-toggle="modal" @click="getdetail(menu)"
                                                            data-bs-target="#editmenu"><i
                                                                class="bi bi-gear-fill"></i></button></span>

                                                    <span class="text-primary">Rp.{{ menu.harga }}</span>
                                                </h5>
                                               
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <!-- END MENU -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Menu End -->


            <!-- Footer Start -->
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

            <!-- ADD MENU -->
            <div class="modal fade" id="addmenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Tambah Menu</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="upload">
                            <div class="modal-body">

                                <label for="nama">Nama Menu:</label>
                                <input type="text" class="form-control" v-model="menu.nama" required autocomplete="off"
                                    placeholder="Masukkan menu...">

                                <label for="jenis">Jenis: </label>
                                <select class="form-control" v-model="menu.jenis" id="jenis" required>
                                    <option value="makanan">Makanan</option>
                                    <option value="minuman">Minuman</option>
                                </select>

                                <label for="harga">Harga:</label>
                                <input type="number" class="form-control" v-model="menu.harga" required
                                    placeholder="Masukkan harga...">

                                <label for="foto">Foto:</label>
                                <input type="file" id="foto" class="form-control" @change="UploadFoto($event)" required>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                <button type="submit" class="btn btn-primary">Unggah</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END ADD MENU -->

            <!-- EDIT MENU -->
            <div class="modal fade" id="editmenu" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Ubah Menu</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="editmenu">
                            <div class="modal-body">
                                <div class="card" style="width: 18rem;">
                                    <img :src="'http://localhost/UKL-Cafe/cafelaravel/public/images/' + image"
                                        class="card-img-top" alt="...">
                                </div>
                                <hr>
                                <div class="row">
                                    <div class="col">
                                        <label for="nama">Nama Menu:</label>
                                        <input type="text" class="form-control" v-model="detailmenu.nama" required>
                                    </div>

                                    <div class="col">
                                        <label for="harga">Harga:</label>
                                        <input type="number" class="form-control" v-model="detailmenu.harga" required>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col">
                                        <label for="jenis">Jenis:</label>
                                        <select class="form-control" v-model="detailmenu.jenis" required id="jenis">
                                            <option value="makanan">Makanan</option>
                                            <option value="minuman">Minuman</option>
                                        </select>
                                    </div>

                                    <!-- <div class="col">
                                        <label for="foto">Foto:</label>
                                        <input type="file" @change="updatefoto($event)" class="form-control" required
                                            id="foto">
                                    </div> -->
                                </div>

                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                                <button type="button" class="btn btn-danger" @click="removemenu()">Hapus</button>
                                <button type="button" class="btn btn-info" data-bs-toggle="modal"
                                    data-bs-target="#editfoto">Unggah Foto</button>
                                <button type="submit" class="btn btn-primary">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT MENU -->

            <!-- EDIT FOTO -->
            <div class="modal fade" id="editfoto" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Unggah Foto</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <form @submit.prevent="savefoto">
                            <div class="modal-body">
                                <input type="file" class="form-control" @change="updatefoto($event)" id="foto" required>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    aria-label="Close">Tutup</button>
                                <button type="submit" class="btn btn-primary">Simpan</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <!-- END EDIT FOTO -->

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
            menu: {},
            datamenu: {},
            detailmenu: {},
            foto: '',
            image: '',
            carimenu: ''
        }
    },
    mounted() {
        this.getmenu()
        this.getdetail()
    },
    computed: {
        filter_menu() {
            let filter_data = this.datamenu
            if (this.carimenu) {
                filter_data = filter_data.filter(menu => menu.nama.toString().toLowerCase().includes(this.carimenu.toLowerCase()))
            }
            return filter_data
        }
    },
    methods: {
        getmenu() {
            axios.get('http://localhost:8000/api/getmenu')
                .then(
                    ({ data }) => {
                        this.datamenu = data
                    }
                )
        },
        getdetail(menu) {
            axios.get('http://localhost:8000/api/getmenu/' + menu.id_menu)
                .then(
                    (response) => {
                        console.log(response)
                        this.detailmenu.id_menu = response.data[0].id_menu
                        this.detailmenu.nama = response.data[0].nama
                        this.image = response.data[0].foto
                        this.detailmenu.jenis = response.data[0].jenis
                        this.detailmenu.harga = response.data[0].harga
                    }
                )
        },
        UploadFoto(e) {
            this.menu.foto = e.target.files[0]
        },
        upload() {
            let form = new FormData
            form.append('foto', this.menu.foto)
            form.append('nama', this.menu.nama)
            form.append('jenis', this.menu.jenis)
            form.append('harga', this.menu.harga)

            axios.post('http://localhost:8000/api/createmenu/', form)
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
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Upload Menu',
                            button: true
                        })
                    }
                )
        },
        editmenu() {
            // let form = new FormData
            // // form.append("foto", this.detailmenu.foto)
            // form.append("nama", this.detailmenu.nama)
            // form.append("jenis", this.detailmenu.jenis)
            // form.append("harga", this.detailmenu.harga)

            swal({
                title: 'Are you sure?',
                icon: 'warning',
                dangerMode: true,
                buttons: true
            }).then(
                (edit) => {
                    if (edit) {
                        axios.put('http://localhost:8000/api/updatemenu/' + this.detailmenu.id_menu, this.detailmenu)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success Update Menu'
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
                                        icon: 'error',
                                        title: 'Failed Update Menu'
                                    })
                                }
                            )
                    }
                }
            )
        },
        updatefoto(e) {
            this.foto = e.target.files[0]
        },
        savefoto() {
            let form = new FormData
            form.append("foto", this.foto)

            axios.post('http://localhost:8000/api/updatephoto/' + this.detailmenu.id_menu, form)
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
                    (err) => {
                        console.log(err)
                        swal({
                            icon: 'error',
                            title: 'Failed Update Photo',
                            button: true
                        })
                    }
                )
        },
        removemenu() {
            swal({
                icon: 'warning',
                title: 'Are you sure?',
                dangerMode: true,
                buttons: true,
            }).then(
                (deletemenu) => {
                    if (deletemenu) {
                        axios.delete('http://localhost:8000/api/deletemenu/' + this.detailmenu.id_menu)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success remove menu'
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
                                        title: 'Failed remove menu',
                                        icon: 'error',
                                        button: true
                                    })
                                }
                            )
                    } else {
                        swal({
                            icon: 'success',
                            title: 'Your menu is safe',
                            button: true
                        })
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