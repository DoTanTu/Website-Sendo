import Swal from 'sweetalert2';
const messageAlertSuccess = () => {
    Swal.fire({
        position: "top-center",
        icon: "success",
        fontSize: "12px",
        padding: "8px",
        width: "420px",
        title: "Đã thêm vào giỏ hàng",
        showConfirmButton: false,
        timer: 2500
      });   
}
const messageAlertError = () => {
  Swal.fire({
      position: "top-center",
      icon: "error",
      fontSize: "12px",
      padding: "8px",
      width: "420px",
      title: "Thêm thất bại",
      showConfirmButton: false,
      timer: 2500
    });   
}
const messageAlertWarning = () => {
  Swal.fire({
      position: "top-center",
      icon: "warning",
      fontSize: "12px",
      padding: "8px",
      width: "420px",
      title: "Chọn kích thước và số lượng",
      showConfirmButton: false,
      timer: 2500
    });   
}
export {messageAlertSuccess , messageAlertError, messageAlertWarning }