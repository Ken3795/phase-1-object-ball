// Define the game object
function gameObject() {
    return {
      home: {
        teamName: "Brooklyn Nets",
        colors: ["Black", "White"],
        players: {
          "Alan Anderson": { number: 0, shoe: 16, points: 22, rebounds: 12, assists: 12, steals: 3, blocks: 1, slamDunks: 1 },
          "Reggie Evans": { number: 30, shoe: 14, points: 12, rebounds: 12, assists: 12, steals: 12, blocks: 12, slamDunks: 7 },
          "Brook Lopez": { number: 11, shoe: 17, points: 17, rebounds: 19, assists: 10, steals: 3, blocks: 1, slamDunks: 15 },
          "Mason Plumlee": { number: 1, shoe: 19, points: 26, rebounds: 12, assists: 6, steals: 3, blocks: 8, slamDunks: 5 },
          "Jason Terry": { number: 31, shoe: 15, points: 19, rebounds: 2, assists: 2, steals: 4, blocks: 11, slamDunks: 1 }
        }
      },
      away: {
        teamName: "Charlotte Hornets",
        colors: ["Turquoise", "Purple"],
        players: {
          "Jeff Adrien": { number: 4, shoe: 18, points: 10, rebounds: 1, assists: 1, steals: 2, blocks: 7, slamDunks: 2 },
          "Bismak Biyombo": { number: 0, shoe: 16, points: 12, rebounds: 4, assists: 7, steals: 7, blocks: 15, slamDunks: 10 },
          "DeSagna Diop": { number: 2, shoe: 14, points: 24, rebounds: 12, assists: 12, steals: 4, blocks: 5, slamDunks: 5 },
          "Ben Gordon": { number: 8, shoe: 15, points: 33, rebounds: 3, assists: 2, steals: 1, blocks: 1, slamDunks: 0 },
          "Brendan Haywood": { number: 33, shoe: 15, points: 6, rebounds: 12, assists: 12, steals: 22, blocks: 5, slamDunks: 12 }
        }
      }
    };
  }
  
  // Function to find points scored by a player
  function numPointsScored(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].points;
      }
    }
  }
  
  // Function to find shoe size of a player
  function shoeSize(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName].shoe;
      }
    }
  }
  
  // Function to find team colors
  function teamColors(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return game[team].colors;
      }
    }
  }
  
  // Function to return team names
  function teamNames() {
    const game = gameObject();
    return [game.home.teamName, game.away.teamName];
  }
  
  // Function to return player numbers of a team
  function playerNumbers(teamName) {
    const game = gameObject();
    for (const team in game) {
      if (game[team].teamName === teamName) {
        return Object.values(game[team].players).map(player => player.number);
      }
    }
  }
  
  // Function to return stats of a player
  function playerStats(playerName) {
    const game = gameObject();
    for (const team in game) {
      const players = game[team].players;
      if (players[playerName]) {
        return players[playerName];
      }
    }
  }
  
  // Function to find rebounds of the player with the largest shoe size
  function bigShoeRebounds() {
    const game = gameObject();
    let largestShoeSize = 0;
    let rebounds = 0;
  
    for (const team in game) {
      for (const player in game[team].players) {
        const stats = game[team].players[player];
        if (stats.shoe > largestShoeSize) {
          largestShoeSize = stats.shoe;
          rebounds = stats.rebounds;
        }
      }
    }
  
    return rebounds;
  }
  
  // Bonus: Player with most points
  function mostPointsScored() {
    const game = gameObject();
    let mostPoints = 0;
    let playerName = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        const stats = game[team].players[player];
        if (stats.points > mostPoints) {
          mostPoints = stats.points;
          playerName = player;
        }
      }
    }
  
    return playerName;
  }
  
  // Bonus: Winning team
  function winningTeam() {
    const game = gameObject();
    const scores = { home: 0, away: 0 };
  
    for (const team in game) {
      for (const player in game[team].players) {
        scores[team] += game[team].players[player].points;
      }
    }
  
    return scores.home > scores.away ? game.home.teamName : game.away.teamName;
  }
  
  // Bonus: Player with the longest name
  function playerWithLongestName() {
    const game = gameObject();
    let longestName = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        if (player.length > longestName.length) {
          longestName = player;
        }
      }
    }
  
    return longestName;
  }
  
  // Super Bonus: Does the player with the longest name have the most steals?
  function doesLongNameStealATon() {
    const game = gameObject();
    const longestName = playerWithLongestName();
    let mostSteals = 0;
    let playerNameWithMostSteals = "";
  
    for (const team in game) {
      for (const player in game[team].players) {
        const stats = game[team].players[player];
        if (stats.steals > mostSteals) {
          mostSteals = stats.steals;
          playerNameWithMostSteals = player;
        }
      }
    }
  
    return longestName === playerNameWithMostSteals;
  }
  