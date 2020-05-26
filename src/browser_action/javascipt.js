document.querySelector("#save").addEventListener("click", saveList);



function saveList(){

    let title  = document.querySelector("#Title").value;
    if (title != ""){
      let list = document.querySelector("#list").value;
      let colour = document.querySelector("#Colour").value;
    localStorage.setItem(title.replace(/\s/g, ''), JSON.stringify(colour + ',' + list));
  



    } else {
      document.querySelector("#alerts").innerHTML = "Enter A Title";
    }

}

