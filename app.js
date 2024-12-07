let h2 = document.querySelector('h2')
let boxs = document.querySelectorAll(".box");
let reBtn = document.querySelector('.Reset-btn')
let count = 0;
let tune = true
let wins = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
]
function reset() {
    tune = true;
    count = 0;
    for (let box of boxs) {
        box.disabled = false;
        box.innerText = ""
        box.style.backgroundColor = "white";
        box.classList.remove("x")
        box.classList.remove("o")
    }
    h2.innerText = ""


}
for (let box of boxs) {
    box.addEventListener('click', (e) => {
        box.style.backgroundColor = "rgb(238, 223, 144)";
        if (tune == true) {
            box.innerText = "X"
            box.classList.add("x")
            tune = false;
            box.disabled = true;
        } else {
            box.innerText = "O"
            box.classList.add("o")
            tune = true;
            box.disabled = true;
        }
        checkwin();
        count++;
        let isWinner = checkwin();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
    })
}

function checkwin() {
    for (let win of wins) {
        // console.log(win[0], win[1], win [2])
        // console.log(boxs[win[0]], boxs[win[1]], boxs[win [2]])

        let pwin1 = boxs[win[0]].innerText;
        let pwin2 = boxs[win[1]].innerText;
        let pwin3 = boxs[win[2]].innerText;
        if (pwin1 != "" && pwin2 != "" && pwin3 != "") {
            if (pwin1 == pwin2 && pwin2 == pwin3) {
                console.log("Winner is : ", pwin1)
                h2.innerText = `Winner is :  ${pwin1}`
                for (let box of boxs) {
                    box.disabled = true;
                }
                return true
            }
        }
        // if (count >= 9 && (pwin1 != pwin2 && pwin2 != pwin3)) {
        //     console.log("No Win")
        //     h2.innerText = `Drow`
        // }
    }
}

function gameDraw(){
    h2.innerText = `Draw`
}

reBtn.addEventListener('click', reset)
