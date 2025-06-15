import { ErrorFallbackProps } from '@error/ErrorBoundary'

import { Text } from '@common/styled'
import { Button } from '@components/common/Button/styled'
import { Mackey } from 'bunney-ui/Mackey'
import * as S from './styled'
interface Props {
    error?: ErrorFallbackProps['error']
    reset: () => void
}
export const ErrorFallback = ({ reset }: Props) => (
        <S.FullWrapper gap={15}>
            <Mackey />
            <Text>Error is Found</Text>
            <Button
                onClick={() => {
                    console.log('왜 안돼')
                    reset()
                }}
            >
                try again
            </Button>
        </S.FullWrapper>
    )
