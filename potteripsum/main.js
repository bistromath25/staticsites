const words = [
    "wizard",
    "sorcerer's stone",
    "bed",
    "dreams",
    "mind",
    "death",
    "scary",
    "wand",
    "silly incantation",
    "subtle science",
    "potion-making",
    "abilities",
    "bravery",
    "enemies",
    "friends",
    "money",
    "humans",
    "terrible thing",
    "twelve-foot mountain troll",
    "music",
    "magic",
    "name",
    "voices",
    "wizarding world",
    "library",
    "flame",
    "ashes",
    "fickle friend",
    "slower",
    "solemnly swear",
    "murdered",
    "spirit",
    "mirror",
    "light",
    "insane",
    "house",
    "stairs",
    "pain",
    "devotion",
    "mirror",
    "habit and language",
    "education",
    "talents",
    "pudding",
    "emotional range",
    "teaspoon",
    "laugh",
    "rules",
    "old men",
    "night",
    "greatest treasure",
    "nerve",
    "youth",
    "child",
    "blunt axe",
    "quality",
    "years",
    "lifetime",
    "hurt",
    "confronted",
    "brought",
    "not-so-humble",
    "power",
    "spell",
    "head",
    "fly",
    "ferret",
    "various disguises",   
]

const spells = [
    "avada kedavra",
    "sectumsempra",
    "expecto patronum",
    "riddikulus",
    "expelliarmus",
    "wingardium leviosa",
    "expecto",
    "patronum",
    "impedimenta",
    "mobilicorpus",
    "evanesco",
    "sonorus",
    "petrificus",
    "totalus",
    "wingardium",
    "leviosa",
    "lacarnum",
    "inflamarae",
    "quietus",
    "tarantallegra",
    "funnunculus",
    "immobilus",
    "rictusempra",
    "stupefy",
    "engorgio",
    "protego",
    "lumos",
    "locomotor",
    "mortis",
    "aparecium",
    "legilimens",
];

const phrases = [
    "yer a wizard",
    "could all have been killed — or worse, expelled",
    "if you don't mind, I'm going to bed",
    "dwell on dreams and forget to live",
    "a little scary sometimes",
    "there will be no foolish wand-waving or silly incantations in this class",
    "for those select few who possess the predisposition, I can teach you how to bewitch the mind and ensnare the senses",
    "how to bottle fame, brew glory, and even put a stopper in death",
    "maybe some of you have come to Hogwarts in possession of abilities so formidable that you feel confident enough to not pay attention",
    "takes a great deal of bravery to stand up to our enemies",
    "love as powerful as your mother's for you leaves its own mark",
    "even though the person who loved us is gone",
    "money and life as you could want",
    "it is a beautiful and terrible thing",
    "a magic beyond all we do here",
    "increases fear of the thing itself",
    "in my bedroom, making no noise",
    "isn’t a good sign, even in the wizarding world",
    "go to the library",
    "if you were any slower, you’d be going backward",
    "I solemnly swear I am up to no good",
    "happiness can be found, even in the darkest of times",
    "I want to commit the murder I was imprisoned for",
    "when can I move in",
    "we don't send wizards to Azkaban just for blowing up their aunts",
    "mischief managed",
    "take a good look at how he treats his inferiors, not his equals",
    "it matters not what someone is born",
    "nothing at all if our aims are identical",
    "accio brain",
    "the mind is a complex and many-layered thing",
    "I don't give a damn what your father thinks",
    "I think I'll just go down and have some pudding",
    "and wait for it all to turn up",
    "people used to believe there were no such things as",
    "got both light and dark inside us",
    "wit beyond measure is man's greatest treasure",
    "let us step out into the night and pursue that flighty temptress, adventure",
    "left to ponder in silence the depths to which",
    "I am a wizard, not a baboon brandishing a stick",
    "age is foolish and forgetful when it underestimates youth",
    "you show all the sensitivity of a blunt axe",
    "don't know how this might end",
    "had enough trouble for a lifetime",
    "childish question had escaped",
    "words are, in my not-so-humble opinion, our most inexhaustible source of magic",
    "those who are best suited to power are those who have never sought it",
    "have leadership thrust upon them, and take up the mantle because they must",
    "find to their own surprise that they wear it well",
    "I've always wanted to use that spell",
    "why on earth should that mean that it is not real",
    "craned around to look at the other students",
    "and as her silvery glow faded he turned back to Snape, and his eyes were full of tears",
    "to the well-organized mind, death is but the next great adventure",
    "it is our choices, Harry, that show what we truly are, far more than our abilities",
    "they did catch a real witch or wizard, burning had no effect whatsoever",
    "perform a basic Flame Freezing Charm",
    "no less than forty seven times in various disguises",
    "it is the unknown we fear when we look upon death and darkness, nothing more",
    "but there is something that matters even more—believing in yourself",
];

