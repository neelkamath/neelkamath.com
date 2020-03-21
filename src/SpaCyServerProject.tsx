import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import SpaCyServerImage from '../public/projects/spacy_server.jpg';
import Project from './Project';
import ExternalLink from './ExternalLink';

export default function SpaCyServerProject(): ReactElement {
    return (
        <Project
            name='spaCy Server'
            github='https://github.com/neelkamath/spacy-server'
            icons={['devicon-python-plain', 'devicon-docker-plain']}
            image={SpaCyServerImage}
            imageAltText='spaCy Server cover'
        >
            🦜 Containerized <ExternalLink href='https://spacy.io/universe/project/spacy-server'>HTTP API</ExternalLink>
            {' '}for industial-strength NLP via spaCy and sense2vec
        </Project>
    );
}