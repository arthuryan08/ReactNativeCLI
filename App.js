import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
`;
const Quadrado = styled.View`
  width: 50px;
  height: 50px;
  background-color: ${props => props.cor};
`;

export default () => {
  return (
    <Page>
      <Quadrado cor="red"></Quadrado>
      <Quadrado cor="green"></Quadrado>
      <Quadrado cor="blue"></Quadrado>
    </Page>
  );
};
