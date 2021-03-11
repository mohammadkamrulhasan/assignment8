import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router';
import './LeagueDetails.css'
import GenderImageFemale from '../../Photo/female.png';
import GenderImageMale from '../../Photo/male.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faTwitter, faLinkedin, faYoutube, faFacebook} from '@fortawesome/free-solid-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';

const LeagueDetails = () => {
    const {idLeague}=useParams();
    const [leagueDetails, setLeagueDetails]=useState([]);
    useEffect(()=>{
        const url=`https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
        .then(res=>res.json())
        // .then(data=> console.log(data.leagues));
        .then(data=> setLeagueDetails(data.leagues[0]))

    },[idLeague])

    // const gender=Male;
    // let genderImage;
    // if (gender==={leagueDetails.strGender}){
    //     genderImage=<img src={GenderImageMale} alt=""/>;
    // }
    // else{
    //     genderImage=<img src={GenderImageFemale} alt=""/>;
    // }
    return (
        <div className="container">
            <div className="banner">
            <img src={leagueDetails.strFanart1} alt=""/>
            </div>
            <div className="leagueInfo" >
                <div className="Info">
                <h1>{leagueDetails.strLeague}</h1>
                <br></br>
                <p>Founded:{leagueDetails.intFormedYear}</p>
                <p>Country:{leagueDetails.strCountry}</p>
                <p>Sport Type:{leagueDetails.strSport}</p>
                <p>Gender:{leagueDetails.strGender}</p>
                </div> 
                
                <div className="GenderImage">
                    {/* {genderImage} */}
                <img src={GenderImageMale} alt=""/>
                </div>

            </div>
            <div className="leagueDescription">
            <p>{leagueDetails.strDescriptionEN}</p>
            </div>
            
            <div className="footerIcon" >
                <footer>
                	 
                </footer>
            </div>
        </div>
    );
};

export default LeagueDetails;