ServerEvents.recipes(event => {
  console.log('Ready to modify mainline recipes.')

  //mainline
  event.remove({ id: 'gtceu:shapeless/bronze_dust' })
  event.remove({ id: 'gtceu:shapeless/potin_dust' })
  event.remove({ id: 'gtceu:shapeless/brass_dust' })
  event.remove({ id: 'create:mixing/brass_ingot' })
  event.recipes.create.compacting('minecraft:glass', '2x #forge:dusts/glass').heated()
  event.recipes.create.compacting('minecraft:glass', '#minecraft:sand').superheated()
  event.recipes.create.mixing('3x create:brass_ingot', ['3x #forge:ingots/copper', '#forge:ingots/zinc']).heated()
  event.recipes.create.mixing('4x create:brass_ingot', ['3x #forge:dusts/copper', '#forge:dusts/zinc']).heated()
  event.recipes.create.mixing('3x gtceu:bronze_ingot', ['3x #forge:ingots/copper', '#forge:ingots/tin']).heated()
  event.recipes.create.mixing('4x gtceu:bronze_ingot', ['3x #forge:dusts/copper', '#forge:dusts/tin']).heated()
  event.recipes.create.mixing('3x gtceu:bronze_ingot', ['3x #forge:ingots/copper', '#forge:ingots/tin']).heated()
  event.recipes.create.mixing('4x gtceu:bronze_ingot', ['3x #forge:dusts/copper', '#forge:dusts/tin']).heated()
  event.recipes.create.mixing('6x gtceu:potin_ingot', ['6x #forge:ingots/copper', '2x #forge:ingots/tin', '#forge:ingots/lead']).heated()
  event.recipes.create.mixing('8x gtceu:potin_ingot', ['6x #forge:dusts/copper', '2x #forge:dusts/tin', '#forge:dusts/lead']).heated()
  event.recipes.create.mixing('gtceu:steel_ingot', ['#forge:ingots/iron', '2x #forge:dusts/coke']).superheated()
  event.recipes.create.mixing('gtceu:steel_ingot', ['#forge:ingots/iron', '4x #forge:dusts/coal']).superheated()
  event.recipes.create.mixing('gtceu:steel_ingot', ['#forge:ingots/iron', '4x #forge:dusts/charcoal']).superheated()
  event.recipes.create.mixing('gtceu:steel_ingot', ['#forge:ingots/wrought_iron', '1x #forge:dusts/coke']).superheated()
  event.recipes.create.mixing('gtceu:steel_ingot', ['#forge:ingots/wrought_iron', '2x #forge:dusts/coal']).superheated()
  event.recipes.create.mixing('gtceu:steel_ingot', ['#forge:ingots/wrought_iron', '2x #forge:dusts/charcoal']).superheated()
  event.remove({ id: 'minecraft:ender_eye' })
  event.recipes.create.mixing('minecraft:ender_eye', ['minecraft:ender_pearl', 'minecraft:blaze_powder']).superheated()
  event.remove({ id: 'gtceu:forming_press/copy_mold_credit_casting_mold' })
  event.remove({ id: 'gtceu:shaped/shape_mold_credit' })
  /*
  event.recipes.create.mixing('kubejs:naturium', ['16x createchromaticreturn:silkstrum','16x kubejs:nature_essence']).superheated()
  event.recipes.create.mixing('kubejs:ultimate_ingot', ['createchromaticreturn:multiplite_ingot', 'createchromaticreturn:durasteel_ingot', 'kubejs:naturium', '16x kubejs:void_essence']).superheated()
  event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:source_gem",
        "kubejs:refined_essence",
        10000,
        [
            "cataclysm:ignitium_ingot",
            "bosses_of_mass_destruction:blazing_eye",
            "createchromaticreturn:glowing_ingot",
            "minecraft:glowstone"
        ]
    )
  event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:source_gem",
        "kubejs:nature_essence",
        10000,
        [
            "cataclysm:remnant_skull",
            "bosses_of_mass_destruction:crystal_fruit",
            "ars_nouveau:wilden_tribute",
            "naturalist:teddy_bear"
        ]
    )
  event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:source_gem",
        "kubejs:shadow_essence",
        10000,
        [
            "cataclysm:witherite_block",
            "bosses_of_mass_destruction:ancient_anima",
            "minecraft:sculk_catalyst",
            "cataclysm:abyssal_egg"
        ]
    )
  event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:source_gem",
        "kubejs:void_essence",
        10000,
        [
            "minecraft:dragon_egg",
            "cataclysm:void_core",
            "bosses_of_mass_destruction:void_thorn",
            "bosses_of_mass_destruction:obsidian_heart"
        ]
    )
  */

  event.recipes.gtceu.alloy_blast_smelter('enderite')
      .circuit(1)
      .itemInputs('16x kubejs:void_essence', '1x gtceu:netherite_dust', '4x gtceu:end_steel_dust')
      .outputFluids(Fluid.of('gtceu:enderite', 144))
      .blastFurnaceTemp(5200)
      .duration(4660)
      .EUt(30720)
  event.recipes.gtceu.alloy_blast_smelter('enderite_prot')
      .circuit(11)
      .itemInputs('16x kubejs:void_essence', '1x gtceu:netherite_dust', '4x gtceu:end_steel_dust')
      .inputFluids(Fluid.of('gtceu:argon', 50))
      .outputFluids(Fluid.of('gtceu:enderite', 144))
      .blastFurnaceTemp(5200)
      .duration(3110)
      .EUt(30720)
  event.remove({ id: 'createchromaticreturn:multiplite_recipe' })
  /*
  event.recipes.gtceu.alloy_blast_smelter('multiplite')
      .circuit(3)
      .itemInputs('2x gtceu:refined_radiance_dust', '1x minecraft:shulker_shell')
      .inputFluids(Fluid.of('gtceu:dragonium', 200))
      .outputFluids(Fluid.of('gtceu:multiplite', 36))
      .blastFurnaceTemp(5000)
      .duration(1220)
      .EUt(7680)
  event.recipes.gtceu.fluid_solidifier('multiplite_solidify')
      .notConsumable("gtceu:ingot_casting_mold")
      .inputFluids(Fluid.of('gtceu:multiplite', 144))
      .itemOutputs('1x createchromaticreturn:multiplite_ingot')
      .duration(20)
      .EUt(7)
  event.recipes.gtceu.extractor('multiplite_extract')
      .itemInputs('1x createchromaticreturn:multiplite_ingot')
      .outputFluids(Fluid.of('gtceu:multiplite', 144))
      .duration(78)
      .EUt(480)
  */
  event.remove({ id: 'createchromaticreturn:durasteel_recipe' })
  /*
  event.recipes.gtceu.alloy_blast_smelter('durasteel')
      .circuit(4)
      .itemInputs('4x gtceu:shadow_steel_dust', '1x minecraft:netherite_ingot')
      .inputFluids(Fluid.of('gtceu:red_alloy', 5184))
      .outputFluids(Fluid.of('gtceu:durasteel', 144))
      .blastFurnaceTemp(4400)
      .duration(2460)
      .EUt(7680)
  event.recipes.gtceu.alloy_blast_smelter('durasteel_prot')
      .circuit(14)
      .itemInputs('4x gtceu:shadow_steel_dust', '1x minecraft:netherite_ingot')
      .inputFluids(Fluid.of('gtceu:argon', 50), Fluid.of('gtceu:red_alloy', 5184))
      .outputFluids(Fluid.of('gtceu:durasteel', 144))
      .blastFurnaceTemp(4400)
      .duration(1640)
      .EUt(7680)
  event.recipes.gtceu.fluid_solidifier('durasteel_solidify')
      .notConsumable("gtceu:ingot_casting_mold")
      .inputFluids(Fluid.of('gtceu:durasteel', 144))
      .itemOutputs('1x createchromaticreturn:durasteel_ingot')
      .duration(20)
      .EUt(7)
  event.recipes.gtceu.extractor('durasteel_extract')
      .itemInputs('1x createchromaticreturn:durasteel_ingot')
      .outputFluids(Fluid.of('gtceu:durasteel', 144))
      .duration(88)
      .EUt(480)
  */
  event.recipes.gtceu.alloy_blast_smelter('naturium')
      .circuit(5)
      .itemInputs('1x kubejs:nature_essence', '2x gtceu:niobium_titanium_dust', '1x createchromaticreturn:chromatic_compound')
      .inputFluids(Fluid.of('gtceu:reinforced_epoxy_resin', 1000), Fluid.of('gtceu:biomass', 4000))
      .outputFluids(Fluid.of('gtceu:naturium', 9))
      .blastFurnaceTemp(3200)
      .duration(1810)
      .EUt(1920)
  event.recipes.gtceu.fluid_solidifier('naturium_solidify')
      .notConsumable("gtceu:ingot_casting_mold")
      .inputFluids(Fluid.of('gtceu:naturium', 144))
      .itemOutputs('1x kubejs:naturium')
      .duration(20)
      .EUt(7)
  event.recipes.gtceu.extractor('naturium_extract')
      .itemInputs('1x kubejs:naturium')
      .outputFluids(Fluid.of('gtceu:naturium', 144))
      .duration(70)
      .EUt(480)

  //final
  event.recipes.create.sequenced_assembly([
		Item.of('kubejs:storm_sacrifice_step_two')
	], 'gtceu:nan_certificate', [ 
		event.recipes.createDeploying('kubejs:storm_sacrifice_step_one', ['kubejs:storm_sacrifice_step_one', 'cataclysm:abyss_eye']),
        event.recipes.createDeploying('kubejs:storm_sacrifice_step_one', ['kubejs:storm_sacrifice_step_one', 'cataclysm:mech_eye']),
        event.recipes.createPressing('kubejs:storm_sacrifice_step_one', 'kubejs:storm_sacrifice_step_one'),
        event.recipes.createCutting('kubejs:storm_sacrifice_step_one', 'kubejs:storm_sacrifice_step_one'),
		event.recipes.createFilling('kubejs:storm_sacrifice_step_one', ['kubejs:storm_sacrifice_step_one', Fluid.of('gtceu:dragonium',50)]),
        event.recipes.createDeploying('kubejs:storm_sacrifice_step_one', ['kubejs:storm_sacrifice_step_one', 'minecraft:nether_star']),
        event.recipes.createDeploying('kubejs:storm_sacrifice_step_one', ['kubejs:storm_sacrifice_step_one', 'kubejs:void_essence']),
        event.recipes.createFilling('kubejs:storm_sacrifice_step_one', ['kubejs:storm_sacrifice_step_one', Fluid.of('gtceu:sourcium',250)])
	]).transitionalItem('kubejs:storm_sacrifice_step_one').loops(114)
  event.remove({ id: 'createchromaticreturn:radiant_glow_saber_recipe' })
  event.recipes.create.mechanical_crafting('createchromaticreturn:radiant_glow_saber', [
    ' R ',
    ' R ',
    'PTP',
    'PMP',
    ' U '
  ], {
    R: '#forge:ingots/infinity',
    T: 'createchromaticreturn:multiplite_tube',
    P: 'createchromaticreturn:cyber_plating',
    U: '#forge:ingots/space_neutronium',
    M: 'createchromaticreturn:refined_mechanism'
  })
  event.remove({ id: 'createchromaticreturn:radiant_glow_claws_recipe' })
  event.recipes.create.mechanical_crafting('createchromaticreturn:radiant_glow_claws', [
    'R R',
    'R R',
    'SMS',
    'PUP'
  ], {
    R: '#forge:ingots/infinity',
    S: 'createchromaticreturn:radiant_glow_saber',
    P: 'createchromaticreturn:cyber_plating',
    U: '#forge:ingots/space_neutronium',
    M: 'createchromaticreturn:refined_mechanism'
  })
  event.remove({ id: 'createchromaticreturn:creative_flour_recipe' })
  /*
  event.recipes.create.mixing('createchromaticreturn:creative_flour', ['3x ae2:sky_dust', '3x #forge:dusts/shadow_steel', '3x witherstormmod:tainted_dust', 'kubejs:ultimate_ingot']).superheated()
  */
  event.remove({ id: 'createchromaticreturn:motor_recipe' })
  event.recipes.create.mechanical_crafting('create:creative_motor', [
    'INCNI',
    'NFMFN',
    'NMFMN',
    'NFMFN',
    'INSNI'
  ], {
    N: 'minecraft:netherite_block',
    S: 'create:shaft',
    I: 'createchromaticreturn:multiplite_ingot',
    C: 'create:rotation_speed_controller',
    M: 'createchromaticreturn:refined_mechanism',
    F: 'createchromaticreturn:creative_flour'
  })
  event.remove({ id: 'createchromaticreturn:generator_recipe' })
  event.recipes.create.mechanical_crafting('createaddition:creative_energy', [
    'INCNI',
    'NFMFN',
    'NMAMN',
    'NFMFN',
    'INSNI'
  ], {
    N: 'minecraft:netherite_block',
    S: 'create:shaft',
    I: 'createchromaticreturn:multiplite_ingot',
    C: 'create:creative_motor',
    M: 'createchromaticreturn:refined_mechanism',
    F: '#forge:storage_blocks/infinity',
    A: 'createaddition:alternator'
  })
  event.remove({ id: 'createchromaticreturn:creative_filling_tank_recipe' })
  event.recipes.create.mixing('create_sa:creative_filling_tank', ['4x createchromaticreturn:creative_flour', 'createchromaticreturn:multiplite_ingot', 'create_sa:large_filling_tank', 'create_sa:large_fueling_tank']).superheated()
  event.recipes.create.mixing('create:creative_fluid_tank', ['16x createchromaticreturn:creative_flour', '4x createchromaticreturn:multiplite_ingot', 'create:fluid_tank']).superheated()
  event.recipes.create.mixing('create:creative_crate', ['16x createchromaticreturn:creative_flour', '4x createchromaticreturn:multiplite_ingot', 'create_sa:vault_component']).superheated()
  /*
  event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "createchromaticreturn:creative_flour",
            "ars_nouveau:abjuration_essence",
            "ars_nouveau:conjuration_essence",
            "ars_nouveau:manipulation_essence",
            "ars_nouveau:air_essence",
            "ars_nouveau:earth_essence",
            "ars_nouveau:fire_essence",
            "ars_nouveau:water_essence",
        ],
        "ars_nouveau:source_jar",
        "ars_nouveau:creative_source_jar",
        10000
    )
  event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "createchromaticreturn:creative_flour"
        ],
        "ars_nouveau:archmage_spell_book",
        "ars_nouveau:creative_spell_book",
        10000
    )
  event.recipes.ars_nouveau.enchanting_apparatus(
        [
            "createchromaticreturn:creative_flour",
            "armourers_workshop:skin-cube",
            "armourers_workshop:skin-cube-glowing",
            "armourers_workshop:skin-cube-glass",
            "armourers_workshop:skin-cube-glass-glowing",
        ],
        "armourers_workshop:skin-library",
        "armourers_workshop:skin-library-creative",
        10000
    )
  event.recipes.gtceu.assembly_line('ae2_creative_energy_cell')
      .itemInputs('16x ae2:dense_energy_cell', '16x ae2:singularity', '16x #gtceu:circuits/uhv', '16x ae2:sky_dust', '4x createchromaticreturn:multiplite_ingot', '4x createchromaticreturn:creative_flour')
      .itemOutputs('ae2:creative_energy_cell')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 5760), Fluid.of('gtceu:naquadria', 1152), Fluid.of('gtceu:neutronium', 288))
      .duration(1800)
      .EUt(300000)
  event.recipes.gtceu.assembly_line('ae2_creative_item_cell')
      .itemInputs('64x ae2:item_cell_housing', '16x ae2:singularity', '16x #gtceu:circuits/uhv', '16x ae2:sky_dust', '4x createchromaticreturn:multiplite_ingot', '4x createchromaticreturn:creative_flour')
      .itemOutputs('ae2:creative_item_cell')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 2880), Fluid.of('gtceu:naquadria', 576), Fluid.of('gtceu:neutronium', 144))
      .duration(1200)
      .EUt(300000)
  event.recipes.gtceu.assembly_line('ae2_creative_fluid_cell')
      .itemInputs('64x ae2:fluid_cell_housing', '16x ae2:singularity', '16x #gtceu:circuits/uhv', '16x ae2:sky_dust', '4x createchromaticreturn:multiplite_ingot', '4x createchromaticreturn:creative_flour')
      .itemOutputs('ae2:creative_fluid_cell')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 2880), Fluid.of('gtceu:naquadria', 576), Fluid.of('gtceu:neutronium', 144))
      .duration(1200)
      .EUt(300000)
  event.recipes.gtceu.assembly_line('ae2_creative_source_cell')
      .itemInputs('64x arseng:source_cell_housing', '16x ae2:singularity', '16x #gtceu:circuits/uhv', '16x ae2:sky_dust', '4x createchromaticreturn:multiplite_ingot', '4x createchromaticreturn:creative_flour')
      .itemOutputs('arseng:creative_source_cell')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 2880), Fluid.of('gtceu:naquadria', 576), Fluid.of('gtceu:neutronium', 144))
      .duration(1200)
      .EUt(300000)
  event.recipes.gtceu.assembly_line('gtceu_creative_energy')
      .itemInputs('64x gtceu:double_neutronium_plate', '16x #gtceu:circuits/uhv', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '4x gtceu:max_battery', '4x createchromaticreturn:creative_flour')
      .itemOutputs('gtceu:creative_energy')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 5760), Fluid.of('gtceu:naquadria', 2592), Fluid.of('gtceu:neutronium', 1152), Fluid.of('gtceu:polybenzimidazole', 2592))
      .duration(22900)
      .EUt(300000)
  event.recipes.gtceu.assembly_line('gtceu_creative_tank')
      .itemInputs('64x gtceu:double_neutronium_plate', '16x #gtceu:circuits/uhv', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', 'gtceu:ev_super_tank', '4x createchromaticreturn:creative_flour')
      .itemOutputs('gtceu:creative_tank')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 5760), Fluid.of('gtceu:naquadria', 2592), Fluid.of('gtceu:neutronium', 1152), Fluid.of('gtceu:polybenzimidazole', 2592))
      .duration(22900)
      .EUt(300000)
  event.recipes.gtceu.assembly_line('gtceu_creative_chest')
      .itemInputs('64x gtceu:double_neutronium_plate', '16x #gtceu:circuits/uhv', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', '64x gtceu:highly_advanced_soc_wafer', 'gtceu:ev_super_chest', '4x createchromaticreturn:creative_flour')
      .itemOutputs('gtceu:creative_chest')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 5760), Fluid.of('gtceu:naquadria', 2592), Fluid.of('gtceu:neutronium', 1152), Fluid.of('gtceu:polybenzimidazole', 2592))
      .duration(22900)
      .EUt(300000)
  */
  event.remove({ id: 'witherstormmod:super_tnt' })
  event.remove({ id: 'witherstormmod:formidibomb' })
  event.custom({
    type: 'witherstormmod:item_craft_super_beacon',
    ingredients: [
        {
            item: "gtceu:space_neutronium_dust"
        },
        {
            item: "witherstormmod:tainted_dust"
        },
        {
            item: "witherstormmod:tainted_dust"
        },
        {
            item: "gtceu:infinity_catalyst_dust"
        },
        {
            item: "witherstormmod:tainted_dust"
        },
        {
            item: "witherstormmod:tainted_dust"
        }
    ],
    result: "createchromaticreturn:creative_flour",
    condition: "fully_completed"
  })
  event.remove({ id: 'avaritia:endless_cake' })
  event.remove({ id: 'avaritia:crystal_matrix_ingot' })
  event.remove({ id: 'avaritia:diamond_lattice' })
  event.remove({ id: 'avaritia:compressed_crafting_table' })
  event.remove({ id: 'avaritia:compressed_crafting_table_from_double_compressed_crafting_table' })
  event.remove({ id: 'avaritia:double_compressed_crafting_table' })
  event.remove({ id: 'avaritia:extreme_crafting_table' })
  event.remove({ id: 'avaritia:neutron_gear' })
  event.remove({ id: 'avaritia:denser_neutron_collector' })
  event.remove({ id: 'avaritia:dense_neutron_collector' })
  event.remove({ type: 'avaritia:shapeless_extreme_craft' })
  event.remove({ type: 'avaritia:shaped_extreme_craft' })
  event.custom({
    type: 'avaritia:infinity_catalyst_craft',
    category: "misc",
    ingredients: [
        {
            item: "createchromaticreturn:creative_flour"
        },
        {
            item: "avaritia:crystal_matrix_ingot"
        },
        {
            item: "gtceu:space_neutronium_ingot"
        },
        {
            item: "avaritia:cosmic_meatballs"
        },
        {
            item: "avaritia:ultimate_stew"
        },
        {
            item: "avaritia:endest_pearl"
        },
        {
            item: "avaritia:record_fragment"
        }
    ]
  })
  event.custom({
    type: 'avaritia:shapeless_extreme_craft',
    category: "equipment",
    ingredients: [
        {
            item: "minecraft:rabbit"
        },
        {
            item: "minecraft:tropical_fish"
        },
        {
            item: "ends_delight:liquid_dragon_egg"
        },
        {
            item: "ends_delight:raw_dragon_meat_cuts"
        },
        {
            item: "ends_delight:raw_ender_mite_meat"
        },
        {
            item: "cataclysm_delight:molten_bone"
        },
        {
            item: "cataclysm_delight:void_core_powder"
        },
        {
            item: "cataclysm_delight:sliced_netherite_horn"
        },
        {
            item: "cataclysm_delight:endermaptera_shell"
        },
        {
            item: "witherstormmod:withered_flesh"
        },
        {
            item: "witherstormmod:withered_spider_eye"
        },
        {
            item: "nethersdelight:hoglin_sirloin"
        },
        {
            item: "farmersdelight:chicken_cuts"
        },
        {
            item: "farmersdelight:bacon"
        },
        {
            item: "farmersdelight:cod_slice"
        },
        {
            item: "farmersdelight:salmon_slice"
        },
        {
            item: "farmersdelight:mutton_chops"
        },
        {
            item: "farmersdelight:minced_beef"
        },
        {
            item: "autumnity:turkey_piece"
        },
        {
            item: "oceansdelight:fugu_slice"
        },
        {
            item: "oceansdelight:elder_guardian_slice"
        },
        {
            item: "oceansdelight:guardian_tail"
        },
        {
            item: "oceansdelight:cut_tentacles"
        },
        {
            item: "minecraft:egg"
        },
        {
            item: "minecraft:turtle_egg"
        },
        {
            item: "minecraft:sniffer_egg"
        },
        {
            item: "naturalist:alligator_egg"
        },
        {
            item: "naturalist:tortoise_egg"
        },
        {
            item: "naturalist:duck_egg"
        },
        {
            item: "naturalist:venison"
        },
        {
            item: "naturalist:lizard_tail"
        },
        {
            item: "naturalist:catfish"
        },
        {
            item: "naturalist:bass"
        },
        {
            item: "cataclysm:lionfish"
        },
    ],
    result: {
        item: "avaritia:cosmic_meatballs"
    }
  })
  event.custom({
    type: 'avaritia:shapeless_extreme_craft',
    category: "equipment",
    ingredients: [
        {
            item: "minecraft:enchanted_golden_apple"
        },
        {
            item: "minecraft:golden_carrot"
        },
        {
            item: "minecraft:glistering_melon_slice"
        },
        {
            item: "minecraft:poisonous_potato"
        },
        {
            tag: "forge:dough"
        },
        {
            item: "minecraft:apple"
        },
        {
            item: "minecraft:carrot"
        },
        {
            item: "minecraft:potato"
        },
        {
            item: "minecraft:beetroot"
        },
        {
            item: "minecraft:melon_slice"
        },
        {
            item: "farmersdelight:pumpkin_slice"
        },
        {
            item: "minecraft:kelp"
        },
        {
            item: "minecraft:nether_wart"
        },
        {
            item: "minecraft:chorus_fruit"
        },
        {
            item: "minecraft:crimson_fungus"
        },
        {
            item: "minecraft:warped_fungus"
        },
        {
            item: "minecraft:brown_mushroom"
        },
        {
            item: "minecraft:red_mushroom"
        },
        {
            item: "witherstormmod:tainted_mushroom"
        },
        {
            item: "quark:glow_shroom"
        },
        {
            item: "minecraft:sweet_berries"
        },
        {
            item: "minecraft:glow_berries"
        },
        {
            item: "ars_nouveau:sourceberry_bush"
        },
        {
            item: "autumnity:foul_berries"
        },
        {
            item: "fruitsdelight:pear"
        },
        {
            item: "fruitsdelight:hawberry"
        },
        {
            item: "fruitsdelight:lychee"
        },
        {
            item: "fruitsdelight:mango"
        },
        {
            item: "fruitsdelight:persimmon"
        },
        {
            item: "fruitsdelight:peach"
        },
        {
            item: "fruitsdelight:orange"
        },
        {
            item: "fruitsdelight:mangosteen"
        },
        {
            item: "fruitsdelight:bayberry"
        },
        {
            item: "fruitsdelight:kiwi"
        },
        {
            item: "fruitsdelight:fig"
        },
        {
            item: "fruitsdelight:durian_flesh"
        },
        {
            item: "fruitsdelight:lemon"
        },
        {
            item: "fruitsdelight:blueberry"
        },
        {
            item: "fruitsdelight:cranberry"
        },
        {
            item: "fruitsdelight:hamimelon_slice"
        },
        {
            item: "fruitsdelight:pineapple_slice"
        },
        {
            item: "farmersdelight:rice"
        },
        {
            item: "farmersdelight:cabbage_leaf"
        },
        {
            tag: "forge:crops/tomato"
        },
        {
            item: "farmersdelight:onion"
        }
    ],
    result: {
        item: "avaritia:ultimate_stew"
    }
  })
  event.custom({
    type: 'avaritia:shapeless_extreme_craft',
    category: "equipment",
    ingredients: [
        {
            item: "minecraft:cake"
        },
        {
            item: "create:blaze_cake"
        },
        {
            item: "bakery:strawberry_cake"
        },
        {
            item: "bakery:sweetberry_cake"
        },
        {
            item: "bakery:chocolate_cake"
        },
        {
            item: "createaddition:chocolate_cake"
        },
        {
            item: "createaddition:honey_cake"
        },
        {
            item: "minecraft:dragon_egg"
        },
        {
            item: "gtceu:infinity_ingot"
        }
    ],
    result: {
        item: "avaritia:endless_cake"
    }
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "E": {
            tag: "forge:end_stones"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "P": {
            tag: "forge:ender_pearls"
        },
        "S": {
            item: "gtceu:gravi_star"
        }
    },
    pattern: [
        "   EEE   ",
        " EEPPPEE ",
        " EPPPPPE ",
        "EPPPNPPPE",
        "EPPNSNPPE",
        "EPPPNPPPE",
        " EPPPPPE ",
        " EEPPPEE ",
        "   EEE   "
    ],
    result: {
        item: "avaritia:endest_pearl"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "C": {
            item: "avaritia:crystal_matrix_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "NNNNNNNNN",
        "NCXXCXXCN",
        "NXCCXCCXN",
        "NCXXCXXCN",
        "NNNNNNNNN"
    ],
    result: {
        item: "avaritia:infinity_ingot"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shapeless_extreme_craft',
    category: "equipment",
    ingredients: [
        {
            item: "xercamusic:guitar"
        },
        {
            item: "xercamusic:lyre"
        },
        {
            item: "xercamusic:banjo"
        },
        {
            item: "xercamusic:drum"
        },
        {
            item: "xercamusic:cymbal"
        },
        {
            item: "xercamusic:drum_kit"
        },
        {
            item: "xercamusic:xylophone"
        },
        {
            item: "xercamusic:tubular_bell"
        },
        {
            item: "xercamusic:sansula"
        },
        {
            item: "xercamusic:violin"
        },
        {
            item: "xercamusic:cello"
        },
        {
            item: "xercamusic:flute"
        },
        {
            item: "xercamusic:saxophone"
        },
        {
            item: "xercamusic:god"
        },
        {
            item: "xercamusic:piano"
        },
        {
            item: "xercamusic:oboe"
        },
        {
            item: "xercamusic:redstone_guitar"
        },
        {
            item: "xercamusic:french_horn"
        },
        {
            item: "xercamusic:bass_guitar"
        },
        {
            item: "etched:blank_music_disc"
        }
    ],
    result: {
        item: "avaritia:record_fragment"
    }
  })

  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "   I   ",
        "  IIIII",
        "  IIXI ",
        "   IN  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  ",
        "    N  "
    ],
    result: {
        item: "avaritia:infinity_axe"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        }
    },
    pattern: [
        " NNN NNN ",
        " NIN NIN ",
        " NIN NIN ",
        "NNIN NINN",
        "NIIN NIIN",
        "NNNN NNNN"
    ],
    result: {
        item: "avaritia:infinity_boots"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "W": {
            item: "ars_nouveau:magebloom_block"
        },
        "X": {
            item: "avaritia:crystal_matrix"
        }
    },
    pattern: [
        "   II",
        "  I W",
        " I  W",
        "I   W",
        "X   W",
        "I   W",
        " I  W",
        "  I W",
        "   II"
    ],
    result: {
        item: "avaritia:infinity_bow"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:crystal_matrix"
        }
    },
    pattern: [
        " NN   NN ",
        "NNN   NNN",
        "NNN   NNN",
        " NIIIIIN ",
        " NIIXIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NIIIIIN ",
        "  NNNNN  "
    ],
    result: {
        item: "avaritia:infinity_chestplate"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "  NNNNN  ",
        " NIIIIIN ",
        " N XIX N ",
        " NIIIIIN ",
        " NIIIIIN ",
        " NI I IN "
    ],
    result: {
        item: "avaritia:infinity_helmet"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "     N ",
        "   IIII",
        "  IIIII",
        "  I  XI",
        "     N ",
        "     N ",
        "     N ",
        "     N ",
        "     N "
    ],
    result: {
        item: "avaritia:infinity_hoe"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "C": {
            item: "avaritia:crystal_matrix_ingot"
        },
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "NNNNNNNNN",
        "NIIIXIIIN",
        "NINNXNNIN",
        "NIN   NIN",
        "NCN   NCN",
        "NIN   NIN",
        "NIN   NIN",
        "NIN   NIN",
        "NNN   NNN"
    ],
    result: {
        item: "avaritia:infinity_pants"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        " IIIIIII ",
        "IIIIXIIII",
        "II  N  II",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    ",
        "    N    "
    ],
    result: {
        item: "avaritia:infinity_pickaxe"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "      III",
        "     IIXI",
        "      III",
        "     N I ",
        "    N    ",
        "   N     ",
        "  N      ",
        " N       ",
        "N        "
    ],
    result: {
        item: "avaritia:infinity_shovel"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "C": {
            item: "avaritia:crystal_matrix_ingot"
        },
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "       II",
        "      III",
        "     III ",
        "    III  ",
        " C III   ",
        "  CII    ",
        "  NC     ",
        " N  C    ",
        "X        "
    ],
    result: {
        item: "avaritia:infinity_sword"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "C": {
            item: "avaritia:crystal_matrix_ingot"
        },
        "I": {
            item: "gtceu:infinity_nugget"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "Y": {
            item: "minecraft:totem_of_undying"
        }
    },
    pattern: [
        "   NNN   ",
        "  NIIIN  ",
        "  NYIYN  ",
        "CCCIIICCC",
        " CCIIICC ",
        "  NIIIN  ",
        "  NNNNN  ",
        "   CCC   ",
        "    C    "
    ],
    result: {
        item: "avaritia:infinity_totem"
    },
    show_notification: true
  })
  event.custom({
    type: 'avaritia:shaped_extreme_craft',
    category: "equipment",
    key: {
        "I": {
            item: "gtceu:infinity_ingot"
        },
        "N": {
            item: "gtceu:space_neutronium_ingot"
        },
        "X": {
            item: "avaritia:infinity_catalyst"
        }
    },
    pattern: [
        "      III",
        "     IIXI",
        "      III",
        "     N I ",
        "    N    ",
        "   N     ",
        "  N      ",
        " N       ",
        "N        "
    ],
    result: {
        item: "avaritia:infinity_shovel"
    },
    show_notification: true
  })

  event.recipes.gtceu.macerator("avaritia_ingot_recrush")
    .itemInputs("1x avaritia:infinity_ingot")
    .itemOutputs("1x gtceu:infinity_dust")
    .EUt(32)
    .duration(1100000)
  event.recipes.gtceu.macerator("avaritia_block_recrush")
    .itemInputs("1x avaritia:infinity")
    .itemOutputs("9x gtceu:infinity_dust")
    .EUt(32)
    .duration(9900000)

  //research
  event.recipes.gtceu.research_station("1x_avaritia_crystal_matrix")
    .itemInputs("gtceu:data_module", "avaritia:crystal_matrix")
    .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_avaritia_crystal_matrix\",research_type:\"gtceu:assembly_line\"}}"))
    .EUt(1966080)
    .CWUt(256)
    .duration(256 * 8000)
    .data({
        "hide_duration": 1,
        "duration_is_total_cwu": 1
    })
  event.recipes.gtceu.assembly_line('extreme_crafting_table')
      .itemInputs('1x gtceu:atomic_casing', '16x gtceu:uv_field_generator', '16x gtceu:uv_robot_arm', '64x avaritia:crystal_matrix_ingot', '64x createchromaticreturn:creative_flour')
      .itemOutputs('1x avaritia:extreme_crafting_table')
      .inputFluids(Fluid.of('gtceu:sodium_potassium', 12000), Fluid.of('gtceu:soldering_alloy', 5760), Fluid.of('gtceu:space_neutronium', 1296))
      .duration(38380)
      .EUt(1966080)
      .researchWithoutRecipe("1x_avaritia_crystal_matrix", "gtceu:data_module")

  event.recipes.gtceu.research_station("1x_witherstormmod_super_tnt")
    .itemInputs("gtceu:data_module", "witherstormmod:super_tnt")
    .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_witherstormmod_super_tnt\",research_type:\"gtceu:assembly_line\"}}"))
    .EUt(491520)
    .CWUt(128)
    .duration(128 * 8000)
    .data({
        "hide_duration": 1,
        "duration_is_total_cwu": 1
    })
  event.recipes.gtceu.assembly_line('formidibomb')
      .itemInputs('1x witherstormmod:super_tnt', '1x kubejs:neutron_bomb', '1x gtceu:gravi_star', '4x witherstormmod:withered_bone', '4x witherstormmod:withered_flesh', '4x witherstormmod:withered_spider_eye')
      .itemOutputs('1x witherstormmod:formidibomb')
      .inputFluids(Fluid.of('gtceu:dragonium', 16000), Fluid.of('gtceu:sourcium', 64000))
      .duration(10400)
      .EUt(300000)
      .researchWithoutRecipe("1x_witherstormmod_super_tnt", "gtceu:data_module")

  event.recipes.gtceu.research_station("1x_gtceu_uhv_machine_casing")
    .itemInputs("gtceu:data_module", "gtceu:uhv_machine_casing")
    .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_gtceu_uhv_machine_casing\",research_type:\"gtceu:assembly_line\"}}"))
    .EUt(1966080)
    .CWUt(256)
    .duration(256 * 8000)
    .data({
        "hide_duration": 1,
        "duration_is_total_cwu": 1
    })
  event.recipes.gtceu.assembly_line('atomic_casing')
      .itemInputs('1x gtceu:uhv_machine_casing', '6x gtceu:double_neutronium_plate', '1x ae2:singularity', '1x gtceu:neutronium_frame', '1x gtceu:uv_field_generator', '2x #gtceu:circuits/uhv')
      .itemOutputs('1x gtceu:atomic_casing')
      .inputFluids(Fluid.of('gtceu:space_neutronium', 288))
      .duration(9800)
      .EUt(1200000)
      .researchWithoutRecipe("1x_gtceu_uhv_machine_casing", "gtceu:data_module")

  event.recipes.gtceu.research_station("1x_gtceu_uhv_machine_hull")
    .itemInputs("gtceu:data_module", "gtceu:uhv_machine_hull")
    .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_gtceu_uhv_machine_hull\",research_type:\"gtceu:assembly_line\"}}"))
    .EUt(1966080)
    .CWUt(144)
    .duration(144 * 8000)
    .data({
        "hide_duration": 1,
        "duration_is_total_cwu": 1
    })
  event.recipes.gtceu.assembly_line('keke_generator')
      .itemInputs('1x gtceu:uhv_machine_hull', '4x gtceu:uv_field_generator', '4x #gtceu:circuits/uhv', '32x gtceu:uv_electric_pump', '16x gtceu:uv_conveyor_module', '64x ae2:singularity')
      .itemOutputs('1x gtceu:keke_generator')
      .inputFluids(Fluid.of('gtceu:enriched_keke_matter', 9216), Fluid.of('gtceu:bio_sticker', 5760))
      .duration(2930)
      .EUt(1966080)
      .researchWithoutRecipe("1x_gtceu_uhv_machine_hull", "gtceu:data_module")

  event.recipes.gtceu.research_station("1x_gtceu_uv_machine_hull")
    .itemInputs("gtceu:data_module", "gtceu:uv_machine_hull")
    .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_gtceu_uv_machine_hull\",research_type:\"gtceu:assembly_line\"}}"))
    .EUt(491520)
    .CWUt(128)
    .duration(128 * 8000)
    .data({
        "hide_duration": 1,
        "duration_is_total_cwu": 1
    })
  event.recipes.gtceu.assembly_line('cosmic_matter_collector')
      .itemInputs('1x gtceu:uv_machine_hull', '4x gtceu:zpm_field_generator', '4x #gtceu:circuits/uv', '8x gtceu:uv_electric_pump', '16x gtceu:uv_conveyor_module', '4x gtceu:uv_sensor', '4x gtceu:uv_emitter', '4x kubejs:ultimate_ingot')
      .itemOutputs('1x gtceu:cosmic_matter_collector')
      .inputFluids(Fluid.of('gtceu:sodium_potassium', 8000), Fluid.of('gtceu:soldering_alloy', 2880), Fluid.of('gtceu:hyper_enderite', 1152))
      .duration(2680)
      .EUt(491520)
      .researchWithoutRecipe("1x_gtceu_uv_machine_hull", "gtceu:data_module")
})
