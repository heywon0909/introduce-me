import { StyleIcon } from '@components/common/IconButton/StyleIcon'
import { ContentWrapper } from '@components/common/Wrapper/ContentWrapper'
import { FaMedium, FaGithub } from 'react-icons/fa6'
import { SiNpm } from 'react-icons/si'
import * as S from './styled'

export const Footer = () => {
    return (
        <S.Footer id="footer">
            <ContentWrapper dir="row">
                <S.Content>
                    <S.InfoTitle>Thank you</S.InfoTitle>
                    <S.Text>Heywon0909&apos;s portfolio</S.Text>
                    <ContentWrapper props={{ gap: '3px' }} dir="row">
                        <StyleIcon
                            icon={<FaMedium />}
                            to="https://medium.com/@hw731911"
                        ></StyleIcon>
                        <StyleIcon
                            icon={<FaGithub />}
                            to="https://github.com/heywon0909"
                        ></StyleIcon>
                        <StyleIcon
                            icon={<SiNpm />}
                            to="https://www.npmjs.com/~heywon"
                        ></StyleIcon>
                    </ContentWrapper>
                    <S.Text>2024 © All Rights Reserved</S.Text>
                </S.Content>
                <S.Content>
                    <ContentWrapper
                        props={{
                            background: 'rgb(40 104 255)',
                            height: '100%',
                            minHeight: '200px',
                            width: '100%',
                            maxWidth: '300px',
                            paddingTop: '18px',
                            marginTop: '2px',
                            borderRadius: '8px',
                            gap: '10px',
                        }}
                    >
                        <S.InfoTitle margin={0}>Info</S.InfoTitle>
                        <S.ListWrapper>
                            <S.List>
                                {' '}
                                <S.Text>이메일: hw731911@gmail.com</S.Text>
                            </S.List>
                            <S.List>
                                {' '}
                                <S.Text>소속: tmax coreai</S.Text>
                            </S.List>
                            <S.List>
                                {' '}
                                <S.Text>전화번호: please contact email</S.Text>
                            </S.List>
                        </S.ListWrapper>
                    </ContentWrapper>
                </S.Content>
            </ContentWrapper>
            <div
                style={{
                    backdropFilter: 'blur(40px)',
                }}
            ></div>
        </S.Footer>
    )
}
