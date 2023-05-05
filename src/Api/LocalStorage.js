export const setLocalstorageData = (key,value="")=>{
    return (localStorage.setItem(key,value))
}
export const setLocalstorageDataCategory = (key,value = "All")=>{
    return (localStorage.setItem(key,value))
}
export const getLocalstorageData = (key)=>{
  return localStorage.getItem(key)
}