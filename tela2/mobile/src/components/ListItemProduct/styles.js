import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100px;

  margin-left: 15px;
`;

export const ImageContainer = styled.View`
  width: 100%;
  height: 90px;
  background: #fff;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const ImageProduct = styled.Image`
  width: 100%;
  height: 100%;
`;

export const LabelSpan = styled.Text`
  margin-top: 5px;
  font-size: 11px;
  color: #666;
`;

export const PriceProduct = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #333;
`;

export const DescriptionProduct = styled.Text`
  color: #333;
  font-weight: normal;
  margin-top: 2px;
`;

export const AddButton = styled.TouchableOpacity`
  background: #fff;
  align-items: center;
  justify-content: center;

  margin-top: 10px;
  height: 30px;
`;

export const LabelAddButton = styled.Text`
  color: #52bc22;
  font-weight: bold;
  font-size: 13px;
`;
