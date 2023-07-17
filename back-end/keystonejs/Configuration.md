# KeystoneJS 6 Configuration

Konfigurasi berada pada file **keystone.ts** dengan ekspor default yang dikembalikan dari fungsi config(). List konfigurasi:

```
export default config({
  lists: { /* ... */ },
  db: { /* ... */ },
  ui: { /* ... */ },
  server: { /* ... */ },
  session: { /* ... */ },
  graphql: { /* ... */ },
  extendGraphqlSchema: { /* ... */ },
  storage: { /* ... */ },
  experimental: { /* ... */ },
});
```

### Lists

Opsi konfigurasi 'lists' adalah tempat di mana kita mendefinisikan model data atau skema dari sistem Keystone. Pada KeystoneJS 6 berada pada file **Schema.ts**.

### Database

[Database Configuration](./Database.md)

### Server

[Server Configuration](./Server.md)

