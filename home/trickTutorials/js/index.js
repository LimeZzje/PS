$(function(){
    var treeView = $("#treeview").dxTreeView({ 
        items:treeViewData,
        width: 500,
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