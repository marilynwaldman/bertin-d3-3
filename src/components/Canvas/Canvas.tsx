import React, { RefObject, useRef} from 'react'
import { useRecoilValue } from 'recoil'
import styled from 'styled-components'
import { manifestState } from '../../recoil/atoms/manifestAtoms'
import  { D3Map }   from '../D3Map/D3Map'


//import {ElementsContext} from './App'

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;
`

export const Canvas: React.FC = () => {
    
    const nodeRef: RefObject<HTMLDivElement> = React.createRef()
    

    return (
        <CanvasContainer>    
            <D3Map />  
        </CanvasContainer>
    )
}