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

    let currentPlayer = players[0];

    function makeATurn(index) {
        gameBoard.placeMarker(index, currentPlayer.marker);
        switchPlayer();
    };

    function switchPlayer() {
        currentPlayer = currentPlayer === players[0] ? players[1] : players[0];
    };

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