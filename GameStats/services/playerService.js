angular
  .module("gameStatsApp")
  .service("playerService", function ($http) {

    var _players = [];
    this.getPlayers = function (callback) {
      $http.get("../players.json")
        .success(function (response) {
          callback(response)
        })
        .error(function () {
        })
    }

    var _totalKills = 0;
    var _totalDeaths = 0;
    var _totalWins = 0;
    var _totalLosses = 0;
    var _totalAssists = 0;
    var _totalHealing = 0;
    var _totalDamage = 0;
    var _totalObjectiveKills = 0;

    var _averageKills = 0;
    var _averageDeaths = 0;
    var _averageWins = 0;
    var _averageLosses = 0;
    var _averageAssists = 0;
    var _averageHealing = 0;
    var _averageDamage = 0;
    var _averageObjectiveKills = 0;
    var _indexNum = 0;

    var _mostKills = [{
      name: "",
      score: 0
    }
    ];

    function MostKill(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostDeaths = [{
      name: "",
      score: 0
    }];
    function MostDeath(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostWins = [{
      name: "",
      score: 0
    }];
    function MostWin(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostLosses = [{
      name: "",
      score: 0
    }];
    function MostLoss(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostAssists = [{
      name: "",
      score: 0
    }];
    function MostAssist(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostHealing = [{
      name: "",
      score: 0
    }];
    function MostHeal(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostDamage = [{
      name: "",
      score: 0
    }];
    function MostDamage(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }
    var _mostObjectiveKills = [{
      name: "",
      score: 0
    }];
    function MostObjectiveKill(mostName, mostScore) {
      this.name = mostName;
      this.score = mostScore;
    }



    this.getIndexNum = function () {
      return _indexNum;
    }

    this.setIndexNum = function (x) {
      _indexNum = x;
    }

    this.getTotalKills = function () {
      return _totalKills;
    }
    this.setTotalKills = function (x) {
      _totalKills = x;
    }
    this.getTotalDeaths = function () {
      return _totalDeaths;
    }
    this.setTotalDeaths = function (x) {
      _totalDeaths = x;
    }
    this.getTotalWins = function () {
      return _totalWins;
    }
    this.setTotalWins = function (x) {
      _totalWins = x;
    }
    this.getTotalLosses = function () {
      return _totalLosses;
    }
    this.setTotalLosses = function (x) {
      _totalLosses = x;
    }
    this.getTotalAssists = function () {
      return _totalAssists;
    }
    this.setTotalAssists = function (x) {
      _totalAssists = x;
    }
    this.getTotalHealing = function () {
      return _totalHealing;
    }
    this.setTotalHealing = function (x) {
      _totalHealing = x;
    }
    this.getTotalDamage = function () {
      return _totalDamage;
    }
    this.setTotalDamage = function (x) {
      _totalDamage = x;
    }
    this.getTotalObjectiveKills = function () {
      return _totalObjectiveKills;
    }
    this.setTotalObjectiveKills = function (x) {
      _totalObjectiveKills = x;
    }


    this.getAverageKills = function () {
      return _averageKills;
    }
    this.setAverageKills = function (x) {
      _averageKills = x;
    }
    this.getAverageDeaths = function () {
      return _averageDeaths;
    }
    this.setAverageDeaths = function (x) {
      _averageDeaths = x;
    }
    this.getAverageWins = function () {
      return _averageWins;
    }
    this.setAverageWins = function (x) {
      _averageWins = x;
    }
    this.getAverageLosses = function () {
      return _averageLosses;
    }
    this.setAverageLosses = function (x) {
      _averageLosses = x;
    }
    this.getAverageAssists = function () {
      return _averageAssists;
    }
    this.setAverageAssists = function (x) {
      _averageAssists = x;
    }
    this.getAverageHealing = function () {
      return _averageHealing;
    }
    this.setAverageHealing = function (x) {
      _averageHealing = x;
    }
    this.getAverageDamage = function () {
      return _averageDamage;
    }
    this.setAverageDamage = function (x) {
      _averageDamage = x;
    }
    this.getAverageObjectiveKills = function () {
      return _averageObjectiveKills;
    }
    this.setAverageObjectiveKills = function (x) {
      _averageObjectiveKills = x;
    }
    this.getMostKills = function () {
      return _mostKills;
    }
    this.setMostKills = function (mostName, mostScore) {
      _mostKills.splice(0, 1, new MostKill(mostName, mostScore));
    }
    this.getMostDeaths = function () {
      return _mostDeaths;
    }
    this.setMostDeaths = function (mostName, mostScore) {
      _mostDeaths.splice(0, 1, new MostDeath(mostName, mostScore));
    }
    this.getMostWins = function () {
      return _mostWins;
    }
    this.setMostWins = function (mostName, mostScore) {
      _mostWins.splice(0, 1, new MostWin(mostName, mostScore));
    }
    this.getMostLosses = function () {
      return _mostLosses;
    }
    this.setMostLosses = function (mostName, mostScore) {
      _mostLosses.splice(0, 1, new MostLoss(mostName, mostScore));
    }
    this.getMostAssists = function () {
      return _mostAssists;
    }
    this.setMostAssists = function (mostName, mostScore) {
      _mostAssists.splice(0, 1, new MostAssist(mostName, mostScore));
    }
    this.getMostHealing = function () {
      return _mostHealing;
    }
    this.setMostHealing = function (mostName, mostScore) {
      _mostHealing.splice(0, 1, new MostHeal(mostName, mostScore));
    }
    this.getMostDamage = function () {
      return _mostDamage;
    }
    this.setMostDamage = function (mostName, mostScore) {
      _mostDamage.splice(0, 1, new MostDamage(mostName, mostScore));
    }
    this.getMostObjectiveKills = function () {
      return _mostObjectiveKills;
    }
    this.setMostObjectiveKills = function (mostName, mostScore) {
      _mostObjectiveKills.splice(0, 1, new MostKill(mostName, mostScore));
    }

    function Player(fFirstName, fLastName, fEmail) {
      this.firstName = fFirstName;
      this.lastName = fLastName;
      this.email = fEmail;
      this.kills = 0;
      this.deaths = 0;
      this.wins = 0;
      this.losses = 0;
      this.assists = 0;
      this.damage = 0;
      this.healing = 0;
      this.objectiveKills = 0;
      this.gameNum = 0;
    }


    this.getPlayers = function () {
      return _players;
    }

    this.addPlayer = function (fname, lname, email) {
      _players.push(new Player(fname, lname, email))

    }

  })