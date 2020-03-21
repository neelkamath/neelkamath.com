import styled from 'styled-components';

export const SkillsImage = styled.img`
    @keyframes spin {
        from {
            transform: rotateY(360deg);
        }
    }
    animation: 2s linear infinite spin;
    width: 4em;
`;