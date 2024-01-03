import Swal from 'sweetalert2';
const messageAlert = () => {
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
export {messageAlert}