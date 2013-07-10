function Deck() {  }

Deck.prototype.generate=function(decks)
{
    var tmp=[]; var ret=[];
    for (var i=0; i<this.kingdoms.length; i++)
    {
      var c=this.kingdoms[i];
      for (var j=0; j<decks.length; j++)
      {
    	if (c.set == decks[j])
    	{
    	  var victory=false, reaction=false, attack=false;
    	  if (c.type=="Victory") victory=true;
    	  if (c.type.indexOf("Reaction")!=-1) reaction=true;
    	  if (c.type.indexOf("Attack")!=-1) attack=true;
    	  tmp.push({"imgId":c.imgId,"name":c.name,"cost":c.cost,"text":c.text,"type":c.type,"buys":c.buys,"set":c.set,"victory":victory,"reaction":reaction,"attack":attack});
    	}
      }
    }
	var arr=[]; var l=tmp.length; var k;
	while(arr.length<10)
	{
	  var r=Math.ceil(Math.random()*l);
	  var found=false;
	  for (k=0; k<arr.length; k++)
	  {
	    if (arr[k]==r){found=true;break;}
	    if (!found) arr[arr.length]=r;
	  }
	}
	for (k=0; k<10; k++)
	  ret.push(tmp[arr[k]]);
	
    return ret;
};

