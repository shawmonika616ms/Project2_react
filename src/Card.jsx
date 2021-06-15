import React from 'react';

const Card = (props)=> {

    

    return(
        <div className="card">
            <div className="cards">
                <img src={props.imgs} alt="Girl image"/>
                    <div className="card_info">
                       <span className="card_category">{props.cat}</span>
                        <h3 className="card_title">{props.title}</h3>
                            <a href={props.links}>
                                <button>Buy Now</button>
                            </a>
                    </div>
            </div>
        </div>


    );
}

export default Card;