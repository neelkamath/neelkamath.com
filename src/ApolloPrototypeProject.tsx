import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import ApolloImage from '../public/projects/apollo.png';
import Project from './Project';
import ExternalLink from './ExternalLink';

export default function ApolloPrototypeProject(): ReactElement {
    return (
        <Project
            name='Apollo Prototype'
            github='https://github.com/neelkamath/apollo-prototype'
            icons={['devicon-docker-plain', 'devicon-mongodb-plain']}
            image={ApolloImage}
            imageAltText='Traffic'
        >
            🚌 InOut 6.0 Future Mobility Hack - Bus route generator HTTP API in Kotlin{' '}
            (<ExternalLink href='https://apollo-project.surge.sh/'>frontend</ExternalLink> by teammate)
        </Project>
    );
}