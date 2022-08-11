import { Canvas }  from '../../components/Canvas/Canvas'
import { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';




const MapWidget = () => {
    
    //const [worldmanifest, setWorldmanifest] = useRecoilState(manifestState) 
    //console.log("get manifest state atom")
    //console.log (worldmanifest) 

  
    useEffect(() => {
      // results
       //console.log(worldData.mapFeatures.length)
       //console.log(`Result: ${JSON.stringify(worldData.mapFeatures)}`)
    })
    return (
      <>
        { (
          <>
            <LeftSidebar/>
            <Canvas />
            <RightSidebar/> 
          </>
        )}
      </>
    )
  }
  export default MapWidget 


