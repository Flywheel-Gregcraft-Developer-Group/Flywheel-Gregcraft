execute as @e[tag=lightning] at @s run summon minecraft:lightning_bolt
execute as @e[tag=lightning] at @s run effect give @e[distance=..3,type=player] cataclysm:stun 5 0
execute as @e[tag=lightning] at @s run effect give @e[distance=..3,type=player] minecraft:wither 20 0
kill @e[tag=lightning]
#say funky