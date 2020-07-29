import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {View, FlatList, SafeAreaView, ActivityIndicator} from 'react-native';
import {debounce} from 'lodash';
import SearchBar from './src/Components/searchbar';
import Card from './src/Components/card';

import {getListOfUser, getUser} from './src/Redux/Actions/listAction';
// import dummyImage from './src/assets/doctor.png'

export default function App() {
  const [data, setData] = React.useState([]);
  // const [arry, setArray] = React.useState([]);
  const [value, setValue] = React.useState('');

  const [loading, setLoading] = React.useState(false);
  const handler = React.useCallback(
    debounce((val) => Search(val), 1000),
    [],
  );
  const dispatch = useDispatch();
  const usersData = useSelector(
    (state) => state && state.users && state.users.listOfUser,
  );
  const userData = useSelector(
    (state) => state && state.users && state.users.user,
  );

  const searchFilterFunction = (text) => {
    setValue(text);
    // const updateData = arry.filter((item) => {
    //   const itemData = item.login.toUpperCase();
    //   const textData = text.toUpperCase();
    //   return itemData.indexOf(textData) > -1;
    // });

    // setData(updateData);
    if (value !== '') handler(text);
  };

  const Search = (text) => dispatch(getUser(text));

  React.useEffect(() => {
    if (!usersData.length > 0) {
      setLoading(true);
      dispatch(getListOfUser());
    }
    if (usersData.length > 0) {
      setLoading(false);
      setData(usersData);
      // setArray(usersData);
    }

    if(userData&&userData.message&&value)alert(userData.message)
  }, [usersData,userData]);

  const mixedData = value && userData ? [userData] : data;
  return (
    <React.Fragment>
      {!loading ? (
        <SafeAreaView style={{backgroundColor: '#23152e', flex: 1}}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: '#666666',
              marginBottom: 10,
            }}>
            <SearchBar
              value={value}
              onChangeText={(val) => searchFilterFunction(val)}
              placeholder="user Name"
            />
          </View>
          <FlatList
            data={mixedData}
            renderItem={({item}) => (
              <Card
                name={item.login}
                link={item.html_url}
                img={item.avatar_url}
                data={item}
              />
            )}
            keyExtractor={(item) => item.node_id}
          />
        </SafeAreaView>
      ) : (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            flexDirection: 'row',
            justifyContent: 'space-around',
            padding: 10,
          }}>
          <ActivityIndicator hidesWhenStopped size="large" />
        </View>
      )}
    </React.Fragment>
  );
}
