## layanan komputasi (compute)

### Google Compute Engine (GCE)
Google Compute Engine menyediakan virtual machines (VM) yang berjalan pada jaringan data center Google. Digunakan bagi Anda yang memerlukan kontrol penuh atas infrastruktur yang digunakan dan konfigurasi yang spesifik. Ketika membuat instance kita perlu menentukan zone, sistem operasi, dan jenis mesin yang akan digunakan. Kemudian untuk mengakses VM ini Anda bisa menggunakan Secure Shell (SSH) pada sistem operasi Linux atau Remote Desktop Protocol (RDP) pada Windows Server.

#### Preemptible VM
Preemptible VM adalah sebuah instance VM yang bisa kita buat dan gunakan dengan harga yang jauh lebih murah daripada instance normal. Dengan menggunakan preemptible VM kita bisa menghemat hingga 80 persen pengeluaran untuk compute engine. Namun, preemptible ini memiliki beberapa keterbatasan seperti hanya bertahan selama 24 jam atau bisa di-terminate kurang dari 24 jam jika ada tugas lain yang membutuhkan sumber daya. Preemptible sangat cocok bagi Anda yang membutuhkan sumber daya komputasi secara cepat untuk jangka waktu yang pendek serta tidak membutuhkan ketersediaan yang tinggi.

#### Instance templates
Instance template sangat berguna bagi kita untuk menyimpan konfigurasi pada sebuah VM. Ketika kita membuat sebuah instance template, nantinya konfigurasi ini bisa langsung kita gunakan ketika membuat VM instance baru dengan konfigurasi yang identik. Selain itu instance template diperlukan untuk membuat VM yang bisa autoscale menggunakan managed instance group.

#### Instance groups
Instance groups memungkinkan kita mengelompokkan beberapa VM instance dan mengaturnya sebagai satu entitas. Terdapat 2 jenis instance groups, yaitu Managed instance groups dan Unmanaged instance groups.

Managed instance groups (MIG) terdiri dari beberapa VM instance yang identik. Karena instance yang ada di dalam MIG bersifat identik atau sama, maka untuk membuat MIG kita memerlukan instance template. MIG memiliki beberapa kelebihan, antara lain:

- Ketersediaan tinggi, ketika sebuah instance di dalam instance group mengalami crash atau terhenti, MIG akan secara otomatis membuat ulang instance tersebut. MIG juga dilengkapi dengan health check yang berfungsi untuk memantau apakah sebuah instance telah berjalan dengan baik dan benar, jika tidak maka instance tersebut akan dihapus lalu dibuat ulang. MIG juga memiliki sistem load balancing yang bertugas untuk membagi beban kerja kepada setiap instance yang ada di dalam instance group.
- Skalabilitas, ketika membuat sebuah managed instance group, kita perlu menentukan jumlah instance minimal dan maksimal yang ada di dalam instance group. MIG mendukung autoscaling, di mana ketika beban yang diterima sebuah instance sudah terlalu besar, maka MIG akan secara otomatis membuat instance baru dan menghapusnya ketika beban sudah berkurang.
- Update otomatis, di dalam distribusi aplikasi dikenal istilah rolling update. Istilah ini menggambarkan situasi ketika host melakukan pembaruan pada aplikasi yang sedang berjalan tanpa ada downtime atau membuat aplikasi menjadi offline. MIG mendukung beberapa skenario untuk update secara mudah dan aman.
- Unmanaged instance groups bersifat heterogen. Jenis instance group ini digunakan untuk mengelompokkan VM meskipun tidak identik atau memiliki template yang sama. Unmanaged instance group tidak memiliki fitur autoscaling, auto-healing, atau auto update seperti managed instance group.

### Google Kubernetes Engine (GKE).
Layanan Kubernetes terkelola yang berfungsi untuk mengatur Docker containers. GKE memungkinkan Anda mengembangkan aplikasi container pada cluster server. Google Kubernetes Engine adalah layanan dari Google Cloud Platform untuk mengelola Kubernetes. Kubernetes sendiri adalah sebuah container orchestrator yang berfungsi untuk menjalankan container di dalam cluster VM, memantau kondisi container, dan mengelola siklus hidup dari VM instance.

