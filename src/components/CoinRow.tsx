import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {MarketCoin} from '../api/coingecko';

type Props = {
  coin: MarketCoin;
};

export function CoinRow({coin}: Props) {
  const change = coin.price_change_percentage_24h ?? 0;
  const changeColor = change >= 0 ? '#16a34a' : '#dc2626';

  return (
    <View style={styles.container}>
      <Image source={{uri: coin.image}} style={styles.icon} />
      <View style={styles.info}>
        <Text style={styles.name} numberOfLines={1}>
          {coin.name}
        </Text>
        <Text style={styles.symbol}>{coin.symbol.toUpperCase()}</Text>
      </View>
      <View style={styles.right}>
        <Text style={styles.price}>${coin.current_price.toLocaleString()}</Text>
        <Text style={[styles.change, {color: changeColor}]}>
          {change.toFixed(2)}%
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: '#e5e7eb',
    backgroundColor: '#fff',
  },
  icon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  info: {flex: 1},
  name: {fontSize: 16, fontWeight: '600'},
  symbol: {fontSize: 12, color: '#6b7280', marginTop: 2},
  right: {alignItems: 'flex-end'},
  price: {fontSize: 16, fontWeight: '600'},
  change: {fontSize: 12, marginTop: 2},
});
