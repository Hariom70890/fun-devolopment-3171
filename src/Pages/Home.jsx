// import "../Styles/home.css"
// import textBanner from "../images/textBanner.png"
// import Tshirt from "../images/Tshirt.png"

import styled from 'styled-components'
import {StarIcon} from "@chakra-ui/icons"
import {HomeProduct} from "../Components/HomeProducts"
// import {Icon} from "@chakra-ui/react"
// import buyicon from "../images/buyicon.svg"
// import "../Styles/home.css"
export const Home = ( )=>{
    return (
        <DIV >
            
            <div className="topImages">
                {/* <img src={Tshirt} alt="" /> */}
                <div className="nextImages">
                    {/* <img src={textBanner} alt="" /> */}
                <div className="capsImage">
                    <img src="https://cdn.pixabay.com/photo/2022/06/22/16/00/cap-7278216_960_720.jpg" alt="" />
                    <img src="https://cdn.pixabay.com/photo/2015/07/02/20/13/hats-829509_960_720.jpg" alt="" />
                </div>

                </div>
               
            </div>
            <p className="brandDesc">
                QUICK BUY makes clothes to elevate everyday life through lighthearted escapism. while styles very by season, <div className="allCollection"> <StarIcon/> all collection</div> are guided by the ineffable sense of freedom that comes with travel.
            </p>
            <div className="shopSection">
                <h1>SHOP BY ESSENTIALS</h1>
                <HomeProduct/>
            </div>
        </DIV>
    )
}


const DIV = styled.div`
/* margin-top: 60px; */
padding-top: 80px;
margin: 0 20px;


.topImages{
    display: flex;
    width: 95%;
    /* height: 350px; */
    margin: auto;
    gap: 10px;
    /* cursor: url("https://img.icons8.com/?size=512&id=WHW99HGMP4WJ&format=png"), auto; */
}
.topImages > :nth-child(1){
    border-radius: 10px;
    /* width: 40%; */
    /* overflow-x: hidden; */
    height: 600px;
    /* overflow-y: hidden; */
    /* text-align: end; */
    /* cursor: url("../images/buyicon.svg"), auto; */
    cursor: pointer;

}

.nextImages > img{
    width: 100%;
    height: 400px;
    border-radius: 10px;
}
.capsImage{
    display: flex;
    /* width: 100%; */
    gap: 10px;
    margin: 10px 0 0 0;
    height: 190px;
    /* gap: 20px; */
}
.capsImage > img{
    /* padding: 5px; */
    border-radius: 10px;
    width: 50%;
    /* margin: auto; */
    /* height: 50%; */
}
.brandDesc{
    font-size: 40px;
    width: 95%;
    /* margin-top: 50px; */
    /* word-wrap: inherit; */
    margin: auto;
    margin-top: 30px;
    font-weight: 600;
    text-align: justify;

    /* line-height: 60px; */
    /* float: left; */
    /* text-align: center; */
    /* text-align: justify; */
}
.allCollection{
    border: black 1px solid;
    float: left;
    height: 50px;
    font-size: 40px;
    line-height: 30px;
    margin: 5px;
    padding: 5px 10px;
    /* position: relative; */
    width: fit-content;
    border-radius: 50px;
    align-items: center;
}
.shopSection{
    margin: 30px;

}
.shopSection > h1{
    font-weight: 800;
}


@media only screen and (max-width: 1024px) {
    .topImages{
        flex-direction: column;
    }
    .nextImages > img{
    height: 200px;

    }
    .topImages{
        height: 300px;
    }
    .capsImage > img{
    /* padding: 5px; */
    border-radius: 10px;
    width: 49%;
    
    /* margin: auto; */
    /* height: 50%; */
    }
    .brandDesc{
    font-size: 20px;
    margin-top: 400px;
    text-align: justify;
    }
    .allCollection{
        font-size: large;
    }
   
}


`