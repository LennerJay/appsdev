let inputEl = document.querySelector("#input-autocomplete");
let data = ["Red", "Orange", "Blue", "Pink","Rainbow","pinkish","blueshet "];
autoComplete(inputEl, data);


function autoComplete(inputEl, data = []){
    var index = -1;
     var liSelected;
    inputEl.addEventListener("keyup",function(e){
        const li = document.querySelectorAll("li");
        let tmp = (li.length - 1 == index) ??  true;
        if(e.which == 40){//arrowdown
            if(index < li.length){
                if(liSelected){
                    li[index].classList.remove(liSelected);
                    index++;   
                    li[index].classList.add(liSelected);
                }else{
                    liSelected = "selected"
                    index++;  
                    li[index].classList.add(liSelected);
                }
                return;
            }else{
                index = 0;
                li[index].classList.add(liSelected);
            }
            return;
            
        }else if(e.which == 38){//arrowup
            index--
            li[index].className ="selected";
           return;
        }else if(e.which == 13){//enter
            inputEl.value = li[0].textContent;
            document.querySelector("#list-autocomplete").remove();
            return;
        }
        
        let searchedData = data.filter(item => item.toLowerCase().indexOf(inputEl.value.toLowerCase()) >= 0 && inputEl.value != "");
        if(searchedData.length > 0){
            if(document.querySelector("#list-autocomplete")){
                document.querySelector("#list-autocomplete").remove();
            }  
            
            let ul = document.createElement("UL");
            ul.setAttribute("id", "list-autocomplete");
            
            searchedData.forEach((item) =>{
                let li = document.createElement("LI");
                li.textContent = item;
                ul.appendChild(li);
                li.addEventListener('click',function(){
                    inputEl.value = li.textContent;
                    document.querySelector("#list-autocomplete").remove();
                })


            });
            insertAfter(ul, inputEl);
    
        }
        else{
            
            if(document.querySelector("#list-autocomplete")){
                document.querySelector("#list-autocomplete").remove();
            }
            
        }

    })

}

function insertAfter(newNode, refNode ){
    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);
}

