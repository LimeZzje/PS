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
  console.log(trick);
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
  endPos: 23
},
{
  TrickName: "Sonic",
  anfPos: 23,
  endPos: 12
},
{
  TrickName: "Sonic",
  anfPos: 34,
  endPos: 23
},
{
  TrickName: "Sonic rev",
  anfPos: 23,
  endPos: 34
},
{
  TrickName: "Twisted Sonic rev",
  anfPos: 12,
  endPos: 23
},
{
  TrickName: "Twisted Sonic ",
  anfPos: 34,
  endPos: 23
},
{
  TrickName: "Twisted Sonic",
  anfPos: 23,
  endPos: 12
},
{
  TrickName: "Twisted Sonic rev",
  anfPos: 23,
  endPos: 34
},
{
  TrickName: "Pass",
  anfPos: 12,
  endPos: 23
},
{
  TrickName: "Pass ",
  anfPos: 34,
  endPos: 23
},
{
  TrickName: "Pass ",
  anfPos: 23,
  endPos: 34
},
{
  TrickName: "Pass ",
  anfPos: 23,
  endPos: 12
},
{
  TrickName: "Demons Sonic",
  anfPos: 34,
  endPos: 12
},
{
  TrickName: "Angels Sonic",
  anfPos: 12,
  endPos: 34,
},

// ++++++++++++++++++++++++++Palm Changes+++++++++++++++++++++++

//PD -> PN
{
  TrickName: "Neosoinc rev (Palm Normal)",
  anfPos: 12,
  endPos: 23,
  PalmDown: true,
  PalmNormal: false,
  PenPalm: true,
  PenBack: false,
},
{
  TrickName: "Pass rev (Palm Normal)",
  anfPos: 12,
  endPos: 23,
  PalmDown: true,
  PalmNormal: false,
  PenPalm: false,
  PenBack: true,
},
{
  TrickName: "Pass rev (Palm Normal)",
  anfPos: 23,
  endPos: 34,
  PalmDown: true,
  PalmNormal: false,
  PenPalm: false,
  PenBack: true,
},

//PN -> PD
{
  TrickName: "Pass (Palm Down)",
  anfPos: 34,
  endPos: 23,
  PalmDown: false,
  PalmNormal: true,
  PenPalm: true,
  PenBack: true,
},

{
  TrickName: "Pass (Palm Down)",
  anfPos: 23,
  endPos: 12,
  PalmDown: false,
  PalmNormal: true,
  PenPalm: true,
  PenBack: true,
},

{
  TrickName: "Charge rev -> Pass rev (Palm Down)",
  anfPos: 12,
  endPos: 23,
  PalmDown: false,
  PalmNormal: true,
  PenPalm: true,
  PenBack: true,
},

{
  TrickName: "Charge rev -> Pass rev (Palm Down)",
  anfPos: 23,
  endPos: 34,
  PalmDown: false,
  PalmNormal: true,
  PenPalm: true,
  PenBack: true,
},

];

var currentTrick;


for (var i = 0; i < 9; i++) {
  if (i == 0) {
    currentTrick = tricks[0];
    buildResult(currentTrick);
  }
  var findEndPos = tricks.find(function (element) {
    if (element.anfPos === currentTrick.endPos &&
      element.PalmNormal == currentTrick.PalmNormal || element.PalmDown === currentTrick.PalmDown &&
      element.PenBack === currentTrick.PenBack || element.PenPalm === currentTrick.PenPalm)
      return element;
    shuffle(tricks);
  });
  buildResult(findEndPos);
  currentTrick = findEndPos;
  /* if(currentTrick.endPos === tricks[i].anfPos){
         buildResult(tricks[i]);
         currentTrick = tricks[i];
       }else{
        console.log("geht nicht")
       }
   
     */

}


/*for(var i = 0; i< tricks.length; i++){
console.log(tricks[i]);

}
*/