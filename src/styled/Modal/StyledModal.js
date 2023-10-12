import styled from 'styled-components'
import {theme} from '../theme'

/**
 * 모달 내용
 * @param width: 가로 크기
 * @param height: 세로 크기
 */
export const ModalContent = styled.div`
  pointer-events: all;
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  border-radius: 10%;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
  width: ${props => props.width};
  height: ${props => props.height};
`
/** 모달 배경 */
export const ModalBackdrop = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  pointer-events: auto;
  position: fixed;
  inset: 0px;
  margin: 0px;
  padding: 0px;
  display: ${props => (props.open ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  max-height: none;
  max-width: none;
  z-index: 999;
  color: inherit;
`

export const ModalExit = styled.button`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  border-radius: 8px;
  cursor: pointer;

  transition: background-color 0.3s;

  &:hover {
    background-color: #ff0000; // hover 시 배경색 변경
  }
`
