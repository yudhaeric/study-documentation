### See list of containers

- docker container ls | **running container**
- docker container ls --all | **not running container**

### Creating a container

- docker container create --name mongoserver1 mongo:4.1 | **Container tidak bisa di akses dari luar**
- docker container create --name mongoserver1 -p 8080:27017 mongo:4.1 | **Agar container bisa di akses dari luar kita harus menambahkan port**
- docker container create --name mongoserver1 -p 8080:27017 -e NAME=Docker mongo:4.1 | **Menambahkan environment**
- docker container inspect mongoserver1 | **Untuk melihat semua environment pada images**

#### NOTED!

- Kita bisa membuat banyak container dengan 1 images, namun namanya harus berbeda / unix

### Running a container

- docker container start mongoserver1 mongoserver2

### Stopping a container

- docker container stop mongoserver1 mongoserver2 | **bisa 2 sekaligus**

### Deleting a container

- docker container rm mongoserver1

#### NOTED!

- Kita tidak bisa menghapus container ketika sedang running
