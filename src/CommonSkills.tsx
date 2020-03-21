import React, {ReactElement} from 'react';
// @ts-ignore: Module cannot be found.
import DockerIcon from '../public/skills/docker.png';
// @ts-ignore: Module cannot be found.
import NodeIcon from '../public/skills/node.png';
// @ts-ignore: Module cannot be found.
import BashIcon from '../public/skills/bash.png';
// @ts-ignore: Module cannot be found.
import GitIcon from '../public/skills/git.png';
import SkillsTable from './SkillsTable';
import SkillsTableRow from './SkillsTableRow';

const row1 = [
    {
        tech: 'Docker',
        url: 'https://www.docker.com/',
        image: DockerIcon,
    },
    {
        tech: 'node.js',
        url: 'https://nodejs.org/',
        image: NodeIcon,
    },
];
const row2 = [
    {
        tech: 'Bash',
        url: 'https://en.wikipedia.org/wiki/Shell_script',
        image: BashIcon,
    },
    {
        tech: 'git',
        url: 'https://git-scm.com/',
        image: GitIcon,
    },
];

export default function CommonSkills(): ReactElement {
    return (
        <>
            <h2>Common</h2>
            <SkillsTable>
                <SkillsTableRow skills={row1}/>
                <SkillsTableRow skills={row2}/>
            </SkillsTable>
        </>
    );
}