import React from 'react';


const Error = (props) => {
    return <div className="container2"> <h1>Oopps Looks Like We are Having Problem In Finding Your Location <br /><br /> Message from Server : <b>{props.msg}</b></h1><br /><br /> <i className=" massive frown icon"></i><i className="huge icons">
        <i className="big red dont icon"></i>
        <i className="black user icon"></i>
    </i></div>
}

export default Error;