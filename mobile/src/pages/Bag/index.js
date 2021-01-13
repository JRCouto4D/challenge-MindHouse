/* eslint-disable no-nested-ternary */
import React, { useCallback, useState, useEffect } from 'react';
import { Alert, ActivityIndicator, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import avatarProvider from '../../assets/boutiqueCarnesLogo.png';
import banner from '../../assets/banner2.jpg';

import ListItemProduct from '../../components/ListItemProduct';

import api from '../../services/api';

import {
  Container,
  GoBackBotton,
  Header,
  Banner,
  ProviderContainer,
  ProviderContainerBoxLeft,
  ProviderName,
  ProviderCategory,
  BoxEvaluationProvider,
  EvaluationLabel,
  Avatar,
  SearchContainer,
  SearchInput,
  Content,
  DescriptionProductsContainer,
  Label,
  GoCorridorBottom,
  GoCorridorLabel,
  ListProducts,
} from './styles';

const Bag = () => {
  const [products, setProducts] = useState([]);
  const [specialProducts, setSpecialProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const loadProduct = useCallback((category_id = 9) => {
    async function listProducts() {
      try {
        setLoading(true);

        const response = await api.get('/products/search', {
          page: 1,
          description: '',
          category_id,
        });

        if (category_id === 10) {
          setSpecialProducts(response.data.products);
          setLoading(false);
          return;
        }

        setProducts(response.data.products);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        Alert.alert('Algo deu errado. Tente novamente mais tarda');
      }
    }

    listProducts(category_id);
  }, []);

  useEffect(() => {
    loadProduct();
  }, [loadProduct]);

  useEffect(() => {
    loadProduct(10);
  }, [loadProduct]);

  return (
    <Container>
      <Header>
        <Banner source={banner} />
        <GoBackBotton>
          <Icon name="keyboard-arrow-left" size={30} color="#333" />
        </GoBackBotton>

        <ProviderContainer>
          <ProviderContainerBoxLeft>
            <ProviderName>Suprema Boutique de Carnes</ProviderName>
            <ProviderCategory>Carnes</ProviderCategory>
            <BoxEvaluationProvider>
              <EvaluationLabel>5</EvaluationLabel>
              <Icon name="star" size={20} color="#F8DC46" />
            </BoxEvaluationProvider>
          </ProviderContainerBoxLeft>

          <Avatar source={avatarProvider} />
        </ProviderContainer>
      </Header>

      <Content>
        <SearchContainer>
          <Icon name="search" color="#999" size={25} />
          <SearchInput />
        </SearchContainer>

        <DescriptionProductsContainer>
          <Label>Carne Bovina</Label>

          <GoCorridorBottom>
            <GoCorridorLabel>Visitar corredor</GoCorridorLabel>
          </GoCorridorBottom>
        </DescriptionProductsContainer>

        <ListProducts
          data={products}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => <ListItemProduct product={item} />}
        />

        <DescriptionProductsContainer>
          <Label>Especiais</Label>

          <GoCorridorBottom>
            <GoCorridorLabel>Visitar corredor</GoCorridorLabel>
          </GoCorridorBottom>
        </DescriptionProductsContainer>

        {loading ? (
          <ActivityIndicator size={30} color="#333" />
        ) : specialProducts.length <= 0 ? (
          <View
            style={{
              alignSelf: 'center',
              marginTop: 30,
            }}
          >
            <Text
              style={{
                fontSize: 20,
                fontWeight: 'bold',
              }}
            >
              Sem registros
            </Text>
          </View>
        ) : (
          <ListProducts
            data={specialProducts}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <ListItemProduct product={item} />}
          />
        )}
      </Content>
    </Container>
  );
};

export default Bag;
