import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

// Define the async thunk

const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (url: string) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      
      return data;
    } catch (error) {
      console.error(error);
    }
  }
); 

const fetchCompaniesImgs = createAsyncThunk(
  'companies/fetchCompaniesImgs',
  async () => {
    try {
      const response = await fetch('http://74.242.168.235/api/Client/GetClients');
      const data = await response.json();
      
      return data.companies.map((p: any) => p.combinedImage);
    } catch (error) {
      console.error(error);
    }
  }
);

const fetchTypesOfActivities = createAsyncThunk(
  'companies/fetchTypesOfActivities',
  async () => {
  try {
    const response = await fetch(
      "http://74.242.168.235/api/TypeOfActivity/GetAll"
    );
    const data = await response.json();
    return data;
  } catch (error: any) {
    console.error(error);
  }
})


// Define the slice
const CompaniesSlice = createSlice({
  name: 'companies',
  initialState: { 
    selectedItems: [],
    searchText: '',
    companies: [],
    companiesToShow: [],
    filteredCompanies: [],
    typeOfActivities: [],
    currentPage: 1,
    pageSize: 2,
    isOpen: false,
    totalCompaniesCount: 1,
    showPages: true,
    url: 'http://74.242.168.235/api/Company?page=1&pageSize=3',
    imgs: []
  },
  reducers: {
    setCompaniesToShow: (state, action) => {
      state.companiesToShow = action.payload;
    },
    setCompanies: (state, action) => {
      state.companies = action.payload;
    },
    setFilteredCompanies: (state, action) => {
      state.filteredCompanies = action.payload;
    },
    setSelectedItems: (state, action) => {
      state.selectedItems = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload
    },
    setUrl: (state, action) => {
      state.url = action.payload;
    },
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
    setTotalCompaniesCount: (state,  action) => {
      state.totalCompaniesCount = action.payload
    },
    setShowPages: (state, action) => {
      state.showPages = action.payload;
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
    setCompaniesImgs: (state, action) => {
      state.imgs = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
    .addCase(fetchCompanies.fulfilled, (state, action) => {
      state.companies = action.payload;
    })
    .addCase(fetchTypesOfActivities.fulfilled, (state, action) => {
      state.typeOfActivities = action.payload;
    })
    .addCase(fetchCompaniesImgs.fulfilled, (state, action) => {
      state.companies = action.payload;
    })
  }
});


export const selectFilteredCompanies = (state: any) => state.companies.filteredCompanies;
export const selectCompanies = (state: any) => state.companies.companies;
export const selectSelectedItems = (state: any) => state.companies.selectedItems;
export const selectTypesOfActivities = (state: any) => state.companies.typeOfActivities;
export const selectCurrentPage = (state: any) => state.companies.currentPage; 
export const selectUrl = (state: any) => state.companies.url; 
export const selectIsOpen = (state: any) => state.companies.isOpen; 
export const selectTotalCompaniesCount = (state: any) => state.companies.totalCompaniesCount; 
export const selectShowPages = (state: any) => state.companies.showPages;
export const selectPageSize = (state: any) => state.companies.pageSize;
export const selectSearchText = (state: any) => state.companies.searchText;
export const selectCompaniesImgs = (state: any) => state.companies.imgs;
export const selectCompaniesToShow = (state: any) => state.companies.companiesToShow;

// Export the async thunk and the reducer
export { fetchCompanies, fetchTypesOfActivities, fetchCompaniesImgs, CompaniesSlice };

export const {setFilteredCompanies, setCompaniesToShow, setCompanies, setSelectedItems, setCurrentPage, setUrl, setIsOpen, setTotalCompaniesCount, setShowPages, setSearchText, setCompaniesImgs} = CompaniesSlice.actions;

export default CompaniesSlice.reducer;