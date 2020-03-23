import {default as React, ReactElement} from 'react';
import styled from 'styled-components';
import SocialHandles from './SocialHandles';
import ExternalLink from './ExternalLink';

export default function App(): ReactElement {
    return (
        <Div>
            <h1>Neel Kamath</h1>
            <SocialHandles/>
            <h2>
                <ExternalLink href='https://bit.ly/2xfpvrB'>Résumé</ExternalLink>
            </h2>
        </Div>
    );
}

const Div = styled.div`
    @media only screen and (min-width: 375px) {
        margin-top: 17.5em;
    }
    text-align: center;
    background-image: linear-gradient(
        -90deg, 
        rgba(2, 18, 27, 0.25), 
        rgba(0, 233, 255, 0.5), 
        rgba(2, 18, 27, 0.25)
    );
    margin-top: 8.5em;
    padding: 0.1em 0;
`;