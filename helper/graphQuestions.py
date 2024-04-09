import numpy as np

result = "\"topics\": {\n\t\"reflections\": [\n"
temp = []
for x in range(-8, 9):
    for y in range(-8, 9):
        temp.append("\t\t{\"question\": \"What is the reflection across the x axis?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, x, -y))
        temp.append("\t\t{\"question\": \"What is the reflection across the y axis?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, x, -y))
np.random.shuffle(temp)
temp = temp[:100]
for i in temp:
    result += i

result += "\t],\nt\"rotations\": [\n"
temp = []
for x in range(-8, 9):
    for y in range(-8, 9):
        temp.append("\t\t{\"question\": \"What is the rotation 360 degrees?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, x, y))
        temp.append("\t\t{\"question\": \"What is the rotation 90 degrees clockwise?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, -y, x))
        temp.append("\t\t{\"question\": \"What is the rotation 180 degrees?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, -y, -x))
        temp.append("\t\t{\"question\": \"What is the rotation 270 degrees clockwise?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, y, -x))
        temp.append("\t\t{\"question\": \"What is the rotation 0 degrees?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, x, y))
        temp.append("\t\t{\"question\": \"What is the rotation 90 degrees counterclockwise?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, y, -x))
        temp.append("\t\t{\"question\": \"What is the rotation 270 degrees counterclockwise?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (x, y, -y, x))

np.random.shuffle(temp)
temp = temp[:100]
for i in temp:
    result += i

result += "\t],\nt\"translations\": [\n"
temp = []
for x in range(-8, 9):
    for y in range(-8, 9):
        for i in range (-8, 9):
            for j in range (-8, 9):
                if x + i >= -8 and x + i <= 8 and y + j >= -8 and y + j <= 8:
                     temp.append("\t\t{\"question\": \"Where is the image with the translation (%d, %d) applied?\", \"preimage\": [%d, %d], \"image\": [%d, %d]}, \n" % (i, j, x, y, x+i, y+j))

np.random.shuffle(temp)
temp = temp[:100]
for i in temp:
    result += i

print(result)