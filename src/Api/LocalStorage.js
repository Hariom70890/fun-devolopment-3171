export const setLocalstorageData = (key,value="")=>{
    return (localStorage.setItem(key,value) || null)
}
export const setLocalstorageDataCategory = (key,value = "All")=>{
    return (localStorage.setItem(key,value ) || null)
}
export const getLocalstorageData = (key)=>{
  return localStorage.getItem(key)
}

