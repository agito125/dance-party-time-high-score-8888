controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = CakeXs[1]
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = CakeXs[0]
})
sprites.onOverlap(SpriteKind.Food, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy(effects.disintegrate, 100)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = CakeXs[2]
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    dancer.x = CakeXs[3]
})
function setUpStopper () {
    stopper = sprites.create(assets.image`Pink and purple`, SpriteKind.Enemy)
    stopper.setPosition(80, 116)
    animation.runImageAnimation(
    stopper,
    assets.animation`Flashing bar`,
    200,
    true
    )
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(100)
    otherSprite.destroy(effects.smiles, 100)
})
function makeArrow () {
    arrowNumber = randint(0, 3)
    mySprite = sprites.create(arrowImgs[arrowNumber], SpriteKind.Food)
    mySprite.y = 0
    mySprite.vy = 60
    mySprite.x = CakeXs[arrowNumber]
}
let mySprite: Sprite = null
let arrowNumber = 0
let stopper: Sprite = null
let CakeXs: number[] = []
let arrowImgs: Image[] = []
let dancer: Sprite = null
info.setScore(0)
info.setLife(10)
dancer = sprites.create(assets.image`Ducky dancer`, SpriteKind.Player)
dancer.y = 95
scene.setBackgroundImage(assets.image`Party`)
arrowImgs = [assets.image`left`, assets.image`up`, assets.image`right`, assets.image`down`]
CakeXs = [35, 65, 95, 125]
setUpStopper()
effects.hearts.startScreenEffect()
dancer.x = CakeXs[0]
game.onUpdateInterval(500, function () {
    makeArrow()
})
