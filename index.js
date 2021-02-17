const app = document.querySelector("#app");
const buttonsContainer = document.querySelector("#buttonsContainer");
let calWindow = document.querySelector("#calWindow");
let calWindowResult = document.querySelector("#calWindowResult");
const isOperator = /[x/+-]/,
  endsWithOperator = /[x+-/]$/,
  endsWithNegativeSign = /[x/+]-$/;
let currentOperator = "";  

const buttonsapp = [{id:"clear"
                    ,value:"C"
                    ,class:"operator"
                    }
                    ,{id:"divide"
                     ,value:"/"
                     ,class:"operator"
                    }
                      ,{id:"seven"
                      ,value:7
                      ,class:"natural"
                      }
                      ,{id:"eight"
                      ,value:8
                      ,class:"natural"
                      }
                      ,{id:"nine"
                    ,value:9
                    ,class:"natural"
                    }
                      ,{id:"multiply"
                      ,value:"x"
                      ,class:"operator"
                     }  
                      ,{id:"four"
                      ,value:4
                      ,class:"natural"
                      } 
                      ,{id:"five"
                      ,value:5
                      ,class:"natural"
                      } 
                      ,{id:"six"
                      ,value:6
                      ,class:"natural"
                      }  
                      ,{id:"subtract"
                     ,value:"-"
                     ,class:"operator"
                     } 
                     ,{id:"one"
                     ,value:1
                     ,class:"natural"
                     }  
                     ,{id:"two"
                     ,value:2
                     ,class:"natural"
                     } 
                     ,{id:"three"
                      ,value:3
                      ,class:"natural"
                      }
                      ,{id:"add"
                      ,value:"+"
                      ,class:"operator"
                      }  
                     ,{id:"zero"
                      ,value:0
                      ,class:"natural"
                      }
                     ,{id:"decimal"
                     ,value:"."
                     ,class:"operator"
                    }  
                    ,{id:"equals"
                    ,value:"="
                    ,class:"operator"
                    }
                     ]; 

                  
                     
window.addEventListener("load",environmentApp);

function environmentApp(){
  for(let i=0;i<buttonsapp.length;i++){
    let ebuttonapp = document.createElement("button");
    ebuttonapp.id = buttonsapp[i].id;
    ebuttonapp.innerText = buttonsapp[i].value;
    ebuttonapp.value = buttonsapp[i].value;
    ebuttonapp.classList.add(buttonsapp[i].class);
    ebuttonapp.addEventListener("click",clickButtonApp);
    buttonsContainer.appendChild(ebuttonapp);
  }  
}


function clickButtonApp(e){
 console.log("Entra clickButtonApp");
 console.log(e);
 console.log(e.target);
 console.log(e.target.value);
 switch (e.target.value) {
   case "+":
   add(e.target.value);
   break; 
   case "-":
    subtract();
   break; 
   case "x":
    multiply();
   break; 
   case "/":
    divide();
   break; 
   case "=":
    operate();
     break;
   case "C":
    clear();
    break;
   default:
    console.log("calWindow.value",calWindow.value);
    calWindow.value = calWindow.value+e.target.value;
    console.log("calWindow.value",calWindow.value);
    let arr = calWindow.value.split(isOperator);
    console.log("clickButtonApp",arr);
    if(arr.length>1){
      switch (currentOperator) {
        case "+":
          if(""===arr[0]){
            calWindowResult.value = Number.parseInt("-"+arr[1])+Number.parseInt(arr[2]);
          }else{
            calWindowResult.value = Number.parseInt(arr[0])+Number.parseInt(arr[1]);
          }
          break;
          case "-":
            console.log("Number.isNaN(arr[0])",Number.isNaN(arr[0]));
            if(""===arr[0]){
              if(arr.length==3){
                if(currentOperator==="-"){
                  calWindowResult.value = Number.parseInt("-"+arr[1])-Number.parseInt(arr[2]);
                }
              }else{
                calWindowResult.value = Number.parseInt("-"+arr[1]);
              }
            }else{
              calWindowResult.value = Number.parseInt(arr[0])-Number.parseInt(arr[1]);
            }
            break;  
            case "x":
              console.log("Number.isNaN(arr[0])",Number.isNaN(arr[0]));
              if(""===arr[0]){
                if(arr.length==3){
                  if(currentOperator==="*"){
                    calWindowResult.value = Number.parseInt("-"+arr[1])*Number.parseInt(arr[2]);
                  }
                }else{
                  calWindowResult.value = Number.parseInt("-"+arr[1]);
                }
              }else{
                calWindowResult.value = Number.parseInt(arr[0])*Number.parseInt(arr[1]);
              }
              break;    
              case "/":
                console.log("Number.isNaN(arr[0])",Number.isNaN(arr[0]));
                if(""===arr[0]){
                  if(arr.length==3){
                    if(currentOperator==="/"){
                      calWindowResult.value = Number.parseInt("-"+arr[1])/Number.parseInt(arr[2]);
                    }
                  }else{
                    calWindowResult.value = Number.parseInt("-"+arr[1]);
                  }
                }else{
                  calWindowResult.value = Number.parseInt(arr[0])/Number.parseInt(arr[1]);
                }
                break;      
        default:
          break;
      }
    }
    break;
 }
  
 console.log("Sale clickButtonApp");
}

function add(p){
  /** 
  calWindowResult.value = calWindow.value;
  let arr = calWindow.value.split(isOperator);
  console.log(arr);
  let arr2 = calWindow.value.split(endsWithOperator);
  console.log(arr2);
  **/
  calWindow.value = calWindow.value+"+";
  currentOperator = "+";
  let arr = calWindow.value.split(isOperator);
  console.log("add",arr);
  if(arr.length>2){
    calWindow.value = calWindowResult.value+currentOperator;
  }
}

function subtract(){
  calWindow.value = calWindow.value+"-";
  currentOperator = "-";
  let arr = calWindow.value.split(isOperator);
  console.log("subtract",arr);
  if(arr.length>2){
    calWindow.value = calWindowResult.value+currentOperator;
  }
}

function multiply(){
  calWindow.value = calWindow.value+"x";
  currentOperator = "x";
  let arr = calWindow.value.split(isOperator);
  console.log("multiply",arr);
  if(arr.length>2){
    calWindow.value = calWindowResult.value+currentOperator;
  }
}

function divide(){
  calWindow.value = calWindow.value+"/";
  currentOperator = "/";
  let arr = calWindow.value.split(isOperator);
  console.log("divide",arr);
  if(arr.length>2){
    calWindow.value = calWindowResult.value+currentOperator;
  }
}

function operate (){
  let arr = calWindow.value.split(isOperator);
  console.log(arr);
}

function clear(){
  calWindow.value = "";
  calWindowResult.value = "";
  currentOperator = "";
}