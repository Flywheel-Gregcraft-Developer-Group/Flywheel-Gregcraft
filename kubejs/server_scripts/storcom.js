ServerEvents.recipes(event => {
  console.log('Ready to modify storage and computer recipes.')
  //drawer
  event.remove({ id: 'storagedrawers:controller' })
  event.shaped(Item.of('storagedrawers:controller',1), [
        'PPP',
        'ACA',
        'PDP'
    ],
    {
        P: '#forge:plates/steel',
        A: '#gtceu:circuits/lv',
        C: 'gtceu:steel_machine_casing',
        D: '#storagedrawers:drawers'
    })
  event.remove({ id: 'storagedrawers:controller_slave' })
  event.shaped(Item.of('storagedrawers:controller_slave',1), [
        'PPP',
        'ACA',
        'PDP'
    ],
    {
        P: '#forge:plates/steel',
        A: 'gtceu:brass_normal_item_pipe',
        C: 'gtceu:steel_machine_casing',
        D: '#storagedrawers:drawers'
    })
  event.remove({ id: 'storagedrawers:compacting_drawers_3' })
  event.shaped(Item.of('storagedrawers:compacting_drawers_3',1), [
        'PPP',
        'ACA',
        'PDP'
    ],
    {
        P: '#forge:plates/steel',
        A: 'minecraft:shulker_shell',
        C: 'gtceu:steel_machine_casing',
        D: '#storagedrawers:drawers'
    })
  event.remove({ id: 'storagedrawers:upgrade_template' })
  event.shaped(Item.of('storagedrawers:upgrade_template',2), [
        'SAS',
        'ADA',
        'SAS'
    ],
    {
        S: '#forge:rods/wooden',
        A: '#forge:ingots/andesite_alloy',
        D: '#storagedrawers:drawers'
    })
  event.recipes.gtceu.assembler('drawer_upgrade_gt_a')
    .itemInputs('8x #forge:rods/wooden', '1x #storagedrawers:drawers')
    .itemOutputs('4x storagedrawers:upgrade_template')
    .inputFluids(Fluid.of('gtceu:glue', 200))
    .duration(160)
    .EUt(30)
  event.recipes.gtceu.assembler('drawer_upgrade_gt_b')
    .itemInputs('8x #forge:rods/wooden', '1x #storagedrawers:drawers')
    .itemOutputs('6x storagedrawers:upgrade_template')
    .inputFluids(Fluid.of('gtceu:polyethylene', 144))
    .duration(160)
    .EUt(30)
  event.recipes.gtceu.assembler('drawer_upgrade_gt_c')
    .itemInputs('8x #forge:rods/treated_wood', '1x #storagedrawers:drawers')
    .itemOutputs('8x storagedrawers:upgrade_template')
    .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
    .duration(120)
    .EUt(120)
  event.recipes.gtceu.assembler('obsidian_storage_upgrade_gt')
    .itemInputs('3x #forge:rods/wooden', '1x #forge:plates/obsidian', '1x storagedrawers:upgrade_template')
    .itemOutputs('1x storagedrawers:obsidian_storage_upgrade')
    .duration(40)
    .EUt(7)
  event.remove({ id: 'storagedrawers:iron_storage_upgrade' })
  event.recipes.create.mechanical_crafting('storagedrawers:iron_storage_upgrade', [
    'SSSSS',
    'IITII',
    'SSSSS',
  ], {
    S: '#forge:rods/wooden',
    I: '#forge:plates/iron',
    T: 'storagedrawers:obsidian_storage_upgrade'
  })
  event.recipes.gtceu.assembler('iron_storage_upgrade_gt')
    .itemInputs('6x #forge:rods/wooden', '2x #forge:plates/iron', '1x storagedrawers:obsidian_storage_upgrade')
    .itemOutputs('1x storagedrawers:iron_storage_upgrade')
    .duration(80)
    .EUt(7)
  event.remove({ id: 'storagedrawers:gold_storage_upgrade' })
  event.recipes.gtceu.assembler('gold_storage_upgrade_gt')
    .itemInputs('6x #forge:rods/wooden', '2x #forge:plates/electrum', '1x storagedrawers:iron_storage_upgrade')
    .itemOutputs('1x storagedrawers:gold_storage_upgrade')
    .duration(60)
    .EUt(30)
  event.remove({ id: 'storagedrawers:diamond_storage_upgrade' })
  event.recipes.gtceu.assembler('diamond_storage_upgrade_gt')
    .itemInputs('4x #forge:rods/treated_wood', '2x #forge:plates/diamond', '2x #forge:plates/steel', '1x storagedrawers:gold_storage_upgrade')
    .itemOutputs('1x storagedrawers:diamond_storage_upgrade')
    .duration(100)
    .EUt(30)
  event.remove({ id: 'storagedrawers:emerald_storage_upgrade' })
  event.recipes.gtceu.assembler('emerald_storage_upgrade_gt')
    .itemInputs('4x #forge:rods/treated_wood', '2x #forge:plates/emerald', '2x #forge:plates/magnalium', '1x storagedrawers:diamond_storage_upgrade')
    .itemOutputs('1x storagedrawers:emerald_storage_upgrade')
    .inputFluids(Fluid.of('gtceu:keke_matter', 144))
    .duration(80)
    .EUt(120)

  //backpack
  /*
  event.replaceInput({mod:'sophisticatedbackpacks', type: 'crafting_shaped', output:'sophisticatedbackpacks:copper_backpack'}, '#forge:ingots/copper' , '#forge:plates/copper')
  event.shaped(Item.of('storagedrawers:upgrade_template',2), [
    'PPP',
    'PBP',
    'PPP'
  ],
  {
    P: '#forge:plates/iron',
    B: 'sophisticatedbackpacks:copper_backpack',
  })
  event.replaceInput({mod:'sophisticatedbackpacks', type: 'crafting_shaped', output:'sophisticatedbackpacks:iron_backpack'}, '#forge:ingots/iron' , '#forge:plates/wrought_iron')
  */
  event.remove({ id: 'sophisticatedbackpacks:gold_backpack' })
  event.recipes.gtceu.assembler('gold_backpack_gt')
    .itemInputs('8x #forge:plates/electrum', '1x sophisticatedbackpacks:iron_backpack')
    .itemOutputs('1x sophisticatedbackpacks:gold_backpack')
    .duration(100)
    .EUt(30)
  event.remove({ id: 'sophisticatedbackpacks:diamond_backpack' })
  event.recipes.gtceu.assembler('diamond_backpack_gt')
    .itemInputs('4x #forge:plates/diamond', '4x #forge:plates/aluminium', '1x sophisticatedbackpacks:gold_backpack')
    .itemOutputs('1x sophisticatedbackpacks:diamond_backpack')
    .duration(90)
    .EUt(120)
  event.remove({ id: 'sophisticatedbackpacks:netherite_backpack' })
  event.recipes.gtceu.assembler('netherite_backpack_gt')
    .itemInputs('2x #forge:plates/netherite', '4x #forge:plates/stainless_steel', '1x sophisticatedbackpacks:diamond_backpack')
    .itemOutputs('1x sophisticatedbackpacks:netherite_backpack')
    .inputFluids(Fluid.of('gtceu:keke_matter', 288))
    .duration(80)
    .EUt(480)

  event.replaceInput({mod:'sophisticatedbackpacks', type: 'crafting_shaped', output:'sophisticatedbackpacks:stack_upgrade_tier_1'}, 'minecraft:iron_block' , '#forge:storage_blocks/steel')
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_2' })
  event.recipes.gtceu.assembler('stack_upgrade_t2')
    .itemInputs('4x #forge:storage_blocks/electrum', '4x #forge:storage_blocks/rose_gold', '1x sophisticatedbackpacks:stack_upgrade_tier_1')
    .itemOutputs('1x sophisticatedbackpacks:stack_upgrade_tier_2')
    .duration(360)
    .EUt(120)
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_3' })
  event.recipes.gtceu.assembler('stack_upgrade_t3')
    .itemInputs('4x #forge:storage_blocks/diamond', '4x #forge:storage_blocks/certus_alloy', '1x sophisticatedbackpacks:stack_upgrade_tier_2')
    .itemOutputs('1x sophisticatedbackpacks:stack_upgrade_tier_3')
    .inputFluids(Fluid.of('gtceu:keke_matter', 576))
    .duration(320)
    .EUt(1920)
  event.remove({ id: 'sophisticatedbackpacks:stack_upgrade_tier_4' })
  event.recipes.gtceu.assembler('stack_upgrade_t4')
    .itemInputs('4x #forge:storage_blocks/netherite', '4x #forge:storage_blocks/enderite', '1x sophisticatedbackpacks:stack_upgrade_tier_3')
    .itemOutputs('1x sophisticatedbackpacks:stack_upgrade_tier_4')
    .inputFluids(Fluid.of('gtceu:enriched_keke_matter', 288))
    .duration(280)
    .EUt(30720)

  //toms_storage
  /*
  event.replaceInput({mod:'toms_storage', type: 'crafting_shaped'}, '#minecraft:planks' , '#forge:plates/brass')
  event.replaceInput({mod:'toms_storage', type: 'crafting_shaped'}, '#c:wooden_chests' , 'create_sa:vault_component')
  event.replaceInput({mod:'toms_storage', type: 'crafting_shaped', output:'toms_storage:ts.crafting_terminal'}, 'minecraft:diamond' , 'kubejs:electronic_mechanism')
  event.remove({ id: 'toms_storage:storage_terminal' })
  event.shaped(Item.of('toms_storage:ts.storage_terminal',1), [
        'PMP',
        'VCR',
        'PMP'
    ],
    {
        C: 'create:brass_casing',
        V: 'create_sa:vault_component',
        R: '#forge:glass_panes',
        M: 'kubejs:electronic_mechanism',
        P: '#forge:plates/brass'
    })
  event.remove({ id: 'toms_storage:wireless_terminal' })
  event.shaped(Item.of('toms_storage:ts.wireless_terminal',1), [
        'PMP',
        'ECR',
        'PMP'
    ],
    {
        C: 'create:brass_casing',
        E: 'minecraft:ender_eye',
        R: '#forge:glass_panes',
        M: 'kubejs:electronic_mechanism',
        P: '#forge:plates/brass'
    })
  event.remove({ id: 'toms_storage:inventory_connector' })
  event.shaped(Item.of('toms_storage:ts.inventory_connector',1), [
        'PMP',
        'VCV',
        'PEP'
    ],
    {
        C: 'create:brass_casing',
        V: 'create_sa:vault_component',
        E: 'minecraft:ender_eye',
        M: 'kubejs:electronic_mechanism',
        P: '#forge:plates/brass'
    })
  event.remove({ id: 'toms_storage:inventory_cable_connector' })
  event.shaped(Item.of('toms_storage:ts.inventory_cable_connector',1), [
        ' QP',
        'IME',
        ' VP'
    ],
    {
        Q: '#forge:gems/quartz',
        V: 'create_sa:vault_component',
        E: 'minecraft:ender_pearl',
        M: 'kubejs:electronic_mechanism',
        P: '#forge:plates/brass',
        I: 'toms_storage:ts.inventory_cable'
    })
  event.remove({ id: 'toms_storage:inventory_cable_connector_filtered' })
  event.shaped(Item.of('toms_storage:ts.inventory_cable_connector_filtered',1), [
        ' Q ',
        'LCR',
        ' Q '
    ],
    {
        C: 'toms_storage:ts.inventory_cable_connector',
        Q: '#forge:gems/quartz',
        L: 'create:filter',
        R: 'create:attribute_filter'
    })
  */

  //ae2
  event.remove({ id: 'ae2:network/blocks/energy_vibration_chamber' })
  event.remove({ id: 'ae2:inscriber/calculation_processor_press' })
  event.recipes.gtceu.bender('calculation')
      .itemInputs('4x #forge:plates/certus_alloy')
      .itemOutputs('ae2:calculation_processor_press')
      .duration(360)
      .EUt(96)
      .circuit(4)
  event.remove({ id: 'ae2:inscriber/engineering_processor_press' })
  event.recipes.gtceu.bender('engineering')
      .itemInputs('4x #forge:plates/certus_alloy')
      .itemOutputs('ae2:engineering_processor_press')
      .duration(360)
      .EUt(96)
      .circuit(5)
  event.remove({ id: 'ae2:inscriber/logic_processor_press' })
  event.recipes.gtceu.bender('logic')
      .itemInputs('4x #forge:plates/certus_alloy')
      .itemOutputs('ae2:logic_processor_press')
      .duration(360)
      .EUt(96)
      .circuit(6)
  event.remove({ id: 'ae2:inscriber/silicon_press' })
  event.recipes.gtceu.bender('silicon')
      .itemInputs('4x #forge:plates/certus_alloy')
      .itemOutputs('ae2:silicon_press')
      .duration(360)
      .EUt(96)
      .circuit(7)
  event.recipes.gtceu.centrifuge('sky_dust_centrifuge')
      .itemInputs('4x ae2:sky_dust')
      .itemOutputs('3x gtceu:rare_earth_dust', '1x gtceu:yttrium_barium_cuprate_dust')
      .chancedOutput('1x gtceu:small_enriched_naquadah_dust', 2000, 500)
      .chancedOutput('1x gtceu:small_trinium_dust', 600, 200)
      .duration(1880)
      .EUt(16384)
  event.remove({ id: 'ae2:decorative/quartz_glass' })
  event.recipes.gtceu.alloy_smelter('quartz_glass_alloy')
      .itemInputs('#ae2:all_quartz_dust','3x #forge:dusts/glass')
      .itemOutputs('ae2:quartz_glass')
      .duration(196)
      .EUt(16)
  event.remove({ id: 'ae2:network/parts/quartz_fiber_part' })
  event.recipes.gtceu.cutter('quartz_fiber_cut_1')
      .itemInputs('ae2:quartz_glass')
      .itemOutputs('ae2:quartz_fiber')
      .inputFluids(Fluid.of('minecraft:water', 15))
      .duration(400)
      .EUt(30)
  event.recipes.gtceu.cutter('quartz_fiber_cut_2')
      .itemInputs('ae2:quartz_glass')
      .itemOutputs('ae2:quartz_fiber')
      .inputFluids(Fluid.of('gtceu:distilled_water', 11))
      .duration(300)
      .EUt(30)
  event.recipes.gtceu.cutter('quartz_fiber_cut_3')
      .itemInputs('ae2:quartz_glass')
      .itemOutputs('ae2:quartz_fiber')
      .inputFluids(Fluid.of('gtceu:lubricant', 3))
      .duration(200)
      .EUt(30)
  /*
  event.replaceInput({mod:'ae2', input: 'ae2:certus_quartz_crystal'}, 'ae2:certus_quartz_crystal' , '#ae2:all_certus_quartz')
  event.replaceOutput({mod:'ae2', output: 'ae2:certus_quartz_crystal'}, 'ae2:certus_quartz_crystal' , 'gtceu:certus_quartz_gem')
  event.replaceInput({mod:'ae2', input: 'ae2:certus_quartz_dust'}, 'ae2:certus_quartz_dust' , '#ae2:all_quartz_dust')
  event.replaceOutput({mod:'ae2', output: 'ae2:certus_quartz_dust'}, 'ae2:certus_quartz_dust' , 'gtceu:certus_quartz_dust')
  event.remove({ id: 'gtceu:shaped/block_compress_certus_quartz' })
  event.remove({ id: 'gtceu:compressor/compress_certus_quartz_gem_to_block' })
  event.recipes.gtceu.compressor('certus_quartz_block_modified')
      .itemInputs('4x #ae2:all_certus_quartz')
      .itemOutputs('ae2:quartz_block')
      .duration(20)
      .EUt(30)
  event.remove({ id: 'gtceu:shapeless/block_decompress_certus_quartz' })
  */
  event.recipes.gtceu.mixer('fluix_crystal')
      .itemInputs('gtceu:certus_quartz_gem','minecraft:redstone','minecraft:quartz')
      .itemOutputs('2x ae2:fluix_crystal')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(1080)
      .EUt(480)
      .circuit(2)
  event.recipes.gtceu.create_mixer('fluix_crystal')
      .itemInputs('gtceu:certus_quartz_gem','minecraft:redstone','minecraft:quartz')
      .itemOutputs('2x ae2:fluix_crystal')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(540)
      .EUt(480)
      .circuit(2)
      .rpm(16)
  event.recipes.gtceu.mixer('flawed_budding_quartz')
      .itemInputs('gtceu:certus_quartz_gem','ae2:chipped_budding_quartz')
      .itemOutputs('ae2:flawed_budding_quartz')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(1080)
      .EUt(480)
      .circuit(1)
  event.recipes.gtceu.create_mixer('flawed_budding_quartz')
      .itemInputs('gtceu:certus_quartz_gem','ae2:chipped_budding_quartz')
      .itemOutputs('ae2:flawed_budding_quartz')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(540)
      .EUt(480)
      .circuit(1)
      .rpm(16)
  event.recipes.gtceu.mixer('certus_quartz_crystal')
      .itemInputs('ae2:charged_certus_quartz_crystal','#ae2:all_quartz_dust')
      .itemOutputs('2x gtceu:certus_quartz_gem')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(1080)
      .EUt(480)
      .circuit(2)
  event.recipes.gtceu.create_mixer('certus_quartz_crystal')
      .itemInputs('ae2:charged_certus_quartz_crystal','#ae2:all_quartz_dust')
      .itemOutputs('2x gtceu:certus_quartz_gem')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(540)
      .EUt(480)
      .circuit(2)
      .rpm(16)
  event.recipes.gtceu.mixer('fluix_crystal_2')
      .itemInputs('gtceu:certus_quartz_gem','ae2:fluix_dust')
      .itemOutputs('ae2:fluix_crystal')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(1080)
      .EUt(480)
      .circuit(1)
  event.recipes.gtceu.create_mixer('fluix_crystal_2')
      .itemInputs('gtceu:certus_quartz_gem','ae2:fluix_dust')
      .itemOutputs('ae2:fluix_crystal')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(540)
      .EUt(480)
      .circuit(1)
      .rpm(16)
  event.recipes.gtceu.mixer('chipped_budding_quartz')
      .itemInputs('gtceu:certus_quartz_gem','ae2:damaged_budding_quartz')
      .itemOutputs('ae2:chipped_budding_quartz')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(1080)
      .EUt(480)
      .circuit(1)
  event.recipes.gtceu.create_mixer('chipped_budding_quartz')
      .itemInputs('gtceu:certus_quartz_gem','ae2:damaged_budding_quartz')
      .itemOutputs('ae2:chipped_budding_quartz')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(540)
      .EUt(480)
      .circuit(1)
      .rpm(16)
  event.recipes.gtceu.mixer('damaged_budding_quartz')
      .itemInputs('gtceu:certus_quartz_gem','gtceu:certus_quartz_block')
      .itemOutputs('ae2:damaged_budding_quartz')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(1080)
      .EUt(480)
      .circuit(1)
  event.recipes.gtceu.create_mixer('damaged_budding_quartz')
      .itemInputs('gtceu:certus_quartz_gem','gtceu:certus_quartz_block')
      .itemOutputs('ae2:damaged_budding_quartz')
      .inputFluids(Fluid.of('minecraft:water', 1000))
      .duration(540)
      .EUt(480)
      .circuit(1)
      .rpm(16)
  /*
  event.recipes.gtceu.implosion_compressor('singularity_explosion')
      .itemInputs('ae2:singularity','minecraft:ender_pearl')
      .itemOutputs('2x ae2:quantum_entangled_singularity')
      .duration(20)
      .EUt(30)
  event.recipes.gtceu.implosion_compressor('singularity_explosion_2')
      .itemInputs('ae2:singularity','#forge:dusts/ender_pearl')
      .itemOutputs('2x ae2:quantum_entangled_singularity')
      .duration(20)
      .EUt(30)
  */
  event.replaceInput({mod:'ae2', type: 'crafting_shaped'}, 'minecraft:iron_ingot' , '#forge:plates/certus_alloy')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped'}, '#c:glass' , 'ae2:quartz_glass')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped'}, 'minecraft:sticky_piston' , 'gtceu:ev_electric_piston')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped'}, 'minecraft:piston' , 'gtceu:ev_electric_piston')
  event.replaceInput({mod:'ae2', type: 'crafting_shapeless'}, 'minecraft:sticky_piston' , 'gtceu:ev_electric_piston')
  event.replaceInput({mod:'ae2', type: 'crafting_shapeless'}, 'minecraft:piston' , 'gtceu:ev_electric_piston')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:energy_acceptor'}, 'minecraft:copper_ingot' , 'gtceu:fluix_alloy_double_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:charger'}, 'minecraft:copper_ingot' , 'gtceu:fluix_alloy_double_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:chest'}, 'minecraft:copper_ingot' , 'gtceu:fluix_alloy_double_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:cable_anchor'}, 'minecraft:copper_ingot' , 'gtceu:fluix_alloy_double_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:crank'}, 'minecraft:copper_ingot' , 'gtceu:fluix_alloy_double_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:inscriber'}, 'minecraft:copper_ingot' , 'gtceu:fluix_alloy_double_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:item_cell_housing'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:item_storage_cell_1k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:item_storage_cell_4k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:item_storage_cell_16k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:item_storage_cell_64k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:item_storage_cell_256k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')  
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_cell_housing'}, 'minecraft:copper_ingot' , 'gtceu:annealed_copper_plate')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_1k'}, 'minecraft:copper_ingot' , 'gtceu:annealed_copper_plate')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_4k'}, 'minecraft:copper_ingot' , 'gtceu:annealed_copper_plate')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_16k'}, 'minecraft:copper_ingot' , 'gtceu:annealed_copper_plate')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_64k'}, 'minecraft:copper_ingot' , 'gtceu:annealed_copper_plate')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_256k'}, 'minecraft:copper_ingot' , 'gtceu:annealed_copper_plate')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_cell_housing'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_1k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_4k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_16k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_64k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:fluid_storage_cell_256k'}, 'minecraft:redstone' , 'gtceu:conductive_alloy_dust')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:memory_card'}, 'minecraft:gold_ingot' , 'gtceu:electrum_foil')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:memory_card'}, 'minecraft:redstone' , 'gtceu:fluix_alloy_single_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:basic_card'}, 'minecraft:gold_ingot' , 'gtceu:electrum_foil')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:basic_card'}, 'minecraft:redstone' , 'gtceu:fluix_alloy_single_wire')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:advanced_card'}, 'minecraft:diamond' , 'gtceu:osmiridium_foil')
  event.replaceInput({mod:'ae2', type: 'crafting_shaped', output:'ae2:advanced_card'}, 'minecraft:redstone' , 'gtceu:fluix_alloy_single_wire')
  event.remove({ id: 'ae2:blasting/silicon_from_certus_quartz_dust' })
  event.remove({ id: 'ae2:inscriber/silicon_print' })
  event.custom({
    type: 'ae2:inscriber',
    ingredients: {
      middle: { item: 'gtceu:silicon_dust' },
      top: { item: 'ae2:silicon_press'}
    },
    mode: 'inscribe',
    result: { item: 'ae2:printed_silicon' }
  })
  event.remove({ id: 'ae2:inscriber/logic_processor_print' })
  event.custom({
    type: 'ae2:inscriber',
    ingredients: {
      middle: { item: 'gtceu:electrum_dust' },
      top: { item: 'ae2:logic_processor_press'}
    },
    mode: 'inscribe',
    result: { item: 'ae2:printed_logic_processor' }
  })
  event.remove({ id: 'ae2:inscriber/engineering_processor_print' })
  event.custom({
    type: 'ae2:inscriber',
    ingredients: {
      middle: { item: 'gtceu:diamond_dust' },
      top: { item: 'ae2:engineering_processor_press'}
    },
    mode: 'inscribe',
    result: { item: 'ae2:printed_engineering_processor' }
  })
  event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
  event.custom({
    type: 'ae2:inscriber',
    ingredients: {
      middle: { item: 'gtceu:certus_quartz_dust' },
      top: { item: 'ae2:calculation_processor_press'}
    },
    mode: 'inscribe',
    result: { item: 'ae2:printed_calculation_processor' }
  })
  event.remove({ id: 'ae2:inscriber/certus_quartz_dust' })
  event.custom({
    type: 'ae2:inscriber',
    ingredients: {
      middle: { tag: 'ae2:all_certus_quartz' }
    },
    mode: 'inscribe',
    result: { item: 'gtceu:certus_quartz_dust' }
  })
  event.remove({ id: 'ae2:transform/certus_quartz_crystals' })
  event.custom({
    type: 'ae2:transform',
    circumstance: {
      type: 'fluid',
      tag: 'minecraft:water'
    },
    ingredients: [
      { item: 'ae2:charged_certus_quartz_crystal'},
      { item: 'gtceu:certus_quartz_dust'}
    ],
    result: { item: 'gtceu:certus_quartz_gem', count: 2 }
  })
  event.remove({ id: 'ae2:network/blocks/crank' })
  event.remove({ id: 'ae2:charger/meteorite_compass' })
  event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
  event.custom({
    type: 'ae2:charger',
    ingredient: {
      tag: 'ae2:all_certus_quartz'
    },
    result: { item: 'ae2:charged_certus_quartz_crystal'}
  })
  event.remove({ id: 'ae2:smelting/silicon_from_certus_quartz_dust' })
  event.recipes.gtceu.forming_press('pep_inscribe')
      .notConsumable('ae2:engineering_processor_press')
      .itemInputs('1x #forge:dusts/diamond')
      .itemOutputs('1x ae2:printed_engineering_processor')
      .duration(80)
      .EUt(4096)
  event.recipes.gtceu.forming_press('pcp_inscribe')
      .notConsumable('ae2:calculation_processor_press')
      .itemInputs('1x #forge:dusts/certus_quartz')
      .itemOutputs('1x ae2:printed_calculation_processor')
      .duration(80)
      .EUt(4096)
  event.recipes.gtceu.forming_press('plp_inscribe')
      .notConsumable('ae2:logic_processor_press')
      .itemInputs('1x #forge:dusts/electrum')
      .itemOutputs('1x ae2:printed_logic_processor')
      .duration(80)
      .EUt(4096)
  event.recipes.gtceu.forming_press('silicon_inscribe')
      .notConsumable('ae2:silicon_press')
      .itemInputs('1x #forge:dusts/silicon')
      .itemOutputs('1x ae2:printed_silicon')
      .duration(80)
      .EUt(4096)
  event.recipes.gtceu.forming_press('ep_inscribe')
      .itemInputs('1x ae2:printed_engineering_processor', '1x ae2:printed_silicon', '1x #forge:dusts/redstone')
      .itemOutputs('1x ae2:engineering_processor')
      .duration(80)
      .EUt(4096)
  event.recipes.gtceu.forming_press('cp_inscribe')
      .itemInputs('1x ae2:printed_calculation_processor', '1x ae2:printed_silicon', '1x #forge:dusts/redstone')
      .itemOutputs('1x ae2:calculation_processor')
      .duration(80)
      .EUt(4096)
  event.recipes.gtceu.forming_press('lp_inscribe')
      .itemInputs('1x ae2:printed_logic_processor', '1x ae2:printed_silicon', '1x #forge:dusts/redstone')
      .itemOutputs('1x ae2:logic_processor')
      .duration(80)
      .EUt(4096)
  event.remove({ id: 'ae2:network/cells/item_cell_housing' })
  event.recipes.gtceu.assembler('item_cell_housing')
      .itemInputs('1x ae2:quartz_glass', '4x #forge:plates/certus_alloy', '2x #forge:screws/certus_alloy', '8x #forge:foils/conductive_alloy')
      .itemOutputs('1x ae2:item_cell_housing')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
      .duration(164)
      .EUt(1920)
  event.remove({ id: 'ae2:network/cells/fluid_cell_housing' })
  event.recipes.gtceu.assembler('fluid_cell_housing')
      .itemInputs('1x ae2:quartz_glass', '4x #forge:plates/quartz_copper_alloy', '2x #forge:screws/quartz_copper_alloy', '8x #forge:foils/conductive_alloy')
      .itemOutputs('1x ae2:fluid_cell_housing')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 144))
      .duration(164)
      .EUt(1920)
  event.remove({ id: 'bigger_ae2:advanced_item_cell_housing' })
  event.recipes.gtceu.assembler('advanced_item_cell_housing')
      .itemInputs('1x ae2:item_cell_housing', '1x ae2:singularity', '16x #forge:foils/naquadria')
      .itemOutputs('1x bigger_ae2:advanced_item_cell_housing')
      .inputFluids(Fluid.of('gtceu:enriched_keke_matter', 144))
      .duration(236)
      .EUt(122880)
  event.remove({ id: 'bigger_ae2:advanced_fluid_cell_housing' })
  event.recipes.gtceu.assembler('advanced_fluid_cell_housing')
      .itemInputs('1x ae2:fluid_cell_housing', '1x ae2:singularity', '16x #forge:foils/naquadria')
      .itemOutputs('1x bigger_ae2:advanced_fluid_cell_housing')
      .inputFluids(Fluid.of('gtceu:enriched_keke_matter', 144))
      .duration(236)
      .EUt(122880)

  event.remove({ id: 'ae2:network/cells/item_storage_components_cell_1k_part' })
  event.recipes.gtceu.assembler('ae_1k')
      .itemInputs('8x #forge:fine_wires/conductive_alloy', '4x #forge:plates/certus_quartz', '1x ae2:logic_processor', '1x #gtceu:circuits/hv')
      .itemOutputs('1x ae2:cell_component_1k')
      .inputFluids(Fluid.of('gtceu:tin', 144))
      .duration(192)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_1k_b')
  .itemInputs('8x #forge:fine_wires/conductive_alloy', '4x #forge:plates/certus_quartz', '1x ae2:logic_processor', '1x #gtceu:circuits/hv')
      .itemOutputs('1x ae2:cell_component_1k')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
      .duration(192)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/cells/item_storage_components_cell_4k_part' })
  event.recipes.gtceu.assembler('ae_4k')
      .itemInputs('16x #forge:fine_wires/conductive_alloy', '3x ae2:cell_component_1k', '2x ae2:quartz_glass', '1x ae2:calculation_processor', '1x #gtceu:circuits/ev')
      .itemOutputs('1x ae2:cell_component_4k')
      .inputFluids(Fluid.of('gtceu:tin', 288))
      .duration(192)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_4k_b')
      .itemInputs('16x #forge:fine_wires/conductive_alloy', '3x ae2:cell_component_1k', '2x ae2:quartz_glass', '1x ae2:calculation_processor', '1x #gtceu:circuits/ev')
      .itemOutputs('1x ae2:cell_component_4k')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
      .duration(192)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/cells/item_storage_components_cell_16k_part' })
  event.recipes.gtceu.assembler('ae_16k')
      .itemInputs('8x #forge:fine_wires/fluix_alloy', '3x ae2:cell_component_4k', '4x ae2:quartz_glass', '2x ae2:calculation_processor', '1x #gtceu:circuits/iv')
      .itemOutputs('1x ae2:cell_component_16k')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 288))
      .duration(192)
      .EUt(7680)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/cells/item_storage_components_cell_64k_part' })
  event.recipes.gtceu.assembler('ae_64k')
      .itemInputs('16x #forge:fine_wires/fluix_alloy', '3x ae2:cell_component_16k', '4x gtceu:laminated_glass', '4x ae2:calculation_processor', '1x #gtceu:circuits/luv')
      .itemOutputs('1x ae2:cell_component_64k')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
      .duration(192)
      .EUt(30720)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/cells/item_storage_components_cell_256k_part' })
  event.recipes.gtceu.assembler('ae_256k')
      .itemInputs('16x #forge:fine_wires/yinyang_star_alloy', '3x ae2:cell_component_64k', '8x gtceu:laminated_glass', '8x ae2:calculation_processor', '1x #gtceu:circuits/zpm')
      .itemOutputs('1x ae2:cell_component_256k')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 1152))
      .duration(192)
      .EUt(122880)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'bigger_ae2:quantum_cell_component' })
  event.recipes.gtceu.assembly_line('ae_quantum')
      .itemInputs('16x #forge:fine_wires/hyper_enderite', '64x ae2:cell_component_256k', '8x gtceu:fusion_glass', '1x gtceu:zpm_field_generator', '1x #gtceu:circuits/zpm')
      .itemOutputs('1x bigger_ae2:quantum_cell_component')
      .inputFluids(Fluid.of('gtceu:naquadria', 576), Fluid.of('gtceu:bio_sticker', 288))
      .duration(286)
      .EUt(491520)
  event.remove({ id: 'bigger_ae2:digital_singularity_cell_component' })
  event.recipes.gtceu.assembly_line('ae_digital')
      .itemInputs('16x bigger_ae2:quantum_cell_component', '32x gtceu:fusion_glass', '16x gtceu:uv_field_generator', '4x #gtceu:circuits/uhv')
      .itemOutputs('1x bigger_ae2:digital_singularity_cell_component')
      .inputFluids(Fluid.of('gtceu:bio_sticker', 1152), Fluid.of('gtceu:infinity', 288))
      .duration(392)
      .EUt(1966080)

  event.remove({ id: 'ae2:network/cells/spatial_components' })
  event.recipes.gtceu.assembler('ae_s2')
      .itemInputs('8x #forge:dusts/quantum_fluix', '4x gtceu:hv_field_generator', '1x ae2:engineering_processor', '1x #gtceu:circuits/ev')
      .itemOutputs('1x ae2:spatial_cell_component_2')
      .inputFluids(Fluid.of('gtceu:tin', 288))
      .duration(214)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_s2_b')
      .itemInputs('8x #forge:dusts/quantum_fluix', '4x gtceu:hv_field_generator', '1x ae2:engineering_processor', '1x #gtceu:circuits/ev')
      .itemOutputs('1x ae2:spatial_cell_component_2')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
      .duration(214)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/cells/spatial_components_0' })
  event.recipes.gtceu.assembler('ae_s16')
      .itemInputs('4x ae2:spatial_cell_component_2', '4x gtceu:iv_field_generator', '4x ae2:engineering_processor', '1x #gtceu:circuits/luv')
      .itemOutputs('1x ae2:spatial_cell_component_16')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 576))
      .duration(214)
      .EUt(30720)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/cells/spatial_components_1' })
  event.recipes.gtceu.assembly_line('ae_s128')
      .itemInputs('4x ae2:spatial_cell_component_16', '4x gtceu:zpm_field_generator', '16x ae2:engineering_processor', '1x #gtceu:circuits/uv')
      .itemOutputs('1x ae2:spatial_cell_component_128')
      .inputFluids(Fluid.of('gtceu:naquadria', 576), Fluid.of('gtceu:bio_sticker', 288))
      .duration(252)
      .EUt(491520)

  event.remove({ id: 'ae2:network/cells/view_cell' })
  event.remove({ id: 'ae2:network/cells/item_storage_cell_1k' })
  event.remove({ id: 'ae2:network/cells/item_storage_cell_4k' })
  event.remove({ id: 'ae2:network/cells/item_storage_cell_16k' })
  event.remove({ id: 'ae2:network/cells/item_storage_cell_64k' })
  event.remove({ id: 'ae2:network/cells/item_storage_cell_256k' })
  event.remove({ id: 'ae2:network/cells/fluid_storage_cell_1k' })
  event.remove({ id: 'ae2:network/cells/fluid_storage_cell_4k' })
  event.remove({ id: 'ae2:network/cells/fluid_storage_cell_16k' })
  event.remove({ id: 'ae2:network/cells/fluid_storage_cell_64k' })
  event.remove({ id: 'ae2:network/cells/fluid_storage_cell_256k' })
  event.remove({ id: 'ae2:network/cells/spatial_storage_cell_2_cubed' })
  event.remove({ id: 'ae2:network/cells/spatial_storage_cell_16_cubed' })
  event.remove({ id: 'ae2:network/cells/spatial_storage_cell_128_cubed' })

  event.remove({ id: 'ae2:materials/basiccard' })
  event.recipes.gtceu.assembler('ae_basiccard')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '4x #forge:foils/electrum', '3x #forge:plates/certus_alloy', '1x ae2:calculation_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('2x ae2:basic_card')
      .inputFluids(Fluid.of('gtceu:tin', 144))
      .duration(112)
      .EUt(1920)
      .circuit(1)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_basiccard_b')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '4x #forge:foils/electrum', '3x #forge:plates/certus_alloy', '1x ae2:calculation_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('2x ae2:basic_card')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
      .duration(112)
      .EUt(1920)
      .circuit(1)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:materials/advancedcard' })
  event.recipes.gtceu.assembler('ae_advancedcard')
      .itemInputs('8x #forge:fine_wires/fluix_alloy', '4x #forge:foils/vanadium_gallium', '3x #forge:plates/certus_alloy', '2x ae2:calculation_processor', '1x #gtceu:circuits/hv')
      .itemOutputs('2x ae2:advanced_card')
      .inputFluids(Fluid.of('gtceu:tin', 288))
      .duration(136)
      .EUt(7680)
      .circuit(1)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_advancedcard_b')
      .itemInputs('8x #forge:fine_wires/fluix_alloy', '4x #forge:foils/vanadium_gallium', '3x #forge:plates/certus_alloy', '2x ae2:calculation_processor', '1x #gtceu:circuits/hv')
      .itemOutputs('2x ae2:advanced_card')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
      .duration(136)
      .EUt(7680)
      .circuit(1)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:tools/network_memory_card' })
  event.recipes.gtceu.assembler('ae_memorycard')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '4x #forge:foils/electrum', '2x #forge:plates/certus_alloy', '1x ae2:calculation_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('1x ae2:memory_card')
      .inputFluids(Fluid.of('gtceu:tin', 144))
      .duration(112)
      .EUt(1920)
      .circuit(2)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_memorycard_b')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '4x #forge:foils/electrum', '2x #forge:plates/certus_alloy', '1x ae2:calculation_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('1x ae2:memory_card')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
      .duration(112)
      .EUt(1920)
      .circuit(2)
      .cleanroom(CleanroomType.CLEANROOM)

  event.recipes.gtceu.macerator('fluix_dust_macerator')
      .itemInputs('1x ae2:fluix_crystal')
      .itemOutputs('1x ae2:fluix_dust')
      .duration(68)
      .EUt(8)
  event.recipes.gtceu.macerator('fluix_dust_macerator_block')
      .itemInputs('1x ae2:fluix_block')
      .itemOutputs('4x ae2:fluix_dust')
      .duration(272)
      .EUt(8)
  event.recipes.gtceu.macerator('fluix_pearl_macerator')
      .itemInputs('1x ae2:fluix_pearl')
      .itemOutputs('4x ae2:fluix_dust', '1x gtceu:ender_pearl_dust')
      .duration(168)
      .EUt(8)

  event.remove({ id: 'ae2:network/blocks/energy_energy_cell' })
  event.recipes.gtceu.assembler('ae_energy_cell')
      .itemInputs('16x #forge:foils/fluix_alloy', '4x #forge:plates/certus_alloy', '1x ae2:quartz_glass', '1x gtceu:lapotron_crystal')
      .itemOutputs('1x ae2:energy_cell')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 576))
      .duration(352)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/blocks/energy_dense_energy_cell' })
  event.recipes.gtceu.assembler('ae_dense_energy_cell')
      .itemInputs('16x #forge:foils/fluix_alloy', '8x ae2:energy_cell', '1x ae2:calculation_processor', '1x #gtceu:circuits/luv')
      .itemOutputs('1x ae2:dense_energy_cell')
      .inputFluids(Fluid.of('gtceu:polybenzimidazole', 576))
      .duration(316)
      .EUt(7680)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/blocks/io_condenser' })
  event.recipes.gtceu.assembly_line('ae_condenser')
      .itemInputs('32x #forge:foils/fluix_alloy', '8x #forge:plates/certus_alloy', '4x gtceu:iv_field_generator', '4x ae2:quartz_glass', '4x #gtceu:circuits/luv')
      .itemOutputs('1x ae2:condenser')
      .inputFluids(Fluid.of('gtceu:keke_matter', 1152), Fluid.of('gtceu:polybenzimidazole', 576))
      .duration(880)
      .EUt(7680)
  event.remove({ id: 'ae2:materials/formationcore' })
  event.recipes.gtceu.assembler('ae_formation_core')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '1x #forge:plates/certus_quartz', '1x ae2:logic_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('2x ae2:formation_core')
      .inputFluids(Fluid.of('gtceu:tin', 144))
      .circuit(3)
      .duration(114)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_formation_core_b')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '1x #forge:plates/certus_quartz', '1x ae2:logic_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('2x ae2:formation_core')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
      .circuit(3)
      .duration(114)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:materials/annihilationcore' })
  event.recipes.gtceu.assembler('ae_annihilation_core')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '1x #forge:plates/nether_quartz', '1x ae2:logic_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('2x ae2:annihilation_core')
      .inputFluids(Fluid.of('gtceu:tin', 144))
      .circuit(3)
      .duration(114)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.recipes.gtceu.assembler('ae_annihilation_core_b')
      .itemInputs('4x #forge:fine_wires/fluix_alloy', '1x #forge:plates/nether_quartz', '1x ae2:logic_processor', '1x #gtceu:circuits/mv')
      .itemOutputs('2x ae2:annihilation_core')
      .inputFluids(Fluid.of('gtceu:soldering_alloy', 72))
      .circuit(3)
      .duration(114)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)
  event.remove({ id: 'ae2:network/parts/panels_semi_dark_monitor'})
  event.recipes.gtceu.assembler('ae_semi_dark_monitor')
      .itemInputs('8x #forge:fine_wires/conductive_alloy', '2x #forge:dusts/glowstone', '2x #forge:plates/certus_alloy', '3x ae2:quartz_glass', '1x #gtceu:circuits/hv')
      .itemOutputs('1x ae2:semi_dark_monitor')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
      .duration(198)
      .EUt(1920)
      .cleanroom(CleanroomType.CLEANROOM)

  event.remove({ id: 'ae2:network/crystal_resonance_generator'})
  event.recipes.gtceu.assembler('ae_crystal_resonance_generator')
      .itemInputs('8x #forge:fine_wires/fluix_alloy', '16x #forge:foils/quartz_copper_alloy', '4x #forge:rods/tungsten_steel', '4x #forge:plates/certus_alloy', '1x #forge:storage_blocks/fluix_alloy', '1x #gtceu:circuits/iv')
      .itemOutputs('1x ae2:crystal_resonance_generator')
      .inputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 288))
      .duration(320)
      .EUt(7680)

  //computer
  event.replaceInput({mod:'computercraft', type: 'crafting_shapeless', output:'computercraft:disk'}, 'minecraft:paper' , 'gtceu:polyethylene_plate')
  event.replaceInput({mod:'computercraft', type: 'crafting_shaped'}, 'minecraft:stone' , 'gtceu:invar_plate')
  event.replaceInput({mod:'computercraft', type: 'crafting_shaped'}, 'minecraft:gold_ingot' , 'gtceu:tantalum_carbide_plate')
  event.replaceInput({mod:'computercraft', type: 'crafting_shaped', output:'computercraft:computer_normal'}, 'minecraft:redstone' , '#gtceu:circuits/hv')
  event.replaceInput({mod:'computercraft', type: 'crafting_shaped', output:'computercraft:computer_advanced'}, 'minecraft:redstone' , '#gtceu:circuits/iv')
  event.remove({ id: 'computercraft:pocket_computer_normal' })
  event.recipes.gtceu.assembler('pocket_computer_normal')
      .itemInputs('gtceu:mv_machine_casing', '#forge:plates/aluminium', 'gtceu:fine_aluminium_wire', 'gtceu:iron_rotor', 'gtceu:plastic_printed_circuit_board', '#gtceu:circuits/hv')
      .itemOutputs('computercraft:pocket_computer_normal')
      .inputFluids(Fluid.of('gtceu:polyethylene', 36))
      .duration(200)
      .EUt(120)
  event.remove({ id: 'computercraft:pocket_computer_advanced' })
  event.recipes.gtceu.assembler('pocket_computer_advanced')
      .itemInputs('gtceu:hv_machine_casing', '#forge:plates/aluminium', 'gtceu:fine_tantalum_wire', 'gtceu:iron_rotor', 'gtceu:epoxy_printed_circuit_board', '#gtceu:circuits/ev')
      .itemOutputs('computercraft:pocket_computer_advanced')
      .inputFluids(Fluid.of('gtceu:polyethylene', 36))
      .duration(200)
      .EUt(480)
  event.remove({ id: 'computercraft:computer_advanced_upgrade' })
  event.remove({ id: 'computercraft:pocket_computer_advanced_upgrade' })
  event.remove({ id: 'computercraft:turtle_advanced_upgrade' })
})
