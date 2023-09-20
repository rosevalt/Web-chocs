function validate(){
    var name = document.getElementById("name").value;
    var phone = document.getElementById("phone").value;
    var qty = document.getElementById("qty").value;
    var product = document.getElementById("product").value;
    var address = document.getElementById("address").value;

    if(name == ""|| phone == "" || qty=="" || address ==""){
        alert('please full the form')
    }
    
    if(name.length < 3){
      alert('name minimal 3 characters')
      return false;
    }
    
    if(isNaN(phone) || phone.length>14 ||( phone[0]!='0' && phone[1]!='8')){
      alert('please enter valid phone number')
      return false;
    }
    if(qty <1 || qty == 0){
        alert('Please enter your product quantity ')
        return false;
    }

    if(product == 0){
       alert('please choose your product')
        return false;
    }

    if(address.length <10){
        alert('Please fill your complete address')
        return false;
    }
   
    alert("Form Submitted Successfully!");
    return true;
  }