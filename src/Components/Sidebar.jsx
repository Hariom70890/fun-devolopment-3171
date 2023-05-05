import { Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useState } from 'react'
// import { FcFilledFilter } from 'react-icons/fc';
import { useSearchParams } from 'react-router-dom';
import { ContextProvider } from '../context/ContextProvider';

export const Sidebar = () => {
  // const {headingGender,headingCategory} =useContext(ContextProvider)
  const [params,setParams] = useSearchParams();
 const  initialCategory = params.getAll("category")
  const initialGender = params.getAll("gender")
  const [gender,setGender] = useState(initialGender || []);
  const [category,setCategory] = useState(initialCategory || []);

 

  useEffect(()=>{
    let params ={
      gender,
      category
    }
    setParams(params)
  },[gender,category])


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
// console.log("category",category)


// const headingCat = category[category.length-1]
// headingCategory(headingCat)

// const headinGen = gender[gender.length-1] 
// headingGender(headinGen)
  return (
    <div>

        {/* <Text fontSize='30px' color='black'>{heading}</Text> */}
        <div className='parent-div'>
        <Text fontSize='50px' color='tomato'>Refined By</Text>  {/* <FcFilledFilter />  */}
        </div>
      <div className='category-gender'>
      <Text fontSize='25px' color='black'>Gender</Text>
      <input type='checkbox' value={"male"} onChange={handleGenderChange} checked={gender.includes("male")} />  
      <label> Male</label>
      <br/>
      <input type='checkbox' value={"female"} onChange={handleGenderChange} checked={gender.includes("female")}/>  
      <label> Female</label>
      <br/>
      <br/>
      <Text fontSize='25px' color='black'>Category</Text>
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
      <br/>

      </div>
    </div>
  )
}
