ServerEvents.recipes(event => {
  console.log('Ready to modify create-associated recipes.')
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
  event.recipes.create.mixing('2x create:rose_quartz', ['minecraft:quartz', '2x #forge:dusts/red_alloy'])

  //create_other
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
})
