const initialState = {
  userName:'',
  isLoggedIn:false,
};

const LOGIN_USER = 'LOGIN_USER';
const LOGOUT_USER = 'LOGOUT_USER';


export function loginUser(username){
  
  return {
    type:LOGIN_USER,
    payload: username
  }
  
};

export function loginOut(){
  return {
    type: LOGOUT_USER,
  }
};


export default function reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_USER:
      return {
        ...state,
        username: action.payload,
        isLoggedIn:true
      }

    case LOGOUT_USER:
      return initialState;
    default: return state;
  }

}