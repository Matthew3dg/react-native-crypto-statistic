import React from 'react';
import {
  ActivityIndicator,
  Pressable,
  RefreshControl,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from 'react-native-reanimated';
import {useMarketsQuery} from '../hooks/useMarketsQuery';
import {usePreferencesStore} from '../store/preferences';
import {CoinRow} from '../components/CoinRow';

export function MarketsScreen() {
  const [page, setPage] = React.useState(1);
  const [direction, setDirection] = React.useState<'next' | 'prev'>('next');
  const {data, isLoading, isFetching, refetch} = useMarketsQuery(page);
  const vsCurrency = usePreferencesStore(s => s.vsCurrency);
  const perPage = usePreferencesStore(s => s.perPage);

  return (
    <SafeAreaView style={styles.root}>
      <View style={styles.header}>
        <Text style={styles.title}>Markets</Text>
        <Text style={styles.subtitle}>
          {perPage} per page • {vsCurrency.toUpperCase()}
        </Text>
      </View>

      {isLoading ? (
        <View style={styles.center}>
          <ActivityIndicator />
        </View>
      ) : (
        <Animated.FlatList
          // extraData={page}
          key={page}
          style={styles.root}
          entering={
            direction === 'next'
              ? SlideInRight.springify()
              : SlideInLeft.springify()
          }
          exiting={
            direction === 'next'
              ? SlideOutLeft.springify()
              : SlideOutRight.springify()
          }
          data={data}
          getItemLayout={(_, index) => ({
            length: 60,
            offset: 60 * index,
            index,
          })}
          keyExtractor={item => item.id}
          renderItem={({item}) => <CoinRow coin={item} />}
          refreshControl={
            <RefreshControl refreshing={isFetching} onRefresh={refetch} />
          }
          ListFooterComponent={
            <View style={styles.pagination}>
              <Pressable
                style={[styles.button, page === 1 && styles.buttonDisabled]}
                disabled={page === 1}
                onPress={() => {
                  setDirection('prev');
                  setPage(p => Math.max(1, p - 1));
                }}>
                <Text style={styles.buttonText}>Prev</Text>
              </Pressable>
              <Text style={styles.pageText}>Page {page}</Text>
              <Pressable
                style={styles.button}
                onPress={() => {
                  setDirection('next');
                  setPage(p => p + 1);
                }}>
                <Text style={styles.buttonText}>Next</Text>
              </Pressable>
            </View>
          }
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: '#fff'},
  header: {paddingHorizontal: 16, paddingVertical: 12},
  title: {fontSize: 24, fontWeight: '700'},
  subtitle: {fontSize: 12, color: '#6b7280', marginTop: 4},
  center: {flex: 1, alignItems: 'center', justifyContent: 'center'},
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: '#e5e7eb',
    backgroundColor: '#fff',
  },
  pageText: {fontSize: 14, color: '#111827'},
  button: {
    backgroundColor: '#111827',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonDisabled: {opacity: 0.5},
  buttonText: {color: 'white', fontWeight: '600'},
});
