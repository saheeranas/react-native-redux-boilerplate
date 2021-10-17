import React from 'react';
import {Text, View, Button} from 'react-native';

import {getNews} from '../services';

const Demo = () => {
  const getData = () => {
    getNews().then(res => console.log(res));
  };
  return (
    <View>
      <Button title="FETCH" onPress={getData} />
    </View>
  );
};

export default Demo;
