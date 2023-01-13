import { Container, Logo } from './styles'
import imgLogo from '../../assets/logo.svg'

export const Header = () => {
  return (
    <>
      <Container>
        <Logo src={imgLogo} />
      </Container>
    </>
  )
}
