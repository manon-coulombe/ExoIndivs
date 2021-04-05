colors = open('input7.txt').readlines()

dictionnaire = {}

for line in colors:
    line = line.strip().split(' bags contain ')
    contains = []
    for contain in line[1].split(', '):
        if contain[-1] == ".":
            contain = contain[:-1]
        if "bags" in contain:
            contain = contain[:-5]
        elif "bag" in contain:
            contain = contain[:-4]
        contains.append(contain[2:])
        dictionnaire[line[0]]=contains
dictionnaire.pop("shiny gold")

tableau=[]

def who_contains(color):
    tabshiny=[]
    for key,value in dictionnaire.items():
        if color in value:
            tabshiny.append(key)
            tableau.append(key)
    for i in tabshiny:
        who_contains(i)
    return tabshiny

who_contains("shiny gold")

tableau=set(tableau)

print(len(tableau))