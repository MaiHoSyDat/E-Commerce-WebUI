import {createSlice} from "@reduxjs/toolkit";
import {
    getAllCustomerBuyProductFromShop,
    getAllCustomerMapMessage,
    getCustomerByAccountLogin, loadCustomerMessageDTO, setCustomerMessageDTO
} from "../../service/customerService";
const initialState = {
    customerLogin: {},
    customersBuyProductOfShop: [],
    customerMessageDTO: [],
    customerMessage: {customer:{account:{id:0}}},
    loadCustomerMessageDTO : 0
}
const customerSlice = createSlice({
    name: "customer",
    initialState,
    reducers: {},
    extraReducers: builder => {
        builder.addCase(getCustomerByAccountLogin.fulfilled,(state,action) => {
            state.customerLogin = action.payload;
        })
        builder.addCase(getAllCustomerBuyProductFromShop.fulfilled,(state,action) => {
            state.customersBuyProductOfShop = action.payload;
        })
        builder.addCase(getAllCustomerMapMessage.fulfilled,(state,action) => {
            state.customerMessageDTO = action.payload;
        })
        builder.addCase(setCustomerMessageDTO.fulfilled,(state,action) => {
            state.customerMessage = action.payload;
        })
        builder.addCase(loadCustomerMessageDTO.fulfilled,(state,action) => {
            state.loadCustomerMessageDTO += action.payload;

        })

    }
})
export default customerSlice.reducer;