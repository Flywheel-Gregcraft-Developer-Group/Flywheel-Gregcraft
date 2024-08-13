GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("yinyang")
    event.create("reinforced_yinyang")
})

GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('sourcium', 115, 125, -1, null, 'So', false)
    event.create('soulium', 121, 168, -1, null, 'Sl', false)
    event.create('shadium', 122, 175, -1, null, 'Sh', false)
    event.create('sculkium', 124, 176, -1, null, 'Sk', false)
    event.create('ambrosium', 140, 177, -1, null, 'Ab', false)
    event.create('dragonium', 172, 190, -1, null, 'Dg', false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
    const $WireProperties = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
    GTMaterials.RedAlloy.setProperty($PropertyKey.WIRE, new $WireProperties(GTValues.V[GTValues.ULV], 1, 0))

    /*
    event.create('shadow_mixture')
        .fluid()
        .color(0x000000)
    event.create('sculk_mixture')
        .fluid()
        .color(0x003333)
    event.create('refined_radium_mixture')
        .fluid()
        .color(0xFFFFFF)
    */
    event.create('sap')
        .fluid()
        .color(0xFF8000)
    event.create('syrup')
        .fluid()
        .color(0xB32D00)
    event.create('cloud')
        .fluid()
        .color(0xE6FFFF)
    /*
    event.create('hot_sodium_potassium')
        .fluid()
        .color(0x00FF99)
    event.create('hot_fluid_space')
        .fluid()
        .color(0x0C0028)
    */
    event.create("moon_stone")
        .dust()
        .color(0x304750)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('liquid_hydrogen')
        .fluid()
        .color(0x0000FF)
    event.create('mars_air')
        .fluid()
        .color(0xFF9966)
    event.create("mars_stone")
        .dust()
        .color(0xFFAA80)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('liquid_mars_air')
        .fluid()
        .color(0xFF661A)
    event.create('venus_air')
        .fluid()
        .color(0xE6E600)
    event.create("venus_stone")
        .dust()
        .color(0xF9D286)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('liquid_venus_air')
        .fluid()
        .color(0x999900)
    event.create("mercury_stone")
        .dust()
        .color(0x66004D)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('glacio_air')
        .fluid()
        .color(0x9EFAFA)
    event.create("glacio_stone")
        .dust()
        .color(0xB3B3FF)
        .iconSet(GTMaterialIconSet.DULL)
    event.create('liquid_glacio_air')
        .fluid()
        .color(0x3DF5F5)
    event.create('space')
        .fluid()
        .color(0x00000A)
    event.create('liquid_space')
        .fluid()
        .color(0x00000A)
    event.create('bio_sticker')
        .fluid()
        .color(0xFCF1CF)
    event.create('particle_sticker')
        .fluid()
        .color(0xE6FCCF)
    event.create('ultimate_sticker')
        .fluid()
        .color(0xF1CFFC)
    event.create('methane_rocket_fuel')
        .fluid()
        .color(0xD7ECAA)
    event.create('cryo_fuel')
        .fluid()
        .color(0xD7ECF8)
    event.create('advanced_cryo_fuel')
        .fluid()
        .color(0xE8FBFE)
    event.create('trifuel')
        .fluid()
        .color(0xE366FF)
    event.create('nuclear_saltwater')
        .fluid()
        .color(0xA4F4AD)
    event.create('fusion_rocket_fuel')
        .fluid()
        .color(0xFFD966)

    event.create("copper_alloy")
        .ingot()
        .fluid()
        .dust()
        .color(0x996633)
        .blastTemp(1100, "low", 120, 680)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x annealed_copper', '1x silicon')
    event.create("energetic_alloy")
        .ingot()
        .fluid()
        .dust()
        .color(0xFFA31A)
        .blastTemp(2000, "low", 480, 1130)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x red_alloy', '1x electrum')
    event.create("vibrant_alloy")
        .ingot()
        .fluid()
        .dust()
        .color(0xCCFF66)
        .blastTemp(2600, "low", 480, 1350)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x energetic_alloy', '1x ender_pearl')
    event.create("redstone_alloy")
        .ingot()
        .fluid()
        .dust()
        .color(0xFF3300)
        .blastTemp(1500, "low", 120, 910)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x red_alloy', '1x silicon')
        .cableProperties(GTValues.V[GTValues.LV], 1, 0, true)
    event.create("conductive_alloy")
        .ingot()
        .fluid()
        .dust()
        .color(0xFF6666)
        .blastTemp(2800, "low", 480, 1580)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x copper_alloy', '1x tin_alloy', '1x redstone_alloy')
        .cableProperties(GTValues.V[GTValues.MV], 2, 0, true)
    event.create("pulsating_alloy")
        .ingot()
        .fluid()
        .dust()
        .color(0x29A329)
        .blastTemp(1800, "low", 480, 1090)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x tin_alloy', '1x ender_pearl')
    
    event.create("naturium")
        .fluid()
        .color(0x84E184)
    /*
    event.create("echorite")
        .ingot()
        .fluid()
        .color(0x004d4d)
        .blastTemp(10000, "highest", GTValues.V[GTValues.UHV])
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.UHV], 4, 16, false)
    */
    event.create("netherite")
        .ingot()
        .fluid()
        .color(0x330C00)
        .blastTemp(3100, "mid", 1920, 2350)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.EV], 8, 4, false)
    event.create("enderite")
        .ingot()
        .fluid()
        .color(0x003333)
        .blastTemp(5200, "high", 30720, 2620)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.LuV], 4, 2, false)
    event.create("shadium")
        .dust()
        .fluid()
        .ingot()
        .blastTemp(2980, "high", 30720, 280)
        .element(GTElements.get("shadium"))
        .color(0x1a0000)
        .iconSet(GTMaterialIconSet.METALLIC)
    event.create("sculkium")
        .dust()
        .fluid()
        .ingot()
        .blastTemp(4510, "high", 7680, 760)
        .element(GTElements.get("sculkium"))
        .color(0x009999)
        .iconSet(GTMaterialIconSet.METALLIC)
    event.create("sourcium")
        .dust()
        .fluid()
        .element(GTElements.get("sourcium"))
        .color(0xcc00ff)
        .iconSet(GTMaterialIconSet.DULL)
    event.create("soursteel")
        .ingot()
        .dust()
        .fluid()
        .color(0x3D0099)
        .iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(4000, "mid", 7680, 1410)
        .flags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FOIL)
        .components('1x sourcium', '1x tungsten_steel')
    event.create("managold")
        .ingot()
        .dust()
        .fluid()
        .color(0xFFFF99)
        .iconSet(GTMaterialIconSet.METALLIC)
        .blastTemp(3200, "mid", 1920, 1230)
        .flags(GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE)
        .cableProperties(GTValues.V[GTValues.EV], 3, 3, false)
        .components('1x sourcium', '1x rose_gold')
    event.create("dragonium")
        .dust()
        .ingot()
        .fluid()
        .element(GTElements.get("dragonium"))
        .color(0xff00ff)
        .iconSet(GTMaterialIconSet.DULL)
    /*
    event.create("polydralistic")
        .fluid()
        .polymer()
        .ingot()
        .dust()
        .color(0xff99ff)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_FOIL)
    event.create("echopolydralistic")
        .fluid()
        .polymer()
        .ingot()
        .dust()
        .color(0x248f8f)
        .iconSet(GTMaterialIconSet.DULL)
        .flags(GTMaterialFlags.GENERATE_FOIL)
    */
    event.create("keke_matter")
        .dust()
        .fluid()
        .color(0xDA89F5)
        .iconSet(GTMaterialIconSet.DULL)
    event.create("enriched_keke_matter")
        .fluid()
        .color(0xC31FF9)
        .iconSet(GTMaterialIconSet.DULL)
    event.create("quantum_eye")
        .dust()
        .color(0xCC3399)
        .iconSet(GTMaterialIconSet.DULL)
    event.create("soulium")
        .dust()
        .fluid()
        .color(0x4D3300)
        .element(GTElements.get("soulium"))
        .iconSet(GTMaterialIconSet.DULL)

    event.create("dark_steel")
        .ingot()
        .fluid()
        .dust()
        .color(0x9999A5)
        .blastTemp(3300, "mid", 1920, 1760)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x black_steel', '1x obsidian')
    event.create("soularium")
        .ingot()
        .dust()
        .fluid()
        .color(0x4A3B1C)
        .blastTemp(3000, "mid", 1920, 1440)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x soulium', '1x managold')
        .cableProperties(GTValues.V[GTValues.HV], 2, 0, true)
    event.create("end_steel")
        .ingot()
        .fluid()
        .dust()
        .color(0xF2F687)
        .blastTemp(3500, "mid", 1920, 1980)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('1x ender_pearl', '1x dark_steel', '1x obsidian', '1x blaze')
    event.create("multiplite")
        .ingot()
        .fluid()
        .dust()
        .color(0xFF33BB)
        .blastTemp(5000, "mid", 7680, 1010)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('2x refined_radiance', '1x dragonium', '4x managold')
    event.create("durasteel")
        .ingot()
        .fluid()
        .dust()
        .color(0x7A1F5C)
        .blastTemp(4400, "mid", 7680, 2090)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('4x shadow_steel', '1x netherite', '2x red_alloy')
    event.create("yinyang")
        .ingot()
        .fluid()
        .blastTemp(4500, "mid", 7680, 2980)
        .iconSet(GTMaterialIconSet.getByName("yinyang"))
        .flags(GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.LuV], 4, 2, false)
        .components('1x refined_radiance', '1x shadow_steel', '2x sourcium')
    event.create("reinforced_yinyang")
        .ingot()
        .fluid()
        .blastTemp(8250, "higher", 122880, 3130)
        .iconSet(GTMaterialIconSet.getByName("reinforced_yinyang"))
        .flags(GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.UV], 8, 4, false)
        .components('1x yinyang', '1x multiplite', '1x durasteel', '2x dragonium')
    event.create("quantum_fluix")
        .dust()
        .color(0x8C1AFF)
        .iconSet(GTMaterialIconSet.DULL)
    event.create("certus_alloy")
        .ingot()
        .dust()
        .fluid()
        .color(0xF6EFF6)
        .blastTemp(3300, "low", 1920, 1250)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
        .components('5x certus_quartz', '1x platinum', '4x titanium')
    event.create("quartz_copper_alloy")
        .ingot()
        .dust()
        .fluid()
        .color(0xE85E30)
        .blastTemp(3500, "low", 1920, 1140)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
        .components('2x nether_quartz', '1x tungsten', '2x copper_alloy')
    event.create("fluix_alloy")
        .ingot()
        .dust()
        .fluid()
        .color(0x7867FF)
        .blastTemp(3600, "mid", 7680, 1660)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('2x quantum_fluix', '2x managold', '1x titanium')
        .cableProperties(GTValues.V[GTValues.EV], 4, 0, true)
    event.create("dragonplatinum_alloy")
        .ingot()
        .dust()
        .fluid()
        .color(0xFBDEFF)
        .blastTemp(4800, "high", 7680, 1590)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('2x soursteel', '2x quantum_fluix', '2x dragonium', '3x platinum')
        .cableProperties(GTValues.V[GTValues.IV], 4, 0, true)
    event.create("superconductive_yinyang")
        .ingot()
        .dust()
        .fluid()
        .color(0xD4DBF7)
        .blastTemp(6600, "high", 30720, 1330)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('2x yinyang', '2x dragonplatinum_alloy', '1x osmium')
        .cableProperties(GTValues.V[GTValues.LuV], 6, 0, true)
    event.create("yinyang_star_alloy")
        .ingot()
        .dust()
        .fluid()
        .color(0xF7FEF7)
        .blastTemp(7700, "higher", 122880, 1000)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('7x reinforced_yinyang', '8x dragonplatinum_alloy', '1x nether_star')
        .cableProperties(GTValues.V[GTValues.ZPM], 6, 0, true)
    event.create("hyper_enderite")
        .ingot()
        .dust()
        .fluid()
        .color(0x445D5F)
        .blastTemp(9000, "higher", 491520, 780)
        .iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_FRAME)
        .components('3x enderite', '3x yinyang_star_alloy', '4x naquadria', '2x darmstadtium')
        .cableProperties(GTValues.V[GTValues.UV], 8, 0, true)
})

StartupEvents.registry("block", event => {
    event.create("soursteel_casing", "basic")
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
    event.create("shully_casing", "basic")
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
    event.create("shully_reactor_block", "basic")
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
    event.create("particle_filter_block", "basic")
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
    event.create("particle_stabilizing_block", "basic")
        .noValidSpawns(true)
        .soundType("metal")
        .mapColor("metal")
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
})