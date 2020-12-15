const log = console.log;
log('log is good for SUDOKU');

let board = document.getElementById('board');
let openPage = document.getElementById('openPage');
let registerForm = document.getElementById('registerForm');
let difficultyPage = document.getElementById('difficultyPage');
let main = document.getElementById('main');
let music = document.getElementById("music");
let musicOn = document.getElementById("musicOn");
let musicOff = document.getElementById("musicOff");
let photoSelectNav = document.getElementById('photoSelectNav');
let container_paragraph = document.getElementById('container_paragraph');
let menuBtn = document.getElementById('menuBtn');
let AboutTheGameSpanText = document.getElementById('AboutTheGameSpanText');
let ChangeBackgroundSpanText = document.getElementById('ChangeBackgroundSpanText');
let welcomeSpan = document.getElementById('welcomeSpan');
let welcomePlayerNameSpan = document.getElementById('welcomePlayerNameSpan');
let goodLuck = document.getElementById('goodLuck');

let userNameFinal = '';
let levelDifficulty = 3;
let status = 1;
let selectBgClick = false;
let AboutTheGameClick = false;
let missingCol = false;

// ----------  NAV BAR  ---------- //

function soundOn() {

    music.play();
    musicOn.classList.remove('hide');
    musicOff.classList.add('hide');
}

function soundOff() {

    music.pause();
    musicOn.classList.add('hide');
    musicOff.classList.remove('hide');
}

// ----------  function menu  ---------- //

function menu() {

    if (menuBtn.style.transform == "rotate(90deg)") { // when closing menu 

        menuBtn.style.transform = "rotate(180deg)";

        AboutTheGameSpanText.classList.add('hide');
        ChangeBackgroundSpanText.classList.add('hide');
        photoSelectNav.classList.add('hide');
        container_paragraph.classList.add('hide');

        AboutTheGameClick = false;
        selectBgClick = false;

        if (status == 1) {

            openPage.classList.remove('hide');

        } else if (status == 2) {

            difficultyPage.classList.remove('hide');

        } else if (status == 3) {

            main.classList.remove('hide');
        }

    } else { // when opening menu 

        menuBtn.style.transform = "rotate(90deg)";
        AboutTheGameSpanText.classList.remove('hide');
        ChangeBackgroundSpanText.classList.remove('hide');
    }
}

// ----------  ChangeBackground  ---------- //

ChangeBackgroundSpanText.addEventListener('click', e => {

    e.preventDefault();

    if (selectBgClick == false) { // open bgs to select / push the change bg option

        photoSelectNav.classList.remove('hide');
        container_paragraph.classList.add('hide');

        selectBgClick = true;
        AboutTheGameClick = false;

        if (status == 1) {

            openPage.classList.remove('hide');

        } else if (status == 2) {

            difficultyPage.classList.remove('hide');

        } else if (status == 3) {

            main.classList.remove('hide');
        }

    } else { // close bgs to select / push to close change bg option

        photoSelectNav.classList.add('hide');
        selectBgClick = false;
        AboutTheGameClick = false
    }
});

// ----------  AboutTheGameSpanText  ---------- //

AboutTheGameSpanText.addEventListener('click', e => { // open about for read / push the about game option

    e.preventDefault();

    if (AboutTheGameClick == false) {

        photoSelectNav.classList.add('hide');
        container_paragraph.classList.remove('hide');

        AboutTheGameClick = true;
        selectBgClick = false;

        if (status == 1) {

            openPage.classList.add('hide');

        } else if (status == 2) {

            difficultyPage.classList.add('hide');

        } else if (status == 3) {

            main.classList.add('hide');
        }

    } else { // close about for read / push the about game option

        container_paragraph.classList.add('hide');
        selectBgClick = false;
        AboutTheGameClick = false;

        if (status == 1) {

            openPage.classList.remove('hide');

        } else if (status == 2) {

            difficultyPage.classList.remove('hide');

        } else if (status == 3) {

            main.classList.remove('hide');
        }
    }
});

