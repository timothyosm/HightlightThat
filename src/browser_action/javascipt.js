document.querySelector("#save").addEventListener("click", saveList);



function saveList(){

    var title = document.querySelector("#Title").value;
    var list = document.querySelector("#list").value;
  localStorage.setItem(title, JSON.stringify(list));

}


