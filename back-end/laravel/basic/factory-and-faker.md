## Factory

Factory berfungsi untuk seed atau mengisi database secara otomatis tanpa perlu mengisi column satu persatu.

```
php artisan make:factory StudentFactory
```

Pada file Factory kita perlu menulis column apa saja yang mau di isi beserta value nya.

```
use Faker\Factory as faker;

public function definition() {
    $faker = faker::create();
    return [
        'name' => $faker->name(),
        'gender' => Arr::random(['L', 'P']),
        'nim' => mt_rand(0000001, 9999999),
        'class_id' => Arr::random([1, 2, 3, 4],)
    ];
}
```

Lalu pada file seeder kita menjalankan file factory nya, serta tambah count() untuk jumlah data yang mau di tambahkan

```
Student::factory()->count(17)->create();
```

## Faker

Faker merupakan third-party untuk membuat data data palsu atau fake, jadi perlu install manual

```
composer require fakerphp/faker --dev
```

[List data palsu pada faker](https://fakerphp.github.io/)