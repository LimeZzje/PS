function searchMod() {

  "use strict";


  var mods = document.getElementsByClassName('modname');
  var searchValue = document.getElementById("searchBar").value;

  var listOfFindings = [];


  Array.prototype.forEach.call(mods, function (mod) {

    if (mod.textContent.toLowerCase().includes(searchValue.toLowerCase())) {

      listOfFindings.push(mod.parentNode.parentNode.parentNode);

      /*        mod.parentNode.parentNode.parentNode.style.display = "";
          }else{
              mod.parentNode.parentNode.parentNode.style.display = "none"; */

    }

  });

  var cardWrapper = document.createElement("div");
  cardWrapper.id = "newCardWrapper";

  document.getElementById("cardWrapper").parentNode.append(cardWrapper);
  document.getElementById('cardWrapper').style.display = "none";

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";


  for (var i = 0; i < listOfFindings.length; i++) {
    cardGroup.appendChild(listOfFindings[i])
    if (cardGroup.childElementCount % 5 == 0 || i == listOfFindings.length - 1) {
      document.getElementById("newCardWrapper").appendChild(cardGroup)
      var cardGroup = document.createElement("div");
      cardGroup.className = "card-group";

    }
  }
}
/* obj.employees[1].firstName */
function createCards() {

  listOfMods = JSON.parse(penmods);

  listOfMods.mods.sort(function (a, b) {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  });


  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  for (var i = 0; i < listOfMods.mods.length; i++) {

    var card = document.createElement("div");
    card.className = "card";

    var link = document.createElement("a");
    link.setAttribute("href", listOfMods.mods[i].link);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var pName = document.createElement("p");
    pName.className = "card-text";
    pName.innerHTML = listOfMods.mods[i].name;

    var img = document.createElement("img");
    img.setAttribute("src", listOfMods.mods[i].pic);
    img.setAttribute("alt", "Card Image")

    var cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";

    var pText = document.createElement("p");
    pText.className = "card-text";
    pText.innerHTML = listOfMods.mods[i].text;

    cardGroup.appendChild(card)
      .appendChild(link)
      .appendChild(cardBody)
      .appendChild(pName)
      .parentNode.insertBefore(img, pName.nextSibling)
      .parentNode.insertBefore(cardBody2, img.nextSibling)
      .parentNode.insertBefore(pText, cardBody2.nextSibling);

    if (cardGroup.childElementCount % 5 == 0 || i == listOfMods.mods.length - 1) {

      document.getElementById("cards").appendChild(cardGroup);
      var cardGroup = document.createElement("div");
      cardGroup.className = "card-group";
    }
  }

}

function searchMods() {

  document.getElementById("cards").innerHTML = "";

  listOfMods = JSON.parse(penmods);
  var searchValue = document.getElementById("searchBar").value;

  if (searchValue === "") {

    listOfMods = JSON.parse(penmods);

    listOfMods.mods.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });

    searchValue = document.getElementById("searchBarMain").value;
  }

  var listOfFindings = [];
  Array.prototype.forEach.call(listOfMods.mods, function (mod) {
    if (mod.name.toLowerCase().includes(searchValue.toLowerCase())) {
      listOfFindings.push(mod);
    }
  });

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  for (var i = 0; i < listOfFindings.length; i++) {

    var card = document.createElement("div");
    card.className = "card";

    var link = document.createElement("a");
    link.setAttribute("href", listOfFindings[i].link);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var pName = document.createElement("p");
    pName.className = "card-text";
    pName.innerHTML = listOfFindings[i].name;

    var img = document.createElement("img");
    img.setAttribute("src", listOfFindings[i].pic);
    img.setAttribute("alt", "Card Image")

    var cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";

    var pText = document.createElement("p");
    pText.className = "card-text";
    pText.innerHTML = listOfFindings[i].text;

    cardGroup.appendChild(card)
      .appendChild(link)
      .appendChild(cardBody)
      .appendChild(pName)
      .parentNode.insertBefore(img, pName.nextSibling)
      .parentNode.insertBefore(cardBody2, img.nextSibling)
      .parentNode.insertBefore(pText, cardBody2.nextSibling);

    if (cardGroup.childElementCount % 5 == 0 || i == listOfFindings.length - 1) {

      document.getElementById("cards").appendChild(cardGroup);
      var cardGroup = document.createElement("div");
      cardGroup.className = "card-group";
    }
  }
}

