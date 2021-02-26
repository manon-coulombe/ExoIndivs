#niveau3

def balanced(aTester):
    count = 0
    for i in aTester:
        if i == "(":
            count += 1
        elif i == ")":
            count -= 1
        if count < 0:
            return False
    if count != 0:
        return False
    return True

print("Entrez une chaine de parenthèses à tester")
res = input()
print(balanced(res))