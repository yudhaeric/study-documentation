#### Login
Membuat routes untuk login, dengan AuthenticationController function login.

```
Route::post('/login', [AuthenticationController::class, 'login']);
```

Membuat controller login: 
- Controller login memiliki validate() untuk validasi
- Variable user untuk mencari pengguna berdasarkan alamat email yang diberikan pada tampilan login page akan masuk kedalam permintaan (request).
- Lalu terdapat juga kondisi untuk mengecek apakah variable user ada isinya atau tidak, jika tidak akan muncul pesan, dan jika benar akan membuat token lalu mereturn nya.
- Lalu ketika user berhasil login akan mereturn sebuah token untuk proses authorization.

```
public function login(Request $request) {
    $request->validate([
        'email' => 'required|email',
        'password' => 'required',
    ]);    

    $user = User::where('email', $request->email)->first();

    if (! $user || ! Hash::check($request->password, $user->password)) {
        throw ValidationException::withMessages([
            'email' => ['The provided credentials are incorrect.'],
        ]);
    }

    return $user->createToken("User Login!")->plainTextToken;
}
```

Akses endpoint untuk login, serta masukin email & password pada body, ketika login success saat di send akan muncul sebuah token pada body.

![login](images/postman-login.png)

