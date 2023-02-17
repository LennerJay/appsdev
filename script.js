function autoComplete(inputEl, data = []){
    var index = -1;
    var liSelected;
    inputEl.addEventListener("keyup", function(e){
        let li = document.querySelectorAll("li");
        if(e.which == 40){//arrow down
            index++;
            if(liSelected){
            
            }
            return;
        }
        else if(e.which == 38){ //arrow up
            index--;
            li[index].classList.remove("selected")
            console.log('arrowUp')
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
                li.addEventListener('click',function(e){
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
        
    });

}


let inputEl = document.querySelector("#input-autocomplete");
let data = ["Red", "Orange", "Blue", "Pink"];
autoComplete(inputEl, data);


function insertAfter(newNode, refNode ){

    refNode.parentNode.insertBefore(newNode, refNode.nextSibling);

}

