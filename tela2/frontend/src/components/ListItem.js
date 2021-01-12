import React from 'react'
import PropTypes from 'prop-types'

import { formatPrice } from '../utils/format'

import { Container } from './styles'

function ListItem({ product }) {
  return (
    <Container>
      <header>
        <img src={product.image && product.image.url} alt='' />
      </header>

      <div>
        <span>A partir de:</span>
        <strong>{product && formatPrice(product.price)}</strong>
      </div>

      <footer>
        <strong>{product && product.description}</strong>
        <button type='button'>Adicionar</button>
      </footer>
    </Container>
  )
}

export default ListItem

ListItem.propTypes = {
  product: PropTypes.shape(),
}

ListItem.defaultProps = {
  product: null,
}
