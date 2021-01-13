import React, { useState, useCallback, useMemo, useEffect } from 'react'
import { MdSearch, MdPlace } from 'react-icons/md'
import { AiOutlineShopping } from 'react-icons/ai'
import banner from '../../assets/banner1.png'

import api from '../../services/api'

import ListItem from '../../components/ListItem'

import { Container, Header, BoxSearch, Content, ListCategories } from './styles'

function Main() {
  const [categories, setCategories] = useState([])
  const [search, setSearch] = useState('')
  // const [total, setTotal] = useState(0);
  // const [page, setPage] = useState(1)
  // const [prePage, setPrePage] = useState(0)

  const loadCategories = useCallback(() => {
    async function listCategories() {
      const response = await api.get('/categories/search', {
        params: {
          page: 1,
          name: search,
        },
      })

      setCategories(response.data.categories)
    }

    listCategories()
  }, [search])

  useEffect(() => {
    loadCategories()
  }, [loadCategories])

  const listMemo = useMemo(
    () => (
      <ListCategories>
        <ul>
          {categories.map((category) => (
            <ListItem category={category} />
          ))}
        </ul>
      </ListCategories>
    ),
    [categories]
  )

  return (
    <Container>
      <Header>
        <div className='header-container'>
          <BoxSearch>
            <MdSearch color='#999' size={20} />
            <input
              type='text'
              placeholder='Pesquisar estabelecimento'
              onChange={(e) => {
                setSearch(e.target.value)
              }}
            />
          </BoxSearch>

          <button type='button' onClick={() => {}}>
            <AiOutlineShopping size={45} color='#333' />
          </button>
        </div>

        <div className='header-container'>
          <MdPlace size={18} color='#333' />
          <p>
            Entregar em Bairro <b>Condominio vila verde quadra 6 casa 17</b>
          </p>
        </div>
      </Header>

      <Content>
        <div className='box-support'>
          <img src={banner} alt='banner' />
        </div>

        <div className='box-categories'>
          <strong>Categorias</strong>

          <button type='button'>Ver todas</button>
        </div>

        {listMemo}
      </Content>
    </Container>
  )
}

export default Main
