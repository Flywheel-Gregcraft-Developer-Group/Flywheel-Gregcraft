ServerEvents.recipes(event => {
    /*
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_water_ultra_low_rate')
        .inputFluids(Fluid.of('minecraft:water', 40))
        .EUt(-1)
        .duration(10)
        .inputStress(1024)
        .rpm(32)
        .circuit(0)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_water_low_rate')
        .inputFluids(Fluid.of('minecraft:water', 80))
        .EUt(-2)
        .duration(10)
        .inputStress(2048)
        .rpm(64)
        .circuit(1)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_water_medium_rate')
        .inputFluids(Fluid.of('minecraft:water', 200))
        .EUt(-4)
        .duration(10)
        .inputStress(4096)
        .rpm(128)
        .circuit(2)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_water_high_rate')
        .inputFluids(Fluid.of('minecraft:water', 500))
        .EUt(-8)
        .duration(10)
        .inputStress(8192)
        .rpm(256)
        .circuit(3)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_distilled_water_ultra_low_rate')
        .inputFluids(Fluid.of('gtceu:distilled_water', 20))
        .EUt(-1)
        .duration(10)
        .inputStress(1024)
        .rpm(32)
        .circuit(0)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_distilled_water_low_rate')
        .inputFluids(Fluid.of('gtceu:distilled_water', 40))
        .EUt(-2)
        .duration(10)
        .inputStress(2048)
        .rpm(64)
        .circuit(1)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_distilled_water_medium_rate')
        .inputFluids(Fluid.of('gtceu:distilled_water', 100))
        .EUt(-4)
        .duration(10)
        .inputStress(4096)
        .rpm(128)
        .circuit(2)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_distilled_water_high_rate')
        .inputFluids(Fluid.of('gtceu:distilled_water', 250))
        .EUt(-8)
        .duration(10)
        .inputStress(8192)
        .rpm(256)
        .circuit(3)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_lubricant_ultra_low_rate')
        .inputFluids(Fluid.of('gtceu:lubricant', 10))
        .EUt(-1)
        .duration(10)
        .rpm(32)
        .inputStress(1024)
        .circuit(0)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_lubricant_low_rate')
        .inputFluids(Fluid.of('gtceu:lubricant', 20))
        .EUt(-2)
        .duration(10)
        .rpm(64)
        .inputStress(2048)
        .circuit(1)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_lubricant_medium_rate')
        .inputFluids(Fluid.of('gtceu:lubricant', 50))
        .EUt(-4)
        .duration(10)
        .rpm(128)
        .inputStress(4096)
        .circuit(2)
    event.recipes.gtceu.kinetic_generator('kinetic_generator_with_lubricant_high_rate')
        .inputFluids(Fluid.of('gtceu:lubricant', 100))
        .EUt(-8)
        .duration(10)
        .rpm(256)
        .inputStress(8192)
        .circuit(3)
    */

    event.shaped(
        'gtceu:greenhouse',
        ['AWP', 'CSC', 'WCW'],
        {
            A: 'gtceu:mv_conveyor_module',
            P: 'gtceu:mv_electric_pump',
            W: 'gtceu:copper_single_cable',
            C: '#gtceu:circuits/mv',
            S: 'gtceu:solid_machine_casing'
        }
    ).id('gtceu:shaped/greenhouse')

    let voltage = [3, 15, 60, 240, 960, 3840, 15360, 61440, 245760, 983040, 3932160, 15728640, 62914560, 251658240, 1006632960]

    function Greenhouse(id, input, soil, fluid, output, tier, size, boosted) {
        if (boosted) {
            event.recipes.gtceu.greenhouse(id)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .notConsumable(InputItem.of(soil))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(480*size/tier)
                .EUt(voltage[tier])
        } else {
            event.recipes.gtceu.greenhouse(id)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .notConsumable(InputItem.of(soil))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(960*size/tier)
                .EUt(voltage[tier])
        }
    }

    //trees
    Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 'minecraft:dirt', 1000, ['8x gtceu:rubber_log', '2x gtceu:sticky_resin', 'gtceu:rubber_sapling'], 2, 3, false)
    Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 'minecraft:dirt', 1000, ['16x gtceu:rubber_log', '4x gtceu:sticky_resin', 'gtceu:rubber_sapling'], 2, 3, true)

    Greenhouse('oak_sapling', 'minecraft:oak_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', 'minecraft:oak_sapling'], 2, 3, false)
    Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '16x minecraft:oak_log', 'minecraft:oak_sapling'], 2, 3, true)

    Greenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 'minecraft:dirt', 1000, ['16x minecraft:dark_oak_log', 'minecraft:dark_oak_sapling'], 2, 3, false)
    Greenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 'minecraft:dirt', 1000, ['16x minecraft:dark_oak_log', '16x minecraft:dark_oak_log', 'minecraft:dark_oak_sapling'], 2, 3, true)

    Greenhouse('spruce_sapling', 'minecraft:spruce_sapling', 'minecraft:dirt', 1000, ['16x minecraft:spruce_log', 'minecraft:spruce_sapling'], 2, 3, false)
    Greenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 'minecraft:dirt', 1000, ['16x minecraft:spruce_log', '16x minecraft:spruce_log', 'minecraft:spruce_sapling'], 2, 3, true)

    Greenhouse('birch_sapling', 'minecraft:birch_sapling', 'minecraft:dirt', 1000, ['16x minecraft:birch_log', 'minecraft:birch_sapling'], 2, 3, false)
    Greenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 'minecraft:dirt', 1000, ['16x minecraft:birch_log', '16x minecraft:birch_log', 'minecraft:birch_sapling'], 2, 3, true)

    Greenhouse('acacia_sapling', 'minecraft:acacia_sapling', 'minecraft:dirt', 1000, ['16x minecraft:acacia_log', 'minecraft:acacia_sapling'], 2, 3, false)
    Greenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 'minecraft:dirt', 1000, ['16x minecraft:acacia_log', '16x minecraft:acacia_log', 'minecraft:acacia_sapling'], 2, 3, true)

    Greenhouse('jungle_sapling', 'minecraft:jungle_sapling', 'minecraft:dirt', 1000, ['16x minecraft:jungle_log', 'minecraft:jungle_sapling'], 2, 3, false)
    Greenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 'minecraft:dirt', 1000, ['16x minecraft:jungle_log', '16x minecraft:jungle_log', 'minecraft:jungle_sapling'], 2, 3, true)

    Greenhouse('cherry_sapling', 'minecraft:cherry_sapling', 'minecraft:dirt', 1000, ['16x minecraft:cherry_log', 'minecraft:cherry_sapling'], 2, 3, false)
    Greenhouse('cherry_sapling_boosted', 'minecraft:cherry_sapling', 'minecraft:dirt', 1000, ['16x minecraft:cherry_log', '16x minecraft:cherry_log', 'minecraft:cherry_sapling'], 2, 3, true)

    Greenhouse('crimson', 'minecraft:crimson_fungus', 'minecraft:crimson_nylium', 1000, ['12x minecraft:crimson_stem', 'minecraft:crimson_fungus'], 3, 3, false)
    Greenhouse('crimson_boosted', 'minecraft:crimson_fungus', 'minecraft:crimson_nylium', 1000, ['12x minecraft:crimson_stem', '12x minecraft:crimson_stem', 'minecraft:crimson_fungus'], 2, 3, true)

    Greenhouse('warped', 'minecraft:warped_fungus', 'minecraft:warped_nylium', 1000, ['12x minecraft:warped_stem', 'minecraft:warped_fungus'], 3, 3, false)
    Greenhouse('warped_boosted', 'minecraft:warped_fungus', 'minecraft:warped_nylium', 1000, ['12x minecraft:warped_stem', '12x minecraft:warped_stem', 'minecraft:warped_fungus'], 2, 3, true)

    Greenhouse('pear_sapling', 'fruitsdelight:pear_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:pear', 'fruitsdelight:pear_sapling'], 2, 3, false)
    Greenhouse('pear_sapling_boosted', 'fruitsdelight:pear_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:pear', 'fruitsdelight:pear_sapling'], 2, 3, true)

    Greenhouse('hawberry_sapling', 'fruitsdelight:hawberry_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:hawberry', 'fruitsdelight:hawberry_sapling'], 2, 3, false)
    Greenhouse('hawberry_sapling_boosted', 'fruitsdelight:hawberry_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:hawberry', 'fruitsdelight:hawberry_sapling'], 2, 3, true)

    Greenhouse('lychee_sapling', 'fruitsdelight:lychee_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:lychee', 'fruitsdelight:lychee_sapling'], 2, 3, false)
    Greenhouse('lychee_sapling_boosted', 'fruitsdelight:lychee_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:lychee', 'fruitsdelight:lychee_sapling'], 2, 3, true)

    Greenhouse('mango_sapling', 'fruitsdelight:mango_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:mango', 'fruitsdelight:mango_sapling'], 2, 3, false)
    Greenhouse('mango_sapling_boosted', 'fruitsdelight:mango_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:mango', 'fruitsdelight:mango_sapling'], 2, 3, true)

    Greenhouse('persimmon_sapling', 'fruitsdelight:persimmon_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:persimmon', 'fruitsdelight:persimmon_sapling'], 2, 3, false)
    Greenhouse('persimmon_sapling_boosted', 'fruitsdelight:persimmon_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:persimmon', 'fruitsdelight:persimmon_sapling'], 2, 3, true)

    Greenhouse('peach_sapling', 'fruitsdelight:peach_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:peach', 'fruitsdelight:peach_sapling'], 2, 3, false)
    Greenhouse('peach_sapling_boosted', 'fruitsdelight:peach_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:peach', 'fruitsdelight:peach_sapling'], 2, 3, true)

    Greenhouse('orange_sapling', 'fruitsdelight:orange_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:orange', 'fruitsdelight:orange_sapling'], 2, 3, false)
    Greenhouse('orange_sapling_boosted', 'fruitsdelight:orange_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:orange', 'fruitsdelight:orange_sapling'], 2, 3, true)

    Greenhouse('apple_sapling', 'fruitsdelight:apple_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x minecraft:apple', 'fruitsdelight:apple_sapling'], 2, 3, false)
    Greenhouse('apple_sapling_boosted', 'fruitsdelight:apple_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x minecraft:apple', 'fruitsdelight:apple_sapling'], 2, 3, true)

    Greenhouse('mangosteen_sapling', 'fruitsdelight:mangosteen_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:mangosteen', 'fruitsdelight:mangosteen_sapling'], 2, 3, false)
    Greenhouse('mangosteen_sapling_boosted', 'fruitsdelight:mangosteen_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:mangosteen', 'fruitsdelight:mangosteen_sapling'], 2, 3, true)

    Greenhouse('bayberry_sapling', 'fruitsdelight:bayberry_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:bayberry', 'fruitsdelight:bayberry_sapling'], 2, 3, false)
    Greenhouse('bayberry_sapling_boosted', 'fruitsdelight:bayberry_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:bayberry', 'fruitsdelight:bayberry_sapling'], 2, 3, true)

    Greenhouse('kiwi_sapling', 'fruitsdelight:kiwi_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:kiwi', 'fruitsdelight:kiwi_sapling'], 2, 3, false)
    Greenhouse('kiwi_sapling_boosted', 'fruitsdelight:kiwi_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:kiwi', 'fruitsdelight:kiwi_sapling'], 2, 3, true)

    Greenhouse('fig_sapling', 'fruitsdelight:fig_sapling', 'minecraft:dirt', 1000, ['8x minecraft:oak_log', '12x fruitsdelight:fig', 'fruitsdelight:fig_sapling'], 2, 3, false)
    Greenhouse('fig_sapling_boosted', 'fruitsdelight:fig_sapling', 'minecraft:dirt', 1000, ['16x minecraft:oak_log', '24x fruitsdelight:fig', 'fruitsdelight:fig_sapling'], 2, 3, true)

    Greenhouse('palm_sapling', 'beachparty:palm_sapling', 'minecraft:dirt', 1000, ['16x beachparty:palm_log', 'beachparty:palm_sapling'], 2, 3, false)
    Greenhouse('palm_sapling_boosted', 'beachparty:palm_sapling', 'minecraft:dirt', 1000, ['16x beachparty:palm_log', '16x beachparty:palm_log', 'beachparty:palm_sapling'], 2, 3, true)

    Greenhouse('vinery_cherry_sapling', 'vinery:cherry_sapling', 'minecraft:dirt', 1000, ['8x vinery:cherry_log', '12x vinery:cherry', 'vinery:cherry_sapling'], 2, 3, false)
    Greenhouse('vinery_cherry_sapling_boosted', 'vinery:cherry_sapling', 'minecraft:dirt', 1000, ['16x vinery:cherry_log', '24x vinery:cherry', 'vinery:cherry_sapling'], 2, 3, true)

    Greenhouse('vinery_apple_sapling', 'vinery:apple_tree_sapling', 'minecraft:dirt', 1000, ['8x vinery:apple_log', '12x minecraft:apple', 'vinery:apple_tree_sapling'], 2, 3, false)
    Greenhouse('vinery_apple_sapling_boosted', 'vinery:apple_tree_sapling', 'minecraft:dirt', 1000, ['16x vinery:apple_log', '24x minecraft:apple', 'vinery:apple_tree_sapling'], 2, 3, true)

    Greenhouse('azalea_sapling', 'minecraft:azalea', 'minecraft:dirt', 1000, ['16x quark:azalea_log', 'minecraft:azalea'], 2, 3, false)
    Greenhouse('azalea_boosted', 'minecraft:azalea', 'minecraft:dirt', 1000, ['16x quark:azalea_log', '16x quark:azalea_log', 'minecraft:azalea'], 2, 3, true)

    Greenhouse('flowering_azalea', 'minecraft:flowering_azalea', 'minecraft:dirt', 1000, ['16x quark:azalea_log', 'minecraft:flowering_azalea'], 2, 3, false)
    Greenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 'minecraft:dirt', 1000, ['16x quark:azalea_log', '16x quark:azalea_log', 'minecraft:flowering_azalea'], 2, 3, true)

    Greenhouse('ancient_sapling', 'quark:ancient_sapling', 'minecraft:dirt', 1000, ['16x quark:ancient_log', 'quark:ancient_sapling'], 2, 3, false)
    Greenhouse('ancient_sapling_boosted', 'quark:ancient_sapling', 'minecraft:dirt', 1000, ['16x quark:ancient_log', '16x quark:ancient_log', 'quark:ancient_sapling'], 2, 3, true)

    Greenhouse('blue_blossom_sapling', 'quark:blue_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', 'quark:blue_blossom_sapling'], 2, 3, false)
    Greenhouse('blue_blossom_sapling_boosted', 'quark:blue_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', '16x quark:blossom_log', 'quark:blue_blossom_sapling'], 2, 3, true)

    Greenhouse('lavender_blossom_sapling', 'quark:lavender_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', 'quark:lavender_blossom_sapling'], 2, 3, false)
    Greenhouse('lavender_blossom_sapling_boosted', 'quark:lavender_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', '16x quark:blossom_log', 'quark:lavender_blossom_sapling'], 2, 3, true)

    Greenhouse('orange_blossom_sapling', 'quark:orange_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', 'quark:orange_blossom_sapling'], 2, 3, false)
    Greenhouse('orange_blossom_sapling_boosted', 'quark:orange_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', '16x quark:blossom_log', 'quark:orange_blossom_sapling'], 2, 3, true)

    Greenhouse('yellow_blossom_sapling', 'quark:yellow_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', 'quark:yellow_blossom_sapling'], 2, 3, false)
    Greenhouse('yellow_blossom_sapling_boosted', 'quark:yellow_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', '16x quark:blossom_log', 'quark:yellow_blossom_sapling'], 2, 3, true)

    Greenhouse('red_blossom_sapling', 'quark:red_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', 'quark:red_blossom_sapling'], 2, 3, false)
    Greenhouse('red_blossom_sapling_boosted', 'quark:red_blossom_sapling', 'minecraft:dirt', 1000, ['16x quark:blossom_log', '16x quark:blossom_log', 'quark:red_blossom_sapling'], 2, 3, true)

    Greenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 'minecraft:mud', 1000, ['16x minecraft:mangrove_log', 'minecraft:mangrove_propagule'], 2, 3, false)
    Greenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 'minecraft:mud', 1000, ['16x minecraft:mangrove_log', '16x minecraft:mangrove_log', 'minecraft:mangrove_propagule'], 2, 3, true)

    Greenhouse('blue_archwood_sapling', 'ars_nouveau:blue_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:blue_archwood_log', 'ars_nouveau:blue_archwood_sapling'], 2, 3, false)
    Greenhouse('blue_archwood_sapling_boosted', 'ars_nouveau:blue_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:blue_archwood_log', '16x ars_nouveau:blue_archwood_log', 'ars_nouveau:blue_archwood_sapling'], 2, 3, true)

    Greenhouse('red_archwood_sapling', 'ars_nouveau:red_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:red_archwood_log', 'ars_nouveau:red_archwood_sapling'], 2, 3, false)
    Greenhouse('red_archwood_sapling_boosted', 'ars_nouveau:red_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:red_archwood_log', '16x ars_nouveau:red_archwood_log', 'ars_nouveau:red_archwood_sapling'], 2, 3, true)

    Greenhouse('purple_archwood_sapling', 'ars_nouveau:purple_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:purple_archwood_log', 'ars_nouveau:purple_archwood_sapling'], 2, 3, false)
    Greenhouse('purple_archwood_sapling_boosted', 'ars_nouveau:purple_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:purple_archwood_log', '16x ars_nouveau:purple_archwood_log', 'ars_nouveau:purple_archwood_sapling'], 2, 3, true)

    Greenhouse('green_archwood_sapling', 'ars_nouveau:green_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:green_archwood_log', 'ars_nouveau:green_archwood_sapling'], 2, 3, false)
    Greenhouse('green_archwood_sapling_boosted', 'ars_nouveau:green_archwood_sapling', 'minecraft:dirt', 1000, ['16x ars_nouveau:green_archwood_log', '16x ars_nouveau:green_archwood_log', 'ars_nouveau:green_archwood_sapling'], 2, 3, true)

    Greenhouse('maple_sapling', 'autumnity:maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', 'autumnity:maple_sapling'], 2, 3, false)
    Greenhouse('maple_sapling_boosted', 'autumnity:maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', '16x autumnity:maple_log', 'autumnity:maple_sapling'], 2, 3, true)

    Greenhouse('yellow_maple_sapling', 'autumnity:yellow_maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', 'autumnity:yellow_maple_sapling'], 2, 3, false)
    Greenhouse('yellow_maple_sapling_boosted', 'autumnity:yellow_maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', '16x autumnity:maple_log', 'autumnity:yellow_maple_sapling'], 2, 3, true)

    Greenhouse('orange_maple_sapling', 'autumnity:orange_maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', 'autumnity:orange_maple_sapling'], 2, 3, false)
    Greenhouse('orange_maple_sapling_boosted', 'autumnity:orange_maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', '16x autumnity:maple_log', 'autumnity:orange_maple_sapling'], 2, 3, true)

    Greenhouse('red_maple_sapling', 'autumnity:red_maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', 'autumnity:red_maple_sapling'], 2, 3, false)
    Greenhouse('red_maple_sapling_boosted', 'autumnity:red_maple_sapling', 'minecraft:dirt', 1000, ['16x autumnity:maple_log', '16x autumnity:maple_log', 'autumnity:red_maple_sapling'], 2, 3, true)

    Greenhouse('durian', 'fruitsdelight:durian_sapling', 'minecraft:dirt', 1000, ['8x minecraft:jungle_log', '12x fruitsdelight:durian', 'fruitsdelight:durian_sapling'], 2, 3, false)
    Greenhouse('durian_boosted', 'fruitsdelight:durian_sapling', 'minecraft:dirt', 1000, ['16x minecraft:jungle_log', '24x fruitsdelight:durian', 'fruitsdelight:durian_sapling'], 2, 3, true)

    //crops
    Greenhouse('sugar_cane', 'minecraft:sugar_cane', '#minecraft:sand', 1000, '6x minecraft:sugar_cane', 2, 1, false)
    Greenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', '#minecraft:sand', 1000, '12x minecraft:sugar_cane', 2, 1, true)

    Greenhouse('propelplant_cane', 'nethersdelight:propelplant_cane', 'minecraft:netherrack', 1000, ['2x nethersdelight:propelplant_cane', '3x nethersdelight:propelpearl'], 3, 1, false)
    Greenhouse('propelplant_cane_boosted', 'nethersdelight:propelplant_cane', 'minecraft:netherrack', 1000, ['4x nethersdelight:propelplant_cane', '6x nethersdelight:propelpearl'], 3, 1, true)

    Greenhouse('kelp', 'minecraft:kelp', 'minecraft:gravel', 2000, '6x minecraft:kelp', 2, 1, false)
    Greenhouse('kelp_boosted', 'minecraft:kelp', 'minecraft:gravel', 2000, '12x minecraft:kelp', 2, 1, true)

    Greenhouse('sweet_berries', 'minecraft:sweet_berries', 'minecraft:dirt', 1000, '6x minecraft:sweet_berries', 2, 1, false)
    Greenhouse('sweet_berries_boosted', 'minecraft:sweet_berries', 'minecraft:dirt', 1000, '12x minecraft:sweet_berries', 2, 1, true)

    Greenhouse('foul_berries', 'autumnity:foul_berries', 'minecraft:dirt', 1000, '6x autumnity:foul_berries', 2, 1, false)
    Greenhouse('foul_berries_boosted', 'autumnity:foul_berries', 'minecraft:dirt', 1000, '12x autumnity:foul_berries', 2, 1, true)

    Greenhouse('glow_berries', 'minecraft:glow_berries', 'minecraft:stone', 1000, '4x minecraft:glow_berries', 3, 1, false)
    Greenhouse('glow_berries_boosted', 'minecraft:glow_berries', 'minecraft:stone', 1000, '8x minecraft:glow_berries', 3, 1, true)

    Greenhouse('sourceberry', 'ars_nouveau:sourceberry_bush', 'minecraft:dirt', 1000, '2x ars_nouveau:sourceberry_bush', 5, 1, false)
    Greenhouse('sourceberry_boosted', 'ars_nouveau:sourceberry_bush', 'minecraft:dirt', 1000, '4x ars_nouveau:sourceberry_bush', 5, 1, true)

    Greenhouse('magebloom', 'ars_nouveau:magebloom_crop', 'farmersdelight:rich_soil', 1000, '1x ars_nouveau:magebloom', 5, 1, false)
    Greenhouse('magebloom_boosted', 'ars_nouveau:magebloom_crop', 'farmersdelight:rich_soil', 1000, '2x ars_nouveau:magebloom', 5, 1, true)

    Greenhouse('bamboo', 'minecraft:bamboo', 'minecraft:dirt', 1000, '6x minecraft:bamboo', 2, 1, false)
    Greenhouse('bamboo_boosted', 'minecraft:bamboo', 'minecraft:dirt', 1000, '12x minecraft:bamboo', 2, 1, true)

    Greenhouse('cactus', 'minecraft:cactus', '#minecraft:sand', 1000, '6x minecraft:cactus', 2, 1, false)
    Greenhouse('cactus_boosted', 'minecraft:cactus', '#minecraft:sand', 1000, '12x minecraft:cactus', 2, 1, true)

    Greenhouse('wheat', 'minecraft:wheat_seeds', 'farmersdelight:rich_soil', 1000, '6x minecraft:wheat', 2, 1, false)
    Greenhouse('wheat_boosted', 'minecraft:wheat_seeds', 'farmersdelight:rich_soil', 1000, '12x minecraft:wheat', 2, 1, true)

    Greenhouse('carrot', 'minecraft:carrot', 'farmersdelight:rich_soil', 1000, '6x minecraft:carrot', 2, 1, false)
    Greenhouse('carrot_boosted', 'minecraft:carrot', 'farmersdelight:rich_soil', 1000, '12x minecraft:carrot', 2, 1, true)

    Greenhouse('potato', 'minecraft:potato', 'farmersdelight:rich_soil', 1000, '6x minecraft:potato', 2, 1, false)
    Greenhouse('potato_boosted', 'minecraft:potato', 'farmersdelight:rich_soil', 1000, '12x minecraft:potato', 2, 1, true)

    Greenhouse('beetroot', 'minecraft:beetroot_seeds', 'farmersdelight:rich_soil', 1000, '6x minecraft:beetroot', 2, 1, false)
    Greenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 'farmersdelight:rich_soil', 1000, '12x minecraft:beetroot', 2, 1, true)

    Greenhouse('melon', 'minecraft:melon_seeds', 'farmersdelight:rich_soil', 1000, '6x minecraft:melon', 2, 1.5, false)
    Greenhouse('melon_boosted', 'minecraft:melon_seeds', 'farmersdelight:rich_soil', 1000, '12x minecraft:melon', 2, 1.5, true)

    Greenhouse('pumpkin', 'minecraft:pumpkin_seeds', 'farmersdelight:rich_soil', 1000, '3x minecraft:pumpkin', 2, 1.5, false)
    Greenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 'farmersdelight:rich_soil', 1000, '6x minecraft:pumpkin', 2, 1.5, true)

    Greenhouse('nether_wart', 'minecraft:nether_wart', '#minecraft:soul_fire_base_blocks', 1000, '3x minecraft:nether_wart', 3, 1, false)
    Greenhouse('nether_wart_boosted', 'minecraft:nether_wart', '#minecraft:soul_fire_base_blocks', 1000, '6x minecraft:nether_wart', 3, 1, true)

    Greenhouse('chorus_fruit', 'minecraft:chorus_flower', 'minecraft:end_stone', 1000, '4x minecraft:chorus_fruit', 4, 2, false)
    Greenhouse('chorus_fruit_boosted', 'minecraft:chorus_flower', 'minecraft:end_stone', 1000, '8x minecraft:chorus_fruit', 4, 2, true)

    Greenhouse('red_mushroom', 'minecraft:red_mushroom', 'minecraft:mycelium', 1000, '3x minecraft:red_mushroom', 2, 1, false)
    Greenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 'minecraft:mycelium', 1000, '6x minecraft:red_mushroom', 2, 1, true)

    Greenhouse('brown_mushroom', 'minecraft:brown_mushroom', 'minecraft:mycelium', 1000, '3x minecraft:brown_mushroom', 2, 1, false)
    Greenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 'minecraft:mycelium', 1000, '6x minecraft:brown_mushroom', 2, 1, true)

    Greenhouse('glow_shroom', 'quark:glow_shroom', 'minecraft:deepslate', 1000, '2x quark:glow_shroom', 3, 1, false)
    Greenhouse('glow_shroom_boosted', 'quark:glow_shroom', 'minecraft:deepslate', 1000, '4x quark:glow_shroom', 3, 1, true)

    Greenhouse('tomato', 'farmersdelight:tomato_seeds', 'farmersdelight:rich_soil', 1000, '6x farmersdelight:tomato', 2, 1, false)
    Greenhouse('tomato_boosted', 'farmersdelight:tomato_seeds', 'farmersdelight:rich_soil', 1000, '12x farmersdelight:tomato', 2, 1, true)

    Greenhouse('cabbage', 'farmersdelight:cabbage_seeds', 'farmersdelight:rich_soil', 1000, '6x farmersdelight:cabbage', 2, 1, false)
    Greenhouse('cabbage_boosted', 'farmersdelight:cabbage_seeds', 'farmersdelight:rich_soil', 1000, '12x farmersdelight:cabbage', 2, 1, true)

    Greenhouse('onion', 'farmersdelight:onion', 'farmersdelight:rich_soil', 1000, '6x farmersdelight:onion', 2, 1, false)
    Greenhouse('onion_boosted', 'farmersdelight:onion', 'farmersdelight:rich_soil', 1000, '12x farmersdelight:onion', 2, 1, true)

    Greenhouse('rice', 'farmersdelight:rice', 'farmersdelight:rich_soil', 1500, '6x farmersdelight:rice_panicle', 2, 1, false)
    Greenhouse('rice_boosted', 'farmersdelight:rice', 'farmersdelight:rich_soil', 1500, '12x farmersdelight:rice_panicle', 2, 1, true)

    Greenhouse('candlelight_tomato', 'candlelight:tomato_seeds', 'farmersdelight:rich_soil', 1000, '6x candlelight:tomato', 2, 1, false)
    Greenhouse('candlelight_tomato_boosted', 'candlelight:tomato_seeds', 'farmersdelight:rich_soil', 1000, '12x candlelight:tomato', 2, 1, true)

    Greenhouse('lettuce', 'candlelight:lettuce_seeds', 'farmersdelight:rich_soil', 1000, '6x candlelight:lettuce', 2, 1, false)
    Greenhouse('lettuce_boosted', 'candlelight:lettuce_seeds', 'farmersdelight:rich_soil', 1000, '12x candlelight:lettuce', 2, 1, true)

    Greenhouse('torchflower', 'minecraft:torchflower_seeds', 'farmersdelight:rich_soil', 1000, '2x minecraft:torchflower', 4, 1, false)
    Greenhouse('torchflower_boosted', 'minecraft:torchflower_seeds', 'farmersdelight:rich_soil', 1000, '4x minecraft:torchflower', 4, 1, true)

    Greenhouse('pitcher', 'minecraft:pitcher_pod', 'farmersdelight:rich_soil', 1000, '2x minecraft:pitcher_plant', 4, 1, false)
    Greenhouse('pitcher_boosted', 'minecraft:pitcher_pod', 'farmersdelight:rich_soil', 1000, '4x minecraft:pitcher_plant', 4, 1, true)

    Greenhouse('dawnberry_vine', 'moresnifferflowers:dawnberry_vine_seeds', 'farmersdelight:rich_soil', 1000, '2x moresnifferflowers:dawnberry', 4, 1, false)
    Greenhouse('dawnberry_vine_boosted', 'moresnifferflowers:dawnberry_vine_seeds', 'farmersdelight:rich_soil', 1000, '4x moresnifferflowers:dawnberry', 4, 1, true)

    Greenhouse('ambush', 'moresnifferflowers:ambush_seeds', 'farmersdelight:rich_soil', 1000, '2x moresnifferflowers:amber', 4, 1, false)
    Greenhouse('ambush_boosted', 'moresnifferflowers:ambush_seeds', 'farmersdelight:rich_soil', 1000, '4x moresnifferflowers:amber', 4, 1, true)

    Greenhouse('bonmeelia', 'moresnifferflowers:bonmeelia_seeds', 'farmersdelight:rich_soil', 1000, '2x moresnifferflowers:jar_of_bonmeel', 4, 1, false)
    Greenhouse('bonmeelia_boosted', 'moresnifferflowers:bonmeelia_seeds', 'farmersdelight:rich_soil', 1000, '4x moresnifferflowers:jar_of_bonmeel', 4, 1, true)

    Greenhouse('dyespria', 'moresnifferflowers:dyespria_seeds', 'farmersdelight:rich_soil', 1000, '2x moresnifferflowers:dyespria', 4, 1, false)
    Greenhouse('dyespria_boosted', 'moresnifferflowers:dyespria_seeds', 'farmersdelight:rich_soil', 1000, '4x moresnifferflowers:dyespria', 4, 1, true)

    Greenhouse('red_grape', 'vinery:red_grape_seeds', 'minecraft:dirt', 1000, '6x vinery:red_grape', 2, 1, false)
    Greenhouse('red_grape_boosted', 'vinery:red_grape_seeds', 'minecraft:dirt', 1000, '12x vinery:red_grape', 2, 1, true)

    Greenhouse('savanna_grapes_red', 'vinery:savanna_grape_seeds_red', 'minecraft:dirt', 1000, '6x vinery:savanna_grapes_red', 2, 1, false)
    Greenhouse('savanna_grapes_red_boosted', 'vinery:savanna_grape_seeds_red', 'minecraft:dirt', 1000, '12x vinery:savanna_grapes_red', 2, 1, true)

    Greenhouse('taiga_grapes_red', 'vinery:taiga_grape_seeds_red', 'minecraft:dirt', 1000, '6x vinery:taiga_grapes_red', 2, 1, false)
    Greenhouse('taiga_grapes_red_boosted', 'vinery:taiga_grape_seeds_red', 'minecraft:dirt', 1000, '12x vinery:taiga_grapes_red', 2, 1, true)

    Greenhouse('jungle_grapes_red', 'vinery:jungle_grape_seeds_red', 'minecraft:dirt', 1000, '6x vinery:jungle_grapes_red', 2, 1, false)
    Greenhouse('jungle_grapes_red_boosted', 'vinery:jungle_grape_seeds_red', 'minecraft:dirt', 1000, '12x vinery:jungle_grapes_red', 2, 1, true)

    Greenhouse('white_grape', 'vinery:white_grape_seeds', 'minecraft:dirt', 1000, '6x vinery:white_grape', 2, 1, false)
    Greenhouse('white_grape_boosted', 'vinery:white_grape_seeds', 'minecraft:dirt', 1000, '12x vinery:white_grape', 2, 1, true)

    Greenhouse('savanna_grapes_white', 'vinery:savanna_grape_seeds_white', 'minecraft:dirt', 1000, '6x vinery:savanna_grapes_white', 2, 1, false)
    Greenhouse('savanna_grapes_white_boosted', 'vinery:savanna_grape_seeds_white', 'minecraft:dirt', 1000, '12x vinery:savanna_grapes_white', 2, 1, true)

    Greenhouse('taiga_grapes_white', 'vinery:taiga_grape_seeds_white', 'minecraft:dirt', 1000, '6x vinery:taiga_grapes_white', 2, 1, false)
    Greenhouse('taiga_grapes_white_boosted', 'vinery:taiga_grape_seeds_white', 'minecraft:dirt', 1000, '12x vinery:taiga_grapes_white', 2, 1, true)

    Greenhouse('jungle_grapes_white', 'vinery:jungle_grape_seeds_white', 'minecraft:dirt', 1000, '6x vinery:jungle_grapes_white', 2, 1, false)
    Greenhouse('jungle_grapes_white_boosted', 'vinery:jungle_grape_seeds_white', 'minecraft:dirt', 1000, '12x vinery:jungle_grapes_white', 2, 1, true)

    Greenhouse('crimson_grape', 'nethervinery:crimson_grape_seeds', 'minecraft:crimson_nylium', 1000, '3x nethervinery:crimson_grape', 3, 1, false)
    Greenhouse('crimson_grape_boosted', 'nethervinery:crimson_grape_seeds', 'minecraft:crimson_nylium', 1000, '6x nethervinery:crimson_grape', 3, 1, true)

    Greenhouse('warped_grape', 'nethervinery:warped_grape_seeds', 'minecraft:warped_nylium', 1000, '3x nethervinery:warped_grape', 3, 1, false)
    Greenhouse('warped_grape_boosted', 'nethervinery:warped_grape_seeds', 'minecraft:warped_nylium', 1000, '6x nethervinery:warped_grape', 3, 1, true)

    Greenhouse('lemon', 'fruitsdelight:lemon_seeds', 'minecraft:dirt', 1000, '6x fruitsdelight:lemon', 2, 1, false)
    Greenhouse('lemon_boosted', 'fruitsdelight:lemon_seeds', 'minecraft:dirt', 1000, '12x fruitsdelight:lemon', 2, 1, true)

    Greenhouse('strawberry', 'bakery:strawberry_seeds', 'farmersdelight:rich_soil', 1000, '6x bakery:strawberry', 2, 1, false)
    Greenhouse('strawberry_boosted', 'bakery:strawberry_seeds', 'farmersdelight:rich_soil', 1000, '12x bakery:strawberry', 2, 1, true)

    Greenhouse('pineapple', 'fruitsdelight:pineapple_sapling', '#minecraft:sand', 1000, '6x fruitsdelight:pineapple', 2, 1, false)
    Greenhouse('pineapple_boosted', 'fruitsdelight:pineapple_sapling', '#minecraft:sand', 1000, '12x fruitsdelight:pineapple', 2, 1, true)

    Greenhouse('blueberry', 'fruitsdelight:blueberry', 'minecraft:dirt', 1000, '6x fruitsdelight:blueberry', 2, 1, false)
    Greenhouse('blueberry_boosted', 'fruitsdelight:blueberry', 'minecraft:dirt', 1000, '12x fruitsdelight:blueberry', 2, 1, true)

    Greenhouse('cranberry', 'fruitsdelight:cranberry', 'minecraft:dirt', 1000, '6x fruitsdelight:cranberry', 2, 1, false)
    Greenhouse('cranberry_boosted', 'fruitsdelight:cranberry', 'minecraft:dirt', 1000, '12x fruitsdelight:cranberry', 2, 1, true)

    Greenhouse('hamimelon', 'fruitsdelight:hamimelon_seeds', 'minecraft:dirt', 1000, '3x fruitsdelight:hamimelon', 2, 1.5, false)
    Greenhouse('hamimelon_boosted', 'fruitsdelight:hamimelon_seeds', 'minecraft:dirt', 1000, '6x fruitsdelight:hamimelon', 2, 1.5, true)

    Greenhouse('oat', 'bakery:oat_seeds', 'farmersdelight:rich_soil', 1000, '6x bakery:oat', 2, 1, false)
    Greenhouse('oat_boosted', 'bakery:oat_seeds', 'farmersdelight:rich_soil', 1000, '12x bakery:oat', 2, 1, true)

    //flowers
    Greenhouse('pink_petals', 'minecraft:pink_petals', 'minecraft:dirt', 1000, '6x minecraft:pink_petals', 2, 1, false)
    Greenhouse('pink_petals_boosted', 'minecraft:pink_petals', 'minecraft:dirt', 1000, '12x minecraft:pink_petals', 2, 1, true)

    Greenhouse('lily_pad', 'minecraft:lily_pad', 'minecraft:lily_pad', 2000, '4x minecraft:lily_pad', 2, 1, false)
    Greenhouse('lily_pad_boosted', 'minecraft:lily_pad', 'minecraft:lily_pad', 2000, '8x minecraft:lily_pad', 2, 1, true)

    Greenhouse('sea_pickle', 'minecraft:sea_pickle', 'minecraft:sand', 2000, '4x minecraft:sea_pickle', 2, 1, false)
    Greenhouse('sea_pickle_boosted', 'minecraft:sea_pickle', 'minecraft:sand', 2000, '8x minecraft:sea_pickle', 2, 1, true)

    Greenhouse('dripleaf_on_clay', 'minecraft:small_dripleaf', 'minecraft:clay', 1500, '4x minecraft:big_dripleaf', 2, 1, false)
    Greenhouse('dripleaf_on_clay_boosted', 'minecraft:small_dripleaf', 'minecraft:clay', 1500, '8x minecraft:big_dripleaf', 2, 1, true)

    Greenhouse('dripleaf_on_moss', 'minecraft:small_dripleaf', 'minecraft:moss_block', 1500, '4x minecraft:big_dripleaf', 2, 1, false)
    Greenhouse('dripleaf_on_moss_boosted', 'minecraft:small_dripleaf', 'minecraft:moss_block', 1500, '8x minecraft:big_dripleaf', 2, 1, true)

    Greenhouse('blue_orchid', 'minecraft:blue_orchid', 'minecraft:dirt', 1000, '4x minecraft:blue_orchid', 2, 1, false)
    Greenhouse('blue_orchid_boosted', 'minecraft:blue_orchid', 'minecraft:dirt', 1000, '8x minecraft:blue_orchid', 2, 1, true)

    Greenhouse('azure_bluet', 'minecraft:azure_bluet', 'minecraft:dirt', 1000, '4x minecraft:azure_bluet', 2, 1, false)
    Greenhouse('azure_bluet_boosted', 'minecraft:azure_bluet', 'minecraft:dirt', 1000, '8x minecraft:azure_bluet', 2, 1, true)

    Greenhouse('poppy', 'minecraft:poppy', 'minecraft:dirt', 1000, '4x minecraft:poppy', 2, 1, false)
    Greenhouse('poppy_boosted', 'minecraft:poppy', 'minecraft:dirt', 1000, '8x minecraft:poppy', 2, 1, true)

    Greenhouse('dandelion', 'minecraft:dandelion', 'minecraft:dirt', 1000, '4x minecraft:dandelion', 2, 1, false)
    Greenhouse('dandelion_boosted', 'minecraft:dandelion', 'minecraft:dirt', 1000, '8x minecraft:dandelion', 2, 1, true)

    Greenhouse('allium', 'minecraft:allium', 'minecraft:dirt', 1000, '4x minecraft:allium', 2, 1, false)
    Greenhouse('allium_boosted', 'minecraft:allium', 'minecraft:dirt', 1000, '8x minecraft:allium', 2, 1, true)

    Greenhouse('red_tulip', 'minecraft:red_tulip', 'minecraft:dirt', 1000, '4x minecraft:red_tulip', 2, 1, false)
    Greenhouse('red_tulip_boosted', 'minecraft:red_tulip', 'minecraft:dirt', 1000, '8x minecraft:red_tulip', 2, 1, true)

    Greenhouse('orange_tulip', 'minecraft:orange_tulip', 'minecraft:dirt', 1000, '4x minecraft:orange_tulip', 2, 1, false)
    Greenhouse('orange_tulip_boosted', 'minecraft:orange_tulip', 'minecraft:dirt', 1000, '8x minecraft:orange_tulip', 2, 1, true)

    Greenhouse('white_tulip', 'minecraft:white_tulip', 'minecraft:dirt', 1000, '4x minecraft:white_tulip', 2, 1, false)
    Greenhouse('white_tulip_boosted', 'minecraft:white_tulip', 'minecraft:dirt', 1000, '8x minecraft:white_tulip', 2, 1, true)

    Greenhouse('pink_tulip', 'minecraft:pink_tulip', 'minecraft:dirt', 1000, '4x minecraft:pink_tulip', 2, 1, false)
    Greenhouse('pink_tulip_boosted', 'minecraft:pink_tulip', 'minecraft:dirt', 1000, '8x minecraft:pink_tulip', 2, 1, true)

    Greenhouse('oxeye_daisy', 'minecraft:oxeye_daisy', 'minecraft:dirt', 1000, '4x minecraft:oxeye_daisy', 2, 1, false)
    Greenhouse('oxeye_daisy_boosted', 'minecraft:oxeye_daisy', 'minecraft:dirt', 1000, '8x minecraft:oxeye_daisy', 2, 1, true)

    Greenhouse('cornflower', 'minecraft:cornflower', 'minecraft:dirt', 1000, '4x minecraft:cornflower', 2, 1, false)
    Greenhouse('cornflower_boosted', 'minecraft:cornflower', 'minecraft:dirt', 1000, '8x minecraft:cornflower', 2, 1, true)

    Greenhouse('lily_of_the_valley', 'minecraft:lily_of_the_valley', 'minecraft:dirt', 1000, '4x minecraft:lily_of_the_valley', 2, 1, false)
    Greenhouse('lily_of_the_valley_boosted', 'minecraft:lily_of_the_valley', 'minecraft:dirt', 1000, '8x minecraft:lily_of_the_valley', 2, 1, true)

    Greenhouse('sunflower', 'minecraft:sunflower', 'minecraft:dirt', 1000, '4x minecraft:sunflower', 2, 1, false)
    Greenhouse('sunflower_boosted', 'minecraft:sunflower', 'minecraft:dirt', 1000, '8x minecraft:sunflower', 2, 1, true)

    Greenhouse('lilac', 'minecraft:lilac', 'minecraft:dirt', 1000, '4x minecraft:lilac', 2, 1, false)
    Greenhouse('lilac_boosted', 'minecraft:lilac', 'minecraft:dirt', 1000, '8x minecraft:lilac', 2, 1, true)

    Greenhouse('rose_bush', 'minecraft:rose_bush', 'minecraft:dirt', 1000, '4x minecraft:rose_bush', 2, 1, false)
    Greenhouse('rose_bush_boosted', 'minecraft:rose_bush', 'minecraft:dirt', 1000, '8x minecraft:rose_bush', 2, 1, true)

    Greenhouse('peony', 'minecraft:peony', 'minecraft:dirt', 1000, '4x minecraft:peony', 2, 1, false)
    Greenhouse('peony_boosted', 'minecraft:peony', 'minecraft:dirt', 1000, '8x minecraft:peony', 2, 1, true)

    Greenhouse('autumn_crocus', 'autumnity:autumn_crocus', 'minecraft:dirt', 1000, '4x autumnity:autumn_crocus', 2, 1, false)
    Greenhouse('autumn_crocus_boosted', 'autumnity:autumn_crocus', 'minecraft:dirt', 1000, '8x autumnity:autumn_crocus', 2, 1, true)

    Greenhouse('wither_rose', 'minecraft:wither_rose', 'minecraft:dirt', 1000, '2x minecraft:wither_rose', 3, 1, false)
    Greenhouse('wither_rose_boosted', 'minecraft:wither_rose', 'minecraft:dirt', 1000, '4x minecraft:wither_rose', 3, 1, true)

    Greenhouse('spore_blossom', 'minecraft:spore_blossom', 'minecraft:stone', 1000, '3x minecraft:spore_blossom', 3, 1, false)
    Greenhouse('spore_blossom_boosted', 'minecraft:spore_blossom', 'minecraft:stone', 1000, '6x minecraft:spore_blossom', 3, 1, true)
})