Container adalah sebuah mekanisme pengemasan aplikasi yang dapat diabstraksi dari lingkungan aplikasi tersebut dijalankan. Singkatnya, container adalah paket aplikasi yang memungkinkan kita bisa melakukan deployment dengan cepat dan konsisten di beberapa lingkungan yang berbeda seperti data center, cloud publik, perangkat personal dari developer.

Container seringkali dibandingkan dengan virtual machines (VM) karena keduanya merupakan mekanisme virtualisasi. Namun, container memiliki ukuran yang relatif lebih kecil karena tidak menyertakan sistem operasi di dalam paketnya seperti pada VM.

Selain memiliki performa yang lebih tinggi dan ukuran yang lebih kecil, container memiliki beberapa kelebihan lain yang bisa menjadi pertimbangan dalam pengembangan aplikasi, antara lain:

- Lingkungan yang konsisten, dengan container, developer bisa menentukan software dependency seperti versi bahasa atau library yang digunakan, tentunya ini memudahkan proses devops karena aplikasi yang digunakan akan tetap konsisten meskipun berjalan di banyak tempat.
- Jalankan di mana saja, container bisa berjalan di data center, cloud publik, dan berbagai jenis sistem operasi seperti Linux, Windows, dan Mac.

#### Arsitektur Kubernetes Cluster
Instance dari GKE dikenal dengan sebutan cluster. Setiap cluster terdiri dari sebuah cluster master dan satu atau beberapa nodes. Cluster master bertugas untuk mengatur cluster dan mengelola layanan yang disediakan oleh Kubernetes, seperti Kubernetes API, controllers, dan schedulers. Untuk berinteraksi dengan cluster, kita perlu menggunakan perintah kubectl.

Node adalah VM yang menjalankan aplikasi di dalam container. Node berkomunikasi dengan cluster master melalui agent bernama kubelet. Sama seperti membuat VM, ketika membuat cluster, kita perlu menentukan jenis mesin yang akan digunakan untuk menjalankan containers.

Ada beberapa objek dan konsep yang digunakan di dalam Kubernetes dan perlu kita pahami, antara lain:

- Pods adalah objek terkecil di dalam Kubernetes dan bertugas untuk menjalankan proses di dalam cluster. Pods terdiri dari satu container atau lebih. Pada umumnya pod hanya menggunakan satu container, kecuali untuk beberapa penggunaan yang lebih advanced alias kompleks. Beberapa container yang ada di dalam pod bekerja sebagai satu entitas dan saling berbagi sumber daya pada pod.

- Deployment merepresentasikan kumpulan beberapa pods yang identik. Deployment akan menjalankan beberapa replika dari aplikasi dan secara otomatis menggantikan instance yang mengalami kegagalan atau tidak responsif. Ini memungkinkan aplikasi memiliki ketersediaan yang tinggi bagi pengguna.

- Service, Setiap pod di dalam cluster memiliki alamat IP internal. Ketika pod telah menyelesaikan siklus hidupnya, maka pod akan dihapuskan. Begitu juga ketika aplikasi berjalan lalu pod terdeteksi sedang dalam kondisi “tidak sehat” pod bisa dihapus dan dibuat ulang. Alamat IP baru akan diberikan kepada pod baru yang menggantikannya. Tentunya hal ini menyebabkan komunikasi di dalam cluster tidak bisa bergantung terhadap alamat IP. Untuk mengatasi ini, kita bisa menggunakan service.

Service adalah sebuah objek yang menyediakan API endpoint dengan alamat IP yang stabil. Service juga berperan sebagai load balancer untuk membagi beban pekerjaan kepada masing-masing cluster.

Terdapat 5 jenis service:

- ClusterIP (default): digunakan untuk klien internal yang perlu mengakses IP internal.
- NodePort: klien mengirim request ke alamat IP dan port pada sebuah node. NodePort merupakan ekstensi dari ClusterIP, sehingga NodePort pasti memiliki ClusterIP
- LoadBalancer: klien mengirim request ke alamat IP dari sebuah network load balancer. ClusterIP dan NodePort termasuk di dalam LoadBalancer.
- ExternalName: klien internal menggunakan DNS dari sebuah service sebagai alias dari external DNS.
- Headless: digunakan ketika membutuhkan pod grouping, namun tidak membutuhkan IP yang stabil.

