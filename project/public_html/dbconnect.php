<?php
/* SELECT `name` FROM `highscores` ORDER BY score DESC LIMIT 10;
  INSERT INTO `highscores`(`name`, `score`) VALUES (,) */

/* Connect to an ODBC database using driver invocation */
$dsn = 'mysql:dbname=Scores;host=127.0.0.1';
$user = 'TorMx95';
$password = 'Supernova99';

try {
    $dbh = new PDO($dsn, $user, $password);
} catch (PDOException $e) {
    echo 'Connection failed: ' . $e->getMessage();
}

