const srv = (status, elem, channel) => {
  const setElem = (txt) => {
    if (!elem) return;
    elem.innerHTML = txt;
  };
  const setLive = () => {
    if (!status) return;
    status.classList.remove("offline");
    status.classList.add("online");
  };
  const setOffline = () => {
    if (!status) return;
    status.classList.remove("online");
    status.classList.add("offline");
  };

  let playing = false;
  const parseMsg = new RegExp(`PRIVMSG #${channel} :(.*)$`, ["gim"]);

  const soundLabel = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47",
    "48",
    "49",
    "50",
    "51",
    "52",
    "53",
    "54",
    "55",
    "56",
    "57",
    "58",
    "59",
    "60",
    "61",
    "62",
    "63",
    "64",
    "65",
    "66",
    "67",
    "68",
    "69",
    "70",
    "71",
    "72",
    "73",
    "74",
    "75",
    "76",
    "77",
    "78",
    "79",
    "80",
    "81",
    "82",
    "83",
    "84",
    "85",
    "86",
    "87",
    "88",
    "89",
    "90",
    "91",
    "92",
    "93",
    "94",
    "95",
    "96",
    "97",
    "98",
    "99",
    "100",
    "101",
    "102",
    "103",
    "104",
    "105",
  ];
  const soundsVoice = {
    1: "Yes",
    2: "No",
    3: "Food Please",
    4: "Wood Please",
    5: "Gold Please",
    6: "Stone Please",
    7: "Ahh",
    8: "All Hail, King of the Losers",
    9: "Oooh",
    10: "I'll Beat You Back to Age of Empires",
    11: "Hahahahahah",
    12: "Ack, He Rushed",
    13: "Sure Blame it on Your ISP",
    14: "Start the Game Already",
    15: "Don't Point That Thing at Me",
    16: "Enemy Sighted",
    17: "It is Good To be the King",
    18: "Monk, I Need a Monk",
    19: "Long Time, No Siege",
    20: "My Granny Could Scrap Better Than That",
    21: "Nice Town, I'll Take It",
    22: "Quit Touchin Me",
    23: "Raiding Party",
    24: "Dadgum",
    25: "Ehhh Smite Me",
    26: "The Wonder, The Wonder, The Noooooo",
    27: "You Played 2 Hours to Die Like This",
    28: "Yeah Well You Should See the Other Guy",
    29: "Rogan?",
    30: "WOLOLO",
    31: "Attack an Enemy Now",
    32: "Cease Creating Extra Villagers",
    33: "Create Extra Villagers",
    34: "Build a Navy",
    35: "Stop Building a Navy",
    36: "Wait for my Signal to Attack",
    37: "Build a Wonder",
    38: "Give Me Your Extra Resources",
    39: "(Ally Sound)",
    40: "(Enemy Sound)",
    41: "(Neutral Sound)",
    42: "What Age are you in",
    43: "What is Your Strategy",
    44: "How Many Resources do you Have",
    45: "Retreat Now",
    46: "Flare the Location of Your Army",
    47: "Attack in the Direction of the Flared Location",
    48: "I'm Being Attacked, Please Help",
    49: "Build a Forward Base at the Flared Location",
    50: "Build a Fortification at the Flared Location",
    51: "Keep Your Army Close to Mine and Fight With Me",
    52: "Build a Market at the Flared Location",
    53: "Rebuild Your Base at the Flared Location",
    54: "Build a Wall Between the two Flared Locations",
    55: "Build a Wall Around Your Town",
    56: "Train Units Which Counter the Enemy's Army",
    57: "Stop Training Counter Units",
    58: "Prepare to Send me all Your Resources so I can Vanquish Our Foes",
    59: "Stop Sending me Extra Resources",
    60: "Prepare to Train a Large Army, I'll Send You as Many Resources as I can Spare",
    61: "Attack Player 1",
    62: "Attack Player 2",
    63: "Attack Player 3",
    64: "Attack Player 4",
    65: "Attack Player 5",
    66: "Attack Player 6",
    67: "Attack Player 7",
    68: "Attack Player 8",
    69: "Delete the Object on the Flared Location",
    70: "Delete Your Excess Villagers",
    71: "Delete Excess Warships",
    72: "Focus on Training Infantry Units",
    73: "Focus on Training Cavalry Units",
    74: "Focus on Training Ranged Units",
    75: "Focus on Training Warships",
    76: "Attack the Enemy With Militia",
    77: "Attack the Enemy With Archers",
    78: "Attack the Enemy With Skirmishers",
    79: "Attack the Enemy With a mix of Archers and Skirmishers",
    80: "Attack the Enemy With Scout Cavalry",
    81: "Attack the Enemy With Men-At-Arms",
    82: "Attack the Enemy With Eagle Scouts",
    83: "Attack the Enemy With Towers",
    84: "Attack the Enemy With Crossbowmen",
    85: "Attack the Enemy With Cavalry Archers",
    86: "Attack the Enemy With Unique Units",
    87: "Attack the Enemy With Knights",
    88: "Attack the Enemy With Battle Elephants",
    89: "Attack the Enemy With Scorpions",
    90: "Attack the Enemy With Monks",
    91: "Attack the Enemy With Monks and Mangonels",
    92: "Attack the Enemy With Eagle Warriors",
    93: "Attack the Enemy With Halberdiers and Rams",
    94: "Attack the Enemy With Elite Eagle Warriors",
    95: "Attack the Enemy With Arbalests",
    96: "Attack the Enemy With Champions",
    97: "Attack the Enemy With Galleys",
    98: "Attack the Enemy With Fire Galleys",
    99: "Attack the Enemy With Demolition Rafts",
    100: "Attack the Enemy With War Galleys",
    101: "Attack the Enemy With Fire Ships",
    102: "Attack the Enemy With Unique Warships",
    103: "Use an Onager to cut Down Trees at the Flared Location",
    104: "Don't Resign",
    105: "You can Resign Now",
  };
  const soundLoad = [
    null,
    ...soundLabel.map((d) => new Audio(`./sfx/${d}.ogg`)),
  ];

  const parse = (msg) => {
    const f = parseMsg.exec(msg);
    if (!f || f.length < 2) return "";
    return f[1];
  };

  ws = new WebSocket("ws://irc-ws.chat.twitch.tv:80");

  ws.onopen = (event) => {
    ws.send("CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands");
    ws.send("PASS listener123");
    ws.send("NICK justinfan1337");
    ws.send("JOIN #" + channel);
    setElem("");
    setLive();
  };

  ws.onclose = (event) => {
    setOffline();
    console.log("onclose", event);
    setTimeout(srv, 5000);
  };

  ws.onerror = (event) => {
    setOffline();
    console.log("onerror", event);
  };

  ws.onmessage = (event) => {
    if (event.data.substring(0, 4) == "PING") {
      ws.send("PONG " + event.data.substring(5));
      return;
    }

    const lookup = parse(event.data);
    if (soundLabel.includes(lookup)) {
      playing = true;
      const sfx = soundLoad[lookup];
      setElem(soundsVoice[lookup]);
      soundLoad[lookup].play();
      setTimeout(() => {
        playing = false;
        setElem("");
      }, 1000 + sfx.duration);
    }
  };
};
