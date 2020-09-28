import { waitForElementToBeRemoved } from '@testing-library/react';
import React from 'react';
import './season.css';



const material = {
    summer: {
        text: "A life without love is like a year without summer., Have a splashing good time at the beach.",
        iconName:"sun outline",
    },

    winter: {
        text: "Winter is the time for comfort, for good food and warmth, for the touch of a friendly hand and for a talk beside the fire: it is the time for home.",
        iconName:"snowflake",
    },

    rain: {
        text: "These rains can quench the thirst of your soul and a coffee can quench the thirst of your body. May both keep you sane and happy.",
        iconName:"umbrella",
    }

};



const seasonFinder = (lat, month) => {
    if (month > 1 && month < 5 && lat > 0) {
        return 'summer';
    };

    if (month > 4 && month < 9 && lat > 0) {
        return 'rain';
    };


    if (month > 8 && month <=12 && lat > 0) {
        return 'winter';
    };


    if (month > 2 && month < 9 && lat < 0) {
        return 'winter';
    };


    if (  month > 9 && month <=12 && lat < 0) {
        return 'summer';
    };





};


const Seasons = (props) => {
    const rutu = seasonFinder(props.latt, new Date().getMonth());
    const { text, iconName } = material[rutu];
    const date =  new Date().toDateString();
    console.log(date); 
    console.log(iconName);





    return <div className={`${rutu} ssr `}>
        <div>
            <h2>Today's Date :<i  className="calendar alternate icon"></i> <b id="bold">{date}</b>
            </h2>
        </div>
        <div className="positn">
        <div className="linkk">
        <h3>Want To Find Today's Weather : <a target="_blank" href="https://weather.com/en-IN/weather/today/l/19.15,72.99?par=google&temp=c"><b>click me</b> <i className="sun icon"></i></a> </h3>
        </div>
        
        <div className= {`${rutu} innerd `} id="txtclr">
            <h4 className="textData">{text} </h4>
        </div>

    </div>;
    </div>
    
};


export default Seasons;