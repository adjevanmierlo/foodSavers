// prompt die je krijgt na het drukken op delete bij mijn producten

function myFunction() {
  var retVal = confirm("weet u het zeker?");
  if( retVal == true )
  
  {
     document.write ("");
     
    //  window.location.href = "delete-product.php";
     return true;
  } else {
     document.write ("");
    //  window.location.href = "delete-product.php";
     return false;
     
  }
}
// var password = document.getElementById("password")
//   , confirm_password = document.getElementById("confirm_password");

// function validatePassword(){
//   if(password.value != confirm_password.value) {
//     confirm_password.setCustomValidity("paswoord komt niet overeen");
//   } else {
//     confirm_password.setCustomValidity('');
//   }
// }

// password.onchange = validatePassword;
// confirm_password.onkeyup = validatePassword;




// $(function(){
//    $('.trash').on('click',function(){
//        var del_id= $(this).attr('id');
//        var $ele = $(this).parent().parent().parent().parent();
//        $.ajax({
//            type:'POST',
//            url:'delete.php',
//            data:{'del_id':del_id},
//            success: function(data){
//                if(data=="YES"){
//                    $ele.fadeOut().remove();
//                    }else{
//                        alert("can't delete the row")
//                    }
//                }
//            })
//        })
// });