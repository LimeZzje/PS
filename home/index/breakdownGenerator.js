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

function buildResult(trick, needsTa, needsPalmNotation) {
    var mydiv = document.getElementById("breakdown");

    if (needsTa) {
        mydiv.appendChild(document.createTextNode("TA > " + trick.TrickName + " " + trick.anfPos + "-" + trick.endPos + " > "));
    } else if (trick.hybrid && !needsPalmNotation) {
        mydiv.appendChild(document.createTextNode(trick.TrickName + " " + " > "));
    } else if (trick.hybrid && needsPalmNotation) {
        mydiv.appendChild(document.createTextNode("(PS) " + trick.TrickName + " " + " > "));

    } else if (!trick.hyrbid && needsPalmNotation) {
        mydiv.appendChild(document.createTextNode("(PS) " + trick.TrickName + " " + trick.anfPos + "-" + trick.endPos + " > "));

    } else {
        mydiv.appendChild(document.createTextNode(trick.TrickName + " " + trick.anfPos + "-" + trick.endPos + " > "));

    }
}

function generateFactorOfIterations(numOfBaseTricks, numOfPrioTricks) {

    return Math.floor((numOfBaseTricks / 10 * 100 - numOfBaseTricks) / numOfPrioTricks);
}

function buildListOfTricks(listOfTricks, factor, prioTrickList) {

    var returningList = listOfTricks;

    for (var i = 0; i < factor; i++) {

        returningList = returningList.concat(prioTrickList);
    };

    return returningList;

}

function generateBreakdown(difficulty) {
    document.getElementById("breakdown").innerHTML = "";

    var currentPenBackhand;
    var currentRotationClockwise;
    var currentPD;

    var listOfTricks;
    var factorOfIterations;

    factorOfIterations = 0;

    switch (difficulty.value) {
        case "beginner":
            listOfTricks = beginnerTricks;
            break;

        case "intermediate":
            listOfTricks = beginnerTricks;
            var numOfBaseTricks = beginnerTricks.length;
            var numOfPrioTricks = intermediateTricks.length;

            var factorOfIterations = generateFactorOfIterations(numOfBaseTricks, numOfPrioTricks);

            listOfTricks = buildListOfTricks(listOfTricks, factorOfIterations, intermediateTricks)

            break;

        case "advanced":
            listOfTricks = beginnerTricks.concat(intermediateTricks);
            var numOfBaseTricks = beginnerTricks.length + intermediateTricks.length;
            var numOfPrioTricks = advancedTricks.length;

            var factorOfIterations = generateFactorOfIterations(numOfBaseTricks, numOfPrioTricks);
            listOfTricks = buildListOfTricks(listOfTricks, factorOfIterations, advancedTricks)

            break;

        case "expert":
            listOfTricks = beginnerTricks.concat(intermediateTricks, advancedTricks);

            var numOfBaseTricks = beginnerTricks.length + intermediateTricks.length + advancedTricks.length;
            var numOfPrioTricks = expertTricks.length;

            var factorOfIterations = generateFactorOfIterations(numOfBaseTricks, numOfPrioTricks);
            listOfTricks = buildListOfTricks(listOfTricks, factorOfIterations, expertTricks)

            break;
        default:

            listOfTricks = beginnerTricks.concat(intermediateTricks, advancedTricks, expertTricks);
    };

    var currentTrick;
    var sizeofBD = document.getElementById("bdSize").value;

    if (sizeofBD == "-1") {
        sizeofBD = 0;
    }
    if (sizeofBD > 50) {
        sizeofBD = 0;
    }

    for (var i = 0; i < sizeofBD -1; i++) {
        shuffle(listOfTricks);

        if (i == 0) {
            currentTrick = listOfTricks[0];

            if (currentTrick.needsTA || currentTrick.needsTA === null) {
                buildResult(currentTrick, true, false);
            } else if (currentTrick.PalmNormal && currentTrick.PalmDown) {
                buildResult(currentTrick, false, true);
            } else {
                buildResult(currentTrick);
            }
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

        if (currentTrick.changeRotation) {
            currentRotationClockwise = !currentTrick.clockwise;
        } else {
            currentRotationClockwise = currentTrick.clockwise;
        }

        var findNextTrick = listOfTricks.find(function (nextTrick) {


            if (nextTrick.TrickName.startsWith("(PS)")) {
                nextTrick.TrickName = nextTrick.TrickName.substring(5);
            }

            if (currentTrick.endPos === nextTrick.anfPos &&
                currentRotationClockwise === nextTrick.clockwise &&
                (currentPenBackhand === nextTrick.PenBack || !currentPenBackhand === nextTrick.PenPalm)) {
                if (nextTrick.TrickName === currentTrick.TrickName && currentTrick.anfPos === nextTrick.anfPos) {
                    return;
                }
                if (currentTrick.PalmDown && !currentTrick.PalmNormal && nextTrick.PalmNormal) {

                    nextTrick.TrickName = "(PS) " + nextTrick.TrickName;
                    return nextTrick;
                } else {
                    return nextTrick;
                }
            }
        });

        shuffle(listOfTricks);
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