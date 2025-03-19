import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'

import { BotaoTema, Descricao, SideBarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Barros</Titulo>
      <Paragrafo tipo="secundario" fontSize={16}>
        Lucas Barros
      </Paragrafo>
      <Descricao tipo="secundario" fontSize={12}>
        Engenheiro Front-End
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default Sidebar
