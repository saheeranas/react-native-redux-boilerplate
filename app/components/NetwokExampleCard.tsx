import {StyleSheet, View, Pressable, ActivityIndicator} from 'react-native';
import React from 'react';

import {useTheme} from '../theme/useTheme';
import {spacing} from '../theme/theme';
import Text from './Text';

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
        <Text variant='titleLarge' style={[styles.cardTitle, {color: theme.color}]}>{title}</Text>
        <Pressable
          style={({pressed}) => [
            styles.btnFire,
            {backgroundColor: pressed ? theme.primary + '50' : theme.primary},
          ]}
          onPress={onPress}>
          {loading ? (
            <ActivityIndicator size="small" color="#ffffff" />
          ) : (
            <Text variant="bodySmall" style={styles.btnFireText}>
              Fire
            </Text>
          )}
        </Pressable>
      </View>

      {/* <View style={[styles.cardBody, {backgroundColor: theme.cardBg + '60'}]}> */}
      <View style={[styles.cardBody]}>
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
    paddingVertical: 16,
  },
  cardTitle: { 
    // fontSize: 18, 
  },
  cardBody: {
    backgroundColor: '#F7F7F7',
    // height: 150,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomLeftRadius: spacing.borderRadius,
    borderBottomRightRadius: spacing.borderRadius,
  },
  btnFire: {
    width: 60,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2BBCA2',
    borderRadius: 16,
    borderCurve: "continuous"
  },
  btnFireText: {
    fontSize: 14,
    color: '#fff',
  },
});
