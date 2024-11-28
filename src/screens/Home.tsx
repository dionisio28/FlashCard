import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';

import Header from '../components/shared/Header';
import {getWindowWidth, scale} from '../utils/platformUtils';
import CardItem from '../components/Home/CardItem';
import {homeStrings} from '../locales';
import {color} from '../styles';

const width = getWindowWidth();

export interface CardData {
  id: number;
  title: string;
  description: string;
}

const arrayOftest: CardData[] = [
  {
    id: 1,
    title: 'Ingles test',
    description: 'pequena descrição para o card',
  },
  {
    id: 2,
    title: 'Portugues test',
    description: 'pequena descrição para o card de portugues',
  },
  {
    id: 3,
    title: 'Esp test',
    description: '',
  },
  {
    id: 4,
    title: 'Italiano',
    description:
      'Agora uma grande descrição para o card de italiano e teste ++++++++++ com muitos caracters )))) 1392CMIM ISD ADSOIJKDO ASKDOSAK OD asjdisajdi  jiasjdisaj isajdi asjid jasijs',
  },
];

const Home: React.FC = () => {
  return (
    <View style={styles.container}>
      <Header title={homeStrings.flashcard} />
      <FlatList
        data={arrayOftest}
        style={styles.flatlist}
        keyExtractor={item => String(item.id)}
        renderItem={({item}) => <CardItem cardData={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
    backgroundColor: color.background,
  },
  flatlist: {
    padding: 16,
  },
});

export default Home;
