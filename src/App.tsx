import React, { RefObject, useEffect, useRef } from 'react';
import logo from './logo.svg';
import './App.scss';
import { useRecoilValue } from 'recoil'
import {  mapObject } from './model'

import { getWorldData } from './recoil/selectors/worldSelectors'
import * as d3 from 'd3'
import { deflateRaw } from 'zlib';
//import *  from 'bertin'


//import * as bertin from 'bertin'
const bertin = require('bertin');

const MapD3 = () => {

  const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
  const ref: RefObject<HTMLDivElement> = React.createRef()

  const thing = bertin.draw({
    params: {
       projection: d3.geoMercator(),
       clip:true
     },
    layers: [
     {type: "simple", geojson: worldData.mapFeatures, tooltip: ["$ISO3", "$NAMEen"] },
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
    <div className="App">
      <p> Hello World</p>
      <MapD3/>
    </div>
       
  );
}

export default App;
