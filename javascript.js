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
    
        gameBoard.setXOAt(XO,x,y)
        if(XO === 'X'){XO = 'O'}else{XO = 'X'}
        updateScreen();
    }
    const updateScreen = function(){
        for(let i = 0; i < 3; i++){
            for(let j = 0; j < 3; j++){
                document.querySelector(`#c${i}${j}`).innerText = gameBoard.getXO(i, j)
            }
        }
    }
    return {playXO}
})();

const Player =(name) =>{
    const getName = () => name;

    return {getName};
};
