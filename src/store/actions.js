import * as types from './mutation-types'

export const incrementCount = ({ commit }, num) => {
  if (num > 0) {
    commit(types.INCREMENT, { num })
  }
}
