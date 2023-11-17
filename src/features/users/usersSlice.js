import axios from "axios";

const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");
 export const fetchData = createAsyncThunk('users/fetchData', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users");
    return response.data;
})

const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
    isLoading: false,
    error: null,
  },
    extraReducers: (builder) => {
        builder.addCase(fetchData.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(fetchData.fulfilled, (state, action) => {
            state.users = action.payload;
            state.isLoading = false;
            state.error = null;

        })
        builder.addCase(fetchData.rejected, (state, action) => {
            state.users = [];
            state.isLoading = false;
            state.error = action.error.message;
        })
        
  },
});
export default usersSlice.reducer;
