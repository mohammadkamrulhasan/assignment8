import React from 'react';
import {Card,Button} from 'react-bootstrap';
import { useHistory } from 'react-router';
import icon from '../../Logo/image 1.png';
import './League.css';

const League = (props) => {
    const { idLeague, strLeague, strSport } = props.league;
    const history=useHistory();
    const showLeagues=idLeague=>{
        const url=`league/${idLeague}`;
        history.push(url);
    }
    return (
            
        <div className="NewGrid">
            <div className="grid">
            <Card style={{ width: '18rem' }} className="box">
                <Card.Img variant="top" src={icon}/>
                <Card.Body>
                    <Card.Title>{strLeague}</Card.Title>
                    <Card.Text>
                    Sports type:{strSport}
                    </Card.Text>
                    <Button onClick={()=>showLeagues(idLeague)} variant="primary">Explore</Button>
                </Card.Body>
            </Card>
        </div>
        </div>
        
        
        
    );
};

export default League;