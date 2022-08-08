import  D3Map  from '../../components/D3Map/D3Map'
import  { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import styled from 'styled-components'
import {GlobalStyles} from '../../components/ui/ui'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';
import {  manifestObject, mapObject } from '../../model'
import { atomFamily, useRecoilValue, atom, useRecoilState } from 'recoil';
import { getWorldData } from '../../recoil/selectors/worldSelectors';
import * as d3geo from 'd3-geo'
import { manifestState } from '../../recoil/atoms/manifestAtoms';

//import { manifestState } from '../../recoil/atoms/manifestAtoms'
import { getManifest } from '../../recoil/selectors/manifestSelectors';



const MapWidget = () => {
    const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
    //console.log("world data back")
    //console.log(worldData)
    //const manifestData: manifestObject = useRecoilValue(getManifest) as manifestObject
    const worldmanifest3: manifestObject = useRecoilValue(getManifest) as manifestObject
    //console.log("check this against manifest")
    //console.log(worldmanifest3.manifest)
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
    console.log("manifest")
    console.log(manifest)      
    const [worldmanifest, setWorldmanifest] = useRecoilState(manifestState) 
    console.log("get manifest state")
    console.log (worldmanifest)   
    //const newmanifest = () => setWorldmanifest(manifest)
    useEffect(() => {
      // results
       //console.log(worldData.mapFeatures.length)
       //console.log(`Result: ${JSON.stringify(worldData.mapFeatures)}`)
    })
    return (
      <>
        { worldmanifest3? (
          <>
            <LeftSidebar/>
            <D3Map  mapManifest={ worldmanifest3 }/>
            <RightSidebar/> 
          </>
        ) : (
          <>Loading!</>
        )}
      </>
    )
  }
  export default MapWidget 


