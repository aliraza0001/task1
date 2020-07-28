import * as Types from '../Types/listUser'
const requestOptions = {
  method: 'GET',
  redirect: 'follow',
};

export const getListOfUser = () => {
  return async (dispatch) => {
    try {
      dispatch({type:Types.Pending,payload:{loading:true}})
      const response = await fetch(
        'https://api.github.com/users?since=135',
        requestOptions,
      );
      const listOfUser = await response.json();
      console.log('helllo', listOfUser);
      dispatch({type:Types.Success,payload:{loading:false,listOfUser}})
    } catch (error) {
      dispatch({type:Types.Error,payload:{loading:false,error}})
      console.log(error);
    }
  };
};

export const getUser = (userName) => {
  return async (dispatch) => {
    try {
      dispatch({type:Types.Pending,payload:{loading:true}})
      const response = await fetch(
        `https://api.github.com/users/${userName}`,
        requestOptions,
      );
      const user = await response.json();
      console.log('hello User', user);
      dispatch({type:Types.Success,payload:{loading:false,user}})
    } catch (error) {
      dispatch({type:Types.Success,payload:{loading:false}})
      console.log(error);
    }
  };
};


export const getFollowers = (name) => {
    return async (dispatch) => {
      try {
        dispatch({type:Types.Pending,payload:{loading:true}})
        const followers = await fetch( `https://api.github.com/users/${name}/followers`, requestOptions,);
        const following = await fetch( `https://api.github.com/users/${name}/following`, requestOptions,);
        const response = await Promise.all(followers,following)
        
        console.log('hello User', response);

        // dispatch({type:Types.Success,payload:{loading:false,user}})
      } catch (error) {
        console.log(error);
        dispatch({type:Types.Success,payload:{loading:false}})
      }
    };
  };


  export const EmptyFollowers = () => {
    return (dispatch) => dispatch({type:Types.EmptyFollwers,payload:{followers:'',following:''}})
  };