#### ReplicaSet
ReplicaSet adalah salah satu controller yang digunakan pada deployment. Controller ini bertugas untuk memastikan jumlah pods yang berjalan telah sesuai. Ketika sebuah pod harus dihapus karena mengalami kegagalan, ReplicaSet akan mendeteksi bahwa tidak terdapat cukup pods untuk menjalankan aplikasi dan akan membuat pods baru.

#### StatefulSet
Pada umumnya, deployment digunakan untuk stateless application. Untuk beberapa kasus, kita mungkin memerlukan aplikasi yang bisa menyimpan state atau kondisi aplikasi seperti hasil kalkulasi atau penyimpanan data. StatefulSet memberikan ID unik kepada pods, ini memungkinkan Kubernetes untuk menandai pod mana yang digunakan oleh client. StatefulSet digunakan untuk aplikasi yang membutuhkan identifikasi jaringan yang unik atau penyimpanan yang stabil.

#### DaemonSet
DaemonSet berfungsi untuk memastikan bahwa semua atau beberapa nodes memiliki salinan pod. Ketika nodes ditambahkan ke dalam cluster, pods juga akan ditambahkan ke cluster tersebut. Ketika DaemonSet dihapus, semua pods yang telah dibuat juga ikut terhapus.

### Google App Engine (GAE).
Opsi Platform as a Service (PaaS) yang membuat Anda bisa fokus dalam pengembangan aplikasi tanpa perlu memikirkan infrastruktur yang menjalankan aplikasi Anda. Google App Engine adalah sebuah platform-as-a-service (PaaS) dari Google yang menyediakan layanan untuk meng-hosting aplikasi mulai dari web dan mobile atau IoT backend. Dengan App Engine, kita hanya perlu fokus dalam mengembangkan aplikasi dan mengunggahnya ke Google App Engine. Infrastruktur yang digunakan untuk menjalankan aplikasi sepenuhnya menjadi tanggung jawab dari Google. App Engine juga akan secara otomatis menaikkan sumber daya (scale up) jika terjadi lonjakan jumlah pengguna dan mengurangi (scale down) menyesuaikan dengan jumlah pengguna.

Google App Engine memiliki beberapa fitur seperti berikut:

- Popular languages. Dukungan bahasa pemrograman populer seperti Node.js, Java, Ruby, C#, Go, Python, atau PHP.
- Open & Flexible. Kita bebas menambahkan library atau framework ke dalam App Engine dengan menggunakan Docker container.
- Fully managed. Infrastruktur dan lingkungan pengembangan telah diatur penuh oleh App Engine, membuat kita bisa lebih fokus dalam pengembangan dan inovasi aplikasi.
- Monitoring, Logging & Diagnostics. Integrasi dengan Google Stackdriver membantu kita dalam memantau kondisi aplikasi.
- Application security. Meningkatkan keamanan aplikasi Anda dengan memanfaatkan sertifikat SSL/TLS yang dikelola secara default di domain khusus aplikasi Anda.
- Service Ecosystem. Dukungan ekosistem layanan GCP seperti cloud developer tools.

Secara hirarki, App Engine berada di bawah project, dan di dalam satu project hanya dapat memiliki satu App Engine saja. Namun demikian, di dalam application ini nantinya bisa dibuat beberapa service. Ketika membuat application, akan mendapat satu service bernama default. 

#### App Engine Environments
App Engine memiliki 2 jenis environment yang bisa digunakan untuk deployment aplikasi. Kita juga bisa menggunakan kedua environment ini secara bersamaan sesuai dengan kebutuhan.

- Standard Environment, aplikasi dijalankan di dalam sebuah container dengan menggunakan environment yang bisa menjalankan bahasa pemrograman seperti Python 2.7, Python 3.7, Java 8, Node.js 8, Node.js 10, PHP 5.5, PHP 7.2, Go 1.9, Go 1.11, dan Go 1.12 (beta). Environment ini cocok digunakan untuk aplikasi yang membutuhkan scaling dengan cepat, bahkan standard environment memungkinkan untuk menggunakan 0 instances ketika tidak ada traffic menuju aplikasi. Sehingga tidak ada biaya yang dimasukkan ke dalam billing.

