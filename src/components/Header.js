
import React from 'react';
import BurgerMenu from './BurgerMenu';

const Header = (props) => {
    return (
        <div className="flex w-full ">
            <BurgerMenu />
            <div className="flex w-full h-14 bg-blue-700">

            </div>
        </div>
    );
};

export default Header;
