import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Linking,
} from 'react-native';
import {useSelector,useDispatch} from 'react-redux'
import Modal from '../Modal';
import {getFollowers} from '../../Redux/Actions/listAction'

export default (props) => {
  const [visiabl, setVisiabl] = React.useState(false);
  const dispatch = useDispatch()
  const followers = useSelector((state)=>state&&state.users&&state.users.followers)
  const following = useSelector((state)=>state&&state.users&&state.users.following)
  const clickHandler = () => {
    setVisiabl(!visiabl);
    console.log(props.data);
  };
  const {name, img, link} = props;

  React.useEffect(()=>{
    
if(!followers&&!following&&props.data&&visiabl) dispatch(getFollowers(props.data.login))
return () => {
  console.log('hell unMount')
}
  },[])

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
      <Modal
        visible={visiabl}
        close={() => setVisiabl(!visiabl)}
        Component={(item) => (
          <View
            style={{
              flex: 1,
              justifyContent: 'center',
              alignContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                flex: 0.6,
                borderRadius: 100,
                backgroundColor: 'red',
                justifyContent: 'center',
                alignContent: 'center',
              }}>
              <Image
                style={{width: '100%', height: '100%'}}
                source={require('../../assets/doctor.png')}
              />
            </View>
            <Text>Hello{item.login}</Text>
          </View>
        )}
      />
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
