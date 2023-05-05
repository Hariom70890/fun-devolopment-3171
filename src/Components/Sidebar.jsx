import { Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
import { ContextProvider } from '../context/ContextProvider';
import { setLocalstorageData, setLocalstorageDataCategory, setLocalstorageDataGender } from '../Api/LocalStorage';
import "../Css/sidebar.css"
// import { BsPlusLg } from 'react-icons/bs';
import filterIcon from "../images/filter-icon.png"
import tasklist from "../images/task-list.png"


export const Sidebar = () => {
  // const {headingGender,headingCategory} =useContext(ContextProvider)
  const [params,setParams] = useSearchParams();
 const  initialCategory = params.getAll("category")
  const initialGender = params.getAll("gender")
  const initialColor = params.getAll("color")
  const [gender,setGender] = useState(initialGender || []);
  const [category,setCategory] = useState(initialCategory || []);
  const [color,setColor] = useState(initialColor || []);



  useEffect(()=>{
    let params ={
      gender,
      category,
      color
    }
    setParams(params)
  },[gender,category,color])


  const handleGenderChange=(e)=>{
     const {value} = e.target
    //  console.log(value)
    let newGenderArr = [...gender]
    if(newGenderArr.includes(value)){
      newGenderArr = newGenderArr.filter((ele) => ele !== value)
    }
    else {
      newGenderArr.push(value)
    }
    setGender(newGenderArr)
  }
// console.log(gender)

const handleCategoryChange = (e)=>{
  const {value} = e.target;
  let newCategoryArr = [...category]
  if(newCategoryArr.includes(value)){
    newCategoryArr = newCategoryArr.filter((ele)=> ele !== value )
  }
  else{
    newCategoryArr.push(value)
  }
  setCategory(newCategoryArr)
}

const handleColorChange =(e)=>{
  const {value} = e.target
  let newClorArray = [...color]
  if(newClorArray.includes(value)){
    newClorArray = newClorArray.filter((ele) => ele !== value)
  }
  else {
    newClorArray.push(value)
  }
  setColor(newClorArray)
}


const headingCat = category[category.length-1]
const headingGen = gender[gender.length-1]

setLocalstorageDataCategory("headingCat",headingCat)
setLocalstorageData("headingGen",headingGen)

  return (
    <div className='sidebar-container' >
        <div className='filter-div'>
        <img src={filterIcon}/>
        <Text fontSize='30px' color='black'> Refined By</Text>  {/* <FcFilledFilter />  */}
        </div>
      <div className='category-gender'>
      <Text fontSize='25px' color='black'> Gender</Text>

      <div className='checkbox'>
      <input type='checkbox' value={"male"} onChange={handleGenderChange} checked={gender.includes("male")} />  
      <label> Male</label>
      <br/>
      <input type='checkbox' value={"female"} onChange={handleGenderChange} checked={gender.includes("female")}/>  
      <label> Female</label>
      <br/>
      <br/>
       </div>
      <Text fontSize='25px' color='black'>Category</Text>

      <div className='checkbox'>
      <input type='checkbox' value={"shirt"} onChange={handleCategoryChange} checked={category.includes("shirt")}/>  
      <label> Shirt</label>
      <br/>
      <input type='checkbox' value={"jeans"} onChange={handleCategoryChange} checked={category.includes("jeans")}/>  
      <label> Jeans</label>
      <br/>
      <input type='checkbox' value={"sarees"} onChange={handleCategoryChange} checked={category.includes("sarees")}/>  
      <label> Sarees</label>
      <br/>
      <input type='checkbox' value={"kurtas"} onChange={handleCategoryChange} checked={category.includes("kurtas")}/>  
      <label> Kurtas</label>
      <br/>
      <input type='checkbox' value={"shoes"} onChange={handleCategoryChange} checked={category.includes("shoes")}/>  
      <label> Shoes</label>
      <br/>
      <input type='checkbox' value={"sandals"} onChange={handleCategoryChange} checked={category.includes("sandals")}/>  
      <label> Sandals</label>
      </div>
      <br/>
      
      <Text fontSize='25px' color='black'>Color</Text>
      <div className='checkbox'>
      <input type='checkbox' value={"Blue"} onChange={handleColorChange} checked={category.includes("Blue")}/>  
      <label> Blue</label>
      <br/>
      <input type='checkbox' value={"White"} onChange={handleColorChange} checked={category.includes("White")}/>  
      <label> White</label>
      <br/>
      <input type='checkbox' value={"Black"} onChange={handleColorChange} checked={category.includes("Black")}/>  
      <label> Black</label>
      <br/>
      <input type='checkbox' value={"Gray"} onChange={handleColorChange} checked={category.includes("Gray")}/>  
      <label> Gray</label>
      <br/>
      <input type='checkbox' value={"Maroon"} onChange={handleColorChange} checked={category.includes("Maroon")}/>  
      <label> Maroon</label>
      <br/>
      <input type='checkbox' value={"Pink"} onChange={handleColorChange} checked={category.includes("Pink")}/>  
      <label> Pink</label>
      <br/>
      <input type='checkbox' value={"Olive"} onChange={handleColorChange} checked={category.includes("Olive")}/>  
      <label> Olive</label>
      <br/>
      <input type='checkbox' value={"Multi"} onChange={handleColorChange} checked={category.includes("Multi")}/>  
      <label> Multi</label>
      <br/>
       </div>

      </div>
    </div>
  )
}
