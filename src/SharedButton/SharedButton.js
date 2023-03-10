import React from 'react'

const SharedButton = ({children}) => {
    return (
        <button 
        className="btn btn-primary bg-gradient-to-r from-primary to-secondary text-white hover:bg-gradient-to-r hover:from-red-500 hover:to-orange-500">{children}</button>
    );
};

export default SharedButton;