ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:biological_cloner',
        ['PGP', 'CSC', 'LCL'],
        {
            P: 'gtceu:luv_electric_pump',
            G: 'gtceu:rhodium_plated_palladium_rotor',
            C: '#gtceu:circuits/luv',
            S: 'gtceu:clean_machine_casing',
            L: 'gtceu:niobium_titanium_single_cable'
        }
    ).id('gtceu:shaped/biological_cloner')

    event.recipes.gtceu.biological_cloner('biocloner_chicken_a')
        .circuit(1)
        .itemInputs('2x kubejs:gene_of_chicken', '2x gtceu:stem_cells')
        .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 1000),Fluid.of('gtceu:salt_water', 8000))
        .itemOutputs('2x kubejs:ep_empty', '4x minecraft:chicken', '8x minecraft:egg', '16x minecraft:feather')
        .duration(400)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
    event.recipes.gtceu.biological_cloner('biocloner_chicken_b')
        .circuit(2)
        .itemInputs('2x kubejs:gene_of_chicken', '2x gtceu:stem_cells')
        .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 500),Fluid.of('gtceu:salt_water', 2000))
        .itemOutputs('2x kubejs:ep_empty', '2x minecraft:chicken_spawn_egg')
        .duration(100)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
})