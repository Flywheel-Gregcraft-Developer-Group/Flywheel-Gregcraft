ServerEvents.recipes(event => {
  console.log('Ready to modify transport recipes.')
  //ship
  event.remove({ id: 'smallships:cannon' })
  event.recipes.create.mechanical_crafting('smallships:cannon', [
    'PPPP',
    'PPBM',
  ], {
    P: '#forge:plates/obsidian',
    M: 'create:precision_mechanism',
    B: 'createbigcannons:cannon_carriage'
  })
  event.recipes.create.mechanical_crafting('smallships:cannon', [
    'PPPP',
    'PPBM',
  ], {
    P: '#forge:plates/steel',
    M: 'create:precision_mechanism',
    B: 'createbigcannons:cannon_carriage'
  })
  event.recipes.create.mechanical_crafting('smallships:cannon', [
    'PPPP',
    'PPBM',
  ], {
    P: '#forge:plates/obsidian',
    M: 'immersive_aircraft:industrial_gears',
    B: 'createbigcannons:cannon_carriage'
  })
  event.recipes.create.mechanical_crafting('smallships:cannon', [
    'PPPP',
    'PPBM',
  ], {
    P: '#forge:plates/steel',
    M: 'immersive_aircraft:industrial_gears',
    B: 'createbigcannons:cannon_carriage'
  })

  //aircraft
  event.remove({ id: 'immersive_aircraft:hull' })
  event.shaped(Item.of('immersive_aircraft:hull',1), [
        'LLL',
        'AAA',
        'LLL'
    ],
    {
        A: '#forge:plates/obsidian',
        L: '#minecraft:logs'
    })
  event.shaped(Item.of('immersive_aircraft:hull',1), [
        'LLL',
        'AAA',
        'LLL'
    ],
    {
        A: '#forge:plates/steel',
        L: '#minecraft:logs'
    })
  event.remove({ id: 'immersive_aircraft:hull_reinforcement' })
  event.shaped(Item.of('immersive_aircraft:hull_reinforcement',1), [
        ' T ',
        'HHH',
        ' T '
    ],
    {
        T: 'createbigcannons:nethersteel_ingot',
        H: 'immersive_aircraft:hull'
    })
  event.shaped(Item.of('immersive_aircraft:hull_reinforcement',1), [
        'TTT',
        'HHH',
        'TTT'
    ],
    {
        T: '#forge:plates/aluminium',
        H: 'immersive_aircraft:hull'
    })
  event.remove({ id: 'immersive_aircraft:engine' })
  event.shaped(Item.of('immersive_aircraft:engine',1), [
        ' S ',
        'PFP',
        'SBS'
    ],
    {
        S: '#forge:plates/obsidian',
        B: 'immersive_aircraft:boiler',
        P: 'create_sa:fan_component',
        F: 'minecraft:blast_furnace'
    })
  event.shaped(Item.of('immersive_aircraft:engine',1), [
        ' S ',
        'PFP',
        'SBS'
    ],
    {
        S: '#forge:plates/steel',
        B: 'immersive_aircraft:boiler',
        P: 'create_sa:fan_component',
        F: 'minecraft:blast_furnace'
    })
  event.remove({ id: 'immersive_aircraft:boiler' })
  event.shaped(Item.of('immersive_aircraft:boiler',1), [
        'BBB',
        'B B',
        'BFB'
    ],
    {
        B: '#forge:plates/copper',
        F: 'minecraft:blast_furnace'
    })
  event.shaped(Item.of('immersive_aircraft:boiler',1), [
        'BBB',
        'B B',
        'BFB'
    ],
    {
        B: '#forge:plates/bronze',
        F: 'minecraft:furnace'
    })
  event.remove({ id: 'immersive_aircraft:steel_boiler' })
  event.shaped(Item.of('immersive_aircraft:steel_boiler',1), [
        'SSS',
        'SBS',
        'SFS'
    ],
    {
        S: '#forge:plates/obsidian',
        B: 'immersive_aircraft:boiler',
        F: 'minecraft:blast_furnace'
    })
  event.shaped(Item.of('immersive_aircraft:steel_boiler',1), [
        'SSS',
        'SBS',
        'SFS'
    ],
    {
        S: '#forge:plates/steel',
        B: 'immersive_aircraft:boiler',
        F: 'minecraft:blast_furnace'
    })
  event.remove({ id: 'immersive_aircraft:propeller' })
  event.shaped(Item.of('immersive_aircraft:propeller',1), [
        'BB ',
        ' I ',
        ' BB'
    ],
    {
        B: '#forge:plates/iron',
        I: '#forge:ingots/cast_iron'
    })
  event.remove({ id: 'immersive_aircraft:enhanced_propeller' })
  event.shaped(Item.of('immersive_aircraft:enhanced_propeller',1), [
        'CC ',
        ' P ',
        ' CC'
    ],
    {
        C: '#forge:plates/brass',
        P: 'immersive_aircraft:propeller'
    })
  event.shaped(Item.of('immersive_aircraft:enhanced_propeller',1), [
        'CC ',
        ' P ',
        ' CC'
    ],
    {
        C: '#forge:plates/bronze',
        P: 'immersive_aircraft:propeller'
    })
  event.remove({ id: 'immersive_aircraft:industrial_gears' })
  event.shaped(Item.of('immersive_aircraft:industrial_gears',1), [
        ' S ',
        'SBS',
        ' S '
    ],
    {
        S: 'gtceu:small_steel_gear',
        B: 'gtceu:steel_gear'
    })
  event.remove({ id: 'immersive_aircraft:sturdy_pipes' })
  event.shaped(Item.of('immersive_aircraft:sturdy_pipes',1), [
        '  C',
        'SCS',
        'C  '
    ],
    {
        S: 'create:fluid_pipe',
        C: '#forge:plates/obsidian'
    })
  event.remove({ id: 'immersive_aircraft:improved_landing_gear' })
  event.shaped(Item.of('immersive_aircraft:improved_landing_gear',1), [
        ' TT',
        'RRT',
        'RR '
    ],
    {
        T: '#forge:rods/aluminium',
        R: '#forge:plates/rubber'
    })
  event.shaped(Item.of('immersive_aircraft:improved_landing_gear',1), [
        ' TT',
        'RRT',
        'RR '
    ],
    {
        T: '#forge:rods/aluminium',
        R: '#forge:plates/silicone_rubber'
    })
  event.shaped(Item.of('immersive_aircraft:improved_landing_gear',1), [
        ' TT',
        'RRT',
        'RR '
    ],
    {
        T: '#forge:rods/aluminium',
        R: '#forge:plates/styrene_butadiene_rubber'
    })
  event.remove({ id: 'immersive_aircraft:bomb_bay' })
  event.shaped(Item.of('immersive_aircraft:bomb_bay',1), [
        'PFP',
        'PIP'
    ],
    {
        P: '#forge:plates/obsidian',
        F: 'minecraft:flint',
        I: '#forge:ingots/iron'
    })
  event.shaped(Item.of('immersive_aircraft:bomb_bay',1), [
        'PFP',
        'PIP'
    ],
    {
        P: '#forge:plates/steel',
        F: 'minecraft:flint',
        I: '#forge:ingots/iron'
    })
  event.shaped(Item.of('immersive_aircraft:rotary_cannon',1), [
        'D',
        'M',
        'I'
    ],
    {
        D: 'minecraft:dispenser',
        M: 'create:precision_mechanism',
        I: '#forge:ingots/copper'
    })
  event.remove({ id: 'immersive_aircraft:airship' })
  event.recipes.create.mechanical_crafting('immersive_aircraft:airship', [
    'SSSSS',
    'S   S',
    'SSSSS',
    'HHHHE'
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine'
  })
  event.remove({ id: 'immersive_aircraft:biplane' })
  event.recipes.create.mechanical_crafting('immersive_aircraft:biplane', [
    '  P  ',
    'HHEHH',
    '  H  ',
    '  H  '
  ], {
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller'
  })
  event.remove({ id: 'immersive_aircraft:gyrodyne' })
  event.recipes.create.mechanical_crafting('immersive_aircraft:gyrodyne', [
    '  H  ',
    'SSPSS',
    '  H  ',
    '  H  '
  ], {
    S: 'immersive_aircraft:sail',
    H: 'immersive_aircraft:hull',
    P: 'immersive_aircraft:propeller'
  })
  event.remove({ id: 'immersive_aircraft:quadrocopter' })
  event.recipes.create.mechanical_crafting('immersive_aircraft:quadrocopter', [
    'PBBBP',
    'BAHAB',
    'BHEHB',
    'BAHAB',
    'PBBBP'
  ], {
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    P: 'immersive_aircraft:propeller',
    B: 'minecraft:bamboo',
    A: 'create:precision_mechanism'
  })
  event.remove({ id: 'immersive_aircraft:warship' })
  event.recipes.create.mechanical_crafting('immersive_aircraft:warship', [
    'SSSSS',
    'SHHHS',
    'SSCSS',
    'EEGEE',
    'HHGHH'
  ], {
    H: 'immersive_aircraft:hull',
    E: 'immersive_aircraft:engine',
    G: 'immersive_aircraft:industrial_gears',
    C: 'immersive_aircraft:cargo_airship',
    S: 'immersive_aircraft:sail'
  })
})
