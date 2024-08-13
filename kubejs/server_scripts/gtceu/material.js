ServerEvents.recipes(event => {
    //eio
    event.recipes.gtceu.mixer('copper_alloy_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:annealed_copper_dust', '1x gtceu:silicon_dust')
        .itemOutputs('2x gtceu:copper_alloy_dust')
        .duration(70)
        .EUt(30)
    event.recipes.gtceu.create_mixer('copper_alloy_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:annealed_copper_dust', '1x gtceu:silicon_dust')
        .itemOutputs('2x gtceu:copper_alloy_dust')
        .duration(35)
        .EUt(30)
        .rpm(64)
    event.recipes.gtceu.mixer('energetic_alloy_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:red_alloy_dust', '1x gtceu:electrum_dust')
        .itemOutputs('2x gtceu:energetic_alloy_dust')
        .duration(90)
        .EUt(120)
    event.recipes.gtceu.create_mixer('energetic_alloy_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:red_alloy_dust', '1x gtceu:electrum_dust')
        .itemOutputs('2x gtceu:energetic_alloy_dust')
        .duration(45)
        .EUt(120)
        .rpm(64)
    event.recipes.gtceu.mixer('vibrant_alloy_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:energetic_alloy_dust', '1x gtceu:ender_pearl_dust')
        .itemOutputs('2x gtceu:vibrant_alloy_dust')
        .duration(146)
        .EUt(120)
    event.recipes.gtceu.create_mixer('vibrant_alloy_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:energetic_alloy_dust', '1x gtceu:ender_pearl_dust')
        .itemOutputs('2x gtceu:vibrant_alloy_dust')
        .duration(73)
        .EUt(120)
        .rpm(64)
    event.recipes.gtceu.mixer('redstone_alloy_mixer')
        .circuit(2)
        .itemInputs('1x gtceu:red_alloy_dust', '1x gtceu:silicon_dust')
        .itemOutputs('2x gtceu:redstone_alloy_dust')
        .duration(120)
        .EUt(30)
    event.recipes.gtceu.create_mixer('redstone_alloy_cmixer')
        .circuit(2)
        .itemInputs('1x gtceu:red_alloy_dust', '1x gtceu:silicon_dust')
        .itemOutputs('2x gtceu:redstone_alloy_dust')
        .duration(60)
        .EUt(30)
        .rpm(64)
    event.recipes.gtceu.mixer('conductive_alloy_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:copper_alloy_dust', '1x gtceu:tin_alloy_dust', '1x gtceu:redstone_alloy_dust')
        .itemOutputs('3x gtceu:conductive_alloy_dust')
        .duration(148)
        .EUt(480)
    event.recipes.gtceu.create_mixer('conductive_alloy_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:copper_alloy_dust', '1x gtceu:tin_alloy_dust', '1x gtceu:redstone_alloy_dust')
        .itemOutputs('3x gtceu:conductive_alloy_dust')
        .duration(74)
        .EUt(480)
        .rpm(64)
    event.recipes.gtceu.mixer('pulsating_alloy_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:tin_alloy_dust', '1x gtceu:ender_pearl_dust')
        .itemOutputs('2x gtceu:pulsating_alloy_dust')
        .duration(84)
        .EUt(120)
    event.recipes.gtceu.create_mixer('pulsating_alloy_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:tin_alloy_dust', '1x gtceu:ender_pearl_dust')
        .itemOutputs('2x gtceu:pulsating_alloy_dust')
        .duration(42)
        .EUt(120)
        .rpm(64)
    event.recipes.gtceu.mixer('dark_steel_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:black_steel_dust', '1x gtceu:obsidian_dust')
        .itemOutputs('2x gtceu:dark_steel_dust')
        .duration(198)
        .EUt(480)
    event.recipes.gtceu.create_mixer('dark_steel_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:black_steel_dust', '1x gtceu:obsidian_dust')
        .itemOutputs('2x gtceu:dark_steel_dust')
        .duration(99)
        .EUt(480)
        .rpm(64)
    event.recipes.gtceu.mixer('soularium_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:soulium_dust', '1x gtceu:managold_dust')
        .itemOutputs('2x gtceu:soularium_dust')
        .duration(176)
        .EUt(480)
    event.recipes.gtceu.create_mixer('soularium_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:soulium_dust', '1x gtceu:managold_dust')
        .itemOutputs('2x gtceu:soularium_dust')
        .duration(88)
        .EUt(480)
        .rpm(64)
    event.recipes.gtceu.mixer('end_steel_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:ender_pearl_dust', '1x gtceu:dark_steel_dust', '1x gtceu:obsidian_dust', '1x minecraft:blaze_powder')
        .itemOutputs('4x gtceu:end_steel_dust')
        .duration(206)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('end_steel_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:ender_pearl_dust', '1x gtceu:dark_steel_dust', '1x gtceu:obsidian_dust', '1x minecraft:blaze_powder')
        .itemOutputs('4x gtceu:end_steel_dust')
        .duration(103)
        .EUt(1920)
        .rpm(64)
    event.recipes.gtceu.mixer('quantum_fluix_mixer')
        .circuit(4)
        .itemInputs('4x #forge:dusts/fluix', '1x #forge:dusts/quantum_eye')
        .itemOutputs('4x gtceu:quantum_fluix_dust')
        .duration(188)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('quantum_fluix_cmixer')
        .circuit(4)
        .itemInputs('4x #forge:dusts/fluix', '1x #forge:dusts/quantum_eye')
        .itemOutputs('4x gtceu:quantum_fluix_dust')
        .duration(94)
        .EUt(1920)
        .rpm(64)
    event.recipes.gtceu.mixer('certus_alloy_mixer')
        .circuit(10)
        .itemInputs('5x #forge:dusts/certus_quartz', '1x #forge:dusts/platinum', '4x #forge:dusts/titanium')
        .itemOutputs('10x gtceu:certus_alloy_dust')
        .duration(136)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('certus_alloy_cmixer')
        .circuit(10)
        .itemInputs('5x #forge:dusts/certus_quartz', '1x #forge:dusts/platinum', '4x #forge:dusts/titanium')
        .itemOutputs('10x gtceu:certus_alloy_dust')
        .duration(68)
        .EUt(1920)
        .rpm(64)
    event.recipes.gtceu.mixer('quartz_copper_mixer')
        .circuit(10)
        .itemInputs('2x #forge:dusts/nether_quartz', '1x #forge:dusts/tungsten', '2x #forge:dusts/copper_alloy')
        .itemOutputs('5x gtceu:quartz_copper_alloy_dust')
        .duration(78)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('quartz_copper_cmixer')
        .circuit(10)
        .itemInputs('2x #forge:dusts/nether_quartz', '1x #forge:dusts/tungsten', '2x #forge:dusts/copper_alloy')
        .itemOutputs('5x gtceu:quartz_copper_alloy_dust')
        .duration(39)
        .EUt(1920)
        .rpm(64)
    event.recipes.gtceu.mixer('fluix_alloy_mixer')
        .circuit(5)
        .itemInputs('2x #forge:dusts/quantum_fluix', '2x #forge:dusts/managold', '1x #forge:dusts/titanium')
        .itemOutputs('5x gtceu:fluix_alloy_dust')
        .duration(122)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('fluix_alloy_cmixer')
        .circuit(5)
        .itemInputs('2x #forge:dusts/quantum_fluix', '2x #forge:dusts/managold', '1x #forge:dusts/titanium')
        .itemOutputs('5x gtceu:fluix_alloy_dust')
        .duration(61)
        .EUt(1920)
        .rpm(64)

    //chromatic
    event.recipes.gtceu.mixer('multiplite_mixer')
        .circuit(1)
        .itemInputs('2x gtceu:refined_radiance_dust', '1x gtceu:dragonium_dust', '4x gtceu:managold_dust')
        .itemOutputs('7x gtceu:multiplite_dust')
        .duration(340)
        .EUt(7680)
    event.recipes.gtceu.create_mixer('multiplite_cmixer')
        .circuit(1)
        .itemInputs('2x gtceu:refined_radiance_dust', '1x gtceu:dragonium_dust', '4x gtceu:managold_dust')
        .itemOutputs('7x gtceu:multiplite_dust')
        .duration(170)
        .EUt(7680)
        .rpm(128)
    event.recipes.gtceu.mixer('durasteel_mixer')
        .circuit(1)
        .itemInputs('4x gtceu:shadow_steel_dust', '1x gtceu:netherite_dust', '2x gtceu:red_alloy_dust')
        .itemOutputs('7x gtceu:durasteel_dust')
        .duration(450)
        .EUt(7680)
    event.recipes.gtceu.create_mixer('durasteel_cmixer')
        .circuit(1)
        .itemInputs('4x gtceu:shadow_steel_dust', '1x gtceu:netherite_dust', '2x gtceu:red_alloy_dust')
        .itemOutputs('7x gtceu:durasteel_dust')
        .duration(225)
        .EUt(7680)
        .rpm(128)
    event.recipes.gtceu.mixer('yinyang_mixer')
        .circuit(2)
        .itemInputs('1x gtceu:refined_radiance_dust', '1x gtceu:shadow_steel_dust', '2x gtceu:sourcium_dust')
        .itemOutputs('4x gtceu:yinyang_dust')
        .duration(860)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('yinyang_cmixer')
        .circuit(2)
        .itemInputs('1x gtceu:refined_radiance_dust', '1x gtceu:shadow_steel_dust', '2x gtceu:sourcium_dust')
        .itemOutputs('4x gtceu:yinyang_dust')
        .duration(430)
        .EUt(1920)
        .rpm(128)
    event.recipes.gtceu.mixer('reinforced_yinyang_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:yinyang_dust', '1x gtceu:multiplite_dust', '1x gtceu:durasteel_dust', '2x gtceu:dragonium_dust')
        .itemOutputs('5x gtceu:reinforced_yinyang_dust')
        .duration(920)
        .EUt(30720)
    event.recipes.gtceu.create_mixer('reinforced_yinyang_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:yinyang_dust', '1x gtceu:multiplite_dust', '1x gtceu:durasteel_dust', '2x gtceu:dragonium_dust')
        .itemOutputs('5x gtceu:reinforced_yinyang_dust')
        .duration(460)
        .EUt(30720)
        .rpm(256)
    event.recipes.gtceu.mixer('soursteel_mixer')
        .circuit(1)
        .itemInputs('1x gtceu:sourcium_dust', '1x gtceu:tungsten_steel_dust')
        .itemOutputs('2x gtceu:soursteel_dust')
        .duration(280)
        .EUt(1920)
    event.recipes.gtceu.create_mixer('soursteel_cmixer')
        .circuit(1)
        .itemInputs('1x gtceu:sourcium_dust', '1x gtceu:tungsten_steel_dust')
        .itemOutputs('2x gtceu:soursteel_dust')
        .duration(140)
        .EUt(1920)
        .rpm(64)
    event.recipes.gtceu.mixer('managold_mixer')
        .circuit(2)
        .itemInputs('1x gtceu:sourcium_dust', '1x gtceu:rose_gold_dust')
        .itemOutputs('2x gtceu:managold_dust')
        .duration(230)
        .EUt(480)
    event.recipes.gtceu.create_mixer('managold_cmixer')
        .circuit(2)
        .itemInputs('1x gtceu:sourcium_dust', '1x gtceu:rose_gold_dust')
        .itemOutputs('2x gtceu:managold_dust')
        .duration(115)
        .EUt(480)
        .rpm(64)
    event.remove({type: 'crafting_shapeless' , output: 'minecraft:netherite_ingot' })
    event.remove({type: 'crafting_shaped' , output: 'minecraft:netherite_ingot' })
    event.recipes.create.mixing('1x minecraft:netherite_ingot', ['4x minecraft:netherite_scrap', '4x #forge:ingots/gold']).superheated()
    event.recipes.gtceu.electric_blast_furnace('netherite_ebf')
        .circuit(1)
        .itemInputs('1x gtceu:gold_dust', '1x minecraft:netherite_scrap')
        .itemOutputs('1x gtceu:hot_netherite_ingot', '4x gtceu:tiny_dark_ash_dust')
        .blastFurnaceTemp(3400)
        .duration(2432)
        .EUt(480)
    event.recipes.gtceu.electric_blast_furnace('netherite_ebf_prot')
        .circuit(2)
        .itemInputs('1x gtceu:gold_dust', '1x minecraft:netherite_scrap')
        .itemOutputs('1x gtceu:hot_netherite_ingot', '4x gtceu:tiny_dark_ash_dust')
        .inputFluids(Fluid.of('gtceu:helium', 100))
        .blastFurnaceTemp(3400)
        .duration(1629)
        .EUt(480)
    event.recipes.create.compacting('minecraft:iron_ingot', '9x minecraft:iron_nugget')
    event.recipes.create.compacting('minecraft:iron_block', '9x minecraft:iron_ingot')
    event.recipes.create.compacting('minecraft:gold_ingot', '9x minecraft:gold_nugget')
    event.recipes.create.compacting('minecraft:gold_block', '9x minecraft:gold_ingot')
    event.recipes.create.compacting('minecraft:lapis_block', '9x minecraft:lapis_lazuli')
    event.recipes.create.compacting('minecraft:redstone_block', '9x minecraft:redstone')
    event.remove({id: 'createdeco:netherite_nugget_from_netherite_ingot' })
    event.remove({id: 'minecraft:netherite_block' })
    event.remove({id: 'minecraft:amethyst_block' })
    event.recipes.create.compacting('minecraft:amethyst_block', '4x minecraft:amethyst_shard')
    event.remove({id: 'minecraft:copper_block' })
    event.remove({id: 'minecraft:copper_ingot' })
    event.remove({id: 'minecraft:copper_ingot_from_waxed_copper_block' })
    event.remove({id: 'create:crafting/materials/copper_ingot' })
    event.remove({id: 'create:crafting/materials/copper_nugget' })
    event.recipes.create.compacting('minecraft:copper_ingot', '9x gtceu:copper_nugget')
    event.recipes.create.compacting('minecraft:copper_block', '9x minecraft:copper_ingot')
    event.remove({id: 'create:crafting/materials/andesite_alloy_block' })
    event.remove({id: 'create:crafting/materials/brass_block_from_compacting' })
    event.remove({id: 'create:crafting/materials/andesite_alloy_from_block' })
    event.remove({id: 'create:crafting/materials/brass_ingot_from_decompacting' })
    event.remove({id: 'create:crafting/materials/brass_ingot_from_compacting' })
    event.remove({id: 'create:crafting/materials/brass_nugget_from_decompacting' })
    event.remove({id: 'create:crafting/materials/zinc_block_from_compacting' })
    event.remove({id: 'create:crafting/materials/zinc_ingot_from_decompacting' })
    event.remove({id: 'create:crafting/materials/zinc_ingot_from_compacting' })
    event.remove({id: 'create:crafting/materials/zinc_nugget_from_decompacting' })
    event.remove({id: 'createdeco:industrial_iron_ingot_from_industrial_iron_block' })
    event.remove({id: 'createdeco:industrial_iron_nugget_from_industrial_iron_ingot' })
    event.remove({id: 'createdeco:industrial_iron_ingot' })
    event.remove({id: 'createdeco:industrial_iron_block' })
    event.recipes.create.compacting('createdeco:industrial_iron_ingot', '9x createdeco:industrial_iron_nugget')
    event.recipes.create.compacting('createdeco:industrial_iron_block', '9x createdeco:industrial_iron_ingot')
    /*
    event.remove({id: 'createbigcannons:nethersteel_ingot_from_block' })
    event.remove({id: 'createbigcannons:nethersteel_ingot_from_nuggets' })
    event.remove({id: 'createbigcannons:nethersteel_nugget' })
    event.remove({id: 'createbigcannons:nethersteel_block' })
    */
    event.recipes.create.compacting('gtceu:andesite_alloy_ingot', '9x gtceu:andesite_alloy_nugget')
    event.recipes.create.compacting('gtceu:andesite_alloy_block', '9x gtceu:andesite_alloy_ingot')
    event.recipes.create.compacting('gtceu:brass_ingot', '9x gtceu:brass_nugget')
    event.recipes.create.compacting('gtceu:brass_block', '9x gtceu:brass_ingot')
    event.recipes.create.compacting('gtceu:zinc_ingot', '9x gtceu:zinc_nugget')
    event.recipes.create.compacting('gtceu:zinc_block', '9x gtceu:zinc_ingot')
    event.recipes.create.compacting('gtceu:tin_ingot', '9x gtceu:tin_nugget')
    event.recipes.create.compacting('gtceu:tin_block', '9x gtceu:tin_ingot')
    event.recipes.create.compacting('gtceu:bronze_ingot', '9x gtceu:bronze_nugget')
    event.recipes.create.compacting('gtceu:bronze_block', '9x gtceu:bronze_ingot')
    event.recipes.create.compacting('gtceu:potin_ingot', '9x gtceu:potin_nugget')
    event.recipes.create.compacting('gtceu:potin_block', '9x gtceu:potin_ingot')
    event.recipes.create.compacting('gtceu:wrought_iron_ingot', '9x gtceu:wrought_iron_nugget')
    event.recipes.create.compacting('gtceu:wrought_iron_block', '9x gtceu:wrought_iron_ingot')
    event.remove({id: 'enderio:copper_alloy_block' })
    event.remove({id: 'enderio:copper_alloy_ingot' })
    event.remove({id: 'enderio:copper_alloy_nugget_to_ingot' })
    event.remove({id: 'enderio:copper_alloy_nugget' })
    event.remove({id: 'enderio:energetic_alloy_block' })
    event.remove({id: 'enderio:energetic_alloy_ingot' })
    event.remove({id: 'enderio:energetic_alloy_nugget_to_ingot' })
    event.remove({id: 'enderio:energetic_alloy_nugget' })
    event.remove({id: 'enderio:vibrant_alloy_block' })
    event.remove({id: 'enderio:vibrant_alloy_ingot' })
    event.remove({id: 'enderio:vibrant_alloy_nugget_to_ingot' })
    event.remove({id: 'enderio:vibrant_alloy_nugget' })
    event.remove({id: 'enderio:redstone_alloy_block' })
    event.remove({id: 'enderio:redstone_alloy_ingot' })
    event.remove({id: 'enderio:redstone_alloy_nugget_to_ingot' })
    event.remove({id: 'enderio:redstone_alloy_nugget' })
    event.remove({id: 'enderio:conductive_alloy_block' })
    event.remove({id: 'enderio:conductive_alloy_ingot' })
    event.remove({id: 'enderio:conductive_alloy_nugget_to_ingot' })
    event.remove({id: 'enderio:conductive_alloy_nugget' })
    event.remove({id: 'enderio:pulsating_alloy_block' })
    event.remove({id: 'enderio:pulsating_alloy_ingot' })
    event.remove({id: 'enderio:pulsating_alloy_nugget_to_ingot' })
    event.remove({id: 'enderio:pulsating_alloy_nugget' })
    event.remove({id: 'enderio:dark_steel_block' })
    event.remove({id: 'enderio:dark_steel_ingot' })
    event.remove({id: 'enderio:dark_steel_nugget_to_ingot' })
    event.remove({id: 'enderio:dark_steel_nugget' })
    event.remove({id: 'enderio:soularium_block' })
    event.remove({id: 'enderio:soularium_ingot' })
    event.remove({id: 'enderio:soularium_nugget_to_ingot' })
    event.remove({id: 'enderio:soularium_nugget' })
    event.remove({id: 'enderio:end_steel_block' })
    event.remove({id: 'enderio:end_steel_ingot' })
    event.remove({id: 'enderio:end_steel_nugget_to_ingot' })
    event.remove({id: 'enderio:end_steel_nugget' })
    event.remove({id: 'ad_astra:steel_block' })
    event.remove({id: 'ad_astra:steel_ingot' })
    event.remove({id: 'ad_astra:steel_ingot_from_steel_block' })
    event.remove({id: 'ad_astra:steel_nugget' })
    event.remove({id: 'ad_astra:desh_block' })
    event.remove({id: 'ad_astra:desh_ingot' })
    event.remove({id: 'ad_astra:desh_ingot_from_desh_block' })
    event.remove({id: 'ad_astra:desh_nugget' })
    event.remove({id: 'ad_astra:ostrum_block' })
    event.remove({id: 'ad_astra:ostrum_ingot' })
    event.remove({id: 'ad_astra:ostrum_ingot_from_ostrum_block' })
    event.remove({id: 'ad_astra:ostrum_nugget' })
    event.remove({id: 'ad_astra:calorite_block' })
    event.remove({id: 'ad_astra:calorite_ingot' })
    event.remove({id: 'ad_astra:calorite_ingot_from_calorite_block' })
    event.remove({id: 'ad_astra:calorite_nugget' })

    let ironrawtotweak = ['yellow_limonite', 'hematite', 'goethite', 'magnetite', 'pyrite', 'granitic_mineral_sand', 'basaltic_mineral_sand']
    ironrawtotweak.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.recipes.create.crushing(['1x create:crushed_raw_iron', Item.of('create:experience_nugget', 1).withChance(0.75)], 'gtceu:raw_'+a)
        event.recipes.create.crushing(['9x create:crushed_raw_iron', Item.of('create:experience_nugget', 9).withChance(0.75)], 'gtceu:raw_'+a+'_block')
        event.smelting('1x minecraft:iron_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x minecraft:iron_block', 'gtceu:raw_'+a+'_block')
    })
    let copperrawtotweak = ['bornite', 'chalcocite', 'tetrahedrite', 'malachite', 'chalcopyrite']
    copperrawtotweak.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.recipes.create.crushing(['1x create:crushed_raw_copper', Item.of('create:experience_nugget', 1).withChance(0.75)], 'gtceu:raw_'+a)
        event.recipes.create.crushing(['9x create:crushed_raw_copper', Item.of('create:experience_nugget', 9).withChance(0.75)], 'gtceu:raw_'+a+'_block')
        event.smelting('1x minecraft:copper_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x minecraft:copper_block', 'gtceu:raw_'+a+'_block')
    })
    let zincrawtotweak = ['sphalerite']
    zincrawtotweak.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.recipes.create.crushing(['1x create:crushed_raw_zinc', Item.of('create:experience_nugget', 1).withChance(0.75)], 'gtceu:raw_'+a)
        event.recipes.create.crushing(['9x create:crushed_raw_zinc', Item.of('create:experience_nugget', 9).withChance(0.75)], 'gtceu:raw_'+a+'_block')
        event.smelting('1x gtceu:zinc_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x gtceu:zinc_block', 'gtceu:raw_'+a+'_block')
    })
    event.smelting('1x gtceu:zinc_block', 'create:raw_zinc_block')
    event.blasting('1x gtceu:zinc_block', 'create:raw_zinc_block')
    let tinrawtotweak = ['cassiterite', 'cassiterite_sand']
    tinrawtotweak.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.recipes.create.crushing(['1x create:crushed_raw_tin', Item.of('create:experience_nugget', 1).withChance(0.75)], 'gtceu:raw_'+a)
        event.recipes.create.crushing(['9x create:crushed_raw_tin', Item.of('create:experience_nugget', 9).withChance(0.75)], 'gtceu:raw_'+a+'_block')
        event.smelting('1x gtceu:tin_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x gtceu:tin_block', 'gtceu:raw_'+a+'_block')
    })
    let leadrawtotweak = ['galena']
    leadrawtotweak.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.recipes.create.crushing(['1x create:crushed_raw_lead', Item.of('create:experience_nugget', 1).withChance(0.75)], 'gtceu:raw_'+a)
        event.recipes.create.crushing(['9x create:crushed_raw_lead', Item.of('create:experience_nugget', 9).withChance(0.75)], 'gtceu:raw_'+a+'_block')
        event.smelting('1x gtceu:lead_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x gtceu:lead_block', 'gtceu:raw_'+a+'_block')
    })
    let nickelrawtotweak = ['garnierite', 'pentlandite']
    nickelrawtotweak.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.recipes.create.crushing(['1x create:crushed_raw_nickel', Item.of('create:experience_nugget', 1).withChance(0.75)], 'gtceu:raw_'+a)
        event.recipes.create.crushing(['9x create:crushed_raw_nickel', Item.of('create:experience_nugget', 9).withChance(0.75)], 'gtceu:raw_'+a+'_block')
        event.smelting('1x gtceu:nickel_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x gtceu:nickel_block', 'gtceu:raw_'+a+'_block')
    })

    let orescantoblock = ['silver', 'tin', 'lead', 'uranium', 'nickel']
    orescantoblock.forEach(a => {
        event.shaped(Item.of('gtceu:raw_'+a+'_block', 1), [
            'RRR',
            'RRR',
            'RRR'
        ],
        {
            R: 'gtceu:raw_'+a
        })
        event.shaped(Item.of('gtceu:raw_'+a,9), [
            'B'
        ],
        {
            B: 'gtceu:raw_'+a+'_block'
        })
        event.smelting('1x gtceu:'+a+'_block', 'gtceu:raw_'+a+'_block')
        event.blasting('1x gtceu:'+a+'_block', 'gtceu:raw_'+a+'_block')
    })
    let crushedores = ['iron', 'gold', 'copper', 'osmium', 'platinum', 'silver', 'tin', 'lead', 'uranium', 'nickel']
    crushedores.forEach(a => {
        event.recipes.gtceu.macerator('crushed_'+a+'_macerator')
            .itemInputs('1x create:crushed_raw_'+a)
            .itemOutputs('2x gtceu:crushed_'+a+'_ore')
            .chancedOutput('1x gtceu:crushed_'+a+'_ore', 1000, 500)
            .chancedOutput('1x gtceu:crushed_'+a+'_ore', 100, 50)
            .duration(360)
            .EUt(2)
    event.smelting('1x gtceu:silver_ingot', 'create:crushed_raw_silver')
    event.blasting('1x gtceu:silver_ingot', 'create:crushed_raw_silver')
    event.smelting('1x gtceu:tin_ingot', 'create:crushed_raw_tin')
    event.blasting('1x gtceu:tin_ingot', 'create:crushed_raw_tin')
    event.smelting('1x gtceu:lead_ingot', 'create:crushed_raw_lead')
    event.blasting('1x gtceu:lead_ingot', 'create:crushed_raw_lead')
    event.smelting('1x gtceu:uranium_ingot', 'create:crushed_raw_uranium')
    event.blasting('1x gtceu:uranium_ingot', 'create:crushed_raw_uranium')
    event.smelting('1x gtceu:nickel_ingot', 'create:crushed_raw_nickel')
    event.blasting('1x gtceu:nickel_ingot', 'create:crushed_raw_nickel')
    })
    event.shaped(Item.of('minecraft:iron_nugget', 4), [
        'FFF',
        'FIF',
        'FFF'
    ],
    {
        F: 'minecraft:flint',
        I: 'minecraft:iron_ingot'
    })
    event.shaped(Item.of('minecraft:gold_nugget', 4), [
        'FFF',
        'FIF',
        'FFF'
    ],
    {
        F: 'minecraft:flint',
        I: 'minecraft:gold_ingot'
    })
    event.shaped(Item.of('gtceu:copper_nugget', 4), [
        'FFF',
        'FIF',
        'FFF'
    ],
    {
        F: 'minecraft:flint',
        I: 'minecraft:copper_ingot'
    })
    event.shaped(Item.of('gtceu:zinc_nugget', 4), [
        'FFF',
        'FIF',
        'FFF'
    ],
    {
        F: 'minecraft:flint',
        I: 'gtceu:zinc_ingot'
    })
    event.recipes.create.crushing(['8x minecraft:iron_nugget', Item.of('minecraft:iron_nugget', 1).withChance(0.2)], '#forge:ingots/iron')
    event.recipes.create.crushing(['8x minecraft:gold_nugget', Item.of('minecraft:gold_nugget', 1).withChance(0.2)], '#forge:ingots/gold')
    event.recipes.create.crushing(['8x gtceu:copper_nugget', Item.of('gtceu:copper_nugget', 1).withChance(0.2)], '#forge:ingots/copper')
    event.recipes.create.crushing(['8x gtceu:zinc_nugget', Item.of('gtceu:zinc_nugget', 1).withChance(0.2)], '#forge:ingots/zinc')
    event.recipes.create.crushing(['8x gtceu:brass_nugget', Item.of('gtceu:brass_nugget', 1).withChance(0.2)], '#forge:ingots/brass')
    event.recipes.create.crushing(['8x gtceu:bronze_nugget', Item.of('gtceu:bronze_nugget', 1).withChance(0.2)], '#forge:ingots/bronze')
    event.recipes.create.crushing(['8x gtceu:silver_nugget', Item.of('gtceu:silver_nugget', 1).withChance(0.2)], '#forge:ingots/silver')
    event.recipes.create.crushing(['8x gtceu:tin_nugget', Item.of('gtceu:tin_nugget', 1).withChance(0.2)], '#forge:ingots/tin')
    event.recipes.create.crushing(['8x gtceu:lead_nugget', Item.of('gtceu:lead_nugget', 1).withChance(0.2)], '#forge:ingots/lead')
    event.recipes.create.crushing(['8x gtceu:uranium_nugget', Item.of('gtceu:uranium_nugget', 1).withChance(0.2)], '#forge:ingots/uranium')
    event.recipes.create.crushing(['8x gtceu:nickel_nugget', Item.of('gtceu:nickel_nugget', 1).withChance(0.2)], '#forge:ingots/nickel')
    event.recipes.create.crushing(['8x gtceu:andesite_alloy_nugget', Item.of('gtceu:andesite_alloy_nugget', 1).withChance(0.2)], '#forge:ingots/andesite_alloy')
    event.smelting('1x quark:clear_shard', '#forge:dusts/glass')
    event.recipes.create.crushing(['2x gtceu:tiny_glass_dust', Item.of('gtceu:tiny_glass_dust', 1).withChance(0.25)], '#quark:shards')
    event.recipes.gtceu.macerator('clear_shard_recycle')
        .itemInputs('1x #quark:shards')
        .itemOutputs('1x gtceu:small_glass_dust')
        .duration(50)
        .EUt(2)
