import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';

const LeagueDetails = () => {
    const {idLeague}=useParams();
    const [leagueDetails, setLeagueDetails]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res=>res.json())
        // .then(data=> console.log(data.leagues));
        .then(data=> setLeagueDetails(data.leagues))

    },[])
    return (
        <div>
            <h1>This is league Details {idLeague} </h1>
            <p>{leagueDetails.strLeague}</p>
            <p>{leagueDetails.intFormedYear}</p>
            <p>{leagueDetails.strCountry}</p>
            <p>{leagueDetails.strSport}</p>
            <p>{leagueDetails.strGender}</p>
            <p>{leagueDetails.strDescriptionEN}</p>
        </div>
    );
};

export default LeagueDetails;