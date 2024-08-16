ItemEvents.tooltip(event => {
    event.add(["kubejs:echo_assembly",
        "kubejs:echo_computer",
        "kubejs:echo_mainframe",
        "kubejs:echo_processor"], Text.keybind("kubejs.echo_tier_circuits.tooltip"))
    event.add(["kubejs:quark_assembly",
        "kubejs:quark_computer",
        "kubejs:quark_mainframe",
        "kubejs:quark_processor"], Text.keybind("kubejs.quark_tier_circuits.tooltip"))
    event.add(["kubejs:timewarp_assembly",
        "kubejs:timewarp_computer",
        "kubejs:timewarp_mainframe",
        "kubejs:timewarp_processor"], Text.keybind("kubejs.timewarp_tier_circuits.tooltip"))
    event.add(["kubejs:blackhole_assembly",
        "kubejs:blackhole_computer",
        "kubejs:blackhole_mainframe",
        "kubejs:blackhole_processor"], Text.keybind("kubejs.blackhole_tier_circuits.tooltip"))
    event.add([
        "kubejs:ulv_cosmic_brain",
        "kubejs:lv_cosmic_brain",
        "kubejs:mv_cosmic_brain",
        "kubejs:hv_cosmic_brain",
        "kubejs:ev_cosmic_brain",
        "kubejs:iv_cosmic_brain",
        "kubejs:luv_cosmic_brain",
        "kubejs:zpm_cosmic_brain",
        "kubejs:uv_cosmic_brain",
        "kubejs:uhv_cosmic_brain",
        "kubejs:uev_cosmic_brain",
        "kubejs:uiv_cosmic_brain",
        "kubejs:uxv_cosmic_brain",
        "kubejs:opv_cosmic_brain",
        "kubejs:max_cosmic_brain"], [Text.keybind("kubejs.ultimate_tier_circuits.tooltip.first"), Text.keybind("kubejs.ultimate_tier_circuits.tooltip.second")])
    event.add(["kubejs:ulv_cosmic_brain", "create_connected:control_chip"], Text.keybind("kubejs.circuits_tier.tooltip.ulv"))
    event.add(["kubejs:lv_cosmic_brain", "kubejs:electronic_mechanism"], Text.keybind("kubejs.circuits_tier.tooltip.lv"))
    event.add("kubejs:mv_cosmic_brain", Text.keybind("kubejs.circuits_tier.tooltip.mv"))
    event.add("kubejs:hv_cosmic_brain", Text.keybind("kubejs.circuits_tier.tooltip.hv"))
    event.add("kubejs:ev_cosmic_brain", Text.keybind("kubejs.circuits_tier.tooltip.ev"))
    event.add("kubejs:iv_cosmic_brain", Text.keybind("kubejs.circuits_tier.tooltip.iv"))
    event.add("kubejs:luv_cosmic_brain", Text.keybind("kubejs.circuits_tier.tooltip.luv"))
    event.add(["kubejs:zpm_cosmic_brain", "kubejs:echo_processor"], Text.keybind("kubejs.circuits_tier.tooltip.zpm"))
    event.add(["kubejs:uv_cosmic_brain", "kubejs:quark_processor", "kubejs:echo_assembly"], Text.keybind("kubejs.circuits_tier.tooltip.uv"))
    event.add(["kubejs:uhv_cosmic_brain", "kubejs:timewarp_processor", "kubejs:quark_assembly", "kubejs:echo_computer"], Text.keybind("kubejs.circuits_tier.tooltip.uhv"))
    event.add(["kubejs:uev_cosmic_brain", "kubejs:blackhole_processor", "kubejs:timewarp_assembly", "kubejs:quark_computer", "kubejs:echo_mainframe"], Text.keybind("kubejs.circuits_tier.tooltip.uev"))
    event.add(["kubejs:uiv_cosmic_brain", "kubejs:blackhole_assembly", "kubejs:timewarp_computer", "kubejs:quark_mainframe"], Text.keybind("kubejs.circuits_tier.tooltip.uiv"))
    event.add(["kubejs:uxv_cosmic_brain", "kubejs:blackhole_computer", "kubejs:timewarp_mainframe"], Text.keybind("kubejs.circuits_tier.tooltip.uxv"))
    event.add(["kubejs:opv_cosmic_brain", "kubejs:blackhole_mainframe"], Text.keybind("kubejs.circuits_tier.tooltip.opv"))
    event.add("kubejs:max_cosmic_brain", Text.keybind("kubejs.circuits_tier.tooltip.max"))
    event.add("gtceu:greenhouse", [Text.keybind("kubejs.multiblock_greenhouse.tooltip.first"), Text.keybind("kubejs.multiblock_greenhouse.tooltip.second"), Text.keybind("kubejs.multiblock_greenhouse.tooltip.third")])
    event.add("gtceu:ammo_assembler", Text.keybind("kubejs.multiblock_ammo_assembler.tooltip.first"))
    event.add("gtceu:nuclear_implosion_compressor", [Text.keybind("kubejs.multiblock_nuclear_implosion_compressor.tooltip.first"), Text.keybind("kubejs.multiblock_nuclear_implosion_compressor.tooltip.second")])
    event.add("gtceu:genetic_extractor", Text.keybind("kubejs.multiblock_genetic_extractor.tooltip.first"))
    event.add("gtceu:biological_cloner", Text.keybind("kubejs.multiblock_biological_cloner.tooltip.first"))
    event.add("gtceu:source_reactor", [Text.keybind("kubejs.multiblock_source_reactor.tooltip.first"), Text.keybind("kubejs.multiblock_source_reactor.tooltip.second")])
    event.add("gtceu:bedrock_miner", [Text.keybind("kubejs.multiblock_bedrock_miner.tooltip.first"), Text.keybind("kubejs.multiblock_bedrock_miner.tooltip.second"), Text.keybind("kubejs.multiblock_bedrock_miner.tooltip.third"), Text.keybind("kubejs.multiblock_bedrock_miner.tooltip.fourth")])
    event.add("gtceu:large_bedrock_miner", [Text.keybind("kubejs.multiblock_large_bedrock_miner.tooltip.first"), Text.keybind("kubejs.multiblock_large_bedrock_miner.tooltip.second")])
    event.add("gtceu:keke_generator", [Text.keybind("kubejs.multiblock_keke_generator.tooltip.first"), Text.keybind("kubejs.multiblock_keke_generator.tooltip.second")])
    event.add("gtceu:cosmic_matter_collector", [Text.keybind("kubejs.multiblock_cosmic_matter_collector.tooltip.first"), Text.keybind("kubejs.multiblock_cosmic_matter_collector.tooltip.second")])
    event.add(["gtceu:large_bedrock_miner",
        "gtceu:nuclear_implosion_compressor", "gtceu:keke_generator", "gtceu:cosmic_matter_collector"], Text.keybind("gtceu.machine.perfect_oc"))
    event.add(["gtceu:large_bedrock_miner",
        "gtceu:nuclear_implosion_compressor"], Text.keybind("gtceu.multiblock.parallelizable.tooltip"))

    event.add("#forge:eggs", Text.keybind("kubejs.misc_egg_breaking.tooltip"))
    event.add(["ends_delight:shulker_meat", "ends_delight:shulker_meat_slice", "ends_delight:roasted_shulker_meat", "ends_delight:roasted_shulker_meat_slice", "ends_delight:roasted_shulker_meat_slice", "ends_delight:stir_fried_shulker_meat", "ends_delight:grilled_shulker_block", "ends_delight:grilled_shulker", "ends_delight:shulker_omelette_mixture", "ends_delight:shulker_omelette", "ends_delight:shulker_soup", "ends_delight:ender_noodle", "ends_delight:end_barbecue_stick", "beachparty:raw_mussel_meat", "beachparty:cooked_mussel_meat"], Text.keybind("kubejs.misc_eating_beibei.tooltip"))
    event.add("#create:casing", Text.keybind("kubejs.misc_create_casing.tooltip"))
})