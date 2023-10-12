import {createGlobalStyle} from 'styled-components'
import reset from 'styled-reset'

// 전역 스타일 설정
const GlobalStyle = createGlobalStyle`
  ${reset} // 브라우저마다 기본적으로 설치된 스타일 지우기

  a {
    text-decoration: none;
    color: inherit;
  }

  *{
    box-sizing: border-box;
  }
  
  html, body {
    margin: 0;
    padding: 0;
    border: 0;
  }

`

export default GlobalStyle
