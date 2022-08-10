import { atom } from 'recoil'
import * as d3geo from 'd3-geo'

import { manifestObject, mapObject, setManifestObject } from '../../model'
import { Feature, FeatureCollection, Geometry } from 'geojson'
import { getNewManifest } from '../selectors/manifestSelector'
//import { feature } from 'topojson-client'

import { feature } from 'topojson-client'

console.log("in atom")



export const manifestState = atom({
  key: 'manifest1',
  default:  getNewManifest
 
})   


