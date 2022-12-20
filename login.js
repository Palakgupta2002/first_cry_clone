var arr1=JSON.parse(localStorage.getItem("userdetail")) || [];
function login(){
   var email=document.getElementById("inputlogin").value;
   var password=document.getElementById("inputlogin1").value;
   arr1.filter((ele)=>{
    if((ele.email==email && ele.mobile==email) || ele.password==password ){
        alert("login succesflly");
        location.href="index.html";
    
    }
    else{
        alert("Please enter correct Details");
    }
   }) 
}