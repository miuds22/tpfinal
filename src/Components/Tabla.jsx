import React from "react"
import Button from 'react-bootstrap/Button';
import Table from 'react-bootstrap/Table';


const Tabla = ({listProducts}) => {
  console.log("lista que llega" , listProducts)  
  return(
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>Año</th>
            <th>fecha de Compra</th>
            <th>Descripcion</th>
            <th>Precio Unitario</th>
            <th>Proveedor</th>
            <th>N° Orden Compra</th>
          </tr>
        </thead>
        <tbody>
            {listProducts.map(p => 
                <tr>
                <td>{p.EJERCICIO}</td>
                <td>{p.FECHACOMPRA}</td>
                <td>{p.DESCRIPCION}</td>
                <td>{p.PRECIOUNITARIO}</td>
                <td>{p.NOMBREPROVEEDOR}</td>
                <td>{p.NRO_OC}</td>
              </tr>
            )}
        </tbody>
      </Table>
    )
    
}
export default  Tabla


/* oc.Ejercicio as  Ejercicio,
oc.fech_oc as       fechaCompra,
oi.descripcion as   Descripcion,
oi.imp_unitario as  PrecioUnitario,
razon_social as     nombreProveedor
from Orden_Compra   oc  */