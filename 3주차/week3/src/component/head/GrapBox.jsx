import React from 'react'
import { useRecoilValue } from 'recoil';
import styled from 'styled-components';
import { bucket } from '../../recoil/User';

export default function GrapBox() {
    const buks = useRecoilValue(bucket);
    return (
        <div className="grap-box">
            <div className="gps"></div>
            <div className="heart"></div>
            <div className="cart"></div>
            <MiniN>{buks}</MiniN>   
        </div>
    )
}
const MiniN = styled.span`
    position: absolute;
    right: -4px;
    top: -1px;
    min-width: 20px;
    height: 20px;
    padding: 0px;
    border-radius: 10px;
    background-color: rgb(95, 0, 128);
    font-size: 9px;
    color: rgb(255, 255, 255);
    line-height: 15px;
    text-align: center;
    white-space: nowrap;
`
