function shuffle(a) {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        x = a[i];
        a[i] = a[j];
        a[j] = x;
    }
    return a;
}

function buildResult(trick) {
    var mydiv = document.getElementById("breakdown");

    mydiv.appendChild(document.createTextNode(trick.TrickName + " " + trick.anfPos + "-" + trick.endPos + " > "));
}
/*
{
TrickName: 
anfPos:
endPos:
},
*/
var tricks = [{
        TrickName: "Sonic rev",
        anfPos: 12,
        endPos: 23,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: false,
},
    {
        TrickName: "Sonic",
        anfPos: 23,
        endPos: 12,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Sonic",
        anfPos: 34,
        endPos: 23,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Sonic rev",
        anfPos: 23,
        endPos: 34,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: false,
},
    {
        TrickName: "Twisted Sonic rev",
        anfPos: 12,
        endPos: 23,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: false,
},
    {
        TrickName: "Twisted Sonic ",
        anfPos: 34,
        endPos: 23,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Twisted Sonic",
        anfPos: 23,
        endPos: 12,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Twisted Sonic rev",
        anfPos: 23,
        endPos: 34,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: false,
},
    {
        TrickName: "Pass",
        anfPos: 12,
        endPos: 23,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Pass ",
        anfPos: 34,
        endPos: 23,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Pass ",
        anfPos: 23,
        endPos: 34,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Pass ",
        anfPos: 23,
        endPos: 12,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Demons Sonic",
        anfPos: 34,
        endPos: 12,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},
    {
        TrickName: "Angels Sonic",
        anfPos: 12,
        endPos: 34,
        PalmDown: true,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: false,
},

// ++++++++++++++++++++++++++Palm Changes+++++++++++++++++++++++

//PD -> PN

    {
        TrickName: "(Palm Normal) Neosoinc rev ",
        anfPos: 12,
        endPos: 23,
        PalmDown: true,
        PalmNormal: false,
        PenPalm: true,
        PenBack: false,
        clockwise: false,
},
    {
        TrickName: "(Palm Normal) Pass rev ",
        anfPos: 12,
        endPos: 23,
        PalmDown: true,
        PalmNormal: false,
        PenPalm: false,
        PenBack: true,
        clockwise: false,
},
    {
        TrickName: "(Palm Normal) Pass rev",
        anfPos: 23,
        endPos: 34,
        PalmDown: true,
        PalmNormal: false,
        PenPalm: false,
        PenBack: true,
        clockwise: false,
},

//PN -> PD
    {
        TrickName: "(Palm Down) Pass",
        anfPos: 34,
        endPos: 23,
        PalmDown: false,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},

    {
        TrickName: "(Palm Down) Pass",
        anfPos: 23,
        endPos: 12,
        PalmDown: false,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},

    {
        TrickName: "(Palm Down) Charge rev -> Pass rev",
        anfPos: 12,
        endPos: 23,
        PalmDown: false,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},

    {
        TrickName: "(Palm Down) Charge rev -> Pass rev",
        anfPos: 23,
        endPos: 34,
        PalmDown: false,
        PalmNormal: true,
        PenPalm: true,
        PenBack: true,
        clockwise: true,
},

];

function generateBreakdown() {
    document.getElementById("breakdown").innerHTML = "";

    var currentTrick;
    for (var i = 0; i < 5; i++) {
        shuffle(tricks);
        if (i == 0) {
            currentTrick = tricks[0];
            buildResult(currentTrick);
        }
        var findNextTrick = tricks.find(function (element) {
            if (element.anfPos === currentTrick.endPos &&
                element.clockwise === currentTrick.clockwise 

            )
                return element;
        });

        shuffle(tricks);
        buildResult(findNextTrick);
        currentTrick = findNextTrick;
    }
}




/* if(currentTrick.endPos === tricks[i].anfPos){
       buildResult(tricks[i]);
       currentTrick = tricks[i];
     }else{
      console.log("geht nicht")
     }
 
 &&
    element.PalmNormal == currentTrick.PalmNormal || element.PalmDown === currentTrick.PalmDown &&
    element.PenBack === currentTrick.PenBack || element.PenPalm === currentTrick.PenPalm
   */




//for(var i = 0; i< tricks.length; i++){
//console.log(tricks[i]);

//    document.getElementById("breakdown").innerHTML = trick.TrickName + " " + trick.anfPos + "-" + trick.endPos + " > ";
