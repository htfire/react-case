import * as actionTypes from '../../constants/userInfo'

const initialState = {}

export default function userInfo (state = initialState, action) {
  console.log(action)
  switch (action.type) {
    // 登录
    case actionTypes.USERINFO_LOGIN:
      return action.data

      // 修改城市
    case actionTypes.UPDATE_CITYNAME:
      return action.data

    default:
      return state
  }
}
