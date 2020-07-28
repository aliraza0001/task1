import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';


const index = (props) => {
  

  return (
    <View style={props.container ? props.container : styles.container}>
      <View
        style={
          props.searchSection ? props.searchSection : styles.searchSection
        }>
        <TextInput
          {...props}
          style={props.input ? props.input : styles.input}
          underlineColorAndroid="transparent"
          autoCapitalize="sentences"
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    marginVertical: 10,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255,255,255,0.4)',
    width: '80%',
    borderRadius: 25,
    height: 40,
  },
  searchIcon: {
    padding: 10,
  },
  input: {
    width: '80%',
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    color: '#fff',
  },
});
