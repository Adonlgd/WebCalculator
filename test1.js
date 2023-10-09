/*将初始化的内容放在js中，将样式的内容
放在css中，html中只写class、value等基本html内容*/
function init(){
    initLabel();
    fun();
    Link();
 }
 /*将文本框内容进行初始化*/
 function initLabel(){
     let value=document.getElementById("Text1");
     value.value=0;
     value.disabled="disabled";
 }
 //按钮添加功能
 function fun(){
     let getText=document.getElementById("Text1");
     let nums=document.getElementsByTagName("input");
     let numFirst,symbol;
     for (let i=0;i<nums.length;i++){
         nums[i].onclick=function (){
             //isNaN如果是数字返回false，不是数字返回true
             if (!isNaN(this.value)){
                 if (isNull(getText.value))
                     getText.value=this.value;
                 else
                     getText.value=getText.value+this.value;
             }
             else{/*非数字执行的操作*/
                 let button_info=this.value;
                 switch (button_info){
                     case "C":
                         getText.value=0;
                         break;
                     case "<-":
                         getText.value=myBack(getText.value);
                         break;
                     case "+/-":
                         //单击一次就变为符号，再单机一次就变为正号
                         getText.value=mySign(getText.value);
                         break;
                     case "/":
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="/"
                         break;
                     case ".":
                         //小数点只能点击一次
                         getText.value=point_fun(getText.value);
                         break;
                    case "x²":
                         numFirst=getText.value*1;
                         getText.value=numFirst*numFirst;
                         break;
                    case "x³":
                         numFirst=getText.value*1;
                         getText.value=numFirst*numFirst*numFirst;
                         break;
                    case "√":
                            numFirst=getText.value*1;
                            getText.value=Math.sqrt(numFirst);
                            break;   
                    case "∛":
                            numFirst=getText.value*1;
                            getText.value=Math.cbrt(numFirst);
                            break  
                     case "*":
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="*"
                         break;
                     case "-":
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="-"
                         break;
                     case "+":
                         /*清除文本框默认前面的0,并获取里面的值供计算使用*/
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="+"
                         break;
                     case "=":
                         switch (symbol){
                             //下面不能用parseInt()将字符串转化为数字，因为如果有小数就会将小数自动转化为整数
                                 //将字符串转化为数字方法：
                                 //1、值*1实现
                                 //2、parseInt（）实现
                                 //3、Number（）实现
                             case "+":
                                 getText.value=numFirst+Number(getText.value);
                                 break;
                             case "-":
                                 getText.value=numFirst-Number(getText.value);
                                 break;
                             case "*":
                                 getText.value=numFirst*Number(getText.value);
                                 break;
                             case "/":
                                 if (!isNull(getText.value))
                                     getText.value=numFirst/Number(getText.value);
                                 else{
                                     getText.value=0;
                                     numFirst=0;
                                     alert("除数不能为0或空哦~")
                                 }
                                 break;
                         }
                     break;
                 }
             }
         }
     }
 }

/////functions

 //实现正负号功能
 function mySign(n){
     return Number(n)*(-1);
 }

 //实现退位键功能
 function myBack(n){
     n=n.substr(0,n.length-1);
     if (isNull(n))
         n=0;
     return n;
 }

 //实现小数点功能
 function point_fun(n){
     //indexOf()表示这个符号是否存在，存在就返回位置，不存在就返回-1
     if (n.indexOf(".")==-1)
         n=n+".";
     return n;
 }

 //判断文本框是空或者为0的操作
 function isNull(num){
     return (num=="0"||num.length==0)?true:false;
 }

 //给摸鱼按钮添加超链接
 function Link(){
     document.getElementById("bilibili").onclick=function (){
         window.location.href="http://www.bilibili.com";
     }
 }
  
  