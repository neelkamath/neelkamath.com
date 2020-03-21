import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import DuoLudioGIF from '../public/projects/duo_ludio.gif';
import Project from './Project';
import ExternalLink from './ExternalLink';

export default function DuoLudioProject(): ReactElement {
    return (
        <Project
            name='Duo Ludio'
            github='https://github.com/neelkamath/duo-ludio'
            icons={['devicon-typescript-plain', 'devicon-css3-plain', 'devicon-html5-plain']}
            image={DuoLudioGIF}
            imageAltText='Demo GIF'
        >
            🎶 Categorized binaural beats <ExternalLink href='https://duo-ludio.netlify.com/'>PWA</ExternalLink>
        </Project>
    );
}