
import React from 'react'
import {Sidebar, Title} from '../ui/ui'
import styled from 'styled-components'
//import {ColorPicker} from './ColorPicker'
import {useRecoilState, selector} from 'recoil'
import { manifestState } from '../../recoil/atoms/manifestAtoms'
import { copyFile } from 'fs'
import { getNewManifest } from '../../recoil/selectors/manifestSelector'
import {ColorPicker} from '../colorPicker'




const InputLabel = styled.div`
    font-weight: 500;
    margin-bottom: 4px;
    font-size: 14px;
`

const Input = styled.input`
    background-color: rgba(10, 10, 10, 0.3);
    border-radius: 15px;
    padding: 10px;
    border: 0;
    width: 100%;
    outline: none;
    margin-bottom: 15px;
    color: #fff;
    font-size: 16px;  
`
//InputLabel>Width</InputLabel>
//<Input  value={worldmanifest.layers[0].fill}
//onChange={(e) => {
// const deepClone = JSON.parse(JSON.stringify(worldmanifest))
// deepClone.layers[0].fill = String(e.target.value)
 //console.log("deepClone")
 //console.log(deepClone)
// setWorldmanifest(deepClone)


const Properties: React.FC = () => {
    //const [selectedElement, setSelectedElement] = useRecoilState(selectedElementState)
    const [worldmanifest2, setWorldmanifest2] = useRecoilState(manifestState) as any
    

    return (
        <div>
            <Title>Properties</Title>
            <InputLabel>Color</InputLabel>
            <ColorPicker
                value={worldmanifest2.layers[0].fill}
                onChange={(color) => {
                    const deepClone2 = JSON.parse(JSON.stringify(worldmanifest2))
                    deepClone2.layers[0].fill = String(color)
                
                    setWorldmanifest2(deepClone2)
                    }}
               
                />
            
            
        </div>
    )
}


export const RightSidebar: React.FC = () => {

    const [worldmanifest, setWorldmanifest] = useRecoilState(manifestState) as any
    const [selectedElement, setSelectedElement] = useRecoilState(getNewManifest) as any


    return (
        <Sidebar>
            <Properties/>   
        </Sidebar>
       )
}
function setLivePoly(arg0: (lp: any) => any) {
    throw new Error('Function not implemented.')
}

