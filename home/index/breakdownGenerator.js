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

            listOfTricks =  buildListOfTricks(listOfTricks, factorOfIterations, intermediateTricks)

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
    for (var i = 0; i < 5; i++) {
        shuffle(listOfTricks);

        if (i == 0) {
            currentTrick = listOfTricks[0];
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

        if (currentTrick.changeRotation) {
            currentRotationClockwise = !currentTrick.clockwise;
        } else {
            currentRotationClockwise = currentTrick.clockwise;
        }

        var findNextTrick = listOfTricks.find(function (nextTrick) {

            if (currentTrick.endPos === nextTrick.anfPos &&
                currentRotationClockwise === nextTrick.clockwise &&
                (currentPenBackhand === nextTrick.PenBack || !currentPenBackhand === nextTrick.PenPalm)

            ) {

                return nextTrick;
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