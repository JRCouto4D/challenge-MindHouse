/* eslint-disable no-nested-ternary */
import React, { useState, useCallback, useEffect, useRef } from 'react';
import { View, Text, ActivityIndicator, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import banner from '../../assets/banner1.png';

import api from '../../services/api';

import ListItemCategories from '../../components/ListItemCategory';

import {
  Container,
  Header,
  Content,
  HeaderBoxTop,
  SearchContainer,
  BagButton,
  BoxAddress,
  LabelDeliver,
  SearchInput,
  StrongDeliver,
  Banner,
  CategoriesContainer,
  LabelCategories,
  AllCategoriesButton,
  LabelAllCategoriesButton,
  ListCategories,
} from './styles';

const Main = () => {
  const [categories, setCategories] = useState([]);
  const [search, setSearch] = useState('');
  const [previewSearch, setPreviewSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const searchInputRef = useRef();

  const loadCategories = useCallback(() => {
    async function listCategories() {
      try {
        setLoading(true);

        const response = await api.get('/categories/search', {
          params: {
            page: 1,
            name: search,
          },
        });

        setCategories(response.data.categories);

        setLoading(false);
      } catch (err) {
        setLoading(false);
        setCategories([]);
        Alert.alert('Algo deu errado. Tente novamente mais tarde');
      }
    }

    listCategories();
  }, [search]);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  return (
    <Container>
      <Header>
        <HeaderBoxTop>
          <SearchContainer>
            <Icon name="search" size={20} color="#999" />
            <SearchInput
              ref={searchInputRef}
              value={previewSearch}
              onChangeText={setPreviewSearch}
              returnKeyType="search"
              onSubmitEditing={() => {
                setSearch(previewSearch);
                setPreviewSearch('');
              }}
            />
          </SearchContainer>
          <BagButton>
            <Icon name="shopping-bag" size={30} color="#333" />
          </BagButton>
        </HeaderBoxTop>

        <BoxAddress>
          <Icon name="location-on" color="#333" size={18} />
          <LabelDeliver>Entregar em Bairro</LabelDeliver>
          <StrongDeliver>
            Condominio vila verde quadrada 6 casa 17
          </StrongDeliver>
        </BoxAddress>
      </Header>

      <Banner source={banner} />

      <CategoriesContainer>
        <LabelCategories>Categorias</LabelCategories>

        <AllCategoriesButton
          onPress={() => {
            setSearch('');
            loadCategories();
          }}
        >
          <LabelAllCategoriesButton>Ver todas</LabelAllCategoriesButton>
        </AllCategoriesButton>
      </CategoriesContainer>
      {loading ? (
        <ActivityIndicator size={20} color="#666" style={{ marginTop: 20 }} />
      ) : categories.length <= 0 ? (
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
        <Content>
          <ListCategories
            data={categories}
            keyExtractor={(item) => String(item.id)}
            renderItem={({ item }) => <ListItemCategories category={item} />}
          />
        </Content>
      )}
    </Container>
  );
};

export default Main;
