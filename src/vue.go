package main

import (
	"fmt"
	"net/http"
	"regexp"
)

type Page struct {
	Title       string
	Description string
}

var validPath = regexp.MustCompile("^/(view|random)*$")

func rootHandler(w http.ResponseWriter, r *http.Request) {
	http.ServeFile(w, r, "./site/vue.html")
}

func makeHandler(fn func(http.ResponseWriter, *http.Request)) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		fmt.Println(r.URL.Path)
		m := validPath.FindStringSubmatch(r.URL.Path)
		if m == nil {
			http.NotFound(w, r)
			fmt.Println("Not a valid URL")
			return
		}
		fn(w, r)
	}
}

func main() {
	r := http.NewServeMux()
	r.HandleFunc("/", makeHandler(rootHandler))
	r.Handle("/s/", http.StripPrefix("/s/", http.FileServer(http.Dir("/home/tom/tscott0/go-vue/static/"))))

	http.ListenAndServe(":8080", r)
}
