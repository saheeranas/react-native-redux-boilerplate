import React from 'react';
import {StyleSheet, View, Button, Image, ScrollView} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import {Input} from '../../components/Form';
const AppIcon = require('../../assets/images//appicon.png');

import {useDispatch} from 'react-redux';
import {updateUser} from '../../store/userSlice';

import {login} from '../../services';
import {setSecureValue} from '../../utils/keyChain';
import {transformToFormikErrors} from '../../utils/form';

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(5, 'Too Short!').required('Required'),
  password: Yup.string().min(5, 'Too Short!').required('Required'),
});

const Login = () => {
  const dispatch = useDispatch();

  const handleLogin = (values, {setErrors}) => {
    // Add grant_type value to obj
    let reqObj = Object.assign({}, values, {grant_type: 'password'});
    // Service request
    login(new URLSearchParams(reqObj))
      .then(res => {
        if (res.data?.user?.access_token) {
          const {name, username, access_token, refresh_token} = res.data.user;
          dispatch(updateUser({name, username, token: access_token}));
          setSecureValue('token', access_token);
          setSecureValue('refresh_token', refresh_token);
        }
      })
      .catch(e => {
        if (e.response?.data?.errors) {
          let result = transformToFormikErrors(e.response.data.errors);
          setErrors(result);
        }
      });
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.container}>
          <Card style={styles.formWrapper}>
            <Formik
              initialValues={{username: '', password: ''}}
              validationSchema={LoginSchema}
              onSubmit={handleLogin}>
              {({
                handleChange,
                handleBlur,
                handleSubmit,
                values,
                errors,
                touched,
              }) => (
                <>
                  <View style={styles.iconWrapper}>
                    <Image source={AppIcon} style={styles.appIcon} />
                  </View>
                  <Input
                    testID="Login.Username"
                    placeholder="Username/Email"
                    onChangeText={handleChange('username')}
                    onBlur={handleBlur('username')}
                    value={values.username}
                    keyboardType="email-address"
                    error={
                      errors.username && touched.username
                        ? errors.username
                        : null
                    }
                  />
                  <Input
                    testID="Login.Password"
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    value={values.password}
                    secureTextEntry
                    error={
                      errors.password && touched.password
                        ? errors.password
                        : null
                    }
                  />
                  <Button
                    title="Login"
                    onPress={handleSubmit}
                    testID="Login.Button"
                  />
                </>
              )}
            </Formik>
          </Card>
        </View>
      </ScrollView>
    </Layout>
  );
};

export default Login;

const styles = StyleSheet.create({
  scrollview: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  formWrapper: {
    width: '90%',
  },
  iconWrapper: {
    alignItems: 'center',
    marginBottom: 20,
  },
  appIcon: {
    width: 50,
    height: 50,
  },
});
