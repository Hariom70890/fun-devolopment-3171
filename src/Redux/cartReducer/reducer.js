

const iniState={
    carts:[]
}

export const cartreducer=(state=iniState,action)=>{
    switch(action.type){
        case "ADD_CART":
            return {...state,
                carts:[...state.carts,action.payload]
            
        }

         
        case "DELETE_CART":
            const data=state.carts.filter((item)=>item.id!==action.payload)
            return {...state,
                carts:data
            
        }



        default :
        return state
    }
}