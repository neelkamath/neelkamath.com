import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import KWikipediaImage from '../public/projects/kwikipedia.jpg';
import Project from './Project';
import ExternalLink from './ExternalLink';

export default function KWikipediaProject(): ReactElement {
    return (
        <Project
            name='KWikipedia'
            github='https://github.com/neelkamath/kwikipedia'
            icons={['devicon-gradle-plain']}
            image={KWikipediaImage}
            imageAltText={'Book'}
        >
            📚 Kotlin/JVM Wikipedia{' '}
            <ExternalLink href='https://bintray.com/neelkamath/kwikipedia/kwikipedia'>library</ExternalLink>
        </Project>
    );
}