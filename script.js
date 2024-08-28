const users = [
    { name: "李明", gender: "male", department: "染织", grade: "2022级", research: "智能纺织品", interests: "户外运动、摄影", skills: "Python编程、机器学习", needs: "寻找对可穿戴设备感兴趣的同学交流", details: "我的研究重点是开发具有温度调节功能的智能面料，以应用于极端环境防护服装。同时我也在探索如何将这些技术应用到日常穿着中，提高服装的舒适度和功能性。" },
    { name: "王芳", gender: "female", department: "陶瓷", grade: "2023级", research: "陶瓷3D打印", interests: "绘画、园艺", skills: "3D建模、材料科学", needs: "希望找到对医疗器械感兴趣的伙伴", details: "我正在探索使用3D打印技术制作复杂陶瓷结构，重点关注医疗植入物的应用。我的目标是开发出既美观又实用的医疗级陶瓷产品，改善患者的生活质量。" },
    { name: "张伟", gender: "male", department: "视传", grade: "2021级", research: "交互设计", interests: "游戏设计、VR/AR技术", skills: "UI/UX设计、Unity开发", needs: "寻找对教育科技感兴趣的合作伙伴", details: "我致力于开发新型人机交互界面，特别关注增强现实（AR）在教育领域的应用。我相信通过创新的交互设计，我们可以彻底改变学习的方式，让教育变得更加有趣和高效。" },
    { name: "刘静", gender: "female", department: "环艺", grade: "2022级", research: "可持续建筑设计", interests: "生态学、极简主义设计", skills: "建筑设计软件、环境评估", needs: "寻找对绿色建筑感兴趣的志同道合者", details: "我的研究聚焦于利用回收材料进行建筑设计，探索如何将环保理念融入现代城市规划。我正在开发一种新型的模块化建筑系统，它不仅环保，而且能够快速组装和拆卸，适应未来城市的快速变化。" },
    { name: "陈强", gender: "male", department: "工设", grade: "2023级", research: "人体工程学", interests: "康复医学、产品设计", skills: "3D打印、人体测量", needs: "寻找医学背景的合作伙伴", details: "我正在研究如何将人体工程学原理应用于老年人辅助设备的设计，提高生活质量。我的目标是创造出既实用又美观的辅助设备，帮助老年人保持独立性和尊严，同时改善他们的生活品质。" },
    { name: "赵雪", gender: "female", department: "工美", grade: "2021级", research: "传统工艺创新", interests: "民族文化、现代设计", skills: "漆器工艺、数字设计", needs: "寻找对文化传承感兴趣的伙伴", details: "我的研究旨在将传统漆器工艺与现代设计理念结合，探索中国传统美学在当代语境下的新表达。我正在尝试将数字技术融入传统工艺中，创造出既有文化底蕴又符合现代审美的作品。" },
    { name: "孙鹏", gender: "male", department: "信息", grade: "2022级", research: "数据可视化", interests: "大数据分析、信息设计", skills: "D3.js、机器学习", needs: "寻找对数据艺术感兴趣的合作者", details: "我正在开发新型数据可视化工具，致力于让复杂的大数据分析结果更直观、更易理解。我的目标是将数据可视化技术应用于社会科学研究，帮助人们更好地理解社会现象和趋势。" },
    { name: "周丽", gender: "female", department: "纯艺", grade: "2023级", research: "数字绘画", interests: "传统国画、新媒体艺术", skills: "数字绘画软件、传统绘画技法", needs: "寻找对AI辅助创作感兴趣的同学", details: "我的研究重点是探索人工智能辅助创作在传统国画中的应用，寻求传统与现代的融合。我正在开发一种AI系统，它能够学习传统国画的笔法和构图，辅助艺术家创作出兼具传统韵味和现代特色的作品。" },
    { name: "吴刚", gender: "male", department: "雕塑", grade: "2021级", research: "公共艺术", interests: "城市规划、社会学", skills: "大型雕塑制作、3D建模", needs: "寻找对城市美化项目感兴趣的合作伙伴", details: "我致力于创作能够与城市环境互动的大型公共雕塑，探索艺术如何改善城市生活质量。我正在研究如何将环境感知技术融入雕塑中，使作品能够根据周围环境的变化而改变，创造出动态的城市艺术体验。" },
    { name: "郑萍", gender: "female", department: "史论", grade: "2022级", research: "当代艺术批评", interests: "艺术哲学、新媒体理论", skills: "艺术评论写作、数据分析", needs: "寻找对数字时代艺术传播感兴趣的同学", details: "我的研究聚焦于解析当代艺术在社交媒体时代的传播与接受机制，探讨数字化对艺术批评的影响。我正在开发一个在线平台，旨在促进艺术家、评论家和观众之间的互动，重新定义数字时代的艺术批评。" },
    { name: "黄磊", gender: "male", department: "染织", grade: "2023级", research: "生物材料纺织", interests: "生物学、可持续时尚", skills: "生物材料研究、纺织工艺", needs: "寻找对环保面料感兴趣的设计师合作", details: "我正在研究如何利用生物材料（如藻类、菌丝体）开发新型纺织品。这项研究不仅有助于减少传统纺织业的环境污染，还可能带来全新的面料质感和功能。我希望能将这些创新材料应用于时装设计，推动可持续时尚的发展。" },
    { name: "林婷", gender: "female", department: "陶瓷", grade: "2021级", research: "功能陶瓷", interests: "材料科学、电子工程", skills: "陶瓷合成、电路设计", needs: "寻找对智能家居感兴趣的工程师合作", details: "我的研究方向是开发具有特殊功能的陶瓷材料，如压电陶瓷、导电陶瓷等。目前，我正在探索如何将这些功能陶瓷集成到日常用品中，例如开发能够感应触摸并控制家电的陶瓷器皿。这将为智能家居带来新的可能性。" },
    { name: "王亮", gender: "male", department: "视传", grade: "2022级", research: "信息图形设计", interests: "数据新闻、科普传播", skills: "数据分析、图形设计", needs: "寻找擅长数据挖掘的伙伴合作", details: "我致力于通过视觉设计使复杂的信息变得易于理解和吸引人。我正在开发一套针对科学数据的可视化模板，旨在提高科普传播的效果。我相信，好的设计可以让更多人理解和关注科学，促进公众科学素养的提升。" },
    { name: "杨洁", gender: "female", department: "环艺", grade: "2023级", research: "智能空间设计", interests: "物联网、人工智能", skills: "空间设计、编程", needs: "寻找对智能家居系统开发感兴趣的技术合作伙伴", details: "我的研究方向是将物联网和人工智能技术融入室内设计，创造智能化的生活和工作空间。我正在开发一个能够根据使用者行为模式自动调节环境的系统，包括灯光、温度、空气质量等。我的目标是让室内环境能够主动适应人的需求，提高生活品质和工作效率。" },
    { name: "张鑫", gender: "male", department: "工设", grade: "2021级", research: "可持续产品设计", interests: "循环经济、生态设计", skills: "产品建模、材料研究", needs: "寻找对绿色供应链感兴趣的企业合作", details: "我专注于设计易于回收和再利用的产品，探索如何在产品生命周期的每个阶段最小化环境影响。目前，我正在研究一种模块化电子产品设计，使其更容易升级和维修，从而延长使用寿命并减少电子垃圾。我希望通过设计推动更可持续的消费模式。" },
    { name: "李华", gender: "female", department: "工美", grade: "2022级", research: "数字文化遗产", interests: "考古学、虚拟现实", skills: "3D扫描建模、VR开发", needs: "寻找对文物保护和数字化感兴趣的历史学者合作", details: "我的研究聚焦于利用数字技术保护和展示文化遗产。我正在开发一个VR平台，可以让人们身临其境地体验历史场景和文物。这不仅有助于文化遗产的保护和研究，还能让更多人以沉浸式的方式了解历史文化，提高公众的文化认同感。" },
    { name: "陈明", gender: "male", department: "信息", grade: "2023级", research: "人机交互", interests: "认知科学、用户体验", skills: "编程、用户研究", needs: "寻找对无障碍设计感兴趣的心理学研究者合作", details: "我致力于开发更直观、更易用的人机交互界面，特别关注特殊需求群体的使用体验。目前，我正在研究一种基于脑机接口的辅助通信系统，旨在帮助严重运动障碍患者更好地与外界交流。我相信，通过技术创新，我们可以为每个人创造更平等的数字世界。" },
    { name: "赵琳", gender: "female", department: "纯艺", grade: "2021级", research: "艺术治疗", interests: "心理学、表现主义艺术", skills: "绘画技法、心理咨询", needs: "寻找对艺术教育和心理健康项目感兴趣的合作者", details: "我正在探索如何将绘画艺术应用于心理治疗中，特别是对抑郁症和焦虑症患者的辅助治疗。我开发了一系列绘画练习，旨在帮助人们表达内心情感、缓解压力。我希望通过艺术创作，为人们的心理健康提供一种新的疗愈途径。" },
    { name: "刘伟", gender: "male", department: "雕塑", grade: "2022级", research: "互动雕塑", interests: "机械工程、声光电技术", skills: "雕塑制作、机械设计", needs: "寻找对跨媒体艺术装置感兴趣的工程师合作", details: "我的研究方向是创作能与观众互动的雕塑作品。我正在开发一种结合了传感器和机械结构的雕塑系统，它能够感知周围环境和人的行为，并做出相应的变化。我的目标是打破传统雕塑的静态形式，创造出能够与人对话的动态艺术作品。" }
];


