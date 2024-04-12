import React from 'react';

interface RecipientProps {
    name: string;
    email: string;
    image: string;
}

const RecipientPeople = (props:RecipientProps) => {
    return (
        <div className="single-user">
            <div className="left d-flex align-items-center">
                <div className="img-area">
                    <img src={props.image} alt="image" />
                </div>
                <div className="text-area">
                    <p>{props.name}</p>
                    <span className="mdr"><a href={props.image} className="__cf_email__" data-cfemail="4f072a3d222e217c7a0f28222e2623612c2022">[email&#160;protected]</a></span>
                </div>
            </div>
            <div className="right">
                <a href="javascript:void(0)">Elegir</a>
            </div>
        </div>
    );
};

export default RecipientPeople;