import React, {ReactElement} from 'react';
import CommonSkills from './CommonSkills';
import BackendSkills from './BackendSkills';
import FrontendWebSkills from './FrontendWebSkills';

export default function Skills(): ReactElement {
    return (
        <>
            <h1>Skills</h1>
            <CommonSkills/>
            <BackendSkills/>
            <FrontendWebSkills/>
        </>
    );
}