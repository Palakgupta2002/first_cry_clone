
function display1(){
    let arr= JSON.parse(localStorage.getItem("cart")) || [];
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
    arrlength.innerText= "("+arr.length+")";
    shopping.innerText= "Shopping Cart " ;
    shopping.style.fontWeight="550";
    div2.append(shopping,arrlength);
    div2.setAttribute("id","shoppingcartdiv2")
    div1.append(div2,div3);
    div1.setAttribute("id","mainshoppingcartnav");
    var maindiv=document.createElement("div");
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
        var detaill=document.createElement("details");
        ul.setAttribute("id","ul");
        var li1=document.createElement("li");
        var li2=document.createElement("li");
        var li3=document.createElement("li");
        var li4=document.createElement("li");
        li1.innerText="Get 5% Instant Discount Upto Rs. 500 on SBI Credit Cards (Minimum Order Value: Rs. 2000) T&C";
        li2.innerText="Upto Rs. 500 Cashback on Paytm Wallet and Postpaid Transactions (Minimum Order Value: Rs. 1000) T&C";
        li3.innerText="Pay using Simpl and get 5% cashback upto Rs.250 (Minimum Order Value: Rs. 1200) T&C";
        li4.innerText="Get 2X cashback upto Rs. 500 on CRED Pay UPI(Minimum Order Value: Rs.1000) T&C";
        ul.append(li1,li2,li3,li4);
        detaill.append(ul);
        avaliableoffer.append(availableimage,availabletext);
        mainavailable.append(avaliableoffer,ul);
        document.getElementById("shoppingcart1").append(div1,mainavailable);



        
    arr.map((ele)=>{
        




    })
    
    
}
display1()