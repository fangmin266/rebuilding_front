function toastCom(position:any, className:any, time:any) {
  return {
      position: position,
      autoClose: time || 1500,
      pauseOnHover: true,
      hideProgressBar: true,
      draggable: true,
      pauseOnFocusLoss: true,
      limit: 1,
      className: className,
      closeButton: false
  };
}

export default toastCom;
