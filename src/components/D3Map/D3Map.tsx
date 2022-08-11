//

import React, { RefObject, useEffect, useRef } from 'react';
import './D3Map.scss';
import styled from 'styled-components'
import { useRecoilState, useRecoilValue } from 'recoil';
import { manifestState } from '../../recoil/atoms/manifestAtoms';


const bertin = require('bertin');

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;        
`


const D3Map = (props: IWorldMapProps) => {
  const worldM = useRecoilValue(manifestState)
  const ref: RefObject<HTMLDivElement> = React.createRef()

  const bertinmap = bertin.draw(useRecoilValue(manifestState))
  console.log("bertinmap")
  console.log(bertinmap)


  useEffect(() => {
    
    draw()
  })

  const draw = () => {
    
    ref.current?.appendChild(bertinmap)
    

  }
  return (
    <CanvasContainer>
      <div ref={ref} />
    </CanvasContainer>
       
   

  )
}
//<div ref={ref} />
export default D3Map

interface IWorldMapProps {



}

