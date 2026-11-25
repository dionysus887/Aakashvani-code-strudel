setcpm(130 / 4)

// drums
const kick = s("bd ~ [~ bd] ~ bd ~ bd ~")
  .bank("LinnDrum")
  .gain(0.95)
  .lpf(1600)

const snare = s("~ sd ~ sd")
  .bank("LinnDrum")
  .gain(0.88)
  .room(0.35)

const perc = s("[mt lt ~ mt] [ht mt lt ~]")
  .bank("RolandTR808")
  .lpf(2800)
  .room(0.4)
  .gain(0.78)


const hat = s("[hh hh oh hh]*4")
  .bank("LinnDrum")
  .gain("[0.38 0.2 0.58 0.22]*4")
  .cut(1)

const drums = stack(kick, snare, perc, hat).room(0.2)

// bass and chords
const fuzzBass = note("<[b1 ~ b1 d2 e2 ~ fs2 a2] [b1 ~ b1 d2 e2 d2 b1 a1] [g1 ~ g1 b1 d2 ~ e2 d2] [fs1 ~ a1 b1 ~ ~ ~ ~]>")
  .s("gm_electric_bass_finger")
  .lpf(950)
  .lpq(5)                    
  .shape(0.35)               
  .gain(0.85)

const funkKeys = note("<[b2,d3,fs3,a3] [e3,gs3,b3,d4,fs4] [g2,b2,d3,fs3] [fs2,as2,cs3,e3]>")
  .struct("~ x ~ x ~ x x ~")
  .s("gm_clavinet")
  .lpf(2800)
  .release(0.22)
  .room(0.45)
  .gain(0.6)

const cheekyHook = note("<[b4 ~ d5 b4 a4 fs4 e4 d4] [e4 ~ fs4 a4 b4 ~ ~ ~] [d5 ~ b4 a4 g4 fs4 e4 d4] [fs4 ~ as4 c#5 b4 ~ ~ ~]>")
  .s("gm_brass_section, gm_sitar") 
  .attack(0.01)
  .release(0.55)
  .lpf(4200)
  .delay(0.22)
  .room(0.55)
  .gain(0.85)


const organSolo = note("<[b4 d5 fs5 a5 b5 a5 fs5 d5] [e5 gs5 b5 d6 b5 gs5 e5 d5] [g5 fs5 e5 d5 b4 a4 g4 fs4] [as4 cs5 e5 fs5 b5 ~ ~ ~]>")
  .s("gm_rock_organ")
  .attack(0.02)
  .release(0.5)
  .vib(5.5)
  .vibmod(0.25)
  .lpf(3800)
  .delay(0.25)
  .room(0.65)
  .gain(1.5)

// Sections
const bassIntro = stack(perc, fuzzBass)
const funkGroove = stack(drums, fuzzBass, funkKeys)
const mainHook = stack(drums, fuzzBass, funkKeys, cheekyHook)
const soloJam = stack(drums, fuzzBass, funkKeys, organSolo)
const breakdown = stack(perc, hat, fuzzBass, cheekyHook)

const outro = stack(perc, fuzzBass, funkKeys)
  .gain(saw.slow(8).range(0.85, 0))
  .lpf(saw.slow(8).range(2200, 140))

// arrangment
arrange(
  [4, bassIntro],    
  [4, funkGroove],   
  [8, mainHook],     
  [8, soloJam],      
  [4, breakdown],    
  [8, mainHook],     
  [8, outro],        
  [999, silence]
)

