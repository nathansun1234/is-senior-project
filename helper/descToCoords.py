filepath = "newQuestions.txt"

def get_first_and_second_int(string):
    parts = string.split()
    first_int, second_int = None, None
    
    for i in range(len(parts)):
        if parts[i].isdigit():
            if first_int is None:
                first_int = int(parts[i])
                if parts[i + 4] == "left":
                    first_int = first_int * -1
            elif second_int is None:
                second_int = int(parts[i])
                if parts[i + 2] == "below":
                    second_int = second_int * -1
                break
    
    if first_int is not None and second_int is not None:
        return (first_int, second_int)
    else:
        return None

file = open(filepath, "r")
newLines = []
for line in file.readlines():
    if line[0] == "o":
        coords = get_first_and_second_int(line)
        line = "o	" + str(coords)
    newLines.append(line)

file.close()

with open("newQuestionsResult.txt", "w") as file:
    for line in newLines:
        file.write(f"{line}\n")




