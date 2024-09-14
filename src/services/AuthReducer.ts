import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';

// Define the async thunk

const isTokenExpired = createAsyncThunk(
  'auth/isTokenExpired',
  async (token: string) => {
    try {
      const payload = JSON.parse(atob(token.split(".")[1]));
      const tokenExpirationTime = payload.exp * 1000;
      const currentTime = new Date().getTime();
      return tokenExpirationTime < currentTime;
    } catch (error) {
      console.error("Ошибка при проверке срока действия токена:", error);
      return true;
    }
  }
); 




const fetchData = createAsyncThunk(
    'auth/fetchData',
    async (user: any) => {  
    const loginData = {
      email: user?.email,
      password: user?.password,
      rememberMe: true
    };

    try {
      const response = await fetch(
        "https://localhost:7164/Authentication/Login",
        { 
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        }
      );
      if (!response.ok) {
        const errorText = await response.text();
        console.error("Error response:", errorText);
        // f();
        return;
        
      }

      const data = await response.json();

      return data;
    } catch (err: any) {
      console.error(err);
    }
  }
)

// Define the slice

const AuthSlice = createSlice({
  name: 'auth',
  initialState: { 
    userData: null,
    user: null,
    isConfirmed: true,
    token: null,
    show: false,
    tryLogin: false
  },
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload;
    },
    setUserData: (state, action) => {
        state.userData = action.payload;
    },
    setUser: (state, action) => {
        state.user = action.payload;
    },
    setIsConfirmed: (state, action) => {
        state.isConfirmed = action.payload;
    },
    setTryLogin: (state, action) => {
      state.tryLogin = action.payload;
    },
    setShow: (state, action) => {
      state.show = action.payload;
    },
    safeSetUserData: (state, action) => {
      if (action.payload !== undefined) {
        state.userData = action.payload
      }
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchData.fulfilled, (state, action) => {
        state.userData = action.payload?.user;
        state.token = action.payload?.token;
        state.isConfirmed = false;
      })
    .addCase(fetchData.rejected, (state, action) => {
        state.isConfirmed = false;
      })
    //   .addCase(fetchData.rejected, (state, action) => {
    //     state.isConfirmed = true;
    //   });
}
});

export const selectToken = (state: any) => state.auth.token;
export const selectUserData = (state: any) => state.auth.userData;
export const selectUser = (state: any) => state.auth.user;
export const selectIsConfirmed = (state: any) => state.auth.isConfirmed;
export const selectShow = (state: any) => state.auth.show;
export const selectTryLogin = (state: any) => state.auth.tryLogin;

// Export the async thunk and the reducer
 
export { isTokenExpired, fetchData };

export const {setToken, setUserData, setIsConfirmed, setUser, setTryLogin, setShow, safeSetUserData} = AuthSlice.actions;

export default AuthSlice.reducer;