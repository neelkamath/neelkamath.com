import {default as React, ReactElement} from 'react';
import Header from './Header';
import styled from 'styled-components';

export default function App(): ReactElement {
    return (
        <>
            <Header/>
            <H1>
                <a href='https://bit.ly/39egexc'>Résumé</a>
            </H1>
        </>
    );
}

const H1 = styled.h1`
    text-align: center;
`;