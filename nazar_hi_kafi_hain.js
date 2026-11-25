setcpm(110 / 4)

// drumss
const kick = s("bd ~ bd ~ bd ~ bd ~")
  .bank("RolandTR707")
  .gain(0.95)
  .lpf(1400)

const snare = s("~ sd ~ sd")
  .bank("RolandTR707")
  .gain(0.75)
  .room(0.4)

// tabla style drums
const tabla = s("[rim lt mt rim] [rim mt lt rim]")
  .bank("RolandTR808")
  .lpf(2400)
  .room(0.4)
  .gain(0.72)

const hat = s("[hh hh oh hh]*4")
  .bank("RolandTR707")
  .gain("[0.3 0.18 0.45 0.2]*4")
  .cut(1)

const drums = stack(kick, snare, tabla, hat).room(0.2)

// tanpura
const tanpura = note("[d2,a2,d3,a3]")
  .s("gm_sitar")
  .attack(0.5)
  .release(1.5)
  .lpf(1300)
  .room(0.8)
  .gain(0.42)

// chords
const rhodes = note("<[d3,f3,a3,c4,e4] [g2,f3,a3,b3,d4] [f3,a3,c4,e4] [a2,e3,g3,cs4]>")
  .struct("x ~ x ~ ~ x ~ x")
  .s("gm_epiano1")
  .lpf(2200)
  .release(0.45)
  .room(0.6)
  .gain(0.58)

// string stuff
const strings = note("<[d3,f3,a3,c4,e4] [g3,b3,d4,f4] [f3,a3,c4,e4] [a2,e3,g3,cs4]>")
  .s("gm_string_ensemble_1")
  .attack(0.4)
  .release(1.2)
  .lpf(1650)
  .room(0.75)
  .gain(0.35)

// bass
const bass = note("<[d2 ~ a2 c3 d3 ~ c3 a2] [g1 ~ d2 f2 g2 ~ f2 d2] [f1 ~ c2 e2 f2 ~ e2 c2] [a1 ~ e2 g2 a2 ~ g2 e2]>")
  .s("gm_fretless_bass")
  .lpf(950)
  .gain(0.95)

// Sitar and stuff
const sitarMelody = note("<[d5 ~ c5 a4 g4 a4 c5 d5] [b4 ~ g4 e4 d4 e4 g4 b4] [c5 ~ a4 f4 e4 f4 a4 c5] [a4 g4 e4 cs4 d4 ~ ~ ~]>")
  .s("gm_sitar")
  .attack(0.01)
  .release(0.65)
  .lpf(3600)
  .room(0.55)
  .gain(0.85)

const bansuri = note("<[~ ~ ~ ~ e5 d5 c5 a4] [~ ~ ~ ~ d5 b4 g4 e4] [~ ~ ~ ~ f5 e5 d5 c5] [~ ~ ~ ~ e5 cs5 d5 ~]>")
  .s("gm_flute")
  .attack(0.02)
  .release(0.6)
  .vib(4.5)
  .vibmod(0.2)
  .lpf(3200)
  .room(0.65)
  .gain(0.75)

const jazzSolo = note("<[d5 f5 a5 c6 b5 a5 g5 f5] [e5 g5 b5 d6 c6 b5 a5 g5] [f5 a5 c6 d6 c6 a5 f5 e5] [cs5 e5 g5 b5 a5 g5 e5 cs5]>")
  .s("gm_trumpet")
  .attack(0.01)
  .release(0.5)
  .vib(4.5)
  .vibmod(0.2)
  .lpf(3800)
  .room(0.55)
  .gain(0.82)

// song sections
const intro = stack(tanpura, sitarMelody.lpf(2000))
const groove = stack(drums, tanpura, rhodes, strings, bass)
const mainSection = stack(drums, tanpura, rhodes, strings, bass, sitarMelody, bansuri)
const soloSection = stack(drums, tanpura, rhodes, strings, bass, jazzSolo)
const breakdown = stack(tabla, tanpura, rhodes, sitarMelody)

const outro = stack(tanpura, rhodes, strings)
  .gain(saw.slow(8).range(0.75, 0))
  .lpf(saw.slow(8).range(1800, 120))

// Arrangement
arrange(
  [4, intro],        // 4 bars: Tanpura drone & warm sitar hook intro
  [4, groove],       // 4 bars: Tight tabla, 4/4 kick, Rhodes & fretless bass drop
  [8, mainSection],  // 8 bars: Catchy Sitar + Bansuri call-and-response theme
  [8, soloSection],  // 8 bars: High-energy muted trumpet jazz solo
  [4, breakdown],    // 4 bars: Intimate tabla, tanpura, Rhodes & sitar
  [8, mainSection],  // 8 bars: Full rich finale
  [8, outro],        // 8 bars: Tanpura & warm chords fade into silence
  [999, silence]
)
