import  React  from  'react';

const  GenerateCharact = ({ selectCharact }) => {
    return (
        <div  className="GenerateCharact">
        <button  onClick={selectCharact}>Get quote</button>
        </div>
    );
};

export  default  GenerateCharact;