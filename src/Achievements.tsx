import React, {ReactElement} from 'react';
// @ts-ignore: Cannot find module.
import BackendBadge from '../public/achievements/devfolio_badge.png';
// @ts-ignore: Cannot find module.
import InGeniusCertificate from '../public/achievements/ingenius_top_10.jpg';
// @ts-ignore: Cannot find module.
import InOutCertificate from '../public/achievements/inout_participant.pdf';
// @ts-ignore: Cannot find module.
import FreelancingScreenshot from '../public/achievements/freelancing.png';
import ExternalLink from './ExternalLink';

export default function Achievements(): ReactElement {
    return (
        <>
            <h1>Achievements</h1>
            <ul>
                <li>
                    Earned the Devfolio <a href={BackendBadge}>Backend badge</a>
                </li>
                <li>
                    Selected to attend{' '}
                    <ExternalLink href="https://devfolio.co/submissions/apollo">InOut 6.0</ExternalLink>
                    {' '}from 5000+ applicants
                </li>
                <li>
                    <a href={InGeniusCertificate}>Top 10</a> of 100+ teams in inGenius 2018 hackathon
                </li>
                <li>
                    <a href={InOutCertificate}>Top 5%</a> of 4500+ applicants from 10+ countries in InOut 5.0 hackathon
                </li>
                <li>
                    <a href={FreelancingScreenshot}>Freelanced</a> Android app
                </li>
            </ul>
        </>
    );
}