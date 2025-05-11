### Chapter 1: Linear Regression Notes 

---

### **Lecture 1: Introduction to Regression**

**Key Points:**
- **Regression:** Statistical method to analyze the relationship between variables.
- Regression is the process of predecting a continuous value.
- Regression predicts a **continuous value** based on independent variables.
- **Dependent Variable (Y):** Target variable we aim to predict, must be continuous.
- **Independent Variables (X):** Variables used to predict the dependent variable, can be continuous or categorical.

**Applications of Regression:**
1. Predict CO2 emissions of cars using engine size and cylinders.
2. Forecast sales based on age, education, and experience.
3. Predict house prices using size and number of bedrooms.

**Types of Regression Models:**
1. **Simple Regression:** Single independent variable predicts the dependent variable.
2. **Multiple Regression:** Multiple independent variables predict the dependent variable.

**Regression Algorithms:**

1. **Ordinal Regression:**
    - Used for predicting an ordinal variable, where the order matters but the exact values do not.
    - Example: Predicting customer satisfaction levels (e.g., satisfied, neutral, dissatisfied).

2. **Poisson Regression:**
    - Suitable for count data and modeling the rate at which events happen.
    - Example: Predicting the number of emails received per day.

3. **Fast Forest Quantile Regression:**
    - An ensemble method that builds multiple decision trees to predict quantiles.
    - Useful for understanding the distribution of the target variable.

4. **Linear Regression:**
    - Models the relationship between a dependent variable and one or more independent variables using a linear equation.
    - Example: Predicting house prices based on size and location.

5. **Polynomial Regression:**
    - Extends linear regression by fitting a polynomial equation to the data.
    - Example: Modeling the growth rate of a population over time.

6. **Lasso Regression:**
    - A type of linear regression that includes a penalty term to enforce sparsity, reducing the number of features.
    - Useful for feature selection.

7. **Stepwise Regression:**
    - A method of fitting regression models by adding or removing predictors based on their statistical significance.
    - Helps in identifying the most important variables.

8. **Ridge Regression:**
    - Similar to linear regression but includes a penalty term to prevent overfitting.
    - Useful when dealing with multicollinearity.

9. **Bayesian Linear Regression:**
    - Incorporates prior distributions for the model parameters and updates them with the data.
    - Provides a probabilistic approach to regression.

10. **Neural Network Regression:**
     - Uses neural networks to model complex relationships between inputs and outputs.
     - Example: Predicting stock prices based on historical data.

11. **Decision Forest Regression:**
     - An ensemble method that uses multiple decision trees to improve prediction accuracy.
     - Example: Predicting customer churn rates.

12. **Boosted Decision Tree Regression:**
     - Combines multiple weak learners (decision trees) to create a strong predictive model.
     - Example: Predicting loan default probabilities.

13. **K-Nearest Neighbors (KNN) Regression:**
     - Predicts the target value based on the average of the nearest neighbors.
     - Example: Predicting property values based on similar properties in the neighborhood.

---

### **Lecture 2: Simple Linear Regression**

**Concepts:**
- **Model Equation:** \( y = \theta_0 + \theta_1x \)
    - \( \theta_0 \): Intercept
    - \( \theta_1 \): Slope
- The objective is to minimize errors using **Mean Squared Error (MSE).**

**Theory Notes:**
- **Linear Regression Topology**
    - **Input:** Independent Variable (X)
    - **Output:** Dependent Variable (Y)
    - **Weights:** Slope (\( \theta_1 \)) and Intercept (\( \theta_0 \))
    - *Types*:
        - **Simple Linear Regression:** One independent variable.
        - **Multiple Linear Regression:** Multiple independent variables.

- **Linear Regression Model Representation**

**Model Equation:**
\[ y = \theta_0 + \theta_1x \]
- \( \theta_0 \): Intercept
- \( \theta_1 \): Slope

**Objective:**
- Minimize errors using **Mean Squared Error (MSE)**.

**Key Concepts:**
- **Linear Relationship:** Assumes a linear relationship between the independent variable (X) and the dependent variable (Y).
- **Least Squares Method:** Finds the line of best fit by minimizing the sum of the squares of the residuals (differences between observed and predicted values).

**Interpretation of Coefficients:**
- **Intercept (\( \theta_0 \))**: Expected value of Y when X is 0.
- **Slope (\( \theta_1 \))**: Change in Y for a one-unit change in X.

**Assumptions:**
- **Linearity:** Relationship between X and Y is linear.
- **Independence:** Observations are independent.
- **Homoscedasticity:** Constant variance of the errors.
- **Normality:** Errors of the model are normally distributed.

- **How to Find Best Fit**
    - **Objective:** Minimize the sum of squared differences between observed and predicted values.
    - **Method:** Use the least squares method to find the line of best fit.

- **Linear Relationship:** Simple linear regression assumes a linear relationship between the independent variable (X) and the dependent variable (Y).
- **Least Squares Method:** This method is used to find the line of best fit by minimizing the sum of the squares of the residuals (the differences between observed and predicted values).
- **Interpretation of Coefficients:**
    - **Intercept (\( \theta_0 \))**: The expected value of Y when X is 0.
    - **Slope (\( \theta_1 \))**: The change in Y for a one-unit change in X.
