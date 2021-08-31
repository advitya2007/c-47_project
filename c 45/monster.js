class Monster{
    constructor()
    {
        this.monster=createSprite(random(300,1000),10);
        this.monster.addAnimation("monster",monsterAnimation);
        this.monster.scale = 0.2;
        this.monster.velocityY = 10;
    }
}