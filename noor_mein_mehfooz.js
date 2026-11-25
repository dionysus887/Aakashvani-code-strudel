setcpm(130 / 4)

const sKick = s("bd ~ ~ bd ~ ~ bd ~")
  .bank("RolandTR808").gain(0.95).lpf(1100)

const sRim = s("~ ~ rim ~ ~ [rim*2] ~ rim")
  .bank("RolandTR808").delay(0.3).room(0.65).gain(0.7)

const sHat = s("[hh hh oh hh]*2")
  .bank("RolandTR808").gain("[0.3 0.15 0.45 0.2]*2").cut(1)

const sDrums = stack(sKick, sRim, sHat)

const sPad = note("<[g3,bb3,d4,f4] [ab3,c4,eb4,g4] [c3,eb3,g3,bb3] [d3,fs3,a3,c4]>")
  .s("gm_string_ensemble_1").attack(0.35).release(1.0).lpf(1800).room(0.8).gain(0.42)

const sKeys = note("<[g3,bb3,d4] [ab3,c4,eb4] [c3,eb3,g3] [d3,fs3,a3]>")
  .struct("x ~ x ~ ~ x ~ x").s("gm_epiano1").lpf(1600).delay(0.25).room(0.65).gain(0.48)

const sSub = note("<[g1 ~ g2 g1 d2 ~ f2 ~] [ab1 ~ ab2 ab1 eb2 ~ g2 ~] [c2 ~ c3 c2 g2 ~ bb2 ~] [d2 ~ d3 d2 a2 ~ fs2 ~]>")
  .s("sine, triangle").lpf(340).gain(0.9)

const sLead = note("<[d5 ~ c5 ~ bb4 a4 g4 ~] [eb5 ~ d5 ~ c5 bb4 ab4 ~] [g4 ~ bb4 ~ d5 c5 bb4 a4] [fs4 ~ a4 ~ d5 ~ ~ ~]>")
  .s("gm_synth_strings_2, triangle")
  .attack(0.01)              
  .release(0.75)
  .vib(4.5)
  .vibmod(0.25)
  .delay(0.25)               
  .room(0.75)
  .gain(0.75)


const sWail = note("<[g5 ~ ~ ~ d5 ~ ~ ~] [eb5 ~ d5 c5 bb4 ~ a4 ~] [c5 ~ eb5 g5 ~ ~ ~ ~] [fs5 ~ ~ ~ d5 ~ ~ ~]>")
  .s("gm_violin").attack(0.2).release(0.9).lpf(2800).delay(0.4).room(0.85).gain(0.42)

const slowIntro = stack(sPad, sLead)
const slowVerse = stack(sDrums, sPad, sSub, sKeys)
const slowChorus = stack(sDrums, sPad, sSub, sKeys, sLead)
const slowClimax = stack(sDrums, sPad, sSub, sKeys, sLead, sWail)

// solo transition
const dPad = note("<[g3,bb3,d4,f4] [ab3,c4,eb4,g4] [c3,eb3,g3,bb3] [d3,fs3,a3,c4]>")
  .s("gm_string_ensemble_1")
  .attack(0.15)
  .release(0.6)
  .lpf(2200)
  .room(0.7)
  .gain(0.45)

// synth string solo lol
const soloNotes = note("<[g4 bb4 d5 g5 f5 d5 bb4 a4] [ab4 c5 eb5 ab5 g5 eb5 c5 bb4] [c5 eb5 g5 c6 bb5 g5 eb5 d5] [d5 fs5 a5 c6 bb5 a5 fs5 d5]>")
  .s("gm_sitar")
  .attack(0.02)
  .release(0.45)
  .lpf(saw.slow(8).range(1800, 6500))
  .lpq(3.5)
  .delay(0.3)
  .room(0.7)
  .gain(1.4)

const soloBuild = stack(
  dPad,
  soloNotes,
  s("hh*16").bank("LinnDrum").gain(saw.slow(8).range(0.1, 0.5)),
  s("~ ~ ~ [sd*4]").bank("LinnDrum").gain(saw.slow(8).range(0.2, 0.85)) // Snare roll buildup
)

// its the time to disco kaun mile dekho kiskooo (jk)
const dKick = s("bd*4").bank("LinnDrum").gain(0.95).lpf(1900)
const dSnare = s("~ sd ~ sd").bank("LinnDrum").gain(0.85).room(0.35)
const dHat = s("[hh hh oh hh]*4").bank("LinnDrum").gain("[0.4 0.25 0.65 0.25]*4").cut(1)
const dClap = s("~ cp ~ cp").bank("LinnDrum").gain(0.55).room(0.4)
const dDrums = stack(dKick, dSnare, dHat, dClap).room(0.2)

// keys n shi
const dKeys = note("<[g3,bb3,d4,f4] [ab3,c4,eb4,g4] [c3,eb3,g3,bb3] [d3,fs3,a3,c4]>")
  .struct("~ x ~ x ~ x ~ x").s("gm_epiano1").lpf(2800).release(0.18).room(0.4).gain(0.55)

// bass
const dSub = note("<[g2 g3 g2 g3 g2 g3 f2 g2] [ab2 ab3 ab2 ab3 ab2 ab3 g2 ab2] [c2 c3 c2 c3 c2 c3 bb1 c2] [d2 d3 d2 d3 d2 d3 c2 d2]>")
  .s("gm_electric_bass_finger").lpf(1300).gain(0.9)

// synth lead
const discoLead = note("<[d5 ~ ~ c5 bb4 a4 g4 ~] [eb5 ~ d5 c5 bb4 ~ ab4 ~] [g4 ~ bb4 d5 c5 bb4 a4 ~] [fs4 ~ a4 d5 ~ ~ ~ ~]>")
  .s("gm_synth_strings_2").attack(0.02).release(0.55).vib(4.5).vibmod(0.2).lpf(6000).lpq(3).delay(0.28).room(0.55).gain(0.88)

const dWail = note("<[g5 ~ ~ ~ d5 ~ ~ ~] [eb5 ~ d5 c5 bb4 ~ a4 ~] [c5 ~ eb5 g5 ~ ~ ~ ~] [fs5 ~ ~ ~ d5 ~ ~ ~]>")
  .s("gm_violin").attack(0.1).release(0.7).lpf(3600).delay(0.3).room(0.7).gain(0.48)

const discoGroove = stack(dDrums, dKeys, dSub)
const discoChorus = stack(dDrums, dKeys, dPad, dSub, discoLead)
const discoClimax = stack(dDrums, dKeys, dPad, dSub, discoLead, dWail)
const discoBreakdown = stack(dHat, dClap, dKeys, dPad, discoLead)

const outro = stack(dHat, dKeys, dPad)
  .gain(saw.slow(8).range(0.85, 0))
  .lpf(saw.slow(8).range(2200, 120))

// arrangement
arrange(
  [4, slowIntro],      
  [4, slowVerse],      
  [8, slowChorus],     
  [8, slowClimax],     
  [8, soloBuild],      
  [4, discoGroove],    
  [8, discoChorus],    
  [8, discoClimax],    
  [4, discoBreakdown], 
  [8, discoClimax],    
  [8, outro],          
  [999, silence]       
)
