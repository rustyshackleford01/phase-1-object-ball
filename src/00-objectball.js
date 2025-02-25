function gameObject() {
    return {
        home: {
        teamName: "Brooklyn Nets",
        colors: ["black", "white"],
        players: {
            "Alan Anderson": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            }
        }
    }
    away: { 
        teamName: "Charlotte Hornets",
        colors: ["turquoise", "purple"],
        players: {
            "Jeff Adrien": {
                number: 0,
                shoe: 16,
                points: 22,
                rebounds: 12,
                assists: 12,
                steals: 3,
                blocks: 1,
                slamDunks: 1
            }
        }
    }
};
};

console.log(gameObject());

function homeTeamName() {
    let object = gameObject();
    return object["home"]["teamName"];
  }
  
  console.log(homeTeamName());

  function homeTeamName() {
    return gameObject()["home"]["teamName"];
  }
  
  console.log(homeTeamName());


  /////

  function gameObject() {
    return {
        home: {
            teamName: "Brooklyn Nets",
            colors: ["black", "white"],
            players: {
                "Alan Anderson": {
                    number: 0,
                    shoe: 16,
                    points: 22,
                    rebounds: 12,
                    assists: 12,
                    steals: 3,
                    blocks: 1,
                    slamDunks: 1
                }
            }
        },
        away: { 
            teamName: "Charlotte Hornets",
            colors: ["turquoise", "purple"],
            players: {
                "Jeff Adrien": {
                    number: 4, 
                    shoe: 18, 
                    points: 10, 
                    rebounds: 1, 
                    assists: 1, 
                    steals: 2, 
                    blocks: 7, 
                    slamDunks: 2 
                }
            }
        }
    };
}
