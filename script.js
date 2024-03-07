const startPage = document.getElementById('internal__start-page');
const templatePage = document.getElementById('internal__template');

if (!startPage || !templatePage) {
    alert("Base website template got corrupted! Can't find either start page or template page. Closing the window.");
    window.close();
} else {
    const wait = (time) => new Promise(resolve => setTimeout(resolve, time * 1000))

    async function proceed() {
        const input = document.querySelector('#internal__start-page > input');
        const patches = DATA?.[input.value];

        if (!patches) return alert('Bad access code!');
        await fadeBlock()
        applyPatches(patches)
    }

    function applyPatches(patches) {
        for (const [key, func] of Object.entries(patches)) {
            const element = document.querySelector(key);
            if (!element) {
                alert(`Bad data source template! No HTML element found for selector '${key}'.`);
                continue;
            }

            func(element)
        }
    }

    async function fadeBlock() {
        startPage.style.opacity = 0;
        await wait(0.2);
        startPage.style.display = 'none';
        await wait(0.2);
        templatePage.style.opacity = 1;
    }

    internal__submit.addEventListener('click', async () => await proceed())
}