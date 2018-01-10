//导航栏
{
    let daohang=document.querySelectorAll(".df");
    console.log(daohang);
    daohang.forEach(function(ele,index){
        ele.onclick = function () {
            console.log(1);
            for(var i=0;i<daohang.length;i++){
                daohang[index].classList.add("active");
            }
            daohang[index].classList.add("active");
        }
    })
}