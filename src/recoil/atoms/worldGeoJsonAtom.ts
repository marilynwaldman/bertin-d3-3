import { atom } from 'recoil'
import * as d3geo from 'd3-geo'

import { manifestObject, mapObject, setManifestObject } from '../../model'
import { Feature, FeatureCollection, Geometry } from 'geojson'
//import { feature } from 'topojson-client'

import { feature } from 'topojson-client'



export const worldGeoJsonState = atom({
  key: 'geojson',
  default:  async() => {
    console.log("in worldgeo atom")
    return getWorldDataFromFile()
  }, 
})   


const getWorldDataFromFile = () =>
  new Promise((resolve) =>
    fetch('/data/world.geojson').then((response) => {
      if (response.status !== 200) {
        // eslint-disable-next-line no-console
        console.log(`Houston, we have a problem! ${response.status}`)
        return
      }
      response.json().then((worldData) => {
        //console.log("have world map data")
        //const worldFeatures: Array<Feature<Geometry | null>> = ((feature(worldData, worldData.objects.countries) as unknown) as FeatureCollection).features
        const worldFeatures: Array<Feature<Geometry | null>> = worldData
        //console.log("worldFeatures")
        //console.log(`Result: ${JSON.stringify(worldFeatures)}`)
        //console.log(worldFeatures)
        //resolve(setMapObject(worldFeatures))
      
        
         return resolve(worldFeatures)
         
      })
    })
  )