Deck.prototype.init=function()
{
//kingdom set names
this.kn = ["Base","Intrigue","Promos","Seaside","Alchemy","Prosperity"];

this.kingdoms = [{
imgId: 396276,
name: "Adventurer",
cost: 6,
text: "Reveal cards from your deck until you reveal 2 treasure cards.  Put those treasure cards into your hand and discard the other revealed cards.",
type: "Action",
set: 0
},{
imgId: 396277,
name: "Bureaucrat",
cost: 4,
text: "Gain a silver card; put it on top of your deck. Each other player reveals a Victory card from his hand and puts it on his deck (or reveals a hand with no Victory cards).",
type: "Action - Attack",
set: 0
},{
imgId: 396278,
name: "Cellar",
cost: 2,
text: "Discard any number of cards. +1 Card per card discarded.",
type: "Action",
actions: 1,
set: 0
},{
imgId: 396280,
name: "Chancellor",
cost: 3,
text: "You may immediately put your deck into your discard pile.",
type: "Action",
treasure: 2,
set: 0
},{
imgId: 396288,
name: "Chapel",
cost: 2,
text: "Trash up to 4 cards from your hand.",
type: "Action",
set: 0
},{
imgId: 396289,
name: "Council Room",
cost: 5,
text: "Each other player draws a card.",
type: "Action",
buys: 1,
cards: 4,
set: 0
},{
imgId: 396290,
name: "Feast",
cost: 4,
text: "Trash this card. Gain a card costing up to 5.",
type: "Action",
set: 0
},{
imgId: 396291,
name: "Festival",
cost: 5,
text: " ",
type: "Action",
actions: 2,
buys: 1,
treasure: 2,
set: 0
},{
imgId: 396292,
name: "Gardens",
cost: 4,
text: "Worth 1 VP for every 10 cards in your deck (rounded down).",
type: "Victory",
set: 0
},{
imgId: 396293,
name: "Laboratory",
cost: 5,
text: " ",
type: "Action",
actions: 1,
cards: 2,
set: 0
},{
imgId: 396294,
name: "Library",
cost: 5,
text: "Draw until you have 7 cards in your hand. You may set aside any action cards drawn this way, as you draw them; discard the set aside cards after you finish drawing.",
type: "Action",
set: 0
},{
imgId: 396295,
name: "Market",
cost: 5,
text: " ",
type: "Action",
actions: 1,
buys: 1,
treasure: 1,
cards: 1,
set: 0
},{
imgId: 396296,
name: "Militia",
cost: 4,
text: "Each other player discards down to 3 cards in his hand.",
type: "Action - Attack",
treasure: 2,
set: 0
},{
imgId: 396297,
name: "Mine",
cost: 5,
text: "Trash a treasure card from your hand. Gain a treasure card costing up to 3 more; put it in your hand.",
type: "Action",
set: 0
},{
imgId: 396298,
name: "Moat",
cost: 2,
text: "When another player plays an attack card, you may reveal this from your hand.  If you do, you are unaffected by that Attack.",
type: "Action - Reaction",
cards: 2,
set: 0
},{
imgId: 396299,
name: "Moneylender",
cost: 4,
text: "Trash a copper card from your hand. If you do, +3 treasure.",
type: "Action",
set: 0
},{
imgId: 396300,
name: "Remodel",
cost: 4,
text: "Trash a card from your hand. Gain a card costing up to 2 more than the trashed card.",
type: "Action",
set: 0
},{
imgId: 396301,
name: "Smithy",
cost: 4,
text: " ",
type: "Action",
cards: 3,
set: 0
},{
imgId: 396302,
name: "Spy",
cost: 4,
text: "Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice.",
type: "Action - Attack",
actions: 1,
cards: 1,
set: 0
},{
imgId: 396303,
name: "Thief",
cost: 4,
text: "Each player reveals the top 2 cards of his deck.  If they revealed any Treasure cards, they trash one of them that you choose.  You may gain any or all of these trashed cards.  They discard the other revealed cards.",
type: "Action - Attack",
set: 0
},{
imgId: 396308,
name: "Throne Room",
cost: 4,
text: "Choose an action card in your hand.  Play it twice.",
type: "Action",
set: 0
},{
imgId: 396309,
name: "Village",
cost: 3,
text: " ",
type: "Action",
actions: 2,
cards: 1,
set: 0
},{
imgId: 396310,
name: "Witch",
cost: 5,
text: "Each other player gains a Curse card.",
type: "Action - Attack",
cards: 2,
set: 0
},{
imgId: 396311,
name: "Woodcutter",
cost: 3,
text: " ",
type: "Action",
buys: 1,
treasure: 2,
set: 0
},{
imgId: 396312,
name: "Workshop",
cost: 3,
text: "Gain a card costing up to 4.",
type: "Action",
set: 0
},
//intrigue kingdoms
{
imgId: 522351,
name: "Baron",
cost: 4,
text: "You may discard an Estate card. If you do, +4 Treasure.  Otherwise gain an Estate card.",
type: "Action",
buys: 1,
set: 1
},{
imgId: 522352,
name: "Bridge",
cost: 4,
text: "All cards (inluding cards in players' hands) cost 1 Treasure less this turn, but not less than zero Treasure",
type: "Action",
buys: 1,
treasure: 1,
set: 1
},{
imgId: 522353,
name: "Conspirator",
cost: 4,
text: "If you've played 3 or more actions this turn(counting this): +1 Card, +1 Action.",
type: "Action",
treasure: 2,
set: 1
},{
imgId: 522355,
name: "Coppersmith",
cost: 4,
text: "Copper produces an extra 1 Treasure this turn.",
type: "Action",
set: 1
},{
imgId: 522356,
name: "Courtyard",
cost: 2,
text: "Put a card from your hand on top of your deck.",
type: "Action",
cards: 3,
set: 1
},{
imgId: 522357,
name: "Duke",
cost: 5,
text: "Worth 1 Victory Point per Duchy you have.",
type: "Victory",
set: 1
},{
imgId: 522359,
name: "Great Hall",
cost: 3,
text: " ",
type: "Action - Victory",
actions: 1,
victoryPoint: 1,
cards: 1,
set: 1
},{
imgId: 522360,
name: "Harem",
cost: 6,
text: " ",
type: "Treasure - Victory",
treasure: 2,
victoryPoints: 2,
set: 1
},{
imgId: 522363,
name: "Ironworks",
cost: 4,
text: "Gain a card costing up to 4 Treasure. If it is an...   Action card, +1 Action; Treasure card, +1 Treasure; Victory catd: +1 card",
type: "Action",
set: 1
},{
imgId: 522364,
name: "Masquerade",
cost: 3,
text: "Each player passes a card from his hand to the left at once.  Then you may trash a card from your hand.",
type: "Action",
cards: 2,
set: 1
},{
imgId: 522365,
name: "Mining Village",
cost: 4,
text: "You may trash this card immediately. If you do, +2 Treasure.",
type: "Action",
actions: 2,
cards: 1,
set: 1
},{
imgId: 522366,
name: "Minion",
cost: 5,
text: "Choose One: +2 Treasure; or discard your hand, +4 Cards and each other player with at least 5 cards in hand discards his hand and draws 4 cards.",
type: "Action - Attack",
actions: 1,
set: 1
},{
imgId: 522368,
name: "Nobles",
cost: 6,
text: "Choose One: +3 Cards; or +2 Actions.",
type: "Action - Victory",
victoryPoints: 2,
set: 1
},{
imgId: 522369,
name: "Pawn",
cost: 2,
text: "Choose two:  +1 Card; +1 Action; +1 Buy; +1 Treasure. (The choices must be different.)",
type: "Action",
set: 1
},{
imgId: 522370,
name: "Saboteur",
cost: 5,
text: "Each player reveals cards from the top of his deck until revealing one costing 3 Treasure or more.  He trashes that card and may gain a card costing at most 2 treasure less than it.  He discards the other revealed cards.",
type: "Action - Attack",
set: 1
},{
imgId: 522371,
name: "Scout",
cost: 4,
text: "Reveal the top 4 cards of your deck. Put the revealed Victory cards into your hand.  Put the other cards on top of your deck in any order.",
type: "Action",
actions: 1,
set: 1
},{
imgId: 522374,
name: "Secret Chamber",
cost: 2,
text: "Discard any number of cards.  +1 Treasure per card discarded.  --- When anothe player plays an Attack card, you may reveal this from your hand.  If you do, +2 Cards, then put 2 cards from your hand on the top of your deck.",
type: "Action - Reaction",
set: 1
},{
imgId: 522375,
name: "Shanty Town",
cost: 3,
text: "Reveal your hand.  If you have no Action cards in hand, +2 Cards.",
type: "Action",
actions: 2,
set: 1
},{
imgId: 522376,
name: "Steward",
cost: 3,
text: "Choose one:  +2 Cards; or +2 Treasure; or trash 2 cards from your hand.",
type: "Action",
set: 1
},{
imgId: 522378,
name: "Swindler",
cost: 3,
text: "Each other player trashes the top card of his deck and gains a card with the same cost that you choose.",
type: "Action",
treasure: 2,
set: 1
},{
imgId: 522381,
name: "Torturer",
cost: 5,
text: "Each player chooses one:  he discards 2 cards; or he gains a Curse card, putting it in his hand.",
type: "Action - Attack",
cards: 3,
set: 1
},{
imgId: 522383,
name: "Trading Post",
cost: 5,
text: "Trash 2 cards from your hand.  If you do, gain a Silver card, put it in your hand.",
type: "Action",
set: 1
},{
imgId: 522384,
name: "Tribute",
cost: 5,
text: "The player to your left reveals then discards the top 2 cards from his deck.  For each differently named card revealed, if it is an...   Action Card, +2 Actions;  Treasure Card, +2 Treasure;  Victory Card, +2 cards.",
type: "Action",
set: 1
},{
imgId: 522385,
name: "Upgrade",
cost: 5,
text: "Trash a card from your hand.  Gain a card costing exactly 1 Treasure more than it.",
type: "Action",
actions: 1,
cards: 1,
set: 1
},{
imgId: 522389,
name: "Wishing Well",
cost: 3,
text: "Name a card. Reveal the top card of your deck.  If it's the named card, put it in your hand.",
type: "Action",
actions: 1,
cards: 1,
set: 1
},
//bgg kingdoms
{
imgId: 522348,
name: "Envoy",
cost: 4,
text: "Reveal the top 5 cards of your deck.  The player to your left chooses one for you to discard.  Draw the rest.",
type: "Action",
set: 2
},{
imgId: 522346,
name: "Black Market",
cost: 3,
text: "Reveal the top 3 cards of the Black Market deck.  You may buy one of them immediately.  Put the unbought cards on the bottom of the Black Market deck in any order.",
type: "Action",
treasure: 2,
set: 2
},
//Seaside  kingdoms
{
imgId: 579232,
name: "Ambassador",
type: "Action - Attack",
cost: 3,
text: "Reveal a card from your hand. Return up to 2 copies of it from your hand to the Supply. Then each other player gains a copy of it.",
set: 3
},{
imgId: 585632,
name: "Bazaar",
type: "Action",
cost: 5,
text: " ",
cards: 1,
actions: 2,
treasure: 1,
set: 3
},{
imgId: 585633,
name: "Caravan",
type: "Action - Duration",
cost: 4,
text: "At the start of your next turn, +1 Card.",
cards: 1,
actions: 1,
set: 3
},{
imgId: 585634,
name: "Cutpurse",
type: "Action - Attack",
cost: 4,
text: "Each other player discards a Copper card (or reveals a hand with no Copper).",
treasure: 2,
set: 3
},{
imgId: 585635,
name: "Embargo",
type: "Action",
cost: 2,
text: "Trash this card. Put an Embargo token on top of a Supply pile. When a player buys a card, he gains a Curse card per Embargo token on that pile.",
treasure: 2,
set: 3
},{
imgId: 585638,
name: "Explorer",
type: "Action",
cost: 5,
text: "You may reveal a Province card from your hand. If you do, gain a Gold card, putting it into your hand. Otherwise, gain a Silver card, putting it into your hand.",
set: 3
},{
imgId: 585639,
name: "Fishing Village",
type: "Action - Duration",
cost: 3,
text: "At the start of your next turn: +1 Action, +1 Coin.",
actions: 2,
treasure: 1,
set: 3
},{
imgId: 585652,
name: "Ghost Ship",
type: "Action - Attack",
cost: 5,
text: "Each other player with 4 or more cards in hand puts cards from his hand on top of his deck until he has 3 cards in his hand.",
cards: 2,
set: 3
},{
imgId: 585653,
name: "Haven",
type: "Action - Duration",
cost: 2,
text: "Set aside a card from your hand face down. At the start of your next turn, put it into your hand.",
cards: 1,
actions: 1,
set: 3
},{
imgId: 580259,
name: "Island",
type: "Action - Victory",
cost: 4,
text: "Set aside this and another card from your hand. Return them to your deck at the end of the game.",
victoryPoints: 2,
set: 3
},{
imgId: 585658,
name: "Lighthouse",
type: "Action - Duration",
cost: 2,
text: "Now and at the start of your next turn: +1 Coin. While this is in play, when another player plays an Attack card, it doesn't affect you.",
actions: 1,
treasure: 1,
set: 3
},{
imgId: 585663,
name: "Lookout",
type: "Action",
cost: 3,
text: "Look at the top 3 cards of your deck. Trash one of them. Discard one of them. Put the other one on top of your deck.",
actions: 1,
set: 3
},{
imgId: 585665,
name: "Merchant Ship",
type: "Action - Duration",
cost: 5,
text: "Now and at the start of your next turn: +2 Coin.",
treasure: 2,
set: 3
},{
imgId: 581654,
name: "Native Village",
type: "Action",
cost: 2,
text: "Choose one: Set aside the top card of your deck face down on your Native Village mat; or put all the cards from your mat into your hand. You may look at the cards on your mat at any time; return them to your deck at the end of the game.",
actions: 2,
set: 3
},{
imgId: 585666,
name: "Navigator",
type: "Action",
cost: 4,
text: "Look at the top 5 cards of your deck. Either discard all of them, or put them back on top of your deck in any order.",
treasure: 2,
set: 3
},{
imgId: 585670,
name: "Outpost",
type: "Action - Duration",
cost: 5,
text: "You only draw 3 cards (instead of 5) in this turn's Clean-up phase. Take an extra turn after this one. This can't cause you to take more than two consecutive turns.",
set: 3
},{
imgId: 585671,
name: "Pearl Diver",
type: "Action",
cost: 2,
text: "Look at the bottom card of your deck. You may put it on top.",
actions: 1,
cards: 1,
set: 3
},{
imgId: 585672,
name: "Pirate Ship",
type: "Action - Attack",
cost: 4,
text: "Choose one: Each other player reveals the top 2 cards of his deck, trashes a revealed Treasure that you choose, discards the rest, and if anyone trashed a Treasure you take a Coin token; or, +1 Coin per Coin token you've taken with Pirate Ships this game.",
set: 3
},{
imgId: 583818,
name: "Salvager",
type: "Action",
cost: 4,
text: "Trash a card from your hand. + Coin equal to its cost.",
buys: 1,
set: 3
},{
imgId: 585674,
name: "Sea Hag",
type: "Action - Attack",
cost: 4,
text: "Each other player discards the top card of his deck, then gains a Curse card, putting it on top of his deck.",
set: 3
},{
imgId: 585675,
name: "Smugglers",
type: "Action",
cost: 3,
text: "Gain a copy of a card costing up to 6 Coin that the player to your right gained on his last turn.",
set: 3
},{
imgId: 581008,
name: "Tactician",
type: "Action - Duration",
cost: 5,
text: "Discard your hand. If you discarded any cards this way, then at the start of your next turn, +5 Cards, +1 Buy, and +1 Action.",
set: 3
},{
imgId: 583051,
name: "Treasure Map",
type: "Action",
cost: 4,
text: "Trash this and another copy of Treasure Map from your hand. If you do trash two Treasure Maps, gain 4 Gold cards, putting them on top of your deck.",
set: 3
},{
imgId: 585679,
name: "Treasury",
type: "Action",
cost: 5,
text: "When you discard this from play, if you didn't buy a Victory card this turn, you may put this on top of your deck.",
cards: 1,
actions: 1,
treasure: 1,
set: 3
},{
imgId: 585680,
name: "Warehouse",
type: "Action",
cost: 3,
text: "Discard 3 cards.",
cards: 3,
actions: 1,
set: 3
},{
imgId: 582392,
name: "Wharf",
type: "Action - Duration",
cost: 5,
text: "Now and at the start of your next turn: +2 Cards, +1 Buy.",
cards: 2,
buys: 1,
set: 3
},



{"name":"Vineyard","cost":0,"set":4,"text":"Worth 1 VP for every three Action cards in your deck (rounded down).","type":"Victory"},
{"name":"Alchemist","cost":3,"potionCost":1,"actions":1,"set":4,"cards":2,"text":"When you discard this from play, you may put this on top of your deck if you have a Potion in play.","type":"Action"},
{"name":"Possession","cost":6,"potionCost":1,"actions":1,"buys":1,"set":4,"text":"The player to your left takes an extra turn after this one, in which you can see all cards he can and make all decisions for him. Any card he would gain on that turn, you gain instead; any cards of his that are trashed are set aside and returned to his discard pile at the end of turn.","type":"Action"},
{"name":"Herbalist","cost":2,"buys":1,"treasure":1,"set":4,"text":"When you discard this from play, you may put one of your Treasures from play on top of your deck.","type":"Action"},
{"name":"Philosopher's Stone","cost":3,"potionCost":1,"set":4,"text":"When you play this, count your deck and discard pile. Worth 1 Coin per 5 Cards total between them (rounded down).","type":"Treasure"},
{"name":"University","cost":2,"potionCost":1,"actions":2,"set":4,"text":"+You may gain an Action card costing up to 5 Coins.","type":"Action"},
{"name":"Scrying Pool","cost":2,"potionCost":1,"actions":1,"set":4,"text":"Each player (including you) reveals the top card of his deck and either discards it or puts it back, your choice. Then reveal cards from the top of your deck until you reveal one that is not an Action. Put all of your revealed cards into your hand.","type":"Action - Attack"},
{"name":"Transmute","cost":0,"potionCost":1,"set":4,"text":"Trash a card from your hand. If it is an Action card, gain a Duchy; Treasure card, gain a Transmute; Victory card, gain a Gold.","type":"Action"},
{"name":"Apothecary","cost":2,"potionCost":1,"actions":1,"set":4,"cards":1,"text":"Reveal the top 4 cards of your deck. Put the revealed Coppers and Potions into your hand. Put the other cards back on top of your deck in any order.","type":"Action"},
{"name":"Apprentice","cost":5,"actions":1,"set":4,"text":"Trash a card from your hand. Plus 1 Card per Coin it costs. +2 Cards if it has a Potion in its cost.","type":"Action"},
{"name":"Familiar","cost":3,"potionCost":1,"actions":1,"set":4,"cards":1,"text":"Each other player gains a Curse.","type":"Action - Attack"},
{"name":"Golem","cost":4,"potionCost":1,"actions":0,"set":4,"text":"Reveal cards from your deck until you reveal 2 Action cards other than a Golem card. Discard the other cards, then play the Action cards in either order.","type":"Action"},
{"name":"Bank","cost":7,"set":5,"text":"? Coins When you play this, it is worth 1 Coin per Treasure you have in play (counting this)","description":"This is a Treasure worth a variable amount. When you play Bank, it is worth 1 coin per Treasure you have in play, counting itself. Remember, you choose what order to play Treasure cards. If you play Bank with no other Treasures in play, it is worth 1 coin. If you play two copies of Bank in a row, the one you play second will be worth 1 coin more than the first one. Bank produces money right when you play it; things that happen later in the turn will not change how much money you got from it.","type":"Treasure"},
{"name":"Bishop","cost":4,"treasure":1,"vpTokens":1,"set":5,"text":"Trash a card from your hand. +VP Chips equal to half its cost in coins, rounded down. Each other player may trash a card from his hand.","description":"See the Additional Rules section for rules on VP tokens. Trashing a card is optional for the other players but mandatory for you. If players care about the order things happen for this, you trash a card first, then each other player may trash a card, in turn order. Only the player who played Bishop can get tokens from it. Potion in costs is ignored, for example if you trash Golem (from Dominion: Alchemy), which costs 4 coins and 1 potion, you get 3 total (counting the 1 VP token you always get from Bishop). If you have no cards left in hand to trash, you still get the 1 coin and 1 VP token.","type":"Action"},
{"name":"City","cost":5,"actions":2,"set":5,"text":"If there are one or more empty Supply piles, +1 card. If there are two or more, +1 Coin and +1 Buy.","description":"You draw a card and can play two more Actions no matter what. If there is just one empty pile in the Supply, you also draw another card. If there are two or more empty piles, you both draw another card, and get 1 coin to spend and an extra Buy to use in the Buy phase. There are no further bonuses if three or more piles are empty. This only checks how many piles are empty when you play it; if piles become empty later in the turn, you do not go back and get the bonuses. If a pile stops being empty due to cards being returned to it, such as with the Dominion: Seaside card Ambassador, Cities played after that will not count that pile as empty. An empty trash pile does not count for this.","type":"Action"},
{"name":"Contraband","cost":5,"buys":1,"treasure":3,"set":5,"text":"3 Coins +1 Buy When you play this, the player to your left names a card. You can't buy that card this turn.","description":"This is a Treasure worth 3 coins, like Gold. When you play it, you get +1 Buy, the player to your left names a card, and you cannot buy the named card this turn. This does not stop you from gaining the card in ways other than buying it (such as via Hoard). He does not have to name a card in the Supply. If you play multiple Contrabands in one turn, the player to your left names a card each time; if he names different cards, you cannot buy any of the named cards this turn. You can play Treasures in any order, and you resolve this ability right when you play it, before playing any further Treasure cards. Note that once you buy a card in the Buy phase, you cannot play more Treasures. The number of cards left in a player's hand is public information; you can ask whenever you want to know it (for example, when that player plays Contraband).","type":"Treasure"},
{"name":"Counting House","cost":5,"set":5,"text":"Look through your discard pile, reveal any number of Copper cards from it, and put them into your hand.","description":"This card lets you look through your discard pile, something you normally are not allowed to do. You only get to look through your discard pile when you play this. You do not have to show the other players your entire discard pile, just the Coppers you take out. After you take out the Coppers, you can leave the cards in your discard pile in any order.","type":"Action"},
{"name":"Expand","cost":7,"set":5,"text":"Trash a card from your hand. Gain a card costing up to 3 more than the trashed card.","description":"This is not in your hand after you play it, so you cannot trash it as the card trashed. The card you gain can cost up to 3 coins more than the trashed card, but it can also cost any smaller amount, even less than the cost of the trashed card. You can trash a card and gain a copy of the same card. If you have no card in hand to trash, you do not gain a card. The card you gain comes from the Supply and is put into your discard pile.","type":"Action"},
{"name":"Forge","cost":7,"set":5,"text":"Trash any number of cards from your hand. Gain a card with cost exactly equal to the total cost of the trashed cards.","description":"\"Any number\" includes zero. If you trash no cards, you have to gain a card costing 0 coins if you can. This is different from how cards like Expand work if you do not trash anything, because Forge looks at the total, not at any one card's cost. If there is no card at the required cost, you do not gain a card. The card you gain comes from the Supply and is put into your discard pile. Potion symbols (on cards from Dominion: Alchemy) are not added, and the card you gain cannot have a Potion symbol in its cost.","type":"Action"},
{"name":"Goons","cost":6,"buys":1,"treasure":2,"set":5,"text":"Each other player discards down to three cards in hand. While this is in play, when you buy a card, +1 VP Chip.","description":"See the Additional Rules section for rules on VP tokens. You get 1 VP token for each card you buy, but do not get a for gaining a card some other way. Multiple copies of Goons are cumulative; if you have two Goons in play and buy a Silver, you get 2 VP tokens. However if you King's Court a Goons, despite having played the card 3 times, there is still only one copy of it in play, so buying Silver would only get you 1 VP token.","type":"Action - Attack"},
{"name":"Grand Market","cost":6,"actions":1,"buys":1,"treasure":2,"set":5,"cards":1,"text":"You can't buy this card if you have any Copper in play.","description":"You do not have to play all of the Treasures in your hand in your Buy phase. Coppers in your hand do not stop you from buying Grand Market - only Coppers in play do. Coppers that were in play earlier in the turn but are not anymore also don't stop you; if you have 11 Coppers in play and 2 Buys, you could buy a Mint, trash all of your played Treasures, and then buy a Grand Market. You can gain Grand Market other ways - for example with Expand - whether or not you have Coppers in play. Treasures other than Copper do not prevent you from buying Grand Market, even if they are worth 1 coin (such as Loan).","type":"Action"},
{"name":"Hoard","cost":6,"treasure":2,"set":5,"text":"While this is in play, when you buy a victory card, gain a Gold.","description":"This is a Treasure worth 2 coins, like Silver. When you buy a Victory card with this in play, you gain a Gold card from the Supply, putting it into your discard pile. If there are no Golds left, you do not get one. If you have multiple Hoards in play, you will gain multiple Golds from buying a single Victory card. If you buy multiple Victory cards, you will get Gold for each one. So for example if you had two Hoards in play and no other money, with +1 Buy, you could buy two Estates and gain four Golds. Victory cards include cards that are other types as well, such as Nobles and Harem in Dominion: Intrigue. You gain a Gold even if you use Watchtower to immediately trash the Victory card you gained. Victory cards gained other than by buying them do not get you Gold.","type":"Treasure"},
{"name":"King's Court","cost":7,"set":5,"text":"You may choose an Action card in your hand. Play it three times.","description":"This is similar to Throne Room (from Dominion), but plays the Action three times rather than twice. You pick another Action card in your hand, play it, play it again, and play it a third time. This does not use up any extra Actions you were allowed to play due to cards like Worker's Village - King's Court itself uses up one Action and that is it. You cannot play any other cards in between resolving the King's Court-ed Action card multiple times, unless that Action card specifically tells you to (such as King's Court itself does). If you King's Court a King's Court, you will play three different Actions after that, playing each one of them three times - you do not play one Action nine times. If you King's Court a card that gives you +1 Action, such as Grand Market, you will end up with 3 Actions left afterwards, not the 1 Action you would have if you just played three Grand Markets.","type":"Action"},
{"name":"Loan","cost":3,"treasure":1,"set":5,"text":"When you play this, reveal cards from your deck until you reveal a Treasure. Discard it or trash it. Discard the other cards.","description":"This is a Treasure worth 1 coin, like Copper. When you play it, you reveal cards from the top of your deck until revealing a Treasure card, and then you decide whether to trash that card or discard it. Then you discard all of the other revealed cards. If you run out of cards before revealing a Treasure, shuffle your discard pile (but not the revealed cards) to get more; if you still do not find a Treasure, just discard all of the revealed cards. Remember that you can play Treasures in any order in the Buy phase and can choose not to play some of your Treasures if you want.","type":"Treasure"},
{"name":"Mint","cost":5,"set":5,"text":"You may reveal a Treasure card from your hand. Gain a copy of it. When you buy this, trash all Treasures you have in play.","description":"When you buy this, you trash all of your Treasure cards in play. You do not trash Treasure cards in your hand or elsewhere; just the ones in play, if any. If you buy multiple cards in a turn, trash your Treasures right when you buy Mint; you still have any leftover coins they produced for spending on something else. Remember you do not have to play all of the Treasures from your hand each turn (just all the ones you want producing money for you). You do not get additional chances to play Treasure cards between buys in the Buy phase; first you play Treasures, then you buy cards. When you play Mint, you reveal a Treasure card from your hand and gain a copy of it from the Supply. The gained card goes into your discard pile. The revealed card stays in your hand. The Treasure card can also have other types, like Harem (from Dominion: Intrigue). If you buy a Mint and use Watchtower to put it on top of your deck or trash it, you still trash all of your Treasures from play. However, if you buy a Mint with Royal Seal in play, the Royal Seal will be gone before you can use it to put Mint on your deck.","type":"Action"},
{"name":"Monument","cost":4,"treasure":2,"vpTokens":1,"set":5,"text":"","description":"See the Additional Rules section for rules on VP tokens.","type":"Action"},
{"name":"Mountebank","cost":5,"treasure":2,"set":5,"text":"Each other player may discard a Curse. If he doesn't, he gains a Curse and a Copper.","description":"This hits the other players in turn order when that matters (such as when the Curse or Copper pile is low). Each of the other players in turn chooses whether or not to discard a Curse card from his hand, and if he does not, gains a Curse and a Copper from the Supply, putting them into his discard pile. If either the Curse or Copper pile is empty, he still gains the other one. If both are empty, he does not gain either, but can still discard a Curse if he wants to. A player using Moat (from Dominion) on this may not discard a Curse, and doesn't gain a Curse or Copper - you cannot Moat just part of the attack. A player using Watchtower on this can use it just to trash the Curse, just to trash the Copper, or to trash both.","type":"Action - Attack"},
{"name":"Peddler","cost":8,"actions":1,"treasure":1,"set":5,"text":"During your Buy phase, this costs 2 Coin less per Action card you have in play, but not less than 0.","description":"Most of the time, this costs 8 coins. During Buy phases, this costs 2 coins less per Action card you have in play. This cost applies to all Peddler cards, including ones in hands and decks. It never costs less than 0 coins. If you play King's Court on Worker's Village, for example, that is just two Action cards you have in play, even though you played the Worker's Village three times. Buying cards using the promotional card Black Market is something that does not happen during a Buy phase, so Peddler still costs 8 coins then.","type":"Action"},
{"name":"Quarry","cost":4,"treasure":1,"set":5,"text":"While this is in play, Action cards cost 2 Coin less, but not less than 0.","description":"This is a Treasure worth 1 coin, like Copper. While it is in play, Action cards cost 2 coins less, to a minimum of 0 coins. It is cumulative; if you play two Quarries during your Buy phase, then King's Court will only cost 3 coins, rather than the usual 7 coins. It affects the costs of cards that are Actions plus another type, such as Nobles (an Action - Victory card in Dominion: Intrigue). It is also cumulative with other effects that modify costs; if you play Worker's Village in your Action phase, then two Quarries in your Buy phase, Peddler will cost 2 coins. It affects the costs of cards everywhere, such as cards in players' hands.","type":"Treasure"},
{"name":"Rabble","cost":5,"set":5,"cards":3,"text":"Each other player reveals the top 3 cards of his deck, discards the revealed Actions and Treasures, and puts the rest back on top in any order he chooses.","description":"The other players shuffle if necessary to get 3 cards to reveal, and just reveal what they can if they still have fewer than 3 cards. They discard revealed Treasures and Actions and put the rest back on top in whatever order they want. Cards with more than one type match all of their types; for example if a player reveals Nobles from Dominion: Intrigue, it is an Action - Victory card, which means it is an Action, so he discards it.","type":"Action - Attack"},
{"name":"Royal Seal","cost":5,"treasure":2,"set":5,"text":"While this is in play, when you gain a card, you may put that card on top of your deck.","description":"This is a Treasure worth 2 coins, like Silver. If you gain multiple cards with this in play, this applies to each of them - you could put any or all of them on top of your deck. If you use this ability and there are no cards left in your deck, you do not shuffle; the card you gained becomes the only card in your deck. Royal Seal applies to all cards you gain while it is in play, whether bought or gained other ways. If you play the Dominion: Alchemy card Possession, and during the extra turn you have the possessed player play Royal Seal, he cannot put the card on his deck - he is not gaining the card, you are.","type":"Treasure"},
{"name":"Talisman","cost":4,"treasure":1,"set":5,"text":"While this is in play, when you buy a card costing 4 Coin or less that is not a Victory card, gain a copy of it.","description":"This is a Treasure worth 1 coin like Copper. Each time you buy a non-Victory card costing 4 coins or less with this in play, you gain another copy of the bought card. If there are no copies left, you do not gain one. The gained card comes from the Supply and goes into your discard pile. If you have multiple Talismans, you gain an additional copy for each one; if you buy multiple cards for 4 coins or less, Talisman applies to each one. For example if you have two Talismans, four Coppers, and two Buys, you could buy Silver and Trade Route, gaining two more Silvers and two more Trade Routes. Talisman only affects buying cards; it does not work on cards gained other ways, such as with Expand. A card is a Victory card if Victory is any of its types; for example Great Hall from Dominion: Intrigue is an Action - Victory card, so it is a Victory card. Talisman only cares about the cost of the card when you buy it, not its normal cost; so for example it can get you a Peddler if you have played two Actions this turn, thus lowering Peddlers cost to 4 coins, or can get you a Grand Market if you played Quarry.","type":"Treasure"},
{"name":"Trade Route","cost":3,"buys":1,"set":5,"text":"+1 Coin per token on the Trade Route mat. Trash a card from your hand. Setup: Put a token on each Victory card Supply pile. When a card is gained from that pile, move the token to the Trade Route mat.","description":"You get an additional Buy to use in your Buy phase. You get +1 coin per token on the Trade Route mat. Then you trash a card from your hand. If you have no cards left in hand, you do not trash one. The amount you get from Trade Route is the same as + 1 coin per Victory card pile that a card has been gained from this game. If Victory cards have been gained from outside the Supply piles, for example using the promotional card Black Market, then this does not count those. Put a coin token on each Victory card pile at the start of the game. When a card is gained from a Victory card pile, move its token onto the Trade Route mat. So for example if this game includes the Dominion: Intrigue card Harem, and so far Harem and Duchy have been bought, but no-one has bought (or otherwise gained) Estate or Province or Colony, then Trade Route makes . It does not matter who gained the cards or how they gained them. You do not get any extra money if a pile has had multiple cards gained from it or is empty; all that matters is if at least one card has been gained from it. It does not matter if cards have been returned to a pile, such as with Ambassador from Dominion: Seaside; Trade Route only cares if a card was ever gained from the pile this game. If you are using Black Market and Trade Route is in the Black Market deck, put tokens on Victory card piles at the start of the game.","type":"Action"},
{"name":"Vault","cost":5,"set":5,"cards":2,"text":"Discard any number of cards. +1 Coin for each card discarded. Each other player may discard 2 cards. If he does, he draws a card.","description":"\"Any number\" includes zero. You draw cards first; you can discard the cards you just drew. Each other player chooses whether or not to discard 2 cards, then discards 2 cards if he chose to, then draws a card if he did discard 2 cards. If one of the other players has just one card, he can choose to discard it, but will not draw a card. Another player who discards but then has no cards left to draw shuffles in the discards before drawing.","type":"Action"},
{"name":"Venture","cost":5,"set":5,"text":"1 Coin When you play this, reveal cards from your deck until you reveal a Treasure. Discard the other cards. Play that Treasure.","description":"This is a Treasure card worth 1 coin, like Copper. When you play it, you reveal cards from your deck until revealing a Treasure card. If you run out of cards before revealing a Treasure, shuffle your discard pile (but not the revealed cards) to get more; if you still do not find a Treasure, just discard all of the revealed cards. If you do find a Treasure, discard the other cards and play the Treasure. If that Treasure does something when played, do that something. For example if Venture finds you another Venture, you reveal cards again. Remember that you choose what order to play Treasure cards; for example if you have both Venture and Loan in hand, you can play either one first.","type":"Treasure"},
{"name":"Watchtower","cost":3,"set":5,"text":"Draw until you have 6 cards in hand. (Reaction) When you gain a card, you may reveal this from your hand. If you do, either trash that card or put it on top of your deck.","description":"When you play this, you draw cards one at a time until you have 6 cards in hand. If you have 6 or more cards in hand already, you do not draw any cards. When you gain a card, even on someone else's turn, you may reveal Watchtower from your hand, to either trash the gained card or put it on top of your deck. You may reveal Watchtower each time you gain a card; for example if another player plays Mountebank, you may use Watchtower to trash both the Curse and Copper, or to trash the Curse and put the Copper on top of your deck, or just to trash the Curse, and so on. You still did gain whatever card you gained; you just immediately trash it. So if Mountebank gives you a Curse and you trash it, the Curse pile will go down by one as the Curse gets moved to the trash pile. You may reveal Watchtower on your own turn as well, for example when buying a card, or gaining a card via something like Expand. If you use Watchtower to put a card on your deck but have no cards left in your deck, you do not shuffle; the gained card becomes the only card in your deck. Revealing Watchtower does not take it out of your hand; you could reveal Watchtower on multiple opponents' turns and still have it on your turn to draw up to 6 with. When cards are gained during a Possession turn (from Dominion: Alchemy), the player who played Possession is the one who can use Watchtower, not the player who is being possessed. If a gained card is going somewhere other than to your discard pile, such as a card gained with Mine (from Dominion), you can still use Watchtower to trash it or put it on your deck.","type":"Action - Reaction"},
{"name":"Worker's Village","cost":4,"actions":2,"buys":1,"cards":2,"set":5,"text":"","type":"Action"}
];
};
	