import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {color} from '../../styles';
import {scale} from '../../utils/platformUtils';
import {CardData} from '../../screens/Home';

interface CardItemProps {
  cardData: CardData;
}

const CardItem = ({cardData}: CardItemProps) => {
  return (
    <TouchableOpacity activeOpacity={0.5} style={styles.container}>
      <View style={styles.textColumn}>
        <Text style={styles.title}>{cardData.title}</Text>
        {cardData.description && (
          <Text numberOfLines={1} style={styles.description}>
            {cardData.description}
          </Text>
        )}
      </View>
      <View style={styles.icon}>
        <Icon
          name={'arrow-forward-ios'}
          color={color.lightGray}
          size={scale(22)}
        />
      </View>
    </TouchableOpacity>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingBottom: 16,
    marginVertical: 6,
  },
  title: {
    fontSize: scale(16),
    color: color.lightBlack,
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
