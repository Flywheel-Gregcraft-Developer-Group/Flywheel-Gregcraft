ServerEvents.recipes(event => {
  console.log('Ready to modify tool and armory recipes.')
  //cgm_gun
  event.remove({ id: 'cgm:workbench' })
  event.shaped(Item.of('cgm:workbench',1), [
        'SSS',
        'IGI',
        'IGI'
    ],
    {
        S: '#forge:double_plates/stainless_steel',
        I: '#forge:ingots/stainless_steel',
        G: 'minecraft:gunpowder'
    })
  event.remove({ id: 'cgm:pistol' })
  event.remove({ id: 'cgm:shotgun' })
  event.remove({ id: 'cgm:rifle' })
  event.remove({ id: 'cgm:mini_gun' })
  event.remove({ id: 'cgm:assault_rifle' })
  event.remove({ id: 'cgm:machine_pistol' })
  event.remove({ id: 'cgm:heavy_rifle' })
  event.remove({ id: 'cgm:basic_bullet' })
  event.remove({ id: 'cgm:advanced_bullet' })
  event.remove({ id: 'cgm:shell' })
  event.remove({ id: 'additionalguns:bullet_heavy' })
  event.remove({ id: 'additionalguns:bullet_long' })
  event.remove({ id: 'additionalguns:bullet_medium' })
  event.remove({ id: 'additionalguns:bullet_small' })
  event.remove({ id: 'additionalguns:bullet_short' })
  event.remove({ id: 'additionalguns:bullet_special' })
  event.recipes.gtceu.assembler('gun_parts_t1')
      .itemInputs('1x #forge:ingots/vanadium_steel', '4x #forge:plates/stainless_steel', '4x #forge:screws/stainless_steel', '2x createchromaticreturn:refined_mechanism')
      .itemOutputs('4x kubejs:gunium')
      .inputFluids(Fluid.of('gtceu:polyethylene', 576))
      .duration(320)
      .EUt(480)
  event.recipes.gtceu.assembler('gun_parts_t2')
      .itemInputs('1x #forge:ingots/tungsten_steel', '4x #forge:plates/niobium_titanium', '4x #forge:screws/niobium_titanium', '2x createchromaticreturn:refined_mechanism')
      .itemOutputs('8x kubejs:gunium')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 576))
      .duration(240)
      .EUt(1920)
  event.recipes.gtceu.assembler('gun_parts_t3')
      .itemInputs('1x #forge:ingots/hsss', '4x #forge:plates/rhodium_plated_palladium', '4x #forge:screws/rhodium_plated_palladium', '2x createchromaticreturn:refined_mechanism')
      .itemOutputs('12x kubejs:gunium')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 576))
      .duration(180)
      .EUt(7680)
  event.recipes.gtceu.assembler('gun_parts_t4')
      .itemInputs('1x #forge:ingots/duranium', '4x #forge:plates/naquadah_alloy', '4x #forge:screws/naquadah_alloy', '2x createchromaticreturn:refined_mechanism')
      .itemOutputs('16x kubejs:gunium')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 288))
      .duration(120)
      .EUt(30720)

  //armors
  event.remove({ id: 'create_sa:copper_helmet_recipe' })
  event.remove({ id: 'create_sa:copper_chestplate_recipe' })
  event.remove({ id: 'create_sa:copper_leggings_recipe' })
  event.remove({ id: 'create_sa:copper_boots_recipe' })
  event.remove({ id: 'create:crafting/appliances/copper_diving_helmet' })
  event.remove({ id: 'create:crafting/appliances/copper_diving_boots' })
  event.shaped(Item.of('create_sa:copper_helmet',1), [
        'PPP',
        'PHP'
    ],
    {
        P: '#forge:plates/copper',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:copper_chestplate',1), [
        'PHP',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/copper',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:copper_leggings',1), [
        'PPP',
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/copper',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:copper_boots',1), [
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/copper',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create:copper_diving_helmet',1), [
        'H',
        'G'
    ],
    {
        H: 'create_sa:copper_helmet',
        G: '#forge:glass'
    })
  event.shaped(Item.of('create:copper_diving_boots',1), [
        'ABA'
    ],
    {
        B: 'create_sa:copper_boots',
        A: '#forge:ingots/andesite_alloy'
    })

  event.remove({ id: 'create_sa:zinc_helmet_recipe' })
  event.remove({ id: 'create_sa:zinc_chestplate_recipe' })
  event.remove({ id: 'create_sa:zinc_leggings_recipe' })
  event.remove({ id: 'create_sa:zinc_boots_recipe' })
  event.shaped(Item.of('create_sa:zinc_helmet',1), [
        'PPP',
        'PHP'
    ],
    {
        P: '#forge:plates/zinc',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:zinc_chestplate',1), [
        'PHP',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/zinc',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:zinc_leggings',1), [
        'PPP',
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/zinc',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:zinc_boots',1), [
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/zinc',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')

  event.remove({ id: 'create_sa:brass_helmet_recipe' })
  event.remove({ id: 'create_sa:brass_chestplate_recipe' })
  event.remove({ id: 'create_sa:brass_leggings_recipe' })
  event.remove({ id: 'create_sa:brass_boots_recipe' })
  event.shaped(Item.of('create_sa:brass_helmet',1), [
        'PPP',
        'PHP'
    ],
    {
        P: '#forge:plates/brass',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:brass_chestplate',1), [
        'PHP',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/brass',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:brass_leggings',1), [
        'PPP',
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/brass',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('create_sa:brass_boots',1), [
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/brass',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  
  event.shaped(Item.of('kubejs:bronze_helmet',1), [
        'PPP',
        'PHP'
    ],
    {
        P: '#forge:plates/bronze',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:bronze_chestplate',1), [
        'PHP',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/bronze',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:bronze_leggings',1), [
        'PPP',
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/bronze',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:bronze_boots',1), [
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/bronze',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:wrought_iron_helmet',1), [
        'PPP',
        'PHP'
    ],
    {
        P: '#forge:plates/wrought_iron',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:wrought_iron_chestplate',1), [
        'PHP',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/wrought_iron',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:wrought_iron_leggings',1), [
        'PPP',
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/wrought_iron',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.shaped(Item.of('kubejs:wrought_iron_boots',1), [
        'PHP',
        'P P'
    ],
    {
        P: '#forge:plates/wrought_iron',
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  event.recipes.gtceu.assembler('steel_helmet')
      .itemInputs('5x #forge:plates/steel')
      .itemOutputs('kubejs:steel_helmet')
      .inputFluids(Fluid.of('gtceu:polyethylene', 180))
      .duration(200)
      .EUt(30)
      .circuit(11)
  event.recipes.gtceu.assembler('steel_chestplate')
      .itemInputs('8x #forge:plates/steel')
      .itemOutputs('kubejs:steel_chestplate')
      .inputFluids(Fluid.of('gtceu:polyethylene', 288))
      .duration(320)
      .EUt(30)
      .circuit(12)
  event.recipes.gtceu.assembler('steel_leggings')
      .itemInputs('7x #forge:plates/steel')
      .itemOutputs('kubejs:steel_leggings')
      .inputFluids(Fluid.of('gtceu:polyethylene', 252))
      .duration(280)
      .EUt(30)
      .circuit(13)
  event.recipes.gtceu.assembler('steel_boots')
      .itemInputs('4x #forge:plates/steel')
      .itemOutputs('kubejs:steel_boots')
      .inputFluids(Fluid.of('gtceu:polyethylene', 144))
      .duration(160)
      .EUt(30)
      .circuit(14)
  /*
  event.shaped(Item.of('kubejs:aluminium_helmet',1), [
        'PPP',
        'P P'
    ],
    {
        P: '#forge:plates/aluminium'
    })
  event.shaped(Item.of('kubejs:aluminium_chestplate',1), [
        'P P',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/aluminium'
    })
  event.shaped(Item.of('kubejs:aluminium_leggings',1), [
        'PPP',
        'P P',
        'P P'
    ],
    {
        P: '#forge:plates/aluminium'
    })
  event.shaped(Item.of('kubejs:aluminium_boots',1), [
        'P P',
        'P P'
    ],
    {
        P: '#forge:plates/aluminium'
    })
  */
  event.recipes.gtceu.assembler('stainless_steel_helmet')
      .itemInputs('5x #forge:plates/stainless_steel', '2x #forge:plates/aluminium')
      .itemOutputs('kubejs:stainless_steel_helmet')
      .inputFluids(Fluid.of('gtceu:polyethylene', 360))
      .duration(300)
      .EUt(480)
      .circuit(11)
  event.recipes.gtceu.assembler('stainless_steel_chestplate')
      .itemInputs('8x #forge:plates/stainless_steel', '4x #forge:plates/aluminium')
      .itemOutputs('kubejs:stainless_steel_chestplate')
      .inputFluids(Fluid.of('gtceu:polyethylene', 576))
      .duration(480)
      .EUt(480)
      .circuit(12)
  event.recipes.gtceu.assembler('stainless_steel_leggings')
      .itemInputs('7x #forge:plates/stainless_steel', '4x #forge:plates/aluminium')
      .itemOutputs('kubejs:stainless_steel_leggings')
      .inputFluids(Fluid.of('gtceu:polyethylene', 504))
      .duration(420)
      .EUt(480)
      .circuit(13)
  event.recipes.gtceu.assembler('stainless_steel_boots')
      .itemInputs('4x #forge:plates/stainless_steel', '2x #forge:plates/aluminium')
      .itemOutputs('kubejs:stainless_steel_boots')
      .inputFluids(Fluid.of('gtceu:polyethylene', 288))
      .duration(240)
      .EUt(480)
      .circuit(14)
  /*
  event.shaped(Item.of('kubejs:titanium_helmet',1), [
        'PPP',
        'P P'
    ],
    {
        P: '#forge:plates/titanium'
    })
  event.shaped(Item.of('kubejs:titanium_chestplate',1), [
        'P P',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/titanium'
    })
  event.shaped(Item.of('kubejs:titanium_leggings',1), [
        'PPP',
        'P P',
        'P P'
    ],
    {
        P: '#forge:plates/titanium'
    })
  event.shaped(Item.of('kubejs:titanium_boots',1), [
        'P P',
        'P P'
    ],
    {
        P: '#forge:plates/titanium'
    })
  */
  event.recipes.gtceu.assembler('tungsten_steel_helmet')
      .itemInputs('5x #forge:plates/tungsten_steel', '2x #forge:plates/titanium')
      .itemOutputs('kubejs:tungsten_steel_helmet')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 360))
      .duration(400)
      .EUt(7680)
      .circuit(11)
  event.recipes.gtceu.assembler('tungsten_steel_chestplate')
      .itemInputs('8x #forge:plates/tungsten_steel', '4x #forge:plates/titanium')
      .itemOutputs('kubejs:tungsten_steel_chestplate')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 576))
      .duration(640)
      .EUt(7680)
      .circuit(12)
  event.recipes.gtceu.assembler('tungsten_steel_leggings')
      .itemInputs('7x #forge:plates/tungsten_steel', '4x #forge:plates/titanium')
      .itemOutputs('kubejs:tungsten_steel_leggings')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 504))
      .duration(560)
      .EUt(7680)
      .circuit(13)
  event.recipes.gtceu.assembler('tungsten_steel_boots')
      .itemInputs('4x #forge:plates/tungsten_steel', '2x #forge:plates/titanium')
      .itemOutputs('kubejs:tungsten_steel_boots')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
      .duration(320)
      .EUt(7680)
      .circuit(14)
  /*
  event.shaped(Item.of('kubejs:hsse_helmet',1), [
        'PPP',
        'P P'
    ],
    {
        P: '#forge:plates/hsse'
    })
  event.shaped(Item.of('kubejs:hsse_chestplate',1), [
        'P P',
        'PPP',
        'PPP'
    ],
    {
        P: '#forge:plates/hsse'
    })
  event.shaped(Item.of('kubejs:hsse_leggings',1), [
        'PPP',
        'P P',
        'P P'
    ],
    {
        P: '#forge:plates/hsse'
    })
  event.shaped(Item.of('kubejs:hsse_boots',1), [
        'P P',
        'P P'
    ],
    {
        P: '#forge:plates/hsse'
    })
  */
  event.recipes.gtceu.assembler('naquadah_alloy_helmet')
      .itemInputs('5x #forge:plates/naquadah_alloy', '2x #forge:plates/ruridit')
      .itemOutputs('kubejs:naquadah_alloy_helmet')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 360))
      .duration(600)
      .EUt(122880)
      .circuit(11)
  event.recipes.gtceu.assembler('naquadah_alloy_chestplate')
      .itemInputs('8x #forge:plates/naquadah_alloy', '4x #forge:plates/ruridit')
      .itemOutputs('kubejs:naquadah_alloy_chestplate')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 576))
      .duration(960)
      .EUt(122880)
      .circuit(12)
  event.recipes.gtceu.assembler('naquadah_alloy_leggings')
      .itemInputs('7x #forge:plates/naquadah_alloy', '4x #forge:plates/ruridit')
      .itemOutputs('kubejs:naquadah_alloy_leggings')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 504))
      .duration(840)
      .EUt(122880)
      .circuit(13)
  event.recipes.gtceu.assembler('naquadah_alloy_boots')
      .itemInputs('4x #forge:plates/naquadah_alloy', '2x #forge:plates/ruridit')
      .itemOutputs('kubejs:naquadah_alloy_boots')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 288))
      .duration(480)
      .EUt(122880)
      .circuit(14)
  event.recipes.gtceu.assembler('neutronium_helmet')
      .itemInputs('5x #forge:plates/neutronium', '2x #forge:plates/tritanium')
      .itemOutputs('kubejs:neutronium_helmet')
      .inputFluids(Fluid.of('gtceu:bio_sticker', 360))
      .duration(1200)
      .EUt(1966080)
      .circuit(11)
  event.recipes.gtceu.assembler('neutronium_chestplate')
      .itemInputs('8x #forge:plates/neutronium', '4x #forge:plates/tritanium')
      .itemOutputs('kubejs:neutronium_chestplate')
      .inputFluids(Fluid.of('gtceu:bio_sticker', 576))
      .duration(1920)
      .EUt(1966080)
      .circuit(12)
  event.recipes.gtceu.assembler('neutronium_leggings')
      .itemInputs('7x #forge:plates/neutronium', '4x #forge:plates/tritanium')
      .itemOutputs('kubejs:neutronium_leggings')
      .inputFluids(Fluid.of('gtceu:bio_sticker', 504))
      .duration(1680)
      .EUt(1966080)
      .circuit(13)
  event.recipes.gtceu.assembler('neutronium_boots')
      .itemInputs('4x #forge:plates/neutronium', '2x #forge:plates/tritanium')
      .itemOutputs('kubejs:neutronium_boots')
      .inputFluids(Fluid.of('gtceu:bio_sticker', 288))
      .duration(960)
      .EUt(1966080)
      .circuit(14)

  //chromatic_armors
  event.shaped(Item.of('kubejs:chromatic_upgrade_smithing_template',1), [
        'CMC',
        'CSC',
        'CCC'
    ],
    {
        C: 'createchromaticreturn:chromatic_compound',
        S: 'ars_nouveau:source_gem_block',
        M: 'minecraft:netherite_upgrade_smithing_template'
    })
  event.smithing(
      'kubejs:chromatic_netherite_helmet',
      'kubejs:chromatic_upgrade_smithing_template',
      'minecraft:netherite_helmet',
      'createchromaticreturn:chromatic_compound'
  )
  event.smithing(
      'kubejs:chromatic_netherite_chestplate',
      'kubejs:chromatic_upgrade_smithing_template',
      'minecraft:netherite_chestplate',
      'createchromaticreturn:chromatic_compound'
  )
  event.smithing(
      'kubejs:chromatic_netherite_leggings',
      'kubejs:chromatic_upgrade_smithing_template',
      'minecraft:netherite_leggings',
      'createchromaticreturn:chromatic_compound'
  )
  event.smithing(
      'kubejs:chromatic_netherite_boots',
      'kubejs:chromatic_upgrade_smithing_template',
      'minecraft:netherite_boots',
      'createchromaticreturn:chromatic_compound'
  )
  event.recipes.gtceu.assembler('yinyang_helmet')
      .itemInputs('1x kubejs:chromatic_netherite_helmet')
      .itemOutputs('kubejs:yinyang_helmet')
      .inputFluids(Fluid.of('gtceu:yinyang', 720))
      .duration(1240)
      .EUt(7680)
      .circuit(11)
  event.recipes.gtceu.assembler('yinyang_chestplate')
      .itemInputs('1x kubejs:chromatic_netherite_chestplate')
      .itemOutputs('kubejs:yinyang_chestplate')
      .inputFluids(Fluid.of('gtceu:yinyang', 1152))
      .duration(1920)
      .EUt(7680)
      .circuit(12)
  event.recipes.gtceu.assembler('yinyang_leggings')
      .itemInputs('1x kubejs:chromatic_netherite_leggings')
      .itemOutputs('kubejs:yinyang_leggings')
      .inputFluids(Fluid.of('gtceu:yinyang', 1008))
      .duration(1680)
      .EUt(7680)
      .circuit(13)
  event.recipes.gtceu.assembler('yinyang_boots')
      .itemInputs('1x kubejs:chromatic_netherite_boots')
      .itemOutputs('kubejs:yinyang_boots')
      .inputFluids(Fluid.of('gtceu:yinyang', 576))
      .duration(960)
      .EUt(7680)
      .circuit(14)
  event.recipes.gtceu.assembler('reinforced_yinyang_helmet')
      .itemInputs('1x kubejs:yinyang_helmet')
      .itemOutputs('kubejs:reinforced_yinyang_helmet')
      .inputFluids(Fluid.of('gtceu:reinforced_yinyang', 720))
      .duration(1550)
      .EUt(122880)
      .circuit(11)
  event.recipes.gtceu.assembler('reinforced_yinyang_chestplate')
      .itemInputs('1x kubejs:yinyang_chestplate')
      .itemOutputs('kubejs:reinforced_yinyang_chestplate')
      .inputFluids(Fluid.of('gtceu:reinforced_yinyang', 1152))
      .duration(2480)
      .EUt(122880)
      .circuit(12)
  event.recipes.gtceu.assembler('reinforced_yinyang_leggings')
      .itemInputs('1x kubejs:yinyang_leggings')
      .itemOutputs('kubejs:reinforced_yinyang_leggings')
      .inputFluids(Fluid.of('gtceu:reinforced_yinyang', 1008))
      .duration(2170)
      .EUt(122880)
      .circuit(13)
  event.recipes.gtceu.assembler('reinforced_yinyang_boots')
      .itemInputs('1x kubejs:yinyang_boots')
      .itemOutputs('kubejs:reinforced_yinyang_boots')
      .inputFluids(Fluid.of('gtceu:reinforced_yinyang', 576))
      .duration(1240)
      .EUt(122880)
      .circuit(14)
  event.recipes.gtceu.assembler('space_neutronium_helmet')
      .itemInputs('1x kubejs:reinforced_yinyang_helmet')
      .itemOutputs('kubejs:space_neutronium_helmet')
      .inputFluids(Fluid.of('gtceu:space_neutronium', 720))
      .duration(2010)
      .EUt(1966080)
      .circuit(11)
  event.recipes.gtceu.assembler('space_neutronium_chestplate')
      .itemInputs('1x kubejs:reinforced_yinyang_chestplate')
      .itemOutputs('kubejs:space_neutronium_chestplate')
      .inputFluids(Fluid.of('gtceu:space_neutronium', 1152))
      .duration(3216)
      .EUt(1966080)
      .circuit(12)
  event.recipes.gtceu.assembler('space_neutronium_leggings')
      .itemInputs('1x kubejs:reinforced_yinyang_leggings')
      .itemOutputs('kubejs:space_neutronium_leggings')
      .inputFluids(Fluid.of('gtceu:space_neutronium', 1008))
      .duration(2814)
      .EUt(1966080)
      .circuit(13)
  event.recipes.gtceu.assembler('space_neutronium_boots')
      .itemInputs('1x kubejs:reinforced_yinyang_boots')
      .itemOutputs('kubejs:space_neutronium_boots')
      .inputFluids(Fluid.of('gtceu:space_neutronium', 576))
      .duration(1608)
      .EUt(1966080)
      .circuit(14)

  /*
  event.remove({ id: 'cgm:pistol' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 14,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:pistol' }
  })
  event.remove({ id: 'cgm:shotgun' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 24,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:shotgun' }
  })
  event.remove({ id: 'cgm:rifle' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 24,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:rifle' }
  })
  event.remove({ id: 'cgm:mini_gun' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 38,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:mini_gun' }
  })
  event.remove({ id: 'cgm:assault_rifle' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 28,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:assault_rifle' }
  })
  event.remove({ id: 'cgm:machine_pistol' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 20,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:machine_pistol' }
  })
  event.remove({ id: 'cgm:heavy_rifle' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 36,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:heavy_rifle' }
  })
  event.remove({ id: 'cgm:basic_bullet' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:ammorum'
      },
      {
        count: 1,
        tag: 'forge:gunpowder'
      }
    ],
    result: { item: 'cgm:basic_bullet', count: 64 }
  })
  event.remove({ id: 'cgm:advanced_bullet' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:ammorum'
      },
      {
        count: 1,
        tag: 'forge:gunpowder'
      }
    ],
    result: { item: 'cgm:advanced_bullet', count: 32 }
  })
  event.remove({ id: 'cgm:shell' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:ammorum'
      },
      {
        count: 1,
        tag: 'forge:nuggets/gold'
      },
      {
        count: 1,
        tag: 'forge:gunpowder'
      }
    ],
    result: { item: 'cgm:shell', count: 48 }
  })
  */
  event.remove({ id: 'cgm:grenade_launcher' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 32,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'cgm:grenade_launcher' }
  })
  event.remove({ id: 'cgm:bazooka' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 44,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'gtceu:shadow_steel_ingot'
      }
    ],
    result: { item: 'cgm:bazooka' }
  })
  event.remove({ id: 'cgm:missile' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:ammorum'
      },
      {
        count: 4,
        tag: 'forge:gunpowder'
      }
    ],
    result: { item: 'cgm:missile' }
  })
  */
  event.remove({ id: 'cgm:grenade' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        tag: 'forge:nuggets/stainless_steel'
      },
      {
        count: 4,
        tag: 'forge:gunpowder'
      }
    ],
    result: { item: 'cgm:grenade', count: 2 }
  })
  */
  event.remove({ id: 'cgm:stun_grenade' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        tag: 'forge:nuggets/stainless_steel'
      },
      {
        count: 2,
        tag: 'forge:gunpowder'
      },
      {
        count: 4,
        tag: 'forge:dusts/glowstone'
      }
    ],
    result: { item: 'cgm:stun_grenade', count: 2 }
  })
  */
  event.remove({ id: 'cgm:short_scope' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 2,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:nuggets/borosilicate_glass'
      }
    ],
    result: { item: 'cgm:short_scope' }
  })
  event.remove({ id: 'cgm:medium_scope' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      },
      {
        count: 6,
        tag: 'forge:nuggets/borosilicate_glass'
      }
    ],
    result: { item: 'cgm:medium_scope' }
  })
  event.remove({ id: 'cgm:long_scope' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 6,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:ingots/borosilicate_glass'
      }
    ],
    result: { item: 'cgm:long_scope' }
  })
  event.remove({ id: 'cgm:silencer' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:sponge'
      }
    ],
    result: { item: 'cgm:silencer' }
  })
  event.remove({ id: 'cgm:light_stock' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 6,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'minecraft:wool'
      }
    ],
    result: { item: 'cgm:light_stock' }
  })
  event.remove({ id: 'cgm:tactical_stock' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 8,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'minecraft:wool'
      }
    ],
    result: { item: 'cgm:tactical_stock' }
  })
  event.remove({ id: 'cgm:weighted_stock' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 12,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'minecraft:wool'
      }
    ],
    result: { item: 'cgm:weighted_stock' }
  })
  event.remove({ id: 'cgm:light_grip' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'minecraft:wool'
      }
    ],
    result: { item: 'cgm:light_grip' }
  })
  event.remove({ id: 'cgm:specialised_grip' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 8,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'minecraft:wool'
      }
    ],
    result: { item: 'cgm:specialised_grip' }
  })

  //additional_guns
  event.remove({ id: 'additionalguns:mammoth' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 30,
        item: 'kubejs:gunium'
      },
      {
        count: 20,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:mammoth' }
  })
  event.remove({ id: 'additionalguns:vector' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 12,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:vector' }
  })
  event.remove({ id: 'additionalguns:9a91' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 20,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:sponge'
      }
    ],
    result: { item: 'additionalguns:9a91' }
  })
  event.remove({ id: 'additionalguns:ace_of_spades' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 28,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:dyes/white'
      },
      {
        count: 4,
        tag: 'forge:dyes/black'
      }
    ],
    result: { item: 'additionalguns:ace_of_spades' }
  })
  event.remove({ id: 'additionalguns:g11' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 65,
        item: 'kubejs:gunium'
      },
      {
        count: 10,
        tag: 'minecraft:wool'
      }
    ],
    result: { item: 'additionalguns:g11' }
  })
  event.remove({ id: 'additionalguns:vintorez' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 45,
        item: 'kubejs:gunium'
      },
      {
        count: 3,
        tag: 'forge:treated_wood'
      },
      {
        count: 1,
        item: 'minecraft:sponge'
      }
    ],
    result: { item: 'additionalguns:vintorez' }
  })
  event.remove({ id: 'additionalguns:val' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 45,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:sponge'
      }
    ],
    result: { item: 'additionalguns:val' }
  })
  event.remove({ id: 'additionalguns:aug' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 32,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:aug' }
  })
  event.remove({ id: 'additionalguns:fn2000' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 25,
        item: 'kubejs:gunium'
      },
      {
        count: 5,
        tag: 'forge:dyes/white'
      }
    ],
    result: { item: 'additionalguns:fn2000' }
  })
  event.remove({ id: 'additionalguns:pp_19' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 13,
        item: 'kubejs:gunium'
      },
      {
        count: 5,
        item: 'minecraft:black_wool'
      }
    ],
    result: { item: 'additionalguns:pp_19' }
  })
  event.remove({ id: 'additionalguns:mat_49' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 28,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:mat_49' }
  })
  event.remove({ id: 'additionalguns:schwarzlose' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 10,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:schwarzlose' }
  })
  event.remove({ id: 'additionalguns:ots_03' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 45,
        item: 'kubejs:gunium'
      },
      {
        count: 3,
        item: 'minecraft:gray_wool'
      }
    ],
    result: { item: 'additionalguns:ots_03' }
  })
  event.remove({ id: 'additionalguns:ak105' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 80,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        item: 'minecraft:black_wool'
      }
    ],
    result: { item: 'additionalguns:ak105' }
  })
  event.remove({ id: 'additionalguns:ravens_claw' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 65,
        item: 'kubejs:gunium'
      },
      {
        count: 2,
        item: 'minecraft:black_wool'
      }
    ],
    result: { item: 'additionalguns:ravens_claw' }
  })
  event.remove({ id: 'additionalguns:banshee' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 20,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:sponge'
      }
    ],
    result: { item: 'additionalguns:banshee' }
  })
  event.remove({ id: 'additionalguns:m4a1s' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 32,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:sponge'
      }
    ],
    result: { item: 'additionalguns:m4a1s' }
  })
  event.remove({ id: 'additionalguns:m4a4' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 34,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:m4a4' }
  })
  event.remove({ id: 'additionalguns:glock18' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 16,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:glock18' }
  })
  event.remove({ id: 'additionalguns:akm' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 30,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:akm' }
  })
  event.remove({ id: 'additionalguns:akm_custom' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 30,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:dyes/black'
      }
    ],
    result: { item: 'additionalguns:akm_custom' }
  })
  event.remove({ id: 'additionalguns:ssg08' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 30,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:ssg08' }
  })
  event.remove({ id: 'additionalguns:desert_eagle' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 18,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:desert_eagle' }
  })
  event.remove({ id: 'additionalguns:mac10' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 24,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:mac10' }
  })
  event.remove({ id: 'additionalguns:awm' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 60,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:awm' }
  })
  event.remove({ id: 'additionalguns:ak74' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 32,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:ak74' }
  })
  event.remove({ id: 'additionalguns:ak74m' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 32,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:dyes/black'
      }
    ],
    result: { item: 'additionalguns:ak74m' }
  })
  event.remove({ id: 'additionalguns:aks74u' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 34,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:aks74u' }
  })
  event.remove({ id: 'additionalguns:m16a2' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 38,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:m16a2' }
  })
  event.remove({ id: 'additionalguns:usp' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 16,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:usp' }
  })
  event.remove({ id: 'additionalguns:m1014' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 22,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:m1014' }
  })
  event.remove({ id: 'additionalguns:mp7a2' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 26,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:mp7a2' }
  })
  event.remove({ id: 'additionalguns:ak12' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 36,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:ak12' }
  })
  event.remove({ id: 'additionalguns:ak15' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 36,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:ak15' }
  })
  event.remove({ id: 'additionalguns:ak104' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 30,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:dyes/black'
      }
    ],
    result: { item: 'additionalguns:ak104' }
  })
  event.remove({ id: 'additionalguns:p250' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 16,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:p250' }
  })
  event.remove({ id: 'additionalguns:m1911' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 17,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:m1911' }
  })
  event.remove({ id: 'additionalguns:magnum' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 19,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:magnum' }
  })
  event.remove({ id: 'additionalguns:scar' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 48,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:dyes/black'
      }
    ],
    result: { item: 'additionalguns:scar' }
  })
  event.remove({ id: 'additionalguns:over_under' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 36,
        item: 'kubejs:gunium'
      },
      {
        count: 12,
        tag: 'forge:nuggets/gold'
      },
      {
        count: 24,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:over_under' }
  })
  event.remove({ id: 'additionalguns:custom_mac' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 24,
        item: 'kubejs:gunium'
      },
      {
        count: 6,
        tag: 'forge:dyes/gray'
      }
    ],
    result: { item: 'additionalguns:custom_mac' }
  })
  event.remove({ id: 'additionalguns:usas12' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 56,
        item: 'kubejs:gunium'
      },
      {
        count: 4,
        tag: 'forge:dyes/black'
      },
      {
        count: 2,
        tag: 'forge:dyes/gray'
      }
    ],
    result: { item: 'additionalguns:usas12' }
  })
  event.remove({ id: 'additionalguns:python' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 18,
        item: 'kubejs:gunium'
      },
      {
        count: 6,
        tag: 'forge:nuggets/gold'
      },
      {
        count: 12,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:python' }
  })
  event.remove({ id: 'additionalguns:unica' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 20,
        item: 'kubejs:gunium'
      },
      {
        count: 6,
        tag: 'forge:nuggets/gold'
      },
      {
        count: 12,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:unica' }
  })
  event.remove({ id: 'additionalguns:mp7' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 32,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:mp7' }
  })
  event.remove({ id: 'additionalguns:holo_scope' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 6,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:ingots/borosilicate_glass'
      }
    ],
    result: { item: 'additionalguns:holo_scope' }
  })
  event.remove({ id: 'additionalguns:zerkalo_scope' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 8,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:ingots/borosilicate_glass'
      }
    ],
    result: { item: 'additionalguns:zerkalo_scope' }
  })
  event.remove({ id: 'additionalguns:kobra' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:ingots/borosilicate_glass'
      }
    ],
    result: { item: 'additionalguns:kobra' }
  })
  event.remove({ id: 'additionalguns:basic_stock' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 6,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:gray_wool'
      }
    ],
    result: { item: 'additionalguns:basic_stock' }
  })
  event.remove({ id: 'additionalguns:vintorez_stock' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        tag: 'forge:treated_wood'
      }
    ],
    result: { item: 'additionalguns:vintorez_stock' }
  })
  event.remove({ id: 'additionalguns:muzzle_brake' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:muzzle_brake' }
  })
  event.remove({ id: 'additionalguns:tactical_silencer' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 8,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:tactical_silencer' }
  })
  event.remove({ id: 'additionalguns:sniper_muzzle_brake' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 4,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:sniper_muzzle_brake' }
  })
  event.remove({ id: 'additionalguns:tactical_muzzle_brake' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 6,
        item: 'kubejs:gunium'
      }
    ],
    result: { item: 'additionalguns:tactical_muzzle_brake' }
  })
  event.remove({ id: 'additionalguns:angled_grip' })
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 5,
        item: 'kubejs:gunium'
      },
      {
        count: 1,
        item: 'minecraft:gray_wool'
      }
    ],
    result: { item: 'additionalguns:angled_grip' }
  })
  event.remove({ id: 'additionalguns:casing_special' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        item: 'kubejs:ammorum'
      }
    ],
    result: { item: 'additionalguns:casing_special', count: 4 }
  })
  */
  event.remove({ id: 'additionalguns:casing_small' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        item: 'kubejs:ammorum'
      }
    ],
    result: { item: 'additionalguns:casing_small', count: 16 }
  })
  */
  event.remove({ id: 'additionalguns:casing_short' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        item: 'kubejs:ammorum'
      }
    ],
    result: { item: 'additionalguns:casing_short', count: 16 }
  })
  */
  event.remove({ id: 'additionalguns:casing_medium' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        item: 'kubejs:ammorum'
      }
    ],
    result: { item: 'additionalguns:casing_medium', count: 8 }
  })
  */
  event.remove({ id: 'additionalguns:casing_long' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        item: 'kubejs:ammorum'
      }
    ],
    result: { item: 'additionalguns:casing_long', count: 4 }
  })
  */
  event.remove({ id: 'additionalguns:casing_heavy' })
  /*
  event.custom({
    type: 'cgm:workbench',
    materials: [
      {
        count: 1,
        item: 'kubejs:ammorum'
      }
    ],
    result: { item: 'additionalguns:casing_heavy', count: 4 }
  })
  */
  //ae2_matter_cannon
  /*
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      item: 'createbigcannons:nethersteel_nugget'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          item: 'createbigcannons:nethersteel_nugget'
        }
      }
    ],
    weight: 349.12
  })
  */
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/neutronium'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/neutronium'
        }
      }
    ],
    weight: 2857.14
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/cast_iron'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/cast_iron'
        }
      }
    ],
    weight: 85.95
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/wrought_iron'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/cast_iron'
        }
      }
    ],
    weight: 79.64
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/steel'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/steel'
        }
      }
    ],
    weight: 98.57
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/stainless_steel'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/stainless_steel'
        }
      }
    ],
    weight: 103.33
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/tungsten_steel'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/tungsten_steel'
        }
      }
    ],
    weight: 147.25
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/naquadah_alloy'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/naquadah_alloy'
        }
      }
    ],
    weight: 584.65
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/naquadah'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/naquadah'
        }
      }
    ],
    weight: 264.14
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/enriched_naquadah'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/enriched_naquadah'
        }
      }
    ],
    weight: 477.26
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/enriched_naquadah'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/enriched_naquadria'
        }
      }
    ],
    weight: 1023.52
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/duranium'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/duranium'
        }
      }
    ],
    weight: 363.44
  })
  event.custom({
    type: 'ae2:matter_cannon',
    ammo: {
      tag: 'forge:nuggets/tritanium'
    },
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:nuggets/tritanium'
        }
      }
    ],
    weight: 593.23
  })

  event.remove({ id: 'enderio:dark_steel_sword' })
  event.shaped(Item.of('enderio:dark_steel_sword',1), [
      ' P ',
      'HPF',
      ' S '
  ],
  {
      S: '#forge:rods/black_steel',
      P: '#forge:plates/dark_steel',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')

  //create_tools
  let createtoolmat = ['copper', 'zinc', 'brass']
  createtoolmat.forEach(a => {
    event.remove({ id: 'create_sa:tools/'+a+'_sword_recipe' })
    event.shaped(Item.of('create_sa:'+a+'_sword',1), [
        ' P ',
        'HPF',
        ' S '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'create_sa:tools/'+a+'_axe_recipe' })
    event.shaped(Item.of('create_sa:'+a+'_axe',1), [
        'PPF',
        'PS ',
        'HS  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'create_sa:tools/'+a+'_pickaxe_recipe' })
    event.shaped(Item.of('create_sa:'+a+'_pickaxe',1), [
        'PII',
        'HSF',
        ' S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        I: '#forge:ingots/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'create_sa:tools/'+a+'_hoe_recipe' })
    event.shaped(Item.of('create_sa:'+a+'_hoe',1), [
        'PIF',
        'HS ',
        ' S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        I: '#forge:ingots/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'create_sa:tools/'+a+'_shovel_recipe' })
    event.shaped(Item.of('create_sa:'+a+'_shovel',1), [
        'HPF',
        ' S ',
        ' S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        G: '#forge:ingots/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  })

  //ae2_tools
  let aetoolmat = ['certus_quartz', 'nether_quartz']
  aetoolmat.forEach(a => {
    event.remove({ id: 'ae2:tools/'+a+'_cutting_knife' })
    event.shaped(Item.of('ae2:'+a+'_cutting_knife',1), [
        'H S',
        'PS ',
        'QQF'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/certus_alloy',
        Q: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'ae2:tools/'+a+'_sword' })
    event.shaped(Item.of('ae2:'+a+'_sword',1), [
        ' P ',
        'HPF',
        ' S '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'ae2:tools/'+a+'_axe' })
    event.shaped(Item.of('ae2:'+a+'_axe',1), [
        'PPF',
        'PS ',
        'HS  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'ae2:tools/'+a+'_pickaxe' })
    event.shaped(Item.of('ae2:'+a+'_pickaxe',1), [
        'PGG',
        'HSF',
        ' S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        G: '#forge:gems/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'ae2:tools/'+a+'_hoe' })
    event.shaped(Item.of('ae2:'+a+'_hoe',1), [
        'PGF',
        'HS ',
        ' S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        G: '#forge:gems/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'ae2:tools/'+a+'_spade' })
    event.shaped(Item.of('ae2:'+a+'_shovel',1), [
        'HPF',
        ' S ',
        ' S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        G: '#forge:gems/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'ae2:tools/'+a+'_wrench' })
    event.shaped(Item.of('ae2:'+a+'_wrench',1), [
        'PHP',
        ' P ',
        'P P'
    ],
    {
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers'
    }).damageIngredient('#forge:tools/hammers')
  })

  //farmersdelight
  event.remove({ id: 'farmersdelight:iron_knife' })
  event.shaped(Item.of('farmersdelight:iron_knife',1), [
      'HPF',
      ' S ',
  ],
  {
      S: '#forge:rods/wooden',
      P: '#forge:plates/iron',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  event.remove({ id: 'farmersdelight:golden_knife' })
  event.shaped(Item.of('farmersdelight:golden_knife',1), [
      'HPF',
      ' S ',
  ],
  {
      S: '#forge:rods/wooden',
      P: '#forge:plates/gold',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  event.remove({ id: 'farmersdelight:diamond_knife' })
  event.shaped(Item.of('farmersdelight:diamond_knife',1), [
      'HPF',
      ' S ',
  ],
  {
      S: '#forge:rods/wooden',
      P: '#forge:plates/diamond',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  event.remove({ id: 'nethersdelight:iron_machete' })
  event.shaped(Item.of('nethersdelight:iron_machete',1), [
      ' HP',
      ' PF',
      'S  '
  ],
  {
      S: '#forge:rods/wooden',
      P: '#forge:plates/iron',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  event.remove({ id: 'nethersdelight:golden_machete' })
  event.shaped(Item.of('nethersdelight:golden_machete',1), [
      ' HP',
      ' PF',
      'S  '
  ],
  {
      S: '#forge:rods/wooden',
      P: '#forge:plates/gold',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  event.remove({ id: 'nethersdelight:diamond_machete' })
  event.shaped(Item.of('nethersdelight:diamond_machete',1), [
      ' HP',
      ' PF',
      'S  '
  ],
  {
      S: '#forge:rods/wooden',
      P: '#forge:plates/diamond',
      H: '#forge:tools/hammers',
      F: '#forge:tools/files'
  }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')

  //simplyswords
  let sstoolmat = ['iron', 'gold', 'diamond']
  sstoolmat.forEach(a => {
    event.remove({ id: 'simplyswords:'+a+'_longsword' })
    event.shaped(Item.of('simplyswords:'+a+'_longsword',1), [
        'S  ',
        'HPF',
        '  P'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_twinblade' })
    event.shaped(Item.of('simplyswords:'+a+'_twinblade',1), [
        '  P',
        'HSF',
        'P  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_rapier' })
    event.shaped(Item.of('simplyswords:'+a+'_rapier',1), [
        '  P',
        'HPF',
        'S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_katana' })
    event.shaped(Item.of('simplyswords:'+a+'_katana',1), [
        ' H ',
        'SPP',
        ' F '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_sai' })
    event.shaped(Item.of('simplyswords:'+a+'_sai',1), [
        'HPF',
        'S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_spear' })
    event.shaped(Item.of('simplyswords:'+a+'_spear',1), [
        '  P',
        'HSF',
        'S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_glaive' })
    event.shaped(Item.of('simplyswords:'+a+'_glaive',1), [
        '  P',
        'HSP',
        'S F'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_warglaive' })
    event.shaped(Item.of('simplyswords:'+a+'_warglaive',1), [
        'HRF',
        'PSP'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        R: '#forge:rings/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_cutlass' })
    event.shaped(Item.of('simplyswords:'+a+'_cutlass',1), [
        'HRF',
        'PP ',
        'S  '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        R: '#forge:rings/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_greathammer' })
    event.shaped(Item.of('simplyswords:'+a+'_greathammer',1), [
        'PPP',
        'RRR',
        'HSF'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        R: '#forge:rings/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_greataxe' })
    event.shaped(Item.of('simplyswords:'+a+'_greataxe',1), [
        'PPP',
        'RSR',
        'HSF'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        R: '#forge:rings/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_chakram' })
    event.shaped(Item.of('simplyswords:'+a+'_chakram',1), [
        'RPR',
        'PRP',
        'HSF'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        R: '#forge:rings/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_scythe' })
    event.shaped(Item.of('simplyswords:'+a+'_scythe',1), [
        'PPS',
        'PSF',
        'SH '
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
    event.remove({ id: 'simplyswords:'+a+'_halberd' })
    event.shaped(Item.of('simplyswords:'+a+'_halberd',1), [
        'HPR',
        'PSP',
        'S F'
    ],
    {
        S: '#forge:rods/wooden',
        P: '#forge:plates/'+a,
        R: '#forge:rings/iron',
        H: '#forge:tools/hammers',
        F: '#forge:tools/files'
    }).damageIngredient('#forge:tools/hammers').damageIngredient('#forge:tools/files')
  })
})