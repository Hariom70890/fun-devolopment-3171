export const ADD=(item)=>{
    return {
        type:"ADD_CART",
        payload:item
    }
}



export const Deletef=(id)=>{
    return {
        type:"DELETE_CART",
        payload:id
    }
}