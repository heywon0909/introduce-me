import * as S from './styled';
interface Props{
    leftFrameText?: string;
    rightFrameText?: string;
}
export const FrameText = ({ leftFrameText, rightFrameText }: Props) => {
    const leftText = leftFrameText?.split('').map((v,i) => ({ key: i, value: v }));
    const rightText = rightFrameText?.split('').map((v, i) => ({ key: i, value: v }));
    return (
        <>
            {leftText && (
                <S.Frame left={3}>
                    {leftText.map(({key,value}) => (
                        <S.FrameText key={key}>{value}</S.FrameText>
                    ))}
                </S.Frame>
            )}
            {
                rightText && (
                    <S.Frame right={3}>
                        {rightText.map(({ key, value }) => (
                            <S.FrameText key={key}>{value}</S.FrameText>
                        ))}
                    </S.Frame>
                )
            }
        </>
        
    )
};