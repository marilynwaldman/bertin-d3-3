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
    //const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
    //const manifestData: manifestObject = useRecoilValue(getManifest) as manifestObject
    //console.log("Manifest Data")
    //console.log(manifestData)
    const [worldmanifest, setWorldmanifest] = useRecoilState(manifestState) 
    console.log("get manifest state atom")
    console.log (worldmanifest) 
    //const x = { ...worldmanifest as any }
    //console.log("x")
    //console.log(x)
    
    //const y = {...x as any, x.layers[0].fill: 'blue' }
    //setWorldmanifest( x);
    //console.log("y")
    //console.log(y)

    //const newmanifest = () => setWorldmanifest(manifest)
    useEffect(() => {
      // results
       //console.log(worldData.mapFeatures.length)
       //console.log(`Result: ${JSON.stringify(worldData.mapFeatures)}`)
    })
    return (
      <>
        { worldmanifest? (
          <>
            <LeftSidebar/>
            <D3Map  mapManifest={ worldmanifest }/>
            <RightSidebar/> 
          </>
        ) : (
          <>Loading!</>
        )}
      </>
    )
  }
  export default MapWidget 


