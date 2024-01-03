/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.
	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Paladin, called "Oath of the Eldritch Hunt"
				This is taken from Steinhardt's Guide to the Eldritch Hunt (https://www.kickstarter.com/projects/monkey-dm/eldritch-hunt?ref=80vjq8)
				This subclass is made by Monkey DM
	Code by:	Guildhall_DM
	Date:		12-27-23
*/

var iFileName = "Paladin - Oath of the Eldritch Hunt (SGttEH).js";

SourceList["SGttEH"] = {
	name : "Steinhardt's Guide to the Eldritch Hunt",
	abbreviation : "SGttEH",
	group : "Third Party",
	url : "https://www.kickstarter.com/projects/monkey-dm/eldritch-hunt?ref=80vjq8",
	date : "08/18/22"
};
//ADDED SPELLS
SpellsList["spectral slash"] = {
	name : "Spectral Slash",
	classes : ["paladin", "ranger"],
	source : ["SGttEH", 107],
	level : 1,
	school : "Conj",
	time : "1 bns",
	range : "20 ft",
	components : "V,S,M",
	compMaterial : "A melee weapon worth at least 1 sp.",
	duration : "Instantaneous",
	description : "20 ft. range spectral slash, on a hit target takes 1d8 dmg. I can then use an action to move 20 ft. in straight line towards the target.",
	descriptionFull : "You send forth a spectral copy of yourself to strike down your foe. Make a melee spell attack against a creature within 20 feet of you. On a hit, the target takes 1d8 damage of your weapon’s damage type. \n   You can then use an action to move up to 20 feet in a straight line towards the target, streaking through a spectral trail, and take the Attack action against it. To use this action, you must attack with a melee weapon." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 and the range and distance you can move increase by 10 feet for each slot level above 1st."
};
SpellsList["displacing maw"] = {
	name : "Displacing Maw",
	classes : ["warlocK", "wizard"],
	source : ["SGttEH", 112],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "10 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Str",
	description : "Creature makes Str. save. On a fail, it takes 4d8 piercing dmg and is teleported 60 ft. Target takes half dmg. on a succ. save and is not teleported.",
	descriptionFull : "Your rib cage opens up violently, forming a maw that attempts to devour a creature within range. The creature must make a Strength saving throw. On a failure, it takes 4d8 piercing damage and is transported through magic to a point of your choice on the ground within 60 feet of you, where the maw reappears and regurgitates them. On a success, it takes half as much damage and is not transported." + AtHigherLevels + "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d8, and the teleportation range increases by 10 feet, for each slot level above 3rd."
};
SpellsList["spectral fury"] = {
	name : "Spectral Fury",
	classes : ["paladin", "ranger"],
	source : ["SGttEH", 113],
	level : 3,
	school : "Conj",
	time : "1 a",
	range : "30 ft",
	components : "V,S,M",
	compMaterial : "A melee weapon worth at least 1 sp.",
	duration : "Instantaneous",
	description : "30 ft. range 3 spectral slashes, roll for each slash, on a hit target takes 4d8 dmg. I can then use a bns. action to teleport 30 ft. in a straight line at 1 target.",
	descriptionFull : "You send forth three spectral duplicates of yourself to strike down enemies within 30 feet of you. You can order them to strike one target or several. Make a melee spell attack for each spectral duplicate. On a hit, a target takes 4d8 damage of your weapon’s damage type. \n   You can then use a bonus action to move up to 30 feet in a straight line towards one of the targets without provoking opportunity attacks, streaking through a spectral trail, and make a single melee weapon attack." + AtHigherLevels + "When you cast this spell using a	spell slot of 4th level or higher, the damage your spectral duplicates inflict increases by 2d8 for each slot level above 3rd."
};
SpellsList["maiden of bones"] = {
	name : "Maiden of Bones",
	classes : ["warlocK", "wizard"],
	source : ["SGttEH", 116],
	level : 4,
	school : "Conj",
	time : "1 a",
	range : "60 ft",
	components : "V,S,M",
	compMaterial : "A virgin's carpal bone.",
	duration : "1 m",
	save : "Str",
	description : "Creature makes Str save or be trapped in bones. It takes 3d6 piercing dmg. at the start of each turn in bones. Bone Maiden has AC 14 and 80 hp.",
	descriptionFull : "A creature within range must succeed on a Strength saving throw or be trapped inside an iron maiden formed of bone that appears in its space. The creature is considered restrained, incapacitated, behind total cover, can’t be damaged by attacks or effects originating from outside, and takes 3d6 piercing damage at the start of each of its turns as spikes of bone pierce its body. At the end of each of its turns, a trapped creature can repeat the saving throw, escaping and ending the spell on a success. The bone maiden has AC 14, 80 hit points, immunity to psychic and poison damage, and vulnerability to bludgeoning damage. If the maiden is destroyed, the creature trapped inside is freed and the spell ends."
};
//SUBCLASS INFO
AddSubClass("paladin", "oath of the eldritch hunt", {
	regExpSearch : /^(((?=.*(eldritch|hunter))((?=.*paladin)|((?=.*(exalted|sacred|holy|divine))(?=.*(knight|fighter|warrior|warlord|trooper)))))|((?=.*(eldritch|hunter))(?=.*(knight|fighter|warrior|warlord|trooper)))).*$/i,
	subname : "Oath of the Eldritch Hunt",
	source : ["SGttEH", 149],
	features : {
		"subclassfeature3" : {
			name : "Channel Divinity: Hunt the Prey",
			source : ["SGttEH", 150],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can designate a creature within 60 ft., marking it for 1 min.",
				"As a part of casting this channel divinity, and as a bonus action on subsequent turns, I can magically teleport up to 30 ft. to an unoccupied space within 5 ft. of the marked target."
			]),
			action : ["bonus action", ""],
			spellcastingExtra : ["faerie fire", "spectral slash", "moon beam", "hold person", "displacing maw", "spectral fury", "black tentacles", "maiden of bones", "contact other plane", "hold monster"]
		},
		"subclassfeature3.1" : {
			name : "Channel Divinity: Stolen Eldritch Gift",
			source : ["SGttEH", 150],
			minlevel : 3,
			description : desc([
				"As a bonus action, I can enhance my body beyond my mortal limits for 10 min.",
				"I can add my Charisma modifier to any Athletics, Acrobatics, and Perception checks that I make."
			]),
			action : ["bonus action", ""]
		},
		"subclassfeature7" : {
			name : "Sharpened Senses",
			source : ["SGttEH", 150],
			minlevel : 7,
			description : desc([
				"I gain blindsight with a range of 10 ft.",
				"Within that range, I can effectively see anything that isn't behind total cover, even if I'm blinded or in darkness. Moreover, within that range, no creature can hide from me."
			]),
			additional : levels.map( function(n) {
				return (n < 7 ? "" : (n < 18 ? "10-foot range" : "30-foot range"));
			}),
			vision : [["Blindsight", 10]]
		},
		"subclassfeature15" : {
			name : "Find Weakness",
			source : ["SGttEH", 150],
			minlevel : 15,
			description : desc([
				"I have learned to read my prey to find any flaws they might possess. When I deal damage to a creature, I learn any damage resistances, immunities, or vulnerabilities that it has.",
				"In addition, whenever I use my Hunt the Prey channel divinity, I can make a single weapon attack against the marked target when I reappear, as part of the same bonus action."
			]),
		},
		"subclassfeature20" : {
			name : "Perfect Hunter",
			source : ["SGttEH", 150],
			minlevel : 20,
			description : desc([
				"As an bonus action, I channel the power of the true hunter for 1 minute and gain benefits:",
				" \u2022 See third page notes section"
			]),
			toNotesPage : [{
				name : "Perfect Hunter Benefits",
				popupName : "Oath of the Eldritch Hunt: Perfect Hunter",
				page3notes : true,
				note : [
					" \u2022 I become invisible",
					" \u2022 I cannot be grappled, restrained, or paralyzed",
					" \u2022 My weapon attacks deal an extra 1d8 necrotic damage, which bypasses resistance."
				]
			}],
			recovery : "long rest",
			usages : 1,
			action : ["bonus action", ""]
		}
	}
});