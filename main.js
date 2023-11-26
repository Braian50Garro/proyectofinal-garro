const shopContenedor = document.getElementById("shopContenido");
const vercarrito = document.getElementById("vercarrito");
const modalContenido = document.getElementById("modalContenido")
let carrito = [];

productos.forEach((product) => {
    let content = document.createElement("div");
    content.className ="card";
    content.innerHTML = `
        <img src="${product.img}">
        <p class="price">${product.precio} $</p>
        <h3>${product.nombre}</h3>
    `;
    shopContenedor.append(content);
    let comprar = document.createElement("button")
    comprar.innerText = "comprar";
    comprar.className = "comprar";
    content.append(comprar);

    comprar.addEventListener("click" , () =>{
        carrito.push({
            id : product.id,
            img: product.img,
            nombre: product.nombre,
            precio: product.precio,
        })
        console.log(carrito)
    })
});

vercarrito.addEventListener("click" , ()=> {
    modalContenido.innerHTML = "";
    modalContenido.style.display = "flex";
    const modalHeader =document.createElement("div");
    modalHeader.className ="modal-header";
    modalHeader.innerHTML = `
    <h1 class="modal-header-title">carrito.</h1>`;
    modalContenido.append(modalHeader);

    const modalbutton = document.createElement("h1");
    modalbutton.innerText = "x";
    modalbutton.className = "modal-header-button";

    modalbutton.addEventListener("click", () => {
        modalContenido.style.display = "none";
    });

    modalHeader.append(modalbutton);
    carrito.forEach((product) => { 
    let carritocontenedor = document.createElement("div")
    carrito.className="modal-Contenido"
    carrito.innerHTML = `
    <img src="${product.img}">
    <h3>${product.nombre}</h3>
    <p>${product.precio} $</p>
    `;
    modalContenido.append(carritocontenedor);
});
const total = carrito.reduce((acc, el)=> acc + el.precio , 0);

const totalbuying = document.createElement("div");
totalbuying.className ="total-content";
totalbuying.innerHTML =`total a pagar: ${total} $`;
modalContenido.append(totalbuying);

});