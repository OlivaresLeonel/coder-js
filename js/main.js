//array de objetos ya en base
const productos = [
    { nombre: "Buzo California", color: "negro", cod: 101, stock: 1 },
    { nombre: "Buzo Race", color: "negro", cod: 102, stock: 2 },
    { nombre: "Buzo Racing", color: "blanco y negro", cod: 103, stock: 1 }
  ];
   
// solicitud de informacion para el nuevo producto usando prompts
const nuevoNombre = prompt("Ingrese el nombre del nuevo producto:");
const nuevoColor = prompt("Ingrese el color del nuevo producto:");
const nuevoCodigo = parseInt(prompt("Ingrese el código del nuevo producto:"));
const nuevoStock = parseInt(prompt("Ingrese la cantidad en stock del nuevo producto:"));

// Crear el nuevo producto con la información proporcionada
const nuevoProducto = { nombre: nuevoNombre, color: nuevoColor, cod: nuevoCodigo, stock: nuevoStock };

// Agregar el nuevo producto al array
productos.push(nuevoProducto);

const encontrarProductoPorCodigo = (codigo) => {
    return productos.find(producto => producto.cod === codigo);
  };
  
const nombresDeProductos = productos.map(producto => producto.nombre);
const productosConStockMayorAUno = productos.filter(producto => producto.stock > 1);
 
const buzosNegros = productos.filter(producto => producto.color.includes("negro"));
const totalStock = productos.reduce((total, producto) => total + producto.stock, 0);
  
for (const producto of productos) {
    console.log(`Producto: ${producto.nombre}  Color: ${producto.color}  Código: ${producto.cod} - Stock: ${producto.stock}`);
  }