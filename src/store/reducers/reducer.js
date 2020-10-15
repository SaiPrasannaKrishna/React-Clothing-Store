import * as actionTypes from '../actions/actions';
const initialState = {
  items: [
    {
      id: 1,
      name: "Nike Air",
      desc:'Men Grey RUN SWIFT Shoes',
      seller:'Indiamart',
      price:4225,
      quant:1,
      size:6.5,
      url:
        "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg",
    },
    {
      id: 2,
      name: "Adiddas",
      desc:'Men Mix Jogging Shoes',
      seller:'Addidas',
      price:4215,
      quant:2,
      size:6.5,
      url:
        "https://images.pexels.com/photos/2529147/pexels-photo-2529147.jpeg",
    },
    {
      id: 3,
      name: "Perfumea",
      desc:'Perfume 250ML',
      seller:'Paris',
      price:4225,
      quant:1,
      size:250,
      url:
        "https://images.pexels.com/photos/755992/pexels-photo-755992.jpeg",
    },
    
  ],
  quantities: [1,2,3,4,5,6,7,8,9],
  offers: [
    {
      offerId: 1,
      offerName: "SPECIALS50",
      price: -50,
    },
    {
      offerId: 2,
      offerName: "PAY25",
      price: -25,
    },
  ],
  showItems: false,
  showOffers: false,
  tax:0,
  discount:0,
  showQuant:false,
  selectedItemIdQuanity:0,
  total:0,
  wishList:[]
};

const layoutReducer = (state=initialState,action)=>{
    switch(action.type){
        case actionTypes.TOGGLE_ITEMS:
            return{
                ...state,
                showItems:action.showItem
            }
        case actionTypes.TOGGLE_OFFERS:
            return {
                ...state,
                showOffers:action.showOffers
            }
        case actionTypes.REFRESH_ITEM:
          return{
            ...state,
            items:action.items
          }
        case actionTypes.SUB_TOTAL:
          return{
            ...state,
            subTotal:action.subTotal
          }
        case actionTypes.SHOW_QUANT:
          return{
            ...state,
            showQuant:action.showQuant
          }
        case actionTypes.SET_ITEM_ID_QUANT:
          return{
            ...state,
            selectedItemIdQuanity:action.selectedItemIdQuanity
          }
        case actionTypes.TOTAL:
          return{
            ...state,
            total:action.total
          }
        default:
            return state;
    }
}

export default layoutReducer;