/*    
    event.remove({id: 'majruszsdifficulty:enderium_block' })
    event.remove({id: 'majruszsdifficulty:enderium_ingot_from_enderium_block' })
    event.remove({id: 'majruszsdifficulty:enderium_ingot_vertical' })
    event.remove({id: 'majruszsdifficulty:enderium_ingot_horizontal' })
    event.recipes.gtceu.centrifuge('enderium_ingot_to_block')
        .itemInputs('9x majruszsdifficulty:enderium_ingot')
        .itemOutputs('1x majruszsdifficulty:enderium_block')
        .duration(300)
        .EUt(2)
    event.recipes.gtceu.centrifuge('enderium_block_to_ingot')
        .itemInputs('1x majruszsdifficulty:enderium_block')
        .itemOutputs('9x majruszsdifficulty:enderium_ingot')
        .duration(100)
        .EUt(24)
    event.recipes.gtceu.alloy_smelter('enderium_ingot')
        .itemInputs('6x majruszsdifficulty:enderium_shard', '1x #forge:dusts/ender_eye')
        .itemOutputs('1x majruszsdifficulty:enderium_ingot')
        .duration(124)
        .EUt(480)
*/

    event.remove({id: 'vintageimprovements:pressing/osmium_ingot' })
    event.remove({id: 'vintageimprovements:pressing/electrum_ingot' })
    event.remove({id: 'vintageimprovements:pressing/palladium_ingot' })
    event.remove({id: 'vintageimprovements:pressing/platinum_ingot' })
    event.remove({id: 'vintageimprovements:pressing/refined_radiance' })
    event.remove({id: 'vintageimprovements:pressing/shadow_steel' })
    event.remove({id: 'vintageimprovements:pressing/desh_ingot' })
    event.remove({id: 'vintageimprovements:pressing/silver_ingot' })
    event.remove({id: 'vintageimprovements:pressing/lead_ingot' })
    event.remove({id: 'vintageimprovements:pressing/invar_ingot' })
    event.remove({id: 'vintageimprovements:pressing/vanadium_ingot' })
    event.remove({id: 'vintageimprovements:pressing/ostrum_ingot' })
    event.remove({id: 'vintageimprovements:pressing/rhodium_ingot' })
    event.remove({id: 'vintageimprovements:pressing/rose_gold_ingot' })
    event.remove({id: 'vintageimprovements:pressing/uranium_ingot' })
    event.remove({id: 'vintageimprovements:pressing/steel_ingot' })
    event.remove({id: 'vintageimprovements:pressing/calorite_ingot' })
    event.remove({id: 'vintageimprovements:pressing/cobalt_ingot' })
    event.remove({id: 'createaddition:liquid_burning/biodiesel' })
    event.remove({id: 'createaddition:liquid_burning/biofuel' })
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluidTag: "forge:biodiesel",
            amount: 1000
        },
        burnTime: 12000,
        superheated: false,
        conditions: [
            {
                fluidTag: "forge:biodiesel",
                type: "createaddition:has_fluid_tag"
            }
        ]
    })
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluidTag: "forge:biofuel",
            amount: 1000
        },
        burnTime: 14400,
        superheated: false
    })
    event.custom({
        type: 'createaddition:liquid_burning',
        input: {
            fluidTag: "forge:blaze",
            amount: 1000
        },
        burnTime: 19200,
        superheated: true
    })
    event.recipes.gtceu.centrifuge('shadium_centrifuge')
        .inputFluids(Fluid.of('createchromaticreturn:shadow_essence', 100))
        .itemOutputs('1x gtceu:tiny_dark_ash_dust')
        .outputFluids(Fluid.of('gtceu:shadium', 72))
        .duration(140)
        .EUt(480)
    event.recipes.gtceu.centrifuge('refined_centrifuge')
        .inputFluids(Fluid.of('createchromaticreturn:refined_mixture', 250))
        .itemOutputs('1x gtceu:tiny_refined_radiance_dust')
        .outputFluids(Fluid.of('gtceu:water', 250))
        .duration(120)
        .EUt(480)
    event.recipes.gtceu.chemical_bath('shadium_to_steel')
        .itemInputs('1x gtceu:tungsten_steel_dust')
        .inputFluids(Fluid.of('gtceu:shadium', 864))
        .itemOutputs('1x gtceu:shadow_steel_dust')
        .duration(150)
        .EUt(960)
    event.recipes.gtceu.centrifuge('dragonium_centrifuge')
        .inputFluids(Fluid.of('create_central_kitchen:dragon_breath', 250))
        .itemOutputs('1x gtceu:ender_pearl_dust')
        .chancedOutput('1x gtceu:monazite_dust', 4000, 400)
        .outputFluids(Fluid.of('gtceu:dragonium', 200))
        .duration(280)
        .EUt(7680)
    event.recipes.gtceu.assembler('soursteel_casing_assemble')
        .itemInputs('6x gtceu:soursteel_plate', '1x gtceu:soursteel_frame')
        .inputFluids(Fluid.of('gtceu:sourcium', 1000))
        .itemOutputs('2x kubejs:soursteel_casing')
        .duration(50)
        .EUt(16)
    event.recipes.gtceu.macerator('obsidian_macerator')
        .itemInputs('1x minecraft:obsidian')
        .itemOutputs('4x gtceu:obsidian_dust')
        .duration(120)
        .EUt(32)
    event.recipes.gtceu.macerator('soul_macerator')
        .itemInputs('1x #minecraft:soul_fire_base_blocks')
        .itemOutputs('1x gtceu:soulium_dust')
        .duration(368)
        .EUt(2)
    event.recipes.gtceu.macerator('quantum_eye_macerator')
        .itemInputs('1x gtceu:quantum_eye')
        .itemOutputs('1x gtceu:quantum_eye_dust')
        .duration(112)
        .EUt(8)
    event.recipes.gtceu.macerator('moon_stone_macerator')
        .itemInputs('1x ad_astra:moon_cobblestone')
        .itemOutputs('1x gtceu:moon_stone_dust')
        .duration(182)
        .EUt(2)
    event.recipes.gtceu.centrifuge('moon_stone_centrifuge')
        .itemInputs('1x #forge:dusts/moon_stone')
        .chancedOutput('1x ad_astra:moon_sand', 9000, 300)
        .chancedOutput('1x gtceu:tungstate_dust', 860, 220)
        .chancedOutput('1x gtceu:platinum_dust', 200, 50)
        .outputFluids(Fluid.of('gtceu:helium_3', 50))
        .duration(160)
        .EUt(480)
    event.recipes.gtceu.macerator('mars_stone_macerator')
        .itemInputs('1x ad_astra:mars_cobblestone')
        .itemOutputs('1x gtceu:mars_stone_dust')
        .duration(214)
        .EUt(2)
    event.recipes.gtceu.centrifuge('mars_stone_centrifuge')
        .itemInputs('1x #forge:dusts/mars_stone')
        .chancedOutput('1x ad_astra:mars_sand', 9000, 300)
        .chancedOutput('1x gtceu:platinum_metal_dust', 2250, 250)
        .chancedOutput('1x gtceu:naquadah_oxide_mixture_dust', 460, 120)
        .chancedOutput('1x ad_astra:ice_shard', 50, 150)
        .duration(200)
        .EUt(1920)
    event.recipes.gtceu.macerator('venus_stone_macerator')
        .itemInputs('1x ad_astra:venus_cobblestone')
        .itemOutputs('1x gtceu:venus_stone_dust')
        .duration(246)
        .EUt(2)
    event.recipes.gtceu.centrifuge('venus_stone_centrifuge')
        .itemInputs('1x #forge:dusts/venus_stone')
        .chancedOutput('1x ad_astra:venus_sand', 9000, 300)
        .chancedOutput('1x gtceu:naquadah_oxide_mixture_dust', 1820, 220)
        .chancedOutput('1x gtceu:enriched_naquadah_oxide_mixture_dust', 340, 100)
        .chancedOutput('1x gtceu:naquadria_oxide_mixture_dust', 60, 20)
        .duration(240)
        .EUt(7680)
    event.recipes.gtceu.macerator('mercury_stone_macerator')
        .itemInputs('1x ad_astra:mercury_cobblestone')
        .itemOutputs('1x gtceu:mercury_stone_dust')
        .duration(250)
        .EUt(2)
    event.recipes.gtceu.centrifuge('mercury_stone_centrifuge')
        .itemInputs('1x #forge:dusts/mercury_stone')
        .chancedOutput('1x ad_astra:venus_sand', 9000, 300)
        .chancedOutput('1x minecraft:blaze_powder', 5940, 280)
        .chancedOutput('1x gtceu:naquadah_dust', 1010, 160)
        .chancedOutput('1x gtceu:enriched_naquadah_dust', 100, 40)
        .chancedOutput('1x gtceu:naquadria_oxide_mixture_dust', 90, 30)
        .duration(280)
        .EUt(7680)
    event.recipes.gtceu.macerator('glacio_stone_macerator')
        .itemInputs('1x ad_astra:glacio_cobblestone')
        .itemOutputs('1x gtceu:glacio_stone_dust')
        .duration(314)
        .EUt(2)
    event.recipes.gtceu.centrifuge('glacio_stone_centrifuge')
        .itemInputs('1x #forge:dusts/glacio_stone')
        .chancedOutput('1x ad_astra:ice_shard', 6500, 300)
        .chancedOutput('1x gtceu:naquadria_dust', 650, 80)
        .chancedOutput('1x gtceu:neutronium_mixture_dust', 80, 20)
        .duration(380)
        .EUt(122880)

    //sticker
    event.recipes.gtceu.chemical_reactor('bio_sticker')
        .itemInputs('8x gtceu:stem_cells', '2x #forge:dusts/naquadria')
        .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 500), Fluid.of('gtceu:radon_trioxide', 250))
        .outputFluids(Fluid.of('gtceu:bio_sticker', 500))
        .circuit(1)
        .duration(96)
        .EUt(122880)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
})