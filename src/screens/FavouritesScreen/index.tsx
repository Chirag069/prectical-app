import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { Colors } from '@constants/colors';
import { Fonts } from '@constants/fonts';
import { wp, fs, sp, radius } from '@utils/responsive';

const FAVOURITES = [
  { id: '1', title: 'ADICTO: Berlin Festival', date: '24.02.2022 – 26.02.2022',     price: '€30 – €100', location: 'Berlin, Germany', tags: ['Workshop', 'Bachata'] },
  { id: '2', title: 'Berlin Sensual Nights',    date: '29.02.2022 | 21:00 – 04:00', price: '€30 – €100', location: 'Berlin, Germany', tags: ['Party', 'Bachata', 'Salsa', 'Kizz'] },
];

export default function FavouritesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello Renzo!</Text>
      <Text style={styles.sub}>Are you ready to dance?</Text>
      <FlatList
        data={FAVOURITES}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.thumb} />
            <View style={styles.info}>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.date}>{item.date}</Text>
              <Text style={styles.price}>{item.price}</Text>
              <View style={styles.tags}>
                {item.tags.map(tag => (
                  <View key={tag} style={styles.tag}>
                    <Text style={styles.tagText}>{tag}</Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.screenBg },
  greeting:  { fontFamily: Fonts.bold,    fontSize: fs(28), color: Colors.textPrimary, margin: sp(16), marginBottom: sp(4) },
  sub:       { fontFamily: Fonts.regular, fontSize: fs(14), color: Colors.textSubtle,  marginHorizontal: sp(16), marginBottom: sp(12) },
  list:      { padding: sp(12), gap: sp(12) },
  card:      { flexDirection: 'row', backgroundColor: Colors.white, borderRadius: radius(10), padding: sp(12) },
  thumb:     { width: wp(80), height: wp(80), backgroundColor: Colors.thumbBg, borderRadius: radius(6), marginRight: sp(10) },
  info:      { flex: 1 },
  title:     { fontFamily: Fonts.semiBold, fontSize: fs(15), color: Colors.textPrimary, marginBottom: sp(2) },
  date:      { fontFamily: Fonts.regular,  fontSize: fs(12), color: Colors.primary,     marginBottom: sp(2) },
  price:     { fontFamily: Fonts.regular,  fontSize: fs(12), color: Colors.textPrice,   marginBottom: sp(6) },
  tags:      { flexDirection: 'row', flexWrap: 'wrap', gap: sp(4) },
  tag:       { borderWidth: 1, borderColor: Colors.borderMuted, borderRadius: radius(20), paddingHorizontal: sp(8), paddingVertical: sp(2) },
  tagText:   { fontFamily: Fonts.regular, fontSize: fs(11), color: Colors.textTag },
});
