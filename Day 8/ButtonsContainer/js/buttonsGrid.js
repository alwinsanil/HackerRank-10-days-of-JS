document.addEventListener("DOMContentLoaded", function() {
    const btn5 = document.getElementById("btn5");
    let outerButtons = [document.getElementById("btn1"), document.getElementById("btn2"), document.getElementById("btn3"), document.getElementById("btn4"), document.getElementById("btn6"), document.getElementById("btn7"), document.getElementById("btn8"), document.getElementById("btn9")];
    
    let temp=0
    btn5.addEventListener("click", function() {
        temp = outerButtons[0].innerText
        outerButtons[0].innerText = outerButtons[3].innerText
        outerButtons[3].innerText = outerButtons[5].innerText
        outerButtons[5].innerText = outerButtons[6].innerText
        outerButtons[6].innerText = outerButtons[7].innerText
        outerButtons[7].innerText = outerButtons[4].innerText
        outerButtons[4].innerText = outerButtons[2].innerText
        outerButtons[2].innerText = outerButtons[1].innerText
        outerButtons[1].innerText = temp
    });
});
