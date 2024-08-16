##
 # miniboss.mcfunction
 # attacks
 #
 # Created by .
##

execute at @e[tag=monumentMarker,limit=1] unless entity @s[tag=spawnedMiniboss] unless entity @e[tag=miniboss] run summon skeleton ~ ~ ~ {CustomNameVisible:1b,Health:100f,Tags:["miniboss"],CustomName:'{"text":"往日英灵","color":"red","bold":false,"italic":false,"underlined":false}',HandItems:[{id:"minecraft:bow",Count:1b,tag:{display:{Name:'{"text":"旧日之弓","color":"dark_purple","italic":false}'},Enchantments:[{id:"minecraft:unbreaking",lvl:5s},{id:"minecraft:power",lvl:5s},{id:"minecraft:punch",lvl:3s},{id:"minecraft:flame",lvl:1s},{id:"minecraft:infinity",lvl:1s}]}},{}],ArmorItems:[{id:"kubejs:tungsten_steel_boots",Count:1b},{id:"kubejs:tungsten_steel_leggings",Count:1b,tag:{Enchantments:[{id:"minecraft:unbreaking",lvl:10s},{id:"minecraft:swift_sneak",lvl:1s}]}},{id:"kubejs:tungsten_steel_chestplate",Count:1b,tag:{Enchantments:[{id:"minecraft:protection",lvl:4s},{id:"minecraft:fire_protection",lvl:4s},{id:"minecraft:blast_protection",lvl:4s}]}},{id:"kubejs:tungsten_steel_helmet",Count:1b}],Attributes:[{Name:"generic.max_health",Base:100},{Name:"generic.follow_range",Base:100},{Name:"generic.movement_speed",Base:0.5}]}
execute unless entity @s[tag=spawnedMiniboss] run tag @s add spawnedMiniboss
