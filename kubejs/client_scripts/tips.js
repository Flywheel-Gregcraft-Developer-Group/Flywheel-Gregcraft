ItemEvents.tooltip(event => {
    event.add(["kubejs:echo_assembly",
        "kubejs:echo_computer",
        "kubejs:echo_mainframe",
        "kubejs:echo_processor"], "§7来自远古的智慧")
    event.add(["kubejs:quark_assembly",
        "kubejs:quark_computer",
        "kubejs:quark_mainframe",
        "kubejs:quark_processor"], "§7最小尺度的计算单元")
    event.add(["kubejs:timewarp_assembly",
        "kubejs:timewarp_computer",
        "kubejs:timewarp_mainframe",
        "kubejs:timewarp_processor"], "§7超越光速的运算")
    event.add(["kubejs:blackhole_assembly",
        "kubejs:blackhole_computer",
        "kubejs:blackhole_mainframe",
        "kubejs:blackhole_processor"], "§7没有什么东西跑得过它")
    event.add([
        "kubejs:ulv_cosmic_brain",
        "kubejs:lv_cosmic_brain",
        "kubejs:mv_cosmic_brain",
        "kubejs:hv_cosmic_brain",
        "kubejs:ev_cosmic_brain",
        "kubejs:iv_cosmic_brain",
        "kubejs:luv_cosmic_brain",
        "kubejs:zpm_cosmic_brain",
        "kubejs:uv_cosmic_brain",
        "kubejs:uhv_cosmic_brain",
        "kubejs:uev_cosmic_brain",
        "kubejs:uiv_cosmic_brain",
        "kubejs:uxv_cosmic_brain",
        "kubejs:opv_cosmic_brain",
        "kubejs:max_cosmic_brain"], ["§7囊括了整个宇宙的算力", "可自由拆分或组合成任意等级的电路"])
    event.add("kubejs:ulv_cosmic_brain", "§4ULV级电路")
    event.add("kubejs:lv_cosmic_brain", "§4LV级电路")
    event.add("kubejs:mv_cosmic_brain", "§4MV级电路")
    event.add("kubejs:hv_cosmic_brain", "§4HV级电路")
    event.add("kubejs:ev_cosmic_brain", "§4EV级电路")
    event.add("kubejs:iv_cosmic_brain", "§4IV级电路")
    event.add("kubejs:luv_cosmic_brain", "§4LuV级电路")
    event.add(["kubejs:zpm_cosmic_brain", "kubejs:echo_processor"], "§4ZPM级电路")
    event.add(["kubejs:uv_cosmic_brain", "kubejs:quark_processor", "kubejs:echo_assembly"], "§4UV级电路")
    event.add(["kubejs:uhv_cosmic_brain", "kubejs:timewarp_processor", "kubejs:quark_assembly", "kubejs:echo_computer"], "§4UHV级电路")
    event.add(["kubejs:uev_cosmic_brain", "kubejs:blackhole_processor", "kubejs:timewarp_assembly", "kubejs:quark_computer", "kubejs:echo_mainframe"], "§4UEV级电路")
    event.add(["kubejs:uiv_cosmic_brain", "kubejs:blackhole_assembly", "kubejs:timewarp_computer", "kubejs:quark_mainframe"], "§4UIV级电路")
    event.add(["kubejs:uxv_cosmic_brain", "kubejs:blackhole_computer", "kubejs:timewarp_mainframe"], "§4UXV级电路")
    event.add(["kubejs:opv_cosmic_brain", "kubejs:blackhole_mainframe"], "§4OpV级电路")
    event.add("kubejs:max_cosmic_brain", "§4MAX级电路")
    event.add("gtceu:greenhouse", ["大丰收时代到来！", "加速作物生长并大大增加产量，也适用于树木、花等植物。", "§7放入种子/树苗和生长基质，并通入水即可工作，加入肥料可进一步提升产率。"])
    event.add("gtceu:ammo_assembler", "批量生产现代弹药")
    event.add("gtceu:nuclear_implosion_compressor", ["原来的聚爆压缩机不够猛烈？用核弹试试！", "§7注：目前仅支持制造部分后期物品"])
    event.add("gtceu:genetic_extractor", "从生物身上提取基因！")
    event.add("gtceu:biological_cloner", "工业化量产生物成为可能！")
    event.add("gtceu:source_reactor", ["魔法师的新玩具！", "集成了各类魔法相关配方。"])
    event.add("gtceu:bedrock_miner", ["从基岩层的深处挖取星球上的各类矿脉！", "请准备好足够多的基岩钻头、钻井液，以及输出槽位。", "§7钻头等级越高，钻头本身和钻井液的损耗率越低，同时带来更多的产出。", "§7超频能够提高钻取速度和产出几率，但也会增加钻头损耗率。"])
    event.add("gtceu:large_bedrock_miner", ["更高效地挖空整个星球！", "请准备好非常多的基岩钻头、钻井液，以及输出槽位！"])
    event.add("gtceu:keke_generator", ["从潜影壳中提取精华，将质子转变成用之不竭的能量！", "(声明：和某石化公司没有任何关系)"])
    event.add("gtceu:cosmic_matter_collector", ["广阔的宇宙空间中有什么？它将为您揭示答案！", "该机器可以借助吸附剂从太空中收集有用的物质。"])
    event.add(["gtceu:large_bedrock_miner",
        "gtceu:nuclear_implosion_compressor", "gtceu:keke_generator", "gtceu:cosmic_matter_collector"], Text.keybind("gtceu.machine.perfect_oc"))
    event.add(["gtceu:large_bedrock_miner",
        "gtceu:nuclear_implosion_compressor"], Text.keybind("gtceu.multiblock.parallelizable.tooltip"))

    event.add("#forge:eggs", "§4碎碎！")
    event.add(["ends_delight:shulker_meat", "ends_delight:shulker_meat_slice", "ends_delight:roasted_shulker_meat", "ends_delight:roasted_shulker_meat_slice", "ends_delight:roasted_shulker_meat_slice", "ends_delight:stir_fried_shulker_meat", "ends_delight:grilled_shulker_block", "ends_delight:grilled_shulker", "beachparty:raw_mussel_meat", "beachparty:cooked_mussel_meat"], "§d贝贝那么可爱，为什么要吃掉~")
    event.add("#create:casing", "§7你需要不那么天马行空的想象力就能制造它")
})