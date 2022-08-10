/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/mapSelectors.ts
*/


import { selector } from 'recoil'
import { Feature, Geometry } from 'geojson'
import { manifestState } from '../atoms/manifestAtoms'
import * as d3geo from 'd3-geo'

export const getNewManifest = selector({
  key: 'manifest',
  get:  async() => {
    console.log("in get manifest selector")
    return getWorldDataFromFile()
  },
  set: ({ set, get }, newManifest) => {
    // Update state w/ new appended values
    console.log("in set manifest")
    console.log(newManifest)
    
    set(manifestState, newManifest );
    console.log("after set manifest")
    const x = get(manifestState)
    console.log(" x thing in set manifest")
    console.log(x)
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
      
        const manifest = {
          params: {
             projection: d3geo.geoAlbersUsa(),
             width: 350,
             height:300,
             clip:true
           },
          layers: [
           {type: "simple", geojson: worldFeatures, 
                tooltip: ["$ISO3", "$NAMEen"],
                fill: "blue",
                fillOpacity: .5
               }    
          ]
         }
         console.log("in new manifest selector - function!!!!")
         //console.log(manifest)
         //resolve(setManifestObject(manifest))
         resolve(manifest)
         return manifest
         
         
      })
    })
  )