function createCardHTML(user) {
    return `
        <div class="card-wrapper">
            <div class="card ${user.department}" data-department="${user.department}">
                <h3 class="${user.gender}">${user.name}</h3>
                <p>系别：${user.department}</p>
                <p>年级：${user.grade}</p>
                <p>研究方向：${user.research}</p>
                <div class="details">
                    <div class="image-placeholder">
                        这里可能展示 ${user.name} 的作品、成就截图或爱好照片
                    </div>
                    <p>兴趣爱好：${user.interests}</p>
                    <p>技能：${user.skills}</p>
                    <p>需求：${user.needs}</p>
                    <p>个人介绍：${user.details}</p>
                </div>
            </div>
        </div>
    `;
}

// 初始化页面
$(document).ready(function() {
    const $cardContainer = $('.card-container');
    
    // 渲染所有卡片
    $cardContainer.html(users.map(createCardHTML).join(''));

    // 筛选功能
    $('#filters').on('click', 'a', function(e) {
        e.preventDefault();
        const filterValue = $(this).attr('data-filter');
        
        $('.card-wrapper').each(function() {
            const $card = $(this).find('.card');
            if (filterValue === 'all' || $card.attr('data-department') === filterValue) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        // 更新活跃按钮样式
        $('#filters a').removeClass('active');
        $(this).addClass('active');
    });

    // 展开/收起卡片
    $cardContainer.on('click', '.card', function(e) {
        const $clickedCard = $(this);
        const isExpanded = $clickedCard.hasClass('expanded');



        // 关闭所有其他展开的卡片
        $('.card.expanded').not(this).removeClass('expanded');

        // 切换当前卡片的展开状态
        $clickedCard.toggleClass('expanded');

        // 如果卡片被展开，滚动到卡片位置
        if ($clickedCard.hasClass('expanded')) {
            $('html, body').animate({
                scrollTop: $clickedCard.offset().top - 20
            }, 300);
        }
    });
});