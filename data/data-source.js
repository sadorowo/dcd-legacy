/*
Pattern:
"<id>": {
    "<selector 1>": <modifying function 1>,
    "<selector 2>": <modifying function 2>,
    ...
}

See example in data-source.example.js
*/

const DATA = {
    "0203c152": {
        "#header": (element) => {
            element.textContent = "Hello, ABC!"
        },
        "body": (element) => {
            element.style.backgroundColor = "#000"
        }
    }
    // Add all of your IDs and content here
}