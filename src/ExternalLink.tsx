import React, {ReactElement} from 'react';

export interface ExternalLinkProps {
    readonly href: string
    readonly children: React.ReactNode
}

export default function ExternalLink(props: ExternalLinkProps): ReactElement {
    return <a href={props.href} target='_blank' rel='noopener'>{props.children}</a>;
}