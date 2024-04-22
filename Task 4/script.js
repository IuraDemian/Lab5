function calculateDelivery() 
{
    const price = parseFloat(document.getElementById('price').value);
    const weight = parseFloat(document.getElementById('weight').value);
    const insuranceCheckbox = document.getElementById('insurance');
    const isInsuranceSelected = insuranceCheckbox.checked;
    let deliveryCost;

    if (weight <= 2) 
    {
        deliveryCost = 40;
        document.getElementById('result').innerText = `Категорія доставки: Мала\n`;
    } 
    else if (weight <= 10) 
    {
        deliveryCost = 60;
        document.getElementById('result').innerText = `Категорія доставки: Середня\n`;
    } 
    else if (weight <= 30) 
    {
        deliveryCost = 80;
        document.getElementById('result').innerText = `Категорія доставки: Велика\n`;
    } 
    else 
    {
        alert('Помилка: товар не підходить до категорії');
        return;
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText += `Вартість доставки: ${deliveryCost} грн`;

    if (isInsuranceSelected && price && price > 0) 
    {
        const insuranceCost = price * 0.02;
        deliveryCost += insuranceCost;
        resultDiv.innerText += ` (включаючи страховку ${insuranceCost.toFixed(2)} грн)`;
    }

    const totalCost = price + deliveryCost;
    resultDiv.innerText += `\nЗагальна сума доставки: ${totalCost.toFixed(2)} грн`;
}
