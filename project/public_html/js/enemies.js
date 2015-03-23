RESOURCES.addImage("enemy1", "img/enemy1.png");
RESOURCES.addImage("enemy2", "img/enemy2.png");


EnemyBase.prototype = Object.create(GameObject.prototype);

function EnemyBase(x, vx) {
    GameObject.call(this);

    this.pos.x = x;
    this.vel.x = vx;

    this.type = "enemy";

    this.padding.right = this.img.width;
    this.padding.bottom = this.img.height;

    var _lastJump = 0;
    var _jumpFrequency = Math.floor((Math.random() * 10) + 10);
    var _nextJump = _calculateNextJump();

    this.draw = function (ctx) {
        var pos = this.getRealCoordinates(ctx);
        ctx.font="12px sans-serif";
        ctx.textAlign="center";
        ctx.fillText(this.hp, pos.x + this.img.width/2, pos.y-10);
        this.img.draw(ctx, pos.x, pos.y);
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

    function _calculateNextJump() {
        return Math.floor((Math.random() * _jumpFrequency) + 1);
    }
}


Enemy1.prototype = Object.create(EnemyBase.prototype);

function Enemy1(x, vx) {

    this.img = new ImageDrawer("enemy1", 40, 40)

    EnemyBase.call(this, x, vx);

    this.pos.y = 40;

    this.hp = 1;

}


Enemy2.prototype = Object.create(EnemyBase.prototype);

function Enemy2(x, vx) {

    this.img = new ImageDrawer("enemy2", 80, 80)

    EnemyBase.call(this, x, vx);

    this.pos.y = 80;

    this.hp = 3;
}

