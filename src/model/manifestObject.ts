/*
Author: Eli Elad Elrom
Website: https://EliElrom.com
License: MIT License
File: src/model/mapObject.ts
*/


// eslint-disable-next-line @typescript-eslint/naming-convention



import { Feature, Geometry } from 'geojson'

export interface manifestObject {
  manifest: unknown | null
}

export const initManifestObject = (): manifestObject => ({
  manifest: null
})  

export const setManifestObject = (data: unknown ): manifestObject => ({
  manifest: data,
})
