// 菜品数据
const recipes = {
    'gongbaojiding': {
        title: '宫保鸡丁',
        difficulty: '简单',
        time: '30分钟',
        calories: '320千卡',
        ingredients: {
            main: [
                '鸡胸肉 300g',
                '花生米 50g',
                '青椒 2个',
                '干红辣椒 8-10个'
            ],
            seasoning: [
                '葱花 适量',
                '姜末 适量',
                '蒜末 适量',
                '生抽 2勺',
                '料酒 1勺',
                '盐 适量'
            ]
        },
        steps: [
            {
                title: '腌制鸡肉',
                content: '将鸡胸肉切成小块，加入生抽、料酒腌制15分钟'
            },
            {
                title: '准备配料',
                content: '青椒切块，干辣椒切段，花生米炒熟备用'
            },
            {
                title: '爆香调味',
                content: '锅中放油，爆香葱姜蒜和干辣椒'
            },
            {
                title: '炒制鸡肉',
                content: '加入腌制好的鸡肉快速翻炒至变色'
            },
            {
                title: '加入配料',
                content: '加入青椒和花生米，翻炒均匀'
            },
            {
                title: '调味收汁',
                content: '加入适量盐调味，大火快炒收汁即可'
            }
        ],
        tips: [
            '鸡肉最好选用鸡胸肉，口感更嫩',
            '花生米提前炒熟，这样可以保持酥脆',
            '最后收汁时火候要快，保持菜品的口感'
        ]
    },
    'tangcupaigu': {
        title: '糖醋排骨',
        difficulty: '中等',
        time: '45分钟',
        calories: '450千卡',
        ingredients: {
            main: [
                '排骨 500g',
                '青椒 1个',
                '红椒 1个',
                '葱段 适量'
            ],
            seasoning: [
                '生抽 2勺',
                '醋 2勺',
                '白糖 3勺',
                '料酒 1勺',
                '盐 适量'
            ]
        },
        steps: [
            {
                title: '排骨处理',
                content: '排骨切段，冷水下锅焯烫去血水'
            },
            {
                title: '调制酱汁',
                content: '将生抽、醋、白糖调制成糖醋汁'
            },
            {
                title: '炒制排骨',
                content: '锅中放油，将排骨炒至金黄'
            },
            {
                title: '收汁',
                content: '加入调制好的糖醋汁，大火收汁'
            }
        ],
        tips: [
            '排骨最好选用肋排，肉质更嫩',
            '焯水时加入姜片去腥',
            '收汁时注意火候，使排骨色泽红亮'
        ]
    },
    'congbaoyangrou': {
        title: '葱爆羊肉',
        difficulty: '中等',
        time: '35分钟',
        calories: '380千卡',
        ingredients: {
            main: [
                '羊肉片 400g',
                '大葱 2根',
                '生姜 30g',
                '蒜 4瓣'
            ],
            seasoning: [
                '生抽 2勺',
                '老抽 1勺',
                '料酒 2勺',
                '淀粉 1勺',
                '盐 适量',
                '胡椒粉 少许'
            ]
        },
        steps: [
            {
                title: '腌制羊肉',
                content: '羊肉片加入生抽、料酒、淀粉腌制20分钟'
            },
            {
                title: '准备配料',
                content: '大葱切段，姜蒜切片'
            },
            {
                title: '爆香配料',
                content: '热锅下油，爆香姜蒜'
            },
            {
                title: '炒制羊肉',
                content: '加入腌制好的羊肉快速翻炒'
            },
            {
                title: '加入葱段',
                content: '羊肉变色后加入葱段翻炒'
            },
            {
                title: '调味',
                content: '加入适量盐和胡椒粉调味即可'
            }
        ],
        tips: [
            '羊肉最好选用后腿肉，口感更好',
            '炒制时火候要大，这样羊肉更嫩',
            '葱段最后加入，保持脆嫩'
        ]
    },
    'mapodoufu': {
        title: '麻婆豆腐',
        difficulty: '简单',
        time: '25分钟',
        calories: '280千卡',
        ingredients: {
            main: [
                '豆腐 400g',
                '猪肉末 200g',
                '豆瓣酱 2勺',
                '花椒 适量'
            ],
            seasoning: [
                '葱花 适量',
                '蒜末 适量',
                '生抽 1勺',
                '淀粉 1勺',
                '盐 适量'
            ]
        },
        steps: [
            {
                title: '准备豆腐',
                content: '豆腐切块，用温水浸泡'
            },
            {
                title: '炒制肉末',
                content: '锅中放油，炒香肉末'
            },
            {
                title: '加入调味',
                content: '加入豆瓣酱炒出香味'
            },
            {
                title: '加入豆腐',
                content: '放入豆腐块，小心翻炒'
            },
            {
                title: '勾芡',
                content: '加入水淀粉勾芡'
            }
        ],
        tips: [
            '选用嫩豆腐，口感更好',
            '炒制时动作要轻，避免豆腐碎',
            '可以根据个人口味调整辣度'
        ]
    },
    'qingzhengluyu': {
        title: '清蒸鲈鱼',
        difficulty: '中等',
        time: '20分钟',
        calories: '200千卡',
        ingredients: {
            main: [
                '鲈鱼 1条',
                '姜片 适量',
                '葱段 适量',
                '香菜 适量'
            ],
            seasoning: [
                '料酒 2勺',
                '生抽 1勺',
                '盐 适量',
                '胡椒粉 少许'
            ]
        },
        steps: [
            {
                title: '处理鱼',
                content: '鲈鱼清洗干净，划几刀'
            },
            {
                title: '腌制',
                content: '抹上料酒、盐腌制10分钟'
            },
            {
                title: '摆盘',
                content: '放入姜片、葱段'
            },
            {
                title: '蒸制',
                content: '大火蒸8-10分钟'
            },
            {
                title: '淋油',
                content: '浇上热油，撒上香菜即可'
            }
        ],
        tips: [
            '鱼要新鲜，这样蒸出来才鲜美',
            '蒸制时间要适中，避免过火',
            '最后淋热油可以提升香气'
        ]
    },
    'dongporou': {
        title: '东坡肉',
        difficulty: '困难',
        time: '180分钟',
        calories: '520千卡',
        ingredients: {
            main: [
                '五花肉 500g',
                '葱段 3根',
                '姜片 适量',
                '冰糖 50g'
            ],
            seasoning: [
                '生抽 3勺',
                '老抽 1勺',
                '料酒 2勺',
                '八角 2个',
                '桂皮 1块'
            ]
        },
        steps: [
            {
                title: '处理肉块',
                content: '五花肉切大块，焯水去腥'
            },
            {
                title: '煎制',
                content: '将肉块煎至金黄'
            },
            {
                title: '炖煮',
                content: '加入调料和水，小火慢炖'
            },
            {
                title: '收汁',
                content: '汤汁收至浓稠即可'
            }
        ],
        tips: [
            '选用三层肉，肥瘦均匀',
            '炖煮时火候要小，保持耐心',
            '最后收汁很关键，要收得浓稠'
        ]
    },
    'shuizhuyu': {
        title: '水煮鱼',
        difficulty: '中等',
        time: '40分钟',
        calories: '310千卡',
        ingredients: {
            main: [
                '草鱼片 500g',
                '豆芽 200g',
                '生菜 200g',
                '干辣椒 10个'
            ],
            seasoning: [
                '郫县豆瓣酱 2勺',
                '花椒 适量',
                '蒜末 适量',
                '姜片 适量',
                '盐 适量'
            ]
        },
        steps: [
            {
                title: '腌制鱼片',
                content: '鱼片加入料酒、盐腌制15分钟'
            },
            {
                title: '准备底料',
                content: '锅中放油，炒香豆瓣酱'
            },
            {
                title: '摆盘',
                content: '将豆芽、生菜铺底，放入鱼片'
            },
            {
                title: '浇汤',
                content: '将热油浇在鱼片上，最后淋上汤汁'
            }
        ],
        tips: [
            '鱼片要新鲜，切片要均匀',
            '最后浇油要趁热，这样鱼片更入味',
            '可以根据个人口味调整辣度'
        ]
    },
    'shizitou': {
        title: '红烧狮子头',
        difficulty: '中等',
        time: '60分钟',
        calories: '480千卡',
        ingredients: {
            main: [
                '猪肉馅 500g',
                '冬笋 100g',
                '香菇 5朵',
                '白菜 300g'
            ],
            seasoning: [
                '生抽 2勺',
                '老抽 1勺',
                '料酒 2勺',
                '姜末 适量',
                '盐 适量'
            ]
        },
        steps: [
            {
                title: '调制肉馅',
                content: '猪肉馅加入调料搅拌均匀'
            },
            {
                title: '制作肉丸',
                content: '将肉馅揉成大丸子'
            },
            {
                title: '煎制',
                content: '将肉丸煎至表面金黄'
            },
            {
                title: '红烧',
                content: '加入配料和调味料慢炖'
            }
        ],
        tips: [
            '肉馅要充分搅拌，这样口感更好',
            '煎制时要小心翻动，避免破碎',
            '炖煮时火候要小，使肉质更嫩'
        ]
    },
    'baiqieji': {
        title: '白切鸡',
        difficulty: '简单',
        time: '50分钟',
        calories: '290千卡',
        ingredients: {
            main: [
                '整鸡 1只',
                '葱 2根',
                '姜 50g'
            ],
            seasoning: [
                '蒜蓉 适量',
                '姜葱油 适量',
                '生抽 2勺',
                '盐 适量'
            ]
        },
        steps: [
            {
                title: '准备鸡',
                content: '鸡洗净，腹腔放入葱姜'
            },
            {
                title: '煮鸡',
                content: '冷水下锅，加入适量盐，大火煮沸后转小火'
            },
            {
                title: '浸泡',
                content: '关火后浸泡15分钟'
            },
            {
                title: '切块',
                content: '取出晾凉后切块'
            },
            {
                title: '调制蘸料',
                content: '准备姜葱油、蒜蓉等蘸料'
            }
        ],
        tips: [
            '选用三黄鸡最佳',
            '煮鸡时水要没过鸡身',
            '浸泡时间要足够，这样鸡肉更嫩滑'
        ]
    },
    'suancaiyu': {
        title: '酸菜鱼',
        difficulty: '中等',
        time: '45分钟',
        calories: '280千卡',
        ingredients: {
            main: [
                '草鱼 1条',
                '酸菜 300g',
                '豆芽 200g',
                '干辣椒 适量'
            ],
            seasoning: [
                '生抽 2勺',
                '料酒 2勺',
                '白胡椒粉 少许',
                '盐 适量',
                '花椒 适量'
            ]
        },
        steps: [
            {
                title: '处理鱼',
                content: '鱼片切片，加入料酒腌制'
            },
            {
                title: '炒酸菜',
                content: '酸菜切丝，爆香后加水煮制'
            },
            {
                title: '加入配料',
                content: '放入豆芽和调味料'
            },
            {
                title: '煮鱼',
                content: '将鱼片放入汤中煮至变色'
            },
            {
                title: '调味',
                content: '最后加入适量盐和胡椒粉调味'
            }
        ],
        tips: [
            '鱼片要切得均匀',
            '酸菜要充分炒香',
            '最后加入鱼片时不要搅动太多'
        ]
    },
    'chashaorou': {
        title: '叉烧肉',
        difficulty: '困难',
        time: '120分钟',
        calories: '420千卡',
        ingredients: {
            main: [
                '猪里脊 500g',
                '蒜 2瓣',
                '姜片 适量'
            ],
            seasoning: [
                '叉烧酱 4勺',
                '蜂蜜 2勺',
                '生抽 1勺',
                '料酒 1勺',
                '五香粉 少许'
            ]
        },
        steps: [
            {
                title: '腌制',
                content: '将肉用调料腌制4小时以上'
            },
            {
                title: '预热烤箱',
                content: '预热烤箱至200度'
            },
            {
                title: '烤制',
                content: '放入烤箱，每15分钟刷一次酱'
            },
            {
                title: '刷蜜',
                content: '最后5分钟刷上蜂蜜'
            },
            {
                title: '切片',
                content: '晾凉后切片即可'
            }
        ],
        tips: [
            '腌制时间越长越入味',
            '烤制时要经常刷酱',
            '最后刷蜜可以让表面更亮'
        ]
    },
    'yangzhouchaofan': {
        title: '扬州炒饭',
        difficulty: '简单',
        time: '25分钟',
        calories: '350千卡',
        ingredients: {
            main: [
                '隔夜米饭 2碗',
                '虾仁 100g',
                '火腿 50g',
                '胡萝卜 1根',
                '豌豆 50g',
                '鸡蛋 2个'
            ],
            seasoning: [
                '生抽 1勺',
                '盐 适量',
                '胡椒粉 少许',
                '葱花 适量'
            ]
        },
        steps: [
            {
                title: '准备配料',
                content: '所有配料切丁，虾仁去壳'
            },
            {
                title: '炒蛋',
                content: '先将鸡蛋炒散盛出'
            },
            {
                title: '炒配料',
                content: '爆香配料，加入虾仁翻炒'
            },
            {
                title: '炒饭',
                content: '加入米饭，翻炒均匀'
            },
            {
                title: '调味',
                content: '加入调味料，最后撒上葱花'
            }
        ],
        tips: [
            '米饭最好用隔夜的',
            '火候要大，这样炒出来的饭粒分明',
            '配料要切得大小均匀'
        ]
    }
};

