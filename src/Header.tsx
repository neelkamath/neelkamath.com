// @ts-ignore: Cannot find module
import GitHubIcon from '../public/header_icons/github.png';
// @ts-ignore: Cannot find module.
import GmailIcon from '../public/header_icons/gmail.png';
// @ts-ignore: Cannot find module.
import LinkedInIcon from '../public/header_icons/linkedin.png';
// @ts-ignore: Cannot find module.
import HackerRankIcon from '../public/header_icons/hackerrank.png';
// @ts-ignore: Cannot find module.
import StackOverflowIcon from '../public/header_icons/stackoverflow.png';
// @ts-ignore: Cannot find module.
import CodeStatsIcon from '../public/header_icons/code_stats.svg';
import React from 'react';
import styled from 'styled-components';
import SocialHandle from './SocialHandle';

export default function Header() {
    return (
        <Div>
            Neel Kamath
            <br/>
            <SocialHandle href='https://github.com/neelkamath' alt='GitHub' img={GitHubIcon}/>
            <SocialHandle href='mailto:neelkamathonline@gmail.com' alt='email' img={GmailIcon}/>
            <SocialHandle href='https://www.linkedin.com/in/neelkamath/' alt='LinkedIn' img={LinkedInIcon}/>
            <SocialHandle href='https://www.hackerrank.com/neelkamath' alt='HackerRank' img={HackerRankIcon}/>
            <SocialHandle
                href='https://stackoverflow.com/users/6354805/neel-kamath'
                alt='Stack Overflow'
                img={StackOverflowIcon}
            />
            <SocialHandle href='https://codestats.net/users/neelkamath' alt='Code::Stats' img={CodeStatsIcon}/>
        </Div>
    );
}

const Div = styled.div`
    text-align: center;
    background-color: white;
    border-radius: 1em;
    color: black;
    font-size: 2.5em;
    font-weight: bolder;
    justify-content: center;
    margin: 0.5em;
    padding: 0.25em;
`;