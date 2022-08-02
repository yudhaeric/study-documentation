### Docker volume

- Docker volume berfungsi untuk penyimpan data di luar container atau pada database, stateful
- Kalo menyimpan data pada container, ketika container di hapus data di dalam nya ikut hilang atau stateless app

### See configuration

- docker volume

### Create a container with docker volume

- docker container create --name mongo -p 27017:27017 -v mongo_data:/data/db mongo:4-xenial