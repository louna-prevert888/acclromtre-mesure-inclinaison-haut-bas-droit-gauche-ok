basic.forever(function () {
    if (input.acceleration(Dimension.Y) < -200) {
        if (input.acceleration(Dimension.X) < -200) {
            basic.showArrow(ArrowNames.NorthWest)
        } else if (input.acceleration(Dimension.X) < 200) {
            basic.showArrow(ArrowNames.North)
        } else {
            basic.showArrow(ArrowNames.NorthEast)
        }
    } else if (input.acceleration(Dimension.Y) < 200) {
        if (input.acceleration(Dimension.X) < -200) {
            basic.showArrow(ArrowNames.West)
        } else if (input.acceleration(Dimension.X) < 200) {
            basic.showLeds(`
                . . . . .
                . . . . #
                . . . # .
                # . # . .
                . # . . .
                `)
        } else {
            basic.showArrow(ArrowNames.East)
        }
    } else {
        if (input.acceleration(Dimension.X) < -200) {
            basic.showArrow(ArrowNames.SouthWest)
        } else if (input.acceleration(Dimension.X) < 200) {
            basic.showArrow(ArrowNames.South)
        } else {
            basic.showArrow(ArrowNames.SouthEast)
        }
    }
})
