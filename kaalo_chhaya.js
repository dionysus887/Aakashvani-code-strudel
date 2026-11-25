setcpm(125 / 4)

const kit = "LinnDrum"


// disco waala dhol
const kick = s("bd*4")
  .bank(kit)
  .gain(0.95)
  .lpf(1600)

const snare = s("~ sd ~ sd")
  .bank(kit)
  .gain(0.75)
  .room(0.45)

const hat = s("[hh hh oh hh]*4")
  .bank(kit)
  .gain("[0.35 0.25 0.55 0.25]*4")
  .cut(1)

const clap = s("~ cp ~ cp")
  .bank(kit)
  .gain(0.45)
  .room(0.5)

const drums = stack(kick, snare, hat, clap).room(0.3)

// harmony and bass
const chords = note("<[cs3,e3,gs3,b3] [d3,fs3,a3,cs4]>")
  .struct("~ x ~ x ~ x ~ x")
  .s("gm_epiano1")
  .lpf(1900)
  .release(0.35)
  .delay(0.2)
  .room(0.55)
  .gain(0.5)

const pad = note("<[cs4,e4,gs4,b4] [d4,fs4,a4,cs5]>") 
  .s("gm_string_ensemble_1")
  .attack(0.4)
  .release(1.1)
  .lpf(2200)
  .room(0.75)
  .size(0.85)
  .gain(0.38)

const bass = note("<[cs2 cs3 cs2 cs3 cs2 cs3 b1 cs2] [d2 d3 d2 d3 d2 d3 cs2 d2]>")
  .s("gm_electric_bass_finger")
  .lpf(850)
  .gain(0.85)

// hook & solo
const hook = note("<[gs4 ~ gs4 fs4 e4 fs4 gs4 ~] [a4 ~ gs4 fs4 e4 d4 cs4 ~] [gs4 ~ b4 a4 gs4 fs4 e4 ~] [fs4 ~ gs4 fs4 e4 d4 cs4 ~]>")
  .s("pulse")
  .lpf(2800)
  .delay(0.25)
  .room(0.55)
  .gain(0.9)

const solo = note("<[cs5 b4 gs4 fs4 e4 fs4 gs4 b4] [a4 fs4 d4 cs4 d4 fs4 a4 cs5] [e5 cs5 b4 gs4 fs4 e4 ds4 cs4] [d4 fs4 a4 cs5 b4 gs4 fs4 e4]>")
  .s("gm_sitar")
  .lpf(3400)
  .delay(0.35)
  .room(0.65)
  .gain(0.9)
// Song sections
const intro = stack(hat, chords, pad)
const groove = stack(drums, chords, bass, pad)
const chorus = stack(drums, chords, pad, bass, hook)
const soloSection = stack(drums, chords, bass, solo)
const breakdown = stack(hat, clap, chords, pad, hook)


const outro = stack(hat, chords, pad)
  .gain(saw.slow(8).range(0.8, 0))
  .lpf(saw.slow(8).range(1400, 120))

// Arrangement
arrange(
  [4, intro],
  [4, groove],
  [8, chorus],
  [8, soloSection],
  [4, breakdown],
  [4, chorus],
  [8, outro],      
  [999, silence]   
)
