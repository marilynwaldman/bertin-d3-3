//

import React, { forwardRef, RefObject, useEffect, useRef } from 'react';
import './D3Map.scss';
import styled from 'styled-components'
import { RecoilRoot, useRecoilState, useRecoilValue } from 'recoil';
import { manifestState } from '../../recoil/atoms/manifestAtoms';
import { map } from 'd3';
import { nodeModuleNameResolver } from 'typescript';


const bertin = require('bertin');

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;        
`


export const D3Map = forwardRef((worldM, nodeRef) => {
  //const worldM = useRecoilValue(manifestState)
  
  
  const ref: RefObject<HTMLDivElement> = React.createRef()
  const bertinmap = bertin.draw(useRecoilValue(manifestState))
  
  console.log("in bertinmap")
  //console.log(bertinmap)

  useEffect(() => {  
    draw()
  })

  const draw = () => {

    ref.current?.appendChild(bertinmap)

    if (ref.current?.childElementCount  == 2) {
      //console.log("removing")
      ref.current?.childNodes[0].remove()
    }
  
    
  }
  return (
    <CanvasContainer>  
      <div ref={ref} />  
    </CanvasContainer>
  )
})
//<div ref={ref} />


interface IWorldMapProps {



}

function appendChild(bertinmap: any) {
  throw new Error('Function not implemented.');
}

function props(props: any, ref: any) {
  throw new Error('Function not implemented.');
}

function ref(props: (props: any, ref: any) => void, ref: any) {
  throw new Error('Function not implemented.');
}
//export default D3Map
