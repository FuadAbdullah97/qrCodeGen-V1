let  qrImaghe =  document.getElementById("qr-img");
let  qrLink  = document.getElementById("qr-link");
let qrbox =  document.getElementById("qr-section")



function generateQR (){
   if (qrLink.value.length > 0){
    qrImaghe.src = " https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrLink.value;
    qrbox.classList.add('show-img')
   } else {
    alert("Please enter avalid link");
   }
   
   
   
}