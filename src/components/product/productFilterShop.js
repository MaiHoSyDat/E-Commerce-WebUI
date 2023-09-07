import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAllShops} from "../../service/shopService";
import {setFilterCheckedShops, setFilterUnCheckedShops} from "../../service/inputService";

const ProductFilterShop = () => {
    const dispatch = useDispatch();
    const allShops = useSelector(state => {
        return state.shop.allShops;
    })
    useEffect(() => {
        dispatch(getAllShops())
    },[]);
    const handleInputChangeShop = (event) => {
        const value = event.target.value;
        const checked = event.target.checked;
        if (checked) dispatch(setFilterCheckedShops(value))
        else dispatch((setFilterUnCheckedShops(value)))
    }
    return (
       <>
           <div className="mb-8">
               <h5 className="mb-3">Stores</h5>
               {
                   allShops && allShops.map(shop => (
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
           </div>

       </>
    );
};

export default ProductFilterShop;