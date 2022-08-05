import  D3Map  from '../../components/D3Map/D3Map'
import  { LeftSidebar}  from '../../components/LeftSidebar/LeftSidebar'
import styled from 'styled-components'
import {GlobalStyles} from '../../components/ui/ui'
import { RightSidebar } from '../../components/RightSidebar/RightSidebar';
import { useEffect } from 'react';
import {  mapObject } from '../../model'
import { useRecoilValue } from 'recoil';
import { getWorldData } from '../../recoil/selectors/worldSelectors';

const MapWidget = () => {
    const worldData: mapObject = useRecoilValue(getWorldData) as mapObject
  
    
  
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
            <D3Map worldData={ worldData } />
            <RightSidebar/> 
          </>
        ) : (
          <>Loading!</>
        )}
      </>
    )
  }
  export default MapWidget