import  D3Map  from '../../components/D3Map/D3Map'
import  { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';
import {  useRecoilState } from 'recoil';
import { manifestState } from '../../recoil/atoms/manifestAtoms';



const MapWidget = () => {
    
    const [worldmanifest, setWorldmanifest] = useRecoilState(manifestState) 
    //console.log("get manifest state atom")
    //console.log (worldmanifest) 

  
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


