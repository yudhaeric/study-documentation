# Component Life Cycle

Hanya class component yang bisa menjalankan life cycle component. Terdapat 3 siklus penting dalam react js:
- componentDidMount: ketika component itu dipasang ingin melakukan apa? biasanya get data dari API, setelah berhasil akan dilakukan render untuk ditampilkan.
- componentDidUpdate: Ketika state dan props ada perubahan, maka dia menjalankan componentDidUpdate. Misal ada suatu form get data, ketika submit dia simpen data ke DB atau API otomatis didalam API ada perubahan.
- componentWillUnmount: Ketika component sudah dicopot atau sudah tidak digunakan lagi. Misal ada component halaman profile, ketika user pindah ke halaman home, halaman profile sudah tidak digunakan maka akan di unmount.