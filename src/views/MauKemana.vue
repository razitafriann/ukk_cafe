<template>
    <div class="error-page">
        <h1>403</h1>
        <h2>LOL mau kemana?</h2>
        <p>Maaf, Anda tidak memiliki izin untuk mengakses halaman ini.</p>
        <button class="btn btn-outline-danger" @click="balik">Balik sana</button>
    </div>
</template>

<script>
export default {
    methods: {
        balik() {
            if (localStorage.getItem('role') === 'admin') {
                location.href = '/admin'
            } else if (localStorage.getItem('role' === 'kasir')) {
                location.href = '/kasir'
            } else if (localStorage.getItem('role') === 'manager') {
                location.href = '/manager'
            }
        }
    }
}
</script>
  
<style scoped>
.error-page {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    text-align: center;
}

h1 {
    font-size: 6rem;
    margin-bottom: 1rem;
}

h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
}

p {
    font-size: 1.5rem;
}
</style>