    var entrants = ["Declan", "Lorcan", "Edward", "David C", "Jemil", "Chigozie", "Marcus", "Nicola", "David L", "David B", "Emma", "Aaron", "PlaceHolder1(will)", "PlaceHolder2(Mo)", "PlaceHolder3", "PlaceHolder4"];
  
    var pot1 = ["Germany", "Brazil", "Portgual", "Argentina", "Belgium", "Poland", "France", "Spain"];
    var pot2 = ["Peru", "Switzerland", "England", "Colombia", "Mexico", "Uruguay", "Croatia", "Denmark"];
    var pot3 = ["Iceland", "Costa Rica", "Sweden", "Tunisia", "Egypt", "Senegal", "Iran", "Serbia"];
    var pot4 = ["Nigeria", "Australia", "Japan", "Morocco", "Panama", "South Korea", "Saudi Arabia", "Russia"];

    function shuffle(a) {
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    function generate() {
    shuffle(entrants);
    shuffle(pot1);
    shuffle(pot2);
    shuffle(pot3);
    shuffle(pot4);

    done =[];


    for (i =0; i < 8; i++) {
        done.push({name: entrants[i], gTeam: pot1[i], bTeam: pot4[i]});
    }
    for (i =0; i < 8; i++) {
        done.push({name: entrants[i], gTeam: pot2[i], bTeam: pot4[i]});
    }
    
    for (i=0; i<16; i++) {
        console.log("Player is " + done[i].name + ". Their good team is: " + done[i].gTeam + " and their bad team is: " + done[i].bTeam + ".");
    }
    }

    generate();