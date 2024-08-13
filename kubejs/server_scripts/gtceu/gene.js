ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:genetic_extractor',
        ['MGP', 'CSC', 'LCL'],
        {
            M: 'gtceu:luv_electric_motor',
            P: 'gtceu:luv_electric_pump',
            G: 'gtceu:luv_sensor',
            C: '#gtceu:circuits/luv',
            S: 'gtceu:clean_machine_casing',
            L: 'gtceu:niobium_titanium_single_cable'
        }
    ).id('gtceu:shaped/genetic_extractor')

    let voltage = [8, 30, 120, 480, 1920, 7680, 30720, 122880, 491520, 1966080]

    function gene(mob, no, input, size, tier) {
        event.recipes.gtceu.genetic_extractor('gene_'+mob+'_'+no)
            .itemInputs('1x '+input, size+'x kubejs:ep_empty')
            .inputFluids(Fluid.of('gtceu:ethanol', 20*size), Fluid.of('gtceu:chloroform', 40*size))
            .itemOutputs(size+'x kubejs:gene_of_'+mob)
            .duration(40+32*size)
            .EUt(voltage[tier+5])
            .circuit(no)
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
    }

    event.recipes.gtceu.extruder('ep_t1')
        .itemInputs('1x gtceu:small_polytetrafluoroethylene_dust')
        .notConsumable("gtceu:cell_extruder_mold")
        .itemOutputs('4x kubejs:ep_empty')
        .duration(116)
        .EUt(480)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
    event.recipes.gtceu.extruder('ep_t2')
        .itemInputs('1x gtceu:small_polybenzimidazole_dust')
        .notConsumable("gtceu:cell_extruder_mold")
        .itemOutputs('16x kubejs:ep_empty')
        .duration(116)
        .EUt(480)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    gene('chicken', 1, 'minecraft:chicken', 8, 1)
    gene('chicken', 2, 'minecraft:egg', 3, 1)
    gene('chicken', 3, 'minecraft:feather', 2, 1)
    gene('cow', 1, 'minecraft:beef', 12, 1)
    gene('cow', 2, 'minecraft:leather', 4, 1)
    gene('sheep', 1, 'minecraft:mutton', 10, 1)
    gene('sheep', 2, '#minecraft:wool', 3, 1)
    gene('pig', 1, 'minecraft:porkchop', 10, 1)
    gene('pig', 2, 'farmersdelight:ham', 12, 1)

    gene('shulker', 1, 'minecraft:shulker_shell', 6, 2)
})