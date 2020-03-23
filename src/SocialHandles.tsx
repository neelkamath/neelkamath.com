import React, {ReactElement} from 'react';
import SocialHandle from './SocialHandle';
// @ts-ignore: Cannot find module.
import GitHubIcon from './social_handles/github.png';
// @ts-ignore: Cannot find module.
import GmailIcon from './social_handles/gmail.png';
// @ts-ignore: Cannot find module.
import LinkedInIcon from './social_handles/linkedin.png';
// @ts-ignore: Cannot find module.
import HackerRankIcon from './social_handles/hackerrank.png';
// @ts-ignore: Cannot find module.
import StackOverflowIcon from './social_handles/stackoverflow.png';
// @ts-ignore: Cannot find module.
import CodeStatsIcon from './social_handles/code_stats.svg';

export default function SocialHandles(): ReactElement {
    return (
        <>
            <SocialHandle href='https://github.com/neelkamath' alt='GitHub' img={GitHubIcon}/>
            <SocialHandle href='mailto:neelkamathonline@gmail.com' alt='email' img={GmailIcon}/>
            <SocialHandle href='https://www.linkedin.com/in/neelkamath/' alt='LinkedIn' img={LinkedInIcon}/>
            <br/>
            <SocialHandle href='https://www.hackerrank.com/neelkamath' alt='HackerRank' img={HackerRankIcon}/>
            <SocialHandle
                href='https://stackoverflow.com/users/6354805/neel-kamath'
                alt='Stack Overflow'
                img={StackOverflowIcon}
            />
            <SocialHandle href='https://codestats.net/users/neelkamath' alt='Code::Stats' img={CodeStatsIcon}/>
        </>
    );
}