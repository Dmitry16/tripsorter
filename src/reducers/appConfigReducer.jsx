export default function(state={
  initialDialog: true,
},action){

  // if (action.type==='SHOW_INITIAL_DIALOG')
  //   return {
  //     ...state,
  //     initialDialog: true
  //   }
  // else
  if (action.type==='HIDE_INITIAL_DIALOG') {
    return {
      ...state,
      initialDialog: false
      }
    }
  return state;
};
