import React from 'react'
import PropTypes from 'prop-types'

import { Container } from './styles'

function ListItem({ category }) {
  return (
    <Container key={category.id}>
      <button type='button'>
        <div className='box-image'>
          <img src={category.image && category.image.url} alt='' />
        </div>

        <strong>{category.name}</strong>
      </button>
    </Container>
  )
}

export default ListItem

ListItem.propTypes = {
  category: PropTypes.shape(),
}

ListItem.defaultProps = {
  category: null,
}
