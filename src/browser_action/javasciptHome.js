let listArray = [];

Object.keys(localStorage).forEach((key) => {
  var newRow = document.querySelector("#table").insertRow();
  newRow.innerHTML =
    "<td><strong>" +
    key +
    "</strong></td><td><input class='button button-outline' value = 'EDIT' id=" +
    key +
    "  ></input>" +
    "    <td>" +
    "       <a value='Add New'" +
    "href='browser_action.html'" +
    "           class='button button-outline'" +
    "           id='Delete'>Delete</a>" +
    "</td>" +
    "</td>";
  listArray.push(localStorage[key]);
  console.log(listArray);
  document.querySelector("#Delete").addEventListener("click", deleteItem);

  function deleteItem() {



    var x = confirm("Are you sure you want to delete?");
    if (x)
    localStorage.removeItem(key);
    else
      return false;
  }
  document.getElementById(key).addEventListener("click", function () {
    let editClicked = localStorage.getItem(key);
    let array = editClicked.replace(/['"]+/g, "").split(",").slice(1);

    document.querySelector("body").innerHTML =
      "  <body>" +
      "  <form>" +
      "    <fieldset>" +
      '      <h1 type="text" placeholder="" id="Title" value="">' +
      key +
      " </h1>" +
      '      <label for="Colour">Colour</label>' +
      '      <select id="Colour">' +
      '         <option id="blue" value="blue">Blue</option>' +
      '        <option id="green" value="green">Green</option>' +
      '        <option id="yellow" value="yellow">Yellow</option>' +
      '        <option id="red" value="red">Red</option>' +
      '        <option id="pink" value="pink">Pink</option>' +
      '        <option id="blueGradient" value="blueGradient">Blue Gradient</option>' +
      "      </select>" +
      '      <label for="list">List</label>' +
      "      <p>Put a comma between items.</p>" +
      '      <textarea placeholder="Google, Facebook, Yahoo" id="list">' +
      array +
      "</textarea>" +
      '      <div class="float-right"></div>' +
      '      <a href="browser_action.html"' +
      '        value="Add New"' +
      '        class="button button-outline"' +
      '        id="saveEdit"' +
      "        >Save</a>" +
      "    </fieldset>" +
      "  </form>" +
      "</body>";

    document.querySelector("#saveEdit").addEventListener("click", saveList);

    console.log(key.value);

    function saveList() {
      let list = document.querySelector("#list").value;
      let colour = document.querySelector("#Colour").value;
      localStorage.setItem(key, JSON.stringify(colour + "," + list));
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  popup();

  function popup() {
    //   chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
    //     var activeTab = tabs[0];
    //     for (i = 0; i < cars.length; i++) {
    //       chrome.tabs.sendMessage(activeTab.id, { list: listArray });
    //     }
    //   });

    Object.keys(localStorage).forEach((key) => {
      chrome.tabs.query({ currentWindow: true, active: true }, function (tabs) {
        var activeTab = tabs[0];
        chrome.tabs.sendMessage(activeTab.id, { list: localStorage[key] });
      });
    });
  }

  setInterval(popup(), 3000);
});
