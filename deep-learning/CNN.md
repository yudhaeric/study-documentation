## Convolutional Neural Network

Setiap neural networks memiliki input layer, hidden layers, dan output layer. Yang membedakan suatu neural network dengan yang lainnya adalah tipe hidden layers yang digunakan. Berikut hidden layer dan proses pada CNN:

- Convolutional layers + ReLu Layers
- Pooling Layers
- Flattening Process
- Fully Connected Layers

Import Library

```
from tensorflow.keras.models import Sequential
from tensorflow.keras.layers import Conv2D, MaxPooling2D, Flatten, Dense
```

Sequential API adalah model termudah untuk dibuat dan dijalankan di Keras. Model sekuensial memungkinkan kita membuat model lapis demi lapis secara selangkah demi selangkah. Setelah membangun model kita dapat menambahkan lapisan ke model ini.

```
model = Sequential()
```
Menambah lapisan yang dibutuhkan
```
model.add(Conv2D(16, (3,3), activation='relu', input_shape=(256, 256, 3)))
model.add(MaxPooling2D(pool_size=(2,2), strides=2))

model.add(Conv2D(32, (3,3), activation='relu'))
model.add(MaxPooling2D(3,3))

model.add(Flatten())
model.add(Dense(128, activation='relu'))

model.add(Dense(2, activation='sigmoid'))
```

Model Summary () display metode semua model lapisan, termasuk setiap nama lapisan, bentuk output lapisan dan jumlah parameter dalam setiap lapisan. Ringkasan ini menunjukkan jumlah total parameter dan jumlah parameter yang dapat dilatih dan parameter yang tidak dapat dilatih.

```
model.summary()
```

Sekarang, setelah membuat model kita perlu memanggil metode compile () untuk menentukan fungsi kerugian dan pengoptimal yang akan digunakan.

```
model.compile(loss="sparse_categorical_crossentropy",optimizer="sgd", metrics=["accuracy"])
```

Ini adalah waktu untuk melatih model. Untuk ini kita hanya perlu memanggil metode fit () .

```
history = model.fit(X_train, y_train, epochs=20, validation_data=(X_valid, y_valid))
```

Visualisasi Data

```
import pandas as pd
import matplotlib.pyplot as plt

pd.DataFrame(history.history).plot(figsize=(8, 5))
plt.grid(True)
plt.gca().set_ylim(0, 1) 
plt.show()
```

Sequential API cukup mudah digunakan, tetapi sangat terbatas. Di Sequential API kita tidak dapat membuat model yang:

berbagi lapisan
memiliki cabang
memiliki banyak masukan
memiliki banyak keluaran