// 获取URL参数
function getUrlParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// 加载菜品详情
function loadRecipeDetails() {
    const dishId = getUrlParam('dish') || 'gongbaojiding';
    const recipe = recipes[dishId];
    
    if (!recipe) {
        window.location.href = 'recipes.html';
        return;
    }

    // 更新页面标题
    document.title = `${recipe.title} - 美味之家`;
    document.getElementById('recipe-title').textContent = recipe.title;

    // 更新基本信息
    const recipeInfo = document.querySelector('.recipe-info');
    recipeInfo.innerHTML = `
        <span>难度：${recipe.difficulty}</span>
        <span>烹饪时间：${recipe.time}</span>
        <span>热量：${recipe.calories}</span>
    `;

    // 更新食材列表
    const mainIngredients = document.querySelector('.ingredients-list ul:first-of-type');
    const seasoningIngredients = document.querySelector('.ingredients-list ul:last-of-type');
    
    mainIngredients.innerHTML = recipe.ingredients.main.map(item => `<li>${item}</li>`).join('');
    seasoningIngredients.innerHTML = recipe.ingredients.seasoning.map(item => `<li>${item}</li>`).join('');

    // 更新步骤
    const steps = document.querySelector('.steps ol');
    steps.innerHTML = recipe.steps.map(step => `
        <li>
            <h3>步骤：${step.title}</h3>
            <p>${step.content}</p>
        </li>
    `).join('');

    // 更新小贴士
    const tips = document.querySelector('.tips ul');
    tips.innerHTML = recipe.tips.map(tip => `<li>${tip}</li>`).join('');
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', loadRecipeDetails); 