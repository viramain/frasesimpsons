import React from "react";
// import Card from 'react-bootstrap/Card';
// import Button from 'react-bootstrap/Button';
import {Card} from 'react-bootstrap';

const Frase = (props) => {
    return (
        // arma card horizontal porque react-bootstrap no la tiene
        <Card className="w-100 my-5">
            <Card.Body>
            <div className='row'>
                <div className='col-sm-12 col-md-4'>
                    {/* columna para la imagen del personaje */}
                    <img src={props.personaje.image} alt={props.personaje.character}/>
                </div>
                <div className='col-sm-12 col-md-8'>
                    {/* columna para la frase del personaje */}
                    <Card.Title>{props.personaje.character}</Card.Title>
                    <Card.Text>
                        {props.personaje.quote}
                    </Card.Text>
                </div>
            </div>                
            </Card.Body>
        </Card>
    );
};

export default Frase;
