import React from "react";
import '../../style/layout/category/category.css'
import '../../style/layout/category/category_responsive.css'
function Category(props){
    const categores = ['ujas','mujas','nor','hinavurs', 'testavorel','hetaqrqir',
        'yaxq','taza patmutun', 'liq@ pox', 'nor astx', 'hogna ara','frayer tip','dzech','likoban','banalikon']
     return(
         <div className="main_div">
                    <ul className="a">
                        {
                            categores.map((el,i)=> {
                            return(
                                <li key={i} className="category_list_item">
                                  <a href='#' className='a-non'>{el}</a>
                                </li>
                            )
                        })
                        }
                    </ul>
         </div>
     )
}

export default Category;
