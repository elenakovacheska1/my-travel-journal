import React from 'react';

let Card = (props) => {
    console.log(props);
    return(
        <div className='container'>
            <div className='card'>
                <img src={props.item.imageUrl} className='card--image'></img>
                <div className='card--text'>
                    <div className='card--location'>
                        <h3 className='card--country'>{props.item.location.toUpperCase()}</h3>
                        <h4><a target="_blank" className='card--gMaps' href={props.item.googleMapsUrl}>View on Google Maps</a></h4>
                    </div>
                    <h1 className='card--title'>{props.item.title}</h1>
                    <strong className='card--startEndDate'>{props.item.startDate} - {props.item.endDate}</strong>
                    <p className='card--description'>{props.item.description}</p>
                </div>
            </div>
            <hr />
        </div>
    );
}

export default Card;