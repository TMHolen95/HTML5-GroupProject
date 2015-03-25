Castle.prototype = Object.create(GameObject.prototype);

function Castle(game) {
    GameObject.call(this);

    var _this = this;

    this.type = "castle";

    this.acc.x = 0;
    this.acc.y = 0;
    this.vel.x = 0;
    this.vel.y = 0;

    this.hp = 20;

    this.pos.x = 370;
    this.pos.y = 120;

    var _img = new ImageDrawer("castle", 160, 120);

    // The padding is a little smaller than 
    // the image to make the enemies go slightly into 
    // the castle before they disappear.
    this.padding.left = -20;
    this.padding.right = _img.width - 20;
    this.padding.bottom = _img.height;
    this.padding.top = -10;

    this.draw = function (ctx) {
        var pos = this.getRealCoordinates(ctx);
        ctx.font = "12px sans-serif";
        ctx.textAlign = "center";
        ctx.fillText(this.hp, pos.x + _img.width / 2, pos.y - 10);
        _img.draw(ctx, pos.x, pos.y);
    };

    this.collisionDetected = function (obj) {
        if (obj.type == "enemy" && !obj.deleted) {
            obj.destroy();
            this.takeHit();
            if (this.hp == 0) {
                game.gameOver();
                return;
            }
            if (!this.isStunned())
                this.stun();
            RESOURCES.getSound("castleHit").play();
        }
    };

    this.onWallHit = function () {
        // Do nothing
    };
}