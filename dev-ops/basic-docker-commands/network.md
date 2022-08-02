### Docker Network

- Di dalam docker terdapat sebuah network yang berfungsi agar setiap container dapat berkomunikasi. Caranya kita harus membuat network lalu memasukan 3 container nya ke dalam satu network yang sama, saat kita memasukan ke dalam satu network yang sama maka 3 container tersebut dapat berkomunikasi.

### See network configuration
- docker network --help

### Create a network
- docker network create java_network

### See list all network created
- docker network ls

### Connect to network
- docker network connect java_network mongo
- docker network connect java_network redis
- docker network connect java_network java_docker

### See the container is connected to the network
- docker container inspect mongo

### To make it easier for us to create containers and networks, we can use docker compose

- docker-compose.yml | creating file docker compose
- docker-compose --help | see the configuration