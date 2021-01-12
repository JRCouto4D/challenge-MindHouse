import styled from 'styled-components'

export const Container = styled.div`
  height: 100vh;
`

export const Header = styled.div`
  padding: 25px;
  background: #f8dc46;
  flex: 1;

  div.header-container {
    display: flex;
    flex: 1;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    & + div {
      margin-top: 30px;
    }

    button {
      background: transparent;
      border: 0;
      margin-left: 5px;
      transition: opacity 0.2s;
      margin-left: 10px;

      :hover {
        opacity: 0.7;
      }
    }

    p {
      font-size: 16px;
      color: #333;
      margin-left: 5px;
    }
  }
`

export const BoxSearch = styled.div`
  background: #fff;
  border-radius: 10px;
  padding: 10px;
  flex: 1;

  display: flex;
  align-items: center;

  input {
    flex: 1;
    margin-left: 10px;
    height: 25px;
    border: 0;

    ::placeholder {
      color: #999;
      font-size: 16px;
    }
  }
`

export const Content = styled.div`
  padding: 35px;
  display: flex;
  flex-direction: column;

  @media (max-width: 415px) {
    padding: 15px;
  }

  @media (max-width: 321px) {
    padding: 0;
  }

  div.box-support {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;

    img {
      width: 100%;
      max-width: 800px;
      max-height: 250px;
      border-radius: 30px;
    }
  }

  div.box-categories {
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: space-between;
    margin-top: 30px;

    strong {
      font-size: 16px;
    }

    button {
      padding: 5px;
      color: #999;
      font-weight: bold;
      transition: color text-decoration 0.2s;
      font-size: 14px;

      background: transparent;
      border: 0;

      :hover {
        color: #666;
        text-decoration: underline;
      }
    }
  }
`

export const ListCategories = styled.div`
  margin-top: 20px;

  ul {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 20px;
    list-style: none;
    align-items: flex-start;

    @media (max-width: 1001px) {
      grid-template-columns: repeat(7, 1fr);
    }

    @media (max-width: 841px) {
      grid-template-columns: repeat(6, 1fr);
    }

    @media (max-width: 741px) {
      grid-template-columns: repeat(5, 1fr);
    }

    @media (max-width: 615px) {
      grid-template-columns: repeat(4, 1fr);
    }

    @media (max-width: 401px) {
      li {
        button {
          div.box-image {
            width: 65px;
            height: 65px;
            padding: 3px;
          }

          strong {
            font-size: 12px;
          }
        }
      }
    }
  }
`
