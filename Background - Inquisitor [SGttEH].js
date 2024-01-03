var iFileName = "Background - Inquisitor (SGttEH).js";

SourceList["SGttEH"] = {
	name : "Steinhardt's Guide to the Eldritch Hunt",
	abbreviation : "SGttEH",
	group : "Third Party",
	url : "https://www.kickstarter.com/projects/monkey-dm/eldritch-hunt?ref=80vjq8",
	date : "12-27-23"
};
BackgroundList["inquisitor"] = { 
	regExpSearch : /inquisitor/i,
	name : "Inquisitor",
	source : [["SGttEH", 179]],
	skills : ["Religion", "Intimidation"],
	toolProfs : ["Torture tools"],
	gold : 10,
	equipleft : [
		["Torture tools", "1", ""],
		["Holy symbol of the Radiant Church", "1", ""],
		["Manacles", "1", ""],
		["Tome of teachings of the Radiant Church", "1", ""]
	],
	equipright : [
		["Common clothes", "", 4],
		["Belt pouch (with coins)", "", 1]
	],
	feature : "Zealous Authority",
	trait : [
		"I am fervently dedicated to my faith and the teachings of the Radiant Church.",
		"I am often suspicious of others, especially those who do not share my beliefs.",
		"I am stern and serious, with little time for humor or frivolity.",
		"I am not easily swayed by emotional appeals, preferring to deal in facts and evidence.",
		"I am meticulous and thorough in my investigations, leaving no stone unturned.",
		"I believe that the ends justify the means when it comes to preserving the Church and its teachings.",
		"I tend to view things in black and white, with little room for moral ambiguity.",
		"Despite my stern exterior, I am deeply compassionate and driven by a desire to protect	the innocent."
	],
	ideal : [
		["Faith", "Faith: My faith in the Radiant Church is unwavering, and I will do whatever it takes to protect it. (Any)" ],
		["Order", "Order: The laws and teachings of the Church must be upheld at all times. (Lawful)" ],
		["Purity", "Purity: Corruption and heresy will be purged (Lawful)" ],
		["Justice", "Justice: Those who harm or deceive the Church must be brought to justice. (Lawful)" ],
		["Power", "Power: The Church's authority must be respected and feared. I will ensure it. (Evil)" ],
		["Sacrifice", "I am willing to sacrifice anything, even my life, for the Church. (Good)" ]
	],
	bond : [
		"I am loyal to a mentor or superior within the Church who has guided me on my path.",
		"I once failed to stop a heretic, and that failure haunts me.",
		"I have a family member or loved one who doesn't understand my dedication to the Church.",
		"I am seeking to bring a particular heretic or enemy of the Church to justice.",
		"The Church is my family, and I will protect it at all costs.",
		"I seek to convert or save those who have strayed from the path.",
		"I have killed innocents in my righteous crusade, and their screams still haunt me.",
		"I have killed innocents in my righteous crusade, and will do so again if it is necessary."
	],
	flaw : [
		"My zealous devotion to the Church can make me blind to its flaws.",
		"I am unforgiving and tend to hold grudges, especially against perceived heretics.",
		"I can be overly suspicious, seeing threats to the Church where there are none.",
		"I am rigid and inflexible, struggling to adapt when things don't go according to plan.",
		"My stern demeanor often drives people away.",
		"I sometimes resort to extreme measures in the name of preserving the Church, which can lead to unnecessary conflict."
	],
	languageProfs : [["Deep Speech", 1]],
	lifestyle : "modest"
};
BackgroundFeatureList["zealous authority"] = {
	description : "As an Inquisitor of the Radiant Church, you command a certain level of respect and fear among church members and outsiders who recognize the authority of the Church. You can leverage your authority to gain access to resources, information, or aid from those who fear the Church's wrath, revere its power, or follow its teachings.",
	source : [["SGttEH", 179]]
};	
