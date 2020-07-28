import React from 'react'
import Ionicons from 'react-native-vector-icons/Ionicons'


export default  (props) => {
    return (
        <Ionicons style={props.style ? props.style : {}} name={props.icon ? props.icon : "ios-search"} size={props.size?props.size:20} color={props.color?props.color:"#fff"} />

    )
}
