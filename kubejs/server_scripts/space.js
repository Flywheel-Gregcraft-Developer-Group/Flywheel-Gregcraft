ServerEvents.recipes(event => {
    event.recipes.gtceu.large_chemical_reactor('methane_rocket_fuel')
        .inputFluids(Fluid.of('gtceu:liquid_oxygen', 2000), Fluid.of('gtceu:methane', 1000))
        .outputFluids(Fluid.of('gtceu:methane_rocket_fuel', 1000))
        .duration(152)
        .EUt(7680)
        .circuit(1)
    event.recipes.gtceu.large_chemical_reactor('cryo_fuel')
        .inputFluids(Fluid.of('gtceu:liquid_oxygen', 1000), Fluid.of('gtceu:liquid_hydrogen', 2000))
        .itemInputs('4x ad_astra:ice_shard')
        .outputFluids(Fluid.of('gtceu:cryo_fuel', 1000))
        .duration(54)
        .EUt(30720)
        .circuit(1)
    event.recipes.gtceu.large_chemical_reactor('advanced_cryo_fuel')
        .inputFluids(Fluid.of('gtceu:cryo_fuel', 1000), Fluid.of('gtceu:space', 100))
        .itemInputs('16x ad_astra:ice_shard')
        .outputFluids(Fluid.of('gtceu:advanced_cryo_fuel', 1000))
        .duration(134)
        .EUt(491520)
        .dimension('ad_astra:mars_orbit')
        .dimension('ad_astra:glacio_orbit')
    
    event.recipes.gtceu.rocket_engine('methane_fuel_generator')
        .inputFluids(Fluid.of('gtceu:methane_rocket_fuel', 1))
        .duration(3)
        .EUt(-2048)
    event.recipes.gtceu.rocket_engine('cryo_fuel_generator')
        .inputFluids(Fluid.of('gtceu:cryo_fuel', 1))
        .duration(6)
        .EUt(-2048)

    event.recipes.gtceu.gas_collector('mars_air_collector')
        .outputFluids(Fluid.of('gtceu:mars_air', 10000))
        .duration(200)
        .EUt(1024)
        .circuit(4)
        .dimension('ad_astra:mars')
    event.recipes.gtceu.gas_collector('venus_air_collector')
        .outputFluids(Fluid.of('gtceu:venus_air', 10000))
        .duration(200)
        .EUt(4096)
        .circuit(5)
        .dimension('ad_astra:venus')  
    event.recipes.gtceu.gas_collector('glacio_air_collector')
        .outputFluids(Fluid.of('gtceu:glacio_air', 10000))
        .duration(200)
        .EUt(65536)
        .circuit(6)
        .dimension('ad_astra:glacio')  

    event.recipes.gtceu.vacuum_freezer('mars_air_freezer')
        .inputFluids(Fluid.of('gtceu:mars_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_mars_air', 4000))
        .duration(80)
        .EUt(30720)
    event.recipes.gtceu.vacuum_freezer('venus_air_freezer')
        .inputFluids(Fluid.of('gtceu:venus_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_venus_air', 4000))
        .duration(80)
        .EUt(122880)
    event.recipes.gtceu.vacuum_freezer('glacio_air_freezer')
        .inputFluids(Fluid.of('gtceu:glacio_air', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_glacio_air', 4000))
        .duration(80)
        .EUt(1966080)
    event.recipes.gtceu.vacuum_freezer('space_freezer')
        .inputFluids(Fluid.of('gtceu:space', 4000))
        .outputFluids(Fluid.of('gtceu:liquid_space', 4000))
        .duration(80)
        .EUt(7864320)
        .dimension('ad_astra:mars_orbit')
        .dimension('ad_astra:glacio_orbit')

    event.recipes.gtceu.distillation_tower('mars_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_mars_air', 400000))
        .chancedOutput('1x gtceu:platinum_metal_dust', 2000, 0)
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 380000), 
            Fluid.of('gtceu:nitrogen', 12000),
            Fluid.of('gtceu:argon', 6000),
            Fluid.of('gtceu:methane', 1000),
            Fluid.of('gtceu:oxygen', 1000)
        )
        .duration(2000)
        .EUt(30720)
    event.recipes.gtceu.distillation_tower('venus_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_venus_air', 800000))
        .chancedOutput('1x gtceu:enriched_naquadah_oxide_mixture_dust', 3000, 0)
        .outputFluids(
            Fluid.of('gtceu:carbon_dioxide', 720000),
            Fluid.of('gtceu:nitrogen', 32000),
            Fluid.of('gtceu:sulfur_dioxide', 24000), 
            Fluid.of('gtceu:argon', 12000),
            Fluid.of('gtceu:carbon_monoxide', 6000),
            Fluid.of('gtceu:helium', 4000),
            Fluid.of('gtceu:neon', 2000)
        )
        .duration(2000)
        .EUt(122880)
    event.recipes.gtceu.distillation_tower('glacio_air_distillation')
        .inputFluids(Fluid.of('gtceu:liquid_glacio_air', 1600000))
        .chancedOutput('1x ad_astra:ice_shard', 5000, 0)
        .outputFluids(
            Fluid.of('gtceu:methane', 1440000),
            Fluid.of('gtceu:nitrogen', 40000),
            Fluid.of('gtceu:neon', 38000),
            Fluid.of('gtceu:argon', 32000),
            Fluid.of('gtceu:krypton', 24000),
            Fluid.of('gtceu:xenon', 16000),
            Fluid.of('gtceu:radon', 8000),
            Fluid.of('gtceu:oganesson', 2000)
        )
        .duration(2000)
        .EUt(1966080)

    event.recipes.gtceu.alloy_blast_smelter('space_neutronium_alloy')
        .circuit(1)
        .inputFluids(Fluid.of('gtceu:neutronium', 144), Fluid.of('gtceu:liquid_space', 250), Fluid.of('gtceu:oganesson', 250))
        .outputFluids(Fluid.of('gtceu:space_neutronium', 144))
        .blastFurnaceTemp(10800)
        .duration(160)
        .EUt(7864320)
        .dimension('ad_astra:mars_orbit')
        .dimension('ad_astra:glacio_orbit')
    
    event.remove({ id: 'gtceu:assembly_line/heavy_ingot_t4' })
    event.recipes.gtceu.research_station("1x_gtnn_heavy_ingot_t3")
        .itemInputs("gtceu:data_module", "gtnn:heavy_ingot_t3")
        .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_gtnn_heavy_ingot_t3\",research_type:\"gtceu:assembly_line\"}}"))
        .EUt(491520)
        .CWUt(128)
        .duration(128 * 8000)
        .data({
            "hide_duration": 1,
            "duration_is_total_cwu": 1
        })
    event.recipes.gtceu.assembly_line('heavy_ingot_t4_new')
        .itemInputs('1x gtnn:heavy_ingot_t3', '3x gtceu:dense_calorite_plate', '3x gtceu:dense_darmstadtium_plate', '4x gtceu:darmstadtium_bolt')
        .inputFluids(Fluid.of('gtceu:neutronium', 36))
        .itemOutputs('1x gtnn:heavy_ingot_t4')
        .duration(300)
        .EUt(1966080)
        .researchWithoutRecipe("1x_gtnn_heavy_ingot_t3", "gtceu:data_module")
    event.remove({ id: 'gtceu:assembler/t4_chip' })
    event.recipes.gtceu.research_station("1x_gtnn_t3_chip")
        .itemInputs("gtceu:data_module", "gtnn:t3_chip")
        .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_gtnn_t3_chip\",research_type:\"gtceu:assembly_line\"}}"))
        .EUt(491520)
        .CWUt(128)
        .duration(128 * 8000)
        .data({
            "hide_duration": 1,
            "duration_is_total_cwu": 1
        })
    event.recipes.gtceu.assembly_line('t4_chip_new')
        .itemInputs('1x computercraft:computer_advanced', '2x #gtceu:circuits/uv', '1x gtceu:computer_monitor_cover', '1x gtceu:uv_sensor', '1x gtceu:uv_emitter', '1x gtnn:heavy_plate_t4')
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 2304), Fluid.of('gtceu:bio_sticker', 576))
        .itemOutputs('1x gtnn:t4_chip')
        .duration(600)
        .EUt(1966080)
        .researchWithoutRecipe("1x_gtnn_t3_chip", "gtceu:data_module")
    event.remove({ id: 'gtceu:assembly_line/calorite_engine' })
    event.recipes.gtceu.research_station("1x_ad_astra_ostrum_engine")
        .itemInputs("gtceu:data_module", "ad_astra:ostrum_engine")
        .itemOutputs(Item.of("gtceu:data_module", "{assembly_line_research:{research_id:\"1x_ad_astra_ostrum_engine\",research_type:\"gtceu:assembly_line\"}}"))
        .EUt(491520)
        .CWUt(128)
        .duration(128 * 8000)
        .data({
            "hide_duration": 1,
            "duration_is_total_cwu": 1
        })
    event.recipes.gtceu.assembly_line('calorite_engine_new')
        .itemInputs('32x gtnn:heavy_plate_t4', '16x gtnn:heavy_plate_t3', '8x ad_astra:ostrum_engine', '2x gtnn:t4_chip', '8x ad_astra:ostrum_tank')
        .inputFluids(Fluid.of('gtceu:darmstadtium', 4032), Fluid.of('gtceu:hyper_enderite', 2016), Fluid.of('gtceu:neutronium', 144))
        .itemOutputs('1x ad_astra:calorite_engine')
        .duration(600)
        .EUt(1966080)
        .researchWithoutRecipe("1x_ad_astra_ostrum_engine", "gtceu:data_module")

    event.remove({ id: 'ad_astra:wrench' })
    event.recipes.gtceu.vacuum_freezer('liquid_hydrogen')
        .inputFluids(Fluid.of('gtceu:hydrogen', 1000))
        .outputFluids(Fluid.of('gtceu:liquid_hydrogen', 1000))
        .duration(360)
        .EUt(7680)
})