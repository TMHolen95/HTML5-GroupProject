<?php

if ($_SERVER["REQUEST_METHOD"] != "POST") {
    die("Failed!");
}
if (!isset($_POST["player"]) || !isset($_POST["score"])) {
    die("Missing values!");
}

$playerName = $_POST["player"];
if(strlen($playerName) > 20){
    die("Wrong input!");
}
$score =  $_POST["score"];
if(!ctype_digit($score)){
    die("Wrong input!");
}

require "dbconnect.php";

/* Execute a prepared statement by passing an array of values */
$sth = $dbh->prepare('INSERT INTO `highscores`(`name`, `score`) VALUES (:name, :score)');

$result = $sth->execute(array("name" => $playerName, "score" => $score));
if($result){
    echo "OK!";
}
else{
    echo "Error!";
}