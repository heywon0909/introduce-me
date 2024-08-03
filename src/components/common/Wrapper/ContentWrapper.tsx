import { forwardRef } from 'react';
import * as S from './styled'
interface Props{
    children: React.ReactNode;
    otherProps?: React.CSSProperties,
    dir?: 'row' | 'column'
}
export const ContentWrapper = forwardRef<HTMLDivElement,Props>(function ContentWrapper(props, ref) {
    const { children, otherProps, dir } = props;
    return (
    <S.Wrapper style={{...otherProps}} dir={dir} ref={ref} className={ref ? 'wrapper': ''}>
        {children}
    </S.Wrapper>
    )
})

ContentWrapper.displayName = 'ContentWrapper'
