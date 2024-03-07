const startPage = document.getElementById('start-page');
const templatePage = document.getElementById('template');

if (!startPage || !templatePage)
    return alert("Base website template got corrupted! Can't find either start page or template page.")

function proceed() {
    const input = document.querySelector('#start-page > input');
    const patches = DATA?.[input.value];

    if (!patches) return alert('Bad access code!')
}

function applyPatches(patches) {
    for (const [key, func] of Object.entries(patches)) {
        const element = document.querySelector(key);
        if (!element) return alert(`Bad data source template! No HTML element found for selector '${key}'.`)

        func(element)
    }
}

internal__submit.addEventListener('click', proceed)