ItemEvents.armorTierRegistry(event => {
    event.add('bronze', tier => {
        tier.slotProtections = [2, 5, 6, 2]
        tier.durabilityMultiplier = 12
        tier.toughness = 0
        tier.knockbackResistance = 0
        tier.enchantmentValue = 9
        tier.repairIngredient = '#forge:ingots/bronze'
        tier.equipSound = 'minecraft:item.armor.equip_iron'
    })
    event.add('wrought_iron', tier => {
        tier.slotProtections = [2, 6, 7, 2]
        tier.durabilityMultiplier = 18
        tier.toughness = 0
        tier.knockbackResistance = 0
        tier.enchantmentValue = 9
        tier.repairIngredient = '#forge:ingots/wrought_iron'
        tier.equipSound = 'minecraft:item.armor.equip_iron'
    })
    event.add('steel', tier => {
        tier.slotProtections = [3, 6, 7, 3]
        tier.durabilityMultiplier = 24
        tier.toughness = 0.5
        tier.knockbackResistance = 0
        tier.enchantmentValue = 10
        tier.repairIngredient = '#forge:ingots/steel'
        tier.equipSound = 'minecraft:item.armor.equip_iron'
    })
    event.add('stainless_steel', tier => {
        tier.slotProtections = [3, 7, 8, 3]
        tier.durabilityMultiplier = 30
        tier.toughness = 1
        tier.knockbackResistance = 0
        tier.enchantmentValue = 10
        tier.repairIngredient = '#forge:ingots/stainless_steel'
        tier.equipSound = 'minecraft:item.armor.equip_diamond'
    })
    event.add('tungsten_steel', tier => {
        tier.slotProtections = [4, 8, 9, 4]
        tier.durabilityMultiplier = 38
        tier.toughness = 1.5
        tier.knockbackResistance = 0.1
        tier.enchantmentValue = 14
        tier.repairIngredient = '#forge:ingots/tungsten_steel'
        tier.equipSound = 'minecraft:item.armor.equip_diamond'
    })
    event.add('naquadah_alloy', tier => {
        tier.slotProtections = [5, 10, 11, 5]
        tier.durabilityMultiplier = 48
        tier.toughness = 3
        tier.knockbackResistance = 0.2
        tier.enchantmentValue = 18
        tier.repairIngredient = '#forge:ingots/naquadah_alloy'
        tier.equipSound = 'minecraft:item.armor.equip_diamond'
    })
    event.add('neutronium', tier => {
        tier.slotProtections = [9, 20, 22, 9]
        tier.durabilityMultiplier = 100
        tier.toughness = 5
        tier.knockbackResistance = 0.25
        tier.enchantmentValue = 25
        tier.repairIngredient = '#forge:ingots/neutronium'
        tier.equipSound = 'minecraft:block.beacon.activate'
    })
    event.add('chromatic_netherite', tier => {
        tier.slotProtections = [3, 7, 9, 4]
        tier.durabilityMultiplier = 40
        tier.toughness = 3
        tier.knockbackResistance = 0.1
        tier.enchantmentValue = 15
        tier.repairIngredient = '#forge:ingots/netherite'
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
    })
    event.add('yinyang', tier => {
        tier.slotProtections = [4, 8, 10, 4]
        tier.durabilityMultiplier = 50
        tier.toughness = 4
        tier.knockbackResistance = 0.15
        tier.enchantmentValue = 17
        tier.repairIngredient = 'gtceu:yinyang_ingot'
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
    })
    event.add('reinforced_yinyang', tier => {
        tier.slotProtections = [5, 11, 13, 5]
        tier.durabilityMultiplier = 75
        tier.toughness = 5
        tier.knockbackResistance = 0.2
        tier.enchantmentValue = 20
        tier.repairIngredient = 'gtceu:reinforced_yinyang_ingot'
        tier.equipSound = 'minecraft:item.armor.equip_netherite'
    })
    event.add('space_neutronium', tier => {
        tier.slotProtections = [15, 34, 36, 15]
        tier.durabilityMultiplier = 200
        tier.toughness = 10
        tier.knockbackResistance = 0.25
        tier.enchantmentValue = 25
        tier.repairIngredient = 'gtceu:space_neutronium_ingot'
        tier.equipSound = 'minecraft:block.beacon.activate'
    })
})

let armors = ['boots', 'leggings', 'chestplate', 'helmet']

StartupEvents.registry('item', event => {
    armors.forEach(a => {
        event.create('bronze_' + a, a).tier('bronze')
        event.create('wrought_iron_' + a, a).tier('wrought_iron')
        event.create('steel_' + a, a).tier('steel')
        event.create('stainless_steel_' + a, a).tier('stainless_steel')
        event.create('tungsten_steel_' + a, a).tier('tungsten_steel')
        event.create('naquadah_alloy_' + a, a).tier('naquadah_alloy')
        event.create('neutronium_' + a, a).tier('neutronium')
        event.create('chromatic_netherite_' + a, a).tier('chromatic_netherite')
        event.create('yinyang_' + a, a).tier('yinyang')
        event.create('reinforced_yinyang_' + a, a).tier('reinforced_yinyang')
        event.create('space_neutronium_' + a, a).tier('space_neutronium')
    })
})