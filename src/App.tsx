
import './App.scss';
import  D3Map  from './components/D3Map/D3Map'
import styled from 'styled-components'



//import * as bertin from 'bertin'
const bertin = require('bertin');

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

function App() {
  
  return (
    <Container>
      <D3Map/>
    </Container>
       
  );
}

export default App;
