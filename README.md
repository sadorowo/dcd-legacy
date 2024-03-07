## Dynamic Content Delivery

A static website that returns appropriate content to the website user based on the provided ID.

### ATTENTION!
This site is not secure at all! If you want to store private information, do not use this repository, because anyone can access **all available IDs**! This is mainly a hobby project.

## How to use
Firstly, create template for your webpage. Go to [index.html](index.html) and edit code **only between these lines**:
```html
<!-- TEMPLATE BEGINS -->
 
<!-- TEMPLATE ENDS -->
```

Example:
```html
<!-- TEMPLATE BEGINS -->
<p id="name">Hi!</p>           
<!-- TEMPLATE ENDS -->
```

Then, using your template, modify your data in [data-source.js](data/data-source.js).
How to do this?
View examples [here](data/data-source.example.js).

Example based on HTML provided above:
```js
const DATA = {
    "example-id": {
        "#name": (element) => {
            element.textContent = "Hi, Lisa! Your ID is example-id."
        }
    }
}
```

## Custom styles
This website supports custom CSS. Just edit [this](data/custom-style.css) file.
If provided style doesn't work, try adding `!important` to the end of CSS rule.