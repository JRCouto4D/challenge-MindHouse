import React from 'react';

import { Container, BoxImage, Image, CategoryName } from './styles';

const ListItemCategories = ({ category }) => {
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const colors = [
    '#F8DC46',
    '#A73344',
    '#65E3C7',
    '#EB5E32',
    '#7BC87E',
    '#88B5B4',
    '#F7D29E',
    '#64E1F0',
    '#F4BD3E',
    '#52BC22',
    '#F6A13C',
  ];
  return (
    <Container key={category.id}>
      <BoxImage colorProps={colors[getRandomInt(0, 10)]}>
        <Image source={{ uri: category.image.url }} />
      </BoxImage>
      <CategoryName>{category.name}</CategoryName>
    </Container>
  );
};

export default ListItemCategories;
