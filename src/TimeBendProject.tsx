import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import TimeBendImage from '../public/projects/time_bend.png';
import Project from './Project';
import ExternalLink from './ExternalLink';

export default function TimeBendProject(): ReactElement {
    return (
        <Project
            name='Time Bend'
            github='https://github.com/neelkamath/time-bend-android'
            icons={['devicon-android-plain', 'devicon-java-plain']}
            image={TimeBendImage}
            imageAltText='Time Bend Web screenshot'
        >
            ⏳ Android{' '}
            <ExternalLink href='https://play.google.com/store/apps/details?id=io.github.neelkamath.timebend'>
                productivity app
            </ExternalLink>
            {' '}for Chetan Surpur's idea of time bending
        </Project>
    );
}