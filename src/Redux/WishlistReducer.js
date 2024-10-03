const initialiState = {
    wishlist :[]
}


const wishlistReducer = (state = initialiState,action )=>{
    switch (action.type) {
        case 'TOOGLE_WISHLIST_ITEM':
           const isItemInWishlist = state.wishlist.some(item=>item.id === action.payload.id);
           if (isItemInWishlist) {
            return{
                ...state,
                wishlist : state.wishlist.filter(item=>item.id !== action.payload.id),
            };
           }  
            return{
                ...state,
                wishlist:[...state.wishlist,action.payload],
            };
    
        default:
           return state;
    }

}


export default wishlistReducer;