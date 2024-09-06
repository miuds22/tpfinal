import React, { Fragment, useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MapView from './MapView';
import Table from 'react-bootstrap/Table';
import Tabla from './Tabla'
import axios from "axios";


const ProductSearcher = () => {   
  
const  [products , setProducts]  = useState([]);
const  [err,setErr] =useState();
const  [perrito,cambiarPerro] =useState("");
const [toSearch,setSearch] = useState("")
const [filtered, setFilter] =useState([])

useEffect(() => {
  const fetchProducts = async () => {
    const url = 'http://10.1.1.23/api/entidad/BUSCARPRODUCTO/a' 
    const response = await fetch(url);
    const data = await response.json();
    setProducts(data);
    setFilter(products)
  };

  fetchProducts();

}, []);

useEffect(() => {
  setFilter(products.filter( dato =>  dato.DESCRIPCION.includes(toSearch)))
}, [toSearch]);



const getProducts = (nombre) => {
  return products.filter;
};


//reading on live time the keyboard
const handleChange = (e) => {
  setSearch(e.target.value)
}

const submitForm=(e)=>{
    setFilter([]);  
    e.preventDefault();
    setErr("")
    setFilter(filtered);
}

function ShowErr(error){
  setErr(error) 
  perro();
  return false
}

  const perro =  async(url) => {
    var myHeaders = new Headers();
    myHeaders.append("key", "0D3C91D418AD36C7DB93D2B80AC0txtSearch6229");  
    try{
      const response = await axios.get(
        `https://dog.ceo/api/breeds/image/random`)      
      cambiarPerro(response.data.message)
      
    }
    catch(e){
      console.log(e)
    }
  }

    return(
      <Fragment className="fullwidt">
        <div id="buscador">
        <Form onSubmit={submitForm}>
            <div className="row">
              <div className="col-md-8 col-sm-12">
              <InputGroup className="mb-3">
              <InputGroup.Text >Producto:</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="ingrese un producto"
                  name="txtSearch"
                  onChange={handleChange}
                  value={toSearch} 
                  />
              </InputGroup>
            </div>
            <div className="col-md-4 col-sm-12"  >
                <Button type="submit" variant="primary">Buscar</Button>
              </div>
            </div>
        </Form>
        </div>
        {err =="ok"  ? 
            console.log(filtered.length)
                  // <Tabla listProducts={filtered}></Tabla> 
        /* : err =! "" ?
                <div>
                      <h2>{err}</h2>
                      <img src={perrito} alt="Perrito para no desanimarse!!!" />
                    </div>
                    */
        : null
        }
      </Fragment>
      )
}
export default ProductSearcher;