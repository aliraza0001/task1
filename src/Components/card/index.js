import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';

import Modal from '../Modal';
import Profile from '../Profile';

export default (props) => {
  const [visiabl, setVisiabl] = React.useState(false);
  const [currentUser, setCurrentUser] = React.useState('');

  const clickHandler = () => {
    setVisiabl(!visiabl);
    setCurrentUser(props.data)
  };
  const {name, img, link} = props;

  return (
    <View
      style={[
        Style.profileContainer,
        {borderBottomWidth: 0.25, borderColor: '#666666'},
      ]}>
      {img ? (
        <TouchableOpacity
          onPress={clickHandler}
          activeOpacity={0.7}
          style={Style.profileContainer}>
          <View style={Style.imageContainer}>
            <Image source={{uri: img}} style={Style.img} />
          </View>
          <View style={Style.textContainer}>
            <Text style={Style.text}>{name ? name : 'Test User'}</Text>
            <Text onPress={() => Linking.openURL(link)} style={Style.text}>
              {link ? link : 'Test User'}
            </Text>
          </View>
        </TouchableOpacity>
      ) : null}
      {visiabl ? (
        <Modal
          visible={visiabl}
          close={() => setVisiabl(!visiabl)}
          Component={()=><Profile data={currentUser} />}
        />
      ) : null}
    </View>
  );
};

const Style = StyleSheet.create({
  profileContainer: {
    height: 75,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignItems: 'center',
  },
  imageContainer: {
    width: '25%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {width: 50, height: 50, borderRadius: 50 / 2},
  textContainer: {width: '80%', justifyContent: 'center'},
  text: {color: '#fff', fontWeight: 'bold', textAlign: 'left'},
  optionImageContainer: {
    width: '15%',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  optionImage: {width: 30, height: 30, borderRadius: 30 / 2, marginRight: 10},
});
