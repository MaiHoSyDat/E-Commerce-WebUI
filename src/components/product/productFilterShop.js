import React from 'react';

const ProductFilterShop = () => {
    return (
       <>
           <div className="mb-8">
               <h5 className="mb-3">Stores</h5>
               <div className="my-4">
                   {/* input */}
                   <input
                       type="search"
                       className="form-control"
                       placeholder="Search by store"
                   />
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="eGrocery"
                       defaultChecked=""
                   />
                   <label className="form-check-label" htmlFor="eGrocery">
                       E-Grocery
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="DealShare"
                   />
                   <label className="form-check-label" htmlFor="DealShare">
                       DealShare
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="Dmart"
                   />
                   <label className="form-check-label" htmlFor="Dmart">
                       DMart
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="Blinkit"
                   />
                   <label className="form-check-label" htmlFor="Blinkit">
                       Blinkit
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="BigBasket"
                   />
                   <label className="form-check-label" htmlFor="BigBasket">
                       BigBasket
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="StoreFront"
                   />
                   <label className="form-check-label" htmlFor="StoreFront">
                       StoreFront
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="Spencers"
                   />
                   <label className="form-check-label" htmlFor="Spencers">
                       Spencers
                   </label>
               </div>
               {/* form check */}
               <div className="form-check mb-2">
                   {/* input */}
                   <input
                       className="form-check-input"
                       type="checkbox"
                       defaultValue=""
                       id="onlineGrocery"
                   />
                   <label className="form-check-label" htmlFor="onlineGrocery">
                       Online Grocery
                   </label>
               </div>
           </div>

       </>
    );
};

export default ProductFilterShop;