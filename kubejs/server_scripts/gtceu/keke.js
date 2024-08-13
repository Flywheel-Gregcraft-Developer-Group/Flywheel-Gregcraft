ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('shully_casing')
        .itemInputs('1x kubejs:soursteel_casing')
        .itemOutputs('1x kubejs:shully_casing')
        .inputFluids(Fluid.of('gtceu:enriched_keke_matter', 576))
        .duration(270)
        .EUt(30720)
        .circuit(6)
    event.recipes.gtceu.assembler('shully_reactor_block')
        .itemInputs('1x kubejs:shully_casing', '1x gtceu:zpm_field_generator', '4x gtceu:duranium_small_fluid_pipe', '4x gtceu:hyper_enderite_double_wire')
        .itemOutputs('1x kubejs:shully_reactor_block')
        .inputFluids(Fluid.of('gtceu:bio_sticker', 288))
        .duration(322)
        .EUt(122880)
        .circuit(6)

    event.recipes.gtceu.macerator('shulker_shell_crush')
        .itemInputs('1x minecraft:shulker_shell')
        .itemOutputs('1x gtceu:ender_pearl_dust', '1x gtceu:keke_matter_dust')
        .chancedOutput('1x gtceu:keke_matter_dust', 5000, 250)
        .chancedOutput('1x gtceu:small_dragonium_dust', 3000, 250)
        .duration(150)
        .EUt(512)
    event.recipes.gtceu.source_reactor('keke_matter_enrich')
        .itemInputs('1x kubejs:void_essence')
        .inputFluids(Fluid.of('gtceu:keke_matter', 576))
        .outputFluids(Fluid.of('gtceu:enriched_keke_matter', 144))
        .duration(110)
        .EUt(30720)
        
    let speed_mul = [1, 4, 16, 64, 256, 1024]

    function Keke(element, fluid, no, speed) {
        if (fluid) {
            event.recipes.gtceu.keke_generator('keke_'+speed+'_'+element)
                .circuit(speed+1)
                .inputFluids(Fluid.of('gtceu:enriched_keke_matter', (no+50)*speed_mul[speed]), Fluid.of('gtceu:'+element, 144*speed_mul[speed]))
                .duration(20*no)
                .EUt(-131072*speed_mul[speed])
        } else {
            event.recipes.gtceu.keke_generator('keke_'+speed+'_'+element+'_dust')
                .circuit(speed+1)
                .itemInputs(speed_mul[speed]+'x gtceu:'+element+'_dust')
                .inputFluids(Fluid.of('gtceu:enriched_keke_matter', (no+50)*speed_mul[speed]))
                .duration(20*no)
                .EUt(-131072*speed_mul[speed])
        }
    }

    Keke('hydrogen', true, 1, 0)
    Keke('hydrogen', true, 1, 1)

    Keke('helium', true, 2, 0)
    Keke('helium', true, 2, 1)

    Keke('lithium', false, 3, 0)
    Keke('lithium', false, 3, 1)
    Keke('lithium', false, 3, 2)

    Keke('beryllium', false, 4, 0)
    Keke('beryllium', false, 4, 1)
    Keke('beryllium', false, 4, 2)

    Keke('boron', false, 5, 0)
    Keke('boron', false, 5, 1)
    Keke('boron', false, 5, 2)

    Keke('carbon', false, 6, 0)
    Keke('carbon', false, 6, 1)
    Keke('carbon', false, 6, 2)

    Keke('nitrogen', true, 7, 0)
    Keke('nitrogen', true, 7, 1)
    Keke('nitrogen', true, 7, 2)

    Keke('oxygen', true, 8, 0)
    Keke('oxygen', true, 8, 1)
    Keke('oxygen', true, 8, 2)

    Keke('fluorine', true, 9, 0)
    Keke('fluorine', true, 9, 1)
    Keke('fluorine', true, 9, 2)

    Keke('neon', true, 10, 0)
    Keke('neon', true, 10, 1)
    Keke('neon', true, 10, 2)

    Keke('sodium', false, 11, 0)
    Keke('sodium', false, 11, 1)
    Keke('sodium', false, 11, 2)

    Keke('magnesium', false, 12, 0)
    Keke('magnesium', false, 12, 1)
    Keke('magnesium', false, 12, 2)

    Keke('aluminium', false, 13, 0)
    Keke('aluminium', false, 13, 1)
    Keke('aluminium', false, 13, 2)

    Keke('silicon', false, 14, 0)
    Keke('silicon', false, 14, 1)
    Keke('silicon', false, 14, 2)

    Keke('phosphorus', false, 15, 0)
    Keke('phosphorus', false, 15, 1)
    Keke('phosphorus', false, 15, 2)

    Keke('sulfur', false, 16, 0)
    Keke('sulfur', false, 16, 1)
    Keke('sulfur', false, 16, 2)
    
    Keke('chlorine', true, 17, 0)
    Keke('chlorine', true, 17, 1)
    Keke('chlorine', true, 17, 2)

    Keke('argon', true, 18, 0)
    Keke('argon', true, 18, 1)
    Keke('argon', true, 18, 2)

    Keke('potassium', false, 19, 0)
    Keke('potassium', false, 19, 1)
    Keke('potassium', false, 19, 2)
    Keke('potassium', false, 19, 3)

    Keke('calcium', false, 20, 0)
    Keke('calcium', false, 20, 1)
    Keke('calcium', false, 20, 2)
    Keke('calcium', false, 20, 3)
