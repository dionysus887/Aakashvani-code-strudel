setcpm(104 / 4)

const kick = s("bd ~ ~ bd ~ ~ bd ~")
  .bank("RolandTR808")
  .gain(0.95)
  .lpf(1100)

const snare = s("~ ~ sd ~ ~ ~ sd ~")
  .bank("LinnDrum")
  .gain(0.85)
  .room(0.75)
  .size(0.85)

const hat = s("[hh hh oh hh]*4")
  .bank("LinnDrum")
  .gain("[0.32 0.16 0.55 0.18]*4")
  .cut(1)

const drums = stack(kick, snare, hat).room(0.3)

const tabla = s("[rim lt mt rim] [rim mt lt rim]")
  .bank("RolandTR808")
  .hpf(240)
  .lpf(3200)
  .pan(0.25)
  .room(0.5)
  .gain(0.75)

const floydBass = note("<[fs1 ~ fs2 e2 cs2 ~ e2 fs2] [b1 ~ b2 a2 fs2 ~ a2 b2] [d2 ~ d3 cs3 a2 ~ cs3 d3] [cs2 ~ gs2 b2 cs3 ~ b2 gs2]>")
  .slow(2)
  .s("triangle, gm_electric_bass_finger")
  .lpf(580)
  .gain(0.98)

const wrightRhodes = note("<[fs3,a3,cs4,e4,gs4] [b2,a3,cs4,ds4,fs4] [d3,a3,cs4,e4,fs4] [cs3,e3,gs3,b3]>")
  .slow(2)
  .struct("x ~ ~ x ~ x ~ ~")
  .s("gm_epiano1")
  .vib(3)
  .vibmod(0.2)
  .lpf(2200)
  .release(0.9)
  .delay(0.3)
  .room(0.75)
  .gain(0.58)

const wallOfStrings = note("<[fs3,a3,cs4,e4,gs4] [b3,ds4,fs4,a4,cs5] [d3,fs3,a3,cs4,e4] [cs3,e3,gs3,b3]>")
  .slow(2)
  .s("gm_string_ensemble_1, gm_synth_strings_1")
  .attack(0.8)
  .release(1.8)
  .hpf(350)
  .lpf(3200)
  .room(0.85)
  .size(0.9)
  .gain(0.42)

const tanpura = note("[fs2,cs3,fs3,cs4]")
  .s("gm_sitar")
  .attack(0.6)
  .release(1.5)
  .hpf(200)
  .lpf(1500)
  .pan(-0.25)
  .room(0.8)
  .gain(0.38)

const gilmourLead = note("<[cs5 ~ ~ ~ e5 ~ fs5 ~] [gs5 ~ ~ fs5 e5 ~ cs5 ~] [ds5 ~ ~ ~ fs5 ~ gs5 ~] [fs5 ~ ~ e5 ds5 ~ b4 ~] [a5 ~ ~ ~ gs5 ~ fs5 ~] [e5 ~ ~ d5 cs5 ~ a4 ~] [gs4 ~ ~ ~ b4 ~ cs5 ~] [cs5 ~ ~ ~ ~ ~ ~ ~]>")
  .s("gm_electric_guitar_clean, triangle")
  .attack(0.06)
  .release(1.3)
  .vib(4.5)
  .vibmod(0.28)
  .lpf(3600)
  .delay(0.35)
  .room(0.8)
  .size(0.85)
  .gain(0.82)

const sitarSolo = note("<[cs5 ~ e5 fs5 gs5 a5 gs5 fs5] [ds5 ~ cs5 b4 a4 b4 cs5 ds5] [fs5 ~ e5 d5 cs5 b4 a4 gs4] [gs4 ~ b4 cs5 e5 ~ ~ ~]>")
  .s("gm_sitar")
  .attack(0.01)
  .release(0.85)
  .lpf(2800)
  .delay(0.28)
  .room(0.7)
  .gain(0.8)

const cosmicIntro = stack(tanpura, wrightRhodes, wallOfStrings.lpf(1400))
const hypnoticGroove = stack(drums, floydBass, wrightRhodes)
const indianBreak = stack(tabla, tanpura, wrightRhodes, sitarSolo)
const indianExplosion = stack(drums, tabla, tanpura, floydBass, wrightRhodes, sitarSolo)
const floydExplosion = stack(drums, floydBass, wrightRhodes, wallOfStrings, gilmourLead)

const outro = stack(tanpura, wrightRhodes, wallOfStrings)
  .gain(saw.slow(8).range(0.8, 0))
  .lpf(saw.slow(8).range(2400, 120))

// arrangment
arrange(
  [8, cosmicIntro],     
  [8, hypnoticGroove],  
  [8, indianBreak],     
  [8, indianExplosion], 
  [16, floydExplosion], 
  [8, outro],           
  [999, silence]
)