const beginning = ["yer a wizard Harry",];
const ending = ["the bravest man I ever knew",];

const lorem = [
    "consectetur adipiscing elit, sed do eiusmod tempor",
    "incididunt ut labore et dolore magna aliqua",
    "ut enim ad minim veniam, quis nostrud exercitation ullamco laboris",
    "nisi ut aliquip ex ea commodo consequat",
    "duis aute irure dolor in reprehenderit in",
    "voluptate velit esse cillum dolore", 
    "eu fugiat nulla pariatur",
    "excepteur sint occaecat cupidatat non proident", 
    "sunt in culpa qui officia deserunt mollit anim id est laborum",];
    
const punctuation = [
    ".",
]

const form = document.querySelector(".form");
const nparagraphs = document.getElementById("nparagraphs");
const startwithlorem = document.getElementById("startwithlorem");
const randomlorem = document.getElementById("randomlorem");
const coolending = document.getElementById("coolending");
const result = document.querySelector(".result");

function randint(min, max) {  // exclude max
    return Math.random() * (max - min) + min;
}

form.addEventListener("submit", e => {
    e.preventDefault()
    const value = parseInt(nparagraphs.value);
    
    var res = "";
    var sentences = [];
    
    for (n = 1; n <= nparagraphs.value; n++) {
        var parts = randint(5, 7);
        for (i = 1; i <= parts; i++) {
            var cur = "";
            if (Math.random() < 0.5) {
                cur += ' ' + words[Math.floor(Math.random() * words.length)] + ' ' + phrases[Math.floor(Math.random() * phrases.length)];
                if (Math.random() < 0.5) {
                    cur += ', ' + words[Math.floor(Math.random() * words.length)];
                }
            } 
            else {
                cur += ' ' + phrases[Math.floor(Math.random() * phrases.length)] + ' ' + words[Math.floor(Math.random() * words.length)];
                if (Math.random() < 0.5) {
                    cur += ', ' + phrases[Math.floor(Math.random() * phrases.length)];
                }
            }
            
            if (Math.random() < 0.5) {
                if (Math.random() < 0.5) {
                    parts -= 1;
                    cur += ' ' + spells[Math.floor(Math.random() * spells.length)] + ' ' + words[Math.floor(Math.random() * words.length)];
                } 
                else {
                    parts -= 1;
                    cur = ' ' + spells[Math.floor(Math.random() * spells.length)] + ", " + cur;
                }
            }
            
            if (randomlorem.checked) {
                if (Math.random() < 0.5) {
                    if (Math.random() < 0.5) {
                        parts -= 1;
                        cur += ' ' + lorem[Math.floor(Math.random() * lorem.length)];
                    } 
                    else {
                        parts -= 1;
                        cur = ' ' + lorem[Math.floor(Math.random() * lorem.length)] + ", " + cur;
                    }
                }
            }
            
            cur = cur.slice(1);
            cur = cur.charAt(0).toUpperCase() + cur.slice(1) + punctuation[Math.floor(Math.random() * punctuation.length)];
            sentences.push(cur);
        }
        
        /*
        cur = cur.slice(1);
        cur = cur.charAt(0).toUpperCase() + cur.slice(1);
        for (i = 1; i < cur.length - 2; i++) {
            if (cur.charAt(i) === '.') {
                cur = cur.slice(0, i + 2) + cur.charAt(i + 2).toUpperCase() + cur.slice(i + 3);
            }
        }
        res += cur;
        */
        
        /*
        if (n < nparagraphs.value) {
            res += "<br><br>";
        }*/
        if (n < nparagraphs.value) {
            sentences.push("<br><br>");
        }
    }
    
    res = sentences.join(' ');
        
    if (startwithlorem.checked) {
        if (!(res.charAt(0) == 'I' && (res.charAt(1) == ' ' || res.charAt(1) == '\''))) {
            res = res.charAt(0).toLowerCase() + res.slice(1);
        }
        res = "Lorem ipsum dolor sit amet, " + res;
        
        
        if (!(sentences[0].charAt(0) == 'I' && (sentences[0].charAt(1) == ' ' || sentences[0].charAt(1) == '\''))) {
            sentences[0] = sentences[0].charAt(0).toLowerCase() + sentences[0].slice(1);
        }
        sentences[0] = "Lorem ipsum dolor sit amet, " + sentences[0];
    }
    
    if (coolending.checked) {
        var end = ending[Math.floor(Math.random() * ending.length)];
        if (Math.random() < 0.5) {
            res = res.slice(0, -1);
            res += ", " + end;
        } 
        else {
            end = end.charAt(0).toUpperCase() + end.slice(1);
            res += ' ' + end;
        }
        res += '.';    
    }
    
    result.innerHTML = `<p class="result">${res}</p>`;
})

