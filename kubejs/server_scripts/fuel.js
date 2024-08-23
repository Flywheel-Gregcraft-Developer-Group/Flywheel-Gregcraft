ServerEvents.recipes(event => {
    function SolidFuel(modid, input, time) {
        event.recipes.gtceu.steam_boiler(modid+'_'+input+'_boiler')
            .itemInputs('1x '+modid+':'+input)
            .duration(2400*time)
        event.recipes.gtceu.large_boiler(modid+'_'+input+'_large_boiler')
            .itemInputs('1x '+modid+':'+input)
            .duration(2.5*time)
    }
    SolidFuel('gtceu', 'pure_graphite_dust', 48)
    SolidFuel('gtceu', 'impure_graphite_dust', 48)
    SolidFuel('gtceu', 'tiny_graphite_dust', 48/9)
    SolidFuel('gtceu', 'small_graphite_dust', 12)
    SolidFuel('gtceu', 'graphite_dust', 48)

    SolidFuel('gtceu', 'pure_diamond_dust', 256)
    SolidFuel('gtceu', 'impure_diamond_dust', 256)
    SolidFuel('gtceu', 'tiny_diamond_dust', 256/9)
    SolidFuel('gtceu', 'small_diamond_dust', 64)
    SolidFuel('gtceu', 'diamond_dust', 256)
    SolidFuel('gtceu', 'chipped_diamond_gem', 64)
    SolidFuel('gtceu', 'flawed_diamond_gem', 128)
    SolidFuel('minecraft', 'diamond', 256)
    SolidFuel('gtceu', 'flawless_diamond_gem', 512)
    SolidFuel('gtceu', 'exquisite_diamond_gem', 1024)
    SolidFuel('minecraft', 'diamond_block', 2560)

    SolidFuel('kubejs', 'magic_fuel', 1024)
    SolidFuel('kubejs', 'magic_fuel_block', 10240)

    SolidFuel('avaritia', 'crystal_matrix_ingot', 65536)
    SolidFuel('avaritia', 'crystal_matrix', 655360)

    event.recipes.gtceu.steam_boiler('blaze_boiler')
        .inputFluids(Fluid.of('gtceu:blaze', 36))
        .duration(2400*2)
    event.recipes.gtceu.large_boiler('blaze_large_boiler')
        .inputFluids(Fluid.of('gtceu:blaze', 36))
        .duration(2.5*2)
})

Item.getItem('gtceu:pure_graphite_dust').burnTime = 200*64
Item.getItem('gtceu:impure_graphite_dust').burnTime = 200*64
Item.getItem('gtceu:tiny_graphite_dust').burnTime = 1422
Item.getItem('gtceu:small_graphite_dust').burnTime = 200*16
Item.getItem('gtceu:graphite_dust').burnTime = 200*64

Item.getItem('gtceu:pure_diamond_dust').burnTime = 200*256
Item.getItem('gtceu:impure_diamond_dust').burnTime = 200*256
Item.getItem('gtceu:tiny_diamond_dust').burnTime = 5688
Item.getItem('gtceu:small_diamond_dust').burnTime = 200*64
Item.getItem('gtceu:diamond_dust').burnTime = 200*256
Item.getItem('gtceu:chipped_diamond_gem').burnTime = 200*64
Item.getItem('gtceu:flawed_diamond_gem').burnTime = 200*128
Item.getItem('minecraft:diamond').burnTime = 200*256
Item.getItem('gtceu:flawless_diamond_gem').burnTime = 200*512
Item.getItem('gtceu:exquisite_diamond_gem').burnTime = 200*1024
Item.getItem('minecraft:diamond_block').burnTime = 200*2560

Item.getItem('kubejs:magic_fuel').burnTime = 200*1024
Item.getItem('kubejs:magic_fuel_block').burnTime = 200*10240

Item.getItem('avaritia:crystal_matrix_ingot').burnTime = 200*65536
Item.getItem('avaritia:crystal_matrix').burnTime = 200*655360