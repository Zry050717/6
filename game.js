// 问题库
const questions = [
    {
        question: "四川菜的主要特点是什么？",
        options: ["麻辣", "清淡", "酸甜", "咸鲜"],
        correct: 0
    },
    {
        question: "以下哪种调味料不是炒菜常用的？",
        options: ["盐", "糖", "可乐", "生抽"],
        correct: 2
    },
    {
        question: "红烧肉最适合用哪个部位的猪肉？",
        options: ["里脊", "五花肉", "排骨", "猪蹄"],
        correct: 1
    },
    {
        question: "以下哪种不是中国八大菜系之一？",
        options: ["川菜", "粤菜", "东北菜", "苏菜"],
        correct: 2
    },
    {
        question: "煎牛排时，为什么要让肉回温？",
        options: ["增加口感", "方便入味", "更容易熟透", "节省时间"],
        correct: 2
    },
    {
        question: "以下哪种食材不适合做清蒸鱼？",
        options: ["鲈鱼", "带鱼", "草鱼", "鲫鱼"],
        correct: 1
    },
    {
        question: "炒青菜时应该什么时候放盐？",
        options: ["开始时", "中间时", "快结束时", "任何时候都可以"],
        correct: 2
    },
    {
        question: "以下哪种面点不是江南特色？",
        options: ["小笼包", "锅贴", "肉夹馍", "生煎包"],
        correct: 2
    },
    {
        question: "制作蛋炒饭时，鸡蛋应该什么时候放入？",
        options: ["炒饭前", "和饭一起", "炒饭后", "无所谓"],
        correct: 0
    },
    {
        question: "以下哪种调味料最适合用来去腥？",
        options: ["白胡椒", "五香粉", "咖喱粉", "花椒"],
        correct: 0
    }
];

let currentQuestion = 0;
let score = 0;

// DOM 元素
const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');
const startBtn = document.getElementById('start-btn');
const restartBtn = document.getElementById('restart-btn');
const questionNumber = document.getElementById('question-number');
const scoreElement = document.getElementById('score');
const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options');
const finalScore = document.getElementById('final-score');
const resultMessage = document.getElementById('result-message');

// 开始游戏
function startGame() {
    currentQuestion = 0;
    score = 0;
    startScreen.classList.add('hidden');
    quizScreen.classList.remove('hidden');
    resultScreen.classList.add('hidden');
    showQuestion();
}

// 显示问题
function showQuestion() {
    const question = questions[currentQuestion];
    questionNumber.textContent = currentQuestion + 1;
    scoreElement.textContent = score;
    questionText.textContent = question.question;
    
    optionsContainer.innerHTML = '';
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-btn';
        button.textContent = option;
        button.onclick = () => checkAnswer(index);
        optionsContainer.appendChild(button);
    });
}

// 检查答案
function checkAnswer(selectedIndex) {
    const question = questions[currentQuestion];
    const buttons = optionsContainer.getElementsByClassName('option-btn');
    
    // 禁用所有按钮
    Array.from(buttons).forEach(button => {
        button.disabled = true;
    });
    
    // 显示正确和错误答案
    buttons[question.correct].classList.add('correct');
    if (selectedIndex !== question.correct) {
        buttons[selectedIndex].classList.add('wrong');
    } else {
        score += 10;
        scoreElement.textContent = score;
    }
    
    // 延迟后进入下一题
    setTimeout(() => {
        currentQuestion++;
        if (currentQuestion < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 1500);
}

// 显示结果
function showResult() {
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    finalScore.textContent = score;
    
    let message;
    if (score >= 80) {
        message = "太棒了！你是美食专家！";
    } else if (score >= 60) {
        message = "不错！你对美食很有研究！";
    } else if (score >= 40) {
        message = "继续加油！还需要多学习！";
    } else {
        message = "要多关注美食知识哦！";
    }
    resultMessage.textContent = message;
}

// 事件监听
startBtn.addEventListener('click', startGame);
restartBtn.addEventListener('click', startGame); 