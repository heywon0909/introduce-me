import styled from '@emotion/styled'

export const Wrapper = styled.div<{ dir?: 'row' | 'column' }>`
    display: flex;
    flex-direction: ${({ dir }) => dir || 'column'};
    align-items: center;
    justify-content: center;
    width: 100%;
`
