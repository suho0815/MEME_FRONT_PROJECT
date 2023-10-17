import styled from 'styled-components'
import {theme} from '../theme'

export const PagenationFrame = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 2rem;
  margin-bottom: 2rem;
`
export const PagenationBtn = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  width: 55px;
  height: 45px;
  border: 2px solid #bb99cd;
  border-radius: 100%;
  background-color: #f5edf7;
  color: black;
  font-family: 'RedRose';
  font-size: 25px;

  &:hover {
    background-color: #bb99cd;
  }
  &:active {
    width: 60px;
    height: 50px;
  }
`
export const PagenationCurrBtn = styled.button`
  margin-left: 10px;
  margin-right: 10px;
  width: 55px;
  height: 45px;
  border: 2px solid #bb99cd;
  border-radius: 100%;
  background-color: #bb99cd;
  color: white;
  font-family: 'RedRose';
  font-size: 25px;
  &:active {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
export const PagenationArrowBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  background-color: #f5edf7;
  color: #bb99cd;
  width: 55px;
  height: 45px;
  font-family: 'RedRose';
  font-size: 35px;
  font-weight: semibold;
  &:hover {
    color: #d9d9d9;
  }
  &:active {
    padding-top: 5px;
    padding-bottom: 5px;
  }
`
