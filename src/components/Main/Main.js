import React from 'react';
import Teams from "../Teams/Teams";
import Companies from "../compaines/Companies";
import ContactUs from "../ContactUs/ContactUs";
import { About } from '../About/About';

function Main(props) {
    return (
        <main>
            <About/>
            <Teams/>
            <Companies/>
            <ContactUs/>
        </main>
    );
}

export default Main;