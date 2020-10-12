import React from "react";
import '../../style/layout/menu/menu.css';
import  '../../style/layout/menu/menu_responsive.css';
import Category from "../category/Category";
import Video from "../video/Video"
import logo from '../../img/logo.png';
function Menu(props){

     return(
         <section className="conteyner">
             <header>
                 <div className="border-solid">
                     <div className="div-ul-li">
                         <ul className="ul">
                             <li className="li">
                                 <a href="#" className="a-non">Shop</a>
                             </li>
                             <li className="li">
                                 <a href="#" className="a-non">Contact us</a>
                             </li>
                             <li className="li">
                                 <a href="#" className="a-non">Story</a>
                             </li>
                         </ul>
                     </div>
                     <div className="logo">
                         <img src={logo} />
                     </div>
                     <div className="search">
                         <input type="search" name="search" autoComplete="" required="" placeholder="search"
                                className="input-search"/>
                         <input type="button" value="Search" className="button-search" />
                     </div>
                 </div>
                 <div className="seconde-manue">
                     <ul>
                         <li className="li-2">
                             <a href="#" className="a-non">New Video</a>
                         </li>
                         <li className="li-2">
                             <a href="#" className="a-non">Stars</a>
                         </li>
                         <li className="li-2">
                             <a href="#" className="a-non">Picture</a>
                         </li>
                         <li className="li-2">
                             <a href="#" className="a-non">Popular</a>
                         </li>
                         <li className="li-2">
                             <a href="#" className="a-non">Studio</a>
                         </li>
                         <li className="li-2">
                             <a href="#" className="a-non">Gif</a>
                         </li>
                     </ul>
                 </div>
             </header>
             <section>
                    <Category />
                    <Video />
             </section>
         </section>
     )
}

export default Menu;