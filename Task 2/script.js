const vegetable = 
[
    { name: 'Картопля', imageUrl: 'https://lh5.googleusercontent.com/proxy/qPIdwvSki36a2PD0c7HTWr7CFbitlP_Byqjo7RZRqcya9r_aoej2-9ktqshMltA1tL1KWpcKUAmQulv3XTxDgdPabxwkfp9SPODAvolazW9FKe6L' },
    { name: 'Огірок', imageUrl: 'https://pro-cikave.com.ua/wp-content/uploads/2022/09/8238375277373753.jpg' },
    { name: 'Помідор', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdyPdyRS5HAVNsef5650X4IRQUWQxHCOH5t-hlIHWFTw&s' },
    { name: 'Баклажан', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-2Ced_8wI38zbjtJY62gYJd2q73EQ1NdSfjbEa1xKTw&s' },
    { name: 'Салат', imageUrl: 'https://www.belnovosti.by/sites/default/files/2022-03/salat_0.jpg' },
    { name: 'Цибуля', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFi5y52AXoZS6pX9gVTc4kuhI3isp6Kyg6w&s' },
    { name: 'Капуста', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyWjM-NoXTsseRanakEJWBNsap3WNjRzhRAw&s' },
    { name: 'Морква', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmKX3M7HXwS-Q6p6qiU8aX1gyaRrehZusSXA&s' },
    { name: 'Кабачок', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-CMwRwJbs1_0Fs4mEcZmlr_h0XTO2jxeAxg&s' },
    { name: 'Горох', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8iDOgiS5YonbsORrUp4xuYlOjD2xNMPNleA&s' },
    { name: 'Квасоля', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn0-doJvRPMdZWe7kNKdjIpj4tUCltUOpSzg&s' },
    { name: 'Болгарський Перець', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStssbXX47UQeZaeV986Dug7tQMPnFs4oS5JA&s' },
    { name: 'Перець Чилі', imageUrl: 'https://klopotenko.com/wp-content/uploads/2022/10/koryst-pertsyu-chyli_sitewebukr-1.jpg' },
    { name: 'Буряк', imageUrl: 'https://img.tsn.ua/cached/579/tsn-90ef87392779da7417a975ee734335dc/thumbs/1200x630/63/dc/b118a9a16b250fe84b5a97ad6aa1dc63.jpeg' },
    { name: 'Редиска', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgZxMAE7Ubh4DEzdwD23u6f-jJDPQv4p_oWQ3vE9Wjg&s' },
    { name: 'Кріп', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWfjMLuYladJ3hXcQKxMc1KwPnl2G6N2kVuNUuqapR4Q&s' },
    { name: 'Петрушка', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8ccDQrmokmRN8EstaFScac4iXLpE-tIpw36qsxVyQUg&s' },
    { name: 'Імбир', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8E2vDE0Mm45yTT3Fcg9xg5rEjA_gBMzk364XTeQP1kg&s' },
    { name: 'Чеснок', imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS38VAc_6JNU_2rNAgW3MuHfmqR6AEmL6gpef5y5aUgLw&s' },
];

function searchVegetable() 
{
    const searchTerm = document.getElementById('searchInput').value.trim().toLowerCase();

    const foundVegetable = vegetable.find(vegetable => vegetable.name.toLowerCase() === searchTerm);

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (foundVegetable) 
    {
        const imageElement = document.createElement('img');
        imageElement.src = foundVegetable.imageUrl;
        imageElement.alt = foundVegetable.name;
        resultDiv.appendChild(imageElement);
    } 
    else 
    {
        resultDiv.textContent = 'Овоча не знайдено';
    }
}
