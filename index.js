randomNumber1 = Math.floor((Math.random() * 6) + 1);

switch(randomNumber1) {
    case 1:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
        break;
    case 6:
        document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice6.png");
        break;
}

randomNumber2 = Math.floor((Math.random() * 6) + 1);

switch(randomNumber2) {
    case 1:
        document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice1.png");
        break;
    case 2:
        document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice2.png");
        break;
    case 3:
        document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice3.png");
        break;
    case 4:
        document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice4.png");
        break;
    case 5:
        document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");
        break;
    case 6:
        document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice6.png");
        break;
}

if (randomNumber1 > randomNumber2)
    document.getElementsByTagName("h1")[0].innerHTML = "🎉 Player 1 Wins!";
else if (randomNumber1 < randomNumber2)
    document.getElementsByTagName("h1")[0].innerHTML = "Player 2 Wins! 🎉";
else
    document.getElementsByTagName("h1")[0].innerHTML = "❌ Draw! ❌";
