Object.keys(localStorage).forEach((key) => {
  var newRow = document.querySelector("#table").insertRow();
  newRow.innerHTML =
    "<td><strong>" +
    key +
    "</strong></td><td><input style='float: right;'  class='button button-outline' value = 'EDIT' id=" +
    key +
    "  ></input>" +

    "</td>";


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
      "    <a href='browser_action.html'" +
      "      value='Delete'" +
      "      class='button button-outline'" +
      "      id='delete' type='delete'>Delete</a>" +
      "    </fieldset>" +
  
      "  </form>" +
      "</body>";

    document.querySelector("#saveEdit").addEventListener("click", saveList);
    document.querySelector("#delete").addEventListener("click", deleteList);

    console.log(key.value);

    function saveList() {
      let list = document.querySelector("#list").value;
      let colour = document.querySelector("#Colour").value;
      localStorage.setItem(key, JSON.stringify(colour + "," + list));
    }

    function deleteList(){
  
      let title = document.querySelector("#Title").innerText
      localStorage.removeItem(title);
      href='browser_action.html'
    }
  });
});

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
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
});
