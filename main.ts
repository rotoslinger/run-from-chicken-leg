namespace SpriteKind {
    export const enemyAndFood = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.enemyAndFood, function (sprite, otherSprite) {
    mySprite.destroy(effects.disintegrate, 5000)
    game.over(false)
})
let mySprite: Sprite = null
mySprite = sprites.create(img`
. . . . . . . . . . b b b b b b . . . . . . . . . . . . . . . . 
. . . . . . . b b b 4 4 4 4 4 4 b b . . . . . . . . . . . . . . 
. . . . . 2 2 4 4 4 4 4 d d d 4 4 4 b . . . . . . . . . . . . . 
. . . . 2 4 4 4 4 4 4 4 4 d d d d 4 4 e . . . . . . . . . . . . 
. . . 2 4 4 4 4 4 4 4 4 4 4 4 d d d 4 b e . . . . . . . . . . . 
. . 2 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 d 4 b e . . . . . . . . . . 
. 2 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . . 
2 b b 4 b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
2 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
2 b b b 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 e . . . . . . . . 
2 2 b b b 4 4 4 b b 4 b b 4 4 4 4 4 4 4 4 4 b e . . . . . . . . 
. 2 b b b b b 4 4 b b b b 4 4 4 4 4 4 4 4 b b e . . . . . . . . 
. 2 2 b b b b b b b b 4 4 b b b 4 4 4 4 4 4 b b e . . . . . . . 
. . e e e b b b b b b b 4 4 b b b 4 4 4 4 4 4 b e . . . . . . . 
. . . e e e e e b b b b b b b b 4 4 b 4 4 4 4 b e . . . . . . . 
. . . . . e e e e e e 2 2 2 b b 4 4 b b b 4 b b e . . . . . . . 
. . . . . . . e e e e e 2 2 2 b b 4 4 b b b b e e . . . . . . . 
. . . . . . . . . . . . e 2 2 2 b b b b b b b e c . . . . . . . 
. . . . . . . . . . . . . . e e 2 b b b b e e b d b . . . . . . 
. . . . . . . . . . . . . . . . . e e e e e c d d d b . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . c d 1 1 b b b b . 
. . . . . . . . . . . . . . . . . . . . . . . . c d 1 1 1 d b b 
. . . . . . . . . . . . . . . . . . . . . . . . . b 1 1 1 1 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c 1 1 d d 1 c 
. . . . . . . . . . . . . . . . . . . . . . . . . c d 1 d b c . 
. . . . . . . . . . . . . . . . . . . . . . . . . c b 1 1 c . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . c c c . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKind.enemyAndFood)
let mySprite2 = sprites.create(img`
4 4 4 4 
4 4 4 4 
4 4 4 4 
4 4 4 4 
`, SpriteKind.Player)
mySprite.vx = 40
mySprite.vy = 60
mySprite.setFlag(SpriteFlag.BounceOnWall, true)
mySprite2.setFlag(SpriteFlag.StayInScreen, true)
scene.setBackgroundColor(9)
mySprite.setPosition(26, 19)
controller.moveSprite(mySprite2)
game.setDialogTextColor(2)
game.setDialogCursor(img`
. . . . . . . . . . . . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
. . f f f . . . f f f . . . . . 
`)
game.setDialogFrame(img`
2 2 2 2 f 2 2 f 2 2 f 2 2 2 2 
2 1 1 1 f 1 1 f 1 1 f 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 1 1 2 f 2 2 f 2 2 f 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 1 1 1 1 1 1 1 2 1 1 2 
2 1 1 2 f 2 2 f 2 2 f 2 1 1 2 
2 1 1 1 f 1 1 f 1 1 f 1 1 1 2 
2 1 1 1 1 1 1 1 1 1 1 1 1 1 2 
2 2 2 2 f 2 2 f 2 2 f 2 2 2 2 
`)
game.showLongText("run from the bouncing chicken leg!!!!!!!!", DialogLayout.Bottom)
