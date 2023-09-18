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
    
    let XO = 'X'
    const playXO = function(x, y){
        if(gameBoard.getXO(x,y) == ''){
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
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                document.querySelector(`#c${i}${j}`).innerText = ''
                if(gameBoard.getXO(i,j) != ''){
                    document.querySelector(`#c${i}${j}`).classList.remove(`${gameBoard.getXO(i, j)}`)
                }
                gameBoard.setXOAt('',i, j)
            }
        }
    }
    const checkforWin=function(){
        let diagnol = 0;
        for(let i = 0; i < 3; i++){
            if(gameBoard.getXO(i,0) == XO && gameBoard.getXO(i,1) == XO && gameBoard.getXO(i,2) == XO){
                console.log(gameBoard.getXO(i,0), gameBoard.getXO(i,1), gameBoard.getXO(i,2))
                console.log(`${XO} wins`)
            }else if(gameBoard.getXO(0,i) == XO && gameBoard.getXO(1,i) == XO && gameBoard.getXO(2,i) == XO){
                console.log(`${XO} wins`)
            }else if(gameBoard.getXO(i,i) == XO){
                diagnol += 1;
                if(diagnol == 3){
                    console.log(`${XO} wins`)
                }
            }
        }
        if(gameBoard.getXO(0,2) == XO && gameBoard.getXO(1,1) == XO && gameBoard.getXO(2,0) == XO){
            console.log(`${XO} wins`)
        }
    }
    

    return {playXO, resetGame}
})();

const Player =(name) =>{
    const getName = () => name;

    return {getName};
};
