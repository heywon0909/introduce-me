import { ContainerWrapper, LinkButton, Text } from '@common/styled'
import { SmileyBunney } from 'bunney-ui/SmileyBunney'

export const NotFoundPage = () => (
        <ContainerWrapper gap={20}>
            <SmileyBunney color="linear-gradient(#201e71, #70899b)" />
            <Text>Sorry, This Page is not allowed</Text>
            <LinkButton to="/">go main</LinkButton>
        </ContainerWrapper>
    )
