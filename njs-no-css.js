imports = /\b(require)|(console)|(log)\b/g
vars = /\b(const)|(let)|(var)|(async)|(await)\b/g
statements = /\b(function)\b/g


function highlight_nodejs(tkr) {
tkr.innerHTML = tkr.innerHTML.replace(imports, "<span class='nj-imports'>$&</span>")
tkr.innerHTML = tkr.innerHTML.replace(vars, "<span class='nj-vars'>$&</span>")
tkr.innerHTML = tkr.innerHTML.replace(statements, "<span class='py-stms'>$&</span>")
}