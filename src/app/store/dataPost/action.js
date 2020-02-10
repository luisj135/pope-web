export const PostActionTypes = {
  ADD: 'ADD',
  ADDRATEPOST: 'ADDRATEPOST',
  ADDDISRATEPOST: 'ADDDISRATEPOST',
}

export const addPost = (dataInitial) => dispatch => {
  return dispatch(
    { 
      type: PostActionTypes.ADD,
      dataInitial
    }
  )
}

export const addRatePost = (postId) => dispatch => {
  console.log(postId)
  return dispatch(
    { 
      type: PostActionTypes.ADDRATEPOST,
      postId
    }
  )
}

export const addDisRatePost = (postId) => dispatch => {
  return dispatch(
    { 
      type: PostActionTypes.ADDDISRATEPOST,
      postId
    }
  )
}