function filterDC() {

  document.getElementById("cards").innerHTML = "";
  listOfMods = JSON.parse(penmods);

  var listOfFindings = [];
  Array.prototype.forEach.call(listOfMods.mods, function (mod) {
    if (mod.type === "dc") {
      listOfFindings.push(mod);

    }

    listOfFindings.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });

  });


  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  for (var i = 0; i < listOfFindings.length; i++) {

    var card = document.createElement("div");
    card.className = "card";

    var link = document.createElement("a");
    link.setAttribute("href", listOfFindings[i].link);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var pName = document.createElement("p");
    pName.className = "card-text";
    pName.innerHTML = listOfFindings[i].name;

    var img = document.createElement("img");
    img.setAttribute("src", listOfFindings[i].pic);
    img.setAttribute("alt", "Card Image")

    var cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";

    var pText = document.createElement("p");
    pText.className = "card-text";
    pText.innerHTML = listOfFindings[i].text;

    cardGroup.appendChild(card)
      .appendChild(link)
      .appendChild(cardBody)
      .appendChild(pName)
      .parentNode.insertBefore(img, pName.nextSibling)
      .parentNode.insertBefore(cardBody2, img.nextSibling)
      .parentNode.insertBefore(pText, cardBody2.nextSibling);

    if (cardGroup.childElementCount % 5 == 0 || i == listOfFindings.length - 1) {

      document.getElementById("cards").appendChild(cardGroup);
      var cardGroup = document.createElement("div");
      cardGroup.className = "card-group";
    }
  }


}

function filterSC() {

  document.getElementById("cards").innerHTML = "";
  listOfMods = JSON.parse(penmods);

  var listOfFindings = [];
  Array.prototype.forEach.call(listOfMods.mods, function (mod) {
    if (mod.type === "sc") {
      listOfFindings.push(mod);

    }

    listOfFindings.sort(function (a, b) {
      a = a.name.toLowerCase();
      b = b.name.toLowerCase();

      return a < b ? -1 : a > b ? 1 : 0;
    });

  });


  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  for (var i = 0; i < listOfFindings.length; i++) {

    var card = document.createElement("div");
    card.className = "card";

    var link = document.createElement("a");
    link.setAttribute("href", listOfFindings[i].link);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var pName = document.createElement("p");
    pName.className = "card-text";
    pName.innerHTML = listOfFindings[i].name;

    var img = document.createElement("img");
    img.setAttribute("src", listOfFindings[i].pic);
    img.setAttribute("alt", "Card Image")

    var cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";

    var pText = document.createElement("p");
    pText.className = "card-text";
    pText.innerHTML = listOfFindings[i].text;

    cardGroup.appendChild(card)
      .appendChild(link)
      .appendChild(cardBody)
      .appendChild(pName)
      .parentNode.insertBefore(img, pName.nextSibling)
      .parentNode.insertBefore(cardBody2, img.nextSibling)
      .parentNode.insertBefore(pText, cardBody2.nextSibling);

    if (cardGroup.childElementCount % 5 == 0 || i == listOfFindings.length - 1) {

      document.getElementById("cards").appendChild(cardGroup);
      var cardGroup = document.createElement("div");
      cardGroup.className = "card-group";
    }
  }

}

function showAllMods() {

  document.getElementById("cards").innerHTML = "";


  listOfMods = JSON.parse(penmods);

  listOfMods.mods.sort(function (a, b) {
    a = a.name.toLowerCase();
    b = b.name.toLowerCase();

    return a < b ? -1 : a > b ? 1 : 0;
  });

  var listOfFindings = [];

  listOfFindings = listOfMods;

  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";
  for (var i = 0; i < listOfFindings.mods.length; i++) {

    var card = document.createElement("div");
    card.className = "card";

    var link = document.createElement("a");
    link.setAttribute("href", listOfFindings.mods[i].link);

    var cardBody = document.createElement("div");
    cardBody.className = "card-body";

    var pName = document.createElement("p");
    pName.className = "card-text";
    pName.innerHTML = listOfFindings.mods[i].name;

    var img = document.createElement("img");
    img.setAttribute("src", listOfFindings.mods[i].pic);
    img.setAttribute("alt", "Card Image")

    var cardBody2 = document.createElement("div");
    cardBody2.className = "card-body";

    var pText = document.createElement("p");
    pText.className = "card-text";
    pText.innerHTML = listOfFindings.mods[i].text;

    cardGroup.appendChild(card)
      .appendChild(link)
      .appendChild(cardBody)
      .appendChild(pName)
      .parentNode.insertBefore(img, pName.nextSibling)
      .parentNode.insertBefore(cardBody2, img.nextSibling)
      .parentNode.insertBefore(pText, cardBody2.nextSibling);

    if (cardGroup.childElementCount % 5 == 0 || i == listOfFindings.mods.length - 1) {

      document.getElementById("cards").appendChild(cardGroup);
      var cardGroup = document.createElement("div");
      cardGroup.className = "card-group";
    }
  }

}