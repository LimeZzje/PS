$(function(){
    var treeView = $("#trickview").dxTreeView({ 
        items: tricks,
        width: 300,
        searchEnabled: true,
        onItemClick:function(e) {
            var item = e.itemData;
            if(item.name){
                window.open("https://www.youtube.com/results?search_query=" + item.name + "+Penspinning+Tutorial")
            }
        }
    }).dxTreeView("instance");

    $("#searchMode").dxSelectBox({
        items: ["contains", "startswith"],
        value: "contains",
        onValueChanged: function(data) {
            treeView.option("searchMode", data.value);
        }
    });
});

$(function(){
    var treeView = $("#linkview").dxTreeView({ 
        items: linkings,
        width: 300,
        searchEnabled: true,
        onItemClick:function(e) {
            var item = e.itemData;
            if(item.name){
                window.open("https://www.youtube.com/results?search_query=" + item.name )
            }
        }
    }).dxTreeView("instance");

    $("#searchMode").dxSelectBox({
        items: ["contains", "startswith"],
        value: "contains",
        onValueChanged: function(data) {
            treeView.option("searchMode", data.value);
        }
    });
});

function handleDisclaimerClick(){
    var disclaimer = document.getElementById("disclaimerUl");
    if(disclaimer.style.display === "block") {
       disclaimer.style.display = "none" ;
    }   else {
        disclaimer.style.display = "block";
    }
    

}