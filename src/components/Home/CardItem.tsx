import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../styles';
import {scale} from '../../utils/platformUtils';
import {Flashcard} from '../../database/types';
import {homeStrings} from '../../locales';

interface CardItemProps {
  cardData: Flashcard;
}

const CardItem = React.memo(({cardData}: CardItemProps) => {
  console.log('cardData', cardData);
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={styles.container}
      accessibilityLabel={`Card com título ${cardData.title}`}
      accessible>
      <View style={styles.textColumn}>
        <Text style={styles.title}>{cardData.title}</Text>
        {cardData.description && (
          <Text numberOfLines={1} style={styles.description}>
            {cardData.description}
          </Text>
        )}
        <Text numberOfLines={1} style={styles.description}>
          {homeStrings.cards}
          {cardData.cards.length}
        </Text>
      </View>
      <View style={styles.icon}>
        <Icon
          name="arrow-forward-ios"
          color={color.lightGray}
          size={scale(22)}
        />
      </View>
    </TouchableOpacity>
  );
});

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: scale(16),
    marginVertical: scale(6),
    backgroundColor: color.white,
  },
  title: {
    fontSize: scale(16),
    color: color.black,
    fontWeight: 'bold',
  },
  description: {
    fontSize: scale(12),
    color: color.darkGray,
  },
  textColumn: {
    width: '80%',
  },
  icon: {
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
