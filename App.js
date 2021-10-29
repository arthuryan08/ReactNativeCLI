import React, {useState} from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import styled from 'styled-components/native';

const Page = styled.SafeAreaView`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const Input = styled.TextInput`
  width: 200px;
  height: 40px;
  border: 1px solid #000;
`;

const Hello = () => {
  const [name, setName] = useState('');

  const [showMsg, setShowMsg] = useState(false);
  const [showName, setShowName] = useState('');

  const handleClick = () => {
    setShowName(name);
    setShowMsg(true);
  };

  return (
    <View>
      <Input value={name} onChangeText={e => setName(e)} />
      <Button title="Salvar" onPress={handleClick} />
      {showMsg ? <Text>Olá {showName}! Como vai?</Text> : null}
    </View>
  );
};

export default () => {
  return (
    <Page>
      <Hello />
    </Page>
  );
};
