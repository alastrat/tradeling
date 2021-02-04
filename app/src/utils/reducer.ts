import { ActionsReducer } from "./Actions";


const reducer = (state: any, action: any) => {
    const {type, data} = action;
    switch (type) {
      case ActionsReducer.SET_SEARCH:
          return {
              ...state,
              search: {...state.search, value: data.value}
          }
          case ActionsReducer.SET_TYPE:
            return {
                ...state,
                search: {...state.search, type: data.type}
            }
      default:
        return state;
    }
};

export default reducer;

export const defaultValue  = {
   search: {
       value:'',
       type: '',
   }
}