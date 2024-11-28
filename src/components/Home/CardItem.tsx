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
    <View style={styles.container}>
      <View>
        <Text>{cardData.title}</Text>
        <Text>{cardData.description}</Text>
      </View>
      <TouchableOpacity>
        <Icon name={'edit'} color={color.darkGray} size={scale(24)} />
      </TouchableOpacity>
    </View>
  );
};

export default CardItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
});
