import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';
import { fs, sp } from '@utils/responsive';
import { useAppDispatch, useAppSelector } from '@hooks/redux';
import { toggleWishlist } from '@features/wishlist/wishlistSlice';
import EventCard from '@components/EventCard';
import type { Event } from '@appTypes/api';
import CustomHeader from '@components/CustomHeader';

export default function FavouritesScreen() {
  const dispatch = useAppDispatch();
  const items = useAppSelector(s => s.wishlist.items);
  const user  = useAppSelector(s => s.auth.user);

  return (
    <View style={styles.container}>
     <CustomHeader
        title={`Hello ${user?.usr_fname ?? 'there'}!`}
        subtitle="Are you ready to dance?"
      />
      {items.length === 0 ? (
        <View style={styles.empty}>
          <Text style={styles.emptyText}>No favourites yet.</Text>
        </View>
      ) : (
        <FlatList
          data={items}
          keyExtractor={item => String(item.event_date_id)}
          contentContainerStyle={styles.list}
          renderItem={({ item }: { item: Event }) => (
            <EventCard
              item={item}
              onPress={() => {}}
              onShare={() => {}}
              onFavourite={() => dispatch(toggleWishlist(item))}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container:  { flex: 1, backgroundColor: Colors.screenBg },
  greeting:   { fontFamily: Fonts.bold,    fontSize: fs(28), color: Colors.textPrimary, margin: sp(16), marginBottom: sp(4) },
  sub:        { fontFamily: Fonts.regular, fontSize: fs(14), color: Colors.textSubtle,  marginHorizontal: sp(16), marginBottom: sp(12) },
  list:       { padding: fs(12) },
  empty:      { flex: 1, justifyContent: 'center', alignItems: 'center' },
  emptyText:  { fontFamily: Fonts.regular, fontSize: fs(14), color: Colors.textMuted },
});
