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
        <StyledExternalLink href={props.href}>
            <Img alt={props.alt} src={props.img}/>
        </StyledExternalLink>
    );
}

const StyledExternalLink = styled(ExternalLink)`
    text-decoration: none;
` as typeof ExternalLink;

const Img = styled.img`
    margin: 0.25em 0.5em;
    width: 2.5em;
`;