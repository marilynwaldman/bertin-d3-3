//

import React, { RefObject, useEffect, useRef } from 'react';
import './D3Map.scss';
import styled from 'styled-components'

const bertin = require('bertin');

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;        
`


const D3Map = (props: IWorldMapProps) => {

    const ref: RefObject<HTMLDivElement> = React.createRef()
    const bertinmap = bertin.draw(props.mapManifest)
  
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
   
    mapManifest:  any
    
  }

