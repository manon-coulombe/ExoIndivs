#niveau2

import json

with open('morse.json') as a:
    data = json.load(a)

def decoder(morse):
    result = []
    lettre = morse.split(" ")
    for e in lettre:
        for k, v in data.items():       
            if e == v:
                result.append(k)
    print(''.join(result))

decoder("... --- ...")
decoder("-... --- -. .--- --- ..- .-.")