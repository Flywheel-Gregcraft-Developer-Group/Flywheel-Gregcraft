ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:nuclear_implosion_compressor',
        ['AEA', 'RSR', 'CWC'],
        {
            A: 'gtceu:uv_robot_arm',
            E: 'gtceu:uv_emitter',
            W: 'gtceu:yttrium_barium_cuprate_double_cable',
            C: '#gtceu:circuits/uv',
            R: 'gtnn:plate_radiation_protection',
            S: 'gtceu:implosion_compressor'
        }
    ).id('gtceu:shaped/nuclear_implosion_compressor')

    event.recipes.gtceu.assembler('nic_fission_bomb')
        .circuit(1)
        .itemInputs('16x gtceu:titanium_plate', '8x gtceu:tungsten_plate','4x gtceu:neutron_reflector','2x gtceu:uranium_235_ingot','2x gtceu:industrial_tnt')
        .itemOutputs('1x kubejs:fission_bomb')
        .duration(3560)
        .EUt(7680)
    event.recipes.gtceu.assembler('nic_fusion_bomb')
        .circuit(2)
        .itemInputs('16x gtceu:titanium_plate', '8x gtceu:tungsten_plate','4x gtceu:neutron_reflector','1x gtceu:plutonium_ingot','2x gtceu:lithium_dust','1x gtnn:neutron_source','4x gtceu:industrial_tnt')
        .inputFluids(Fluid.of('gtceu:deuterium', 1000))
        .itemOutputs('1x kubejs:fusion_bomb')
        .duration(3120)
        .EUt(30720)
    event.recipes.gtceu.assembler('nic_neutron_bomb')
        .circuit(3)
        .itemInputs('8x gtceu:dense_darmstadtium_plate', '8x gtnn:plate_radiation_protection', '4x gtceu:neutron_reflector','1x gtnn:neutron_source','1x ae2:singularity')
        .inputFluids(Fluid.of('gtceu:neutronium', 864))
        .itemOutputs('1x kubejs:neutron_bomb')
        .duration(2380)
        .EUt(491520)

    event.recipes.gtceu.nuclear_implosion_compressor('nic_ultimate_ball_a')
        .circuit(0)
        .itemInputs('2x kubejs:fission_bomb', '1x gtceu:reinforced_yinyang_ingot', '4x kubejs:naturium', '2x gtceu:enderite_ingot', '1x ae2:singularity')
        .itemOutputs('1x kubejs:ultimate_ball')
        .duration(1000)
        .EUt(122880)
    event.recipes.gtceu.nuclear_implosion_compressor('nic_ultimate_ball_b')
        .circuit(0)
        .itemInputs('1x kubejs:fusion_bomb', '1x gtceu:reinforced_yinyang_ingot', '2x kubejs:naturium', '1x gtceu:enderite_ingot', '1x ae2:singularity')
        .itemOutputs('1x kubejs:ultimate_ball')
        .duration(960)
        .EUt(122880)
    event.recipes.gtceu.nuclear_implosion_compressor('nic_ultimate_ingot')
        .circuit(0)
        .itemInputs('1x kubejs:neutron_bomb', '1x gtceu:reinforced_yinyang_ingot', '1x gtceu:enderite_ingot', '2x kubejs:naturium')
        .itemOutputs('1x kubejs:ultimate_ingot')
        .duration(400)
        .EUt(491520)
    event.recipes.gtceu.nuclear_implosion_compressor('ultimate_ball_compress_a')
        .circuit(1)
        .itemInputs('1x kubejs:fission_bomb', '16x kubejs:ultimate_ball')
        .itemOutputs('1x kubejs:ultimate_ingot')
        .duration(900)
        .EUt(122880)
    event.recipes.gtceu.nuclear_implosion_compressor('ultimate_ball_compress_b')
        .circuit(1)
        .itemInputs('1x kubejs:fusion_bomb', '9x kubejs:ultimate_ball')
        .itemOutputs('1x kubejs:ultimate_ingot')
        .duration(850)
        .EUt(122880)
    event.recipes.gtceu.nuclear_implosion_compressor('ultimate_ball_compress_c')
        .circuit(1)
        .itemInputs('1x kubejs:neutron_bomb', '4x kubejs:ultimate_ball')
        .itemOutputs('1x kubejs:ultimate_ingot')
        .duration(380)
        .EUt(491520)
    event.recipes.gtceu.nuclear_implosion_compressor('nic_crystal_matrix_a')
        .circuit(3)
        .itemInputs('2x kubejs:fission_bomb', '16x enderio:weather_crystal', '4x gtceu:energy_cluster', '8x gtceu:gravi_star', '1x ae2:singularity')
        .itemOutputs('1x avaritia:crystal_matrix_ingot')
        .duration(1080)
        .EUt(122880)
    event.recipes.gtceu.nuclear_implosion_compressor('nic_crystal_matrix_b')
        .circuit(3)
        .itemInputs('1x kubejs:fusion_bomb', '12x enderio:weather_crystal', '4x gtceu:energy_cluster', '6x gtceu:gravi_star', '1x ae2:singularity')
        .itemOutputs('1x avaritia:crystal_matrix_ingot')
        .duration(1020)
        .EUt(122880)
    event.recipes.gtceu.nuclear_implosion_compressor('nic_crystal_matrix_c')
        .circuit(3)
        .itemInputs('1x kubejs:neutron_bomb', '6x enderio:weather_crystal', '1x gtceu:energy_cluster', '2x gtceu:gravi_star')
        .itemOutputs('1x avaritia:crystal_matrix_ingot')
        .duration(500)
        .EUt(491520)
})