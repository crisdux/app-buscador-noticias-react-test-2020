import React from 'react';

const Header = ({titulo}) => {
    return (
        <h1 className="font-weight-bold text-center bg-primary text-white p-3">{titulo}</h1>
    );
}

export default Header;
