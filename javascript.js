document.querySelector('#c00').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c01').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c02').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c10').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c11').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c12').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c20').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c21').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#c22').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.playXO(e.target.id.charAt(1),e.target.id.charAt(2))
})
document.querySelector('#reset-btn').addEventListener('click',(e)=>{
    e.stopPropagation
    displayController.resetGame();
})

const gameBoard = (()=>{
    const board = [['','',''],
                    ['','',''],
                    ['','','']]
    const getXO = function(x, y){
        return board[x][y]
    }
    const setXOAt = function(xo,x,y){
        board[x][y] = xo;
    }

    return {getXO, setXOAt}
})();

const displayController = (()=>{
    let winFlag = false;
    let XO = 'X'
    let turnCounter = 0;
    const playXO = function(x, y){
        if(gameBoard.getXO(x,y) == '' && !winFlag){
            turnCounter += 1;
            gameBoard.setXOAt(XO,x,y)
            updateScreen(x, y);
            checkforWin();
            if(XO === 'X'){XO = 'O'}else{XO = 'X'}
        }
    }
    const updateScreen = function(x, y){
        document.querySelector(`#c${x}${y}`).innerText = gameBoard.getXO(x,y)
        document.querySelector(`#c${x}${y}`).classList.add(XO)
    }
    const resetGame = function(){
        XO = 'X'
        turnCounter = 0;
        winFlag = false
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                document.querySelector(`#c${i}${j}`).innerText = ''
                if(gameBoard.getXO(i,j) != ''){
                    document.querySelector(`#c${i}${j}`).classList.remove(`${gameBoard.getXO(i, j)}`)
                }
                gameBoard.setXOAt('',i, j)
            }
        }
        document.querySelector('.results').innerText = '';
    }
    const displayResults = function(tie){
        if(tie){
            document.querySelector('.results').innerText = 'TIE!'
        }else{
            document.querySelector('.results').innerText = `The winner is: ${document.querySelector(`#player${XO}`).value}!`
        }
    }
    const checkforWin=function(){
        let diagnol = 0;
        for(let i = 0; i < 3; i++){
            if(gameBoard.getXO(i,0) == XO && gameBoard.getXO(i,1) == XO && gameBoard.getXO(i,2) == XO){
                winFlag = true;
                displayResults();
            }else if(gameBoard.getXO(0,i) == XO && gameBoard.getXO(1,i) == XO && gameBoard.getXO(2,i) == XO){
                winFlag = true;
                displayResults();
            }else if(gameBoard.getXO(i,i) == XO){
                diagnol += 1;
                if(diagnol == 3){
                    winFlag = true;
                    displayResults();
                }
            }
        }
        if(gameBoard.getXO(0,2) == XO && gameBoard.getXO(1,1) == XO && gameBoard.getXO(2,0) == XO){
            console.log(`${XO} wins`)
        }
        if(turnCounter == 9){
            displayResults(true);
        }
    }


    return {playXO, resetGame}
})();

const Player =(name) =>{
    const getName = () => name;

    return {getName};
};
