import { render } from '@testing-library/react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Spinner from './spinner';
import Seasons from './season';
import Error from './error';

class Weather extends React.Component{
    state = {lat: '', errr: ''};




    componentDidMount(){
        window.navigator.geolocation.getCurrentPosition(
            (position)=>this.setState({lat : position.coords.latitude}),
            (err)=>this.setState({errr : err.message})
        )
    };





    render(){
        if(this.state.lat && !this.state.errr){
            return <Seasons latt = {this.state.lat} />;
         }
             
        if(!this.state.lat && this.state.errr){
            return <Error msg={this.state.errr} />;
        }

        else{
            return <Spinner  message="Please wait we are finding your location" />;

        }

    





       
    }


   
}




ReactDOM.render(
    <Weather />,
    document.querySelector('#root')

);



