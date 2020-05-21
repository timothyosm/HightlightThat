
Object.keys(localStorage).forEach(key => {
  var newRow=document.querySelector("body > table").insertRow();
  newRow.innerHTML = "<td>"+ localStorage[key] +"</td><td><input class='button button-outline' value = 'EDIT'></input></td>";
}
);
