const val=document.getElementById("btn")
const list=document.getElementById("menu1-links")
list.style.display="none";
val.addEventListener("click",(event)=>{
    if(list.style.display=="none"){
        list.style.display="block"
    }else {
        list.style.display="none"
    }
})
const val1=document.getElementById("btn1")
const list1=document.getElementById("menu1-links1")
list1.style.display="none";
val1.addEventListener("click",(event)=>{
    if(list1.style.display=="none"){
        list1.style.display="block"
    }else {
        list1.style.display="none"
    }
})
const val2=document.getElementById("btn2")
const list2=document.getElementById("menu1-links2")
list2.style.display="none";
val2.addEventListener("click",(event)=>{
    if(list2.style.display=="none"){
        list2.style.display="block"
    }else {
        list2.style.display="none"
    }
})