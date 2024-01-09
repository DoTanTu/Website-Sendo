const transformData = (input) => {
    const output = {};
  
    input.forEach((item) => {
      const productId = item.product_id;
  
      if (!output[productId]) {
        output[productId] = {
          product_id: productId,
          product_name: item.product_name,
          description: item.description,
          gender: item.gender === 1 ? 'Male' : 'Female',
          category_name: item.category_name,
          seller_name: item.seller_name,
          address_company: item.address_company,
          image: item.image,
          variants: [],
        };
      }
  
      output[productId].variants.push({
        size: item.size_name,
        color: item.color_name,
        price: item.price,
        stock_quantity: item.stock_quantity,
      });
    });
  
    return Object.values(output);
  };
  
module.exports = { transformData };