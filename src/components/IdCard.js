import React from 'react';

const IdCard = (props) => {
    return (
        <div>
            <img src={props.picture} alt="Id card photo" />
            <div>
                <IdCard
                    lastName={props.lastName}
                    firstName={props.firstName}
                    gender={props.gender}
                    height={props.height}
                    birth={props.birth}
                />
            </div>
        </div>
    );
};

export default IdCard;