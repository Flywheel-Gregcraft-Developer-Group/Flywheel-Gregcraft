ServerEvents.recipes(event => {
  console.log('Ready to modify create-associated recipes.')
  //mainline
  event.recipes.create.sequenced_assembly([
		    Item.of('kubejs:electronic_mechanism').withChance(80.0),
		    Item.of('create:polished_rose_quartz').withChance(8.0),
		    Item.of('gtceu:iron_plate').withChance(4.0),
		    Item.of('create:cogwheel').withChance(2.0),
            Item.of('create:shaft').withChance(2.0),
            Item.of('2x gtceu:bronze_nugget').withChance(2.0),
		    Item.of('2x gold_nugget').withChance(2.0)
	  ], 'create:precision_mechanism', [ 
		    event.recipes.createDeploying('kubejs:incomplete_electronic_mechanism', ['kubejs:incomplete_electronic_mechanism', 'create_connected:control_chip']),
            event.recipes.createDeploying('kubejs:incomplete_electronic_mechanism', ['kubejs:incomplete_electronic_mechanism', 'vintageimprovements:redstone_module']),
		    event.recipes.createFilling('kubejs:incomplete_electronic_mechanism', ['kubejs:incomplete_electronic_mechanism', Fluid.of('minecraft:lava',125)])
	  ]).transitionalItem('kubejs:incomplete_electronic_mechanism').loops(4)
  event.remove({ id: 'create:crafting/kinetics/mechanical_crafter' })
  event.shaped(Item.of('create:mechanical_crafter',3), [
        'M',
        'C',
        'T'
    ],
    {
        M: 'create:precision_mechanism',
        C: 'create:brass_casing',
        T: 'minecraft:crafting_table'
    })
  event.remove({ id: 'create:crafting/kinetics/mechanical_arm' })
  event.shaped(Item.of('create:mechanical_arm',1), [
        'PPA',
        'P  ',
        'MC '
    ],
    {
        A: '#forge:ingots/andesite_alloy',
        C: 'create:brass_casing',
        M: 'create:precision_mechanism',
        P: '#forge:plates/brass'
    })
  event.remove({ id: 'create:crafting/kinetics/clockwork_bearing' })
  event.shaped(Item.of('create:clockwork_bearing',1), [
        'S',
        'C',
        'M'
    ],
    {
        S: '#minecraft:wooden_slabs',
        C: 'create:brass_casing',
        M: 'create:precision_mechanism'
    })
  event.remove({ id: 'createchromaticreturn:glowing_ingot_recipe' })
  event.recipes.create.filling('createchromaticreturn:glowing_ingot', [Fluid.of('create_enchantment_industry:hyper_experience',100), '#forge:ingots/brass'])
  event.remove({ id: 'create_enchantment_industry:mixing/hyper_experience' })
  event.recipes.create.mixing(Fluid.of('create_enchantment_industry:hyper_experience',10), [Fluid.of('create_enchantment_industry:experience',100), Fluid.of('create_central_kitchen:dragon_breath',100), '#forge:gems/lapis']).superheated()
  event.remove({ id: 'create:compacting/blaze_cake' })
  event.recipes.create.compacting('create:blaze_cake_base', [Fluid.of('create_central_kitchen:dragon_breath',50), '#forge:dusts/netherrack', '#forge:dusts/sugar', '#naturalist:eggs']).heated()
  event.remove({ id: 'createchromaticreturn:refined_mixture_recipe' })
  event.recipes.create.mixing([Fluid.of('createchromaticreturn:refined_mixture',100)], ['16x minecraft:glowstone', 'kubejs:refined_essence', Fluid.of('minecraft:water',500)]).superheated()
  event.remove({ id: 'createchromaticreturn:shadow_essence_recipe' })
  event.recipes.create.mixing([Fluid.of('createchromaticreturn:shadow_essence',50)], ['16x minecraft:polished_blackstone', 'kubejs:shadow_essence', Fluid.of('minecraft:lava',250)]).superheated()

  //drill
  event.replaceInput({mod:'createoreexcavation', type: 'crafting_shaped', input:'#forge:ores/redstone'}, '#forge:ores/redstone' , 'minecraft:redstone')
  event.remove({ id: 'createoreexcavation:drilling_machine' })
  event.recipes.create.mechanical_crafting('createoreexcavation:drilling_machine', [
    'BPCPB',
    'PEFEP',
    'LEDER',
    'POOOP',
    'BPPPB'
  ], {
    B: '#forge:storage_blocks/netherite',
    C: 'create:copper_casing',
    D: 'create:mechanical_drill',
    E: 'kubejs:electronic_mechanism',
    F: 'create:spout',
    L: 'create:brass_casing',
    O: '#forge:plates/obsidian',
    P: '#forge:plates/brass',
    R: 'create:brass_tunnel'
  })
  event.remove({ id: 'createoreexcavation:extractor' })
  event.recipes.create.mechanical_crafting('createoreexcavation:extractor', [
    'BPCPB',
    'PEFEP',
    'LEDEP',
    'POOOP',
    'BPPPB'
  ], {
    B: '#forge:storage_blocks/netherite',
    C: 'create:mechanical_pump',
    D: 'create:mechanical_drill',
    E: 'kubejs:electronic_mechanism',
    F: 'create:hose_pulley',
    L: 'create:brass_casing',
    O: '#forge:plates/obsidian',
    P: '#forge:plates/brass'
  })

  //deployer
  event.recipes.create.deploying('create:sand_paper', ['paper', '#forge:sand/colorless'])
  event.recipes.create.deploying('create:red_sand_paper', ['paper', '#forge:sand/red'])
  event.recipes.create.deploying('create:electron_tube', ['#forge:plates/iron', 'create:polished_rose_quartz'])
  event.recipes.create.deploying('2x create:electron_tube', ['#forge:foils/zinc', 'create:polished_rose_quartz'])
  event.recipes.create.deploying('4x create:electron_tube', ['#forge:foils/silver', 'create:polished_rose_quartz'])
  event.recipes.create.deploying('8x create:electron_tube', ['#forge:foils/graphene', 'create:polished_rose_quartz'])
  event.recipes.create.mixing('2x create:rose_quartz', ['minecraft:quartz', '4x #forge:dusts/red_alloy'])
  event.recipes.create.mixing('4x create:rose_quartz', ['minecraft:quartz', '2x #forge:dusts/redstone_alloy'])

  //create_other
  event.remove({ id: 'createchromaticreturn:zinc_recipe' })
  event.recipes.create.mixing('1x gtceu:zinc_nugget', [Fluid.of('minecraft:water', 1000), '1x minecraft:flint']).heated()
  event.remove({ id: 'vintageimprovements:mechanical_crafting/lathe' })
  event.recipes.create.mechanical_crafting('vintageimprovements:lathe', [
    ' MIA ',
    'SCCBS',
    '  IA '
  ], {
    C: 'create:andesite_casing',
    M: 'create:precision_mechanism',
    A: '#forge:ingots/andesite_alloy',
    S: 'create:shaft',
    I: '#forge:springs/iron',
    B: 'minecraft:iron_block'
  })
  event.remove({ id: 'vintageimprovements:craft/laser' })
  event.shaped(Item.of('vintageimprovements:laser',1), [
        'WBW',
        'MCI',
        'QLQ'
    ],
    {
        C: 'create:brass_casing',
        M: 'create:precision_mechanism',
        W: 'create:cogwheel',
        L: 'vintageimprovements:laser_item',
        I: '#forge:springs/iron',
        B: 'minecraft:redstone_block',
        Q: 'create:polished_rose_quartz'
    })
  event.remove({ id: 'vintageimprovements:craft/vibrating_table' })
  event.shaped(Item.of('vintageimprovements:vibrating_table',1), [
        'ISI',
        'IPI'
    ],
    {
        I: '#forge:springs/iron',
        S: '#minecraft:wooden_slabs',
        P: 'create:mechanical_piston'
    })
  event.remove({ id: 'vintageimprovements:craft/vacuum_chamber' })
  event.shaped(Item.of('vintageimprovements:vacuum_chamber',1), [
        'ICI',
        'APA'
    ],
    {
        I: '#forge:springs/iron',
        A: '#forge:ingots/andesite_alloy',
        C: 'create:andesite_casing',
        P: 'create:mechanical_pump'
    })
  event.remove({ id: 'vintageimprovements:mechanical_crafting/helve_hammer' })
  event.recipes.create.mechanical_crafting('vintageimprovements:helve_hammer', [
    ' B II',
    'BLLLC',
    'BB  S'
  ], {
    C: 'create:andesite_casing',
    L: '#minecraft:logs',
    S: 'create:shaft',
    I: '#forge:springs/iron',
    B: 'minecraft:iron_block'
  })
  event.remove({ id: 'vintageimprovements:craft/curving_press' })
  event.shaped(Item.of('vintageimprovements:curving_press',1), [
        ' S ',
        'ICI'
    ],
    {
        I: '#forge:springs/iron',
        S: 'create:shaft',
        C: 'create:andesite_casing'
    })
  event.remove({ id: 'vintageimprovements:craft/centrifuge' })
  event.shaped(Item.of('vintageimprovements:centrifuge',1), [
        'I I',
        'LSL',
        'ICI'
    ],
    {
        I: '#forge:springs/iron',
        S: 'create:shaft',
        L: '#minecraft:logs',
        C: 'create:andesite_casing'
    })
  event.remove({ id: 'create:crafting/schematics/schematicannon' })
  event.recipes.create.mechanical_crafting('create:schematicannon', [
    ' P P ',
    ' P P ',
    ' P P ',
    'WWDWW',
    'SSMSS'
  ], {
    P: '#forge:plates/obsidian',
    M: 'kubejs:electronic_mechanism',
    W: '#minecraft:logs',
    S: 'minecraft:smooth_stone',
    D: 'minecraft:dispenser'
  })
  event.recipes.create.mechanical_crafting('create:schematicannon', [
    ' P P ',
    ' P P ',
    ' P P ',
    'WWDWW',
    'SSMSS'
  ], {
    P: '#forge:plates/obsidian',
    M: '#gtceu:circuits/mv',
    W: '#minecraft:logs',
    S: 'minecraft:smooth_stone',
    D: 'minecraft:dispenser'
  })
  event.recipes.create.mechanical_crafting('create:schematicannon', [
    ' P P ',
    ' P P ',
    ' P P ',
    'WWDWW',
    'SSMSS'
  ], {
    P: '#forge:plates/steel',
    M: 'kubejs:electronic_mechanism',
    W: '#minecraft:logs',
    S: 'minecraft:smooth_stone',
    D: 'minecraft:dispenser'
  })
  event.recipes.create.mechanical_crafting('create:schematicannon', [
    ' P P ',
    ' P P ',
    ' P P ',
    'WWDWW',
    'SSMSS'
  ], {
    P: '#forge:plates/steel',
    M: '#gtceu:circuits/mv',
    W: '#minecraft:logs',
    S: 'minecraft:smooth_stone',
    D: 'minecraft:dispenser'
  })
  event.replaceInput({mod:'create_sa', output:'create_sa:brass_drone_item'}, 'create:precision_mechanism' , 'kubejs:electronic_mechanism')
  event.replaceInput({mod:'create_sa', output:'create_sa:brass_drill_head'}, 'create_sa:brass_pickaxe' , '#forge:gems/diamond')
  event.replaceInput({mod:'create', output:'create:steam_engine'}, '#forge:plates/gold' , '#forge:plates/brass')
  event.remove({ id: 'vintageimprovements:pressing/andesite_alloy' })
  event.remove({ id: 'createdeco:pressing/netherite_sheet' })

  event.recipes.create.emptying([Fluid.of('gtceu:sap', 250), 'minecraft:glass_bottle'], 'autumnity:sap_bottle')
  event.recipes.create.emptying([Fluid.of('gtceu:syrup', 250), 'minecraft:glass_bottle'], 'autumnity:syrup_bottle')
  event.recipes.create.emptying([Fluid.of('gtceu:cloud', 250), 'minecraft:glass_bottle'], 'quark:bottle_cloud')
  event.recipes.create.filling('autumnity:sap_bottle', [Fluid.of('gtceu:sap', 250), 'minecraft:glass_bottle'])
  event.recipes.create.filling('autumnity:syrup_bottle', [Fluid.of('gtceu:syrup', 250), 'minecraft:glass_bottle'])
  event.recipes.create.filling('quark:bottle_cloud', [Fluid.of('gtceu:cloud', 250), 'minecraft:glass_bottle'])
  event.recipes.create.mixing(Fluid.of('gtceu:syrup', 250), [Fluid.of('gtceu:sap', 250)]).heated()
  event.custom({
    type: 'vintageimprovements:centrifugation',
    ingredients: [ 
      {
        "fluid": "gtceu:syrup",
        "amount": 500
      }
    ],
    results: [
      {
        "item": "minecraft:sugar",
        "count": 1
      }
    ],
    processingTime: 1000
  })
  event.recipes.gtceu.fluid_heater('sap_heat')
      .inputFluids(Fluid.of('gtceu:sap', 100))
      .outputFluids(Fluid.of('gtceu:syrup', 100))
      .EUt(4)
      .duration(30)
  event.recipes.gtceu.centrifuge('syrup_centrifuge')
      .inputFluids(Fluid.of('gtceu:syrup', 200))
      .itemOutputs('1x minecraft:sugar')
      .EUt(5)
      .duration(96)

  //createdeco_bricks
  event.recipes.create.mixing('4x createdeco:dusk_bricks', ['create:scorchia', '4x minecraft:brick']).heated()
  event.recipes.create.mixing('4x createdeco:dean_bricks', ['create:ochrum', '4x minecraft:brick']).heated()
  event.recipes.create.mixing('4x createdeco:blue_bricks', ['create:asurine', '4x minecraft:brick']).heated()
  event.recipes.create.mixing('4x createdeco:umber_bricks', ['create:scoria', '4x minecraft:brick']).heated()
  event.recipes.create.mixing('4x createdeco:verdant_bricks', ['create:veridium', '4x minecraft:brick']).heated()
  event.recipes.create.mixing('4x createdeco:scarlet_bricks', ['create:crimsite', '4x minecraft:brick']).heated()
  event.recipes.create.mixing('4x createdeco:pearl_bricks', ['create:limestone', '4x minecraft:brick']).heated()
  event.recipes.gtceu.alloy_smelter('dusk_bricks_alloy')
      .itemInputs('1x create:scorchia', '4x minecraft:brick')
      .itemOutputs('8x createdeco:dusk_bricks')
      .duration(128)
      .EUt(28)
  event.recipes.gtceu.alloy_smelter('dean_bricks_alloy')
      .itemInputs('1x create:ochrum', '4x minecraft:brick')
      .itemOutputs('8x createdeco:dean_bricks')
      .duration(128)
      .EUt(28)
  event.recipes.gtceu.alloy_smelter('blue_bricks_alloy')
      .itemInputs('1x create:asurine', '4x minecraft:brick')
      .itemOutputs('8x createdeco:blue_bricks')
      .duration(128)
      .EUt(28)
  event.recipes.gtceu.alloy_smelter('umber_bricks_alloy')
      .itemInputs('1x create:scoria', '4x minecraft:brick')
      .itemOutputs('8x createdeco:umber_bricks')
      .duration(128)
      .EUt(28)
  event.recipes.gtceu.alloy_smelter('verdant_bricks_alloy')
      .itemInputs('1x create:veridium', '4x minecraft:brick')
      .itemOutputs('8x createdeco:verdant_bricks')
      .duration(128)
      .EUt(28)
  event.recipes.gtceu.alloy_smelter('scarlet_bricks_alloy')
      .itemInputs('1x create:crimsite', '4x minecraft:brick')
      .itemOutputs('8x createdeco:scarlet_bricks')
      .duration(128)
      .EUt(28)
  event.recipes.gtceu.alloy_smelter('pearl_bricks_alloy')
      .itemInputs('1x create:limestone', '4x minecraft:brick')
      .itemOutputs('8x createdeco:pearl_bricks')
      .duration(128)
      .EUt(28)
})
