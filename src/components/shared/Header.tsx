import React, {useCallback} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {scale} from '../../utils/platformUtils';
import {color, STATUSBAR_HEIGHT} from '../../styles';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  title: string;
  backButton?: boolean;
  menuButton?: boolean;
}

const Header = React.memo(
  ({title, backButton = true, menuButton = false}: HeaderProps) => {
    const {goBack} = useNavigation();

    const handleBackPress = useCallback(() => {
      goBack();
    }, [goBack]);

    return (
      <View style={styles.container}>
        <View style={styles.headerViewLeft}>
          {!backButton && !menuButton && (
            <HeaderButton
              iconName="arrow-back-ios-new"
              onPress={handleBackPress}
            />
          )}
          {menuButton && <HeaderButton iconName="menu" />}
        </View>
        <View style={styles.headerView}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.headerViewRight} />
      </View>
    );
  },
);

const HeaderButton = React.memo(
  ({iconName, onPress}: {iconName: string; onPress?: () => void}) => (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Icon name={iconName} color={color.white} size={scale(22)} />
    </TouchableOpacity>
  ),
);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: scale(10),
    backgroundColor: color.background,
    paddingTop: STATUSBAR_HEIGHT,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 4,
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
  headerViewRight: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {
    color: color.black,
    fontSize: scale(18),
    padding: scale(4),
    fontWeight: '500',
  },
  button: {
    padding: scale(6),
  },
});

export default Header;
