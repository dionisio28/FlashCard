import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getWindowWidth, scale} from '../../utils/platformUtils';
import { useNavigation } from '@react-navigation/native';
import Header from '../shared/Header';

const width = getWindowWidth();

const Home: React.FC = () => {
  const { navigate } = useNavigation();
  return (
    <View style={styles.container}>
      <Header title={'Flashcards'} menuButton/>
      <TouchableOpacity onPress={() => navigate('Revision')} style={styles.card}>
        <Text style={styles.title}>NEXT PAGE</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    alignItems: 'center',
  },
  card: {
    width: width * 0.9,
    padding: scale(16),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: scale(14),
  },
});

export default Home;
