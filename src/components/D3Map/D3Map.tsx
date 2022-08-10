//

import React, { RefObject, useEffect, useRef } from 'react';
import './D3Map.scss';
import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil';
import { manifestState } from '../../recoil/atoms/manifestAtoms';
import { getNewManifest } from '../../recoil/selectors/manifestSelector'

const bertin = require('bertin');

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;        
`


const D3Map = (props: IWorldMapProps) => {
    const worldM = useRecoilValue(manifestState)
    //const [selectedElement, setSelectedElement] = useRecoilState(getNewManifest) as any
    const ref: RefObject<HTMLDivElement> = React.createRef()
    console.log("in d3Map")
    console.log(worldM)
    //const bertinmap = bertin.draw(props.mapManifest)
    
    const bertinmap = bertin.draw(useRecoilValue(manifestState))
  
    useEffect(() => {
      draw()
    })
  
    const draw = () => {    
      ref.current?.appendChild(bertinmap)      
    }  
    return (
        <CanvasContainer>
            <div  ref={ref}/>  
        </CanvasContainer>
      
    )
  }
  
  export default D3Map  

  interface IWorldMapProps {
   
    
    
  }

