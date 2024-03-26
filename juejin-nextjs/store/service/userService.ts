import { createSlice, PayloadAction, createAsyncThunk } from "@reduxjs/toolkit";
import { stat } from "fs";

export interface UserModal {
  id: number;
  name: string;
}

export interface UserState {
  users: UserModal[];
}

const initialState: UserState = {
  users: [
    {
      id: 11,
      name: "Tom",
    },
    {
      id: 22,
      name: "John",
    },
    {
      id: 33,
      name: "Hello",
    },
  ],
};

export const userQuery = createAsyncThunk(
  'user/query',
  async () => {
    return new Promise<UserState>((resolve) => {
      resolve({
        users: [
          {
            id: 11,
            name: "To---",
          },
          {
            id: 22,
            name: "John---",
          },
          {
            id: 33,
            name: "Hello----",
          },
        ],
      })
    })
  }
)

const userService = createSlice({
  name: "user",
  initialState: initialState,
  reducers: {
    addUser(state: UserState, action: PayloadAction<UserModal>) {
      state.users.push(action.payload);
    },
  },
  extraReducers: (builder) => {
    builder.addCase(userQuery.fulfilled, (state, action) => {
      console.log(action.payload)
      state.users = action.payload.users || [];
    })
  }
});

export const { addUser } = userService.actions;

export default userService.reducer;
