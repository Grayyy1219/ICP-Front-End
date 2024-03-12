var data, computermove;
var win = 0;
function play(move) {
    var jsonhttp = new XMLHttpRequest();
    jsonhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            data = this.responseText;
            console.log(data);
            var usemove = move;
            show(move);

        }
    };
    jsonhttp.open("GET", "move.txt", true);
    jsonhttp.send();
}
function show(playermove) {
    var rules = JSON.parse(data);
    var txt;
    if (playermove == "rock") {
        var beats = rules.rock.beats;
    }
    else if (playermove == "paper") {
        var beats = rules.paper.beats;
    }
    else if (playermove == "scissors") {
        var beats = rules.scissors.beats;
    }


    txt = "<img src='img/" + playermove + ".png'>";
    document.getElementById("playimg").innerHTML = txt;
    var compmove = Math.floor(Math.random() * 3) + 1;
    if (compmove == 1) {
        computermove = "rock";
    }
    else if (compmove == 2) {
        computermove = "paper";
    }
    else if (compmove == 3) {
        computermove = "scissors";
    }
    txt2 = "<img src='img/" + computermove + ".png'>";
    document.getElementById("comimg").innerHTML = txt2;


    if (computermove == playermove) {
        var txt3 = "<p>Draw!</p>";
        document.getElementById("context").innerHTML = txt3;
    }
    else if (computermove == beats) {
        txt3 = "<p>You Win!</p>";
        document.getElementById("context").innerHTML = txt3;
        win++;
    }
    else if (computermove != playermove) {
        var txt3 = "<p>You Lose!</p>";
        document.getElementById("context").innerHTML = txt3;
        if (win != 0) {
            win--;
        }

    }
    txt4 = "Wins: " + win;
    document.getElementById("wins").innerHTML = txt4;
}