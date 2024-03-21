var Num = 0;
var word = 0;
var speaking = 0;
var text = 0;
var synth = window.speechSynthesis;
var voices = synth.getVoices();
var score = 0;

speaking.voice = voices[6];
speaking.rate = 0.2;


const Word = ["rooster", "hatchet", "swimmer", "flannel", "satisfy", "chamber", "college", "harness", "evident", "furtive", "remains", "scratch", "sitting", "divisor", "shipper", "complex", "edition", "figures", "instead", "skinned", "culture", "aroused", "primers", "capably", "stapler", "recruit", "thieves", "emotion", "brushed", "heating", "iceberg", "concept", "mutated", "boulder", "costume", "mittens", "chummed", "helping", "confess", "seventy", "glimpse", "general", "snicker", "incense", "swallow", "copying", "largest", "shampoo", "durable", "flights", "raining", "crystal", "mercury", 
"stopped", "upright", "glasses", "keeping", "bobtail", "skillful", "elderly", "eclipse", "scenery", "verdict", 
"lender", "capture", "passing", "recount", "mounted", "biscuit", "succeed", "squeeze", "failure", "tally", "prairie", 
"magnify", "restart", "phantom", "partner", "mention", "scuffle", "tunnels", "nursery", "archery", "sincere", "backing", 
"expense", "raccoon", "display", "adage", "whining", "mythos", "deliver", "senile", "burglar", "quietly", "cinders", "receive", 
"gouge", "despise",
"bothered", "landlord", "generate", "reckless", "downpour", "research", "skeleton", "holidays", "relative", "fabulous", "shepherd", "Colorado", "disarray", "utensils", "charcoal", "smallpox", "conquer", "delayed", "cardinal", "envelope", "salaries", "diameter", "cargoes", "register", "garnish", "ancestor", "sprinkle", "frighten", "lemonade", "porridge", "evaluate", "farewell", "headlong", "transit", "shadows", "question", "reminded", "plasma", "festival", "hamper", "printing", "adjusted", "bookcase", "underdog", "dispatch", "choosing", "science", "cabinet", "quadrate", "engraved", "epidemic", "incident", "orchids", "nickname", "pithy", "peroxide", "clarify", "festered", "neurotic", "mosaic", "wireless", "hydrogen", "squiggle", "veracity", "collide", "diminish", "barrette", "locale", "biscuits", "concrete", "speckled", "furlough", "rapture", "outdoors", "punished", "mopping", "childish", "bracelet", "opaque", "manifest", "congress", "shortage", "eclair", "remedial", "studios", "strange", "equator", "scramble", "nudging", "amiable", "pitons", "manacled", "sailors", "mineral", "vertigo", "musician", "jackal", "pension", "starting", "pitched", "lamppost", "bathtub", "wondered", "obstruct", "ambition", "talon", "shoulder", "abrupt", "reunion", "purge", "pantheon", "pavilion", "cypress", "deceit", "repeated", "slovenly", "sprained", "menacing", "pastrami", "playmate", "arguable", "abstract", "pinwheel", "lagoon", "musical", "profile", "enlisted", "terrible", "declared", "dissuade", "birthday", "caravan", "criminal", "comical", "animate", "crackers", "carnival", "employed", "hastened", "followed", "psychic", "hurrying", "naivete", "officers", "Saturday", "warriors", "mitigate", "spending", "contrary", "yourself", "comrades", "unduly", "defense", "forecast", "dignity", "vineyard", "exchange", "elevated", "inquire", "magazine", "salvage", "oblivion", "creature", "happened", "lengthy", "premier", "depraved", "assessor",
 "discuss", "entitle", "altered", "trouble", "ongoing", "statues", "bragged", "baize", "abyss", "filling", "pinkeye", "penguin", "rubbish", "endless", "bruised", "chimney", "freckle", "issuing", "arsenal", "declare", "started", "federal", "immense", "illegal", "moisten", "slipper", "circuit", "hunting", "Jupiter", "quarrel", "reddish", "steeple", "satiate", "receipt", "menial", "cygnet", "thanked", "finally", "wrapped", "disturb", "courage", "undress", "bribery", "studied", "parry", "painted", "portray", "brownie", "charity", "cripple", "treated", "sawmill", "pailful", "easiest", "nothing", "pensive", "cheetah", "lexicon", "grazer", "fantasy", "reserve", "deign", "basting", "hosiery", "counter", "dreamed", "unicorn", "convert", "rolling", "symbol", "cancel", "washed", "happen", "forest", "huddle", "chorus", "indent", "terror", "engine", "buckle", "walked", "failed", "guilty", "sneeze", "stride", "crunch", "around", "tattoo", "mammal", "unfair", "slacks", "crouch", "thread", "oyster", "wished", "salary", "ladies", "clinic", "copies", "barter", "larger", "pierce", "defame", "urgent", "surely", "causes", "nibble", "boiler", "pebble", "breath", "temple", "corner", "mascot", "agreed", "mortar", "mopped", "mirror", "cobweb", "forget", "shrimp", "expert", "excuse", "clover", "kimono", "crayon", "saying", "strand", "skiing", "string", "burrow", "gather", "uneasy", "tender", "better", "runner", "normal", "awhile", "slowly", "stroll", "family", "remake", "weekly", "raised", "museum", "should", "adding", "poodle", "expect", "behold", "blouse", "thirty", "vision", "finish", "unkind", "pirate", "vainly", "female", "guitar", "replay", "redeem", "meddle", "friend", "pollen", "cavity", "gospel", "bright", "harass", "easily", "timber", "intent", "spoilt", "prince", "severe", "agenda", "seldom", "absurd", "sitcom", "bother", "aghast", "stairs", "gurgle", "breast", "degree", "unique", "craggy", "ascend", "island", "people", "exhume", "magnet", "loaves", "midget", "napkin", "ceased", "unlock", "sticky", "depict", "sleepy", "damage", "worked", "equity", "owning", "employ", "cougar", "bounty", "career", "hollow", "quartz", "rocket", "radish", "barrel", "square", "polite", "lotion", "podunk", "whoops", "papers", "common", "catnip", "tongue", "proved", "lining", "quarry", "bronze", "nodded", "gentle", "twelve", "stanza", "mission", "stitch", "banana", "narrow", "aspect", "reduce", "cosmic", "jacket", "filled"
,"aardvark", "ablaze", "abrupt", "academy", "access", "accident", "ache", "achieve", "acrobat", "activity", "address", "adjective", "Advent", "advice", "against", "agenda", "ailment", "alley", "alphabet", "although", "altogether", "amaze", "America", "amount", "ancestor", "anchor", "angel", "angle", "ankle", "announcement", "answer", "antenna", "antique", "anxious", "apology", "applaud", "appreciate", "approach", "aquatic", "armor", "arrival", "artistry", "Asia", "assignment", "assistant", "astronauts", "athlete", "atrium", "attitude", "August", "Australia", "author", "aviator", "avoid", "awhile", "baboon", "background", "backpack", "badge", "bagel", "baggage", "balance", "balloon", "bandage", "banjo", "Baptism", "barely", "barrier", "batteries", "beard", "beast", "Beatitudes", "beautiful", "because", "begged", "believe", "bishop", "blessing", "booster", "bought", "brainchild", "brainstorm", "breakfast", "breathe", "bruise", "buffalo", "bulletin", "buried", "butterflies", "calcium", "calendar", "canary", "cancel", "canine", "canopy", "canteen", "canyon", "capsule", "cardinal", "career", "carnival", "carpentry", "carriage", "cashew", "cashier", "catchword", "caterpillar", "cavern", "celery", "chalkboard", "challenge", "championship", "chapel", "charcoal", "charity", "cheerfully", "chimney", "choir", "Christmas", "circular", "cleanliness", "clergy", "clubhouse", "cocoon", "coffee", "collage", "colorful", "commandment", "compassion", "compound", "computer", "condensation", "consonant", "continent", "continued", "contraction", "convince", "cornea", "correct", "cough", "country", "county", "courage", "courtesy", "cousin", "covenant", "creation", "creed", "curiosity", "custom", "dairy", "dangerous", "daughter", "deacon", "deadline", "debt", "December", "decent", "dedication", "delivery", "demand", "denial", "detour", "deviate", "diagnosis", "diamond", "difference", "difficult", "discipline", "discourage", "discover", "disobey", "divine", "division", "dolphin", "doubt", "drought", "dungeon", "earthquake", "Easter", "education", "either", "elementary", "eleventh", "emergency", "empire", "enemy", "enormous", "enough", "envelope", "environment", "erosion", "essential", "Europe", "evaporation", "excellent", "expressway", "extract", "eyelash", "factories", "faithful", "families", "famous", "fantastic", "faucet", "February", "feud", "field", "financial", "firefighter", "fitness", "flatten", "footage", "forbidden", "forgiveness", "formula", "fraction", "freight",
 "fulfill", "funnel", "funnier", "futon", "gadget", "galaxy", "gardener", "gasoline", "generous", "gentleness", "geography"

];




