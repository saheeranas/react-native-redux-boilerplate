import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';

import {getNews} from '../services';
import {requestNewToken} from '../utils/token';
import {RootState} from '../store/store';

// const Base_URL = 'http://10.0.2.2:4001/';

const Demo = () => {
  const token = useSelector((state: RootState) => state.user.token);

  const getData = () => {
    getNews().then(res => console.log(res));
  };

  const handleLogin = async () => {
    // const body = {
    //   username: '',
    //   password: '',
    // };

    try {
      // let res = await login(body);
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
