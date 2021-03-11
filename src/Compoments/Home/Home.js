import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Header from '../Header/Header';
import League from '../League/League';


const Home = () => {
    const [leagueName, setLeagueName]=useState([]);

    useEffect(()=>{
        const url='https://www.thesportsdb.com/api/v1/json/1/all_leagues.php'
        fetch(url)
        .then(res=> res.json())
        .then(data=>setLeagueName(data.leagues.slice(0,15)))
    },[])
    return (
        <div>
            {/* <h1>This is HomePage</h1> */}
            <Header></Header>
            
            {
                leagueName.map(league=> <League league={league}></League>)
            }
        </div>
    );
};

export default Home;