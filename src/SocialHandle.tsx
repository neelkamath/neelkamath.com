import React, {ReactElement} from 'react';
import styled from 'styled-components';

export interface SocialHandleProps {
    /** URL (e.g., `'https://github.com/johndoe'`). */
    readonly href: string
    /** Image's alt text. */
    readonly alt: string
    /** Image's URL. */
    readonly img: string
}

export default function SocialHandle(props: SocialHandleProps): ReactElement {
    return (
        <A href={props.href} target='_blank' rel='noopener'>
            <Img alt={props.alt} src={props.img}/>
        </A>
    );
}

const A = styled.a`
    text-decoration: none;
`;

const Img = styled.img`
    margin: 0 0.1em;
    width: 0.75em;
`;