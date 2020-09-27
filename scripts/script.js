    let arr = [];
    let nValue = "";
    let functionText = "" ;
    let result ;
    let fxValue = [];
    let arrclone = [];
    let modIndex = [];
    let modCount;
    

    function funcView(){
        document.getElementById("funcarea").value = functionText;
    }

    function showResult(){  
        replaceMod();
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        math();  
        functionText = arr[0];
        funcView();
        arr = [];
        result = 0;
        fxValue = [];
        functionText = "";
        
        nValue = ""; 
        

    }
    function runFx(){
        replaceMod();
        scrollToGraph();
        setTimeout(timer2,500);
        function timer2 (){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
       // alert(arr);
        func1();
        arr = [];
        result = 0;
        fxValue = [];
        functionText = "";
        n = 0;
        nValue = ""; 
    }
    }





    // FUnction yopta

    function func1(){
        arrclone = arr.concat();
        let k = 0;
        
        for(let i = -15; i <= 15;i+=0.01){  
            setTimeout(timer1,20);
            function timer1(){  
        arr = arrclone.concat();
        k = i.toFixed(2);
        arr =  giveXvalue().concat();  
        drawPoint(mathFx());
            }
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
        cleanUselessBrackets();
      //  cleanUselessBrackets();
        while(arr.includes("(") ||arr.includes("[") ||arr.includes("]") ||arr.includes(")") ){
            coordinator ();
            }
            squareRootElements();
            sinCos();
            logElements();
            degElements();
            devideElements();
            multyElements();
            plusMinusElements();

       
        
        return Number(arr[0]);
        
        

    }










    //calculator 
    function math(){
        cleanUselessBrackets();
        while(arr.includes("(") ||arr.includes("[") ||arr.includes("]") ||arr.includes(")") ){

            coordinator ();
            }
           
            squareRootElements();
            sinCos();
            logElements();
            degElements();
            devideElements();
            multyElements();
            plusMinusElements();


        }
        

    



    function infoForCoordinator() {
        let mainInfo = {
            startIndex : false ,
            endIndex : false,
            bracketExist : false,
            modExist : false,
            startindexExist : false,
            endindexExist : false ,
        }
        
        for(let i = 0;  i<arr.length;i++){
            if(arr[i] == "("){
                mainInfo.startIndex = i;
                mainInfo.bracketExist = true;
                mainInfo.modExist = false;
                mainInfo.startindexExist = true;
            }else if(arr[i] == "["){
                mainInfo.startIndex = i;
                mainInfo.bracketExist = false;
                mainInfo.modExist = true;
                mainInfo.startindexExist = true;
            }else if(arr[i] == ")"){
                mainInfo.endIndex = i;
                mainInfo.bracketExist = true;
                mainInfo.modExist = false;
                mainInfo.endindexExist = true;
                break;
            }else if(arr[i] == "]"){
                mainInfo.endIndex = i;
                mainInfo.bracketExist = false;
                mainInfo.modExist = true;
                mainInfo.endindexExist = true;
                break;
            }
            
        }
        if(mainInfo.startindexExist == true && mainInfo.endindexExist == false){
            arr.splice(mainInfo.startIndex,1);
        }else if( mainInfo.endindexExist == true && mainInfo.startindexExist == false){
            arr.splice(mainInfo.endIndex,1);
        }else{return mainInfo;}
    }
       
        
    
    function coordinator (){
        cleanUselessBrackets();
        let getMainInfo = Object.assign({},infoForCoordinator());
        let startIndexClone = getMainInfo.startIndex;
        let endIndexClone = getMainInfo.endIndex;
        //alert(JSON.stringify(getMainInfo));
        if(getMainInfo.bracketExist && !justBracket(startIndexClone,endIndexClone)){
            squareRootElementsInBrackets(startIndexClone,endIndexClone);
            
           
            sinCosInBrackets(startIndexClone,endIndexClone);
            
            logElementsInBrackets(startIndexClone,endIndexClone);
            degInBrackets(startIndexClone,endIndexClone);
            deivdeInBrackets( startIndexClone,endIndexClone);
          // alert(arr);
            
            multiplyInBrackets(startIndexClone,endIndexClone);
         //  alert(arr);
            plusMinusInBrackets(startIndexClone,endIndexClone);
         //  alert(arr);
        }else if(getMainInfo.modExist && !justMod(startIndexClone,endIndexClone)){
         // justMod(getMainInfo.startIndex,getMainInfo.endIndex);

            squareRootElementsInMod(startIndexClone,endIndexClone);
            sinCosInMod(startIndexClone,endIndexClone);
            logElementsInMod(startIndexClone,endIndexClone);
            degInMod(startIndexClone,endIndexClone);
            deivdeInMod( startIndexClone,endIndexClone);
         //   alert(arr);
            multiplyInMod(startIndexClone,endIndexClone);
         //   alert(arr);
            plusMinusInMod(startIndexClone,endIndexClone);   
        //    alert(arr);
        }
        
    }
























    //algoritm pakagcerov depqi hamar
  /*  function bracketStartIndex (){
        let startindex ;
        let endindex ; 
        let startindexExist = false;
        let endindexExist = false ;
        
            for(let i=0;i<arr.length;i++){
                if(arr[i] == "("){
                    startindex = i;
                }else if (arr[i] == ")"){
                    endindex = i;
                    break;
                }
            }
            if(startindexExist == true && endindexExist == false){
                arr.splice(startindex,1);
            }else if( endindexExist == true && startindexExist == false){
                arr.splice(endindex,1);
            }else{return startindex;}

            
        }
        

    function bracketEndIndex (){
        let startindex ;
        let endindex ; 
        let startindexExist = false;
        let endindexExist = false;
        
            for(let i=0;i<arr.length;i++){
                if(arr[i] == "("){
                    startindex = i;
                    startindexExist = true;
                }else if (arr[i] == ")"){
                    endindex = i;
                    endindexExist = true;
                    break;
                }
            }
            if(startindexExist == true && endindexExist == false){
                arr.splice(startindex,1);
            }else if( endindexExist == true && startindexExist == false){
                arr.splice(endindex,1);
            }else{return endindex;}

            
        }*/

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
            }else{
                startIndexClone = start;
                endIndexClone = end;
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
            }else{
                startIndexClone = start;
                endIndexClone = end;
               }
          
    }
    function degInBrackets (start = bracketStartIndex()  , end = bracketEndIndex()){
        
        while(arr.includes("^" , start)){
            if(arr.indexOf("^",start)>end)break;
           for( let i=start ;i<end;i++){
               if(arr[i] == "^"){
                    arr[i-1]=Number(Math.pow(Number(arr[i-1]),Number(arr[i+1])));
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
            }else{
                startIndexClone = start;
                endIndexClone = end;
               }
          
    }

    function plusMinusInBrackets(start = bracketStartIndex(), end = bracketEndIndex()){
        while(arr.includes("+",start) || arr.includes("-",start)){
            if(arr.indexOf("+",start)>end && arr.indexOf("-",start)>end )break;
            if(arr.indexOf("+",start)>end && arr.indexOf("-",start) == -1)break;
            if(arr.indexOf("+",start) == -1 && arr.indexOf("-",start) >end)break;
            for(let i=start; i<end;i++){
                if(arr[i] == "+"){
                    arr[i-1]= Number(arr[i-1]) + Number(arr[i+1]);
                    for(let k = i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    end = end - 2;
                    break;
                }else if(arr[i] == "-"){
                    arr[i-1]= Number(arr[i-1]) - Number(arr[i+1]);
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
          }else{
            startIndexClone = start;
            endIndexClone = end;
           }
       
            
    }

    function sinCosInBrackets (start = bracketStartIndex(), end = bracketEndIndex()){
        while(arr.includes("sin",start) || arr.includes("cos",start)){
            if(arr.indexOf("sin",start)>end && arr.indexOf("cos",start)>end )break;
            if(arr.indexOf("sin",start)>end && arr.indexOf("cos",start) == -1)break;
            if(arr.indexOf("sin",start) == -1 && arr.indexOf("cos",start) >end)break;
            for(let i = start;i<end;i++){
                if(arr[i] == "sin"){
                    arr[i] = Number(Math.sin(arr[i+1]));
                    for(let k =i+1;k<arr.length;k++){
                        arr[k]=arr[k+1];
                }
                end = end - 1;
                break;
                }else if(arr[i] == "cos"){
                    arr[i] = Number(Math.cos(arr[i+1]));
                    for(let k =i+1;k<arr.length;k++){
                        arr[k]=arr[k+1];
                }
                end = end - 1;
                break;
                }
            }
        }
        if(start == end-2){
            arr.splice(start,1);
            arr.splice(end-1,1);
          }else{
            startIndexClone = start;
            endIndexClone = end;
           }
    }


    function squareRootElementsInBrackets (start = bracketStartIndex(), end = bracketEndIndex()){
        while(arr.includes("√",start)){
            if(arr.indexOf("√",start)>end)break;
            for(let i=start ;i<end;i++){
                if(arr[i] == "√"){
                    arr[i] = Number(Math.sqrt(arr[i+1]));
                    for(let k =i+1;k<arr.length;k++){
                        arr[k]=arr[k+1];
                }
                end = end - 1;
               
                break;
                }
                }
                
            }
            if(start == end-2){
                    
                arr.splice(start,1);
                arr.splice(end-1,1);
                }else{
                 startIndexClone = start;
                 endIndexClone = end;
                }
        }

        function logElementsInBrackets(start = bracketStartIndex(), end = bracketEndIndex()){
            while(arr.includes("log")){
                if(arr.indexOf("log",start)>end)break;
                for(let i = start;i<end;i++){
                    if(arr[i] == "log"){
                      arr[i] = Math.log(arr[i+3])/Math.log(arr[i+1]);
                      arr.splice(i+1,3)
                      end = end - 3
                    break;
                    }
                    }
                    
                }
                if(start == end-2){
                    
                   arr.splice(start,1);
                   arr.splice(end-1,1);
                   }else{
                    startIndexClone = start;
                    endIndexClone = end;
                   }
            }



        function justBracket (start,end){
        if(start == end-2){
            arr.splice(start,1);
            arr.splice(end-1,1);
           
            return true;
            }else if(start != end-2){
                return false;
            }
        }




    function cleanUselessBrackets (){
        if (arr.includes(")") || arr.includes ("(")){
            for(let i = 0; i<arr.length;i++){
                if(arr[i] == "(" && !arr.includes(")",i)){
                    arr.push(")");
                }
                if(arr[i] == ")" && !arr.includes("(")){
                    arr.splice(i,1);
                }
                if(arr[i] == "(" && arr[i+1] == ")" ){
                        //arr.splice(i,2);
                    }else if(arr[i] == "(" && arr[i+2] == ")"){
                         arr.splice(i+2,1);
                        arr.splice(i,1);
                    }
                }
            }
        }


        


    //algoritm pakagceri hamar









        //algoritm modulneri hamar
        // start mod change algorithm
        function getModIndex (){
            for(let i = 0;i<arr.length;i++){
                if(arr[i] == "|"){
                    modIndex.push(i);
                }
            }
        }


        function replaceMod () {
            getModIndex();
            modCount = modIndex.length;
           
            arr[modIndex[0]] = "[";
            arr[modIndex[modIndex.length - 1]] = "]";
            replaceNextTo();
            replaceModBeforeNumber();
            replaceNextTo();
            lastMod();
            

        }


        function replaceNextTo (){
            let shouldRepeat = false;
            
            do{
                shouldRepeat = false;
            for(let i = 0; i<modIndex.length;i++){
                if(arr[modIndex[i]] == "["){
                    if(arr[modIndex[i] - 1] =="|"){
                        arr[modIndex[i] - 1] ="["
                        shouldRepeat = true;
                    }
                    if(arr[modIndex[i] + 1] =="|"){
                        arr[modIndex[i] + 1] ="["
                        shouldRepeat = true;
                    }
                } else if(arr[modIndex[i]] == "]"){
                    if(arr[modIndex[i] - 1] =="|"){
                        arr[modIndex[i] - 1] ="]"
                        shouldRepeat = true;
                    }
                    if(arr[modIndex[i] + 1] =="|"){
                        arr[modIndex[i] + 1] ="]"
                        shouldRepeat = true;
                    }    
                } 

            }    
        }while(shouldRepeat == true);
        }

        function lastMod(){
            let startCount = 0;
            let endCount = 0;
            for(let i = 0;i<arr.length;i++){
                if(arr[i] == "["){
                    startCount++;
                }else if(arr[i] == "]"){
                    endCount ++;
                }
            }
            if(startCount == (modCount/2 - 1) && endCount == modCount/2){
                
                for(let i = 0;i<arr.length;i++){
                    if(arr[i] == "|"){
                        arr[i] = "[";
                    }
                }
            }
            if(endCount == (modCount/2 - 1) && startCount == modCount/2){
                for(let i = 0;i<arr.length;i++){
                    if(arr[i] == "|"){
                        arr[i] = "]";
                    }
                }
            }
        }

        function replaceModBeforeNumber(){
            for(let i = 0 ; i< arr.length; i++){
                if(arr[i] == "|"){
                    if(typeof(arr[i+1]) == "number" || arr[i+1] == "x"){
                        arr[i] = "[";
                    }else if(arr[i+1] == "+" || arr[i+1] || "*" ||  arr[i+1] == "/" || arr[i+1] == "(" ){

                        arr[i] = "]"  ;      
                }else  if(arr[i-1] == "+" || arr[i-1] == "*" ||  arr[i-1] == "/" || arr[i-1] == "("){
                    arr[i] = "[";
                }
                
            }
        }
    }

        //end mod replacing algorithm

        /*    
    
        function modEndIndex (){
            let startindex ;
            let endindex ; 
            let startindexExist = false;
            let endindexExist = false;
            
                for(let i=0;i<arr.length;i++){
                    if(arr[i] == "["){
                        startindex = i;
                        startindexExist = true;
                    }else if (arr[i] == "]"){
                        endindex = i;
                        endindexExist = true;
                        break;
                    }
                }
                if(startindexExist == true && endindexExist == false){
                    arr.splice(startindex,1);
                }else if( endindexExist == true && startindexExist == false){
                    arr.splice(endindex,1);
                }else{return endindex;}
    
                
            }*/
            
        function justMod (start = modStartIndex()  , end = modEndIndex()){
            
            if(start == end-2){
               
                arr[start + 1] = Math.abs(arr[start + 1]);
                arr.splice(start,1);
                arr.splice(end-1,1);
               
                return true;
                }else if(start != end-2){
                    return false;
                }
               
        }
        function deivdeInMod (start = modStartIndex()  , end = modEndIndex()){
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
                arr[start + 1] = Math.abs(arr[start + 1]);
                arr.splice(start,1);
                arr.splice(end-1,1);
                }else{
                    startIndexClone = start;
                    endIndexClone = end;
                   }
               // alert(arr);
        }
        
        function multiplyInMod (start = modStartIndex()  , end = modEndIndex()){
            
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
                 arr[start + 1] = Math.abs(arr[start + 1]);
                arr.splice(start,1);
                arr.splice(end-1,1);
                }else{
                    startIndexClone = start;
                    endIndexClone = end;
                   }
              
        }
        function degInMod (start = modStartIndex()  , end = modEndIndex()){
            
            while(arr.includes("^" , start)){
                if(arr.indexOf("^",start)>end)break;
               for( let i=start ;i<end;i++){
                   if(arr[i] == "^"){
                    arr[i-1]=Number(Math.pow(Number(arr[i-1]),Number(arr[i+1])));
                        for(let k =i;k<arr.length;k++){
                            arr[k]=arr[k+2];
                    }
                        end = end - 2;
                        break;
                   }
               }
           }
           if(start == end-2){
                 arr[start + 1] = Math.abs(arr[start + 1]);
                arr.splice(start,1);
                arr.splice(end-1,1);
                }else{
                    startIndexClone = start;
                    endIndexClone = end;
                   }
              
        }
    
        function plusMinusInMod(start = modStartIndex(), end = modEndIndex()){
            while(arr.includes("+",start) || arr.includes("-",start)){
                if(arr.indexOf("+",start)>end && arr.indexOf("-",start)>end )break;
                if(arr.indexOf("+",start)>end && arr.indexOf("-",start) == -1)break;
                if(arr.indexOf("+",start) == -1 && arr.indexOf("-",start) >end)break;
                for(let i=start; i<end;i++){
                    if(arr[i] == "+"){
                        arr[i-1]= Number(arr[i-1]) + Number(arr[i+1]);
                        for(let k = i;k<arr.length;k++){
                            arr[k]=arr[k+2];
                    }
                        end = end - 2;
                        break;
                    }else if(arr[i] == "-"){
                        arr[i-1]= Number(arr[i-1]) - Number(arr[i+1]);
                        for(let k =i;k<arr.length;k++){
                            arr[k]=arr[k+2];
                    }  
                        end = end - 2;
                        break;
                    }
                    
              
                }
                }
                
                if(start == end-2){
                arr[start + 1] = Math.abs(arr[start + 1]);
                arr.splice(start,1);
                arr.splice(end-1,1);
              }else{
                startIndexClone = start;
                endIndexClone = end;
               }
           
                
        }
    
        function sinCosInMod (start = modStartIndex(), end = modEndIndex()){
            while(arr.includes("sin",start) || arr.includes("cos",start)){
                if(arr.indexOf("sin",start)>end && arr.indexOf("cos",start)>end )break;
                if(arr.indexOf("sin",start)>end && arr.indexOf("cos",start) == -1)break;
                if(arr.indexOf("sin",start) == -1 && arr.indexOf("cos",start) >end)break;
                for(let i = 0;i<arr.length;i++){
                    if(arr[i] == "sin"){
                        arr[i] = Number(Math.sin(arr[i+1]));
                        for(let k =i+1;k<arr.length;k++){
                            arr[k]=arr[k+1];
                    }
                    end = end - 1;
                    break;
                    }else if(arr[i] == "cos"){
                        arr[i] = Number(Math.cos(arr[i+1]));
                        for(let k =i+1;k<arr.length;k++){
                            arr[k]=arr[k+1];
                    }
                    end = end - 1;
                    break;
                    }
                }
            }
            if(start == end-2){
                arr[start + 1] = Math.abs(arr[start + 1]);
                arr.splice(start,1);
                arr.splice(end-1,1);
              }else{
                startIndexClone = start;
                endIndexClone = end;
               }
        }


        function squareRootElementsInMod (start = modStartIndex(), end = modEndIndex()){
            while(arr.includes("√")){
                if(arr.indexOf("√",start)>end)break;
                for(let i=start ;i<end;i++){
                    if(arr[i] == "√"){
                        arr[i] = Number(Math.sqrt(arr[i+1]));
                        for(let k =i+1;k<arr.length;k++){
                            arr[k]=arr[k+1];
                    }
                    end = end - 1;
                   
                    break;
                    }
                    }
                }
                if(start == end-2){
                    arr[start + 1] = Math.abs(arr[start + 1]);
                   arr.splice(start,1);
                   arr.splice(end-1,1);
                   }else{
                    startIndexClone = start;
                    endIndexClone = end;
                   }
            }


            function logElementsInMod(start = modStartIndex(), end = modEndIndex()){
                while(arr.includes("log")){
                    if(arr.indexOf("log",start)>end)break;
                    for(let i = start;i<end;i++){
                        if(arr[i] == "log"){
                          arr[i] = Math.log(arr[i+3])/Math.log(arr[i+1]);
                          arr.splice(i+1,3)
                          end = end - 3
                        break;
                        }
                        }
                        
                    }
                    if(start == end-2){
                        arr[start + 1] = Math.abs(arr[start + 1]);
                       arr.splice(start,1);
                       arr.splice(end-1,1);
                       }else{
                        startIndexClone = start;
                        endIndexClone = end;
                       }
                }
            



        //verj algoritm modulnerov 














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
    
    function degElements(){
        while(arr.includes("^")){
            for(let i=0;i<arr.length;i++){
                if(arr[i] == "^"){
                    arr[i-1]=Number(Math.pow(Number(arr[i-1]),Number(arr[i+1])));
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
                    arr[i-1]= Number(arr[i-1]) + Number(arr[i+1]);
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    break;
                }else if(arr[i] == "-"){
                    arr[i-1]= Number(arr[i-1]) - Number(arr[i+1]);  
                    for(let k =i;k<arr.length;k++){
                        arr[k]=arr[k+2];
                }
                    break;
                }
            }
            }
        }

        function sinCos (){
            while(arr.includes("sin") || arr.includes("cos")){
                for(let i = 0;i<arr.length;i++){
                    if(arr[i] == "sin"){
                        arr[i] = Number(Math.sin(arr[i+1]));
                        for(let k =i+1;k<arr.length;k++){
                            arr[k]=arr[k+1];
                    }
                    break;
                    }else if(arr[i] == "cos"){
                        arr[i] = Number(Math.cos(arr[i+1]));
                        for(let k =i+1;k<arr.length;k++){
                            arr[k]=arr[k+1];
                    }
                    break;
                    }
                }
            }
        }


        function squareRootElements (){
            while(arr.includes("√")){
                for(let i = 0;i<arr.length;i++){
                    if(arr[i] == "√"){
                        arr[i] = Number(Math.sqrt(arr[i+1]));
                        for(let k =i+1;k<arr.length;k++){
                            arr[k]=arr[k+1];
                    }
                    break;
                    }
                    }
                }
            }
        
    
        function logElements(){
            while(arr.includes("log")){
                for(let i = 0;i<arr.length;i++){
                    if(arr[i] == "log"){
                      arr[i] = Math.log(arr[i+3])/Math.log(arr[i+1]);
                      arr.splice(i+1,3)
                    break;
                    }
                    }
            }
        }
    
    // verj algoritm aranc pakagceri 




    


    //button onclick functions

 

    function cleanFnc (){
        
        arr = [];
        fxValue = []
        n = 0;
        nValue = "";
        functionText = "";
        funcView();
        x = -1;
        cleanField () ;
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
    function point (){
        nValue = nValue + ".";
        functionText = functionText + ".";
        funcView();
    }
    function euler(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length ] = Math.E;
        nValue = "";
        functionText = functionText + "e";
        funcView();
    }
    function pi(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length ] = Math.PI;
        nValue = "";
        functionText = functionText + "π";
        funcView();
    }





    function plus(){
    if(nValue != ""){
        arr[arr.length] = Number(nValue);
    }
        arr[arr.length ] = "+"
        nValue = "";
        functionText = functionText + "+";
        funcView();
    }
    function minus(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(arr[arr.length-1] == "(" || arr[arr.length-1] == undefined){
            arr[arr.length] = 0;
        }
    
            arr[arr.length] = "-";
        
       
        nValue = "";
        functionText = functionText + "-";
        funcView();
    }
    function devide (){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
            arr[arr.length ] = "/";
        
        nValue = "";
        functionText = functionText + "/";
        funcView();
    }
    function multiply(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        arr[arr.length ] = "*";
        nValue = "";
        functionText = functionText + "*";
        funcView();
    }
    function fx (){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length ] = "x";
        nValue = "";
        functionText = functionText + "x";
        funcView();
    }
    function leftbracket(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x" || arr[arr.length - 1] == ")"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length ] = "(";
        nValue = "";
        functionText = functionText + "(";
        funcView();
    }
    function rightbracket(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        arr[arr.length ] = ")";
        nValue = "";
        functionText = functionText + ")";
        funcView();
    }

    function sin(){
        if(nValue != ""){
            arr[arr.length ] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x" ){
            arr[arr.length] = "*" ;
        }
        arr[arr.length ] = "sin";
        nValue = "";
        arr[arr.length] = "(";
        functionText = functionText + "sin(";
        funcView();
      
    }
    function cos(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length] = "cos";
        
        nValue = "";
        arr[arr.length] = "(";
        functionText = functionText + "cos(";
        funcView();
        

    }
    function mod(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        arr[arr.length] = "|";
        nValue = "";
        functionText = functionText + "|";
        funcView();
    }

    function squareRoot(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length] = "√";
        
        nValue = "";
        arr[arr.length] = "(";
        functionText = functionText + "√(";
        funcView();
        

    }

    function deg(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        arr[arr.length ] = "^";
        nValue = "";
        functionText = functionText + "^";
        funcView();
    }

    function log(){
        if(nValue != ""){
            arr[arr.length] = Number(nValue);
        }
        if(typeof(arr[arr.length - 1]) == "number" ||  arr[arr.length - 1] == "x"){
            arr[arr.length] = "*" ;
        }
        arr[arr.length] = "log";
        
        nValue = "";
        arr[arr.length] = "(";
        functionText = functionText + "log(";
        funcView();
}
function takiGic(){
    arr[arr.length] = "_";
    arr[arr.length] = "(";
    nValue = "";
    functionText = functionText + "_(";
    funcView();
}



