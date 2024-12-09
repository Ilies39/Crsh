document.addEventListener("DOMContentLoaded", function() {
    // دالة لجلب البيانات من الخادم
    async function fetchGameData() {
        try {
            const response = await fetch('YOUR_API_ENDPOINT'); // استبدل YOUR_API_ENDPOINT بالرابط الصحيح
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            populateTable(data);
        } catch (error) {
            console.error('هناك مشكلة في جلب البيانات:', error);
        }
    }

    // دالة لملء الجدول بالبيانات
    function populateTable(data) {
        const tableBody = document.querySelector("#gameData tbody");
        tableBody.innerHTML = ''; // مسح المحتويات السابقة

        data.forEach(item => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${item.time}</td>
                <td>${item.totalPlayers}</td>
                <td>${item.totalBets}</td>
                <td>${item.value}</td>
                <td>${item.totalPrizes}</td>
                <td>${item.otherInfo}</td>
            `;
            tableBody.appendChild(row);
        });
    }

    // استدعاء دالة جلب البيانات عند تحميل الصفحة
    fetchGameData();
});
```
