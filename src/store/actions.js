import * as types from './mutation-types'

export const incrementAccountCount = ({ commit }, num) => {
  console.log(num)
  if (num > 0) {
    console.log(types)
    commit(types.ACCOUNT_INCREMENT, { num })
  }
}
