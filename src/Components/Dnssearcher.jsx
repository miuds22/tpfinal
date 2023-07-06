import React, { Fragment, useEffect, useState } from "react"
import { Button } from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import MapView from './MapView';
import Table from 'react-bootstrap/Table';
import axios from "axios";

const DnsSearcher = ({editarLista}) => {    
    
  const  [busqueda , agregarabusqueda] = useState( {txtbusqueda:""})
  const  [estado,setEstado] =useState("");
  const  [IPNet , CambiarIP] = useState({IP: "",websiteName:"",country:"",isp:"",org:"",lat:"",lon:"",as:"",city:"",regionName:"",timezone:""});
  const  [perrito,cambiarPerro] =useState("");
  
  const {txtbusqueda,ip} = busqueda;
  const {IP,websiteName,country, isp, org ,lat,lon,img
    ,as
    ,city
    ,regionName
    ,timezone} = IPNet;


  const handleChange = (e) => { 
    
    agregarabusqueda({
      ...busqueda,
        [e.target.name] : e.target.value
    })
  }


  const submitForm=(e)=>{
    e.preventDefault();
    setEstado("")
    console.log(validarUrl(busqueda));
    if(validarUrl(busqueda)){
      obtenerDireccionIP(txtbusqueda); 
    }
  }

  function validarUrl(busqueda){
    if(busqueda.txtbusqueda.replace("https://", "").replace("http://", "") === busqueda.txtbusqueda )
    { setEstado("La pagina debe tener tener declarado el protocolo (wwww no es un protocolo che!!!)") 
      perro();return false } else {return true;}
  }


  useEffect(()=>{
      if(IP){
        editarLista({busqueda:txtbusqueda,IP:IP});
        setEstado("validado");
      }
  },[IP] )



  const  obtenerDireccionIP = async(busqueda) => {
    try {
      const response = await fetch(`http://ip-api.com/json/${busqueda.replace("https://", "").replace("http://", "").replace("www.", "")}`);
      const data = await response.json();
      console.log(data)
      if (data.status === 'success') {
      
        CambiarIP({IP:    data.query,
                  websiteName: txtbusqueda,
                  country:data.country,
                  isp:    data.isp,
                  org:    data.org,
                  lat:    data.lat,
                  lon:    data.lon,
                  as:     data.as,
                  city:   data.city,
                  regionName: data.regionName,
                  timezone:   data.timezone
                  
                  })
        return;
        
      } else {
        console.error('Error al obtener la dirección IP:', data.message);
        setEstado(`la pagina no pudo ser localizada:${data.message}`)
        perro()
        return null;
      }
    } catch (error) {
      console.error('Error al obtener la dirección IP:', error);
      setEstado(`error en la api: ${error}`)
      perro()
      return null;
    }
  }
  const perro =  async(url) => {

    var myHeaders = new Headers();
    myHeaders.append("key", "0D3C91D418AD36C7DB93D2B80AC06229");
    
    try{
      const response = await axios.get(
        `https://dog.ceo/api/breeds/image/random`)
      
      cambiarPerro(response.data.message)
      console.log(response)
      
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
              <InputGroup.Text >Web a buscar:</InputGroup.Text>
                <Form.Control
                  type="text"
                  placeholder="ingrese una url para escanear"
                  name="txtbusqueda"
                  onChange={handleChange}
                  value={txtbusqueda}/>
              </InputGroup>
            </div>
            <div className="col-md-4 col-sm-12"  >
                <Button type="submit" variant="primary">Buscar</Button>
              </div>
            </div>
        </Form>
        </div>
        {estado !=="validado" &&  estado !=="" ? 
                    <div>
                      <h2>{estado}</h2>
                      <img src={perrito} alt="Perrito para no desanimarse!!!" />
                    </div>
              : estado==="validado" && IP !== ''? 
                    <div className="row">                   
                      <div className="col-md-6">
                      <Table striped bordered hover size="sm">
                                <thead>
                                  <tr>
                                  <th colSpan={2}>{as}</th>
                                  </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>nombre</td>
                                    <td>{websiteName}</td>
                                </tr>
                                <tr>
                                    <td>IP</td>
                                    <td>{IP}</td>
                                </tr>
                                  <tr>
                                    <td>Proveedor</td>
                                    <td>{isp}</td>
                                  </tr>
                                  <tr>
                                    <td>organizacion</td>
                                    <td>{org}</td>
                                  </tr>
                                  <tr>
                                    <td>Pais</td>
                                    <td>{country}</td>
                                  </tr>
                                  <tr>
                                    <td>ciudad</td>
                                    <td>{city}</td>
                                  </tr>
                                  <tr>
                                    <td>Region</td>
                                    <td>{regionName}</td>
                                  </tr>
                                  <tr>
                                    <td>zona Horaria</td>
                                    <td>{timezone}</td>
                                  </tr>
                                </tbody>
                              </Table>
                      </div>
                      <div className="col-md-6">
                        <MapView ip={IP} 
                                lat={lat}
                                lon={lon} /> 
                      </div>
                    </div>

                    :null
        }
      </Fragment>
      )
}

export default DnsSearcher;