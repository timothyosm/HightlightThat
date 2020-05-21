document.querySelector("#save").addEventListener("click", saveList);



function saveList(){

    let title  = document.querySelector("#Title").value;
    let list = document.querySelector("#list").value;
    let colour = document.querySelector("#Colour").value;
  localStorage.setItem(title, JSON.stringify(colour + ',' + list));

}

