import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  background-color: blue;
`;
const Texto = styled.Text`
  color: ${props => props.cor};
  font-size: 30px;
  background-color: green;
`;

export default () => {
  return (
    <Page>
      <Texto cor="red">Salve família!!!</Texto>
      <Texto cor="yellow">Salve família!!!</Texto>
    </Page>
  );
};
