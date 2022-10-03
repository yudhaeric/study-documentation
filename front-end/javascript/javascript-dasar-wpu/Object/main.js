// membuat Object Literal
// variabel dalam object di sebut property
// function di dalam object di sebut method
var mahasiswa = {
    nama : "Yudha",
    umur : 19,
    ips  : [3.00, 2.50, 3.20],
    alamat : {
        jalan : "Siliwangi 2",
        kota  : "Tangerang",
        provinsi : "Banten"
    }
};

// cara memanggilnya
// mahasiswa.nama atau mahasiswa["nama"]
// mahasiswa.ips[1]
// mahasiswa.alamat.kota

// Membuat object dengan Function Declaration
function buatObjectMahasiswa(nama, nim, email, jurusan) {
    var mhs = {};
    mhs.nama = nama;
    mhs.nim = nim;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
}

var mhs1 = buatObjectMahasiswa('Yudha', '41519010072', 'yudha@gmail.com', 'Informatika');
var mhs2 = buatObjectMahasiswa('Eric', '41519010073', 'eric@gmail.com', 'Informatika');
var mhs3 = buatObjectMahasiswa('Pamungkas', '41519010074', 'pamungkas@gmail.com', 'Informatika');

// Membuat object dengan Consturctor
// biasanya nama fungsi di awali huru besar "Mahasiswa"
// untuk membedakan object constructor dan function declaration
function Mahasiswa(nama, nim, email, jurusan) {
    this.nama = nama;
    this.nim = nim;
    this.email = email;
    this.jurusan = jurusan;
}

var mhs4 = new Mahasiswa('Yudha', '41519010072', 'yudha@gmail.com', 'Informatika');
var mhs5 = new Mahasiswa('Eric', '41519010073', 'eric@gmail.com', 'Informatika');
var mhs6 = new Mahasiswa('Pamungkas', '41519010074', 'pamungkas@gmail.com', 'Informatika');