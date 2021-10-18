import React from 'react';
import {Text, View, Button} from 'react-native';

import {getNews, login} from '../services';

const Base_URL = 'http://10.0.2.2:4001/';

const Demo = () => {
  const getData = () => {
    getNews().then(res => console.log(res));
    // fetch(Base_URL)
    //   .then(res => res.json())
    //   .then(msg => console.log(msg));
  };

  const handleLogin = async () => {
    const body = {
      username: '',
      password: '',
    };

    try {
      let res = await login(body);
      // console.log(res.data);
    } catch (e) {}
  };
  return (
    <View>
      <Button title="FETCH" onPress={getData} />
      <Button title="LOGIN" onPress={handleLogin} />
    </View>
  );
};

export default Demo;
