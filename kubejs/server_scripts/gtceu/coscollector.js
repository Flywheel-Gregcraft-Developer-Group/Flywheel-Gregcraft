ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler('particle_filter_block')
        .circuit(6)
        .itemInputs('4x #forge:plates/darmstadtium', '1x gtceu:radiation_protection_frame', '8x #forge:foils/enriched_naquadah_trinium_europium_duranide', '2x gtceu:duranium_normal_fluid_pipe', '2x gtceu:item_filter')
        .itemOutputs('1x kubejs:particle_filter_block')
        .inputFluids(Fluid.of('gtceu:hyper_enderite', 288))
        .duration(112)
        .EUt(524288)
    event.recipes.gtceu.assembler('particle_stabilizing_block')
        .circuit(7)
        .itemInputs('4x #forge:plates/darmstadtium', '1x gtceu:radiation_protection_frame', '1x gtceu:zpm_field_generator', '1x gtceu:superconducting_coil', '4x gtceu:neutron_reflector', '8x #forge:foils/enriched_naquadah_trinium_europium_duranide', '4x gtceu:duranium_normal_fluid_pipe')
        .itemOutputs('1x kubejs:particle_stabilizing_block')
        .inputFluids(Fluid.of('gtceu:hyper_enderite', 288))
        .duration(124)
        .EUt(524288)
    
    event.recipes.gtceu.cosmic_matter_collector('space_collector_earth')
        .circuit(1)
        .chancedInput('1x kubejs:ultimate_ingot', 100, 0)
        .outputFluids(Fluid.of('gtceu:space', 1000))
        .duration(3244)
        .EUt(131072)
        .dimension('ad_astra:earth_orbit')
    event.recipes.gtceu.cosmic_matter_collector('space_collector_moon')
        .circuit(2)
        .chancedInput('1x kubejs:ultimate_ingot', 90, 0)
        .outputFluids(Fluid.of('gtceu:space', 1200))
        .duration(3244)
        .EUt(131072)
        .dimension('ad_astra:moon_orbit')
    event.recipes.gtceu.cosmic_matter_collector('space_collector_mars')
        .circuit(3)
        .chancedInput('1x kubejs:ultimate_ingot', 70, 0)
        .outputFluids(Fluid.of('gtceu:space', 1500))
        .duration(3244)
        .EUt(131072)
        .dimension('ad_astra:mars_orbit')
    event.recipes.gtceu.cosmic_matter_collector('space_collector_venus')
        .circuit(4)
        .chancedInput('1x kubejs:ultimate_ingot', 120, 0)
        .outputFluids(Fluid.of('gtceu:space', 900))
        .duration(3244)
        .EUt(131072)
        .dimension('ad_astra:venus_orbit')
    event.recipes.gtceu.cosmic_matter_collector('space_collector_mercury')
        .circuit(5)
        .chancedInput('1x kubejs:ultimate_ingot', 150, 0)
        .outputFluids(Fluid.of('gtceu:space', 700))
        .duration(3244)
        .EUt(131072)
        .dimension('ad_astra:mercury_orbit')
    event.recipes.gtceu.cosmic_matter_collector('space_collector_glacio')
        .circuit(6)
        .chancedInput('1x kubejs:ultimate_ingot', 20, 0)
        .outputFluids(Fluid.of('gtceu:space', 2000))
        .duration(3244)
        .EUt(131072)
        .dimension('ad_astra:glacio_orbit')
})