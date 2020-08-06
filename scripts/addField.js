document.querySelector("#add-time").addEventListener('click', cloneField);

function cloneField() {
    console.log("Cheguei aqui");
    const newFieldContainer = document.querySelector('.schedule-item').cloneNode(true);

    const fields = newFieldContainer.querySelectorAll('input');

    console.log(fields);

    document.querySelector('#schedule-items').appendChild(newFieldContainer);
}