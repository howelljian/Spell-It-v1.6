var Num = 0;
var word = 0;
var speaking = 0;
var text = 0;
var synth = window.speechSynthesis;
var voices = synth.getVoices();
var score = 0;

speaking.voice = voices[6];
speaking.rate = 0.2;


const Word = ["degenerate", "utilitarian", "altruism", "planetarium", "mantelpiece", "wheelwright", "recognition", "glaucescent", "comportment", "significant", "magnificent", "contentedly", "destination", "reactionary", "germane", "indifferent", "historical", "depredation", "figurative", "nefarious", "maladroit", "immaculate", "necessities", "transferred", "execrate", "encumbrance", "filial", "premonition", "fallibility", "picturesque", "asphyxiate", "enervate", "quarantine", "pernicious", "proportions", "fabricated", "sobriquet", "kamikaze", "melange", "considered", "stereotype", "mathematics", "alopecia", "scientific", "extenuating", "domicile", "contraband", "foreshadow", "maladjusted", "consequence", "abjure", "enterprize", "tympanum", "opprobrious", "insouciance", "circumlocution", "assimilate", "amputation", "shimmering", "concordance", "unintelligible", "ingredient", "respectful", "confederacy", "noticeboard", "transcendental", "correction", "discriminating", "photograph", "monumental", "fractional", "deliveries", "frightened", "hodgepodge", "instructor", "repugnance", "faithfully", "definition", "salmonella", "introduced", "interested", "interpretation", "philanthropist", "production", "consanguineous", "consumptive", "irrelevant", "anatomical", "recommendation", "tradition", "compromise", "arithmetic", "derivative", "cadence", "impervious", "polysaccharide", "indiscriminate", "regrettable", "tribunal", "journalism", "charioteer", "nonexistent", "ineluctable", "anachronistic", "deductible", "fashionable", "milieu", "ostentatiously", "peacefully", "patronymic", "impalpable", "respiration", "orthopaedic", "philosopher", "tempestuous", "requiem", "interpreter", "explanation", "shrubbery", "sedulous", "indignantly", "demagogue", "preparatory", "personality", "discipline", "compliance", "likelihood", "amputate", "advancement", "quotient", "liquidation", "unconcerned", "illustrious", "chromium", "fealty", "colloquial", "misdemeanor", "unrequited", "exegesis", "industrious", "gravitation", "torpor", "consignment", "abeyance", "verbatim", "antithesis", "antibiotics", "frantically", "plasticity", "martinet", "sapiential", "perspicuous", "zinciferous", "lilliputian", "treacherous", "nuisance", "imperial", "continental", "dilatory", "hesitation", "commutation", "labyrinth", "implicitly", "profligate", "putrefy", "listless",
"embezzlement", "organization", "reminiscent", "embarrassment", "indiscretion", "interruption", "considerable", "incomparable", "suggestions", "disseminate", "commencement", "egocentricity", "unenforceable", "delineate", "inflammatory", "procrastinating", "counterpart", "glockenspiel", "depreciation", "palpitations", "essentially", "mitochondria", "imperatively", "preeminent", "promiscuous", "congratulations", "adjudicate", "reconcilable", "preservative", "noctambulist", "earthenware", "inconvenient", "loneliness", "metamorphose", "Fahrenheit", "abrogate", "ventriloquism", "ombudsman", "paleontology", "methodical", "thoroughfare", "fanaticism", "stenographer", "velocity", "saccharine", "interrogative", "incumbency", "pendulous", "supercilious", "erroneous", "idiosyncrasy", "perpetuate", "ampullaceous", "complimented", "contaminated", "counterfeit", "avuncular", "jocular", "legislature", "debutant", "trespassing", "preventable", "corruptible", "rudiment", "emphasis", "voluptuous", "countenance", "beatific", "indivisible", "gregarious", "overwhelmed", "millionaire", "reverie", "herculean", "talisman", "stratagem", "threshing", "maladaptive", "capricious", "atrocious", "inadequate", "influential", "gratifying", "staccato", "profession", "pantoscope", "considerate", "appurtenances", "fricassee", "vigorously", "inscrutable", "coagulant", "tutelary", "strumpet", "pronunciation", "heretical", "whimsical", "abrasion", "troglodyte", "corroboration", "travail", "lobbyist", "abdicate", "proletarian", "distraction", "ingurgitate", "incidentally", "beguiling", "salutary", "botanist", "hazardous", "antithetical", "transgress", "obeisance", "characteristic", "misanthrope", "preponderance", "articulation", "forbearance", "quintessential", "legislation", "parsimonious", "convalescent", "predecessor", "representative", "irrefragable", "gullibility", "nonagenarian", "adulation", "electrolysis", "installation", "incapacitated", "onomatopoeia", "malignant", "centrifugal", "incendiary", "neurological", "idiosyncratic", "xylophonist", "embarcadero", "peregrinate", "grammatically", "misconception", "distinguished", "passionately", "cooperation", "duplicity", "cognizant", "polychromatic", "accommodations", "consanguinity", "aerodynamic", "fibrillation", "justification", "challenging", "pertinent", "captivating",
 "extraordinary", "ostracize", "vaudeville", "listlessness", "insurrection", "boutonniere", "synchroneity","Sesquipedalian",
 "Pernicious",
 "Bouillabaisse",
 "Hemidemisemiquaver",
 "Scherenschnitte",
 "Epistemology",
 "Cacophony",
 "Phantasmagoria",
 "Ebullient",
 "Ineffable",
 "Quotidian",
 "Labyrinthine",
 "Sycophant",
 "Voracious",
 "Pulchritudinous",
 "Zephyr",
 "Quixotic",
 "Xenophobia",
 "Chiaroscuro",
 "Phyllophagous",
 "Abomasum",
 "Abscissa",
 "Acclimatize",
 "Alopecia",
 "Anglophile",
 "Annulet",
 "Anthophilous",
 "Arriviste",
 "Banausic",
 "Bedraggle",
 "Boustrophedon",
 "Braille",
 "Burgeon",
 "Calisthenic",
 "Cappuccino",
 "Carnassial",
 "Catachresis",
 "Clade",
 "Clerihew",
 "Coulomb",
 "Cubbyhole",
 "Dentifrice",
 "Droshky",
 "Impuissance",
 "Jacquard",
 "Judgmental",
 "Latke",
 "Louche",
 "Luau",
 "Novocaine",
 "Propagandize",
 "Pullulate",
 "Satori",
 "Tintinnabulation",
 "Traipse",
 "Trichinosis",
 "Vinaceous",
 "Zirconium",
 "Flibberdoodle",
    "Zygomorphous",
    "Quizzaciously",
    "Snickerblat",
    "Gobbledygookery",
    "Quixle",
    "Blibberwaffle",
    "Snortlefluff",
    "Fluffernutter",
    "Ziggurat",
    "Quokka",
    "Blunderbuss",
    "Snollygoster",
    "Gobbledygook",
    "Brouhaha",
    "Kaleidoscope"

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
    Num = Math.floor(Math.random()*403);
    console.log(Num);
    word = Word[Num];
    console.log(word);
    sleep(1500);
  
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

  