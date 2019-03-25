import  React  from  'react';


const  DisplayCharact = ({ charact }) => {
    return (
        <div  className="DisplayCharact">
            <img  src={charact.image}  alt="picture"  />
            <div>
                <h2><strong>Quote : {charact.quote}</strong></h2>
                <h1><small>Character : {charact.character}</small></h1>
                <p>Direction : {charact.characterDirection}</p>
            </div>
        </div>
    );
};

export  default  DisplayCharact;
