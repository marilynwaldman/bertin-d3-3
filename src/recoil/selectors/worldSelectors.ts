/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/recoil/selectors/mapSelectors.ts
*/

import { selector } from 'recoil'
import { Feature, FeatureCollection, Geometry } from 'geojson'
//import { feature } from 'topojson-client'
import { setMapObject } from '../../model'
import { feature } from 'topojson-client'

export const getWorldData = selector({
  key: 'GetWorldData',
  get: async () => {
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
        console.log("have world map data")
        //const worldFeatures: Array<Feature<Geometry | null>> = ((feature(worldData, worldData.objects.countries) as unknown) as FeatureCollection).features
        const worldFeatures: Array<Feature<Geometry | null>> = worldData
        console.log("worldFeatures")
        console.log(`Result: ${JSON.stringify(worldFeatures)}`)
        //console.log(worldFeatures)
        resolve(setMapObject(worldFeatures))
      })
    })
  )