// ----------  photoSelectNav  ---------- //

photoSelectNav.addEventListener('click', e => {

    e.preventDefault();

    let lastClassBoardClassList = board.classList[9];
    board.classList.remove(lastClassBoardClassList);

    if (e.target == bgo1) {

        board.classList.add('bgo1C');

    } else if (e.target == bgo2) {

        board.classList.add('bgo2C');

    } else if (e.target == bgo3) {

        board.classList.add('bgo3C');

    } else if (e.target == bgo4) {

        board.classList.add('bgo4C');

    } else if (e.target == bgo5) {

        board.classList.add('bgo5C');
    }

    menuBtn.style.transform = "rotate(180deg)";
    AboutTheGameSpanText.classList.add('hide');
    ChangeBackgroundSpanText.classList.add('hide');
    photoSelectNav.classList.add('hide');
    selectBgClick = false;
});

// ----- OPEN PAGE ----- //

registerForm.addEventListener('submit', e => {

    e.preventDefault();

    let userNameInpDiv = document.getElementById('userNameInput');
    let passwordInpDiv = document.getElementById('passwordInput');
    let userName = document.getElementById('userNameInput').value;
    let password = document.getElementById('passwordInput').value;
    let errorMsgUserName = document.getElementById('errorMsgUserName');
    let errorMsgPassword = document.getElementById('errorMsgPassword');
    let validUserName = false;
    let validPassword = false;

    if (userName == 'abcd') {

        log('userName good - continue');
        validUserName = true;
        document.getElementById('userNameInput').value = '';
        errorMsgUserName.innerHTML = 'good!';
        userNameInpDiv.style.backgroundColor = 'rgb(91, 248, 85)';
        errorMsgUserName.style.color = 'green';
        userNameFinal = userName;

    } else {

        log('user name is not valid');
        validUserName = false;
        document.getElementById('userNameInput').value = '';
        errorMsgUserName.innerHTML = 'user name is not valid';
        userNameInpDiv.style.backgroundColor = 'rgb(220, 90, 0)';
        errorMsgUserName.style.color = 'red';
    }

    if (password == '1234') {

        log('password is good - continue');
        validPassword = true;
        document.getElementById('passwordInput').value = '';
        errorMsgPassword.innerHTML = 'good!';
        errorMsgPassword.style.color = 'green';
        passwordInpDiv.style.backgroundColor = 'rgb(91, 248, 85)';

    } else {

        log('password is not valid');
        validPassword = false;
        document.getElementById('passwordInput').value = '';
        errorMsgPassword.innerHTML = 'incorrect password!';
        errorMsgPassword.style.color = 'red';
        passwordInpDiv.style.backgroundColor = 'rgb(220, 90, 0)';
    }

    if (validUserName == true && validPassword == true) {

        log('you logged in');
        status = 2;
        openPage.classList.add('hide');
        difficultyPage.classList.remove('hide');
        difficultyPageFunc();
    }
});

// ----- DIFFICULTY PAGE ----- //

function difficultyPageFunc() {

    let welcomePlayerNameSpan = document.getElementById('welcomePlayerNameSpan');
    welcomePlayerNameSpan.innerHTML = `Welcome ${userNameFinal}`;

    document.addEventListener('click', e => { //if event click on one of the level difficulty divs

        e.preventDefault(); //preventDefault

        if (e.target.innerText == 'Easy') {

            status = 3;
            levelDifficulty = 60;
            difficultyPage.classList.add('hide');
            main.classList.remove('hide');
            newGameFunction();

        } else if (e.target.innerText == 'Medium') {

            status = 3;
            levelDifficulty = 40;
            difficultyPage.classList.add('hide');
            main.classList.remove('hide');
            newGameFunction();

        } else if (e.target.innerText == 'Hard') {

            status = 3;
            levelDifficulty = 20;
            difficultyPage.classList.add('hide');
            main.classList.remove('hide');
            newGameFunction();
        }
    });
}

