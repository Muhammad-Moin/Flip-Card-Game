var a = document.getElementById('img-1');
var b = document.getElementById('img-2');
var c = document.getElementById('img-3');
var f = document.getElementById('message');
var isFlip = false;
function flipCard(e) {
    var d = Math.ceil(Math.random() * 3);
    console.log(d)
    if (!isFlip) {
        console.log(!isFlip)
        if (d == 1) {
            a.src = './king.png';
            b.src = './joker.jpg';
            c.src = './joker.jpg';

        }
        else if (d == 2) {
            a.src = './joker.jpg';
            b.src = './king.png';
            c.src = './joker.jpg';

        }
        else if (d == 3) {
            a.src = './joker.jpg';
            b.src = './joker.jpg';
            c.src = './king.png';

        }
        isFlip = true;
        if (d == e) {
            f.innerHTML = '', swal("WINNER", "You won the game!", "success");
        }
        else {
            f.innerHTML ='',  swal("Try again!", "You lost the game!", "error");   
        }
    }
}


function reset() {
    a.src = 'cardback.jpg';
    b.src = 'cardback.jpg';
    c.src = 'cardback.jpg';
    isFlip = false;
    f.innerHTML =''


}