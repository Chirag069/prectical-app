import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';
import { wp, fs, sp, radius } from '@utils/responsive';
import { SVGs } from '@svg';
import type { Event } from '@appTypes/api';

interface EventCardProps {
  item: Event;
  onPress?: () => void;
  onShare?: () => void;
  onFavourite?: () => void;
}

export default function EventCard({ item, onPress, onShare, onFavourite }: EventCardProps) {
  const isFav = item.isFavorite === 1;

  const price =
    item.event_price_from === 0 && item.event_price_to === 0
      ? 'Free'
      : `₹${item.event_price_from} – ₹${item.event_price_to}`;

  const dateLabel = item.readable_to_date
    ? `${item.readable_from_date} – ${item.readable_to_date}`
    : item.readable_from_date;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.85}>
      <TouchableOpacity style={styles.arrowBtn} onPress={onPress}>
        <SVGs.ArrowRight width={fs(20)} height={fs(20)} color={Colors.textPrimary} />
      </TouchableOpacity>
      <View style={styles.row}>
        <Image
          source={{ uri: item.event_profile_img }}
          style={styles.thumb}
          resizeMode="cover"
        />
        <View style={styles.info}>
          <Text style={styles.title} numberOfLines={1}>{item.event_name}</Text>
          <View style={styles.metaRow}>
            <Text style={styles.date}>{dateLabel}</Text>
            <Text style={styles.location}>{item.city}, {item.country}</Text>
          </View>
          <Text style={styles.price}>{price}</Text>
          <View style={styles.bottomRow}>
            <View style={styles.tags}>
              {item.danceStyles.map(ds => (
                <View key={ds.ds_id} style={styles.tag}>
                  <Text style={styles.tagText}>{ds.ds_name}</Text>
                </View>
              ))}
            </View>
            <View style={styles.actions}>
              <TouchableOpacity onPress={onShare} style={styles.actionBtn}>
                <SVGs.Vector width={fs(18)} height={fs(18)} />
              </TouchableOpacity>
              <TouchableOpacity onPress={onFavourite} style={styles.actionBtn}>
                {isFav
                  ? <SVGs.HeartFilled width={fs(20)} height={fs(20)} />
                  : <SVGs.HeartOutline width={fs(20)} height={fs(20)} />}
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: Colors.white,
    borderRadius: radius(12),
    padding: sp(12),
    marginBottom: sp(12),
    shadowColor: Colors.shadow,
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  arrowBtn: {
    position: 'absolute',
    top: sp(0),
    right: sp(0),
    zIndex: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  thumb: {
    width: wp(85),
    height: wp(85),
    borderRadius: radius(8),
    backgroundColor: Colors.thumbBg,
    marginRight: sp(10),
  },
  info: {
    flex: 1,
  },
  title: {
    fontFamily: Fonts.semiBold,
    fontSize: fs(16),
    color: Colors.textPrimary,
  },
  metaRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  date: {
    fontFamily: Fonts.regular,
    fontSize: fs(11),
    color: Colors.primary,
    flexShrink: 1,
  },
  location: {
    fontFamily: Fonts.regular,
    fontSize: fs(11),
    color: Colors.textMuted,
    textAlign: 'right',
    flexShrink: 0,
    marginLeft: sp(4),
  },
  price: {
    fontFamily: Fonts.regular,
    fontSize: fs(12),
    color: Colors.textPrice,
  },
  bottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  tags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: sp(4),
    flex: 1,
  },
  tag: {
    borderRadius: radius(20),
    paddingHorizontal: sp(8),
    paddingVertical: sp(1),
    backgroundColor: Colors.bgTag,
  },
  tagText: {
    fontFamily: Fonts.regular,
    fontSize: fs(11),
    color: Colors.textTag,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: sp(6),
    marginLeft: sp(8),
  },
  actionBtn: {
    padding: sp(4),
  },
});
