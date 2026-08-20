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

    function makeATurn() {

    };

    function switchPlayer() {

    };

    function checkWin() {

    };


    return { makeATurn, switchPlayer, checkWin };

})();