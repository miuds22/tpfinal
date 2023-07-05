import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carta = ({elementoUrl,elementoIP}) => {
    return(<>
            <div className="Carta">
            <Card className="text-center bg-secondary">
            <Card.Header>{elementoUrl}</Card.Header>
            <Card.Body>
                <Card.Text>
                    ip:{elementoIP}
                </Card.Text>
                <Button variant="dark" onClick={()=>{ window.location.href =elementoUrl }}>ver Pagina</Button>
            </Card.Body>
            </Card>   
            </div>
    </>)
    
}
export default  Carta