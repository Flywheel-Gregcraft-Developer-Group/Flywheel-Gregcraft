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

    let voltage = [8, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080]

    function bioclone(mob, output, egg, size, tier) {
        event.recipes.gtceu.biological_cloner('biocloner_'+mob+'_a')
            .itemInputs('1x kubejs:gene_of_'+mob, '1x gtceu:stem_cells')
            .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 200*size*tier), Fluid.of('gtceu:salt_water', 2000*size*tier))
            .itemOutputs('1x kubejs:ep_empty')
            .itemOutputs(output)
            .duration(200*size)
            .EUt(voltage[tier+5])
            .circuit(1)
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
        event.recipes.gtceu.biological_cloner('biocloner_'+mob+'_b')
            .itemInputs('1x kubejs:gene_of_'+mob, '1x gtceu:stem_cells')
            .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 100*size*tier), Fluid.of('gtceu:salt_water', 500*size*tier))
            .itemOutputs('1x kubejs:ep_empty', '1x '+egg)
            .duration(50*size)
            .EUt(voltage[tier+5])
            .circuit(2)
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
    }

    bioclone('chicken', ['2x minecraft:chicken', '4x minecraft:egg', '8x minecraft:feather'], 'minecraft:chicken_spawn_egg', 2, 1)
    bioclone('cow', ['4x minecraft:beef', '4x minecraft:leather'], 'minecraft:cow_spawn_egg', 5, 1)
    bioclone('sheep', ['3x minecraft:mutton', '4x minecraft:white_wool'], 'minecraft:sheep_spawn_egg', 4, 1)
    bioclone('pig', ['3x minecraft:porkchop', '2x farmersdelight:ham'], 'minecraft:pig_spawn_egg', 3, 1)

    bioclone('shulker', ['2x minecraft:shulker_shell'], 'minecraft:shulker_spawn_egg', 3, 2)
})