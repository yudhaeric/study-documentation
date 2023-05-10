## Route/Routes/Routing

Ketika website pertama di buka akan membuka tampilan dengan routes '/' dan mereturn tampilan welcome.

**View Route**

```
Route::get('/', function () {
	return view('welcome');
})

// Basic

Route::view('/about', 'about');

// With Argument

Route::view('/about', 'about', ['name' => 'Yudha']);

// Multiple Argument

Route::view('/about', 'about', ['name' => 'Yudha', 'phone' => '0812....']);
```

**Controller Route**

Membuat route dan memanggil sebuah controller serta memanggil function index pada AboutController.

```
use App\Http\Controllers\AboutController

Route::get('/about', [AboutController::class, 'index']);
```

**Redirect Route**

Ketika user mengakses route /about akan di lempar ke /about-us

```
Route::redirect('/about', '/about-us')
```

**Parameters Route**

Route parameter merupakan route yang dapat berubah ubah sesuai id pada produk yang user klik atau {slug}.

```
Route::get('/produk/{id}' function($id) {
	return view('product.detail', ['id' => $id]);
})
```

**Prefix Route**

Ketika ada case yang memiliki awalan route sama seperti '/admin' kita dapat menggunakan prefix agar ketika ada perubahan route lebih mudah merubah nya.

- /admin/profile
- /admin/about
- /admin/contact

```
Route::prefix('admin')->group(function () {
	Route::get('/profil', function() {
        return 'Profil Admin';
    })

	Route::get('/About', function() {
        return 'About Admin';
    })

	Route::get('/contact', function() {
        return 'Contact Admin';
    })

})
```

**Melihat List Route/Kumpulan Route**

```
php artisan route:list
```

