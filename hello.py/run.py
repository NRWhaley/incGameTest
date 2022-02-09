
#!/usr/bin/env python3.7
import numpy as np
import matplotlib.pyplot as plt

data1 = [85, 62, 78, 64, 25, 12, 74, 96, 63, 45, 78, 20, 5, 30, 45, 78, 45, 96, 65, 45, 74, 12, 78, 23, 8]

max=np.max(data1)
print("Max: {0:d}".format(max))
min=np.min(data1)
print("Min: {0:d}".format(min))

mean=np.mean(data1)
print("Mean: {0:8.4f}".format(mean))

variance=np.var(data1)
print("Variance:{0:8.4f}".format(variance))

standarddev=np.std(data1)
print("STD: {0:8.4f}".format(standarddev))

plt.figure()
hist1, edges1 = np.histogram(data1)
plt.bar(edges1 [:-1], hist1, width=edges1[1:] -edges1[:-1])
