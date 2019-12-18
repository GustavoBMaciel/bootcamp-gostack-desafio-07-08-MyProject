import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

import logo from '../../assets/logo.png';

export const Wrapper = styled.SafeAreaView`
  flex: 0;
  background: #5e7fe0;
  flex-direction: row;
`;

export const Container = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: space-between;
  padding: 20px;
  background: #51799c;
`;

export const Logo = styled.Image.attrs({
  source: logo,
  resizeMode: 'cover',
})`
  width: 185px;
  height: 24px;
  top: -10px;
  right: -8px;
`;

export const BasketContainer = styled(RectButton)`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  top: -8px;
`;

export const Home = styled(RectButton)`
  height: 24px;
  width: 24px;
  flex: 1;
  align-items: flex-end;
  justify-content: flex-end;
  margin-left: 15px;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -8px;
  right: -8px;
  min-width: 18px;
  min-height: 18px;
  background: #5e7fe0;
  color: #fff;
  font-size: 12px;
  padding: 2px;
  border-radius: 9px;
  overflow: hidden;
`;
