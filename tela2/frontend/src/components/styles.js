import styled from 'styled-components'

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 250px;

  > header {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #fff;
    border-radius: 10px;
    width: 120px;
    height: 130px;
    padding: 5px;

    img {
      align-self: center;
      flex: 1;
      max-height: 80px;
    }
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      color: #999;
      font-size: 12px;
    }

    strong {
      font-size: 18px;
      font-weight: normal;
      color: #333;
    }
  }

  footer {
    margin-top: 5px;

    strong {
      font-weight: normal;
      color: #999;
      font-size: 14px;
    }

    button {
      background: #fff;
      border-radius: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 30px;
      color: #52bc22;
      margin-top: 5px;
      border: 0;
    }
  }
`
