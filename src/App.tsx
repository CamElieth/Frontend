import { useEffect, useState } from "react";
import { Nav } from "./components/nav/Nav";
import { Marcas } from "./components/tarea/Marcas";
import { Generos } from "./components/tarea/Generos";
import { Paises } from "./components/tarea/Paises";
import { Categorias } from "./components/tarea/Categorias";

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
 
  const API_URL = "http://localhost:3000";
  const PRODUCT_ENDPOINT = "products";
  const USERS_ENDPOINT = "users";
 


  const getProducts = async () => {
    const response = await fetch(`${API_URL}/${PRODUCT_ENDPOINT}`);
    const data = await response.json();
    setProducts(data);
  };
  
  const getUsers = async () => {
    const response = await fetch(`${API_URL}/${USERS_ENDPOINT}`);
    const data = await response.json();
    setUsers(data);
  };

 
  useEffect(() => {
    getProducts();
    getUsers();
   
  }, []);

  return (
    <div className="App">
      <Marcas/>
      <Generos/>
      <Paises/>
      <Categorias/>
      <Nav />
      <h1>Hola mundo react</h1>
      {products.map((product: any) => (
        <div key={product.id}>{product.name}</div>
      ))}
      <h1>Usuarios</h1>
      {users.map((users: any) => (
        <div key={users.id}>{users.name}</div>
      ))}
 
    </div>
  );
}

export default App;
