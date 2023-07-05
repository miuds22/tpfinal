import React from "react"
import "leaflet/dist/leaflet.css"
import { MapContainer, Popup, Marker,TileLayer } from 'react-leaflet'
import { Icon } from "leaflet"
import { useMap } from 'react-leaflet/hooks'

const costumIcon = new Icon({
    iconUrl:require("./img/icono.png")
    ,iconSize:[90.90]
})

  
const MapView = ({ip ,lat,lon}) => {
    var position = [lat,lon]
    
return(
    <>
    <MapContainer center={position} zoom={13} scrollWheelZoom={true}>
        <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={position} icon={costumIcon}> 
        <Popup>
            hola como va
        </Popup>
        </Marker>
    </MapContainer>
  </>
)
}


export default MapView