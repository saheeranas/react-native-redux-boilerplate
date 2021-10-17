import React from 'react';
import {StyleSheet, View, Button, Image, ScrollView, Text} from 'react-native';
import {Formik} from 'formik';
import * as Yup from 'yup';

import Layout from '../../components/Layout';
import Card from '../../components/Card';
import {Input} from '../../components/Form';
const AppIcon = require('../../assets/images//appicon.png');

import {login} from '../../services';

const LoginSchema = Yup.object().shape({
  username: Yup.string().min(2, 'Too Short!').required('Required'),
  password: Yup.string().min(2, 'Too Short!').required('Required'),
});

const Login = () => {
  const handleLogin = async values => {
    try {
      let res = await login(values);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.scrollview}>
        <View style={styles.container}>
          {/* <View style={styles.formWrapper}> */}
          <Card style={styles.formWrapper}>
            <Formik
              initialValues={{username: '', password: ''}}
              validationSchema={LoginSchema}
              onSubmit={values => handleLogin(values)}>
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
                  <Button title="Login" onPress={handleSubmit} />
                </>
              )}
            </Formik>
          </Card>
          {/* </View> */}
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
