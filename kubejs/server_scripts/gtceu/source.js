ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:source_reactor',
        ['PRA', 'CSC', 'WMW'],
        {
            P: 'gtceu:ev_electric_motor',
            R: 'gtceu:ev_electric_pump',
            A: 'gtceu:ev_robot_arm',
            W: 'gtceu:managold_single_cable',
            C: '#gtceu:circuits/ev',
            M: 'ars_nouveau:source_gem_block',
            S: 'kubejs:soursteel_casing'
        }
    ).id('gtceu:shaped/source_reactor')

    //ars
    event.remove({ id: 'ars_nouveau:imbuement_abjuration_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:abjuration_essence",
          2000,
          [
              'minecraft:fermented_spider_eye',
              'minecraft:sugar',
              'minecraft:milk_bucket',
              'minecraft:enchanted_golden_apple'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_conjuration_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:conjuration_essence",
          2000,
          [
              'minecraft:book',
              'ars_nouveau:wilden_horn',
              'ars_nouveau:starbuncle_shards',
              'minecraft:totem_of_undying'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_air_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:air_essence",
          2000,
          [
              'minecraft:feather',
              '#minecraft:arrows',
              'ars_nouveau:wilden_wing',
              'quark:bottled_cloud'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_earth_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:earth_essence",
          2000,
          [
              'farmersdelight:rich_soil',
              'minecraft:gravel',
              'minecraft:deepslate',
              'minecraft:sand'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_fire_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:fire_essence",
          2000,
          [
              'minecraft:flint_and_steel',
              'minecraft:gunpowder',
              'minecraft:lava_bucket',
              'create:blaze_cake'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_manipulation_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:manipulation_essence",
          2000,
          [
              'minecraft:redstone',
              'minecraft:clock',
              'kubejs:electronic_mechanism',
              'create:flywheel'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_water_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "ars_nouveau:water_essence",
          2000,
          [
              'minecraft:water_bucket',
              'minecraft:snow_block',
              'minecraft:sponge',
              'minecraft:conduit'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_refined_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "kubejs:refined_essence",
          2000,
          [
              'minecraft:glowstone',
              'naturalist:glow_goop',
              'betterarcheology:radiance_totem',
              'createchromaticreturn:glowing_ingot',
              'minecraft:glow_ink_sac',
              'quark:glow_shroom_block',
              'bosses_of_mass_destruction:blazing_eye'
          ]
      )
    event.remove({ id: 'ars_nouveau:imbuement_nature_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "kubejs:nature_essence",
          2000,
          [
              'gtceu:bio_chaff',
              'bosses_of_mass_destruction:crystal_fruit',
              'autumnity:syrup_bottle',
              'ars_nouveau:wilden_tribute',
              'betterarcheology:growth_totem',
              'gtceu:reinforced_epoxy_resin_ingot',
              'minecraft:spore_blossom'
          ]
      )    
    event.remove({ id: 'ars_nouveau:imbuement_shadow_essence' })
    event.recipes.ars_nouveau.imbuement(
          "ars_nouveau:source_gem",
          "kubejs:shadow_essence",
          2000,
          [
              'minecraft:sculk_catalyst',
              'minecraft:wither_rose',
              'minecraft:nether_star',
              'create:haunted_bell',
              'bosses_of_mass_destruction:ancient_anima',
              'betterarcheology:soul_totem',
              'minecraft:phantom_membrane'
          ]
      )

    //gtm
    event.recipes.gtceu.source_reactor('storm_sacrifice_final')
        .notConsumable('cataclysm:gauntlet_of_bulwark')
        .notConsumable('cataclysm:void_forge')
        .notConsumable('cataclysm:void_assault_shoulder_weapon')
        .notConsumable('cataclysm:tidal_claws')
        .notConsumable('cataclysm:sandstorm_in_a_bottle')
        .notConsumable('minecraft:dragon_egg')
        .notConsumable('ars_nouveau:wilden_tribute')
        .notConsumable('gtceu:max_battery')
        .itemInputs('1x kubejs:storm_sacrifice_step_two')
        .inputFluids(Fluid.of('gtceu:space_neutronium', 1296))
        .itemOutputs('1x kubejs:storm_sacrifice')
        .duration(22900)
        .EUt(491520)
    event.recipes.gtceu.source_reactor('super_tnt')
        .notConsumable('1x witherstormmod:command_block_book')
        .itemInputs('1x gtceu:industrial_tnt')
        .inputFluids(Fluid.of('gtceu:sourcium', 16000))
        .itemOutputs('1x witherstormmod:super_tnt')
        .duration(22900)
        .EUt(491520)
    event.recipes.gtceu.source_reactor('source_imbuement_gem_a')
        .circuit(0)
        .itemInputs('1x minecraft:lapis_lazuli')
        .inputFluids(Fluid.of('gtceu:sourcium', 250))
        .itemOutputs('1x ars_nouveau:source_gem')
        .duration(48)
        .EUt(480)
    event.recipes.gtceu.source_reactor('source_imbuement_gem_b')
        .circuit(0)
        .itemInputs('1x minecraft:amethyst_shard')
        .inputFluids(Fluid.of('gtceu:sourcium', 250))
        .itemOutputs('1x ars_nouveau:source_gem')
        .duration(48)
        .EUt(480)
    event.recipes.gtceu.source_reactor('source_extract_a')
        .circuit(1)
        .itemInputs('1x ars_nouveau:source_gem')
        .outputFluids(Fluid.of('gtceu:sourcium', 1000))
        .duration(90)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_extract_b')
        .circuit(1)
        .itemInputs('1x ars_nouveau:sourceberry_bush')
        .outputFluids(Fluid.of('gtceu:sourcium', 100))
        .duration(180)
        .EUt(480)
    event.recipes.gtceu.source_reactor('source_extract_c')
        .circuit(1)
        .itemInputs('1x ars_nouveau:magebloom')
        .outputFluids(Fluid.of('gtceu:sourcium', 250))
        .duration(200)
        .EUt(480)
    event.recipes.gtceu.source_reactor('source_extract_d')
        .circuit(1)
        .itemInputs('1x #forge:logs/archwood')
        .itemOutputs('4x ars_nouveau:archwood_planks')
        .outputFluids(Fluid.of('gtceu:sourcium', 500))
        .duration(250)
        .EUt(480)
    event.recipes.gtceu.source_reactor('source_abjuration_essence')
        .circuit(2)
        .notConsumable('minecraft:fermented_spider_eye')
        .notConsumable('minecraft:sugar')
        .notConsumable('minecraft:milk_bucket')
        .notConsumable('minecraft:enchanted_golden_apple')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:abjuration_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_conjuration_essence')
        .circuit(2)
        .notConsumable('minecraft:book')
        .notConsumable('ars_nouveau:wilden_horn')
        .notConsumable('ars_nouveau:starbuncle_shards')
        .notConsumable('minecraft:totem_of_undying')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:conjuration_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_air_essence')
        .circuit(2)
        .notConsumable('minecraft:feather')
        .notConsumable('#minecraft:arrows')
        .notConsumable('ars_nouveau:wilden_wing')
        .notConsumable('quark:bottled_cloud')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:air_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_earth_essence')
        .circuit(2)
        .notConsumable('farmersdelight:rich_soil')
        .notConsumable('minecraft:gravel')
        .notConsumable('minecraft:deepslate')
        .notConsumable('minecraft:sand')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:earth_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_fire_essence')
        .circuit(2)
        .notConsumable('minecraft:flint_and_steel')
        .notConsumable('minecraft:gunpowder')
        .notConsumable('minecraft:lava_bucket')
        .notConsumable('create:blaze_cake')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:fire_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_manipulation_essence')
        .circuit(2)
        .notConsumable('minecraft:redstone')
        .notConsumable('minecraft:clock')
        .notConsumable('kubejs:electronic_mechanism')
        .notConsumable('create:flywheel')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:manipulation_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_water_essence')
        .circuit(2)
        .notConsumable('minecraft:water_bucket')
        .notConsumable('minecraft:snow_block')
        .notConsumable('minecraft:sponge')
        .notConsumable('minecraft:conduit')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x ars_nouveau:water_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_refined_essence')
        .circuit(3)
        .notConsumable('minecraft:glowstone')
        .notConsumable('naturalist:glow_goop')
        .notConsumable('betterarcheology:radiance_totem')
        .notConsumable('createchromaticreturn:glowing_ingot')
        .notConsumable('minecraft:glow_ink_sac')
        .notConsumable('quark:glow_shroom_block')
        .notConsumable('bosses_of_mass_destruction:blazing_eye')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('1x kubejs:refined_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_nature_essence')
        .circuit(3)
        .notConsumable('gtceu:bio_chaff')
        .notConsumable('bosses_of_mass_destruction:crystal_fruit')
        .notConsumable('autumnity:syrup_bottle')
        .notConsumable('ars_nouveau:wilden_tribute')
        .notConsumable('betterarcheology:growth_totem')
        .notConsumable('gtceu:reinforced_epoxy_resin_ingot')
        .notConsumable('minecraft:spore_blossom')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('1x kubejs:nature_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_shadow_essence')
        .circuit(3)
        .notConsumable('minecraft:sculk_catalyst')
        .notConsumable('minecraft:wither_rose')
        .notConsumable('minecraft:nether_star')
        .notConsumable('create:haunted_bell')
        .notConsumable('bosses_of_mass_destruction:ancient_anima')
        .notConsumable('betterarcheology:soul_totem')
        .notConsumable('minecraft:phantom_membrane')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('1x kubejs:shadow_essence')
        .duration(120)
        .EUt(1920)
    event.recipes.gtceu.source_reactor('source_void_essence')
        .circuit(3)
        .notConsumable('minecraft:ender_eye')
        .notConsumable('cataclysm:void_core')
        .notConsumable('cataclysm:abyssal_egg')
        .notConsumable('bosses_of_mass_destruction:void_thorn')
        .notConsumable('minecraft:dragon_head')
        .notConsumable('enderio:weather_crystal')
        .notConsumable('ae2:singularity')
        .itemInputs('1x ars_nouveau:source_gem')
        .inputFluids(Fluid.of('gtceu:sourcium', 8000))
        .itemOutputs('1x kubejs:void_essence')
        .duration(180)
        .EUt(30720)
    event.recipes.gtceu.source_reactor('essence_transform_sand')
        .circuit(4)
        .itemInputs('1x ars_nouveau:conjuration_essence')
        .itemInputs('16x #forge:sand')
        .itemOutputs('16x minecraft:soul_sand')
        .duration(60)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_end_stone')
        .circuit(4)
        .itemInputs('1x ars_nouveau:conjuration_essence')
        .itemInputs('16x #c:stone')
        .itemOutputs('16x minecraft:end_stone')
        .duration(150)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_mirrorweave')
        .circuit(4)
        .itemInputs('1x ars_nouveau:conjuration_essence')
        .itemInputs('16x ars_nouveau:magebloom_block')
        .itemOutputs('16x ars_nouveau:mirrorweave')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_ghostweave')
        .circuit(4)
        .itemInputs('1x ars_nouveau:abjuration_essence')
        .itemInputs('16x ars_nouveau:magebloom_block')
        .itemOutputs('16x ars_nouveau:ghostweave')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_falseweave')
        .circuit(4)
        .itemInputs('1x ars_nouveau:air_essence')
        .itemInputs('16x ars_nouveau:magebloom_block')
        .itemOutputs('16x ars_nouveau:falseweave')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_sky_block')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x ars_nouveau:magebloom_block')
        .itemOutputs('16x ars_nouveau:sky_block')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_moss_block')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:mycelium')
        .itemOutputs('16x minecraft:moss_block')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_mycelium')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:grass_block')
        .itemOutputs('16x minecraft:mycelium')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_grass_block')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:moss_block')
        .itemOutputs('16x minecraft:grass_block')
        .duration(80)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_andesite')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:granite')
        .itemOutputs('16x minecraft:andesite')
        .duration(100)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_diorite')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:andesite')
        .itemOutputs('16x minecraft:diorite')
        .duration(100)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_granite')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:diorite')
        .itemOutputs('16x minecraft:granite')
        .duration(100)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_calcite')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:tuff')
        .itemOutputs('16x minecraft:calcite')
        .duration(120)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_deepslate')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:calcite')
        .itemOutputs('16x minecraft:deepslate')
        .duration(120)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_tuff')
        .circuit(4)
        .itemInputs('1x ars_nouveau:manipulation_essence')
        .itemInputs('16x minecraft:deepslate')
        .itemOutputs('16x minecraft:tuff')
        .duration(120)
        .EUt(480)
    event.recipes.gtceu.source_reactor('essence_transform_magma_block')
        .circuit(4)
        .itemInputs('1x ars_nouveau:fire_essence')
        .itemInputs('16x #c:stone')
        .itemOutputs('16x minecraft:magma_block')
        .duration(90)
        .EUt(480)
})