import React from 'react';
import {SafeAreaView, View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  flex-direction: row;
`;
const Quadrado = styled.View`
  flex: 1;
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
