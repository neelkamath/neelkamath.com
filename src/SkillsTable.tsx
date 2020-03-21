import styled from 'styled-components';
import React, {ReactElement} from 'react';

export interface SkillsTableProps {
    readonly children: React.ReactNode
}

export default function SkillsTable(props: SkillsTableProps): ReactElement {
    return (
        <Table>
            <tbody>{props.children}</tbody>
        </Table>
    );
}

const Table = styled.table`
    border-collapse: separate;
    border-spacing: 0 1em;
    font-size: 0.8em;
    height: 100%;
    text-align: center;
    width: 100%;
`;