// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {collection, addDoc, getFirestore} from "firebase/firestore"

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
            precio: producto.precio 
        })
    })   
}

export {cargarBaseDeDatos}