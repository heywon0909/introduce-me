import styled from '@emotion/styled'

export const CommonSection = styled.section<{ dir?: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${({ dir }) => dir ?? 'column'};
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`
