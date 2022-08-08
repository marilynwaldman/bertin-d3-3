
import React from 'react'
import {Sidebar, Title} from '../ui/ui'
import styled from 'styled-components'
//import {ColorPicker} from './ColorPicker'
import {useRecoilState, selector} from 'recoil'



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

const PropertyInput: React.FC<{label: string; value: number; onChange: (value: number) => void}> = ({
    label,
    value,
    onChange,
}) => {
    return (
        <>
            <InputLabel>{label}</InputLabel>
            <Input type="number" value={value} onChange={(e) => onChange(Number(e.currentTarget.value))} />
        </>
    )
}



export const RightSidebar: React.FC = () => {

    return (
        <Sidebar>
            <Title>Widgets</Title>
        </Sidebar>
       )
}
