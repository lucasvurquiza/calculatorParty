import styled from 'styled-components/native';

export const ProductContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #FFF;
  border-radius: 5px;
  padding-horizontal: 10px;
  padding-vertical: 10px;
`;

export const ProductImage = styled.Image`
  width: 50px;
  height: 50px;
  border-radius: 5px;
`;

export const ProductDetails = styled.View`
  margin-left: 5px;
  flex: 1;
`;

export const Separator = styled.View`
  width: 100%;
  height: 1px;
  margin: 5px 0;
`;

export const AddToCartButton = styled.TouchableOpacity`
`;