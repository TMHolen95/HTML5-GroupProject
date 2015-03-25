function Spawner(game) {

    var difficulty = 20;
    var lastNumberOfEnemies = game.getEnemyCount();
    var lastTime = 0;
    var timeBetweenSpawns = 1;
    this.update = function (time) {

        var currentTime = Math.floor(time / 1000);
        var timeInterval = currentTime - lastTime;

        if (timeInterval >= timeBetweenSpawns) {

            var newEnemy = Math.floor(Math.random() * 100);
            lastTime = currentTime;

            var currentNumberOfEnemies = game.getEnemyCount();

            if (currentNumberOfEnemies !== lastNumberOfEnemies) {
                lastNumberOfEnemies = currentNumberOfEnemies;
                difficulty++;
            }

            if (newEnemy < difficulty) {

                if (newEnemy <= (difficulty / 2)) {
                    if (newEnemy < (difficulty / 4)) {
                        game.addGameObject(new Enemy1(10, 7));
                    }
                    if (newEnemy >= (difficulty / 4)) {
                        game.addGameObject(new Enemy1(900, 7));
                    }
                    RESOURCES.getSound("enemy1").play();
                }
                if (newEnemy >= (difficulty / 2)) {
                    if (newEnemy < (difficulty / 2 + difficulty / 4)) {
                        game.addGameObject(new Enemy2(10, 7));
                        RESOURCES.getSound("enemy1").play();
                    }
                    if (newEnemy >= (difficulty - difficulty / 4)) {
                        game.addGameObject(new Enemy2(900, 7));
                        RESOURCES.getSound("enemy1").play();
                    }
                }
            }
        }
    };
}