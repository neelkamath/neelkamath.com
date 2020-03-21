import React, {ReactElement} from 'react';
import Header from './Header';
import Skills from './Skills';
import Achievements from './Achievements';
import Projects from './Projects';

export default function App(): ReactElement {
    return (
        <>
            <Header/>
            <Skills/>
            <Achievements/>
            <Projects/>
        </>
    );
}