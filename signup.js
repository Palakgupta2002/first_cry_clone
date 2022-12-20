var arr=[];
function signup(){
    var name=document.getElementById("name").value;
    var mobile=document.getElementById("mobile").value;
    var email=document.getElementById("email").value;
    var password=document.getElementById("password").value;
   
    
    var userdata= {
        name: name,
        mobile:mobile,
        email:email,
        password:password,
    }
    if(mobile=="" || email=="" ||  password==""|| name=="" ){ 
        alert(" please enter all required details")
    
    }
    else{
        
        arr.push(userdata);
        alert("sign UP Succesfully");
        location.reload();

       
    }
        
    localStorage.setItem("userdetail",JSON.stringify( arr));
}