document.addEventListener('keydown', function (event) {
    if (event.key === '0') {
     numb0() ;
    }else if(event.key === '1') {
      numb1();
    }else if(event.key === '2') {
      numb2();
    }else if(event.key === '3') {
        numb3();
    }else if(event.key === '4') {
        numb4();
    }else if(event.key === '5') {
        numb5();
    }else if(event.key === '6') {
        numb6();
    }else if(event.key === '7') {
        numb7();
    }else if(event.key === '8') {
        numb8();
    }else if(event.key === '9') {
        numb9();
    }else if(event.key === 'e'){
        euler();
    }else if(event.key === 'p') {
        pi();
    }else if(event.key === '.') {
        point();
    }else if(event.key === 's') {
        sin();
    }else if(event.key === 'c') {
        cos();
    }else if(event.key === 'l') {
        log();
    }else if(event.key === '_') {
        takiGic();
    }else if(event.key === '+') {
        plus();
    }else if(event.key === '-') {
        minus();
    }else if(event.key === '*') {
        multiply();
    }else if(event.key === '/') {
        devide();
    }else if(event.key === '(') {
        leftbracket();
    }else if(event.key === ')') {
        rightbracket();
    }else if(event.key === '|') {
        mod();
    }else if(event.key === 'r') {
        squareRoot();
    }else if(event.key === '^') {
        deg();
    }else if(event.key === 'x'){
        fx();
    }else if(event.key === 'Delete'){
        cleanFnc();
    }else if(event.key === 'Enter'){
        runFx();
    }else if(event.key === '='){
        showResult();
    }


  });
















