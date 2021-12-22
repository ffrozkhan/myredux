export const productReducer = (
  state = { product: [], cart: [], selectedProduct: [] },
  action
) => {
  if (action.type === "Add-Product") {
    return { ...state, product: [...action.data, ...state.product] };
  }
  if (action.type === "Selected-Product") {
    return { ...state, selectedProduct: [action.data] };
  }
  if (action.type === "Add-Cart") {
    return {
      ...state,
      cart: [{ ...action.data, key: state.cart.length }, ...state.cart],
    };
  }
  if (action.type === "Remove-Product") {
    const filtered = state.cart.filter((item) => item.key !== action.data.key);
    return { ...state, cart: filtered };
  }
  return state;
};