/*
    Keke('scandium', false, 21, 0)
    Keke('scandium', false, 21, 1)
    Keke('scandium', false, 21, 2)
    Keke('scandium', false, 21, 3)
*/
    Keke('titanium', false, 22, 0)
    Keke('titanium', false, 22, 1)
    Keke('titanium', false, 22, 2)
    Keke('titanium', false, 22, 3)

    Keke('vanadium', false, 23, 0)
    Keke('vanadium', false, 23, 1)
    Keke('vanadium', false, 23, 2)
    Keke('vanadium', false, 23, 3)

    Keke('chromium', false, 24, 0)
    Keke('chromium', false, 24, 1)
    Keke('chromium', false, 24, 2)
    Keke('chromium', false, 24, 3)

    Keke('manganese', false, 25, 0)
    Keke('manganese', false, 25, 1)
    Keke('manganese', false, 25, 2)
    Keke('manganese', false, 25, 3)

    Keke('iron', false, 26, 0)
    Keke('iron', false, 26, 1)
    Keke('iron', false, 26, 2)
    Keke('iron', false, 26, 3)

    Keke('cobalt', false, 27, 0)
    Keke('cobalt', false, 27, 1)
    Keke('cobalt', false, 27, 2)
    Keke('cobalt', false, 27, 3)

    Keke('nickel', false, 28, 0)
    Keke('nickel', false, 28, 1)
    Keke('nickel', false, 28, 2)
    Keke('nickel', false, 28, 3)

    Keke('copper', false, 29, 0)
    Keke('copper', false, 29, 1)
    Keke('copper', false, 29, 2)
    Keke('copper', false, 29, 3)

    Keke('zinc', false, 30, 0)
    Keke('zinc', false, 30, 1)
    Keke('zinc', false, 30, 2)
    Keke('zinc', false, 30, 3)

    Keke('gallium', false, 31, 0)
    Keke('gallium', false, 31, 1)
    Keke('gallium', false, 31, 2)
    Keke('gallium', false, 31, 3)
/*
    Keke('germanium', false, 32, 0)
    Keke('germanium', false, 32, 1)
    Keke('germanium', false, 32, 2)
    Keke('germanium', false, 32, 3)
*/
    Keke('arsenic', false, 33, 0)
    Keke('arsenic', false, 33, 1)
    Keke('arsenic', false, 33, 2)
    Keke('arsenic', false, 33, 3)
