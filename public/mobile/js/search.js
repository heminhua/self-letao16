$(function(){
    $(".searchBtn").on("tap",function(){
        // 获取搜索框的值
        var txt= $(".searchTxt").val();
        // console.log(txt);
        // 判断txt是否合法
        if($.trim(txt)==false){
            console.log("非法");
            return;
        }
        // 把txt存到本地存储中
        var ls= localStorage;
        var arr=ls.getItem("letaoHistory")&&JSON.parse(ls.getItem("letaoHistory"))||[];
        // 判断数组中是否存在相对的数据
        for(var i=0;i<arr.length;i++){
            var element=arr[i];
            if(element==txt){
                arr.splice(i,1);
            }
        }
        arr.unshift(txt);
        // console.log(arr);
        ls.setItem("letaoHistory",JSON.stringify(arr));
        /* 跳转页面 searchList.html*/
        location.href="../search/searchList.html"+txt;
    })

//清空所有记录
$(".clearAll").on("tap",function(){
localStorage.removeItem("letaoHistory")
})




})