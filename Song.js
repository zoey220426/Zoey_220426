samples('github:tidalcycles/dirt-samples')

const Tempo = 165/4

const Break = s("breaks165")
.slice(8, `
[0 - - -]
[2 - - -]
[- - 0 -]
<
[2 - - -]
[2 - - -]
[2 - - -]
[2 - 2 -]
[2 - - -]
[2 - - -]
[2 - - -]
[2 - 2 2]
>
`)
.cut(0)
.dec(0.105)
.gain(0.75)

const Bus = stack(
Break
).crush(12).lpf(7500).ftype("ladder")

stack(
Bus
).cpm(Tempo)