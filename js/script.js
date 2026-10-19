// 1. 定義你的資料庫（未來要新增按鈕或分類，只改這裡！）
const dashboardData = [
    {
        title: "漢唐內部網頁",
        icon: "🧰",
        links: [
            { name: "加班申請", url: "https://uisco.com.tw/83" },
            { name: "出勤查詢", url: "https://uisco.com.tw/81" },
            { name: "漢唐Mail", url: "待輸入" }
        ]
    },
    {
        title: "資料庫",
        icon: "🗄️",
        links: [
            { name: "數據查看網頁", url: "https://redmine.unieat.com.tw/bissue.php" },
            { name: "正式站", url: "https://aws-test.dudooeat.com/am.php?server=db-g01r01.dudooeat.com&username=crm_kersten&db=information_schema&table=PROCESSLIST" },
            { name: "測試站", url: "https://aws-test.dudooeat.com/am.php?server=db-test.dudooeat.com&username=crm_kersten" },
            { name: "API規格文件", url: "https://pos-api-dev.dudooeat.com/doc/#api-Admin_Items-getCategoryItemList" },
            { name: "SQL大全", url: "https://docs.google.com/spreadsheets/d/1hN7tG3bcV5xZXTla1YFRSImK0bVn16we-jBBNxGiQvU/edit?gid=0#gid=0" }
        ]
    },
    {
        title: "程式小工具",
        icon: "🖥️",
        links: [
            { name: "CodePen", url: "https://codepen.io/your-work" },
            { name: "SQL語法檢查器", url: "https://tw.piliapp.com/mysql-syntax-check/" },
            { name: "JSON排序", url: "https://jsoneditoronline.org/#right=local.zuxocu" },
            { name: "Compare工具", url: "https://diffchecker.com/zh-Hant/text-compare/" },
            { name: "MarkDown排序工具", url: "https://stackedit.io/app#" },
            { name: "GitHub", url: "https://github.com/dudoo-team/dd2-auto-test" },
            { name: "Markdown轉Excel工具", url: "https://tableconvert.com/zh-tw/excel-to-markdown" },
            { name: "Notion", url: "https://www.notion.so/272460ae289e806489dcc0d6079f4a77?v=272460ae289e81078ac8000c69a74d54&p=272460ae289e81f7a1eed6fe454b7466&pm=s" }
        ]
    },
    {
        title: "各種表單",
        icon: "📋",
        links: [
            { name: "IPhoto", url: "https://pcm.tsmc.com/iPhoto/Login/Index" },
            { name: "肚肚後台正式站", url: "https://sales.dudooeat.com/dudoo/console" },
            { name: "肚肚後台測試站", url: "https://sales-test.dudooeat.com/dudoo/dudooLogin" },
            { name: "肚肚後台開發站", url: "https://sales-dev.dudooeat.com/dudoo/dudooLogin" },
            { name: "dudoo Open API規格文件", url: "https://api-test.dudooeat.com/latest/docs#/Order/get_orders_meal_times_orders_meal_times_get" },
            { name: "王品測試站", url: "https://admin-wp-test.dudooeat.com/#/settings/device" },
            { name: "美光測試站", url: "https://admin-micron-test.dudooeat.com/" },
            { name: "國際版原廠後台", url: "https://dd3-console-test.dudooeat.com/login" },
            { name: "台灣版甘特圖", url: "https://docs.google.com/spreadsheets/d/1-SOATuVgYidoRkkOUnAaKjzGei_KwcXUgOnfPyo68wU/edit?gid=1931912390#gid=1931912390" },
            { name: "國際版甘特圖", url: "https://docs.google.com/spreadsheets/d/1RxVvVieqmNieBnCur2S9_krIgguSl7Je4GluIw8yTzk/edit?gid=870902391#gid=870902391" }
        ]
    }
];

// 2. 負責生成 HTML 的核心邏輯
function renderDashboard() {
    const container = document.getElementById('dashboard-container');
    if (!container) return; // 防呆設計，避免找不到容器報錯

    dashboardData.forEach(section => {
        // 創建欄位卡片
        const column = document.createElement('div');
        column.className = 'column';

        // 生成標題（自帶 Icon）
        const title = document.createElement('h2');
        title.textContent = `${section.icon} ${section.title}`;
        column.appendChild(title);

        // 創建按鈕容器
        const linksContainer = document.createElement('div');
        linksContainer.className = 'links-container';

        // 生成按鈕
        section.links.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.textContent = link.name;
            a.target = "_blank"; // 確保點擊都在新分頁打開
            linksContainer.appendChild(a);
        });

        // 組裝起來
        column.appendChild(linksContainer);
        container.appendChild(column);
    });
}

// 3. 時鐘功能
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('digital-clock');
    if (clockElement) {
        clockElement.textContent = now.toLocaleTimeString('zh-TW', { hour12: false });
    }
}

// 初始化執行
renderDashboard();
setInterval(updateClock, 1000);
updateClock();