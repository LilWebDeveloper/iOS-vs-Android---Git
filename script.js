const player1 = "bi-android2"
const player2 = "bi-apple"
let round = 1;
const gameBoxes = [...document.querySelectorAll('.gameBox')];
gameBoxes.forEach(gameBox => gameBox.addEventListener('click', play))
function play(action){
    const gameTurn = round % 2 === 0 ? player2 : player1;
    action.target.classList.add(gameTurn);
    round++;
    checkGame();
}
function checkGame(){
    const top1 = document.querySelector("#top1");
    const top2 = document.querySelector("#top2");
    const top3 = document.querySelector("#top3");
    const middle1 = document.querySelector("#middle1");
    const middle2 = document.querySelector("#middle2");
    const middle3 = document.querySelector("#middle3");
    const bottom1 = document.querySelector("#bottom1");
    const bottom2 = document.querySelector("#bottom2");
    const bottom3 = document.querySelector("#bottom3");
    
    if(
        top1.classList.contains('bi-android2') === true &&
        top2.classList.contains('bi-android2') === true &&
        top3.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        middle1.classList.contains('bi-android2') === true &&
        middle2.classList.contains('bi-android2') === true &&
        middle3.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        bottom1.classList.contains('bi-android2') === true &&
        bottom2.classList.contains('bi-android2') === true &&
        bottom3.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        top1.classList.contains('bi-android2') === true &&
        middle1.classList.contains('bi-android2') === true &&
        bottom1.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        top2.classList.contains('bi-android2') === true &&
        middle2.classList.contains('bi-android2') === true &&
        bottom2.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        top3.classList.contains('bi-android2') === true &&
        middle3.classList.contains('bi-android2') === true &&
        bottom3.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        top1.classList.contains('bi-android2') === true &&
        middle2.classList.contains('bi-android2') === true &&
        bottom3.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        top3.classList.contains('bi-android2') === true &&
        middle2.classList.contains('bi-android2') === true &&
        bottom1.classList.contains('bi-android2') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is Android</h1>
        `;
    }else if(
        top1.classList.contains('bi-apple') === true &&
        top2.classList.contains('bi-apple') === true &&
        top3.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        middle1.classList.contains('bi-apple') === true &&
        middle2.classList.contains('bi-apple') === true &&
        middle3.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        bottom1.classList.contains('bi-apple') === true &&
        bottom2.classList.contains('bi-apple') === true &&
        bottom3.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        top1.classList.contains('bi-apple') === true &&
        middle1.classList.contains('bi-apple') === true &&
        bottom1.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        top2.classList.contains('bi-apple') === true &&
        middle2.classList.contains('bi-apple') === true &&
        bottom2.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        top3.classList.contains('bi-apple') === true &&
        middle3.classList.contains('bi-apple') === true &&
        bottom3.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        top1.classList.contains('bi-apple') === true &&
        middle2.classList.contains('bi-apple') === true &&
        bottom3.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }else if(
        top3.classList.contains('bi-apple') === true &&
        middle2.classList.contains('bi-apple') === true &&
        bottom1.classList.contains('bi-apple') === true
    ){
        return document.querySelector(".winInfo").innerHTML = `
            <h1>Winner is iOS</h1>
        `;
    }
}