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