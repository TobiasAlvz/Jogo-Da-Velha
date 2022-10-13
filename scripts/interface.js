document.addEventListener("DOMContentLoaded", function () {
  let pieces = document.querySelectorAll(".piece");
  pieces.forEach((piece) => {
    piece.addEventListener("click", handleClick);
  });
});

function handleClick(ev) {
  let piece = ev.target;
  let position = piece.id;

  if (handleMove(position)) {
    setTimeout(() => {
      alert(" O Jogo Acabou - O Vencedor foi " + playerTime);
    }, 10);
  }

  handleMove(position);
  updatePieces();
}

function updatePieces() {
  let pieces = document.querySelectorAll(".piece");

  pieces.forEach((piece) => {
    let position = piece.id;
    let symb = board[position];
    if (symb != "") {
      piece.innerHTML = `<div class='${symb}'></div>`;
    }
  });
}
