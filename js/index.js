/*
* @Author: 李亲亲ლ(°◕‵ƹ′◕ლ)
* @Date:   2017-12-27 21:32:07
* @Last Modified by:   李亲亲ლ(°◕‵ƹ′◕ლ)
* @Last Modified time: 2018-01-22 10:04:21
*/
/*banner*/
//轮播图
{
	var banner=document.querySelectorAll(".banner .ban-img li");
	var btn=document.querySelectorAll(".circle ul li");
	var left=document.querySelector(".left");
	var right=document.querySelector(".right");
	var box=document.querySelector(".banner");

	btn.forEach(function(ele,index){
        ele.onclick = function () {
            for(var i=0;i<banner.length;i++){
                banner[i].classList.remove("active");
                btn[i].classList.remove("active");
            }
            banner[index].classList.add("active");
            btn[index].classList.add("active");
             n=index;
        };
	});
    n=0;
    function bannerFn(bir="r") {
        if(bir==="r"){
            n++;
        }else if(bir="l"){
            n--;
        }
        if(n==banner.length){
            n=0;
        }
        if(n===-1){
            n=banner.length-1;
        }
        for(var i=0;i<banner.length;i++){
            banner[i].classList.remove("active");
            btn[i].classList.remove("active");
        }
        banner[n].classList.add("active");
        btn[n].classList.add("active");
        box.onmouseover=function () {
            clearInterval(st);
        }
        box.onmouseout=function(){
            st=setInterval(bannerFn,5000);
        }
    }
    var st=setInterval(bannerFn,5000);
    box.onmouseover=function(){
        clearInterval(st);
    }
    box.onmouseout=function(){
        st=setInterval(bannerFn,5000);
    }
    //解决点击事件的bug
    var flag=true;

    //左右点击事件
	 right.onclick=function(){

        if(flag){
            flag=false;
            bannerFn();
        }
    }
    left.onclick=function(){

        if(flag){
            flag=false;
            bannerFn("l");
        }
    }
    banner.forEach(function(ele,index){
        ele.addEventListener("transitionend",function(){
            flag=true;
        })
    })

}

//无缝轮播
{
    let box=document.querySelector(".cpzx-box");
    let innerObj=document.querySelector(".cpzx-box ul");
    let items=document.querySelectorAll(".cpzx-box ul li");
    let next=document.querySelector(".cpzx-right");
    let before=document.querySelector(".cpzx-left");
    let bir="right";
    console.log(box);
    console.log(innerObj);
    console.log(items);
    let n=2;
    function moveFn() {
        innerObj.style.transition="all 1s";
        if(bir==="right"){
            n++;
        }else if(bir==="left"){
            n--;
        }
        innerObj.style.marginLeft=-n*413+"px";
    }

    innerObj.addEventListener("transitionend",function(){
        flag=true;
        if(n===9){
            innerObj.style.transition="none";
            innerObj.style.marginLeft=-1239+"px";
            n=3;
        }
        if(n===0){
            innerObj.style.transition="none";
            innerObj.style.marginLeft=-2478+"px";
            n=6;
        }
    })
    let st=setInterval(moveFn,3000);
    //鼠标移入or失去焦点
    box.onmouseover=function(){
        clearInterval(st);
    };
    box.onmouseout=function(){
        st=setInterval(moveFn,3000);
    };
    window.onblur=function(){
        clearInterval(st);
    };
    window.onfous=function(){
        setInterval(moveFn,3000);
    };
    //下一个
    let flag=true;
    next.onclick=function(){
        console.log("右点击测试");
        if(flag){
            bir="right";
            flag=false;
            moveFn();
        }
    };
    before.onclick=function (){
        console.log("左点击测试");
        if(flag){
            bir="left";
            flag=false;
            moveFn();
        }
    }
}
//客服
{
    let logo=document.querySelectorAll(".logo");
    let wz=document.querySelectorAll(".wz");
    let lg1=document.querySelector(".lg1");
    let lg2=document.querySelector(".lg2");
    let lg3=document.querySelector(".lg3");
    logo.forEach(function(ele,index){
        ele.onmouseover=function(){
            wz[index].style.display="block";
            wz[index].style.background="#07923b";

        }
        ele.onmouseout=function(){

            wz[index].style.display="none";
        }
    })
}
//顶部隐藏
{
    let topBar=document.querySelector(".yincang");
    onscroll=function(){
        var st=document.documentElement.scrollTop;
        if(st>550){
            topBar.style.top="0";
        }else{
            topBar.style.top="-50px"
        }
    }
}
//toTop
{
    var toTop=document.querySelector(".totop");
    toTop.onclick=function(){
        var st=document.documentElement.scrollTop;
        var speed=st*30/100;
        var t=setInterval(function(){
            st-=speed;
            if(st<=0){
                st=0;
                clearInterval(t);
            };
            document.documentElement.scrollTop=st;
            flag=false;

        },30);
    } 
}