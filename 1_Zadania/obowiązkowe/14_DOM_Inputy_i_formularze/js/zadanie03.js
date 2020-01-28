document.addEventListener('DOMContentLoaded', function() {

    const teamOne = document.querySelector('#team1');
    const teamTwo = document.querySelector('#team2');
    const pointsFirst = document.querySelector('#points1');
    const pointsSecond = document.querySelector('#points2');
    const table = document.querySelector('table');
    const submitBtn = document.querySelector('button');

    submitBtn.addEventListener('click', function(e) {
        e.preventDefault();
        if (checkTeams(teamOne.value, teamTwo.value) && checkGoals(pointsFirst.value, pointsSecond.value)) {
            let td1 = document.createElement('td');
            td1.innerText = teamOne.value;

            let td2 = document.createElement('td');
            td2.innerText = teamTwo.value;

            let td3 = document.createElement('td');
            td3.innerText = `${pointsFirst.value} - ${pointsSecond.value}`;

            let tr = document.createElement('tr');
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            table.children[0].appendChild(tr);
        }
    });

    function validTeams(t1, t2) {
        let toReturn;
        t1 !== t2 ? toReturn = true: toReturn = false;
        return toReturn;
    }

    function validGoals(g1, g2) {
        if (g1 >= 0 && g2 >=0) {
            return true;
        } else {
            return false;
        }
    }

});