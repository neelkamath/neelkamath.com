import React, {ReactElement} from 'react';
import ExternalLink from './ExternalLink';
import {SkillsImage} from './SkillsImage';

export interface Skill {
    /** Example: `'Kotlin'`. */
    readonly tech: string
    readonly url: string
    readonly image: string
    /** This will have the value of `tech` if this is `undefined`. */
    readonly imageAltText?: string
}

export interface SkillsTableRowProps {
    /** Must have a length of 1, 2, or 3. */
    readonly skills: Skill[]
}

export default function SkillsTableRow(props: SkillsTableRowProps): ReactElement {
    const length = props.skills.length;
    return (
        <>
            <tr>
                {length === 1 ? <td/> : createImage(props.skills[0])}
                {createSecondTableData(props.skills, createImage)}
                {length === 1 ? <td/> : createImage(props.skills[length - 1])}
            </tr>
            <tr>
                {length === 1 ? <td/> : <td>{props.skills[0].tech}</td>}
                {createSecondTableData(props.skills, (skill: Skill) => <td>{skill.tech}</td>)}
                {length === 1 ? <td/> : <td>{props.skills[length - 1].tech}</td>}
            </tr>
        </>
    );
}

function createImage(skill: Skill): ReactElement {
    return (
        <td>
            <ExternalLink href={skill.url}>
                <SkillsImage
                    alt={skill.imageAltText === undefined ? skill.tech : skill.imageAltText}
                    src={skill.image}
                />
            </ExternalLink>
        </td>
    );
}

function createSecondTableData(skills: Skill[], creator: (skill: Skill) => ReactElement): ReactElement {
    if (skills.length === 1) return creator(skills[0]);
    if (skills.length === 2) return <td/>;
    return creator(skills[1]);
}