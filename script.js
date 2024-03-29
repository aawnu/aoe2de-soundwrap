function Taunter() {
  /** @type {boolean} */
  this.ready = false

  /** @type {HTMLElement} */
  this.statusElement

  /** @type {HTMLElement} */
  this.messageElement

  /** @type {?string} */
  this.msg = null

  /** @type {HTMLAudioElement} */
  const player = new Audio()

  player.onended = () => {
    this.setStatus("paused")
    this.setMessage()
  }

  player.oncanplaythrough = () => {
    if (player.duration > 0) {
      player.play()
    }
  }

  player.onplay = () => {
    this.setStatus("playing")
    this.setMessage(this.msg)
  }

  /** @type {HTMLAudioElement} */
  this.player = player
}

/**
 * @returns
 */
Taunter.prototype.Ready = function () {
  this.setStatus("paused")
  this.setMessage()
  this.ready = true
}

/**
 * @param {HTMLElement} element
 */
Taunter.prototype.setStatusElement = function (element) {
  this.statusElement = element
}

/**
 *
 * @param {"paused"|"playing"|"offline"} status
 * @returns
 */
Taunter.prototype.setStatus = function (status) {
  if (!this.statusElement) return
  this.statusElement.className = status
}

/**
 * @param {HTMLElement} element
 */
Taunter.prototype.setMessageElement = function (element) {
  this.messageElement = element
}

/**
 * @param {string} msg
 * @returns
 */
Taunter.prototype.setMessage = function (msg = "") {
  if (!this.messageElement) return
  this.messageElement.innerHTML = msg
}

/**
 *
 * @param {number} id
 * @returns {Promise<void>}
 */
Taunter.prototype.QueueSound = function (id) {
  if (isNaN(id)) return
  if (!this.player.ended && this.player.currentTime != 0) return

  /** @type {string} */
  const url = `./sfx/${id}.ogg`

  if (this.player.src.endsWith(url.substring(1))) {
    console.log("Replay", this.player.src)
    this.player.play()
    return
  }

  this.msg = this.getTauntMessage(id)
  this.player.src = url
}

/**
 *
 * @param {number} id
 * @returns {string}
 */
Taunter.prototype.getTauntMessage = function (id) {
  return (
    {
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
    }[id] || ""
  )
}

/**
 *
 * @param {Taunter} taunter
 * @param  {...string} channel
 */
const srv = (taunter, ...channel) => {
  const socketUri = {
    http: "ws://irc-ws.chat.twitch.tv:80",
    https: "wss://irc-ws.chat.twitch.tv:443",
  }

  /**
   * @param {string} msg
   * @returns {Promise<number>}
   */
  const parse = async (msg) => {
    const f = new RegExp(`PRIVMSG #[a-zA-Z0-9\-\_]+ :([0-9\n]+)$`, ["gim"]).exec(msg)
    if (!f || f.length < 2) return NaN
    return parseInt(f[1])
  }

  /** @type {WebSocket} */
  const ws = new WebSocket(socketUri.https)

  ws.onopen = async () => {
    // ws.send("CAP REQ :twitch.tv/membership twitch.tv/tags twitch.tv/commands");
    ws.send("PASS listener123")
    ws.send("NICK justinfan1337")

    channel.forEach((chan) => {
      ws.send("JOIN #" + chan)
    })

    taunter.Ready()
  }

  ws.onclose = async (event) => {
    taunter.setStatus("offline")
    console.log("onclose", event)
    setTimeout(srv, 5000, taunter, ...channel)
  }

  ws.onerror = async (event) => {
    taunter.setStatus("offline")
    console.log("onerror", event)
    setTimeout(srv, 5000, taunter, ...channel)
  }

  ws.onmessage = async (event) => {
    /** @type {string} */
    const data = event.data ?? ""

    if (data.substring(0, 4) == "PING") {
      ws.send("PONG " + data.substring(5))
      return
    }

    parse(data).then((n) => {
      if (!isNaN(n)) {
        taunter.QueueSound(n)
      }
    })
  }
}
