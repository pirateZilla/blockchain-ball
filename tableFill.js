function fill() {
    for (var i=0; i<16; i++) {
        document.write("<tr><td>" + done[i].name + "</td>");
        document.write("<td>" + done[i].gTeam + "</td>");
        document.write("<td>" + done[i].bTeam + "</td></tr>");
  }
};

fill();