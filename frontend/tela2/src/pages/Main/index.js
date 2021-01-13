import React, { useMemo, useCallback, useEffect, useState } from 'react'
import { MdStar, MdSearch } from 'react-icons/md'

import api from '../../services/api'

import ListItem from '../../components/ListItem'

import avatarProvider from '../../assets/boutiqueCarnesLogo.png'

import {
  Container,
  BoxInfoProvider,
  BoxSearch,
  Content,
  ListProducts,
} from './styles'

function Main() {
  const [products, setProducts] = useState([])
  const [specialProducts, setSpecialProducts] = useState([])

  const loadProducts = useCallback(() => {
    async function listProducts() {
      const response = await api.get('/products/search', {
        params: {
          page: 1,
          description: '',
        },
      })

      setProducts(response.data.products)
    }

    listProducts()
  }, [])

  const loadSpecialProducts = useCallback(() => {
    async function listProducts() {
      const response = await api.get('/products/search', {
        params: {
          page: 1,
          description: '',
        },
      })

      setSpecialProducts(response.data.products)
    }

    listProducts()
  }, [])

  useEffect(() => {
    loadProducts()
    loadSpecialProducts()
  }, [loadProducts, loadSpecialProducts])

  const listMemo = useMemo(
    () => (
      <ul>
        {products.map((product) => (
          <ListItem product={product} />
        ))}
      </ul>
    ),
    [products]
  )

  const listMemo2 = useMemo(
    () => (
      <ul>
        {specialProducts.map((product) => (
          <ListItem product={product} />
        ))}
      </ul>
    ),
    [specialProducts]
  )

  return (
    <Container>
      <header>
        <BoxInfoProvider>
          <div className='box-left'>
            <strong>Suprema Boutique de Carnes</strong>
            <span>Carnes</span>
            <div>
              <span>5</span>
              <MdStar size={15} color='#F8DC46' />
            </div>
          </div>

          <img src={avatarProvider} alt='avatar' />
        </BoxInfoProvider>
      </header>

      <BoxSearch>
        <MdSearch color='#999' size={25} />
        <input type='text' placeholder='Pesquisar' />
      </BoxSearch>

      <Content>
        <div>
          <strong>Carne Bovina</strong>

          <button type='button'>Visitar corredor</button>
        </div>

        <ListProducts>{listMemo}</ListProducts>
      </Content>

      <Content>
        <div>
          <strong>Especiais</strong>

          <button type='button'>Visitar corredor</button>
        </div>

        <ListProducts>{listMemo2}</ListProducts>
      </Content>
    </Container>
  )
}

export default Main
