import React, { useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator, Text, FlatList } from 'react-native';
import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';
import { fs } from '@utils/responsive';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { fetchEvents } from '@features/event/eventSlice';
import { toggleWishlist } from '@features/wishlist/wishlistSlice';
import { showMessage } from '@utils/showMessage';
import CustomHeader from '@components/CustomHeader';
import EventCard from '@components/EventCard';
import type { Event } from '@types/api';

export default function EventsScreen() {
  const dispatch = useAppDispatch();
  const { items, loading, error } = useAppSelector(s => s.event);
  const user     = useAppSelector(s => s.auth.user);
  const wishlist = useAppSelector(s => s.wishlist.items);

  useEffect(() => {
    dispatch(fetchEvents()).then(result => {
      if (fetchEvents.rejected.match(result)) {
        showMessage(result.payload as string, 'error');
      }
    });
  }, []);

  const isWishlisted = (eventDateId: number) =>
    wishlist.some(e => e.event_date_id === eventDateId);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color={Colors.primary} />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  const renderItem = ({ item }: { item: Event }) => (
    <EventCard
      item={{ ...item, isFavorite: isWishlisted(item.event_date_id) ? 1 : 0 }}
      onPress={() => {}}
      onShare={() => {}}
      onFavourite={() => dispatch(toggleWishlist(item))}
    />
  );

  return (
    <View style={styles.container}>
      <CustomHeader
        title={`Hello ${user?.usr_fname ?? 'there'}!`}
        subtitle="Are you ready to dance?"
      />
      <FlatList
        data={items}
        keyExtractor={item => String(item.event_date_id)}
        contentContainerStyle={styles.list}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.screenBg },
  center:    { flex: 1, justifyContent: 'center', alignItems: 'center' },
  errorText: { fontFamily: Fonts.regular, fontSize: fs(14), color: 'red' },
  list:      { padding: fs(12) },
});
