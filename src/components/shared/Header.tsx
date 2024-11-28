import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {scale} from '../../utils/platformUtils';
import {color, STATUSBAR_HEIGHT} from '../../styles';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  backButton?: boolean;
  menuButton?: boolean;
}

const Header = ({title, backButton = true, menuButton = false}: HeaderProps) => {
  const { goBack } = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.headerViewLeft}>
        {backButton && !menuButton && (
          <TouchableOpacity onPress={goBack} style={styles.button}>
            <Icon name="arrow-back-ios-new" color={color.white} size={scale(24)} />
          </TouchableOpacity>
        )}
         {menuButton && (
          <TouchableOpacity style={styles.button}>
            <Icon name="menu" color={color.white} size={scale(24)} />
          </TouchableOpacity>
        )}
      </View>
      <View style={styles.headerView}>
        <Text style={styles.title}> {title} </Text>
      </View>
      <View style={styles.headerViewRigth} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(10),
    backgroundColor: color.primaryBlue,
    paddingTop: STATUSBAR_HEIGHT,
  },
  headerView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerViewLeft: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  headerViewRigth: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    color: color.white,
    fontSize: scale(16),
    padding: scale(4),
    fontWeight: '500',
  },
  button: {
    padding: scale(6),
  },
});

export default Header;
