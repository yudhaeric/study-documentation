**Note: Menulis code untuk CRUD itu di file controller masing masing table, Case: UserController.php**

## Eloquent ORM

Eloquent terhubung dengan models, jadi perlu membuat models untuk table yang mau di panggil.

```
use App\Models\User;
```

**Get Data**

```
$user = User::all();
```

**Create Data**

Insert data kita perlu mendaftarkan column mana yang bisa diisi pada models.

```
protected $fillable = [
    'name', 'email'
];
```

Lalu mengisi semua column yang ada pada table.

```
User::create([
    'name' => 'yudha eric pamungkas',
    'email' => 'yudha@gmail.com',
]);
```

**Update Data**

```
User::find(6)->update([
    'name' => 'yudha eric',
    'email' => 'eric@gmail.com',
]);
```

**Delete Data**

Kalau gapakai **find** semua data akan kehapus.

```
User::find(6)->delete();
```

## Query Builder

Query Builder tidak perlu membuat models untuk table yang mau di panggil.

```
use Illuminate\Support\Facades\DB;
```

**Get Data**

```
$user = DB::table('users')->get();
```

**Create Data**

Sama seperti Eloquent Insert data harus mengisi semua column yang ada pada table.

```
DB::table('users')->insert([
    'name' => 'yudha eric pamungkas',
    'email' => 'yudha@gmail.com',
]);
```

**Update Data**

```
DB::table('users')->where('id', 5)->update([
    'name' => "yudha eric",
    'email' => "eric@gmail.com",
]);
```

**Delete Data**

Kalau gapakai **where** semua data akan kehapus.

```
DB::table('users')->where('id', 5)->delete();
```