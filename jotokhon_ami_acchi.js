setcpm(110 / 4)

const kick = s("bd ~ ~ bd ~ ~ bd ~")
  .bank("RolandTR808")
  .gain(0.92)
  .lpf(950)

const snare = s("~ ~ rim ~ ~ ~ [sd ~ rim] ~")
  .bank("RolandTR707")
  .gain(0.68)
  .room(0.6)

const ride = s("hh*8")
  .bank("RolandTR707")
  .gain("[0.34 0.15 0.28 0.16]*2")
  .lpf(4200)

const tabla = s("[rim lt mt rim] [rim mt lt [rim*2]]")
  .bank("RolandTR808")
  .hpf(220)
  .lpf(3000)
  .pan(0.25)
  .room(0.55)
  .gain(0.75)

const drums = stack(kick, snare, ride, tabla).room(0.3)

const tanpura = note("[d2,a2,d3,a3]")
  .s("gm_sitar")
  .attack(0.6)
  .release(1.6)
  .hpf(180)
  .lpf(1450)
  .pan(-0.25)
  .room(0.85)
  .gain(0.4)


const droneBass = note("<[d1 ~ a1 c2 d2 ~ c2 a1] [g1 ~ d2 f2 g2 ~ f2 d2] [bb1 ~ f2 a2 bb2 ~ a2 f2] [a1 ~ e2 g2 a2 ~ g2 e2]>")
  .slow(2)
  .s("gm_fretless_bass")
  .lpf(800)
  .gain(0.95)

// chords
const smoothRhodes = note("<[d3,f3,a3,c4,e4] [g2,f3,a3,b3,e4] [bb2,d3,f3,a3,c4] [a2,d3,g3,c4]>")
  .slow(2)
  .struct("x ~ ~ x ~ x ~ ~")
  .s("gm_epiano1")
  .vib(3.5)
  .vibmod(0.24)
  .lpf(2200)
  .release(1.0)
  .delay(0.28)
  .room(0.75)
  .gain(0.58)

const vcs3Swirl = note("<[d4 f4 a4 c5 e5 c5 a4 f4] [g4 b4 d5 f5 e5 d5 b4 g4] [bb3 d4 f4 a4 c5 a4 f4 d4] [a3 d4 g4 c5 d5 c5 g4 d4]>")
  .slow(2)
  .s("sawtooth")
  .lpf(sine.slow(6).range(900, 2600)) // psychedelic filter
  .lpq(3.5)
  .pan(sine.slow(4).range(-0.65, 0.65)) // panning stuff
  .delay(0.32)
  .room(0.8)
  .gain(0.36)

const sitarRaga = note("<[a4 ~ c5 d5 e5 f5 e5 d5] [b4 ~ d5 g5 fs5 e5 d5 b4] [d5 ~ c5 bb4 a4 g4 f4 e4] [g4 ~ a4 c5 d5 ~ ~ ~]>")
  .s("gm_sitar")
  .attack(0.01)
  .release(0.95)
  .lpf(3100)
  .delay(0.28)
  .room(0.75)
  .gain(0.84)

const floydLead = note("<[f5 ~ ~ e5 d5 ~ c5 a4] [b4 ~ ~ d5 g5 ~ fs5 e5] [f5 ~ ~ g5 a5 ~ g5 f5] [e5 ~ ~ d5 c5 ~ d5 ~]>")
  .s("gm_electric_guitar_clean, triangle")
  .attack(0.05)
  .release(1.2)
  .vib(4.8)
  .vibmod(0.28)
  .lpf(3400)
  .delay(0.35)
  .room(0.85)
  .size(0.9)
  .gain(0.82)

const smoothRhodesoutro = note("<[d3,f3,a3,c4,e4] [g2,f3,a3,b3,e4] [bb2,d3,f3,a3,c4] [a2,d3,g3,c4]>")
  .slow(2)
  .s("gm_synth_strings_1")
  .vib(3.5)
  .vibmod(0.24)
  .lpf(2200)
  .release(1.0)
  .delay(0.28)
  .room(0.75)
  .gain(0.58)

// song sections
const intro = stack(tanpura, smoothRhodes, vcs3Swirl)
const groove = stack(drums, tanpura, droneBass, smoothRhodes, vcs3Swirl)
const sitarJam = stack(drums, tanpura, droneBass, smoothRhodes, vcs3Swirl, sitarRaga)
const floydClimax = stack(drums, tanpura, droneBass, smoothRhodes, vcs3Swirl, floydLead)
const acousticBreak = stack(tabla, tanpura, smoothRhodes, sitarRaga)

const epOutro1 = stack(tanpura, smoothRhodes, vcs3Swirl, floydLead)

const epOutro2 = stack(tanpura, smoothRhodesoutro, vcs3Swirl, floydLead)
  .gain(saw.slow(12).range(0.8, 0))
  .lpf(saw.slow(12).range(2400, 110))

// arrangements
arrange(
  [4, intro],         
  [8, groove],        
  [8, sitarJam],      
  [12, floydClimax],  
  [4, acousticBreak],
  [8, epOutro1],      
  [6, epOutro2],
  [999, silence]
)
