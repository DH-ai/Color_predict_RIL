# Q-Value Color Predictor

## Overview

The Q-Value Color Predictor is a simple application that uses the Q-learning algorithm to predict colors that aesthetically complement a grey background. The application adjusts RGB values based on feedback to find color combinations that are visually pleasing.

## Features

- **Q-Learning Algorithm:** Utilizes Q-values to estimate the quality of adjusting each color channel.
- **Aesthetic Prediction:** Predicts colors that best suit a grey background using reinforcement learning.
- **Interactive Feedback:** Users can provide feedback on color predictions, influencing the learning process.

## How It Works

1. **Initialization:**
   - The application initializes with a random color and a fixed grey background.

2. **User Interaction:**
   - Users can provide feedback by clicking on buttons labeled "Good" or "Bad" based on their aesthetic preferences.

3. **Q-Value Update:**
   - The Q-learning algorithm adjusts RGB values based on user feedback and updates Q-values accordingly.

4. **Color Prediction:**
   - The algorithm predicts new color combinations over time, aiming to converge to aesthetically pleasing colors that complement grey.

## Getting Started

To run the Q-Value Color Predictor locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/qvalue-color-predictor.git
