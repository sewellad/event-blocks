controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.setVelocity(76, 73)
})
info.onCountdownEnd(function () {
    game.gameOver(true)
    game.setGameOverEffect(true, effects.confetti)
    game.setGameOverScoringType(game.ScoringType.HighScore)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
    info.changeScoreBy(4)
    sprites.destroy(otherSprite, effects.spray, 500)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeScoreBy(2)
    info.changeLifeBy(-1)
    sprites.destroy(otherSprite, effects.spray, 500)
})
let mySprite3: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`billie jean`, SpriteKind.Player)
controller.moveSprite(mySprite)
info.setLife(5)
mySprite.setStayInScreen(true)
game.splash("Hello young space fight! Welcome to Space fighter")
effects.starField.startScreenEffect()
game.splash("In this game you will have 30 seconds to catch as many cherries as possible before the time runs out.Use the arrow buttons to help you move around and use the \"A\" button for a little boost.But be careful to not get the evil space ghost.")
game.splash("Good Luck Fighter")
info.startCountdown(30)
game.onUpdateInterval(1000, function () {
    mySprite2 = sprites.create(img`
        . . . . . . . . . . . 6 6 6 6 6 
        . . . . . . . . . 6 6 7 7 7 7 8 
        . . . . . . 8 8 8 7 7 8 8 6 8 8 
        . . e e e e c 6 6 8 8 . 8 7 8 . 
        . e 2 5 4 2 e c 8 . . . 6 7 8 . 
        e 2 4 2 2 2 2 2 c . . . 6 7 8 . 
        e 2 2 2 2 2 2 2 c . . . 8 6 8 . 
        e 2 e e 2 2 2 2 e e e e c 6 8 . 
        c 2 e e 2 2 2 2 e 2 5 4 2 c 8 . 
        . c 2 e e e 2 e 2 4 2 2 2 2 c . 
        . . c 2 2 2 e e 2 2 2 2 2 2 2 e 
        . . . e c c e c 2 2 2 2 2 2 2 e 
        . . . . . . . c 2 e e 2 2 e 2 c 
        . . . . . . . c e e e e e e 2 c 
        . . . . . . . . c e 2 2 2 2 c . 
        . . . . . . . . . c c c c c . . 
        `, SpriteKind.Food)
    mySprite2.y = scene.screenHeight()
    mySprite2.x = randint(10, scene.screenWidth() - 10)
    mySprite2.vy = -40
    mySprite3 = sprites.create(img`
        ........................
        ........................
        ........................
        ........................
        ..........ffff..........
        ........ff1111ff........
        .......fb111111bf.......
        .......f11111111f.......
        ......fd11111111df......
        ......fd11111111df......
        ......fddd1111dddf......
        ......fbdbfddfbdbf......
        ......fcdcf11fcdcf......
        .......fb111111bf.......
        ......fffcdb1bdffff.....
        ....fc111cbfbfc111cf....
        ....f1b1b1ffff1b1b1f....
        ....fbfbffffffbfbfbf....
        .........ffffff.........
        ...........fff..........
        ........................
        ........................
        ........................
        ........................
        `, SpriteKind.Enemy)
    mySprite3.y = scene.screenHeight()
    mySprite3.x = randint(10, scene.screenWidth() - 10)
    mySprite3.vy = -40
})
