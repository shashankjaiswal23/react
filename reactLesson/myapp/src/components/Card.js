import React from 'react'

function Card(props) {
    return (
      <div>
        card Name - TV Description - Phillips Size - 42''
         {props.name}
        <img src={props.imgOne} />
      </div>
    );
}

export default Card
/// App > Body   > Card