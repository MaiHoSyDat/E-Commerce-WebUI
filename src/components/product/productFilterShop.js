import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllShops, getFiveShopsPage} from "../../service/shopService";
import {setFilterCheckedShops, setFilterUnCheckedShops} from "../../service/inputService";
import {getAllCategories, getTenCategoriesPage} from "../../service/categoryService";

const ProductFilterShop = () => {
    const dispatch = useDispatch();
    const allShops = useSelector(state => {
        return state.shop.allShops;
    })
    const fiveShopsPage = useSelector(state => {
        return state.shop.fiveShopsPage;
    })
    let [count, setCount] = useState(0);
    useEffect(() => {
        const fetchData = async () => {
            await dispatch(getAllShops());
            await dispatch(getFiveShopsPage(count));
        };
        fetchData();
    },[count]);
    const handleInputChangeShop = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) dispatch(setFilterCheckedShops(value))
        else dispatch((setFilterUnCheckedShops(value)))
    }
    const previousPage = () => {
        if (count > 0) {
            setCount(count - 5);
        }
    }
    const nextPage = () => {
        if ((count + 5) < allShops.length) {
            setCount(count + 5);
        }
    }
    return (
       <>
           <div className="mb-8">
               <h5 className="mb-3">Stores</h5>
               {
                   fiveShopsPage && fiveShopsPage.map(shop => (
                       <div className="form-check mb-2">
                           {/* input */}
                           <input
                               className="form-check-input"
                               type="checkbox"
                               value={shop.id}
                               id={shop.id}
                               defaultChecked=""
                               onChange={handleInputChangeShop}
                           />
                           <label className="form-check-label" htmlFor="eGrocery">
                               {shop.name}
                           </label>
                       </div>
                   ))
               }
               <div style={{ display: "flex" }}>
                   <button type="button" className="page-link"  style={{ background: "#33FFCC", borderRadius: 5, color: "black" }} onClick={previousPage}>
                       Previous
                   </button>
                   &nbsp;
                   <a className="page-link">&lt;---&gt;</a>
                   &nbsp;
                   <button type="button" className="page-link"  style={{ background: "#33FFCC", borderRadius: 5, color: "black" }} onClick={nextPage}>
                       Next
                   </button>
               </div>
           </div>

       </>
    );
};

export default ProductFilterShop;