// ----- CREATING ELEMENTS && CLICK EVENTS ----- //

// circles creates && click events on circles //

function createGame() {

    let gameBoard = document.getElementById('gameBoard'); //calling for gameBoard
    let circlesDiv = document.getElementById('circlesDivID'); //calling for circlesDiv

    for (let i = 1; i < 10; i++) { //create loop for 9 circles

        let circle = document.createElement('div'); //set each one as div
        circle.setAttribute('class', `circle${i}C circles hover d-flex justify-content-center align-items-center`); //settings each circle
        circlesDiv.appendChild(circle); //paste circles to circlesDiv
        circle.innerHTML = i; //insert numText to each circle

        circle.addEventListener('click', e => { //if event click on one of the circles

            e.preventDefault(); //preventDefault

            let target = document.querySelector('.target') //check if any targetClassName exsist

            if (target) { //if exsist

                target.innerHTML = i; //insert numText to target
                target.classList.remove('target'); //remove targetClassName from target
                target.classList.add('hover'); //add back hover to target
            }
        });
    }

    // game board creates && click events on cols //

    for (let i = 1; i < 10; i++) { //create loop for 9 rows

        let row = document.createElement('div'); //set each one as div
        row.setAttribute('class', `row${i}C w-100 row rowl d-flex justify-content-center align-items-center m-0 p-0`); //settings each row
        gameBoard.appendChild(row); //paste each row to gameBoard

        for (let j = 1; j < 10; j++) { //create loop for 9 cols

            let col = document.createElement('div'); //set each one as div
            col.setAttribute('class', `r${i}s${j} m-0 p-0 cols hover d-flex justify-content-center align-items-center`); //settings each col
            row.appendChild(col); //paste each col to row

            col.addEventListener('click', e => { //if event click on one of the cols

                e.preventDefault(); //preventDefault

                let previosColTarget = document.querySelector('.target') //check if any targetClassName exsist

                if (previosColTarget) { //if exsist any col with targetClassName

                    previosColTarget.classList.remove('target'); // we remove the targetClassName
                    previosColTarget.classList.add('hover'); //add hover 

                }

                col.classList.add('target'); //add to current col targetClassName
                col.classList.remove('hover'); //remove from current col targetClassName

                let previosColSet = document.querySelectorAll('.set') //check if any setClassName exsist

                if (previosColSet) { //if exsist any col with setClassName

                    for (let i = 0; i < previosColSet.length; i++) {

                        previosColSet[i].classList.remove('target'); // we remove the targetClassName from any col with setClassName
                    }
                }
            });
        }
    }
}

createGame(); //fire one time only

// ----- NEW GAME FUNCTION ----- //

