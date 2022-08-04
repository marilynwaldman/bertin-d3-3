
import './App.scss';
import  D3Map  from './components/D3Map/D3Map'
import  { LeftSidebar}  from './components/LeftSidebar/LeftSidebar'
import styled from 'styled-components'
import {GlobalStyles} from './components/ui/ui'
import { RightSidebar } from './components/RightSidebar/RightSidebar';



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
      <LeftSidebar/>
      <D3Map/>
      <RightSidebar/>
    </Container>
       
  );
}

export default App;
