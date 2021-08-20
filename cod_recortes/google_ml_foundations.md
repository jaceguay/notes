## Google M.L.Foundations

[playlist youtube](https://www.youtube.com/playlist?list=PLOU2XLYxmsII9mzQ-Xxug4l2o04JBrkLV)

```python
import numpy as np
import keras

# 1.criar uma rede neural
model = keras.Sequential([keras.layers.Dense(units=1, input_shape=[1])])
# framework keras, sequential é uma sequência de layers
# apenas um layer do tipo layer, pois temos apenas uma linha de código
# o resultado é um neurônio com apenas uma entrada e uma saída

model.compile(optimizer='sgd', loss='mean_squared_error')
# sgd = Stochastic gradient descent

# 2.dados a serem treinados
xs = np.array([-1.0, 0.0, 1.0, 2.0, 3.0, 4.0], dtype=float)
ys = np.array([-3.0, -1.0, 1.0, 3.0, 5.0, 7.0], dtype=float)

# 3.treinar rede
model.fit(xs, ys, epochs=500)

print(model.predict([10.0]))
# [[18.986126]]
```