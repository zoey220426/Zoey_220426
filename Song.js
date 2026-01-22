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

const Bass = s("sid")
.n("1")
.struct(`
[x - - -]
[- - x -]
[- - x -]
[x - - -]
`)
.cut(1)
.dec(0.2)
.gain(0.8)


const Bus = stack(
Break,
Bass
).dist(0.1).crush(12).lpf(7500).ftype("ladder")

stack(
Bus
).cpm(Tempo)