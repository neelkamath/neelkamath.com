import React, {ReactElement} from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';

export interface ProjectProps {
    readonly name: string
    readonly github: string
    /** Plain icons (e.g., `'devicon-html5-plain'`) from http://konpa.github.io/devicon/ of the tech used. */
    readonly icons: string[]
    readonly image: string
    readonly imageAltText: string
    /** Description. */
    children: React.ReactNode
}

export default function Project(props: ProjectProps): ReactElement {
    return (
        <>
            <Div>
                <ExternalLink href={props.github}>{props.name}</ExternalLink>
                {props.icons.reverse().map((value: string) => <I key={value} className={value}/>)}
            </Div>
            <br/>
            <Img alt={props.imageAltText} src={props.image}/>
            <p>{props.children}</p>
        </>
    );
}

const Div = styled.div`
    font-size: 1.5em;
    padding-top: 0.75em;
`;

const I = styled.i`
    float: right;
    padding-left: 0.1em;
`;

const Img = styled.img`
    @keyframes fade-in {
        from {
            opacity: 0;
        }
        to {
            opacity: 1;
        }
    }
    animation: fade-in 0.5s;
    border-radius: 0.25em;
`;