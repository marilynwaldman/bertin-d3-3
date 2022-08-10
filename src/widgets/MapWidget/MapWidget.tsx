import  D3Map  from '../../components/D3Map/D3Map'
import  { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';
import {  useRecoilState } from 'recoil';
import { manifestState } from '../../recoil/atoms/manifestAtoms';



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


