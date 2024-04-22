function generateRandomNumber() 
{
    return Math.floor(Math.random() * 10) + 1;
}

function generateRandomOperation() 
{
    const operations = ['+', '-', '*', '/'];
    return operations[Math.floor(Math.random() * operations.length)];
}

function generateQuestion() 
{
    const firstNumber = generateRandomNumber();
    const secondNumber = generateRandomNumber();
    const operation = generateRandomOperation();

    document.getElementById('firstNumber').value = firstNumber;
    document.getElementById('operation').value = operation;
    document.getElementById('secondNumber').value = secondNumber;

    document.getElementById('userAnswer').value = '';
}

function checkAnswer() 
{
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;
    const userAnswer = parseFloat(document.getElementById('userAnswer').value.replace(',', '.'));

    let correctAnswer;
    switch (operation) 
    {
        case '+':
            correctAnswer = firstNumber + secondNumber;
            break;
        case '-':
            correctAnswer = firstNumber - secondNumber;
            break;
        case '*':
            correctAnswer = firstNumber * secondNumber;
            break;
        case '/':
            correctAnswer = firstNumber / secondNumber;
            break;
        default:
            break;
    }

    const resultDiv = document.getElementById('result');
    if (userAnswer === correctAnswer) 
    {
        resultDiv.textContent = 'Ok';
        resultDiv.style.color = 'green';
        setTimeout(function() 
        {
            resultDiv.textContent = 'Wait';
            resultDiv.style.color = 'yellow';
            setTimeout(generateQuestion, 2000);
        }, 2000);
    } 
    else 
    {
        resultDiv.textContent = 'No';
        resultDiv.style.color = 'red';
    }
}

function showHelp() 
{
    const firstNumber = parseInt(document.getElementById('firstNumber').value);
    const secondNumber = parseInt(document.getElementById('secondNumber').value);
    const operation = document.getElementById('operation').value;

    let correctAnswer;
    switch (operation) 
    {
        case '+':
            correctAnswer = firstNumber + secondNumber;
            break;
        case '-':
            correctAnswer = firstNumber - secondNumber;
            break;
        case '*':
            correctAnswer = firstNumber * secondNumber;
            break;
        case '/':
            correctAnswer = firstNumber / secondNumber;
            break;
        default:
            break;
    }

    alert('Правильна відповідь: ' + correctAnswer);
}

window.onload = function() 
{
    generateQuestion();
};