- Flexible Environment, aplikasi dijalankan di dalam Docker containers di mesin virtual Compute Engine (VM). Environment ini memiliki dukungan untuk beberapa bahasa seperti Python, Java, Node.js, Go, Ruby, PHP, dan .NET Flexible environment digunakan untuk aplikasi dengan fluktuasi traffic yang konsisten. Developer bisa melakukan sejumlah kustomisasi terhadap library atau tools yang digunakan dengan cara melakukan deployment container sendiri. Tidak seperti standard environment yang bisa melakukan scaling hingga 0 instance, flex environment minimal menjalankan satu container untuk menjalankan service. Anda akan tetap terkena tagihan ketikan container tersebut menyala meskipun tidak ada aktivitas pada sistem.

#### Membagi Traffic di antara Versions
Dalam beberapa kasus, mungkin Anda tidak menginginkan versi terbaru dari aplikasi Anda bisa langsung digunakan oleh semua user. Nah, fitur Split traffic di App Engine memungkinkan kita sebagai developer untuk melakukan A/B testing terhadap aplikasi kita atau deployment aplikasi secara bertahap ketika versi terbaru dari aplikasi mengalami kesalahan atau tidak sesuai dengan kebutuhan. Dengan fitur ini, Anda pun bisa dengan mudah melakukan rollback ke versi sebelumnya.

Terdapat 3 cara pembagian traffic: IP address, Cookie, dan Random. 
Jika menggunakan IP address, setiap IP yang melakukan request akan ditranslasikan menjadi bentuk hash antara 0-999. Penggunaan metode ini bisa menimbulkan masalah ketika pengguna berubah alamat IP ketika berpindah jaringan.
Cara yang lebih disarankan adalah dengan menggunakan Cookie. Ketika sebuah HTTP request memiliki header cookie bernama GOOGAPPUID, request tersebut akan diarahkan ke versi yang ditentukan.
Metode Random akan secara acak mengarahkan request yang masuk sesuai pembagian yang ditentukan.

Selepas proses penyimpanan mekanisme Split Traffic sukses, jalankan kembali aplikasi pada browser. Reload browser beberapa kali, Anda akan mendapatkan tampilan versi yang berbeda secara acak. Keren, kan?

### Google Cloud Functions (GCF).
Model serverless yang mampu menjalankan fungsi logika aplikasi sesuai dengan permintaan secara cepat, dan tanpa pengaturan infrastruktur. Google Cloud Functions adalah sebuah model komputasi serverless (tanpa server) untuk membangun aplikasi cloud. Cloud Functions bersifat serverless seperti Google App Engine, namun Cloud Functions memiliki ukuran lebih kecil karena yang kita deploy adalah kode logika yang berada di dalam fungsi, bukan aplikasi seperti pada App Engine. Kita tidak perlu melakukan pengaturan terhadap infrastruktur atau server yang menjalankan Cloud Functions. Layanan seperti ini bisa disebut juga Function as a Service (FaaS).

Cloud Functions bisa ditulis dalam beberapa bahasa pemrograman seperti: Python 3.7, Node.js 6, Node.js 8, dan Go 1.11. Fungsi yang telah di-deploy ke Cloud Functions akan dijalankan setiap kali ada trigger dari akses endpoint/URL atau ketika ada event yang terjadi pada Cloud Pub/Sub, Cloud Storage, Firebase, atau yang lain.

Fitur lengkap dan kelebihan yang ada pada Google Cloud Functions adalah:

- Open and familiar. GCF memberikan dukungan untuk environment dan bahasa pemrograman populer seperti JavaScript (Node.js), Python, dan Go.
- No server management. Kita bisa lebih fokus dalam pengembangan dan deployment aplikasi karena infrastruktur dan server sudah diatur sepenuhnya oleh Google.
- Runs code in response to events. Function akan dijalankan ketika ada trigger dari akses HTTP, Firebase, atau layanan dari Google Cloud Platform lain.
- Pay only while your code runs. Biaya dihitung hanya setiap kali fungsi dijalankan.
- Scales automatically. Scaling otomatis sesuai kebutuhan sumber daya yang digunakan hingga skala global.
- Connects and extends services. Dengan ini, kita bisa menghubungkan dan mengintegrasikan sejumlah layanan seperti GCP, Firebase, Google Assistant, dan layanan pihak ketiga lainnya.