imports = /\b(import)|(from)|(False)|(True)|(as)\b/g
spec = /\b(async)\b/g
statements = /\b(def)|(print)|(try)|(except)\b/g
seperate = /\(\)/g


function highlight_python(tkr) {
tkr.innerHTML = tkr.innerHTML.replace(imports, "<span style='color:#4F5BFF;'>$&</span>")
tkr.innerHTML = tkr.innerHTML.replace(spec, "<span style='color:#E46F07;'>$&</span>")
tkr.innerHTML = tkr.innerHTML.replace(statements, "<span style='color:green;'>$&</span>")
}