function newGameFunction(mat) {

    goodLuck.innerHTML = 'GOOD LUCK!';
    goodLuck.style.color = 'white';

    let allColsDelete = document.querySelectorAll('.cols') //check if any colsClassName exsist

    for (let i = 0; i < allColsDelete.length; i++) { //create loop all colsClassName 

        allColsDelete[i].innerHTML = null; //if exsist insert nullText to target
        allColsDelete[i].classList.remove('rbg');
        allColsDelete[i].classList.remove('gbg');
    }

    let allSetsDelete = document.querySelectorAll('.set') //check if any setClassName exsist

    for (let i = 0; i < allSetsDelete.length; i++) { //create loop for all setClassName

        allSetsDelete[i].classList.remove('set'); //remove setClassName from target
        allSetsDelete[i].classList.add('hover'); //add back hover to target
    }

    let allTargetsDelete = document.querySelectorAll('.target') //check if any targetClassName exsist

    for (let i = 0; i < allTargetsDelete.length; i++) { //create loop for all targetClassName

        allTargetsDelete[i].classList.remove('target'); //remove targetClassName from target
    }

    // random pick of sudoku board //

    let suBoardRandomNum = Math.floor((Math.random() * 4 - 2) + 3); //random num for choosing sudoku board

    // log(suBoardRandomNum); //GOOD! 1/2/3/4

    if (suBoardRandomNum == 1) {

        mat = suBoard1;

    } else if (suBoardRandomNum == 2) {

        mat = suBoard2;

    } else if (suBoardRandomNum == 3) {

        mat = suBoard3;

    } else { //suBoardRandomNum==4

        mat = suBoard4;
    }

    // choose the level difficulty //

    let showNumInDivArr = [];
    let turn = 0;

    for (let lop = 0; showNumInDivArr.length < levelDifficulty; lop++) { //Number(levelDifficulty) times of

        let showNumInDiv = Math.floor(Math.random() * 81) + 1; //random num 1-81 

        if (showNumInDivArr.indexOf(showNumInDiv) == -1) { //if the randomNum is not allready in the array

            showNumInDivArr.push(showNumInDiv); //push the randomNum to the array
        }
    }

    // randomly spread giving numbers on board //

    for (let row = 0; row < mat.length; row++) { //loop for 9 rows

        for (let col = 0; col < mat[row].length; col++) { //loop for 9 cols in each row

            let anyCols = document.querySelectorAll('.cols') //create array of all cols

            if (showNumInDivArr.indexOf(turn) == -1) { //if Number(turn) not exsist in showNumInDivArr

                turn++; //just move the turn

            } else { //if Number(turn) exsist in showNumInDivArr

                anyCols[turn].innerHTML = mat[row][col]; //insert numText to target
                anyCols[turn].classList.add('set');
                anyCols[turn].classList.remove('hover');

                turn++; //move the turn
            }
        }
    }
}

// ----- DELETE TARGET-COL FUNCTION ----- //

function deleteTargetCol() { //delete color && text from targetCol 

    let ifTarget = document.querySelector('.target') //check if any targetClassName exsist

    if (ifTarget) { //if exsist

        ifTarget.classList.remove('target'); // we remove the targetClassName
        ifTarget.innerHTML = null; //clearing the innerHTML targetCol text
        ifTarget.classList.add('hover'); //add back hover to targetCol
    }
}

// ----- RESET LEVEL FUNCTION ----- //

function resetLevelFunction() {

    let resetLevelDelete = document.querySelectorAll('.cols') //check for colsClassName and push to array

    for (let i = 0; i < resetLevelDelete.length; i++) { //create loop for all cols

        let classListArray = resetLevelDelete[i].classList; // col classList as array
        let classListArrayLength = classListArray.length; //length of col classList array (number)

        if (classListArray[classListArrayLength - 1] !== 'set') { // if the last spot in classListArray == set

            resetLevelDelete[i].innerHTML = null; //clear the inneHTML for this col
        }

        if (classListArray[classListArrayLength - 1] == 'target') { // if the last spot in classListArray == target

            classListArray.remove('target'); //remove targetClassName from this col
        }
    }
}

// ----- FINISH LEVEL FUNCTION ----- //

