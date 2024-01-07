const getIdColor = (color) => {
    switch (color) {
      case "Đỏ":
        return 1;
      case "Đen":
        return 2;
      case "Xanh":
        return 3;
      case "Vàng":
        return 4;
      case "Trắng":
        return 5;
      default:
        return -1;
    }
  };

  const getIdSize = (size) => {
    switch (size) {
      case "M":
        return 1;
      case "L":
        return 2;
      case "XL":
        return 3;
      case "2XL":
        return 4;
      default:
        return -1;
    }
  };

  export {getIdColor, getIdSize}