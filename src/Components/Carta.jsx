import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const Carta = ({Product}) => {
    return(<>
            <div className="Carta">
            <Card className="text-center bg-secondary">
            <Card.Header>{Product}</Card.Header>
            </Card>   
            </div>
    </>)
    
}
export default  Carta