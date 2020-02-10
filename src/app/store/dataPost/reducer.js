import { PostActionTypes } from './action'

const InitialState = {
    postData:{}
}

export default (state = InitialState, action) => {
  switch (action.type) {
    case PostActionTypes.ADD:
      return {
        ...state,
        postData: action.dataInitial
      }
    case PostActionTypes.ADDRATEPOST:
      let dataUpdateLike = state.postData.map((item) => {
        if(item.slug === action.postId){
          if(item.vote.like > 0){
            item.vote.like = +item.vote.like + +1
            return item
          }else{
            item.vote.like = 0
            return item
          }
        }else{
          return item;
        }
      })
      return {
        ...state,
        postData: dataUpdateLike 
      }
    case PostActionTypes.ADDDISRATEPOST:
      let dataUpdatedisLike = state.postData.map((item) => {
        if(item.slug === action.postId){
          if(item.vote.like > 0){
            item.vote.like = +item.vote.like - +1
            return item
          }else{
            item.vote.like = 0
            return item
          }
        }else{
          return item;
        }
      })
      return {
        ...state,
        postData: dataUpdatedisLike
      }
    default:
      return state
  }
}
