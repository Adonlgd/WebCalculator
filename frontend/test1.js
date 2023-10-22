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
                     case "+":
                         numFirst=getText.value*1;
                         getText.value=0;
                         symbol="+"
                         break;
                    case "Ans":
                        
                        getText.value="3*7=21  68*889=60452";
                        
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
                                     alert("Divider cannot be 0 or empty")
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

 //Implement sign function
 function mySign(n){
     return Number(n)*(-1);
 }

 //Realize the function of the exit key
 function myBack(n){
     n=n.substr(0,n.length-1);
     if (isNull(n))
         n=0;
     return n;
 }

 //Implement decimal point function
 function point_fun(n){
     //indexOf() indicates whether this symbol exists, returns the position if it exists, and returns -1 if it does not exist
     if (n.indexOf(".")==-1)
         n=n+".";
     return n;
 }

 //Operation to determine whether the text box is empty or 0
 function isNull(num){
     return (num=="0"||num.length==0)?true:false;
 }

 document.getElementById('readhistory').onclick = function () {


    var Ans = document.getElementById("result2");
    var result = document.getElementById("result1");
    var contentAsString = String(Ans.textContent);
    result.innerHTML = Ans.innerHTML;



    var xhr = new XMLHttpRequest();

    // 配置请求，使用GET请求方式，请求的URL为后端PHP文件的路径
    xhr.open("GET", "backend.php", true);
    //发送请求
    xhr.send();
    // 设置回调函数，处理响应
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status == 200) {
            // 如果请求成功完成，处理后端返回的JSON数据
            var response = JSON.parse(xhr.responseText);

            for (var i = 0; i < response.length; i++) {
                var recordId = "hist" + (i + 1);
                var recordDiv = document.getElementById(recordId);
                recordDiv.innerHTML = response[i];
            }
        }
    };

}



function calculateExpression(expression) {
    let index = 0;

    function throwError(message) {
        throw new Error(message);
    }

    function parseNumber() {
        let start = index;
        if (expression[index] === '-') {
            index++;
        }
        while (/\d|\./.test(expression[index])) {
            index++;
        }
        return parseFloat(expression.slice(start, index));
    }
}

document.getElementById('save').onclick = function () {


    var result = document.getElementById("result1");//获取输入栏标签
    var result1 = document.getElementById("result2");//获取输出栏标签


    finalResult = calculateExpression(result.innerHTML);
    //将结果显示

    result1.innerHTML = finalResult;


    var str1 = document.getElementById('result1').innerHTML;
    var str2 = document.getElementById('result2').innerHTML;

    var xhr = new XMLHttpRequest();
    var url = `history.php?result1=${str1}&result2=${str2}`;
    xhr.open('get', url, true)

    xhr.send()
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                console.log(xhr.response);
            }
        }
    }


    result.innerHTML = "";

}


//计算结果函数
function res() {
    var result = document.getElementById("result1");//获取输入栏标签
    var result1 = document.getElementById("result2");//获取输出栏标签
    console.log(typeof result.innerHTML)

    finalResult = calculateExpression(result.innerHTML);
    //将结果显示

    result1.innerHTML = finalResult;
    result.innerHTML = "";
}

//删除一位处理函数
function del() {
    var result = document.getElementById("result1");//获取标签
    var len = result.innerHTML.length;//获取输入栏输入的长度
    result.innerHTML = result.innerHTML.substr(0, len - 1);//使用substr截取掉一位再保存

}

// 清除全部内容
function clear1() {
    var result = document.getElementById("result1");//获取标签
    result.innerHTML = "";//输入显示栏设置为空值
    var result1 = document.getElementById("result2");//获取标签
    result1.innerHTML = "";//输出显示栏设置为空值
    for (var i = 0; i < 10; i++) {
                var hist = "hist" + (i + 1);
                var hist_clear = document.getElementById(hist);
                hist_clear.innerHTML = "";
            }
}
  