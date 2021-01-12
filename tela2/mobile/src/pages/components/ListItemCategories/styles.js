import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  justify-content: center;
  margin-left: 20px;
  flex: 1;
  margin-bottom: 10px;
`;

export const BoxImage = styled.View`
  background: ${(props) => String(props.colorProps)};
  width: 100%;
  max-width: 80px;
  height: 80px;
  border-radius: 10px;
  padding: 10px;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const CategoryName = styled.Text`
  flex: 1;
  text-align: center;
  margin-top: 2px;
  font-size: 14px;
  width: 80px;
`;
