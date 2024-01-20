const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const resultDiv = document.getElementById('result');

// Create a new Brain.js neural network
const net = new brain.NeuralNetwork();

// Function to clear the canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  resultDiv.textContent = 'Prediction: ';
}

// Event listener for recognizing digit
function recognizeDigit() {
  const imageData = getImageData();
  
  // Train the neural network with the drawn digit
  trainNeuralNetwork(imageData);

  // Make a prediction based on the trained network
  const prediction = predictDigit(imageData);
  resultDiv.textContent = `Prediction: ${prediction}`;
}

// Event listener to clear the canvas
document.getElementById('clearButton').addEventListener('click', clearCanvas);

// Function to get pixel data from the canvas
function getImageData() {
  const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
  const data = imageData.data;
  const grayscaleData = [];

  // Convert RGBA values to grayscale
  for (let i = 0; i < data.length; i += 4) {
    const average = (data[i] + data[i + 1] + data[i + 2]) / 3;
    grayscaleData.push(average / 255); // Normalize to [0, 1]
  }

  return grayscaleData;
}

// Function to train the neural network
function trainNeuralNetwork(imageData) {
  // Create a training example with the drawn digit
  const trainingData = [{ input: imageData, output: { digit: 1 } }];

  // Train the neural network with the training example
  net.train(trainingData);
}

// Function to predict the digit using the trained network
function predictDigit(imageData) {
  // Make a prediction using the trained neural network
  const output = net.run(imageData);
  return output.digit >= 0.5 ? '1' : '0'; // Simple thresholding
}