- **Assumptions:**
    - **Linearity:** The relationship between X and Y is linear.
    - **Independence:** Observations are independent of each other.
    - **Homoscedasticity:** Constant variance of the errors.
    - **Normality:** The errors of the model are normally distributed.

**Example Dataset (Car CO2 Emissions):**
| Engine Size | Cylinders | CO2 Emission |
|-------------|-----------|--------------|
| 2.0         | 4         | 196          |
| 2.4         | 4         | 214          |

**Code Implementation:**
```python
import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression

# Sample data
engine_size = np.array([1.6, 2.0, 2.4, 3.0, 3.5]).reshape(-1, 1)
co2_emission = np.array([149, 196, 214, 270, 300])

# Model setup
model = LinearRegression()
model.fit(engine_size, co2_emission)

# Predictions
predicted = model.predict([[2.4]])
print(f"Predicted CO2 Emission for engine size 2.4: {predicted[0]:.2f}")

# Visualization
plt.scatter(engine_size, co2_emission, color='blue', label='Data Points')
plt.plot(engine_size, model.predict(engine_size), color='red', label='Best Fit Line')
plt.xlabel('Engine Size')
plt.ylabel('CO2 Emission')
plt.legend()
plt.show()
```

---

### **Lecture 3: Model Evaluation in Regression**

**Evaluation Approaches:**
1. **Train/Test Split:**
   - Split the dataset into training and testing sets.
   - Ensures model generalization to unseen data.
2. **K-Fold Cross-Validation:**
   - Dataset is split into \( k \) parts (folds).
   - Each fold acts as a test set while the others act as training sets.

**Metrics:**
1. **Mean Absolute Error (MAE):** Average absolute difference between actual and predicted values.
2. **Mean Squared Error (MSE):** Average of squared differences.
3. **R-Squared (R²):** Percentage of variance explained by the model.

**Code Example:**
```python
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_squared_error, r2_score

# Split data
X_train, X_test, y_train, y_test = train_test_split(engine_size, co2_emission, test_size=0.2, random_state=42)

# Train model
model.fit(X_train, y_train)

# Predict and evaluate
y_pred = model.predict(X_test)
mse = mean_squared_error(y_test, y_pred)
r2 = r2_score(y_test, y_pred)

print(f"Mean Squared Error: {mse:.2f}")
print(f"R-Squared: {r2:.2f}")
```

---

### **Lecture 4: Multiple Linear Regression**

**Concepts:**
- Predicts a dependent variable using multiple independent variables.
- **Equation:** \( y = \theta_0 + \theta_1x_1 + \theta_2x_2 + \ldots + \theta_nx_n \)

**Example Dataset:**
| Engine Size | Cylinders | Fuel Consumption | CO2 Emission |
|-------------|-----------|------------------|--------------|
| 2.0         | 4         | 8.5              | 196          |
| 2.4         | 4         | 9.0              | 214          |

**Code Implementation:**
```python
# Dataset
features = np.array([[2.0, 4, 8.5], [2.4, 4, 9.0], [3.0, 6, 10.0], [3.5, 6, 11.0]])
target = np.array([196, 214, 270, 300])

# Train model
model.fit(features, target)

# Predict CO2 emission for [2.4, 4, 9.0]
predicted = model.predict([[2.4, 4, 9.0]])
print(f"Predicted CO2 Emission: {predicted[0]:.2f}")
```

---

### **Lecture 5: Evaluation Metrics in Regression**

**Summary of Metrics:**
1. **Mean Absolute Error (MAE):**  
   \[
   MAE = \frac{1}{n} \sum |y_i - \hat{y}_i|
   \]
2. **Mean Squared Error (MSE):**  
   \[
   MSE = \frac{1}{n} \sum (y_i - \hat{y}_i)^2
   \]
3. **Root Mean Squared Error (RMSE):**  
   \[
   RMSE = \sqrt{MSE}
   \]
4. **R-Squared (R²):**  
   \[
   R^2 = 1 - \frac{\text{RSS}}{\text{TSS}}
   \]

**Code Example for Metrics:**
```python
mae = np.mean(np.abs(y_test - y_pred))
rmse = np.sqrt(mse)

print(f"Mean Absolute Error: {mae:.2f}")
print(f"Root Mean Squared Error: {rmse:.2f}")
```

---

### **Corrections (Errata)**
- **Simple Linear Regression:**
  - Corrected Intercept (\( \theta_0 \)): \( 108.05 \)
  - Corrected CO2 Calculation: \( 201.65 \) for Engine Size \( 2.4 \).
- **Multiple Linear Regression:**
  - Corrected Regression Equation:
    \[
    y = 62.43 + 9.19x_1 + 8.70x_2 + 9.68x_3
    \]

---

This document provides a detailed explanation of regression concepts with practical Python code. Would you like further expansion or focus on specific sections?