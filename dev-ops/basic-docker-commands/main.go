package main

import (
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Hi, I'm Yudha, nice to meet u")
	})

	http.ListenAndServe(":8080", nil)
}