/*
    Keke('selenium', false, 34, 0)
    Keke('selenium', false, 34, 1)
    Keke('selenium', false, 34, 2)
    Keke('selenium', false, 34, 3)
*/
    Keke('bromine', true, 35, 0)
    Keke('bromine', true, 35, 1)
    Keke('bromine', true, 35, 2)
    Keke('bromine', true, 35, 3)

    Keke('krypton', true, 36, 0)
    Keke('krypton', true, 36, 1)
    Keke('krypton', true, 36, 2)
    Keke('krypton', true, 36, 3)
/*
    Keke('rubidium', false, 37, 0)
    Keke('rubidium', false, 37, 1)
    Keke('rubidium', false, 37, 2)
    Keke('rubidium', false, 37, 3)

    Keke('strontium', false, 38, 0)
    Keke('strontium', false, 38, 1)
    Keke('strontium', false, 38, 2)
    Keke('strontium', false, 38, 3)
*/
    Keke('yttrium', false, 39, 0)
    Keke('yttrium', false, 39, 1)
    Keke('yttrium', false, 39, 2)
    Keke('yttrium', false, 39, 3)
/*
    Keke('zirconium', false, 40, 0)
    Keke('zirconium', false, 40, 1)
    Keke('zirconium', false, 40, 2)
    Keke('zirconium', false, 40, 3)
*/
    Keke('niobium', false, 41, 0)
    Keke('niobium', false, 41, 1)
    Keke('niobium', false, 41, 2)
    Keke('niobium', false, 41, 3)
    
    Keke('molybdenum', false, 42, 0)
    Keke('molybdenum', false, 42, 1)
    Keke('molybdenum', false, 42, 2)
    Keke('molybdenum', false, 42, 3)
/*
    Keke('technetium', false, 43, 0)
    Keke('technetium', false, 43, 1)
    Keke('technetium', false, 43, 2)
    Keke('technetium', false, 43, 3)
*/
    Keke('ruthenium', false, 44, 0)
    Keke('ruthenium', false, 44, 1)
    Keke('ruthenium', false, 44, 2)
    Keke('ruthenium', false, 44, 3)

    Keke('rhodium', false, 45, 0)
    Keke('rhodium', false, 45, 1)
    Keke('rhodium', false, 45, 2)
    Keke('rhodium', false, 45, 3)

    Keke('palladium', false, 46, 0)
    Keke('palladium', false, 46, 1)
    Keke('palladium', false, 46, 2)
    Keke('palladium', false, 46, 3)

    Keke('silver', false, 47, 0)
    Keke('silver', false, 47, 1)
    Keke('silver', false, 47, 2)
    Keke('silver', false, 47, 3)

    Keke('cadmium', false, 48, 0)
    Keke('cadmium', false, 48, 1)
    Keke('cadmium', false, 48, 2)
    Keke('cadmium', false, 48, 3)

    Keke('indium', false, 49, 0)
    Keke('indium', false, 49, 1)
    Keke('indium', false, 49, 2)
    Keke('indium', false, 49, 3)

    Keke('tin', false, 50, 0)
    Keke('tin', false, 50, 1)
    Keke('tin', false, 50, 2)
    Keke('tin', false, 50, 3)

    Keke('antimony', false, 51, 0)
    Keke('antimony', false, 51, 1)
    Keke('antimony', false, 51, 2)
    Keke('antimony', false, 51, 3)
/*
    Keke('tellurium', false, 52, 0)
    Keke('tellurium', false, 52, 1)
    Keke('tellurium', false, 52, 2)
    Keke('tellurium', false, 52, 3)
*/
    Keke('iodine', false, 53, 0)
    Keke('iodine', false, 53, 1)
    Keke('iodine', false, 53, 2)
    Keke('iodine', false, 53, 3)

    Keke('xenon', true, 54, 0)
    Keke('xenon', true, 54, 1)
    Keke('xenon', true, 54, 2)
    Keke('xenon', true, 54, 3)
})