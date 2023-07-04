import React from 'react';
import {ScrollView, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import Layout from '../components/Layout';
import NetwokExampleCard from '../components/NetwokExampleCard';

import {RootState, AppDispatch} from '../store/store';
import {fetchUser} from '../store/dummyNetwork';

export default function NetworkExample() {
  const dispatch = useDispatch<AppDispatch>();

  const userStatus = useSelector(
    (state: RootState) => state.dummyNetwork.status,
  );

  const user = useSelector((state: RootState) => state.dummyNetwork.data);

  console.log(user);

  const fetchData = () => {
    dispatch(fetchUser());
  };

  return (
    <Layout>
      <ScrollView contentContainerStyle={styles.scrollview}>
        {/* Get Card */}
        <NetwokExampleCard
          title="GET"
          loading={userStatus === 'loading'}
          onPress={fetchData}>
          <Text style={styles.url}>
            URL: https://jsonplaceholder.typicode.com/users/1
          </Text>
          <Text style={styles.url}>{userStatus}</Text>

          {userStatus === 'succeeded' ? (
            <>
              <Text>{user.name}</Text>
              <Text>{user.email}</Text>
            </>
          ) : (
            <>
              <Text style={styles.url}>Press fire to fetch the data</Text>
            </>
          )}
        </NetwokExampleCard>
      </ScrollView>
    </Layout>
  );
}

const styles = StyleSheet.create({
  scrollview: {
    paddingHorizontal: 16,
    paddingVertical: 20,
  },
  url: {
    fontSize: 12,
    marginBottom: 10,
  },
});
