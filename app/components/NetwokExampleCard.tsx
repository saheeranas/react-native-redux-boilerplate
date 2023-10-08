import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ActivityIndicator,
} from 'react-native';
import React from 'react';

import {useTheme} from '../theme/useTheme';
import {spacing} from '../theme/theme';

type NetworkExampleCardProps = {
  title: string;
  loading?: boolean;
  onPress?: () => void;
  children: React.ReactNode;
};

const NetwokExampleCard = ({
  title = '',
  loading = false,
  onPress = () => {},
  children,
}: NetworkExampleCardProps) => {
  const {theme} = useTheme();

  return (
    <View style={styles.card}>
      <View
        style={[
          styles.cardHeader,
          {
            backgroundColor: theme.cardBg,
            borderTopLeftRadius: spacing.borderRadius,
            borderTopRightRadius: spacing.borderRadius,
          },
        ]}>
        <Text style={[styles.cardTitle, {color: theme.color}]}>{title}</Text>
        <Pressable
          style={({pressed}) => [
            styles.btnFire,
            {backgroundColor: pressed ? theme.primary + '50' : theme.primary},
          ]}
          onPress={onPress}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text style={styles.btnFireText}>Fire</Text>
          )}
        </Pressable>
      </View>

      <View style={[styles.cardBody, {backgroundColor: theme.cardBg + '60'}]}>
        {children}
      </View>
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
    // height: 150,
    paddingHorizontal: 16,
    paddingVertical: 16,
  },
  btnFire: {
    width: 60,
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2BBCA2',
    borderRadius: 12,
  },
  btnFireText: {
    fontSize: 14,
    color: '#fff',
  },
});
