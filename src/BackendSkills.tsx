import React, {ReactElement} from 'react';
// @ts-ignore: Module cannot be found.
import KotlinIcon from '../public/skills/kotlin.png';
// @ts-ignore: Module cannot be found.
import PythonIcon from '../public/skills/python.png';
// @ts-ignore: Module cannot be found.
import PostgreSQLIcon from '../public/skills/postgresql.png';
// @ts-ignore: Module cannot be found.
import MongoDBIcon from '../public/skills/mongodb.png';
// @ts-ignore: Module cannot be found.
import OpenAPIIcon from '../public/skills/openapi.png';
import SkillsTable from './SkillsTable';
import SkillsTableRow from './SkillsTableRow';

const row1 = [
    {
        tech: 'Kotlin',
        url: 'https://kotlinlang.org/',
        image: KotlinIcon,
    },
    {
        tech: 'Python',
        url: 'https://www.python.org/',
        image: PythonIcon,
    },
    {
        tech: 'SQL',
        url: 'https://www.postgresql.org/',
        image: PostgreSQLIcon,
        imageAltText: 'PostgreSQL'
    },
];
const row2 = [
    {
        tech: 'NoSQL',
        url: 'https://www.mongodb.com/',
        image: MongoDBIcon,
        imageAltText: 'MongoDB',
    },
    {
        tech: 'OpenAPI',
        url: 'https://www.openapis.org/',
        image: OpenAPIIcon,
    },
];

export default function BackendSkills(): ReactElement {
    return (
        <>
            <h2>Backend (Proficient)</h2>
            <SkillsTable>
                <SkillsTableRow skills={row1}/>
                <SkillsTableRow skills={row2}/>
            </SkillsTable>
        </>
    );
}