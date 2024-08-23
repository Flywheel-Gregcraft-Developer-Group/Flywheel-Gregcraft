let colors = ['white', 'light_gray', 'gray', 'black', 'brown', 'red', 'orange', 'yellow', 'lime', 'green', 'cyan', 'light_blue', 'blue', 'purple', 'magenta', 'pink']

ServerEvents.recipes(event => {
  const RockBreakerCondition = Java.loadClass("com.gregtechceu.gtceu.common.recipe.RockBreakerCondition")

  console.log('Ready to do other fixes.')
  //wooden_fix
  event.remove({ id: 'enderio:stick' })
  event.remove({ id: 'vinery:oak_planks' })
  event.remove({ id: 'vinery:oak_planks_from_wood' })
  event.shaped(Item.of('minecraft:oak_planks',2), [
        'P'
    ],
    {
        P: 'vinery:apple_log'
    })
  event.shaped(Item.of('minecraft:oak_planks',2), [
        'P'
    ],
    {
        P: 'vinery:apple_wood'
    })
  event.recipes.gtceu.cutter('vinery_apple_log_w')
    .itemInputs('1x vinery:apple_log')
    .inputFluids(Fluid.of('minecraft:water', 4))
    .itemOutputs('6x minecraft:oak_planks', '2x gtceu:wood_dust')
    .duration(400)
    .EUt(7)
  event.recipes.gtceu.cutter('vinery_apple_log_l')
    .itemInputs('1x vinery:apple_log')
    .inputFluids(Fluid.of('minecraft:lubricant', 1))
    .itemOutputs('6x minecraft:oak_planks', '2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)
  event.recipes.gtceu.cutter('vinery_apple_wood_w')
    .itemInputs('1x vinery:apple_wood')
    .inputFluids(Fluid.of('minecraft:water', 4))
    .itemOutputs('6x minecraft:oak_planks', '2x gtceu:wood_dust')
    .duration(400)
    .EUt(7)
  event.recipes.gtceu.cutter('vinery_apple_wood_l')
    .itemInputs('1x vinery:apple_wood')
    .inputFluids(Fluid.of('minecraft:lubricant', 1))
    .itemOutputs('6x minecraft:oak_planks', '2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  event.remove({ id: 'quark:world/crafting/woodsets/ancient/planks' })
  event.shaped(Item.of('quark:ancient_planks',2), [
        'P'
    ],
    {
        P: '#quark:ancient_logs'
    })
  event.recipes.gtceu.cutter('quark_ancient_planks_w')
    .itemInputs('1x #quark:ancient_logs')
    .inputFluids(Fluid.of('minecraft:water', 4))
    .itemOutputs('6x quark:ancient_planks', '2x gtceu:wood_dust')
    .duration(400)
    .EUt(7)
  event.recipes.gtceu.cutter('quark_ancient_planks_l')
    .itemInputs('1x #quark:ancient_logs')
    .inputFluids(Fluid.of('minecraft:lubricant', 1))
    .itemOutputs('6x quark:ancient_planks', '2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  event.remove({ id: 'quark:world/crafting/woodsets/azalea/planks' })
  event.shaped(Item.of('quark:azalea_planks',2), [
        'P'
    ],
    {
        P: '#quark:azalea_logs'
    })
  event.recipes.gtceu.cutter('quark_azalea_planks_w')
    .itemInputs('1x #quark:azalea_logs')
    .inputFluids(Fluid.of('minecraft:water', 4))
    .itemOutputs('6x quark:azalea_planks', '2x gtceu:wood_dust')
    .duration(400)
    .EUt(7)
  event.recipes.gtceu.cutter('quark_azalea_planks_l')
    .itemInputs('1x #quark:ancient_logs')
    .inputFluids(Fluid.of('minecraft:lubricant', 1))
    .itemOutputs('6x quark:azalea_planks', '2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  event.remove({ id: 'quark:world/crafting/woodsets/blossom/planks' })
  event.shaped(Item.of('quark:blossom_planks',2), [
        'P'
    ],
    {
        P: '#quark:blossom_logs'
    })
  event.recipes.gtceu.cutter('quark_blossom_planks_w')
    .itemInputs('1x #quark:blossom_logs')
    .inputFluids(Fluid.of('minecraft:water', 4))
    .itemOutputs('6x quark:blossom_planks', '2x gtceu:wood_dust')
    .duration(400)
    .EUt(7)
  event.recipes.gtceu.cutter('quark_blossom_planks_l')
    .itemInputs('1x #quark:blossom_logs')
    .inputFluids(Fluid.of('minecraft:lubricant', 1))
    .itemOutputs('6x quark:blossom_planks', '2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  event.remove({ id: 'beachparty:palm_planks' })
  event.shaped(Item.of('beachparty:palm_planks',2), [
        'P'
    ],
    {
        P: '#forge:palm_logs'
    })
  event.recipes.gtceu.cutter('palm_planks_w')
    .itemInputs('1x #forge:palm_logs')
    .inputFluids(Fluid.of('minecraft:water', 4))
    .itemOutputs('6x beachparty:palm_planks', '2x gtceu:wood_dust')
    .duration(400)
    .EUt(7)
  event.recipes.gtceu.cutter('palm_planks_l')
    .itemInputs('1x #forge:palm_logs')
    .inputFluids(Fluid.of('minecraft:lubricant', 1))
    .itemOutputs('6x beachparty:palm_planks', '2x gtceu:wood_dust')
    .duration(200)
    .EUt(7)

  //other_fix
  event.remove({ id: 'gtceu:large_boiler/lava_bucket' })
  event.remove({ id: 'gtceu:large_boiler/lava' })
  event.remove({ id: 'farmersdelight:flint_knife' })
  event.shaped(Item.of('farmersdelight:flint_knife',1), [
        'F',
        ' ',
        'S'
    ],
    {
        F: 'minecraft:flint',
        S: '#forge:rods/wooden'
    })
  event.shaped(Item.of('create:belt_connector',1), [
        'LLL',
        'LLL'
    ],
    {
        L: 'minecraft:leather'
    })
  event.shaped(Item.of('minecraft:glass_bottle',1), [
        ' W ',
        'P P',
        ' P '
    ],
    {
        W: '#minecraft:planks',
        P: 'minecraft:glass_pane'
    })
  event.remove({ id: 'createchromaticreturn:carbon_powder_recipe' })
  event.remove({ id: 'createchromaticreturn:charm_cast_recipe' })
  event.remove({ id: 'createdeco:compacting/industrial_iron_ingot' })
  event.recipes.create.mixing('minecraft:tnt', ['4x minecraft:gunpowder', '4x #forge:sand', 'minecraft:blaze_powder'])
  event.recipes.create.mixing('12x minecraft:ender_eye', ['12x minecraft:ender_pearl', 'bosses_of_mass_destruction:blazing_eye']).heated()
  event.shapeless(Item.of('solapplepie:food_book',1), [
        'minecraft:book', 'farmersdelight:apple_pie'
    ])
  colors.forEach(c => {
      event.shaped(Item.of('minecraft:' + c + '_stained_glass_pane',8),[
          'PPP',
          'PDP',
          'PPP'
      ],
      {
          P: 'minecraft:glass_pane',
          D: c + '_dye'
      })
  })
  event.shapeless(Item.of('minecraft:netherrack',8), [
        '8x minecraft:cobblestone', 'minecraft:blaze_powder'
    ])
  event.remove({ id: 'createchromaticreturn:gp_to_bp' })
  event.recipes.create.haunting(Item.of('blaze_powder').withChance(0.25), 'minecraft:gunpowder')
  event.remove({ id: 'chunkloaders:basic_chunk_loader' })
  event.shaped(Item.of('chunkloaders:basic_chunk_loader',1), [
        ' E ',
        'EOE',
        ' E '
    ],
    {
        O: 'minecraft:obsidian',
        E: 'minecraft:ender_pearl'
    })
  event.shaped(Item.of('chunkloaders:basic_chunk_loader',2), [
        ' E ',
        'EOE',
        ' E '
    ],
    {
        O: '#forge:ingots/steel',
        E: 'minecraft:ender_pearl'
    })
  event.shaped(Item.of('chunkloaders:basic_chunk_loader',4), [
        ' E ',
        'EOE',
        ' E '
    ],
    {
        O: '#forge:ingots/netherite',
        E: 'minecraft:ender_pearl'
    })
  event.shaped(Item.of('chunkloaders:basic_chunk_loader',4), [
        ' E ',
        'EOE',
        ' E '
    ],
    {
        O: '#forge:ingots/stainless_steel',
        E: 'minecraft:ender_pearl'
    })
  event.shaped(Item.of('chunkloaders:basic_chunk_loader',6), [
        ' E ',
        'EOE',
        ' E '
    ],
    {
        O: '#forge:ingots/tungsten_steel',
        E: 'minecraft:ender_pearl'
    })
  event.remove({ id: 'chunkloaders:advanced_chunk_loader' })
  event.shaped(Item.of('chunkloaders:advanced_chunk_loader',1), [
        'IEI',
        'OLO',
        'IEI'
    ],
    {
        I: 'minecraft:blaze_powder',
        L: 'chunkloaders:basic_chunk_loader',
        O: 'minecraft:ender_eye',
        E: '#forge:ingots/gold'
    })
  event.remove({ id: 'chunkloaders:ultimate_chunk_loader' })
  event.shaped(Item.of('chunkloaders:ultimate_chunk_loader',1), [
        'IEI',
        'OLO',
        'IEI'
    ],
    {
        I: 'ae2:sky_dust',
        L: 'chunkloaders:advanced_chunk_loader',
        O: 'gtceu:quantum_eye',
        E: 'minecraft:diamond'
    })
  event.replaceInput({mod:'create_sa', type: 'create:mixing'}, 'create:powdered_obsidian' , '#forge:dusts/obsidian')
  event.replaceInput({mod:'create', type: 'create:sequenced_assembly'}, 'create:powdered_obsidian' , '#forge:dusts/obsidian')
  event.recipes.gtceu.macerator('tree_bark_macerator')
      .itemInputs('1x farmersdelight:tree_bark')
      .itemOutputs('2x gtceu:small_wood_dust')
      .duration(49)
      .EUt(2)

  event.recipes.create.compacting('minecraft:paper', ['2x farmersdelight:tree_bark', Fluid.of('minecraft:water', 500)])
  event.recipes.create.compacting('minecraft:paper', ['4x minecraft:sugar_cane', Fluid.of('minecraft:water', 250)])
  event.remove({id: 'create:pressing/sugar_cane' })
  event.remove({id: 'gtceu:shaped/paper_dust' })
  event.remove({id: 'farmersdelight:paper_from_tree_bark' })
  event.shaped(Item.of('minecraft:paper',1), [
      'BBB',
      ' W '
  ],
  {
      B: 'farmersdelight:tree_bark',
      W: 'minecraft:water_bucket'
  }).replaceIngredient({ item: "minecraft:water_bucket" }, Item.of('minecraft:bucket'))
  event.recipes.create.crushing(['2x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:player_head')
  event.recipes.create.crushing(['3x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:skeleton_skull')
  event.recipes.create.crushing(['3x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:wither_skeleton_skull')
  event.recipes.create.crushing(['2x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:zombie_head')
  event.recipes.create.crushing(['2x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:creeper_head')
  event.recipes.create.crushing(['3x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:piglin_head')
  event.recipes.create.crushing(['7x minecraft:bone_meal', Item.of('minecraft:bone_meal', 1).withChance(0.5)], 'minecraft:dragon_head')
  event.recipes.gtceu.macerator('player_head_macerator')
      .itemInputs('1x minecraft:player_head')
      .itemOutputs('3x minecraft:bone_meal', '2x gtceu:meat_dust')
      .duration(120)
      .EUt(2)
  event.recipes.gtceu.macerator('skeleton_skull_macerator')
      .itemInputs('1x minecraft:skeleton_skull')
      .itemOutputs('5x minecraft:bone_meal')
      .duration(160)
      .EUt(2)
  event.recipes.gtceu.macerator('wither_skeleton_skull_macerator')
      .itemInputs('1x minecraft:wither_skeleton_skull')
      .itemOutputs('4x minecraft:bone_meal', '1x enderio:withering_powder')
      .duration(160)
      .EUt(2)
  event.recipes.gtceu.macerator('zombie_head_macerator')
      .itemInputs('1x minecraft:zombie_head')
      .itemOutputs('3x minecraft:bone_meal', '1x gtceu:meat_dust')
      .duration(120)
      .EUt(2)
  event.recipes.gtceu.macerator('creeper_head_macerator')
      .itemInputs('1x minecraft:creeper_head')
      .itemOutputs('3x minecraft:bone_meal', '2x minecraft:gunpowder')
      .duration(120)
      .EUt(2)
  event.recipes.gtceu.macerator('piglin_head_macerator')
      .itemInputs('1x minecraft:piglin_head')
      .itemOutputs('4x minecraft:bone_meal', '2x gtceu:meat_dust')
      .duration(160)
      .EUt(2)
  event.recipes.gtceu.macerator('dragon_head_macerator')
      .itemInputs('1x minecraft:dragon_head')
      .itemOutputs('8x minecraft:bone_meal', '4x gtceu:dragonium_dust')
      .duration(320)
      .EUt(8)

//stones
  event.recipes.create.compacting('minecraft:deepslate', [Fluid.of('minecraft:lava',100), 'minecraft:cobblestone', '#forge:dusts/obsidian']).heated()
  event.recipes.create.compacting('2x minecraft:tuff', [Fluid.of('minecraft:lava',200), 'minecraft:deepslate', 'minecraft:gravel']).heated()
  event.recipes.create.compacting('minecraft:calcite', [Fluid.of('minecraft:lava',100), 'minecraft:tuff', '2x minecraft:quartz'])
  event.recipes.create.compacting('create:limestone', [Fluid.of('minecraft:lava',100), 'minecraft:gravel', '2x minecraft:bone_meal'])
  event.recipes.create.compacting('minecraft:dripstone_block', [Fluid.of('minecraft:water',100), 'create:limestone', '2x minecraft:clay'])
  event.recipes.create.compacting('create:crimsite', [Fluid.of('minecraft:lava',100), 'minecraft:red_sand', '4x #forge:nuggets/iron'])
  event.recipes.create.compacting('create:veridium', [Fluid.of('minecraft:lava',100), 'minecraft:gravel', '4x #forge:nuggets/copper'])
  event.recipes.create.compacting('create:asurine', [Fluid.of('minecraft:lava',100), 'minecraft:gravel', '3x #forge:nuggets/zinc'])
  event.recipes.create.compacting('create:ochrum', [Fluid.of('minecraft:lava',100), 'minecraft:sand', '2x #forge:nuggets/gold'])
  event.recipes.create.compacting(['create:scorchia', Item.of('minecraft:black_dye').withChance(0.95)], ['#forge:dyes/black', 'create:scoria']).heated()
  event.recipes.create.compacting('minecraft:end_stone', [Fluid.of('create_central_kitchen:dragon_breath',10), 'minecraft:cobblestone', 'minecraft:ender_pearl']).heated()
  event.remove({ type: 'gtceu:rock_breaker' })
  event.recipes.gtceu.rock_breaker('cobblestone_rock_breaker')
    .notConsumable('minecraft:cobblestone')
    .itemOutputs('minecraft:cobblestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(7)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('stone_rock_breaker')
    .notConsumable('minecraft:stone')
    .itemOutputs('minecraft:stone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(30)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('andesite_rock_breaker')
    .notConsumable('minecraft:andesite')
    .itemOutputs('minecraft:andesite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(120)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('diorite_rock_breaker')
    .notConsumable('minecraft:diorite')
    .itemOutputs('minecraft:diorite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(120)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('granite_rock_breaker')
    .notConsumable('minecraft:granite')
    .itemOutputs('minecraft:granite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(120)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('obsidian_rock_breaker')
    .notConsumable('minecraft:obsidian')
    .itemOutputs('minecraft:obsidian')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(200)
    .EUt(30720)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('netherrack_rock_breaker')
    .notConsumable('minecraft:netherrack')
    .itemOutputs('minecraft:netherrack')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(100)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('blackstone_rock_breaker')
    .notConsumable('minecraft:blackstone')
    .itemOutputs('minecraft:blackstone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(120)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('basalt_rock_breaker')
    .notConsumable('minecraft:basalt')
    .itemOutputs('minecraft:basalt')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(120)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('deepslate_rock_breaker')
    .notConsumable('minecraft:deepslate')
    .itemOutputs('minecraft:deepslate')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(140)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('cobbled_deepslate_rock_breaker')
    .notConsumable('minecraft:cobbled_deepslate')
    .itemOutputs('minecraft:cobbled_deepslate')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(120)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('tuff_rock_breaker')
    .notConsumable('minecraft:tuff')
    .itemOutputs('minecraft:tuff')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(100)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('calcite_rock_breaker')
    .notConsumable('minecraft:calcite')
    .itemOutputs('minecraft:calcite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('limestone_rock_breaker')
    .notConsumable('create:limestone')
    .itemOutputs('create:limestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('dripstone_rock_breaker')
    .notConsumable('minecraft:dripstone_block')
    .itemOutputs('minecraft:dripstone_block')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('crimsite_rock_breaker')
    .notConsumable('create:crimsite')
    .itemOutputs('create:crimsite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('veridium_rock_breaker')
    .notConsumable('create:veridium')
    .itemOutputs('create:veridium')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('asurine_rock_breaker')
    .notConsumable('create:asurine')
    .itemOutputs('create:asurine')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('ochrum_rock_breaker')
    .notConsumable('create:ochrum')
    .itemOutputs('create:ochrum')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(80)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('scoria_rock_breaker')
    .notConsumable('create:scoria')
    .itemOutputs('create:scoria')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(120)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('scorchia_rock_breaker')
    .notConsumable('create:scorchia')
    .itemOutputs('create:scorchia')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(120)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('end_stone_rock_breaker')
    .notConsumable('minecraft:end_stone')
    .itemOutputs('minecraft:end_stone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(140)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('myalite_rock_breaker')
    .notConsumable('quark:myalite')
    .itemOutputs('quark:myalite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(140)
    .EUt(480)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('dusky_myalite_rock_breaker')
    .notConsumable('quark:dusky_myalite')
    .itemOutputs('quark:dusky_myalite')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(160)
    .EUt(1920)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('moon_cobblestone_rock_breaker')
    .notConsumable('ad_astra:moon_cobblestone')
    .itemOutputs('ad_astra:moon_cobblestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(160)
    .EUt(7680)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('mars_cobblestone_rock_breaker')
    .notConsumable('ad_astra:mars_cobblestone')
    .itemOutputs('ad_astra:mars_cobblestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(180)
    .EUt(30720)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('venus_cobblestone_rock_breaker')
    .notConsumable('ad_astra:venus_cobblestone')
    .itemOutputs('ad_astra:venus_cobblestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(200)
    .EUt(122880)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('mercury_cobblestone_rock_breaker')
    .notConsumable('ad_astra:mercury_cobblestone')
    .itemOutputs('ad_astra:mercury_cobblestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(200)
    .EUt(122880)
    .addCondition(RockBreakerCondition.INSTANCE)
  event.recipes.gtceu.rock_breaker('glacio_cobblestone_rock_breaker')
    .notConsumable('ad_astra:glacio_cobblestone')
    .itemOutputs('ad_astra:glacio_cobblestone')
    ["addData(java.lang.String,java.lang.String)"]("fluidA", "minecraft:lava")
    ["addData(java.lang.String,java.lang.String)"]("fluidB", "minecraft:water")
    .duration(240)
    .EUt(491520)
    .addCondition(RockBreakerCondition.INSTANCE)

//flux_tweaks
  event.recipes.gtceu.mixer('flux_dust')
    .itemInputs('1x #forge:dusts/yinyang_star_alloy', '2x #forge:dusts/naquadria')
    .itemOutputs('3x fluxnetworks:flux_dust')
    .circuit(3)
    .duration(180)
    .EUt(122880)
  event.remove({ id: 'fluxnetworks:fluxcore' })
  event.recipes.gtceu.assembler('flux_core')
      .itemInputs('4x fluxnetworks:flux_dust', '16x #forge:foils/naquadah_alloy', '1x gtceu:quantum_star')
      .inputFluids(Fluid.of('gtceu:europium', 64))
      .itemOutputs('4x fluxnetworks:flux_core')
      .duration(156)
      .EUt(122880)
  event.remove({ id: 'fluxnetworks:fluxblock' })
  event.recipes.gtceu.assembler('flux_block')
      .itemInputs('4x fluxnetworks:flux_core', '5x fluxnetworks:flux_dust')
      .itemOutputs('1x fluxnetworks:flux_block')
      .duration(122)
      .EUt(122880)
  event.remove({ id: 'fluxnetworks:fluxplug' })
  event.recipes.gtceu.assembler('flux_plug')
      .itemInputs('4x fluxnetworks:flux_core', '1x fluxnetworks:flux_block')
      .itemOutputs('1x fluxnetworks:flux_plug')
      .circuit(1)
      .duration(136)
      .EUt(122880)
  event.remove({ id: 'fluxnetworks:fluxpoint' })
  event.recipes.gtceu.assembler('flux_point')
      .itemInputs('4x fluxnetworks:flux_core', '1x fluxnetworks:flux_block')
      .itemOutputs('1x fluxnetworks:flux_point')
      .circuit(2)
      .duration(136)
      .EUt(122880)
  event.remove({ id: 'fluxnetworks:fluxcontroller' })
  event.recipes.gtceu.assembler('flux_controller')
      .itemInputs('1x fluxnetworks:flux_core', '2x fluxnetworks:flux_dust', '5x fluxnetworks:flux_block', '1x #gtceu:circuits/uv')
      .itemOutputs('1x fluxnetworks:flux_controller')
      .duration(198)
      .EUt(122880)
  event.remove({ id: 'fluxnetworks:fluxconfigurator' })
  event.recipes.gtceu.assembler('flux_configurator')
      .itemInputs('2x #forge:rods/naquadah_alloy', '2x fluxnetworks:flux_dust', '1x gtceu:quantum_star')
      .itemOutputs('1x fluxnetworks:flux_configurator')
      .duration(64)
      .EUt(122880)


/*
  event.recipes.ars_nouveau.imbuement(
        "ars_nouveau:source_gem",
        "minecraft:tnt",
        1000,
        [
            "minecraft:gunpowder" 
        ]
    )
  event.shaped(Item.of('minecraft:dragon_egg',2), [
        'BEB',
        'ADT',
        'BHB'
    ],
    {
        B: 'minecraft:dragon_breath',
        E: 'bosses_of_mass_destruction:blazing_eye',
        T: 'bosses_of_mass_destruction:void_thorn',
        H: 'bosses_of_mass_destruction:obsidian_heart',
        A: 'bosses_of_mass_destruction:ancient_anima',
        D: 'minecraft:dragon_egg'
    })

  //drawer
  event.replaceInput({mod:'extended_drawers', type: 'crafting_shaped'}, '#minecraft:logs' , 'create:andesite_alloy')
  event.remove({ id: 'extended_drawers:access_point' })
  event.shaped(Item.of('extended_drawers:access_point',1), [
        'SRS',
        'RDR',
        'SRS'
    ],
    {
        S: 'gtceu:steel_ingot',
        R: 'gtceu:red_alloy_ingot',
        D: '#extended_drawers:drawers'
    })
  event.remove({ id: 'extended_drawers:compacting_drawer' })
  event.shaped(Item.of('extended_drawers:compacting_drawer',1), [
        'SPS',
        'CIC',
        'SPS'
    ],
    {
        S: 'gtceu:steel_ingot',
        P: 'gtceu:lv_electric_piston',
        C: 'minecraft:chest',
        I: 'minecraft:iron_block'
    })
  event.remove({ id: 'extended_drawers:shadow_drawer' })
  event.shaped(Item.of('extended_drawers:shadow_drawer',1), [
        'TET',
        'ECE',
        'TET'
    ],
    {
        T: 'betterend:thallasium_ingot',
        E: 'minecraft:end_stone_bricks',
        C: 'minecraft:end_crystal'
    })
*/
  //ad_astra_ban
  event.remove({ id: 'ad_astra:desh_cable' })
  event.remove({ id: 'ad_astra:steel_cable' })
  event.remove({ id: 'ad_astra:cable_duct' })
  event.remove({ id: 'ad_astra:desh_fluid_pipe' })
  event.remove({ id: 'ad_astra:ostrum_fluid_pipe' })
  event.remove({ id: 'ad_astra:fluid_pipe_duct' })
  event.remove({ id: 'ad_astra:coal_generator' })
  event.remove({ id: 'ad_astra:compressor' })
  event.remove({ id: 'ad_astra:etrionic_blast_furnace' })
  event.remove({ id: 'ad_astra:fuel_refinery' })
  event.remove({ id: 'ad_astra:oxygen_loading/oxygen_from_oxygen_loading_water' })
  event.remove({ id: 'ad_astra:solar_panel' })
  event.remove({ id: 'ad_astra:water_pump' })
  event.remove({ id: 'ad_astra:cryo_freezer' })
})
