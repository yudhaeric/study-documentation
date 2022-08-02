### See image in local computer

- docker images

### Download image from docker hub or repository to local computer

- docker pull mongo:latest | **default tag is latest, we can changes to another version**
- docker login | **For login to docker hub account**

### Change image name
- docker tag appgo:1.0 ricwookie/appgo:1.0

### Upload image to registry, i use docker hub

- docker push ricwookie/appgo:1.0

### Deleting docker image

- docker image rm mongo:4.1

#### NOTED!

- image tidak bisa di hapus kalo masih ada container yang running

