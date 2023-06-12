import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  datosProducto: [],
  infoUser: null
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    addCesta:(state, action) => {
        const item = state.datosProducto.find(
            (item) => item._id === action.payload._id
        )

        if (item) {
            item.cantidad += action.payload.cantidad
        } else {
            state.datosProducto.push(action.payload) 
        }
      
    },
    deleteCesta:(state, action) => {
      state.datosProducto = state.datosProducto.filter(
          (item) => item._id !== action.payload
      )
    },
    vaciarCesta:(state) => {
      state.datosProducto = []
    },
    aumentarCantidad: (state, action) => {
      const item = state.datosProducto.find(
        (item) => item._id === action.payload._id
      )
      if (item) {
        item.cantidad++
      }
    },
    disminuirCantidad: (state, action) => {
      const item = state.datosProducto.find(
        (item) => item._id === action.payload._id
      )
      if (item.cantidad === 1) {
        item.cantidad = 1
      } else {
        item.cantidad--
      }
    },
    addUsuario: (state, action) => {
      state.infoUser = action.payload
    },
    deleteUsuario: (state) => {
      state.infoUser = null
    }
  }
})

export const { addCesta, deleteCesta, vaciarCesta, aumentarCantidad, disminuirCantidad, addUsuario, deleteUsuario } = counterSlice.actions
export default counterSlice.reducer