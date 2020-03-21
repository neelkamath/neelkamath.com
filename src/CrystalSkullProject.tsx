import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import CrystalSkullImage from '../public/projects/crystal_skull.jpg';
import Project from './Project';
import ExternalLink from './ExternalLink';

export default function CrystalSkullProject(): ReactElement {
    return (
        <Project
            name='Crystal Skull'
            github='https://github.com/neelkamath/crystal-skull'
            icons={['devicon-docker-plain', 'devicon-gradle-plain']}
            image={CrystalSkullImage}
            imageAltText='Crystal skull'
        >
            💀 Containerized <ExternalLink href='https://neelkamath.gitlab.io/crystal-skull/'>HTTP API</ExternalLink> in
            Kotlin which generates a complete quiz using just a topic name or supplied text
        </Project>
    );
}