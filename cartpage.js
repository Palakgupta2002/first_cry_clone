let arr = JSON.parse(localStorage.getItem("cart"));
function display1(){
    var div1=document.createElement("div");
    var div2=document.createElement("div");
    var div3=document.createElement("div");
    var shopping=document.createElement("p");
    var arrlength=document.createElement("p");
    arrlength.style.fontSize="15px";
    arrlength.style.marginTop="22.5px";
    var myshorlist=document.createElement("p");
    myshorlist.innerText="My Shortlist";
    myshorlist.style.color="grey";
    div3.append(myshorlist);
    arrlength.innerText= "("+ arr.length+ ")";
    shopping.innerText= "Shopping Cart " ;
    shopping.style.fontWeight="550";
    div2.append(shopping,arrlength);
    div2.setAttribute("id","shoppingcartdiv2")
    div1.append(div2,div3);
    div1.setAttribute("id","mainshoppingcartnav");
    var maindiv=document.createElement("div");
    var logintotal=document.createElement("div");
        var availableimage=document.createElement("img");
        var availabletext=document.createElement("p");
        var avaliableoffer=document.createElement("div");
        var mainavailable=document.createElement("div");
        availableimage.src="file:///C:/Users/User/Downloads/pers.webp";
        availableimage.setAttribute("id","availableimage");
        avaliableoffer.setAttribute("id","avaliableoffer");
        availabletext.innerText="Available offers:";
        availabletext.style.color="black";
        availabletext.style.fontSize="15px";
        var ul=document.createElement("ul");
        var avlbtndiv=document.createElement("div");
        avlbtndiv.style.display="flex";
        var avlbtnp=document.createElement("img");
         avlbtnp.src="file:///C:/Users/User/Downloads/arrow1.webp";
        avlbtnp.setAttribute("id","avlbtnp");
        var avlbutton= document.createElement("button");
        avlbutton.innerText="view less"
        let select = true;
        console.log(select)
      
        console.log(select)
        avlbutton.setAttribute("id","avlbutton");
        avlbtndiv.append( avlbutton,avlbtnp);
        ul.setAttribute("id","ul");
        var li1=document.createElement("li");
        li1.innerText="Get 5% Instant Discount Upto Rs. 500 on SBI Credit Cards (Minimum Order Value: Rs. 2000) T&C" ;
        var li2=document.createElement("li");
        li2.innerText="Upto Rs. 500 Cashback on Paytm Wallet and Postpaid Transactions (Minimum Order Value: Rs. 1000) T&C ";
        var li3=document.createElement("li");
        li3.innerText="Pay using Simpl and get 5% cashback upto Rs.250 (Minimum Order Value: Rs. 1200) T&C";
        var li4=document.createElement("li");
        li4.innerText="Get 2X cashback upto Rs. 500 on CRED Pay UPI(Minimum Order Value: Rs.1000) T&C";

        ul.append(li1,li2,li3,li4, avlbtndiv);
        avaliableoffer.append(availableimage,availabletext);
        var main2avilable= document.createElement("div");
        mainavailable.append(avaliableoffer,ul);
        main2avilable.append( mainavailable);
        document.getElementById("shoppingcart1").append(div1,main2avilable,logintotal);
        mainavailable.setAttribute("id","mainavailable");
        main2avilable.setAttribute("id","main2avilable");
      
        mainavailable.style.marginRight="20px"
        arr&&arr.map((ele,index)=>{
        var maincartdiv=document.createElement("div");
        var maindivmap=document.createElement("div");
        var maindivmap1=document.createElement("div");
        var image=document.createElement("img");
        var Rate=document.createElement("p");
        var gate=document.createElement("p");
        var maindiv1=document.createElement("div");
        var maindiv2=document.createElement("div");
        gate.innerText=" Get it by Friday, Jan 20";
        var dispatch=document.createElement("p");
        dispatch.innerText=" Dispatch Within: 24 Hours";
        Rate=ele.Rate;
        image.style.width="120px";
        image.src=ele.image;
        var desc=document.createElement("p");
        desc.innerText=ele. des;
        var month=document.createElement("p");
        month.innerText= "Size: "+ele.month;
        maindiv1.append(image);
        maindiv2.append(desc,month,gate,dispatch);
        maindivmap.append(maindiv1,maindiv2);
        maindiv2.style.paddingLeft="20px";
        maindivmap.style.display="flex";
        maindivmap.setAttribute("id","maindivmap");
        var remove=document.createElement("p");
        var mainremove=document.createElement("div");
        remove.innerText="REMOVE";
        remove.fontWeight="600";
        document.getElementById("shoppingcart2").append( maincartdiv);
        console.log(maindivmap);  
        var Rate1=document.createElement("p");
        Rate1.innerText="₹ " + ele.Rate;
        var delete1=document.createElement("p");
        var deletep=document.createElement("p");
        deletep.innerText="MRP   " +"₹ " ;
        delete1.innerText= ele.delete;
        var Discount1=document.createElement("p");
        Discount1.innerText=ele.discount;
        Discount1.style.color="red";
        delete1.style.textDecorationLine="line-through";
        delete1.style.color="lightblack";
        var image1=document.createElement("img");
        image1.src="file:///C:/Users/User/Downloads/clublogo.webp";
        image1.style.height="20px";
        image1.style.position="relative";
        image1.style.paddingTop="8px";
        var image1p=document.createElement("p");
        image1p.innerText="Club Price";
        var tax=document.createElement("p");
        var discountprice=document.createElement("p");
        discountprice.innerText= + ele.Rate + Math.floor((Math.random() * 10) );
        tax.innerText="MRP Includes all taxes";
        tax.style.color="#757575";
        var quantity=document.createElement("p");
        quantity.innerText="Qty:";
        quantity.style.marginTop="20px";
        var button1=document.createElement("button")
        button1.innerText = "+";
        let count = 1;
        let p = document.createElement("p");
        p.innerText = 1;
        p.style.position="relative";
        p.style.top="5px";
        button1.addEventListener("click",(()=>{
               count++;
               p.innerText = count;
        }))
        var button2=document.createElement("button");
        button2.innerText = "-";
        button2.addEventListener("click",((ele)=>{
              if(count>1){
                     count--;
              }
               
                p.innerText = count;
        }))
        button1.style.height="20px";
        button1.style.position="relative";
        button1.style.top="14.5px";
        button2.style.height="20px";
        button2.style.position="relative";
        button2.style.top="14.5px";
        var deletediv=document.createElement("div");
        deletediv.append(deletep,delete1,Discount1);
        deletediv.style.display="flex";
        deletediv.style.columnGap="10px";
        var clubimage=document.createElement("div");
        clubimage.append(image1, image1p)
        clubimage.style.display="flex";
        clubimage.style.columnGap="10px";
        var qty1=document.createElement("div");
        qty1.append(quantity,button1,p,button2);
        qty1.style.display="flex";
        qty1.style.columnGap="10px";
        var removelikediv=document.createElement("div");
        var imageremove=document.createElement("img");
        imageremove.src="https://iili.io/H0SGJl1.webp";
        imageremove.style.height="25px";
        imageremove.style.position="reletive";
        imageremove.style.marginTop="12px";
        console.log(imageremove);
        var imageremovep=document.createElement("p");
        imageremovep .innerText="Remove";
        var imageremovediv=document.createElement("div");
        var likeimage=document.createElement("p");
       likeimage.style.height="20px";
       likeimage.style.position="relative";
       likeimage.style.top="0px";
       likeimage.style.left="10px";
       likeimage.style.cursor="pointer";
       likeimage.innerText="🤍"
       var likeimagep=document.createElement("p");
       likeimagep.innerText="MOVE TO SHORTLIST";
       likeimagep.style.position="relative";
       likeimagep.style.top="1.6px";
       likeimagep.style.fontWeight="500";
       let heart = false;
       likeimage.addEventListener("click",(()=>{
               if(heart==false){
                     heart = true;
                     likeimage.innerText="❤️";
               }else{
                     heart = false;
                     likeimage.innerText="🤍";
               }
       }))
     
       
        var likeimagediv=document.createElement("div");
        likeimagediv.append(likeimage,likeimagep);
        likeimagediv.style.display="flex";
        likeimagediv.style.columnGap="20px";
        imageremovediv.append(imageremove,imageremovep);
        imageremovediv.style.display="flex";
        imageremovediv.style.columnGap="20px";
        imageremovediv.addEventListener("click",(()=>{
              arr.splice(index,1);
              localStorage.setItem("cart",JSON.stringify(arr));
              window.location.reload();
       }))
        removelikediv.append(imageremovediv,likeimagediv);
        removelikediv.style.display="flex";
        removelikediv.style.columnGap="30px";
        removelikediv.style.position="relative";
        removelikediv.style.paddingTop="10px";
        var maindivmapparent=document.createElement("div");
        maindivmapparent.append(maindivmap, removelikediv);
        maindivmap1.append(Rate1, deletediv,clubimage,discountprice,tax, qty1);
       
 
        maincartdiv.append( maindivmapparent, maindivmap1);
        maindivmap1.setAttribute("id","maindivmap1");
        maincartdiv.style.display="flex";
        maincartdiv.style.borderTop="0.5px solid  rgb(218, 208, 208)";
        maincartdiv.style.marginTop="11px";  
 })
 
    }
display1()
var logintotal1=document.createElement("button");
logintotal1.innerText="login to place order";
logintotal1.addEventListener("click",(()=>{
     location.href="login.html";
   

}));
let amout=0;
var total=arr.filter((ele)=>{
 amout=ele.Rate+amout;
      }
)
var logintotaldiv=document.createElement("div");
var totalamoutdiv=document.createElement("div");
var totalamount=document.createElement("p");
totalamount.innerText=amout;
var logindiv=document.createElement("div");
logintotal1.style.width="400px";
logintotal1.style.marginTop="20px";
logintotal1.style.backgroundColor="#FF7043";
logindiv.append(logintotal1);
logindiv.style.backgroundColor="red";
totalamoutdiv.append(totalamount);
logindiv.append(totalamoutdiv);
logintotaldiv.append(logindiv,totalamoutdiv);
document.getElementById("total").append(logindiv);