export const getAllProduct = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const data = await response.json();
  return data;
};

export const getOneProduct = async (id) => {
  const url = `https://fakestoreapi.com/products/${id}`;
  try {
    const request = await fetch(url);
    const data = await request.json();
    console.log("DATA", data);
    return data;
  } catch (error) {
    return error;
  }
};
