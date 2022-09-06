## Component

Component merupakan struktur dasar ketika kita membuat aplikasi dengan react, ada 2 penulisan component yaitu menggunakan class dan function.

```
class App extends Component {
    render() {
        return (
            ...
        )
    }
}
```

```
function App() {
    return
}
```

## Properties / Props

Properties merupakan argumen atau nilai yang mau kita pasang agar function nya menjadi dinamis. Props digunakan untuk mengoper nilai di setiap component atau component di dalam component.

```
function Profile(props) {
    return <span> umurnya {props.age} </span>
}

function Greeting(props) {
    return <h1> Halo {props.name} - <Profile age={props.age} /> </h1>
}
```

```
<Greeting name="Yudha" age=20 />
<Greeting name="Eric" age=20 />
<Greeting name="Pamungkas" age=20 />
```