import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;

  button {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: 0;
    transition: opacity 0.2s;

    :hover {
      opacity: 0.7;
    }

    div.box-image {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      background: #fff;
      border-radius: 10px;
      width: 80px;
      height: 80px;
      padding: 5px;

      img {
        align-self: center;
        width: 90%;
        max-height: 70px;
      }
    }

    strong {
      font-size: 14px;
      font-weight: normal;
      text-align: center;
      margin-top: 5px;
    }
  }
`
