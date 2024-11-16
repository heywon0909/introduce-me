import { Flex } from '@common/styled'
import styled from '@emotion/styled'

export const ContainerWrapper = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    position: relative;
    flex-direction: row;
    justify-content: center;
    align-items: flex-start;
    background-color: rgb(14, 16, 15);
    margin-top: 10%;
`

export const FlexContainer = styled.div`
    ${Flex};
    gap: 10px;
    justify-content: space-between;
`

export const UserTitle = styled.div`
    font-family: NotoSansKR-Bold;
    background: linear-gradient(45deg, #f6a8cc, #8e47c8);
    background-clip: text;
    color: transparent;
    font-size: 1.3rem;
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
    width: 50%;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: rgba(39, 39, 42, 1);
    gap: 3px;
    padding: 20px 2px;
    border-radius: 0.5rem;
`
export const Desc = styled.p`
    font-family: NotoSansKR-Bold;
    color: #7e51ff;
    font-size: 1.1rem;
    @media (max-width: 500px) {
        font-size: 1.1rem;
    }
`
export const DetailDesc = styled.p`
    font-family: NotoSansKR-Light;
    color: #fff;
    font-size: 1rem;
    width: 262px;
    @media (max-width: 500px) {
        font-size: 1.1rem;
    }
`
export const UserLink = styled.div`
    width: 15%;
    background: linear-gradient(to bottom left, #af64e3 0%, #6f72d1 87%);
    border-radius: 0.5rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

export const Userbanner = styled.div<{
    dir?: 'column' | 'row'
    width?: string
}>`
    background-color: rgba(39, 39, 42, 1);
    display: flex;
    flex-direction: ${({ dir }) => (dir ? dir : 'column')};
    justify-content: space-evenly;
    padding: 10px 10px;
    border-radius: 0.5rem;
    width: ${({ width }) => width + '%'};
`

export const UserDesc = styled.div<{
    dir?: 'column' | 'row'
    width?: string
}>`
    display: flex;
    flex-direction: ${({ dir }) => (dir ? dir : 'column')};
    justify-content: space-evenly;
    padding: 10px 10px;
    border-radius: 0.5rem;
    width: ${({ width }) => width + '%'};
    font-family: NotoSansKR-Light;
    color: #fff;
    background: linear-gradient(to bottom, transparent, #3f3f46);
    background: linear-gradient(to bottom, #18181b, rgba(24, 24, 27, 0));
`

export const UserImg = styled.img`
    width: 120px;
    height: 120px;
    object-fit: cover;
    border-radius: 50%;
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
    font-family: Poppins-semibold;
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
    font-family: NotoSansKR-Bold;
    color: #fff;
    font-size: 1.1rem;
    @media (max-width: 500px) {
        font-size: 1.1rem;
    }
`
