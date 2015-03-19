<!DOCTYPE html>
<html>
    <head>
        <title>Game</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="Group Project">

        <link rel="stylesheet" type="text/css" href="TMHolenStyle.css">
    </head>

    <body>
        <nav>
            <ul>
                <li><a href="index.html">Game</a></li>
                <li><a href="howToPlay.html">How to Play</a></li>
                <li><a href="javascriptFun.html">JavaScript Fun</a></li>
                <li><a href="development.html">The Development</a></li>
                <li><a href="about.html">About Us</a></li>
            </ul>
        </nav>

        <aside>    
            <h3>Advertisement:</h3>
        </aside>

        <div id="headerAndMainContainer">
            <header>
                <div class="container">><img src="graphicElements/Logo.png" alt="Team4 Logo" id="logo"></div>
            </header>
            <main>
                <div class="divInlineBlockContaine">
                    <ul>
                        <?php
                        require "dbconnect.php";

                        date_default_timezone_set('Europe/Oslo');

                        /* Execute a prepared statement by passing an array of values */
                        $sth = $dbh->prepare('SELECT name, score, date
                            FROM highscores
                            ORDER BY score DESC LIMIT 50');

                        $sth->execute();
                        $scores = $sth->fetchAll();


                        foreach ($scores as $score) {
                            ?>
                            <li>
                                <?php
                                echo $score["name"], " - ", $score["score"], " - ", date('Y-m-d H:i:s',strtotime($score['date']));
                                ?>
                            </li>
                            <?php
                        }
                        ?>
                    </ul>
                </div>
            </main>
        </div>

        <aside id="Right">
            <h3>Advertisment:</h3>
        </aside>

        <footer>
            <div id="footerContainer">
                <small><i>Team4 &copy; 2015 - <a href="">TMHolen@tmholen.com</a></i></small>
            </div>
        </footer>  
    </body>
</html>

