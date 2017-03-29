import { INCREMENT } from './mutation-types'

// mutations
export default {
  [INCREMENT] (state, { num }) {
    state.count = state.count + num
  }
}
