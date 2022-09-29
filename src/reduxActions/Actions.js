import { BUY_CAKE, BUY_ICECREAM } from "./ActionTypes";

//Action is a FUNCTION that returns an Object containing a "type" key
export const buyCake = ()=>{
    return {
        type: BUY_CAKE,
        variety: ['creamy','dry','cupcakes']
    }
}

export const buyIcecream = () => {
    return {
        type: BUY_ICECREAM
    }
}