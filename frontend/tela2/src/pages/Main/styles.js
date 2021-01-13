import styled from 'styled-components'
import { shade } from 'polished'
import banner from '../../assets/banner2.jpg'

export const Container = styled.div`
  height: 100vh;

  > header {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    height: 25vh;
    background: #7159c1;
    background: url(${banner}) no-repeat center;
    background-size: cover;
    margin-bottom: 20px;
  }
`

export const BoxInfoProvider = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  border-radius: 10px;
  padding: 15px;
  width: 80%;
  max-width: 600px;

  div.box-left {
    display: flex;
    flex-direction: column;

    strong {
      font-size: 25px;
    }

    span {
      color: #999;
    }
  }

  @media (max-width: 415px) {
    div.box-left {
      strong {
        font-size: 14px;
      }
    }
  }

  img {
    width: 20%;
  }
`

export const BoxSearch = styled.div`
  width: 90%;
  max-width: 600px;
  background: #ddd;
  border-radius: 10px;
  padding: 5px 10px;
  margin-top: 20px;
  margin: auto;
  display: flex;
  align-items: center;

  input {
    width: 100%;
    margin-left: 5px;
    display: flex;
    border: 0;
    background: transparent;
    color: #999;

    ::placeholder {
      color: #999;
    }
  }
`

export const Content = styled.div`
  flex: 1;
  max-width: 900px;
  margin: auto;

  background: #f0f0f0;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    strong {
      font-size: 18px;
    }

    > button {
      padding: 10px 20px;
      background: #f6a13c;
      border-radius: 5px;
      border: 0;
      color: #fff;
      transition: background 0.2s;

      :hover {
        background: ${shade(0.07, '#f6a13c')};
      }
    }
  }
`

export const ListProducts = styled.div`
  margin-top: 20px;

  ul {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 20px;
    list-style: none;
  }
`
