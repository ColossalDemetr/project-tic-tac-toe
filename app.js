const gameBoard = (() => {

    let board = [
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        "",
        ""
    ];


    function getBoard() {
        return board;
    };

    function placeMarker(index, marker) {
        board[index] = marker;
    };

    function reset() {
        board = [ "", "", "", "", "", "", "", "", "", ];
    };



    return { getBoard, placeMarker, reset }

})();

function createPlayer (name, marker) {
    let player = { name, marker }
    
    return player;
};

const gameController = (() => {

    const players = [
        createPlayer("Player1", "X"),
        createPlayer("Player2", "O")
    ];

    // Reset button
    const resetButton = document.querySelector("#restart");
    function restartGame() {
        gameBoard.reset();
        gameOver = false;
        currentPlayer = players[0];
        statusBar.textContent = "";
        displayController.render();
    }

    resetButton.addEventListener("click", () => {
        restartGame();
    });

    let currentPlayer = players[0];

    const statusBar = document.querySelector("#status");

    function makeATurn(index) {

        if (gameOver) return;

        if (gameBoard.getBoard()[index] !== "") return;

        const winner = currentPlayer;

        gameBoard.placeMarker(index, currentPlayer.marker);

        switchPlayer();

        displayController.render();

        if (checkWin()) {
            statusBar.textContent = `${winner.name} is our winner! Congrats🍾👏🏻`;
            gameOver = true;
        };

    };

    function switchPlayer() {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };


    let gameOver = false;

    function checkWin() {

        const winConditions = [
            [0,1,2], [3,4,5], [6,7,8],
            [0,3,6], [1,4,7], [2,5,8],
            [0,4,8], [2,4,6]
        ];

        const board = gameBoard.getBoard();
        


        return winConditions.some(combination => {
            
            return (board[combination[0]] === board[combination[1]] &&
            board[combination[1]] === board[combination[2]] &&
            board[combination[0]] !== "");
           
        });

    };


    return { makeATurn, switchPlayer, checkWin };

})();

const displayController = (() => {

    function render() {
        
        const board = gameBoard.getBoard();


        board.forEach((cell, index) => {
            document.querySelector(`#cell-${index}`).textContent = cell;
        }); 



    };

    function addClickListeners() {


        document.querySelectorAll(".cell").forEach((cell) => {
            cell.addEventListener("click", (e) => {

                const index = e.target.id.split("-")[1];

                gameController.makeATurn(index);

                
            });
        });
    };
    
    return { render , addClickListeners};
    
})();

displayController.addClickListeners();