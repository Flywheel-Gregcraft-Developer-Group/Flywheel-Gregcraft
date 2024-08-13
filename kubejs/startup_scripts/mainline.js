StartupEvents.registry('item', event => {
    const circuits = [
        "echo",
        "quark",
        "timewarp",
        "blackhole",
    ]
    circuits.forEach((circuit) => {
        event.create(circuit + "_processor")
        event.create(circuit + "_assembly")
        event.create(circuit + "_computer")
        event.create(circuit + "_mainframe")
        event.create(circuit + "_circuit_board")
        event.create(circuit + "_printed_circuit_board")
    })

    const smds = [
        "ultra",
        "ultimate"
    ]

    smds.forEach((smd) => {
        event.create(smd + "_smd_capacitor")
        event.create(smd + "_smd_diode")
        event.create(smd + "_smd_resistor")
        event.create(smd + "_smd_transistor")
        event.create(smd + "_smd_inductor")
    })

    const grade_1s =
        ["uhv", "uev", "uiv", "uxv", "opv", "max"]
    grade_1s.forEach((grade_1) => {
        event.create(grade_1 + "_voltage_coil")
    })

    const levels =
        ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv", "uxv", "opv", "max"]
    levels.forEach((level) => {
        event.create(level + "_cosmic_brain")
    })

    event.create('electronic_mechanism')
    event.create('incomplete_electronic_mechanism')
    event.create('incomplete_cartridge')
    event.create('gunium')
    event.create('ammorum')
    event.create('naturium')
    event.create('ultimate_ball')
    event.create('ultimate_ingot')
    event.create('refined_essence')
    event.create('nature_essence')
    event.create('shadow_essence')
    event.create('void_essence')
    event.create('fission_bomb')
    event.create('fusion_bomb')
    event.create('neutron_bomb')
    event.create('storm_sacrifice')
    event.create('storm_sacrifice_step_one')
    event.create('storm_sacrifice_step_two')
    event.create('bedrock_drill_tier_one')
    event.create('bedrock_drill_tier_two')
    event.create('bedrock_drill_tier_three')
    event.create('bedrock_drill_tier_four')

    event.create('chromatic_upgrade_smithing_template')
    /*
    event.create('empty_nuclear_fuel_rod')
    event.create('thorium_fuel_rod')
    event.create('uranium_fuel_rod')
    event.create('radiance_fuel_rod')
    event.create('multiplite_fuel_rod')
    event.create('enriched_thorium_fuel_rod')
    event.create('enriched_uranium_fuel_rod')
    event.create('enriched_plutonium_fuel_rod')
    event.create('used_thorium_fuel_rod')
    event.create('used_uranium_fuel_rod')
    event.create('used_radiance_fuel_rod')
    event.create('used_multiplite_fuel_rod')
    event.create('used_enriched_thorium_fuel_rod')
    event.create('used_enriched_uranium_fuel_rod')
    event.create('used_enriched_plutonium_fuel_rod')
    */
})

StartupEvents.registry("block", event => {
    const coils = [
        ["caloechorite", "12600", "16", "8"],
        ["reinforced_space_neutronium", "14800", "32", "8"],
        ["cosmic_alloy", "21000", "64", "9"],
        ["infinity", "36000", "128", "9"]
    ]
    coils.forEach((coil) => {
        event.create(coil[0] + "_coil_block", "gtceu:coil")
            .texture("kubejs:block/" + coil[0] + "_coil_block")
            .temperature(coil[1])
            .energyDiscount(8)
            .level(coil[2])
            .tier(coil[3])
            .tagBlock("mineable/pickaxe")
            .hardness(5)
            .requiresTool(true)
            .soundType("metal")
            .mapColor("metal")
            .noValidSpawns(true)
    })
})