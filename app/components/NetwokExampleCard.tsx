import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

type NetworkExampleCardProps = {
  title: string;
  loading: boolean;
  onPress?: () => void;
  children: React.ReactNode;
};

const NetwokExampleCard = ({
  title = '',
  loading = false,
  onPress = () => {},
  children,
}: NetworkExampleCardProps) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Text style={styles.cardTitle}>{title}</Text>
        <Pressable style={styles.btnFire} onPress={onPress}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.btnFireText}>Fire</Text>
          )}
        </Pressable>
      </View>

      <View style={styles.cardBody}>{children}</View>
    </View>
  );
};

export default NetwokExampleCard;

const styles = StyleSheet.create({
  card: {
    marginBottom: 16,
  },
  cardHeader: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardBody: {
    backgroundColor: '#F8F7F7',
    height: 150,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  btnFire: {
    width: 77,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2BBCA2',
    borderRadius: 12,
  },
  btnFireText: {
    fontSize: 16,
    color: '#fff',
  },
});
