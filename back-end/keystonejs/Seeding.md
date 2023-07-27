## Seeding Data KeystoneJS 6

Seeding 1 data, untuk melakukan nya kita perlu menambah kan data seed pada file **keystone.ts** pada bagian **onConnect** konfigurasi [database](./Database.md).

```
onConnect: async context => {
    const mutation = gql`
      mutation {
        createCompany_Information(data: { name: "Silicon Valey" }) {
          id
          name
        }
      }
    `;
},
```

**Noted:**

Kita bisa langsung menambah data seed pada **onConnect** (tidak disarankan) karena table database akan selalu di seed atau diisi datanya saat server di start, kita perlu memisahkan seed data ke file tersendiri dan membuat logic agar hanya terisi 1x.

### Seeding Data di File Berbeda

Pertama kita perlu membuat file **seeder.ts** (nama bebas), lalu masukan seed data

Contoh seeding 2 data:

```
import { KeystoneContext } from '@keystone-6/core/types';
import { gql } from 'graphql-tag';

export const seedData = async (context: KeystoneContext) => {
  const mutation = gql`
    mutation Company_Information($name: String!, $address: String!) {
        createCompany_Information(data: { name: $name, address: $address }) {
          id
          name
          address
        }
      }
  `;

  const companyData = {
    name: 'Company ABC',
    address: '123 Main Street',
  };

  await context.graphql.raw({
    query: mutation,
    variables: companyData,
  });
};
```

Lalu pada **onConnect** kita perlu membuat logic agar tidak duplicate seed data

```
// Import juga file seeder yang sudah dibuat

import { seedData } from './seeder';

//  onConnect pada DB Config

onConnect: async context => {
    const isEmpty = await context.db.Company_Information.count();

    if (isEmpty === 0) {
        await seedData(context);
    }
},
```

