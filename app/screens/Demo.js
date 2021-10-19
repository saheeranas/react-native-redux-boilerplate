import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';

import {getNews, login} from '../services';
import {requestNewToken} from '../utils/token';

const Base_URL = 'http://10.0.2.2:4001/';

const Demo = () => {
  const token = useSelector(state => state.user.token);

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

  const handleRefetch = () => {
    requestNewToken();
  };

  return (
    <View>
      <Button title="FETCH" onPress={getData} />
      <Button title="LOGIN" onPress={handleLogin} />
      <Button title="GET ACC_TOKEN USING REFRESH" onPress={handleRefetch} />
      <Text>{token}</Text>
    </View>
  );
};

export default Demo;
