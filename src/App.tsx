import React, { RefObject, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useRecoilValue } from 'recoil'
import {  mapObject } from './model'

import { getWorldData } from './recoil/selectors/worldSelectors'
import * as d3 from 'd3'
import * as d3geo from 'd3-geo'
import { deflateRaw } from 'zlib';
//import *  from 'bertin'
import styled from 'styled-components'


//import * as bertin from 'bertin'
const bertin = require('bertin');

const Container = styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 100vh;
`

const MapD3 = () => {

  const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
  const ref: RefObject<HTMLDivElement> = React.createRef()

  const thing = bertin.draw({
    params: {
       projection: d3geo.geoAlbersUsa(),
       width: 350,
       height:300,
       clip:true
     },
    layers: [
     {type: "simple", geojson: worldData.mapFeatures, 
          tooltip: ["$ISO3", "$NAMEen"],
          fill: "blue",
          fillOpacity: .5,
         }    
    ]
   })

  useEffect(() => {
    draw()
  })

  const draw = () => {
   
    ref.current?.appendChild(thing)
    
  }

  return (
    <div  ref={ref}/>    
  )
}




function App() {
  
  return (
    <Container>
      <MapD3/>
    </Container>
       
  );
}

export default App;
