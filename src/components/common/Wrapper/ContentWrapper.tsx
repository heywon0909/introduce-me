import { CSSProperties, forwardRef, ReactNode } from 'react'
import * as S from './styled'
interface Props {
    children: ReactNode
    otherProps?: CSSProperties
    dir?: 'row' | 'column'
}
export const ContentWrapper = forwardRef<HTMLDivElement, Props>(
    function ContentWrapper(props, ref) {
        const { children, otherProps, dir } = props
        return (
            <S.CommonSection
                style={{ ...otherProps }}
                dir={dir}
                ref={ref}
                className={ref ? 'colored' : ''}
            >
                {children}
            </S.CommonSection>
        )
    }
)

ContentWrapper.displayName = 'ContentWrapper'
