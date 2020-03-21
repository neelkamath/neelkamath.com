import React, {ReactElement} from 'react';
// @ts-ignore: Module cannot be found.
import ReactIcon from '../public/skills/react.png';
// @ts-ignore: Module cannot be found.
import PWAIcon from '../public/skills/pwa.png';
// @ts-ignore: Module cannot be found.
import TypeScriptIcon from '../public/skills/ts.png';
// @ts-ignore: Module cannot be found.
import JavaScriptIcon from '../public/skills/js.png';
// @ts-ignore: Module cannot be found.
import CSSIcon from '../public/skills/css.png';
// @ts-ignore: Module cannot be found.
import HTMLIcon from '../public/skills/html.png';
import SkillsTable from './SkillsTable';
import SkillsTableRow from './SkillsTableRow';

const row1 = [
    {
        tech: 'React',
        url: 'https://reactjs.org/',
        image: ReactIcon,
    },
    {
        tech: 'PWA',
        url: 'https://developers.google.com/web/progressive-web-apps/',
        image: PWAIcon,
    },
    {
        tech: 'TypeScript',
        url: 'http://www.typescriptlang.org/',
        image: TypeScriptIcon,
    },
];
const row2 = [
    {
        tech: 'JavaScript',
        url: 'https://en.wikipedia.org/wiki/JavaScript',
        image: JavaScriptIcon,
    },
    {
        tech: 'CSS',
        url: 'https://www.w3.org/Style/CSS/',
        image: CSSIcon,
    },
    {
        tech: 'HTML',
        url: 'https://en.wikipedia.org/wiki/HTML',
        image: HTMLIcon,
    },
];

export default function FrontendWebSkills(): ReactElement {
    return (
        <>
            <h2>Frontend Web (Competent)</h2>
            <SkillsTable>
                <SkillsTableRow skills={row1}/>
                <SkillsTableRow skills={row2}/>
            </SkillsTable>
        </>
    );
}