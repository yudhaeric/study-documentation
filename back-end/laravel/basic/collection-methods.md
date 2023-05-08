## Collection Methods

Collection merupakan kumpulan methods pada laravel yang membantu kita untuk memproses data.

**Menghitung Rata-rata**

```
$nilai = [9,8,7,6,4,8,9,1,10,3,9,7,1,5,3,9];
```

PHP Biasa
1. hitung jumlah nila
2. hitung berapa banyak nilai
3. hitung nilai rata-rata = total nilai / count nilai

```
$countNilai = count($nilai);
$totalNilai = array_sum($nilai);
$nilaiRataRata = $totalNilai / $countNilai;
```

Collection
1. hitung rata-rata nilai

```
$nilaiRataRata = colect($nilai)->avg();
```
**[See All Collection Method Laravel](https://duckduckgo.com)**
