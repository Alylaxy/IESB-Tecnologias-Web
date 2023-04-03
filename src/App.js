
import Filtro from './components/filtro/filtro-busca';
import NavBar from './components/nav-bar/nav-bar';
import Catalogo from './components/catalogo/catalogo';
import Destaque from './components/destaque/destaque';
import { Container } from './App-style';

function App() {
  return (
    <Container>
      <NavBar />
      <Filtro />
      <Destaque />
      <Catalogo/>
    </Container>
  );
}

export default App;
