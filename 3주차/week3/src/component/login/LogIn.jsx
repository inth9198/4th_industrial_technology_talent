import React from 'react'
import Spec from '../head/Spec'
import styled from 'styled-components'

export default function LogIn() {
    return (
        <LogMain>
            <form>
                <LogMent>로그인</LogMent>
                <InputIp>
                    <InputDivId>
                        <InputPId type="text" placeholder='아이디를 입력해주세요'/>
                    </InputDivId>
                    <InputDivPw>
                        <InputPPW type="password" placeholder='비밀번호를 입력해주세요' />
                    </InputDivPw>
                </InputIp>

                <Find>
                    <FindId>아이디 찾기</FindId>
                    <Spec />
                    <FindPw>비밀번호 찾기</FindPw>
                </Find>
                <LogInB>
                    <button type="submit"></button>
                </LogInB>
                <SignIn>
                    <button></button>
                </SignIn>
            </form>
        </LogMain>
    )
}
const LogMent = styled.div`
    font-size: 12px;
    font-weight: 800;
    line-height: 20px;
`
const LogMain = styled.div`
    width: 1050px;
    margin-top: 90px;
    margin-bottom: 60px;
    position: relative;
    text-align: center;
    width: 100%;
`
const InputIp = styled.div`
    margin-top: 30px;

`
const InputDivId = styled.div`
    position: relative;
`
const InputPId = styled.input`
    padding: 0 11px 1px 15px;
    height: 54px;
    font-size: 20px;
    font-weight: 400;
`
const InputDivPw = styled.div`
    position: relative;
    margin: 10px;
`
const InputPPW = styled.input`
    padding: 0 11px 1px 15px;
    height: 54px;
    font-size: 20px;
    font-weight: 400;
`
const Find = styled.div`
    float: right;
    display: flex;
`
const FindId = styled.div`
    float: left;
    align-items:flex-start;
`
const FindPw = styled.div`
    align-items:flex-end;
`
const LogInB = styled.div`
    padding: 0 11px 1px 15px;
    height: 54px;
    font-size: 20px;
    font-weight: 400;
`
const SignIn = styled.div`
    padding: 0 11px 1px 15px;
    height: 54px;
    font-size: 20px;
    font-weight: 400;
`
