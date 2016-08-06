new Vue({
	el: '#example',
	data: {
		code: 'Vue.js'
	},
	// define methods under the `methods` object
	methods: {
		rendergo: function (event) {
			// Remove the old code from the DOM
			document.getElementById('divcode').remove();

			var example = document.getElementById('example');

			// Construct the prism elements code inside pre
			div = document.createElement('div')
			div.setAttribute('id', 'divcode')

			pre = document.createElement('pre')
			pre.setAttribute('id', 'precode')

			code = document.createElement('code')
			code.setAttribute('id', 'output')

			// TODO: Set the appropriate language class
			code.setAttribute('class', 'language-go')

			// TODO: Set the content from the user input
			code.innerText = "func main() { fmt.Println(\"hello world\") }"

			// Add the new elements to the DOM
			pre.appendChild(code)
			div.appendChild(pre)
			example.appendChild(div)

			// Perform highlighting again
			Prism.highlightElement(code)

			},
		rendercss: function (event) {
			// Remove the old code from the DOM
			document.getElementById('precode').remove();

			var example = document.getElementById('example');

			// Construct the prism elements code inside pre
			pre = document.createElement('pre')
			pre.setAttribute('id', 'precode')

			code = document.createElement('code')
			code.setAttribute('id', 'output')

			// TODO: Set the appropriate language class
			code.setAttribute('class', 'language-css')

			// TODO: Set the content from the user input
			code.innerText = "p { color: red }"

			// Add the new elements to the DOM
			pre.appendChild(code)
			example.appendChild(pre)

			Prism.highlightElement(pre)

			}
	}
})
