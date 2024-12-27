// 菜品筛选功能
document.addEventListener('DOMContentLoaded', function() {
    const cuisineSelect = document.getElementById('cuisine');
    const difficultySelect = document.getElementById('difficulty');
    const timeSelect = document.getElementById('time');

    // 筛选映射
    const difficultyMap = {
        'easy': '简单',
        'medium': '中等',
        'hard': '困难'
    };

    // 菜系映射
    const cuisineMap = {
        'sichuan': ['宫保鸡丁', '麻婆豆腐', '水煮鱼', '酸菜鱼'],
        'canton': ['清蒸鲈鱼', '白切鸡', '叉烧肉'],
        'jiangsu': ['东坡肉', '红烧狮子头', '扬州炒饭']
    };

    // 监听筛选变化
    function handleFilter() {
        const cuisine = cuisineSelect.value;
        const difficulty = difficultySelect.value;
        const time = timeSelect.value;

        const recipeCards = document.querySelectorAll('.recipe-card');
        
        recipeCards.forEach(card => {
            let show = true;
            const cardDifficulty = card.querySelector('.recipe-meta span:nth-child(1)').textContent.split('：')[1];
            const cardTime = parseInt(card.querySelector('.recipe-meta span:nth-child(2)').textContent.split('：')[1]);
            const cardTitle = card.querySelector('h3').textContent;

            // 检查菜系
            if (cuisine && !cuisineMap[cuisine].includes(cardTitle)) {
                show = false;
            }

            // 检查难度
            if (difficulty && cardDifficulty !== difficultyMap[difficulty]) {
                show = false;
            }

            // 检查时间
            if (time) {
                const timeLimit = parseInt(time);
                if (timeLimit === 30 && cardTime > 30) show = false;
                if (timeLimit === 60 && (cardTime <= 30 || cardTime > 60)) show = false;
                if (timeLimit === 90 && cardTime <= 60) show = false;
            }

            card.style.display = show ? 'block' : 'none';
        });
    }

    // 添加事件监听
    cuisineSelect.addEventListener('change', handleFilter);
    difficultySelect.addEventListener('change', handleFilter);
    timeSelect.addEventListener('change', handleFilter);
}); 