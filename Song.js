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

const Bass = s("saw")
.scale("c:minor")
.oct(2)
.n("0")
.struct(`
[x - - -]
[- - x -]
[- - - -]
[x - - -]
`)
.cut(0)
.dec(0.2)
.lpf(200)
.lpe(2)
.gain(0.8)

const Bus = stack(
Break
).crush(12).lpf(7500).ftype("ladder")

stack(
Bus
).cpm(Tempo)