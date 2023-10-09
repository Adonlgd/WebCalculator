/*Place the initialized content in JS and store the style content
Put it in CSS, and only write basic HTML content such as class and value in HTML*/

function init(){
    initLabel();
    fun();
    Link();
 }

 /*Initialize the content of the text box*/
 function initLabel(){
     let value=document.getElementById("Text1");
     value.value=0;
     value.disabled="disabled";
 }

 //Button Add Function
 function fun(){
     let getText=document.getElementById("Text1");
     let nums=document.getElementsByTagName("input");
     let numFirst,symbol;
     for (let i=0;i<nums.length;i++){
         nums[i].onclick=function (){  //isNaNIf this function judge if it is a number, it returns false, and if it is not a number, it returns true
             if (!isNaN(this.value)){
                 if (isNull(getText.value))
                     getText.value=this.value;
                 else
                     getText.value=getText.value+this.value;
             }

             else{/*Non numeric operations*/
                 let button_info=this.value;
                 switch (button_info){
                    //Non operator operations
                     case "C":
                         getText.value=0;
                         break;
                     case "<-":
                         getText.value=myBack(getText.value);
                         break;
                     case "+/-":
                         //Once clicked, it becomes a symbol, and once more clicked, it becomes a positive sign
                         getText.value=mySign(getText.value);
                         break;
                     case ".":
                         //The decimal point can only be clicked once
                         getText.value=point_fun(getText.value);
                         break;

                    //Complex operations     
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
                        break;

                    //Simple operations
                    case "/":
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="/"
                         break;
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
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="+"
                         break;
                     case "=":
                         switch (symbol){
                             //ParseInt() cannot be used to convert a string to a number below, as if there are decimals, they will be automatically converted to integers
                             //Method for converting strings to numbers:
                             //1. Value * 1 implementation
                             //2. ParseInt() implementation
                            //3. Number() implementation
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
  
  