function FinishLevelFunction() {

    rowsCheckRes = true; //back to true before check continue 
    columsCheckRes = true; //back to true before check continue 
    boxCheckRes = true; //back to true before check continue 

    let arrayToMatPreTest = []; //numbers from game pushed to here

    // inserting numbers from game to regular array (arrayToMatPreTest) //

    let FinishLevelFunctionDelete = document.querySelectorAll('.cols') //check for all cols and pushed them to array

    for (let i = 0; i < FinishLevelFunctionDelete.length; i++) { //create loop for all cols

        arrayToMatPreTest.push(FinishLevelFunctionDelete[i].innerHTML); //push the innerHTML from each col to regular array (arrayToMatPreTest)
        // log(arrayToMatPreTest);
    }

    let matToTest = [ //numbers from arrayToMatPreTest pushed to here in good order for finalTest
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    // inserting numbers from arrayToMatPreTest to matt array (matToTest) in good order for final test //

    for (let i = 0; i < arrayToMatPreTest.length; i++) { //create loop for all numbers in arrayToMatPreTest

        if (i < 9) {

            matToTest[0].push(Number(arrayToMatPreTest[i]));

        } else if (i > 8 && i < 18) {

            matToTest[1].push(Number(arrayToMatPreTest[i]));

        } else if (i > 17 && i < 27) {

            matToTest[2].push(Number(arrayToMatPreTest[i]));

        } else if (i > 26 && i < 36) {

            matToTest[3].push(Number(arrayToMatPreTest[i]));

        } else if (i > 35 && i < 45) {

            matToTest[4].push(Number(arrayToMatPreTest[i]));

        } else if (i > 44 && i < 54) {

            matToTest[5].push(Number(arrayToMatPreTest[i]));

        } else if (i > 53 && i < 63) {

            matToTest[6].push(Number(arrayToMatPreTest[i]));

        } else if (i > 62 && i < 72) {

            matToTest[7].push(Number(arrayToMatPreTest[i]));

        } else if (i > 71 && i < 81) {

            matToTest[8].push(Number(arrayToMatPreTest[i]));
        }

        // log(matToTest);
    }

    checkIfIWin(matToTest);
}

// ----- CHECK WIN OR LOSE FUNCTION ----- //

function checkIfIWin(mat) {

    rowsCheck(mat);
    columsCheck(mat);
    boxCheck(mat);

    if (missingCol == true) {

        goodLuck.innerHTML = `<p> Missing numbers!<br> Try again</p>`;
        goodLuck.style.color = 'rgba(255, 170, 80, 0.5)';

        setTimeout(function () {

            goodLuck.innerHTML = 'GOOD LUCK!';
            goodLuck.style.color = 'white';

        }, 2000);

        return;

    } else if (rowsCheckRes == true && columsCheckRes == true && boxCheckRes == true) { //if you win

        goodLuck.innerHTML = `<p> GAME OVER <br> YOU WIN!</p>`;
        goodLuck.style.color = 'rgba(123, 255, 0, 0.5)';

        let allCols = document.querySelectorAll('.cols') //check if any targetClassName exsist

        for (let i = 0; i < allCols.length; i++) { //create loop for all cols

            allCols[i].classList.add('gbg');
        }

    } else { //if you lost

        goodLuck.innerHTML = `<p> GAME OVER <br> YOU LOSE!</p>`;
        goodLuck.style.color = 'rgba(255, 0, 80, 0.5)';

        let allCols = document.querySelectorAll('.cols') //check if any targetClassName exsist

        for (let i = 0; i < allCols.length; i++) { //create loop for all cols

            allCols[i].classList.add('rbg');

        }
    }

    status = 2;

    setTimeout(function () {

        welcomePlayerNameSpan.innerHTML = `<p> ${userNameFinal},<br> PLAY AGAIN?</p>`;
        main.classList.add('hide');
        difficultyPage.classList.remove('hide');

    }, 3000);
}

// ----- checking matt if good for win Function ----- //

let rowsCheckRes = true;
let columsCheckRes = true;
let boxCheckRes = true;

// rowsCheck //

function rowsCheck(matF) {

    // log(matF); //given mat
    missingCol = false;

    for (let row = 0; row < matF.length; row++) {



        if (matF[row].indexOf(0) !== -1) {

            missingCol = true;
            log('missingCol');
            return;
        }

        if (matF[row].indexOf(1) == -1 || matF[row].indexOf(2) == -1 || matF[row].indexOf(3) == -1 || matF[row].indexOf(4) == -1 || matF[row].indexOf(5) == -1 || matF[row].indexOf(6) == -1 || matF[row].indexOf(7) == -1 || matF[row].indexOf(8) == -1 || matF[row].indexOf(9) == -1) { //verify all 1-9 each row in mat - no dubbles 

            rowsCheckRes = false;
            log('rowsCheckRes: NOT GOOD!');
            break;

        } else {

            continue;
        }
    }
}

// columsCheck //

function columsCheck(matF) {

    let colomsToRowMat = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    for (let row = 0; row < matF.length; row++) {

        for (let col = 0; col < matF[row].length; col++) {

            if (col == 0) {

                colomsToRowMat[0].push(matF[row][col]);
            }

            if (col == 1) {

                colomsToRowMat[1].push(matF[row][col]);
            }

            if (col == 2) {

                colomsToRowMat[2].push(matF[row][col]);
            }

            if (col == 3) {

                colomsToRowMat[3].push(matF[row][col]);
            }

            if (col == 4) {

                colomsToRowMat[4].push(matF[row][col]);
            }

            if (col == 5) {

                colomsToRowMat[5].push(matF[row][col]);
            }

            if (col == 6) {

                colomsToRowMat[6].push(matF[row][col]);
            }

            if (col == 7) {

                colomsToRowMat[7].push(matF[row][col]);
            }

            if (col == 8) {

                colomsToRowMat[8].push(matF[row][col]);
            }
        }
    }

    // log(colomsToRowMat); //after re-order

    for (let row = 0; row < colomsToRowMat.length; row++) {

        if (colomsToRowMat[row].indexOf(1) == -1 || colomsToRowMat[row].indexOf(2) == -1 || colomsToRowMat[row].indexOf(3) == -1 || colomsToRowMat[row].indexOf(4) == -1 || colomsToRowMat[row].indexOf(5) == -1 || colomsToRowMat[row].indexOf(6) == -1 || colomsToRowMat[row].indexOf(7) == -1 || colomsToRowMat[row].indexOf(8) == -1 || colomsToRowMat[row].indexOf(9) == -1) {

            columsCheckRes = false;
            log('columsCheckRes: NOT GOOD!');
            break;

        } else {

            continue;
        }
    }
}

// boxCheck //

function boxCheck(matF) {

    let boxesToRowMat = [
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        [],
        []
    ];

    for (let row = 0; row < matF.length; row++) {

        for (let col = 0; col < matF[row].length; col++) {

            if (row <= 2 && col <= 2) {

                boxesToRowMat[0].push(matF[row][col]);
            }

            if (row <= 2 && col >= 3 && col <= 5) {

                boxesToRowMat[1].push(matF[row][col]);
            }

            if (row <= 2 && col >= 6 && col <= 8) {

                boxesToRowMat[2].push(matF[row][col]);
            }

            if (row >= 3 && row <= 5 && col <= 2) {

                boxesToRowMat[3].push(matF[row][col]);
            }

            if (row >= 3 && row <= 5 && col >= 3 && col <= 5) {

                boxesToRowMat[4].push(matF[row][col]);
            }

            if (row >= 3 && row <= 5 && col >= 6 && col <= 8) {

                boxesToRowMat[5].push(matF[row][col]);
            }

            if (row >= 6 && row <= 8 && col <= 2) {

                boxesToRowMat[6].push(matF[row][col]);
            }

            if (row >= 6 && row <= 8 && col >= 3 && col <= 5) {

                boxesToRowMat[7].push(matF[row][col]);
            }

            if (row >= 6 && row <= 8 && col >= 6 && col <= 8) {

                boxesToRowMat[8].push(matF[row][col]);
            }
        }
    }

    // log(boxesToRowMat); //after re-order

    for (let row = 0; row < boxesToRowMat.length; row++) {

        if (boxesToRowMat[row].indexOf(1) == -1 || boxesToRowMat[row].indexOf(2) == -1 || boxesToRowMat[row].indexOf(3) == -1 || boxesToRowMat[row].indexOf(4) == -1 || boxesToRowMat[row].indexOf(5) == -1 || boxesToRowMat[row].indexOf(6) == -1 || boxesToRowMat[row].indexOf(7) == -1 || boxesToRowMat[row].indexOf(8) == -1 || boxesToRowMat[row].indexOf(9) == -1) {

            boxCheckRes = false;
            log('boxCheckRes: NOT GOOD!');
            break;

        } else {

            continue;
        }
    }
}