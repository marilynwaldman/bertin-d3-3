//

import React, { RefObject, useEffect, useRef } from 'react';
import {atomFamily, useRecoilState, atom, useSetRecoilState} from 'recoil'
import './D3Map.scss';
import { useRecoilValue } from 'recoil'
import {  mapObject } from '../../model'
import { getWorldData } from '../../recoil/selectors/worldSelectors'
import * as d3 from 'd3'
import * as d3geo from 'd3-geo'
import { Types } from './types'
//import { deflateRaw } from 'zlib';
//import *  from 'bertin'
import styled from 'styled-components'
//import * as bertin from 'bertin'
const bertin = require('bertin');

const CanvasContainer = styled.div`
    flex: 1;
    position: relative;
`

const D3Map = (props: IWorldMapProps) => {

    //const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
    const ref: RefObject<HTMLDivElement> = React.createRef()
    const manifest = {
        params: {
           projection: d3geo.geoAlbersUsa(),
           width: 350,
           height:300,
           clip:true
         },
        layers: [
         {type: "simple", geojson: props.worldData.mapFeatures, 
              tooltip: ["$ISO3", "$NAMEen"],
              fill: "blue",
              fillOpacity: .5,
             }    
        ]
       }

  
    const bertinmap = bertin.draw(manifest)
  
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
    worldData: Types.MapObject
  }

