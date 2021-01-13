import React from 'react';

import { formatPrice } from '../../utils/format';

import {
  Container,
  ImageContainer,
  ImageProduct,
  DescriptionProduct,
  LabelSpan,
  AddButton,
  PriceProduct,
  LabelAddButton,
} from './styles';

const ListItemProduct = ({ product }) => (
  <Container>
    <ImageContainer>
      <ImageProduct source={{ uri: product.image && product.image.url }} />
    </ImageContainer>

    <LabelSpan>A partir de:</LabelSpan>
    <PriceProduct>{product && formatPrice(product.price)}</PriceProduct>
    <DescriptionProduct>{product.description}</DescriptionProduct>

    <AddButton>
      <LabelAddButton>Adicionar</LabelAddButton>
    </AddButton>
  </Container>
);

export default ListItemProduct;
