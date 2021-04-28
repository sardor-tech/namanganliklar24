import React from 'react';
import NavHeader from "../nav-header/NavHeader";
import Covidpr from "../covid-part/Covidpr";
import PreBody from "../pre-Body/PreBody";
import Sub from "../sub/Sub";
import CartPart from "../cards-pard/CartPart";
import BottomAdd from "../bottom-add/BottomAdd";

const Body = () => {
    return (
        <div>

            <Covidpr/>
            <CartPart/>
            <Sub/>
            <PreBody/>
            <BottomAdd/>
        </div>
    );
};

export default Body;