function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > milliseconds){
        break;
      }
    }
  }

  

function reset()
{
  document.getElementById("reply").innerHTML = "";
    document.getElementById("textbox").value = "";
    Num = Math.floor(Math.random()*732);
    console.log(Num);
    word = Word[Num];
    console.log(word);
    sleep(3000);
  
    var speaking = new SpeechSynthesisUtterance(word);
    synth.speak(speaking);
    sleep(5000);
    synth.speak(speaking);
    
    
    
  

    
}

function Check()
{
    text = document.getElementById("textbox").value;  
    console.log(text);
    if(text == word)
    {
      var speaking = new SpeechSynthesisUtterance("Correct");
      synth.speak(speaking);
      sleep(3000);
      reset();
      score = score+1;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    else
    {
      var speaking = new SpeechSynthesisUtterance("That is Incorrrect you idiot");
      synth.speak(speaking);
      document.getElementById("reply").innerHTML = "-"+word;
      score = 0;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    
}

window.addEventListener("keydown", CheckKey);

function CheckKey(e)
{
	keyPressed = e.keyCode;
  if(keyPressed == "13")
  {
    
    text = document.getElementById("textbox").value;  
    console.log(text);
    if(text == word)
    {
      var speaking = new SpeechSynthesisUtterance("Correct");
      synth.speak(speaking);
      sleep(1000);
      reset();
      score = score+1;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    else
    {
      var speaking = new SpeechSynthesisUtterance("That is Incorrrect you idiot");
      synth.speak(speaking);
      document.getElementById("reply").innerHTML = "-"+word;
      score = 0;
      document.getElementById("score").innerHTML = "Score: " + score;
    }
    
  }

}


function ChangeMode()
{
  window.location = "index1.html";
}

  