<template>
    <div>
        <div class="container-xxl bg-white p-0">

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
                        <h1 class="display-3 text-white mb-3 animated slideInDown">Team Kayfe</h1>
                        <nav aria-label="breadcrumb">
                           
                        </nav>
                    </div>
                </div>
            </div>
            <!-- Navbar & Hero End -->


            <!-- Team Start -->
            <div class="container-xxl pt-5 pb-3">
                <div class="container">
                    <div class="text-center wow fadeInUp" data-wow-delay="0.1s">
                        <h1 class="mb-5">Registrasi Anggota Kayfe</h1>
                    </div>
                    <button style="border-radius: 10px;" class="btn btn-outline-dark mb-4" data-bs-toggle="modal"
                        data-bs-target="#addUser"><i class="bi bi-person-plus"></i></button>
                    <table class="table table-hover table-striped">
                        <thead>
                            <tr class="bg-dark text-light">
                                <th>Urutan</th>
                                <th>Nama</th>
                                <th>Email</th>
                                <th>Gender</th>
                                <th>Peran</th>
                                <th>Aksi</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(user, number) in datauser" :key="number">
                                <td>{{ number + 1 }}</td>
                                <td>{{ user.nama }}</td>
                                <td>{{ user.email }}</td>
                                <td>
                                    <span v-if="user.gender == 'L'">Laki-laki</span>
                                    <span v-else>Perempuan</span>
                                </td>
                                <td>{{ user.role }}</td>
                                <td>
                                    <div class="btn-group" role="group" aria-label="Basic example">
                                        <button type="button" class="btn btn-outline-primary" data-bs-toggle="modal"
                                            data-bs-target="#edituser" @click="getdetail(user)"><i
                                                class="bi bi-gear-fill"></i></button>
                                        <button type="button" class="btn btn-outline-info"><i
                                                class="bi bi-eye-fill"></i></button>
                                        <button type="button" class="btn btn-outline-danger" @click="deleteuser(user)"><i
                                                class="bi bi-trash-fill"></i></button>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <!-- Team End -->


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


            <!-- Back to Top -->
            <a href="#" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></a>
        </div>

        <!-- MODAL ADD USER -->
        <div class="modal fade" id="addUser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">Tambah Anggota</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="save">
                        <div class="modal-body">
                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="user.nama" required autocomplete="off"
                                placeholder="Nama">

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="user.email" required autocomplete="off"
                                placeholder="Email">

                            <label for="gender">Gender:</label>
                            <select id="gender" class="form-control" required v-model="user.gender">
                                <option value="L" style="background-color:blue; color:white;">Laki-Laki</option>
                                <option value="P" style="background-color:pink; color:white;">Perempuan</option>
                            </select>

                            <label for="password">Password:</label>
                            <input type="password" class="form-control" v-model="user.password" required
                                placeholder="Password">

                            <label for="role">Peran:</label>
                            <select v-model="user.role" id="role" class="form-control" required>
                                <option value="kasir">Kasir</option>
                                <option value="Admin">Admin</option>
                                <option value="Manager">Manager</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                            <button type="submit" class="btn btn-primary">Tambahkan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL ADD USER -->


        <!-- MODAL EDIT USER -->
        <div class="modal fade" id="edituser" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
            aria-labelledby="staticBackdropLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="staticBackdropLabel">Edit Anggota</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <form @submit.prevent="edituser">
                        <div class="modal-body">

                            <label for="nama">Nama:</label>
                            <input type="text" class="form-control" v-model="edit.nama" required autocomplete="off">

                            <label for="email">Email:</label>
                            <input type="email" class="form-control" v-model="edit.email" required autocomplete="off">

                            <label for="gender">Gender:</label>
                            <select class="form-control" v-model="edit.gender" required id="gender">
                                <option value="L" style="background-color: lightblue; color:black;">Laki-laki</option>
                                <option value="P" style="background-color: pink; color:black;">Perempuan</option>
                                <option value="L">Walmart Bag</option>
                            </select>

                            <label for="password">Password:</label>
                            <input type="password" class="form-control" v-model="edit.password" required>

                            <label for="Role">Peran:</label>
                            <select class="form-control" v-model="edit.role" required id="Role">
                                <option value="admin">Admin</option>
                                <option value="kasir">Kasir</option>
                                <option value="manager">Manager</option>
                            </select>

                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
                            <button type="submit" class="btn btn-primary">Simpan</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        <!-- END MODAL EDIT USER -->
    </div>
</template>
<script>
import axios from 'axios'
import swal from 'sweetalert'

export default {
    data() {
        return {
            user: {},
            datauser: {},
            detail: {},
            edit: {},

        }
    },
    mounted() {
        this.getuser()
        // this.getdetailuser()
    },
    methods: {
        tes() {
            console.log('P udah nih')
        },
        getuser() {
            axios.get('http://localhost:8000/api/getuser')
                .then(
                    ({ data }) => {
                        this.datauser = data
                        console.log(data)
                    }
                )
        },
        getdetail(user) {
            axios.get('http://localhost:8000/api/getuser/' + user.id_user)
                .then(
                    (response) => {
                        // console.log(data)
                        this.edit = response
                        this.edit.id_user = response.data[0].id_user
                        this.edit.nama = response.data[0].nama
                        this.edit.email = response.data[0].email
                        this.edit.password = response.data[0].password
                        this.edit.gender = response.data[0].gender
                        this.edit.role = response.data[0].role
                        // this.nama = response.data[0].nama
                    }
                )
        },
        save() {
            swal({
                icon: 'warning',
                title: 'You sure?',
                dangerMode: true,
                buttons: true
            }).then(
                (save) => {
                    if (save) {
                        axios.post('http://localhost:8000/api/createuser', this.user)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'Success',
                                    })
                                    setTimeout(() => {
                                        location.reload()
                                    }, 1200);
                                }
                            )
                            .catch(
                                (error) => {
                                    if (error.response || error.response.status === 422) {
                                        swal({
                                            icon: 'error',
                                            title: 'Email is already taken',
                                            button: true
                                        })
                                    }
                                }
                            )
                    }
                }
            )
        },
        edituser() {
            swal({
                icon: 'warning',
                title: 'Apakah yakin?',
                dangerMode: true,
                buttons: true
            }).then(
                (save) => {
                    if (save) {
                        axios.put('http://localhost:8000/api/updateuser/' + this.edit.id_user, this.edit)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        icon: 'success',
                                        title: 'success',
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
                                        title: 'Failed Update User',
                                        buttons: true
                                    })
                                }
                            )
                    }
                }
            )
        },
        deleteuser(user) {
            swal({
                icon: 'warning',
                title: 'Anda Yakin?',
                dangerMode: true,
                buttons: true
            }).then(
                (hapus) => {
                    if (hapus) {
                        axios.delete('http://localhost:8000/api/deleteuser/' + user.id_user)
                            .then(
                                (response) => {
                                    console.log(response)
                                    swal({
                                        title: 'Success',
                                        icon: 'success',
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
                                        title: 'Failed delete user '
                                    })
                                }
                            )
                    } else {
                        swal({
                            icon: 'success',
                            title: 'Data Anda Aman',
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
