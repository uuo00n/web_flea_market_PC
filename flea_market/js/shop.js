//书p169页， 4.添加JavaScript代码
//在body部分添加javascript代码


var item=document.getElementsByClassName("item");
//根据classname找到列表元素
//遍历所有列表项
for(var i=0;i<item.length;i++){
    //设置列表项移入，移除事件，改变列表项背景色
    item[i].onmouseover=function(){
        this.style.background='rgb(200,200,200)';
    }
    item[i].onmouseout=function(){
        this.style.background='rgb(255,255,255)';
    }
}

//第二阶段留言管理
function SelectAll(){
    var checkboxs=document.getElementsByName('choose');
    for(var i=0;i<checkboxs.length;i++){
        var e=checkboxs[i];
        e.checked=e.checked;
    }
}


//JQuery动画效果 p211
$(document).ready(function(){
    $('li').each(function(index){
        $(this).hover(function(){
            $('li').anmite({
                width:100
            },500);
            $('li').eq(index).anmite({
                width:200
            },500);
        });
    });
});


//p235 表单数据提交
var goods={
    name:"",
    price:"",
    information:"",
};
function upload(){
    goods.name=document.getElementsById("name").value;
    goods.price=document.getElementsById("price").value;
    goods.information=document.getElementsById("information").value;
    if (goods.name==""||goods.price==""||goods.information=="") {
        alert("商品信息不完全");
        return;
    }
    console.log(goods);

}