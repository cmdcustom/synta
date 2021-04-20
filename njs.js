nimports = /\b(require)|(console)|(log)\b/g
nvars = /\b(const)|(let)|(var)|(async)|(await)\b/g
nstatements = /\b(function)\b/g


function highlight_nodejs(tkrnjs) {
tkrnjs.innerHTML = tkrnjs.innerHTML.replace(nimports, "<span class='nj-imports'>$&</span>")
tkrnjs.innerHTML = tkrnjs.innerHTML.replace(nvars, "<span class='nj-vars'>$&</span>")
tkrnjs.innerHTML = tkrnjs.innerHTML.replace(nstatements, "<span class='py-stms'>$&</span>")
}