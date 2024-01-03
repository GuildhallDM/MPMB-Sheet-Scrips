/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Race
	Effect:		This script adds the player race "Warped"
				This is taken from the Kibbles' Compendium of Craft and Creation (https://www.kickstarter.com/projects/kibblestasty/kibbles-compendium-of-craft-and-creation)
	Code by:	Guildhall_DM
	Date:		01/03/2024
*/

var iFileName = "Race - Warped [KCCC].js";
RequiredSheetVersion(13);

SourceList["KCCC"] = {
	name : "Kibbles' Compendium of Craft and Creation",
	abbreviation : "KCCC",
	group : "Third Party",
	url : "https://www.kickstarter.com/projects/kibblestasty/kibbles-compendium-of-craft-and-creation",
	date : "09/20/2022"
};

RaceList["warped"] = {
	regExpSearch : /warped/i,
	name : "Warped",
	source : [["KCLL", 123]],
	plural : "Warped",
	size : [3, 4],
	speed : { walk : { spd : 30, enc : 20 } },
	languageProfs : ["Deep Speech", 1],
	age : " ages at the same rate as origin race.",
	height : " height is determined by origin race",
	weight : " weight is determined by origin race",
	scores : [0, 0, 1, 2, 0, 0],
	trait : [
		"Warped (+2 Intelligence, +1 Constitution)",
		"\u2022 Warped Origin: Select an existing race option. You gain the creature type, size, and languages of that race.",
		"\u2022 Inured of Madness: I have resistance to psychic damage and I automatically pass any saves against madness.",
		"\u2022 Inner voice: I can add 1d6 to an ability check I make an amount of times equal to my proficiency bonus.",
		"\u2022 Warped Gift: My condition grants me one special trait. See the Notes page for my 'Gifts'."].join(typePF ? "\n" : " "),
	dmgres : ["Psychic"],
	savetxt : {
		text : ["I automatically pass any saves against madness"]
	},
	features : {
			"inner voice" : {
				name : "Inner Voice",
				usages : "Proficiency bonus per",
				usagescalc : "event.value = How('Proficiency Bonus');",
				recovery : "long rest"
			}
	},
	toNotesPage : [{
		name : "Warped Gifts",
		source : [["KCCC", 123]],
		note : [
			"My condition grants me one special trait. Some may view it as a curse or burden, but I have adapted to using it to my advantage. Select one of the following options from the list below:",
			"\u2022 Warped Eyes: I have advantage on Wisdom (Perception) checks against living creatures, and disadvantage on Wisdom (Perception) checks against non-living things.",
			"\u2022 Warped Limb: One of my limbs is abnormally long ang flexible. Any weapon I wield in that hand gains the reach property.",
			"\u2022 Warped Mind: I am immune to magic that allows other creatures to read my thoughts, determine whether I am lying, know my alignment, or know my creature type. Creatures can telepathically communicate with me only if I allow it.",
			"\u2022 Warped Skin: My skin is a rough mottled hide. I have resistance to acid damage.",
			"\u2022 Warped Form: You can move through spaces for a smaller creatures without squeezing and when you aren’t wearing armor, your AC is 12 + your Constitution modifier. You can use your natural armor to determine your AC if the armor you wear would leave you with a lower AC. A shield’s benefits apply as normal while you use your natural armor."
		]
	}]
};

AddRacialVariant("warped", "warped eyes gift", {
	regExpSearch : /^(?=.*warped)(?=.*eyes).*$/i,
	source : [["KCLL", 123]],
	trait : RaceList.warped.trait.replace("warped eyes"),
	vision : [["Adv. on Perception against living creatures, and disadv. on Perception against non-living things.", 0]]
});
AddRacialVariant("warped", "warped limb gift", {
	regExpSearch : /^(?=.*warped)(?=.*limb).*$/i,
	source : [["KCLL", 123]],
	trait : RaceList.warped.trait.replace("warped limb"),
});
AddRacialVariant("warped", "warped mind gift", {
	regExpSearch : /^(?=.*warped)(?=.*mind).*$/i,
	source : [["KCLL", 123]],
	trait : RaceList.warped.trait.replace("warped mind"),
	savetxt : {
		text : ["I automatically pass any saves against madness and I am immune to magic that allows other creatures to read my thoughts. Telepathy doesn't work unless I allow it."]
	},
});
AddRacialVariant("warped", "warped skin gift", {
	regExpSearch : /^(?=.*warped)(?=.*skin).*$/i,
	source : [["KCLL", 123]],
	trait : RaceList.warped.trait.replace("warped skin"),
	dmgres : ["acid", "psychic"]
});
AddRacialVariant("warped", "warped form gift", {
	regExpSearch : /^(?=.*warped)(?=.*form).*$/i,
	source : [["KCLL", 123]],
	trait : RaceList.warped.trait.replace("warped form"),
	armorOptions : [{
        regExpSearch : /^(?=.*warped)(?=.*form).*$/i,
        name : "Warped Form (Con)",
        source : ["KCCC", 123],
        ac : "12+Con",
        affectsWildShape : true
    }],
    armorAdd : "Warped Form (Con)"
});
