




def getindex(l):
    f = lambda i: l[i]
    return max(range(len(l)), key=f)

if __name__ == "__main__":
    a = [1,5,3,4,2,6]

    while True:

        i = getindex(a)
        print(a)
        a.pop(i)