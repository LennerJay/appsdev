let inputEl = document.querySelector("#input-autocomplete");
let data = ["Red", "Orange", "Blue", "Pink","Rainbow","pinkish","blueshet "];
autoComplete(inputEl, data);
var index = 0;

function autoComplete(inputEl, data = []){

    inputEl.addEventListener("keyup",function(e){
        const li = document.querySelectorAll("li");
        if(e.which == 40){//arrowdown
            addActive(li)
            console.log(index);
            index++;
            return;
        }else if(e.which == 38){//arrowup
            console.log(index);
            index--;
            addActive(li)
           return;
        }else if(e.which == 13){//enter
            inputEl.value = li[0].textContent;
            document.querySelector("#list-autocomplete").remove();
            return;
        }else if(e.which == 8){
            index = 0;
            console.log(index);
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

function removeActive(li) {
    for (var i = 0; i < li.length; i++) {
        li[i].classList.remove("selected");
    }
}
 function addActive(li) {
    if (!li) return false;
    removeActive(li);
    if (index >= li.length) index = 0;
    if (index < 0) index = (li.length - 1);
    /*add class "autocomplete-active":*/
    li[index].classList.add("selected");
  }