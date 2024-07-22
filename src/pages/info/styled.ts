import styled from '@emotion/styled'

export const ContainerWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(14, 16, 15);
    margin-top: 10%;
`

export const UserTitle = styled.div`
    font-family: Poppins-black;
    color: rgb(202 202 202);
    font-size: 2rem;
    @media (max-width: 500px) {
        font-size: 1.1rem;
    }
`

export const Title = styled.div`
    font-family: Poppins-black;
    color: #fff;
    font-size: 1.5rem;
`

export const InfoWrapper = styled.div`
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    gap: 20px;
`

export const Mybanner = styled.div`
    width: auto;
    height: auto;
`

export const Userbanner = styled.div<{
    dir?: 'column' | 'row'
}>`
    display: flex;
    flex-direction: ${({ dir }) => (dir ? dir : 'column')};
    justify-content: space-between;
    padding: 2px 2px;
    align-items: center;
`

export const UserImg = styled.img`
    width: 180px;
    height: 180px;
    object-fit: cover;
    border-radius: 8%;
    float: right;
    @media (max-width: 500px) {
        width: 130px;
        height: 130px;
    }
`

export const UserInfoWrapper = styled.div`
    width: 60%;
    padding: 2px 2px;
    height: 291px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    justify-content: center;
    align-items: center;
`

export const UserInfo = styled.div`
    width: 100%;
    display: flex;
    padding: 2px 2px;
`

export const UserWrapper = styled.div<{ url?: string }>`
    width: 100%;
    display: flex;
    gap: 15px;
    justify-content: center;
    align-items: center;
    background-color: #27292cbf;
    padding: 2px 2px;
`

export const UserText = styled.span`
    font-size: 1rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    margin: 0;
    font-family: Poppins-black;
    width: 200px;
    color: rgb(238 210 247);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
`

export const Text = styled.span`
    font-size: 1rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    margin: 0;
    font-family: Poppins-black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    color: #9f9f9f;
`

export const SkillText = styled.span<{
    importance: 'strong' | 'knowlegable' | 'etc'
}>`
    font-size: 1rem;
    letter-spacing: -0.01em;
    line-height: 100%;
    color: ${({ importance }) =>
        importance === 'strong'
            ? 'rgb(76 61 255)'
            : importance === 'knowlegable'
            ? 'rgb(28 222 28)'
            : 'white'};
    margin: 0;
    font-family: Poppins-black;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    margin-bottom: 10px;
`

export const SkillsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const SkillSection = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const Skills = styled.div`
    width: 100%;
    gap: 4%;
    display: flex;
    padding: 2px 2px;
`

export const TitleText = styled.span`
    font-size: 1rem;
    letter-spacing: -0.01em;
    line-height: 20px;
    margin: 0;
    font-family: Kanit-medium;
    width: 100%;
    color: rgb(160 160 160);
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    position: relative;
    @media (max-width: 600px) {
        font-size: 1rem;
    }
    margin-bottom: 10px;
`
