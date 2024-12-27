// AI助手的知识库
const foodKnowledge = {
    cooking: {
        methods: ['煎', '炒', '烹', '炸', '炖', '焖', '蒸', '烤'],
        tips: {
            '炒菜': '要注意火候控制，大火快炒保持食材的鲜嫩',
            '煎肉': '煎牛排时要让肉回温，这样更容易掌握火候',
            '炖汤': '炖汤时先用大火煮沸，再转小火慢炖，这样汤更鲜美',
            '蒸鱼': '蒸鱼时间不要太长，以免破坏鱼肉的口感',
            '烤肉': '烤肉前要充分腌制，这样更入味'
        }
    },
    ingredients: {
        vegetables: ['白菜', '青菜', '菠菜', '芹菜', '胡萝卜', '土豆', '茄子', '青椒'],
        meat: ['猪肉', '牛肉', '鸡肉', '羊肉', '鱼', '虾'],
        seasoning: ['盐', '糖', '酱油', '醋', '料酒', '蒜', '姜', '葱']
    },
    cuisines: {
        '川菜': '特点是麻辣鲜香，著名菜品有宫保鸡丁、麻婆豆腐、水煮鱼',
        '粤菜': '特点是清淡鲜美，著名菜品有白切鸡、清蒸鱼、叉烧肉',
        '苏菜': '特点是清鲜淡雅，著名菜品有松鼠桂鱼、叫花鸡、扬州炒饭',
        '鲁菜': '特点是咸鲜为主，著名菜品有葱烧海参、糖醋鲤鱼'
    },
    nutrition: {
        '蛋白质': ['瘦肉', '鱼', '虾', '鸡蛋', '豆制品'],
        '维生素': ['绿叶菜', '胡萝卜', '水果', '菌菇'],
        '碳水化合物': ['米饭', '面食', '土豆', '红薯'],
        '膳食纤维': ['蔬菜', '全谷物', '豆类']
    },
    healthyDiet: {
        '减肥': ['多吃蔬菜水果', '选择蒸煮烤', '控制油盐摄入', '少吃精制碳水'],
        '增肌': ['适量优质蛋白', '全谷物主食', '补充维生素矿物质'],
        '养胃': ['少食多餐', '不要太冷太热', '避免刺激性食物'],
        '补铁': ['动物肝脏', '瘦红肉', '深绿色蔬菜']
    }
};

// 处理用户输入的函数
function processUserInput(input) {
    input = input.toLowerCase();
    let response = '';

    // 识别用户意图
    if (input.includes('推荐') || input.includes('建议')) {
        if (input.includes('减肥') || input.includes('瘦身')) {
            response = '减肥饮食建议：\n' + foodKnowledge.healthyDiet.减肥.join('\n');
        } else if (input.includes('增肌') || input.includes('健身')) {
            response = '增肌饮食建议：\n' + foodKnowledge.healthyDiet.增肌.join('\n');
        } else {
            response = '我可以为您推荐：\n1. 适合特定功效的食谱\n2. 特色菜系美食\n3. 烹饪方法\n请告诉我您的具体需求';
        }
    } else if (input.includes('怎么做') || input.includes('如何做')) {
        for (let method in foodKnowledge.cooking.tips) {
            if (input.includes(method)) {
                response = foodKnowledge.cooking.tips[method];
                break;
            }
        }
        if (!response) {
            response = '请告诉我具体想做什么菜，我会给您详细的建议。';
        }
    } else if (input.includes('营养') || input.includes('健康')) {
        if (input.includes('蛋白质')) {
            response = '富含蛋白质的食物：\n' + foodKnowledge.nutrition.蛋白质.join('、');
        } else if (input.includes('维生素')) {
            response = '富含维生素的食物：\n' + foodKnowledge.nutrition.维生素.join('、');
        } else {
            response = '我可以为您介绍各种食材的营养价值，请具体告诉我您想了解什么。';
        }
    } else if (input.includes('搭配') || input.includes('配菜')) {
        let mainIngredient = '';
        for (let meat of foodKnowledge.ingredients.meat) {
            if (input.includes(meat)) {
                mainIngredient = meat;
                break;
            }
        }
        if (mainIngredient) {
            const vegetables = foodKnowledge.ingredients.vegetables.slice(0, 3);
            response = `${mainIngredient}可以搭配：\n1. ${vegetables.join('\n2. ')}\n这些都是很好的搭配！`;
        } else {
            response = '请告诉我您想搭配的主料，我会给您合适的建议。';
        }
    } else if (input.includes('菜系') || input.includes('特点')) {
        for (let cuisine in foodKnowledge.cuisines) {
            if (input.includes(cuisine)) {
                response = `${cuisine}${foodKnowledge.cuisines[cuisine]}`;
                break;
            }
        }
        if (!response) {
            response = '中国有八大菜系，分别是川菜、粤菜、苏菜、鲁菜、闽菜、浙菜、湘菜、徽菜，您想了解哪个菜系呢？';
        }
    } else if (input.includes('调料') || input.includes('配料')) {
        response = '常用调料包括：' + foodKnowledge.ingredients.seasoning.join('、');
    } else {
        response = '您可以问我关于：\n1. 菜品的烹饪方法\n2. 食材的营养搭配\n3. 特色菜系介绍\n4. 健康饮食建议\n5. 具体菜品的做法';
    }

    return response;
}

// DOM 元素
const chatToggle = document.getElementById('chatToggle');
const chatContainer = document.getElementById('chatContainer');
const minimizeChat = document.getElementById('minimizeChat');
const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendMessage = document.getElementById('sendMessage');

// 切换聊天窗口
chatToggle.addEventListener('click', () => {
    chatContainer.classList.toggle('active');
    chatToggle.classList.toggle('hidden');
});

minimizeChat.addEventListener('click', () => {
    chatContainer.classList.remove('active');
    chatToggle.classList.remove('hidden');
});

// 发送消息
function sendUserMessage() {
    const message = userInput.value.trim();
    if (message) {
        // 添加用户消息
        addMessage('user', message);
        
        // 添加AI回复
        setTimeout(() => {
            const response = processUserInput(message);
            addMessage('assistant', response);
        }, 500);

        userInput.value = '';
    }
}

// 添加消息到聊天窗口
function addMessage(type, content) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}`;
    
    const contentDiv = document.createElement('div');
    contentDiv.className = 'message-content';
    contentDiv.textContent = content;
    
    messageDiv.appendChild(contentDiv);
    chatMessages.appendChild(messageDiv);
    
    // 滚动到底部
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// 事件监听
sendMessage.addEventListener('click', sendUserMessage);
userInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendUserMessage();
    }
}); 