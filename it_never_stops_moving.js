setcpm(108 / 4)

// drums
const kick = s("bd ~ ~ bd ~ ~ bd ~")
  .bank("RolandTR808")
  .gain(0.98)
  .lpf(1100)

const snare = s("~ ~ sd ~ ~ ~ sd ~")
  .bank("LinnDrum")
  .gain(0.88)
  .room(0.75)
  .size(0.85)

const hat = s("[hh hh oh hh]*4")
  .bank("LinnDrum")
  .gain("[0.32 0.16 0.58 0.2]*4")
  .cut(1)

const drums = stack(kick, snare, hat).room(0.28)

// tabla type rhythm
const tabla = s("[rim lt mt rim] [rim mt lt [rim*2]]")
  .bank("RolandTR808")
  .hpf(240)
  .lpf(3400)
  .pan(0.25)
  .room(0.5)
  .gain(0.78)

// bass
const deepBass = note("<[d1 ~ d2 c2 a1 ~ c2 d2] [g1 ~ g2 f2 d2 ~ f2 g2] [bb1 ~ bb2 a2 f2 ~ a2 bb2] [c2 ~ c3 bb2 g2 ~ bb2 c3]>")
  .slow(2)
  .s("triangle, gm_electric_bass_finger")
  .lpf(580)
  .gain(0.98)

// tanpura drone
const tanpura = note("[d2,a2,d3,a3]")
  .s("gm_sitar")
  .attack(0.6)
  .release(1.5)
  .hpf(200)
  .lpf(1500)
  .pan(-0.25)
  .room(0.85)
  .gain(0.4)

// rhodes chords
const rhodes = note("<[d3,f3,a3,c4,e4] [g2,f3,a3,b3,e4] [bb2,d3,f3,a3,c4] [c3,e3,g3,b3,d4]>")
  .slow(2)
  .struct("x ~ ~ x ~ x ~ ~")
  .s("gm_epiano1")
  .vib(3)
  .vibmod(0.2)
  .lpf(2200)
  .release(0.9)
  .delay(0.28)
  .room(0.75)
  .gain(0.58)

// wall of strings
const wallOfStrings = note("<[d3,f3,a3,c4,e4] [g3,b3,d4,f4,e4] [bb2,d3,f3,a3,c4] [c3,e3,g3,b3,d4]>")
  .slow(2)
  .s("gm_string_ensemble_1, gm_synth_strings_1")
  .attack(0.75)
  .release(1.8)
  .hpf(350)
  .lpf(3400)
  .room(0.85)
  .size(0.9)
  .gain(0.45)

// badiya cheeze
const santoorDrops = note("<[a4 d5 f5 a5 g5 f5 d5 c5] [b4 d5 g5 b5 a5 g5 d5 b4] [a4 d5 f5 a5 g5 f5 d5 c5] [g4 c5 e5 g5 f5 e5 c5 a4]>")
  .s("gm_celesta")
  .attack(0.01)
  .release(0.9)
  .lpf(3800)
  .delay(0.35)
  .room(0.8)
  .gain(0.55)

// bansuri
const bansuriAlap = note("<[a4 ~ ~ ~ c5 ~ d5 ~] [e5 ~ ~ d5 c5 ~ a4 ~] [b4 ~ ~ ~ d5 ~ e5 ~] [d5 ~ ~ c5 b4 ~ g4 ~] [f5 ~ ~ ~ e5 ~ d5 ~] [c5 ~ ~ bb4 a4 ~ f4 ~] [g4 ~ ~ ~ a4 ~ c5 ~] [d5 ~ ~ ~ ~ ~ ~ ~]>")
  .s("gm_flute")
  .attack(0.08)
  .release(1.1)
  .vib(4.5)
  .vibmod(0.22)
  .lpf(3200)
  .delay(0.35)
  .room(0.8)
  .gain(0.75)

// sitar solo
const sitarSolo = note("<[a4 ~ c5 d5 e5 f5 e5 d5] [b4 ~ a4 g4 f4 g4 a4 b4] [d5 ~ c5 bb4 a4 g4 f4 e4] [g4 ~ a4 c5 d5 ~ ~ ~]>")
  .s("gm_sitar")
  .attack(0.01)
  .release(0.85)
  .lpf(2900)
  .delay(0.28)
  .room(0.7)
  .gain(0.82)

// synth lead
const climaxLead = note("<[a4 ~ ~ ~ c5 ~ d5 ~] [e5 ~ ~ d5 c5 ~ a4 ~] [b4 ~ ~ ~ d5 ~ e5 ~] [d5 ~ ~ c5 b4 ~ g4 ~] [f5 ~ ~ ~ e5 ~ d5 ~] [c5 ~ ~ bb4 a4 ~ f4 ~] [g4 ~ ~ ~ a4 ~ c5 ~] [d5 ~ ~ ~ ~ ~ ~ ~]>")
  .add("<0 [0, 12]>")           
  .s("gm_electric_guitar_clean, triangle")
  .attack(0.05)
  .release(1.3)
  .vib(4.8)
  .vibmod(0.28)
  .lpf(4200)
  .delay(0.35)
  .room(0.85)
  .size(0.9)
  .gain(0.85)

// song sections
const etherealIntro = stack(tanpura, santoorDrops, bansuriAlap)
const grooveEnter = stack(drums, tabla, tanpura, deepBass, rhodes, santoorDrops)
const sitarBreak = stack(tabla, tanpura, rhodes, sitarSolo)
const tensionHold = stack(tanpura, wallOfStrings.lpf(1600), s("~ ~ ~ [sd*4]").bank("LinnDrum").gain(0.75)) 
const theExplosion = stack(drums, tabla, tanpura, deepBass, rhodes, wallOfStrings, santoorDrops, climaxLead)

const outro = stack(tanpura, santoorDrops, wallOfStrings)
  .gain(saw.slow(8).range(0.8, 0))
  .lpf(saw.slow(8).range(2600, 120))

// Arrangement
arrange(
  [8, etherealIntro], 
  [8, grooveEnter],   
  [8, sitarBreak],    
  [1, tensionHold],   
  [16, theExplosion], 
  [8, outro],         
  [999, silence]
)
