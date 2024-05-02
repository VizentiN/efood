import { createGlobalStyle } from 'styled-components'

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .containerMedium {
    max-width: 600px;
    widht: 100%;
    margin: 0 auto;
    padding: 40px 0;
  }

  .containerLarge {
    max-width: 1024px;
    widht: 100%;
    margin: 0 auto;
}

  .buttonAdd {
    display: block;
    padding: 4px 8px;
    background-color: #FFEBD9;
    color: #E66767;
    text-align: center;
    border: none;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
  }
`
export const colors = {
  pink: '#E66767',
  light_cream: '#FFEBD9',
  white: '#FFFFFF',
  black: '#000'
}
