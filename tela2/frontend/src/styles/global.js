import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  body {
    background: #eee;
    color: #333;
    -webkit-font-smooth: antialiased;
    font-family: 'Roboto Slab', serif;
  }

  button {
    cursor: pointer;
  }
`
