
    let arr = [];
    let n = 0; 
    let nValue = "0";
    let functionText = "" ;
    let result ;
    let fxValue = [];
    let arrclone = [];
   // let deleteText ;
    document.getElementById("funcarea").value = functionText;

    function funcView(){
        document.getElementById("funcarea").value = functionText;
    }

    function showResult(){  
        
        if(arr[n-1] != ")"){  arr[n] = Number(nValue); }
         math();  
        functionText = arr[0];
        funcView();
        arr = [];
        result = 0;
        fxValue = [];
        functionText = "";
        n = 0;
        nValue = "0"; 
        

    }
    function runFx(){
        if(arr[n-1] != "x"){
        if(arr[n-1] != ")"){  arr[n] = Number(nValue); }}
        func1();
        document.write(fxValue);
        arr = [];
        result = 0;
        fxValue = [];
        functionText = "";
        n = 0;
        nValue = "0"; 
    }





    // FUnction yopta

    function func1(){
        arrclone = arr.concat();



        let k = 0;
        for(let i = -10; i <= 10;i+=0.1 ){    
        arr = arrclone.concat();
        k = i.toFixed(1);
        
        arr =  giveXvalue();   
    
        fxValue.push(mathFx()) ;
        }
        arr = arrclone.concat();
       


        function giveXvalue(){
        for(let f = 0; f<arr.length; f++){
            if(arr[f] == "x"){
                arr[f] = k;
            }
        }
        return arr;
    }
    }

    


    function mathFx (){
        if(!arr.includes("(")){
        devideElements();
        multyElements();
        plusMinusElements();
        }else {
            while(arr.includes("(")){
                deivdeInBrackets();
                multiplyInBrackets();
                plusMinusInBrackets();
            }
        devideElements();
        multyElements();
        plusMinusElements();

        }
       
        return arr[0].toFixed(4);
    }










    //calculator 
    function math(){
        if(!arr.includes("(")){
        devideElements();
        multyElements();
        plusMinusElements();
        }else {
            while(arr.includes("(")){
                deivdeInBrackets();
                multiplyInBrackets();
                plusMinusInBrackets();

            }
        devideElements();
        multyElements();
        plusMinusElements();

        }

    }


    //algoritm pakagcerov depqi hamar
    function bracketStartIndex (){
        let startindex ;
        let endindex ; 
        
            for(let i=0;i<arr.length;i++){
                if(arr[i] == "("){
                    startindex = i;
                }else if (arr[i] == ")"){
                    endindex = i;
                    break;
                }
            }
            return startindex;
        }

    function bracketEndIndex (){
        let startindex ;
        let endindex ; 
        
            for(let i=0;i<arr.length;i++){
                if(arr[i] == "("){
                    startindex = i;
                }else if (arr[i] == ")"){
                    endindex = i;
                    break;
                }
            }
            return endindex;
        }

    function deivdeInBrackets (start = bracketStartIndex()  , end = bracketEndIndex()){
        while(arr.includes("/" , start)){
            if(arr.indexOf("/",start)>end)break;
           for( let i=start ;i<end;i++){
               if(arr[i] == "/"){
                    arr[i-1]=arr[i-1]/arr[i+1];
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    end = end - 2;
                    break;
               }
           }
       }
       if(start == end-2){
            arr.splice(start,1);
            arr.splice(end-1,1);
            }
           // alert(arr);
    }

    function multiplyInBrackets (start = bracketStartIndex()  , end = bracketEndIndex()){
        
        while(arr.includes("*" , start)){
            if(arr.indexOf("*",start)>end)break;
           for( let i=start ;i<end;i++){
               if(arr[i] == "*"){
                    arr[i-1]=arr[i-1]*arr[i+1];
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    end = end - 2;
                    break;
               }
           }
       }
       if(start == end-2){
            arr.splice(start,1);
            arr.splice(end-1,1);
            }
          //  alert(arr);
    }

    function plusMinusInBrackets(start = bracketStartIndex(), end = bracketEndIndex()){
        while(arr.includes("+",start) || arr.includes("-",start)){
            if(arr.indexOf("+",start)>end && arr.indexOf("-",start)>end )break;
            if(arr.indexOf("+",start)>end && arr.indexOf("-",start) == -1)break;
            if(arr.indexOf("+",start) == -1 && arr.indexOf("-",start) >end)break;
            for(let i=start; i<end;i++){
                if(arr[i] == "+"){
                    arr[i-1]=arr[i-1]+arr[i+1];
                    for(let k = i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    end = end - 2;
                    break;
                }else if(arr[i] == "-"){
                    arr[i-1]=arr[i-1]-arr[i+1];  
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }  
                    end = end - 2;
                    break;
                }
                
          
            }
            }
            
            if(start == end-2){
            arr.splice(start,1);
            arr.splice(end-1,1);
          }
        //  alert(arr);
            
    }







    // algoritm aranc pakagceri depqi hamar

    function devideElements (){
       while(arr.includes("/")){
           for( let i=0 ;i<arr.length;i++){
               if(arr[i] == "/"){
                    arr[i-1]=arr[i-1]/arr[i+1];
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    break;
               }
           }
       }
    }
    function multyElements(){
        while(arr.includes("*")){
            for(let i=0;i<arr.length;i++){
                if(arr[i] == "*"){
                    arr[i-1]=arr[i-1]*arr[i+1];
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    break;
                }
            }
        }
    }
    function plusMinusElements(){
        while(arr.includes("+") || arr.includes("-")){
            for(let i=0; i<arr.length;i++){
                if(arr[i] == "+"){
                    arr[i-1]=arr[i-1]+arr[i+1];
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    break;
                }else if(arr[i] == "-"){
                    arr[i-1]=arr[i-1]-arr[i+1];  
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    break;
                }
            }
            }
        }
    // verj algoritm aranc pakagceri 



 

    function cleanFnc (){
        
        arr = [];
        fxValue = []
        n = 0;
        nValue = "0";
        functionText = "";
        funcView();
    }

    function numb0 (){
        nValue = nValue + "0";
        functionText = functionText + "0";
        funcView();
    
    }
    function numb1 (){
        nValue = nValue + "1";
        functionText = functionText + "1";
        funcView();
        
    }
    function numb2 (){
        nValue = nValue + "2";
        functionText = functionText + "2";
        funcView();
        
    }
    function numb3 (){
        nValue = nValue + "3";
        functionText = functionText + "3";
        funcView();
    }
    function numb4 (){
        nValue = nValue + "4";
        functionText = functionText + "4";
        funcView();
    }
    function numb5 (){
        nValue = nValue + "5";
        functionText = functionText + "5";
        funcView();
    }
    function numb6 (){
        nValue = nValue + "6";
        functionText = functionText + "6";
        funcView();
    }
    function numb7 (){
        nValue = nValue + "7";
        functionText = functionText + "7";
        funcView();
    }
    function numb8 (){
        nValue = nValue + "8";
        functionText = functionText + "8";
        funcView();
    }
    function numb9 (){
        nValue = nValue + "9";
        functionText = functionText + "9";
        funcView();
    }


    function plus(){
        if(arr[n-1] != ")"){
            arr[n] = Number(nValue);
            n++;
        }
        arr[n] = "+";
        n++;
        nValue = "0";
        functionText = functionText + "+";
        funcView();
    }
    function minus(){
        if(arr[n-1] != ")"){
            arr[n] = Number(nValue);
            n++;
        }
        arr[n] = "-";
        n++;
        nValue = "0";
        functionText = functionText + "-";
        funcView();
    }
    function devide (){
        if(arr[n-1] != ")"){
            arr[n] = Number(nValue);
            n++;
        }
        arr[n] = "/";
        n++;
        nValue = "0";
        functionText = functionText + "/";
        funcView();
    }
    function multiply(){
       if(arr[n-1] != ")") {
           arr[n] = Number(nValue);
            n++;
        }
        arr[n] = "*";
        n++;
        nValue = "0";
        functionText = functionText + "*";
        funcView();
    }
    function fx (){
        arr[n] = "x";
        n++;
        nValue = "0";
        functionText = functionText + "x";
        funcView();
    }
    function leftbracket(){
        arr[n] = "(";
        n++;
        functionText = functionText + "(";
        funcView();
    }
    function rightbracket(){
        if(arr[n-1] != ")" &&  arr[n-1] != "x") {
           arr[n] = Number(nValue);
            n++;
        }
        arr[n] = ")";
        n++;
        nValue = "0";
        functionText = functionText + ")";
        funcView();
    }

