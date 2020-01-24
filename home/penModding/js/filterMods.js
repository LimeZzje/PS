function searchMod(){

var mods = document.getElementsByClassName('modname');
var searchValue = document.getElementById("searchBar").value;

var listOfFindings = [];
document.getElementById('cardWrapper').innerHTML = '';


Array.prototype.forEach.call(mods, function(mod) {

    if(mod.textContent.toLowerCase().includes(searchValue.toLowerCase())){

    listOfFindings.push(mod.parentNode.parentNode.parentNode); 

/*        mod.parentNode.parentNode.parentNode.style.display = "";
    }else{
        mod.parentNode.parentNode.parentNode.style.display = "none"; */

    } 
  
});


for (var i; i<listOfFindings.length; i++){
  
  var count; 
  var cardGroup = document.createElement("div");
  cardGroup.className = "card-group";

while(count < 5){

  count++;
}

  document.getElementById("cardWrapper").appendChild(
    
    
    
    listOfFindings[i]);

}

;

    
}

function filterDC(){

var singleCap = Array.from(document.getElementsByClassName("sc"));
var writeable =  Array.from(document.getElementsByClassName("write"));
var penCategory = singleCap.concat(writeable);

var mods = document.getElementsByClassName(penCategory);

    Array.prototype.forEach.call(penCategory, function(mod) {

        if (mod.parentNode.parentNode.parentNode.style.display === "none") {
            mod.parentNode.parentNode.parentNode.style.display = "";
          } else {
            mod.parentNode.parentNode.parentNode.style.display = "none";
          } 

});

}

function filterSC(){

    var singleCap = Array.from(document.getElementsByClassName("dc"));
    var writeable =  Array.from(document.getElementsByClassName("write"));
    var penCategory = singleCap.concat(writeable);
    
    var mods = document.getElementsByClassName(penCategory);
    
        Array.prototype.forEach.call(penCategory, function(mod) {
    
            if (mod.parentNode.parentNode.parentNode.style.display === "none") {
                mod.parentNode.parentNode.parentNode.style.display = "";
              } else {
                mod.parentNode.parentNode.parentNode.style.display = "none";
              } 
    
    });
    
    }
    function filterWrite(){

        var singleCap = Array.from(document.getElementsByClassName("sc"));
        var writeable =  Array.from(document.getElementsByClassName("dc"));
        var penCategory = singleCap.concat(writeable);
        
        var mods = document.getElementsByClassName(penCategory);
        
            Array.prototype.forEach.call(penCategory, function(mod) {
        
                if (mod.parentNode.parentNode.parentNode.style.display === "none") {
                    mod.parentNode.parentNode.parentNode.style.display = "";
                  } else {
                    mod.parentNode.parentNode.parentNode.style.display = "none";
                  } 
        
        });
        
        }