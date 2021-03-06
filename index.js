const app = "I don't do much.";
const digitalClock = { 
  time: Math.round(Date.now() / 1000), 
  startTicking: function() {
    setInterval(()=> this.time++, 1000);
  }
}

const censor = (word, str) => {
  let matcher = new RegExp(word, 'gi');
  return str.replace(matcher, 'BLEEP');
}

const violenceCensor = censor.bind(null, 'violence');
const drugsCensor = censor.bind(null, 'drugs');
