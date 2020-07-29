import React from 'react';
import {View, Text, Image,TouchableOpacity,Linking} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getFollowers} from '../../Redux/Actions/listAction';
import wonBin from '../../assets/doctor.png';

export default (props) => {
  const dispatch = useDispatch();
  const followers = useSelector(
    (state) => state && state.users && state.users.followers,
  );
  const following = useSelector(
    (state) => state && state.users && state.users.following,
  );

  React.useEffect(() => {
    if (!followers && !following && props.data)
      dispatch(getFollowers(props.data.login));
    return () => {
      console.log('hell unMount');
    };
  }, []);
  console.log('helllo from profile',props)
  return (
    <View
      style={{
        flex: 1,
        // justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View
        style={{
          marginTop: 15,
          height: 150,
          width: 150,
          borderRadius: 150 / 2,
          backgroundColor: 'red',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Image
          style={{
            height: 150,
            width: 150,
            borderRadius: 150 / 2,
            textAlign: 'center',
          }}
          source={{uri:props.data.avatar_url}}
          resizeMode="contain"
        />
      </View>
      <Text
        style={{
          fontSize: 24,
          fontWeight: 'bold',
          marginTop: 15,
          textAlign: 'center',
        }}>
        {props.data.login}
      </Text>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 15,
        }}>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 5}}>
            Followings
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 15}}>
            {props.data.following?props.data.following:100}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={{display: 'flex', flexDirection: 'row'}}>
          <Text style={{fontSize: 14, fontWeight: 'bold', marginRight: 5}}>
            Followers
          </Text>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>{props.data.followers&&props.data.followers||150}</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
          borderColor: '#000',
          borderWidth: 1,
          borderRadius: 10,
          height: 40,
          width: 250,
          display: 'flex',
          justifyContent: 'center',
          paddingLeft: 10,
          marginTop: 15,
        }}>
        <Text onPress={()=>Linking.openURL(props.data.html_url)} style={{fontSize: 14}}>{props.data.html_url}</Text>
      </TouchableOpacity>
    </View>
  );
};
