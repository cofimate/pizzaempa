import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

function RenderCard({item}) {
    console.log("item image:" + item.image);
    return (
        <Card>
           <CardImg src={item.image} alt={item.name} /> 
            <CardBody>
                <CardTitle>{item.name}</CardTitle>
                <CardText>{item.description}</CardText>
            </CardBody>
        </Card>
    );
}

function Home(props) {
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md m-1">
                    <RenderCard item={props.empanada} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.pizza} />
                </div>
                <div className="col-md m-1">
                    <RenderCard item={props.emparecipe} />
                </div>
            </div>
        </div>
    );
}

export default Home;  