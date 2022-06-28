import styled from 'styled-components';

import Topo from './componentes/Topo';

function App() {

  //render
  return (
    <Tela>
      <Topo />
    </Tela>
  );
}

const Tela = styled.div`
 background-color: red;
`;

export default App;
