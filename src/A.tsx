import React, {ReactElement} from 'react';
import styled from 'styled-components';
import ExternalLink from './ExternalLink';

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
        <A href={props.href}>
            <Img alt={props.alt} src={props.img}/>
        </A>
    );
}

const A = styled(ExternalLink)`
    text-decoration: none;
` as typeof ExternalLink;

const Img = styled.img`
    margin: 0 0.1em;
    width: 0.75em;
`;