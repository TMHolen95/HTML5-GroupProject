RESOURCES.addImage("enemy1", "img/enemy1.png");

Enemy1.prototype = Object.create(GameObject.prototype);

function Enemy1(x, vx) {
    GameObject.call(this);

    this.pos.x = x;
    this.pos.y = 40;
    this.vel.x = vx;

    this.padding.left = 0;
    this.padding.right = 40;
    this.padding.bottom = 40;
    this.padding.top = 0;

    this.type = "enemy";


    this.hp = 1;

    var _lastJump = 0;
    var _jumpFrequency = Math.floor((Math.random() * 10) + 10)
    var _nextJump = _calculateNextJump();



    this.draw = function (ctx) {
        var pos = this.getRealCoordinates(ctx);
        ctx.font="12px sans-serif";
        ctx.fillText(this.hp, pos.x + 15, pos.y-10);
        ctx.drawImage(RESOURCES.getImage("enemy1"), pos.x, pos.y, 40, 40);
    };


    this.update = function (timedelta) {

        if(!this.isStunned()){
            _lastJump += timedelta;

            if (_lastJump > _nextJump) {
                this.setVelocity(null, Math.floor(Math.random() * 40 + 30));
                _lastJump = 0;
                _nextJump = _calculateNextJump();
            }
        }

        GameObject.prototype.update.call(this, timedelta);
    };


    this.onWallHit = function (direction, canvas) {

        // switch(direction){
        //     case DIRECTION.LEFT:
        //     case DIRECTION.RIGHT:
        //         this.destroy();
        //         return;
        // }
        GameObject.prototype.onWallHit.call(this, direction, canvas);
    };


    function _calculateNextJump() {
        return Math.floor((Math.random() * _jumpFrequency) + 1);
    }
}



RESOURCES.addImage("enemy2", "img/enemy2.png");

Enemy2.prototype = Object.create(Enemy1.prototype);

function Enemy2(x, vx) {
    Enemy1.call(this, x, vx);

    this.pos.y = 80;

    this.padding.left = 0;
    this.padding.right = 80;
    this.padding.bottom = 80;
    this.padding.top = 0;

    this.hp = 3;

    this.draw = function (ctx) {
        var pos = this.getRealCoordinates(ctx);
        ctx.font="12px sans-serif";
        ctx.fillText(this.hp, pos.x + 35, pos.y-10);
        ctx.drawImage(RESOURCES.getImage("enemy2"), pos.x, pos.y, 80, 80);
    };

}
