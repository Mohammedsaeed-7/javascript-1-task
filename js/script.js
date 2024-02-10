var allproducts = document.querySelectorAll(".products li")
var div1 = document.querySelector("#div1")
var div2 = document.querySelector("#div2")
var btn1 = document.querySelector("#showprice")
var totalprice = 0

allproducts.forEach(function (item){
    item.onclick = function (){
        totalprice +=  +(item.getAttribute("price"))
        div1.innerHTML += item.textContent +" "
        if(div1.innerHTML !=""){
            btn1.style.display = "block"
            btn1.style.width = "200px"
            btn1.style.height = "45px"
            btn1.style.backgroundColor = "blue"
            btn1.style.color = "white"
            btn1.style.borderRadius = "30px"
            btn1.style.border = "none"
            btn1.style.fontSize = "21px"
            btn1.style.fontFamily = "sans-serif"
        }
    }
})
btn1.onclick =function(){
    div2.innerHTML = (totalprice)
}

div1.innerHTML += item.textContent
div1.innerHTML = div1.innerHTML + item.textContent




