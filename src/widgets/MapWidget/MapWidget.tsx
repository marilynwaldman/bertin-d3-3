import  D3Map  from '../../components/D3Map/D3Map'
import  { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import styled from 'styled-components'
import {GlobalStyles} from '../../components/ui/ui'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';
import {  mapObject } from '../../model'
import { useRecoilValue } from 'recoil';
import { getWorldData } from '../../recoil/selectors/worldSelectors';
import * as d3geo from 'd3-geo'

const MapWidget = () => {
    const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
    const manifest = {
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
              fillOpacity: .5
             }    
        ]
       }
      
    
  
    useEffect(() => {
      // results
       //console.log(worldData.mapFeatures.length)
       console.log(`Result: ${JSON.stringify(worldData.mapFeatures)}`)
    })
    return (
      <>
        { worldData.mapFeatures? (
          <>
            <LeftSidebar/>
            <D3Map worldData={ worldData }   manifest={ manifest}/>
            <RightSidebar/> 
          </>
        ) : (
          <>Loading!</>
        )}
      </>
    )
  }
  export default MapWidget