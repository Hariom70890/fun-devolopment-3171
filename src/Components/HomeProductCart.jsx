import { useState } from "react"
import styled from "styled-components"


export const HomeProductCart = ({image,title,price})=>{
    const [active,setActive] = useState(false)
    
    return(
        <DIV>
             <div className="proDiv" onMouseEnter={()=>setActive(true)} onMouseLeave={()=>setActive(false)}   >
            <div className="imgContainer">
            <img className = { active ? "active" : false }  src={image} alt="" />
            <h2>SHOP NOW</h2>
            </div>
        
        <div>
        <h3 className="proName">{title}</h3>
        <div className="Pcolors">
            <div></div>
            <div></div>
            <div></div>
        </div>

        </div>
        <h3 className="orangePrice">${price}</h3>
    </div>

        </DIV>
       

    )
}
const DIV = styled.div`
    .orangePrice{
    color: #ff8800;
    margin: 10px;
    font-weight: 600;
    /* font-size: larger; */
}
.proName{
    margin: 10px;
    font-weight: 600;
}
.proDiv{
    width: 100%;
}
.imgContainer > img {
    border-radius: 40px;
    width: 100%;
    z-index: 1;
}
.proDiv > div{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}
.Pcolors{
    display: flex;
    gap: 5px;
    margin: 10px;
}
.Pcolors > div{
    height: 20px;
    width: 20px;
    border-radius: 50%;
}
.Pcolors > div:hover{
 border: 1px black solid;
}
.Pcolors :nth-child(1){
    background-color: grey ;
}
.Pcolors :nth-child(2){
    background-color: #c3991c ;
}
.Pcolors :nth-child(3){
    background-color: #950000 ;
}
.imgContainer{
    background-color: #000000;
    border-radius: 20px;
}
.imgContainer > h2{
    padding: 10px;
    border: 1px solid white;
    font-weight: 600;
    width: fit-content;
    margin: auto;
    color: white;
    background-color: transparent;
    margin-top: -110px;
    margin-bottom: 50px;
    border-radius: 30px;
    height: 60px;
}
.active{
    /* visibility: hidden; */
    opacity:0.5;
    border: 1px solid black;
} 
@media only screen and (max-width: 1024px) {
grid-template-columns: repeat(2,45%);
}
.proName, .orangePrice{
    font-size: small;
}
.Pcolors > div{
    height: 10px;
    width: 10px;

}
.Pcolors{
    margin: 0px 10px;
}
.imgContainer > img {
    border-radius: 20px;
    /* width: 100%; */
}
.proDiv > div{
    flex-direction: column;
}

`