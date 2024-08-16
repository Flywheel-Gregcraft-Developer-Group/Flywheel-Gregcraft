/*
let music_list = {
    "disc_key": "Key - C418",
    "disc_door": "Door - C418",
    "disc_subwoofer_lullaby": "Subwoofer Lullaby - C418",
    "disc_living_mice": "Living Mice - C418",
    "disc_moog_city": "Moog City - C418",
    "disc_haggstrom": "Haggstrom - C418",
    "disc_minecraft": "Minecraft - C418",
    "disc_oxygene": "Oxygène - C418",
    "disc_equinoxe": "Équinoxe - C418",
    "disc_mice_on_venus": "Mice on Venus - C418",
    "disc_dry_hands": "Dry Hands - C418",
    "disc_wet_hands": "Wet Hands - C418",
    "disc_clark": "Clark - C418",
    "disc_chris": "Chris - C418",
    "disc_excuse": "Excuse - C418",
    "disc_sweden": "Sweden - C418",
    "disc_dog": "Dog - C418",
    "disc_danny": "Danny - C418",
    "disc_beginning": "Beginning - C418",
    "disc_droopy_likes_ricochet": "Droopy likes ricochet - C418",
    "disc_droopy_likes_your_face": "Droopy likes your face - C418"
}
*/
let music_list_alpha = {
    "disc_key": 65,
    "disc_door": 111,
    "disc_subwoofer_lullaby": 208,
    "disc_living_mice": 177,
    "disc_moog_city": 160,
    "disc_haggstrom": 204,
    "disc_minecraft": 254,
    "disc_oxygene": 65,
    "disc_equinoxe": 114,
    "disc_mice_on_venus": 281,
    "disc_dry_hands": 68,
    "disc_wet_hands": 90,
    "disc_clark": 191,
    "disc_chris": 87,
    "disc_excuse": 124,
    "disc_sweden": 215,
    "disc_dog": 145,
    "disc_danny": 254,
    "disc_beginning": 102,
    "disc_droopy_likes_ricochet": 96,
    "disc_droopy_likes_your_face": 116
}

let music_list_beta = {
    "disc_ki": 92,
    "disc_alpha": 603,
    "disc_dead_voxel": 296,
    "disc_blind_spots": 332,
    "disc_flake": 170,
    "disc_moog_city_2": 180,
    "disc_concrete_halls": 254,
    "disc_biome_fest": 378,
    "disc_mutation": 185,
    "disc_haunt_muskie": 361,
    "disc_warmth": 239,
    "disc_floating_trees": 244,
    "disc_aria_math": 310,
    "disc_kyoto": 249,
    "disc_ballad_of_the_cats": 275,
    "disc_taswell": 515,
    "disc_beginning_2": 176,
    "disc_dreiton": 497,
    "disc_the_end": 904
}

let music_list_ocean = {
    "disc_axolotl": 303,
    "disc_dragon_fish": 372,
    "disc_shuniji": 244
}

let music_list_nether = {
    "disc_chrysopoeia": 303,
    "disc_rubedo": 312,
    "disc_so_below": 318
}

let music_list_cac = {
    "disc_an_ordinary_day": 331,
    "disc_comforting_memories": 275,
    "disc_floating_dream": 205,
    "disc_ancestry": 343,
    "disc_infinite_amethyst": 271,
    "disc_left_to_bloom": 342,
    "disc_one_more_day": 278,
    "disc_stand_tall": 308,
    "disc_wending": 314
}

let music_list_wild = {
    "disc_aerie": 296,
    "disc_firebugs": 312,
    "disc_labyrinthine": 324
}

let music_list_tat = {
    "disc_a_familiar_room": 241,
    "disc_bromeliad": 312,
    "disc_crescent_dunes": 248,
    "disc_echo_in_the_wind": 296
}

let music_list_trial = {
    "disc_creator": 177,
    "disc_creator_music_box": 74,
    "disc_deeper": 303,
    "disc_eld_unknown": 296,
    "disc_endless": 402,
    "disc_featherfall": 344,
    "disc_komorebi": 287,
    "disc_pokopoko": 304,
    "disc_precipice": 299,
    "disc_puzzlebox": 299,
    "disc_watcher": 332,
    "disc_yakusoku": 271
}
/*
let music_list_dragon = {
    
}
*/
StartupEvents.registry("sound_event", event => {
    Object.keys(music_list_alpha).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_beta).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_ocean).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_nether).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_cac).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_wild).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_tat).forEach(value => {
        event.create(`music.${value}`)
    })
    Object.keys(music_list_trial).forEach(value => {
        event.create(`music.${value}`)
    })
})

StartupEvents.registry("item", event => {
	Object.entries(music_list_alpha).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/alpha')
	})
    Object.entries(music_list_beta).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/beta')
	})
    Object.entries(music_list_ocean).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/ocean')
	})
    Object.entries(music_list_nether).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/nether')
	})
    Object.entries(music_list_cac).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/cac')
	})
    Object.entries(music_list_wild).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/wild')
	})
    Object.entries(music_list_tat).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/tat')
	})
    Object.entries(music_list_trial).forEach((value) => {
		event.create(value[0], "music_disc")
			.song(`kubejs:music.${value[0]}`, value[1])
            .texture('fgcraft:item/disc/trial')
	})
})