import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import Ionicons from '../Icon/Icon';
import dummyImage from '../../assets/doctor.png';

const index = (props) => {
  const {name, img} = props;
  let userImage = img ? img : dummyImage;
  const {goBack} = props.navigation;
  return (
    <View
      style={{
        width: '100%',
        height: 60,
        backgroundColor: '#23152e',
        flexDirection: 'row',
      }}>
      <TouchableOpacity
        activeOpacity={0.6}
        onPress={() => goBack()}
        style={{margin: 10, justifyContent: 'center'}}>
        <Ionicons icon="md-arrow-round-back" size={25} color="#ff7ab1" />
      </TouchableOpacity>
      <View
        style={{
          height: 60,
          width: 50,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          source={{uri: userImage}}
          style={{height: 40, width: 40, borderRadius: 40 / 2}}
        />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={{marginLeft: 16, justifyContent: 'center'}}>
          <Text style={{color: '#fff', fontSize: 14}}>
            {name ? name : 'Test User'}
          </Text>
          <Text style={{color: '#f5f5f5', fontSize: 12}}>online</Text>
        </View>
        <View style={{marginRight: 16, marginTop: 10}}>
          <Ionicons icon="md-more" size={25} color="#ff7ab1" />
        </View>
      </View>
    </View>
  );
};

export default index;
