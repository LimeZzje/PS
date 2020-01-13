function searchMod(){

var mods = document.getElementsByClassName('modname');
var searchValue = document.getElementById("searchBar").value;

Array.prototype.forEach.call(mods, function(mod) {

    if(mod.textContent.toLowerCase().includes(searchValue.toLowerCase())){
        mod.parentNode.parentNode.parentNode.style.display = "";
    }else{
        mod.parentNode.parentNode.parentNode.style.display = "none";
    }
});

    
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