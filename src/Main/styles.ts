import styled from 'styled-components/native';
import { Platform, StatusBar } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Container = styled.SafeAreaView`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
  flex: 1;
  background: #FEF6E6;
`;

export const CategoriesContainer = styled.View`
  height: 73px;
  margin: 25px 20px 0;
`;

export const MenuContainer = styled.View`
  flex: 1;
  margin: 0 20px 0;
`;

export const Footer = styled.View`
  min-height: 110px;
  background: #fff;
  padding: 16px 24px;
`;

export const FooterContainer = styled.SafeAreaView`
`;