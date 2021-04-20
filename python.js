imports = /\b(import)|(from)|(False)|(True)|(as)\b/g
spec = /\b(async)\b/g
statements = /\b(def)|(print)|(try)|(except)\b/g
seperate = /\(\)/g


function highlight_python(tkr) {
tkr.innerHTML = tkr.innerHTML.replace(imports, "<span class='py-imports'>$&</span>")
tkr.innerHTML = tkr.innerHTML.replace(spec, "<span class='py-spec'>$&</span>")
tkr.innerHTML = tkr.innerHTML.replace(statements, "<span class='py-stms'>$&</span>")
}