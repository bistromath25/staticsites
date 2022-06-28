const words = [
    "wolves",
    "looked",
    "over",
    "thee",
    "when",
    "thou wast brought",
    "the Council",
    "old too",
    "young",
    "young wolves",
    "cubs",
    "believe",
    "Shere Khan",
    "taught",
    "them",
    "man-cub",
    "no place",
    "the Pack",
    "grew",
    "strong",
    "boy",
    "does not know",
    "learning",
    "lessons",
    "except",
    "things",
    "eat",
    "his own",
    "fear",
    "man's cub",
    "speak",
    "harm",
    "gift",
    "words",
    "let him run",
    "entered",
    "the others",
    "myself",
    "will teach him",
    "tiger",
    "snake",
    "bear",
    "wise",
    "help",
    "time",
    "the jungle",
    "shut",
    "me",
    "forget your talk",
    "your companionship",
    "merciful",
    "brother in blood",
    "promise",
    "man among men",
    "betray ye to men",
    "anrgy",
    "afraid",
    "the worst kind of cowardice",
    "the Law of the Jungle",
    "any dispute",
    "the right of a cub",
    "be accepted by the Pack",
    "must be spoken for",
    "father and mother",
    "a leader of the Pack",
    "his kill",
    "the Dead Wolf",
    "rule",
    "answer",
    "mine",
    "live",
    "run",
    "hunt",
    "hunter of little naked cubs",
    "frog eater",
    "fish killer",
    "thou canst kill everything",
    "that thou art strong enough to kill",
    "sake of the bull",
    "never kill or eat any cattle young or old",
    "young or old",
    "red flower",
    "creature",
    "proper name",
    "beast",
    "deadly fear",
    "hundred ways",
    "describing",
    "weakest",
    "defenseless",
    "unsportsmanlike to touch him",
    "shame",
    "night",
    "life's end",
    "words are true",
    "bounded",
    "good hunting",
    "foot of the hill",
    "roar well",
    "another tune",
    "brothers",
    "paws",
    "thorn",
    "the air",
    "night noises",
    "one big silence",
    "path",
    "only tears",
    "strength",
    "feebler",
    "a new leader",
    "sorrow",
    "punishment",
    "heart is heavy",
    "terrible",
]

const phrases = [
    "many of the wolves that looked thee over when thou wast brought to the Council",
    "and the young wolves believe, as Shere Khan has taught them",
    "that a man-cub has no place with the Pack",
    "he grew and grew strong as a boy must grow who does not know",
    "who has nothing in the world to think of except things to eat",
    "the man's cub? I speak for the man’s cub. There is no harm in a man’s cub",
    "let him run with the Pack, and be entered with the others. I myself will teach him",
    "he may be a help in time",
    "the jungle is shut to me, and I must forget your talk and your companionship",
    "but I will be more merciful than ye are",
    "as all but your brother in blood, I promise that when I am a man among men",
    "will not betray ye to men as ye have betrayed me",
    "don't be angry after you've been afraid. That's the worst kind of cowardice",
    "now the Law of the Jungle lays down that if there is any dispute",
    "the right of a cub to be accepted by the Pack",
    "must be spoken for by at least two members of the Pack",
    "who are not his father and mother",
    "leader of the Pack has missed his kill",
    "he is called the Dead Wolf as long as he lives, which is not long, as a rule",
    "shall live to run with the Pack and to hunt with the Pack",
    "all the jungle is thine, and thou canst kill everything that thou art strong enough to kill",
    "but for the sake of the bull that bought thee thou must never kill or eat any cattle young or old",
    "meant fire, only no creature in the jungle will call fire by its proper name",
    "and invents a hundred ways of describing it",
    "man is the weakest and most defenseless of all living things",
    "ye have told me so often tonight that I am a man that I feel your words are true",
    "at the foot of the hill he cried again long and loud",
    "hunting on a new trail, Master of the Jungle",
    "what is a man that he should not run with his brothers? I was born in the jungle",
    "there is no wolf of ours from whose paws I have not pulled a thorn",
    "the air was full of all the night noises that, taken together, make one big silence",
    "everybody knew Bagheera, and nobody cared to cross his path",
    "of the time that comes to every leader of every pack when his strength goes from him",
    "my heart is heavy with the things that I do not understand",
    "one of the beauties of Jungle Law is that punishment settles all scores. There is no nagging afterward",
    "and because I had learned the ways of men, I became more terrible in the jungle than Shere Khan",
    "those are only tears such as men use",
    "strike first and then give tongue",
];

const beginning = ["what is the Law of the Jungle",];
const ending = ["that is the Law of the Jungle",];

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
            if (Math.random() < 0.5) {
                res += ", " + end;
            } 
            else {
                res += "; " + end;
            }
        } 
        else {
            end = end.charAt(0).toUpperCase() + end.slice(1);
            res += ' ' + end;
        }
        res += '.';    
    }
    
    result.innerHTML = `<p>${res}</p>`;
})

