
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
        // var avlbtndiv=document.createElement("div");
        // avlbtndiv.style.display="flex";
        // var avlbtnp=document.createElement("img");
        //  avlbtnp.src="file:///C:/Users/User/Downloads/arrow1.webp";
        // avlbtnp.setAttribute("id","avlbtnp");
        // var avlbutton= document.createElement("button");
        // avlbutton.setAttribute("id","avlbutton");
        // avlbutton.innerText="View More";
        // avlbtndiv.append( avlbutton,avlbtnp);
        ul.setAttribute("id","ul");
        var li1=document.createElement("li");
        li1.innerText="Get 5% Instant Discount Upto Rs. 500 on SBI Credit Cards (Minimum Order Value: Rs. 2000) T&C" ;
        var li2=document.createElement("li");
        li2.innerText="Upto Rs. 500 Cashback on Paytm Wallet and Postpaid Transactions (Minimum Order Value: Rs. 1000) T&C ";
        var li3=document.createElement("li");
        li3.innerText="Pay using Simpl and get 5% cashback upto Rs.250 (Minimum Order Value: Rs. 1200) T&C";
        var li4=document.createElement("li");
        li4.innerText="Get 2X cashback upto Rs. 500 on CRED Pay UPI(Minimum Order Value: Rs.1000) T&C";

        ul.append(li1,li2,li3,li4);
        avaliableoffer.append(availableimage,availabletext);
        var main2avilable= document.createElement("div");
        mainavailable.append(avaliableoffer,ul);
        main2avilable.append( mainavailable);
        document.getElementById("shoppingcart1").append(div1,main2avilable);
        mainavailable.setAttribute("id","mainavailable");
        main2avilable.setAttribute("id","main2avilable");
        arr.map((ele)=>{
        var maindivmap=document.createElement("div");
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
        document.getElementById("shoppingcart2").append(maindivmap);
        console.log(maindivmap);
       
 })
    
    
}
display1()