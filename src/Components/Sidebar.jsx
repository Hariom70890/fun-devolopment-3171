import { Checkbox, Text } from "@chakra-ui/react";
import React, { useContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ContextProvider } from "../context/ContextProvider";
import {
   setLocalstorageData,
   setLocalstorageDataCategory,
   setLocalstorageDataGender,
} from "../Api/LocalStorage";
import "../Css/sidebar.css";
// import { BsPlusLg } from 'react-icons/bs';
import filterIcon from "../images/filter-icon.png";
import tasklist from "../images/task-list.png";

export const Sidebar = () => {
   // const {headingGender,headingCategory} =useContext(ContextProvider)
   const [params, setParams] = useSearchParams();
   const initialCategory = params.getAll("category");
   const initialGender = params.getAll("gender");
   const initialColor = params.getAll("color");
   const [gender, setGender] = useState(initialGender || []);
   const [category, setCategory] = useState(initialCategory || []);
   const [color, setColor] = useState(initialColor || []);

   useEffect(() => {
      let params = {
         gender,
         category,
         color,
      };
      setParams(params);
   }, [gender, category, color]);

   const handleGenderChange = (e) => {
      const { value } = e.target;
      //  console.log(value)
      let newGenderArr = [...gender];
      if (newGenderArr.includes(value)) {
         newGenderArr = newGenderArr.filter((ele) => ele !== value);
      } else {
         newGenderArr.push(value);
      }
      setGender(newGenderArr);
   };
   // console.log(gender)

   const handleCategoryChange = (e) => {
      const { value } = e.target;
      let newCategoryArr = [...category];
      if (newCategoryArr.includes(value)) {
         newCategoryArr = newCategoryArr.filter((ele) => ele !== value);
      } else {
         newCategoryArr.push(value);
      }
      setCategory(newCategoryArr);
   };

   const handleColorChange = (e) => {
      const { value } = e.target;
      let newClorArray = [...color];
      if (newClorArray.includes(value)) {
         newClorArray = newClorArray.filter((ele) => ele !== value);
      } else {
         newClorArray.push(value);
      }
      setColor(newClorArray);
   };

   const headingCat = category[category.length - 1];
   const headingGen = gender[gender.length - 1];

   setLocalstorageDataCategory("headingCat", headingCat);
   setLocalstorageData("headingGen", headingGen);

   return (
      <div className="sidebar-container">
         <div className="filter-div" id="refined">
            <img src={filterIcon} />
            <Text className="filter-div" fontSize="30px">
               {" "}
               Refined By
            </Text>{" "}
            {/* <FcFilledFilter />  */}
         </div>
         <div className="category-gender">
            <Text fontSize="25px"> Gender</Text>

            <div className="checkbox">
               <Checkbox
                  value={"male"}
                  onChange={handleGenderChange}
                  checked={gender.includes("male")}
               >
                  Male
               </Checkbox>
               <br />
               <Checkbox
                  value={"female"}
                  onChange={handleGenderChange}
                  checked={gender.includes("female")}
               >
                  Female
               </Checkbox>
               <br />
               <br />
            </div>
            <Text fontSize="25px">Category</Text>

            <div className="checkbox">
               <Checkbox
                  value={"shirt"}
                  onChange={handleCategoryChange}
                  checked={category.includes("shirt")}
               >
                  Shirt
               </Checkbox>
               <br />
               <Checkbox
                  value={"jeans"}
                  onChange={handleCategoryChange}
                  checked={category.includes("jeans")}
               >
                  Jeans
               </Checkbox>
               <br />
               <Checkbox
                  value={"sarees"}
                  onChange={handleCategoryChange}
                  checked={category.includes("sarees")}
               >
                  Sarees
               </Checkbox>
               <br />
               <Checkbox
                  value={"kurtas"}
                  onChange={handleCategoryChange}
                  checked={category.includes("kurtas")}
               >
                  Kurtas
               </Checkbox>
               <br />
               <Checkbox
                  value={"shoes"}
                  onChange={handleCategoryChange}
                  checked={category.includes("shoes")}
               >
                  Shoes
               </Checkbox>
               <br />
               <Checkbox
                  value={"sandals"}
                  onChange={handleCategoryChange}
                  checked={category.includes("sandals")}
               >
                  Sandals
               </Checkbox>
            </div>
            <br />

            <Text fontSize="25px">Color</Text>
            <div className="checkbox">
               <Checkbox
                  value={"Blue"}
                  onChange={handleColorChange}
                  checked={category.includes("Blue")}
               >
                  Blue
               </Checkbox>
               <br />
               <Checkbox
                  value={"White"}
                  onChange={handleColorChange}
                  checked={category.includes("White")}
               >
                  White
               </Checkbox>
               <br />
               <Checkbox
                  value={"Black"}
                  onChange={handleColorChange}
                  checked={category.includes("Black")}
               >
                  Black
               </Checkbox>
               <br />
               {/* <Checkbox  value={"Gray"} onChange={handleColorChange} checked={category.includes("Gray")} >Gray</Checkbox>
      <br/> */}
               <Checkbox
                  value={"Maroon"}
                  onChange={handleColorChange}
                  checked={category.includes("Maroon")}
               >
                  Maroon
               </Checkbox>
               <br />
               <Checkbox
                  value={"Pink"}
                  onChange={handleColorChange}
                  checked={category.includes("Pink")}
               >
                  Pink
               </Checkbox>
               <br />
               <Checkbox
                  value={"Olive"}
                  onChange={handleColorChange}
                  checked={category.includes("Olive")}
               >
                  Olive
               </Checkbox>
               <br />
               <Checkbox
                  value={"Multi"}
                  onChange={handleColorChange}
                  checked={category.includes("Multi")}
               >
                  Multi
               </Checkbox>
               <br />
            </div>
         </div>
      </div>
   );
};
