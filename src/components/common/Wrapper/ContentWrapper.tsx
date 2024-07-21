import * as S from './styled'
interface Props{
    children: React.ReactNode;
    props?: React.CSSProperties,
    dir?: 'row' | 'column'
}
export const ContentWrapper = ({children,props,dir}:Props) => {
    return (
    <S.Wrapper style={{...props}} dir={dir}>
        {children}
    </S.Wrapper>
    )
}