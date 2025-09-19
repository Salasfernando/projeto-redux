import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  users: [],
  loading: false,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    createUser: (state, action) => {

      return {
        ...state,
        user: {
          name: action.payload.name,
          email: action.payload.email,
          addresses: null,
        }
      };
    },

    logoutUser: (state) => {
      return {
        ...state,
        user: null,
      };
    },

    addAddress: (state, action) => {

      if (action.payload.location === '' || action.payload.number === '') {
        alert("Preencha todos os campos!")
        return { ...state };
      }

      if (state.user === null) {
        alert("Você precisa estar logado para adicionar um endereço!")
        return { ...state };
      }
      alert("Dados atualizados")

      return {
        ...state,
        user: {
          ...state.user,
          address: {
            location: action.payload.location,
            number: action.payload.number,
          }
        }
      }
    },

    deleteAddress: (state) => {
      if (state.user === null) {
        alert("Nenhum usuário logado!");
        return { ...state };
      }
      if (!state.user.address) {
        alert("Nenhum endereço para deletar!");
      }
      return {
        ...state,
        user: {
          ...state.user,
          address: null,
        }
      };
    },

    fetchUsers: (state) => {
      state.loading = true;
    },

    fetchUsersSuccess: (state, action) => {
      state.users = action.payload;
      state.loading = false;
    },
    fetchUsersFailure: (state, action) => {
      console.error("Erro ao buscar usuários:", action.payload);
      state.loading = false;

    }
  }
})

export const { createUser, logoutUser, addAddress, deleteAddress, fetchUsers, fetchUsersSuccess, fetchUsersFailure } = userSlice.actions;
export default userSlice.reducer;