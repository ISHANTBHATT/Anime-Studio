export const initialState = {
    basket: [],
    user: null,
    fav: [],
};

export const getBasketTotal = (basket) => basket?.reduce((amount, item) => item.price + amount, 0);

const reducer = (state, action) => {
    switch (action.type){
        case "ADD_TO_BASKET":
            return {
                ...state,
                basket: [...state.basket, action.item],
            };

        case 'EMPTY_BASKET':
            return {
                ...state,
                basket: []
            } ;

        case "REMOVE_FROM_BASKET":
            const index = state.basket.findIndex (
                (basketItem) => basketItem.id === action.id
            );
            let newBasket = [...state.basket];

            if (index>=0){
                newBasket.splice(index,1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)

            }
            return{
                ...state,
                basket: newBasket
            };



        case "ADD_TO_Fav":
        return {
            ...state,
            fav: [...state.fav, action.item],
        };

        case 'EMPTY_Fav':
            return {
                ...state,
                Fav: []
            };
        
        case "REMOVE_FROM_Fav":
            const Favindex = state.fav.findIndex (
                (favItem) => favItem.id === action.id
            );
            let newFav = [...state.fav];

            if (Favindex>=0){
                newFav.splice(Favindex,1);
            } else {
                console.warn(`Cant remove product (id: ${action.id}) as its not in basket!`)

            }
            return{
                ...state,
                fav: newFav
            };


            case "SET_USER":
                return{
                    ...state,
                    user: action.user
                }

               
        default: 
            return state;
    }



    
};

export default reducer;