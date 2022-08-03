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

  useEffect(() => {
    draw()
  })

  const draw = () => {
    const thing = bertin.draw({
      params: {
         projection: d3.geoMercator(),
         clip:true
       },
      layers: [
       {type: "simple", geojson: worldData.mapFeatures, tooltip: ["$ISO3", "$NAMEen"] },
      ]
     })
    d3.select(ref.current).append(thing)
    d3.select('svg').append('g').attr('transform', 'translate(250, 0)').append('rect').attr('width', 500).attr('height', 500).attr('fill', 'tomato')
  }

  return (
    <div className="MapD3" ref={ref}>
      <svg width="500" height="500">
        <g transform="translate(0, 0)">
          <rect width="500" height="500" fill="green" />
        </g>
      </svg>
    </div>
  )
}

function Mapit() {
  const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
  //console.log(`Result: ${JSON.stringify(worldData.mapFeatures)}`)
  const thing = bertin.draw({
    params: {
       projection: d3.geoMercator(),
       clip:true
     },
    layers: [
     {type: "simple", geojson: worldData.mapFeatures, tooltip: ["$ISO3", "$NAMEen"] },
    ]
   })
   //console.log(typeof thing);
   console.log(thing)

   const svg = useRef(null);
   useEffect(()=>{
    if(svg.current){
        svg.current.appendChild(thing)
    } 
    }, []);

   return (
      <div ref={svg}/>
   );
  
}  


function App() {
  
  return (
    <div className="App">
      <p> Hello World</p>
      <Mapit/>
  
      <header className="App-header">
    
    
      </header>
    </div>
       
  );
}

export default App;
