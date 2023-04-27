class Hour_text {
    constructor(idName) {
      this.idName = idName;
    }
    generateText() {
      var excisting_hr = {"Hoist":4913, "Gantry":1501, "Trolly":2870}
      var count_seconds = Number(document.getElementById(this.idName).innerText)/1000;
      var count_hours = Math.floor(count_seconds/3600)
      var count_minutes = Math.floor(count_seconds/60 - count_hours*60)
      var hour_reading = excisting_hr[this.idName]+count_hours
      document.getElementById(`${this.idName}`).innerText = hour_reading +" hr "+ count_minutes+" min"
    }
  }

let hoist_text = new Hour_text("Hoist");
hoist_text.generateText();

let gantry_text = new Hour_text("Gantry");
gantry_text.generateText();

let trolly_text = new Hour_text("Trolly");
trolly_text.generateText();

document.getElementById("Wind").innerText /= 100

