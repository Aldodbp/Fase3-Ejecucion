// Cargar datos del LocalStorage
let proveedores = JSON.parse(localStorage.getItem("proveedores")) || [];
let marcas = JSON.parse(localStorage.getItem("marcas")) || [];

// Mostrar datos al iniciar
renderProveedores();
renderMarcas();

function agregarProveedor() {
    const nombre = document.getElementById("proveedorNombre").value.trim();
    const contacto = document.getElementById("proveedorContacto").value.trim();

    if (!nombre) {
        alert("El nombre del proveedor es obligatorio.");
        return;
    }

    proveedores.push({ nombre, contacto });
    localStorage.setItem("proveedores", JSON.stringify(proveedores));

    document.getElementById("proveedorNombre").value = "";
    document.getElementById("proveedorContacto").value = "";

    renderProveedores();
}

function renderProveedores() {
    const lista = document.getElementById("listaProveedores");
    const select = document.getElementById("marcaProveedor");

    lista.innerHTML = "";
    select.innerHTML = "<option value=''>Selecciona proveedor</option>";

    proveedores.forEach((p, index) => {
        lista.innerHTML += `<li>${p.nombre} — ${p.contacto || "Sin contacto"}</li>`;
        select.innerHTML += `<option value="${index}">${p.nombre}</option>`;
    });
}

function agregarMarca() {
    const nombre = document.getElementById("marcaNombre").value.trim();
    const proveedorIndex = document.getElementById("marcaProveedor").value;

    if (!nombre || proveedorIndex === "") {
        alert("Debes ingresar una marca y seleccionar un proveedor.");
        return;
    }

    marcas.push({
        nombre,
        proveedor: proveedores[proveedorIndex].nombre
    });

    localStorage.setItem("marcas", JSON.stringify(marcas));

    document.getElementById("marcaNombre").value = "";
    renderMarcas();
}

function renderMarcas() {
    const lista = document.getElementById("listaMarcas");
    lista.innerHTML = "";

    marcas.forEach(m => {
        lista.innerHTML += `<li>${m.nombre} — proveedor: ${m.proveedor}</li>`;
    });
}
