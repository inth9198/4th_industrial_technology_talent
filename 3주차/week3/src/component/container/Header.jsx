import React from 'react'
import UserIdServe from '../head/UserIdServe'
import HeadContent from '../head/HeadContent'
import styled from 'styled-components'
export default function Header() {
    return (
    <HeaderC>
        <UserIdServe />
        <HeadContent />
    </HeaderC>
    )
}
const HeaderC = styled.div`
    height: 100px;
    position: relative;
    padding-top: 36px;
    width: 1050px;
    margin: auto;
`;