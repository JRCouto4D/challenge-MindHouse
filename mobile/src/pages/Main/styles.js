import styled from 'styled-components/native';

export const Container = styled.View``;

export const Header = styled.View`
  background: #f8dc46;
  width: 100%;
  height: 140px;
  padding: 50px 15px 15px;
`;

export const HeaderBoxTop = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const SearchContainer = styled.View`
  flex: 1;
  height: 35px;
  background: #fff;
  border-radius: 10px;
  padding: 0 10px;
  align-items: center;
  flex-direction: row;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Pesquisar estabelecimento',
  placeholderTextColor: '#999',
})`
  border-left-width: 1px;
  border-color: #999;
  flex: 1;
  align-items: center;
  height: 20px;
  padding: 0 0 0 10px;
  margin-left: 10px;
`;

export const BagButton = styled.TouchableOpacity`
  margin-left: 15px;
`;

export const BoxAddress = styled.View`
  flex-direction: row;
  margin-top: 25px;
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const LabelDeliver = styled.Text`
  margin-left: 2px;
  font-size: 12px;
`;

export const StrongDeliver = styled.Text`
  font-size: 12px;
  font-weight: bold;
  margin-left: 2px;
`;

export const Content = styled.ScrollView``;

export const Banner = styled.Image`
  width: 90%;
  height: 120px;
  border-radius: 10px;
  margin: 20px auto 10px;
`;

export const CategoriesContainer = styled.View`
  width: 90%;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  margin: 20px 15px 0;
`;

export const LabelCategories = styled.Text`
  font-weight: bold;
  font-size: 16px;
`;

export const AllCategoriesButton = styled.TouchableOpacity`
  padding: 5px 0 5px 5px;
  align-items: center;
  justify-content: center;
`;

export const LabelAllCategoriesButton = styled.Text`
  color: #666;
`;

export const ListCategories = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  numColumns: 4,
})`
  margin: 15px 20px 15px 0;
`;
