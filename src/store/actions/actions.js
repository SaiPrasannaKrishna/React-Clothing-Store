export const TOGGLE_ITEMS = 'TOGGLE_ITEMS';
export const TOGGLE_OFFERS ='TOGGLE_OFFERS';
export const REMOVE_ITEM ='REMOVE_ITEM';
export const REFRESH_ITEM ='REFRESH_ITEM';
export const SUB_TOTAL = 'SUB_TOTAL';
export const TOTAL = 'TOTAL';
export const SHOW_QUANT = 'SHOW_QUANT';
export const SET_ITEM_ID_QUANT = 'SET_ITEM_ID_QUANT';


export const toggleItems = (showItem)=>{
    return{
        type:TOGGLE_ITEMS,
        showItem:showItem
    }
}

export const toggleOffers = (showOffers)=>{
    return{
        type:TOGGLE_OFFERS,
        showOffers:showOffers
    }
}

export const removeItem = (item)=>{
    return{
        type:REMOVE_ITEM,
        item:item
    }
}

export const refreshItem = (items)=>{
    return{
        type:REFRESH_ITEM,
        items:items
    }
}

export const setTotal = (total)=>{
    return{
        type:TOTAL,
        total:total
    }
}

export const showQuantity = (showQuant)=>{
    return{
        type:SHOW_QUANT,
        showQuant:showQuant
    }
}

export const setItemForQuantity = (selectedItemIdQuanity)=>{
    return{
        type:SET_ITEM_ID_QUANT,
        selectedItemIdQuanity:selectedItemIdQuanity
    }
}



