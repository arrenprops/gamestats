angular
  .module('gameStatsApp')
  .controller('inputController', function ($scope, $http, playerService) {

    $scope.players = playerService.getPlayers(function(r){
    $scope.players = r;
  });

    $scope.indexNum = playerService.getIndexNum();
    $scope.firstName = "";
    $scope.lastName = "";
    $scope.email = "";
    $scope.kills = 0;
    $scope.deaths = 0;
    $scope.wins = 0;
    $scope.losses = 0;
    $scope.assists = 0;
    $scope.damage = 0;
    $scope.healing = 0;
    $scope.objectiveKills = 0;
    $scope.gameNum = 0;

    $scope.totalKills = playerService.getTotalKills();
    $scope.totalDeaths = playerService.getTotalDeaths();
    $scope.totalWins = playerService.getTotalWins();
    $scope.totalLosses = playerService.getTotalLosses();
    $scope.totalAssists = playerService.getTotalAssists();
    $scope.totalHealing = playerService.getTotalHealing();
    $scope.totalDamage = playerService.getTotalDamage();
    $scope.totalObjectiveKills = playerService.getTotalObjectiveKills();
    
    $scope.averageKills = playerService.getAverageKills();
    $scope.averageDeaths = playerService.getAverageDeaths();
    $scope.averageWins = playerService.getAverageWins();
    $scope.averageLosses = playerService.getAverageLosses();
    $scope.averageAssists = playerService.getAverageAssists();
    $scope.averageHealing = playerService.getAverageHealing();
    $scope.averageDamage = playerService.getAverageDamage();
    $scope.averageObjectiveKills = playerService.getAverageObjectiveKills();
    
    $scope.mostKills = playerService.getMostKills();
    $scope.mostDeaths = playerService.getMostDeaths();
    $scope.mostWins = playerService.getMostWins();
    $scope.mostLosses = playerService.getMostLosses();
    $scope.mostAssists = playerService.getMostAssists();
    $scope.mostHealing = playerService.getMostHealing();
    $scope.mostDamage = playerService.getMostDamage();
    $scope.mostObjectiveKills = playerService.getMostObjectiveKills();

    $scope.players = playerService.getPlayers();

    $scope.submitPlayer = function () {
      playerService.addPlayer($scope.firstName, $scope.lastName, $scope.email);
      $scope.firstName = "";
      $scope.lastName = "";
      $scope.email = ""; 
    }
 
 $scope.addStatsToPlayer = function () {
   for(var i =0; i < $scope.players.length; i++){
      if($scope.players[i].email == $scope.selectedItem){
        $scope.players[i].kills += parseInt($scope.kills);
        $scope.players[i].deaths += parseInt($scope.deaths);
        $scope.players[i].wins += parseInt($scope.wins);
        $scope.players[i].losses += parseInt($scope.losses);
        $scope.players[i].assists += parseInt($scope.assists);
        $scope.players[i].damage += parseInt($scope.damage);
        $scope.players[i].healing += parseInt($scope.healing);
        $scope.players[i].objectiveKills += parseInt($scope.objectiveKills);
        $scope.players[i].gameNum++;
        
      }
   }
      playerService.setTotalKills($scope.totalKills + parseInt($scope.kills));
      $scope.totalKills = playerService.getTotalKills();

      playerService.setTotalDeaths($scope.totalDeaths + parseInt($scope.deaths));
      $scope.totalDeaths = playerService.getTotalDeaths();

      playerService.setTotalWins($scope.totalWins + parseInt($scope.wins));
      $scope.totalWins = playerService.getTotalWins();

      playerService.setTotalLosses($scope.totalLosses + parseInt($scope.losses));
      $scope.totalLosses = playerService.getTotalLosses();

      playerService.setTotalAssists($scope.totalAssists + parseInt($scope.assists));
      $scope.totalAssists = playerService.getTotalAssists();

      playerService.setTotalHealing($scope.totalHealing + parseInt($scope.healing));
      $scope.totalHealing = playerService.getTotalHealing();

      playerService.setTotalDamage($scope.totalDamage + parseInt($scope.damage));
      $scope.totalDamage = playerService.getTotalDamage();

      playerService.setTotalObjectiveKills($scope.totalObjectiveKills + parseInt($scope.objectiveKills));
      $scope.totalObjectiveKills = playerService.getTotalObjectiveKills();
      playerService.setIndexNum($scope.indexNum+1);
      $scope.indexNum = playerService.getIndexNum();
      

      playerService.setAverageKills($scope.totalKills/$scope.indexNum);
      $scope.averageKills = playerService.getAverageKills();
      playerService.setAverageDeaths($scope.totalDeaths/$scope.indexNum);
      $scope.averageDeaths = playerService.getAverageDeaths();
      playerService.setAverageWins($scope.totalWins/$scope.indexNum);
      $scope.averageWins = playerService.getAverageWins();
      playerService.setAverageLosses($scope.totalLosses/$scope.indexNum);
      $scope.averageLosses = playerService.getAverageLosses();
      playerService.setAverageAssists($scope.totalAssists/$scope.indexNum);
      $scope.averageAssists = playerService.getAverageAssists();
      playerService.setAverageHealing($scope.totalHealing/$scope.indexNum);
      $scope.averageHealing = playerService.getAverageHealing();
      playerService.setAverageDamage($scope.totalDamage/$scope.indexNum);
      $scope.averageDamage = playerService.getAverageDamage();
      playerService.setAverageObjectiveKills($scope.totalObjectiveKills/$scope.indexNum);
      $scope.averageObjectiveKills = playerService.getAverageObjectiveKills();
      
      

      $scope.firstName = "";
      $scope.lastName = "";
      $scope.email = "";
      $scope.kills = 0;
      $scope.deaths = 0;
      $scope.wins = 0;
      $scope.losses = 0;
      $scope.assists = 0;
      $scope.damage = 0;
      $scope.healing = 0;
      $scope.objectiveKills = 0;
      $scope.players.sort(function(item) { item.kills; })[0];

      for (var i = 0; i < $scope.players.length; i++) {
  
        if ($scope.players[i].kills >= $scope.mostKills[0].score) {
          playerService.setMostKills($scope.players[i].firstName, $scope.players[i].kills);
          $scope.mostKills = playerService.getMostKills();     
        }
        if ($scope.players[i].deaths > $scope.mostDeaths[0].score) {
           playerService.setMostDeaths($scope.players[i].firstName, $scope.players[i].deaths);
           $scope.mostDeaths = playerService.getMostDeaths();
        }
        if ($scope.players[i].wins > $scope.mostWins[0].score) {
           playerService.setMostWins($scope.players[i].firstName, $scope.players[i].wins);
           $scope.mostWins = playerService.getMostWins();
        }
        if ($scope.players[i].losses > $scope.mostLosses[0].score) {
           playerService.setMostLosses($scope.players[i].firstName, $scope.players[i].losses);
           $scope.mostLosses = playerService.getMostLosses();
        }
        if ($scope.players[i].assists > $scope.mostAssists[0].score) {
           playerService.setMostAssists($scope.players[i].firstName, $scope.players[i].assists);
           $scope.mostAssists = playerService.getMostAssists();
        }
        if ($scope.players[i].healing > $scope.mostHealing[0].score) {
           playerService.setMostHealing($scope.players[i].firstName, $scope.players[i].healing);
           $scope.mostHealing = playerService.getMostHealing();
        }
        if ($scope.players[i].damage > $scope.mostDamage[0].score) {
           playerService.setMostDamage($scope.players[i].firstName, $scope.players[i].damage);
           $scope.mostDamage = playerService.getMostDamage();
        }
        if ($scope.players[i].objectiveKills > $scope.mostObjectiveKills[0].score) {
          playerService.setMostObjectiveKills($scope.players[i].firstName, $scope.players[i].objectiveKills);
          $scope.mostObjectiveKills = playerService.getMostObjectiveKills();
        }

      }
    }
 
  })