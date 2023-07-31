<template>
    <div class="body bagian-print">
        <div id="nota" class="mt-3">
            <div>

                <b>KAYFE</b><br>
                <small><br>Instagram @kayfeofficial <br>
                    <small>Nama Kasir: {{ kasir }}</small> <br>
                    <span style="text-decoration: underline; color: rgb(255, 0, 0); cursor: pointer;" @click="print()"
                        class="bagian-nonprint">Print</span>
                </small>


                <div class="container">
                    <table class="mt-3 table table-hover table-striped">
                        <thead>
                            <tr class="bg-light text-dark">
                                <td>No</td>
                                <td>Menu</td>
                                <td>Jumlah</td>
                                <td>Total</td>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="(data, nomor) in data_transaksi" :key="nomor">
                                <td>{{ nomor + 1 }}</td>
                                <td>{{ data.nama }}</td>
                                <td>{{ data.total_pesanan }}</td>
                                <td>{{ data.total_harga }}</td>
                            </tr>
                        </tbody>
                    </table>
                    Total Pesanan: {{ total }}
                </div>

                <div class="note">
                    <b>Terima Kasih Atas Kunjungan Anda!</b><br>
                    <small>

                    </small>
                </div>
                <!-- <p style="position: absolute;">print</p> -->
            </div>
        </div>
    </div>
</template>

<style scoped>
@media print {
    .bagian-print {
        display: block !important;
    }

    .bagian-nonprint {
        display: none !important;
    }
}

#nota {
    width: 10cm;
    height: 15cm;
    background-color: #ffffff;
    border: 1px solid #000000;
}

.body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

.note {
    margin-left: 4%;
    margin-right: 35%;
    margin-top: 65%;
    border: 1px solid black;
}
</style>

<script>
import axios from 'axios'

export default {
    data() {
        return {
            data_transaksi: {},
            kasir: localStorage.getItem('nama'),
            total: ''
        }
    },
    mounted() {
        this.getdata(this.$route.params.id)
        this.getharga()
    },
    methods: {
        getdata(id) {
            axios.get('http://localhost:8000/api/gethistory/' + id)
                .then(
                    ({ data }) => {
                        console.log(data)
                        this.data_transaksi = data
                    }
                )
        },
        getharga() {
            axios.get('http://localhost:8000/api/printharga/' + this.$route.params.id)
                .then(
                    (response) => {
                        console.log(response)
                        this.total = response.data
                    }
                )
        },
        print() {
            window.print()
            setTimeout(() => {
                location.href = '/transaksi'
            }, 1200);
        }
    }
}
</script>