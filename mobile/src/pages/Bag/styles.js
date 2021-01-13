import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  flex: 1;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;
  position: relative;

  width: 100%;
  height: 180px;

  background: #7159c1;
`;

export const Banner = styled.Image`
  width: 100%;
  height: 100%;
`;

export const GoBackBotton = styled(RectButton)`
  position: absolute;
  top: 22px;
  left: 5px;

  background: #fff;
  border-radius: 4px;
  padding: 8px 5px;
`;

export const ProviderContainer = styled.View`
  position: absolute;
  width: 80%;
  height: 80px;
  background: #fff;
  border-radius: 10px;
  padding: 18px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  top: 80px;
`;

export const ProviderContainerBoxLeft = styled.View`
  flex: 1;
`;

export const ProviderName = styled.Text`
  color: #333;
  font-size: 14px;
  font-weight: bold;
`;

export const ProviderCategory = styled.Text`
  font-size: 12px;
  color: #999;
`;

export const BoxEvaluationProvider = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const EvaluationLabel = styled.Text``;

export const Avatar = styled.Image`
  width: 65px;
  height: 60px;
`;

export const Content = styled.ScrollView``;

export const SearchContainer = styled.View`
  width: 90%;
  height: 35px;
  background: #ddd;
  border-radius: 5px;
  align-items: center;
  flex-direction: row;
  padding: 0 10px;
  margin: 20px auto 10px;
`;

export const SearchInput = styled.TextInput.attrs({
  placeholder: 'Pesquisar',
  placeholderTextColor: '#999',
})`
  flex: 1;
  margin-left: 5px;
  align-items: center;
`;

export const DescriptionProductsContainer = styled.View`
  width: 90%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 10px auto 10px;
`;

export const Label = styled.Text`
  font-size: 16px;
  color: #333;
  font-weight: bold;
`;

export const GoCorridorBottom = styled.TouchableOpacity`
  background: #f6a13c;
  border-radius: 5px;
  padding: 5px 15px;
`;

export const GoCorridorLabel = styled.Text`
  font-weight: bold;
  color: #fff;
`;

export const ListProducts = styled.FlatList.attrs({
  horizontal: true,
  showsHorizontalScrollIndicator: false,
})`
  margin-bottom: 20px;
`;
