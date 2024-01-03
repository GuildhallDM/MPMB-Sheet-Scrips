/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Subclass
	Effect:		This script adds a subclass for the Cleric, called "Judgement"
				This is taken from Kibbles Tasty's Compendium of Legends and Legacies (https://www.kickstarter.com/projects/kibblestasty/kibbles-compendium-of-legends-and-legacies)
				This subclass is made by Kibbles Tasty
	Code by:	Guildhall_DM
	Date:		01-03-24
*/

var iFileName = "Cleric - Judgement Domain.js";
RequiredSheetVersion(13);

SourceList["KCLL"] = {
	name : "Cleric - Judgement Domain",
	abbreviation : "KCLL",
	group : "Third Party",
	url : "https://www.kickstarter.com/projects/kibblestasty/kibbles-compendium-of-legends-and-legacies",
	date : "10-03-23"
};

AddSubClass("cleric", "judgement domain", {
	regExpSearch : /^(?=.*(cleric|priest|clergy|acolyte))(?=.*judgement).*$/i,
	subname : "Judgement Domain",
	source : ["KCLL", 97],
	spellcastingExtra : ["sanctuary", "hellish rebuke", "detect thoughts", "zone of truth", "counterspell", "fear", "banishment", "locate creatue", "dispel good and evil", "geas"],
	features : {
		"subclassfeature1" : {
			name : "Bonus Cantrip",
			source : ["KCLL", 98],
			minlevel : 1,
			description : "\n   " + "I learn the Sacred Flame cantrip if I don't already know it",
			spellcastingBonus : {
				name : "Bonus Cantrip",
				spells : ["sacred flame"],
				selection : ["sacred flame"],
			}, 
		},
		"subclassfeature1.1" : {
			name : "Sacred Judgement",
			source : ["KCLL", 98],
			minlevel : 1,
			description : desc([
				"When I deal damage to a creature with a cleric spell, I can apply additional damage to a creature equal to my Wisdom modifier if that target has dealt damage to another creature since the end of my last turn."
			]),
			usages : "Wisdom modifier per",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature2" : {
			name : "Channel Divinity: Invoke Judgement",
			source : ["KCLL", 98],
			minlevel : 2,
			description : desc([
			"As an action, I crush a target within 60 ft. under the weight of their sins. On a failed WIS saving throw, the target is knocked prone and their movement speed is dropped to 0 for 1 min. The creature can repeat their saving throw at the end of each of their turns. They make this save disadvantage if they have dealt damage since the start of their turn. I can apply the bonus damage of Sacred Judgement when dealing damage with a Cleric spell to a creature I have Invoked Judgement on regardless if they have damaged another creature.",
			"This persists for 1 minute regardless of their save."
			]),
			action : ["action", ""]
		},
		"subclassfeature6" : {
			name : "Rebuke",
			source : ["KCLL", 98],
			minlevel : 6,
			description : desc([
				"When an allied creature within 60 feet of me is reduced to zero hit points or takes damage from another creature while under the effect of a sanctuary spell you cast, I can cast hellish rebuke against the attacker them without expending a spell slot."
			]),
			usages : "Wisdom modifier per",
			usagescalc : "event.value = Math.max(1, What('Wis Mod'));",
			recovery : "long rest"
		},
		"subclassfeature8" : {
			name : "Potent Cantrips",
			source : ["KCLL", 98],
			minlevel : 8,
			description : "\n   " + "I add my Wisdom modifier to the damage I deal with my cleric cantrips",
			calcChanges : {
				atkCalc : ["if (classes.known.cleric && classes.known.cleric.level > 7 && thisWeapon[4].indexOf('cleric') !== -1 && thisWeapon[3] && SpellsList[thisWeapon[3]].level === 0) { output.extraDmg += What('Wis Mod'); }; ", "My cleric cantrips get my Wisdom modifier added to their damage."]
			}
		},
		"subclassfeature17" : {
			name : "Eternal Judgement",
			source : ["KCLL", 98],
			minlevel : 17,
			description : desc([
			"My Sacred Judgement can be used an unlimited number of times."
			]),
		},
	}
});
