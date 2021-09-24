// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile8 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`100010000e0101010101010101010101010101010101010606060601010111010101010101010802020202070606010113010101010108020b0209020e020701010101010112080202021002020202030101010101010802090e020b020a0203010101010101080202020a020209090701010101010101050202020b02090f0203010113011101010404040405020202030101010101010101010101010404040101110101010101010101010101010606010101060601011101010101010d020207010102020701010112010108020b02020301021002030101010101010502100c01010b02020701010101010101040401010102020202030101010112010101010101`, img`
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 2 . . . 
. . . . 2 . . . 2 . . . . . . . 
. 2 . . . . . . . . . . . . . . 
. . . . . 2 . 2 . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . 2 . . 2 . . . . 2 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . 2 . . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tilePath4,sprites.castle.tilePath2,sprites.castle.tilePath3,sprites.castle.tilePath8,sprites.castle.tilePath7,sprites.castle.tilePath6,sprites.castle.tileGrass2,sprites.castle.tileGrass3,myTiles.tile1,sprites.castle.tilePath1,sprites.castle.tilePath9,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile4,myTiles.tile8], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile5":
            case "tile7":return tile7;
            case "myTile0":
            case "tile2":return tile2;
            case "myTile1":
            case "tile3":return tile3;
            case "myTile3":
            case "tile5":return tile5;
            case "myTile4":
            case "tile6":return tile6;
            case "myTile2":
            case "tile4":return tile4;
            case "myTile6":
            case "tile8":return tile8;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
