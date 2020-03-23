import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Header from './Header';
import styled from 'styled-components';

const H1 = styled.h1`
    text-align: center;
`;

ReactDOM.render(
    <>
        <Header/>
        <H1>
            <a href='https://bit.ly/39egexc'>Résumé</a>
        </H1>
    </>,
    document.querySelector('#root')
);