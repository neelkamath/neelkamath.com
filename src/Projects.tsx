import React, {ReactElement} from 'react';
import CrystalSkullProject from './CrystalSkullProject';
import SpaCyServerProject from './SpaCyServerProject';
import TimeBendProject from './TimeBendProject';
import DuoLudioProject from './DuoLudioProject';
import KWikipediaProject from './KWikipediaProject';
import ApolloPrototypeProject from './ApolloPrototypeProject';

export default function Projects(): ReactElement {
    return (
        <>
            <h1>Projects</h1>
            <CrystalSkullProject/>
            <SpaCyServerProject/>
            <TimeBendProject/>
            <DuoLudioProject/>
            <KWikipediaProject/>
            <ApolloPrototypeProject/>
        </>
    );
}