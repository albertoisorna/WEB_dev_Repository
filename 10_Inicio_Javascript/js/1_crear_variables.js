
// 3 formas de crear variables

// VAR
var nombre, edad; // solo la creo
nombre = 'Juan'; // asigno
console.log(nombre);

// LET 
let nombre; // let se declara solo una vez

// CONST
const cliente = 'Juan'; // no se puede sobreescribir

// for y while
let i = 0;

function consp(s) {
    console.log(s);
}

while (i<10){
    consp(i)
}

// arreglo
const pendiente;

pendiente = ['a','b','c','d']

const carrito = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'coche'}
]

// for
for (el of pendiente){
    consp(el)
}


// for each
pendiente.forEach(element => consp(element));

// diccionario
Object.values()
Object.keys()

// Scope -- visibilidad
let a = 3;

if (a){
    let  a = 5;
}

print(a) // a == 3, no es 5 ya que no se sobreescribe

// Object destructing
let libro = {
    'favorito' : 'carnegie',
    'paginas': 256
}

let {paginas} = libro; // paginas == 256


// Object Literal enhancement -- unir en objetos
const a = 1, b = 2, c = 4;

const miclase = {
    a : a, 
    b : b,
    c: c
}

const miclase = {a,b,c}


// Filter find reduce
const carrito = [
    {id: 1, producto: 'libro'},
    {id: 2, producto: 'libro'},
    {id: 3, producto: 'libro'},
    {id: 3, producto: 'libro'},
    {id: 2, producto: 'coche'}
]

// Flter
const mayores = carrito.filter(el => el.id > 2);

// find
const ale = carrito.find(el => el.producto === 'coche');

// Reduce
let total = carrito.reduce((total ,el) => total + el.id,0);

// Fetch API
function descargarUsuarios(cantidad){
    const api = `https://randomuser.me/api/?results=${cantidad}`;

    // llamamos a fetch
    fetch(api)
        .then(respuesta => respuesta.json())
        .then(datos => console.log(datos.result));
}

const li = document.createElement('li');

function imprimirHTML(datos){
    datos.forEach(usuario => {

        const {name : {first}, name: {last}, nat} = usuario;

        li.innerHTML = `
        Nombre : ${first} 

        `

        document.querySelector('app').appendChild(li);
    })

}