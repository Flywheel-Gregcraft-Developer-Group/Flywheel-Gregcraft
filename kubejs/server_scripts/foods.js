ServerEvents.recipes(event => {
    event.shaped(Item.of('solapplepie:lunchbag',1), [
        ' P ',
        'P P',
        'PPP'
    ],
    {
        P: 'farmersdelight:canvas'
    })
    event.replaceInput({mod:'solapplepie', type: 'crafting_shaped', output:'solapplepie:lunchbox'}, '#forge:ingots/iron' , '#forge:plates/iron')
    event.replaceInput({mod:'solapplepie', type: 'crafting_shaped', output:'solapplepie:golden_lunchbox'}, '#forge:ingots/gold' , '#forge:plates/rose_gold')
})