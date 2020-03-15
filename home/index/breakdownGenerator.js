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

function generateBreakdown() {
    document.getElementById("breakdown").innerHTML = "";

    var currentPenBackhand;
    var currentPD;

    var currentTrick;
    for (var i = 0; i < 5; i++) {
        shuffle(tricks);

        if (i == 0) {
            currentTrick = tricks[0];
            buildResult(currentTrick);
            if (currentTrick.PenBack) {
                currentPenBackhand = true;
            } else {
                currentPenBackhand = false;
            }
        }

        if (currentTrick.diffEndPos) {
            if (currentPenBackhand) {
                currentPenBackhand = false;
            } else {
                currentPenBackhand = true
            }
        }

        var findNextTrick = tricks.find(function (nextTrick) {

            if (currentTrick.endPos === nextTrick.anfPos &&
                currentTrick.clockwise === nextTrick.clockwise &&
                ( currentPenBackhand === nextTrick.PenBack || !currentPenBackhand === nextTrick.PenPalm )
            ) {

                return nextTrick;
            }

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