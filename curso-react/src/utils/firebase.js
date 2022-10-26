// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, doc, addDoc, getFirestore, getDocs, getDoc} from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: "react347552022.firebaseapp.com",
  projectId: "react347552022",
  storageBucket: "react347552022.appspot.com",
  messagingSenderId: "548441956033",
  appId: "1:548441956033:web:306a2250c8ab180a227e40"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore()


const cargarBaseDeDatos = async () => {
    const promise = await fetch('./json/productos.json')
    const productos =  await promise.json()
    productos.forEach( async (producto) => {
        await addDoc(collection(db, 'productos'), {
            nombre: producto.nombre,
            imagen: producto.img,
            categoria: producto.category,
            detalle: producto.description,
            precio: producto.precio,
            stock: producto.stock 
        })
    })   
}

const getProducto = async (id) => {
    const producto = await getDoc(doc(db, 'productos', id))
    const prod = [producto.id, producto.data()]
    console.log(prod)
    return prod
  }
    const getProductos = async () => {
        const productos = await getDocs(collection(db, 'productos'))
        const items = productos.docs.map(producto => [producto.id, producto.data()])
        return items 
    }

export {cargarBaseDeDatos, getProductos, getProducto}