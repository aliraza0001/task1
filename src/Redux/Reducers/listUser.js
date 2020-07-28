import * as Types from '../Types/listUser';
const iniState = {loading: false, user: '', listOfUser: [], error: '',followers:'',following:''};

export default (state = iniState, action) => {
  switch (action.type) {
    case Types.Pending:
      return {...state, ...action.payload};
    case Types.Success:
      return {...state, ...action.payload};
    case Types.Error:
      return {...state, ...action.payload};

    default:
      return {...state};
  }
};
