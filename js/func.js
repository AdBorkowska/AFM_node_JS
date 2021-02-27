//alert("Hello world")

document.getElementById("btn").addEventListener('click', show);

function show(e) {
    let inputName = document.getElementById("name").value;
    document.getElementById("div").innerHTML = `Your name is ${inputName}`;
    e.preventDefault();
}
