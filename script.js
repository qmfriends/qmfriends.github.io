const users = [
    { name: "李策", gender: "male", department: "工设", grade: "2024级", research: "基于AI的复杂形态研究", interests: "看书，游戏", skills: "各类编程都会一点、AIGC、建筑设计", needs: "各种各样的有趣体验，用技术支持设计与艺术的合作机会", details: "建筑学出身，当过程序员、产品经理、大厂管理，现在专注于以技术支持设计与艺术，包括但不限于AI，参数化设计、机械臂、交互装置等等，追求多种多样的人生体验和“时间自由”", imageUrl: "imgs/lice.png" },
    { name: "李硕", gender: "male", department: "绘画", grade: "2024级", research: "中西方绘画及艺术生态", interests: "打游戏，羽毛球", skills: "通识类绘画技术交流（零基础）", needs: "学习增肌健身", details: "既是绘画爱好者，又是互联网打工人。想要慢生活，无事逛逛展，安东尼葛姆雷和保罗克利都可。", imageUrl: "imgs/lishuo.jpg" },
    { name: "李潇鹏", gender: "male", department: "染服", grade: "2024级", research: "服装设计", interests: "围棋、足球、VR/AR技术", skills: "Clo 3D、人工智能", needs: "想了解服装与人工智能交叉的更多可能", details: "我是一个致力于推动服装设计创新的设计师，特别专注于探索趣味性与互动性相结合的设计应用。我坚信，通过跨学科的设计融合，我们能够彻底变革服装与纺织品的设计方式，使其更加灵动与富有生命力。", imageUrl: "imgs/lixiaopeng.jpg" },
    { name: "吴竟诚", gender: "male", department: "工美", grade: "2024级", research: "非写实漆画", interests: "摄影、旅游", skills: "漆工艺、ps", needs: "发文章、跨学科", details: "infj，平时热爱体育运动、看展、摄影、旅游等。专业上以创作漆画为主，作品较偏当代，探寻材料的综合性与画面的创新，突破传统的材料限制进行当代的理念创新。博士阶段的研究主要围绕装饰风格的漆画，将传统的平面性装饰与当代的表现语言相结合进行创作", imageUrl: "imgs/wujingcheng.png" },
    { name: "刘培烨", gender: "male", department: "环艺", grade: "2024级", research: "环境行为心理学", interests: "看书，城市漫步，操场慢跑", skills: "数据量化，统计学分析，实证研究实验", needs: "有趣活动的搭子，环境研究的讨论小伙伴，脱单", details: "建筑学背景的INTJ，经历了从艺术生到科研狗的困顿与迷茫，对科学研究范式、SCI文章发表有些许经验，科研方面有问题可以随时滴滴，知无不言。也欢迎大家介绍对象给我～", imageUrl: "imgs/liupeiye.jpg" },
    { name: "万田良", gender: "male", department: "工设", grade: "2024级", research: "智能移动、产品服务与创新", interests: "民篮球（从小打球🏀）、深潜（国际潜水SSI一级潜水员）、健身（清华北体5-6点约练！）、做饭、画画（画的不好但爱画哈哈哈）", skills: "blender、ps、alias、stable diffusion、油泥模型", needs: "学术交流、发文章、跨学科、交叉学科", details: "ENFJ 虽然是E人，但有时候还是很害羞的，请多多关照！", imageUrl: "imgs/wantianliang.jpg" },
    { name: "何为", gender: "male", department: "视传", grade: "2024级", research: "传统文化视觉要素的当代语境转译与数字化传播", interests: "网球、也可以打打羽毛球、健身", skills: " ", needs: "认识聪明智慧且有能力的好朋友，特别是技术领域专业人才探讨一些问题", details: "策展人、数字艺术家、曾担任国内外文化项目制作人和艺术指导。", imageUrl: "imgs/hewei.jpg" },
    { name: "杜心恬", gender: "female", department: "环艺", grade: "2024级", research: "建筑园林史、美术考古", interests: "唱歌、阅读、书法", skills: "历史古文献查阅、中国古建筑", needs: "寻求研究中国古建筑、古典园林、宗教美术考古方面的志友", details: "主要研究建筑园林史、美术考古方向。发表过北核，致力于中国传统文化领域的学习和探索。", imageUrl: "imgs/duxintian.jpg" },
    { name: "范智翔", gender: "male", department: "环艺", grade: "2024级", research: "文化空间的多模态智能认知与保护", interests: "摄影，旅游", skills: "历史资料分析与处理、文化空间分析", needs: "找艺术与科学跨学科研究的可能性，利用现代化技术重现传统历史文化空间", details: "本硕风景园林专业，关注景观及文化遗产，目前正在积极学习热门技术应用于现有方向。短期目标是举办一次科研艺术展，长期目标是顺利毕业" , imageUrl: "imgs/fanzhixiang.jpg" },
    { name: "买根", gender: "male", department: "工设", grade: "2024级", research: "数字展示设计", interests: "羽毛球，排球，篮球，绘画", skills: "展示设计", needs: "交流，学习", details: "热爱体育运动、研究方向主要数字艺术展示内容设计，现在的兴趣点是莫高窟彩塑和壁画的活化，希望有机会多和大家交流！" , imageUrl: "imgs/maigen.jpg" },
    { name: "陈越", gender: "male", department: "视传", grade: "2024级", research: "汉字文化研究与推广，品牌设计", interests: "生足球，清华美院足球队老头，欢迎大家入队或踢野球！喜欢标本，特别喜欢螃蟹；茶&咖啡；喜欢R&B", skills: "平面设计", needs: "寻找研究混合现实领域的同仁，寻找美院足球队的新队员", details: "INTP，本硕博都在视传，任职过品牌设计公司，搞过设计工作室，目前在一家混合现实领域的创业公司担任CDO，专注于在MR头显设备中让数字生命活起来这件事", imageUrl: "imgs/chenyue.jpg"  },
    { name: "林婷", gender: "female", department: "陶瓷", grade: "2021级", research: "功能陶瓷", interests: "材料科学、电子工程", skills: "陶瓷合成、电路设计", needs: "寻找对智能家居感兴趣的工程师合作", details: "我的研究方向是开发具有特殊功能的陶瓷材料，如压电陶瓷、导电陶瓷等。目前，我正在探索如何将这些功能陶瓷集成到日常用品中，例如开发能够感应触摸并控制家电的陶瓷器皿。这将为智能家居带来新的可能性。" },
    { name: "王亮", gender: "male", department: "视传", grade: "2022级", research: "信息图形设计", interests: "数据新闻、科普传播", skills: "数据分析、图形设计", needs: "寻找擅长数据挖掘的伙伴合作", details: "我致力于通过视觉设计使复杂的信息变得易于理解和吸引人。我正在开发一套针对科学数据的可视化模板，旨在提高科普传播的效果。我相信，好的设计可以让更多人理解和关注科学，促进公众科学素养的提升。" },
    { name: "杨洁", gender: "female", department: "环艺", grade: "2023级", research: "智能空间设计", interests: "物联网、人工智能", skills: "空间设计、编程", needs: "寻找对智能家居系统开发感兴趣的技术合作伙伴", details: "我的研究方向是将物联网和人工智能技术融入室内设计，创造智能化的生活和工作空间。我正在开发一个能够根据使用者行为模式自动调节环境的系统，包括灯光、温度、空气质量等。我的目标是让室内环境能够主动适应人的需求，提高生活品质和工作效率。" },
    { name: "张鑫", gender: "male", department: "工设", grade: "2021级", research: "可持续产品设计", interests: "循环经济、生态设计", skills: "产品建模、材料研究", needs: "寻找对绿色供应链感兴趣的企业合作", details: "我专注于设计易于回收和再利用的产品，探索如何在产品生命周期的每个阶段最小化环境影响。目前，我正在研究一种模块化电子产品设计，使其更容易升级和维修，从而延长使用寿命并减少电子垃圾。我希望通过设计推动更可持续的消费模式。" },
    { name: "李华", gender: "female", department: "工美", grade: "2022级", research: "数字文化遗产", interests: "考古学、虚拟现实", skills: "3D扫描建模、VR开发", needs: "寻找对文物保护和数字化感兴趣的历史学者合作", details: "我的研究聚焦于利用数字技术保护和展示文化遗产。我正在开发一个VR平台，可以让人们身临其境地体验历史场景和文物。这不仅有助于文化遗产的保护和研究，还能让更多人以沉浸式的方式了解历史文化，提高公众的文化认同感。" },
    { name: "陈明", gender: "male", department: "信息", grade: "2023级", research: "人机交互", interests: "认知科学、用户体验", skills: "编程、用户研究", needs: "寻找对无障碍设计感兴趣的心理学研究者合作", details: "我致力于开发更直观、更易用的人机交互界面，特别关注特殊需求群体的使用体验。目前，我正在研究一种基于脑机接口的辅助通信系统，旨在帮助严重运动障碍患者更好地与外界交流。我相信，通过技术创新，我们可以为每个人创造更平等的数字世界。" },
    { name: "赵琳", gender: "female", department: "绘画", grade: "2021级", research: "艺术治疗", interests: "心理学、表现主义艺术", skills: "绘画技法、心理咨询", needs: "寻找对艺术教育和心理健康项目感兴趣的合作者", details: "我正在探索如何将绘画艺术应用于心理治疗中，特别是对抑郁症和焦虑症患者的辅助治疗。我开发了一系列绘画练习，旨在帮助人们表达内心情感、缓解压力。我希望通过艺术创作，为人们的心理健康提供一种新的疗愈途径。" },
    { name: "刘伟", gender: "male", department: "雕塑", grade: "2022级", research: "互动雕塑", interests: "机械工程、声光电技术", skills: "雕塑制作、机械设计", needs: "寻找对跨媒体艺术装置感兴趣的工程师合作", details: "我的研究方向是创作能与观众互动的雕塑作品。我正在开发一种结合了传感器和机械结构的雕塑系统，它能够感知周围环境和人的行为，并做出相应的变化。我的目标是打破传统雕塑的静态形式，创造出能够与人对话的动态艺术作品。" }
];

const activities = [
    {
        title: "环艺主题研究方向分享及AI辅助研讨会",
        type: "研讨会",
        date: "2024-09-01",
        briefIntro: "几位博士新生交流各自的研究方向，包括AI、环境心理、数字人文及传统文化转译研究。",
        description: "本次活动探讨了AI在设计领域的应用、数字建造技术、环境心理学中的声景研究、数字人文在历史研究中的应用，以及传统文化的现代转译。交流中大家对各自的具体研究方向有了更深入的了解，对SCI.A&HCI的发表经验做了交流，并且发现了许多之后合作的可能性。",
        imageUrl: "activities/imgs/20240901act0img0.jpg",
        participants: [
            {
                name: "李策",
                briefIntro: "展示当前设计领域各方面最新AI应用，以及他在入学前在数字建造领域的研究内容",
                detailedPresentation: "李策展示了他已经应用于美院教学的AIGC入门网站，以及当前文生文、文生图、文生3D，图生3D的最新AI工具应用，并根据其他几位参会者的研究内容给出了相应的工具应用的建议以及合作研究的邀请。此外，他展示了他在读博前在数字建造领域的已有研究成果，包括复杂形态生成，自然界形态算法模拟，交互式形态生成，柔性混凝土浇筑，机器人建造，机器人超大规模3D打印，机械臂激光印染工艺等等",
                papers: [
                    {
                        title: "论文：用于壳结构的3D打印弯曲可回收模板（原文为英语）",
                        abstract: "本文介绍了一种利用3D打印弯曲可回收网格板制作薄壳结构模板的新型建造技术。为了增强柔性塑料材料的结构刚度,应用了弯曲活性形态,通过大变形弯曲利用几何刚化效应。由于确定弯曲表面的最终几何形状是主要问题,研究了考虑数值模拟的设计方法,并展示了动力松弛法和有限元法的模拟。展示了几个示范性亭子和建造过程,以测试所提出的建造技术在实际壳体项目中的可行性。预计这种方法可以应用于更多的薄壳项目,实现一种材料消耗更少的高效建造技术。",
                        url: "https://doi.org/https://doi.org/10.1007/978-981-15-6568-7_18"
                    },
                    {
                        title: "论文：基于计算的柔性组合模板的混凝土物理找形（原文为英语）",
                        abstract: "本项目提出了一种通过数字算法生成混凝土柔性模板来进行物理找形的设计方法,旨在探索物理空间中传递信息的真实材料与虚拟数据之间潜在的形式关联,从而讨论在数字设计技术支持下材料的自主性和智能性。本文第一部分首先讨论了近年来混凝土材料在数字建造领域的应用和发展现状,然后研究了柔性模板对混凝土材料流动特性的适应性;接着,第二部分提出了通过柔性和刚性复合模板进行混凝土物理形态寻找的成型方法,并尝试探索在数字算法控制下模板形状对这一过程的影响;第三部分记录了这种方法下混凝土成型实验的过程,讨论混凝土物理形态与组合模板之间的内在关系。",
                        url: "https://doi.org/10.52842/conf.caadria.2022.2.233"
                    },
                    {
                        title: "论文：机器人雕刻技术在传统雕刻工艺传承中的应用研究（原文为英语）",
                        abstract: "为了通过数字制造技术实现手工技艺的传承,从而保护传统建造文化,本文讨论了一种控制工业机器人(六轴KUKA kr-60机械臂)模拟雕刻工匠工作过程的方法,并探讨了雕刻姿势与不同粘土状态之间的关系。本文首先在数字工具应用的背景下讨论了文化遗产。接下来,在随后的雕刻实验研究中应用了一种通过给出六个轴的角度值来确定机器人手臂姿势的方法,这可以通过禁用调整这些姿势时机器人手臂的冗余轴移动,使机器人手臂有更平滑和合理的运动表现。然后,进行了一系列雕刻实验,探索机器人运动与雕刻细节之间的联系,同时提出了一种雕刻路径排列方法,允许通过给定的轴值产生特定的雕刻线条。这项研究显示了通过定义机器人运动来创造复杂形态的可能性,这从根本上可以使机器人制造具有新的形式意义。",
                        url: "https://doi.org/10.52842/conf.caadria.2022.1.747"
                    }
                ]
            },
            {
                name: "刘培烨",
                briefIntro: "分享了他硕士期间对蓝色空间/声音景观相关的研究及SCI论文发表经验",
                detailedPresentation: "刘培烨博士展示了硕士期间对环境心理学方向的研究成果，分享了城市蓝色空间中声景恢复质量与景观特征间的关系。具体包括视听实验材料的收集、分类以及实证实验的组织。并讨论了视听环境研究中采用其它技术手段的可能性。",
                papers: [
                    {
                        title: "论文：城市蓝色空间中景观特征与声景恢复品质之间的关系（原文为英语）",
                        abstract: "本研究旨在探索视听组合对蓝色空间中声音景观的恢复效果的具体影响。在实验中，6 种蓝色空间与 14 种声音相结合，65 名志愿者使用简易修订复原量表（SRRS）来测量视听组合的复原质量。结果表明，可以通过景观设计提高蓝色空间中声音景观的修复质量，这为可持续环境设计提供了启示。。",
                        url: "https://doi.org/10.1016/j.apacoust.2021.108600"
                    }
                ]
            },
            {
                name: "范智翔",
                briefIntro: "分享了硕士期间的围绕历史古籍与数字人文方向的相关论文成果，以及相关的研究方法。",
                detailedPresentation: "范智翔博士分享了包括古籍文献的文本词频挖掘，以及文本可视化分析等等在内的研究方法。当前智能化时代为数字人文的研究范式提供了新的可能，如何转化历史资源，挖掘当代价值是重要任务。",
                papers: [
                    {
                        title: "论文：基于历史文献的清代江南地区城市与山脉空间关系研究（原文为英语）",
                        abstract: "本文探讨了江南地区城市与自然山体之间的历史关联。研究主要利用数字人文工具，结合正则表达式对历史资料进行规律化提取与可视化分析。最后，文章也探讨了当前数字人文工具对历史研究的潜在方向与可能性。",
                        url: "https://doi.org/10.1145/3648002"
                    }
                ]
            },
            {
                name: "何为",
                briefIntro: "分享了在传统文化转译方面的一些项目经验以及博士选课的一些经验。",
                detailedPresentation: "何为博士分享了他在涉及传统文化转译中的一些项目经验以及部分博士新生选课的经验",
                papers: [
                    {
                        title: " ",
                        abstract: " 。",
                        url: " "
                    }
                ]
            }
        ]
    },
    {
        title: "未来城市设计与可持续发展工作坊(AI虚拟案例活动)",
        type: "工作坊",
        date: "2024-10-20",
        briefIntro: "探索智能化、绿色化的未来城市蓝图",
        description: "这个为期三天的工作坊汇集了城市规划师、环境科学家和技术创新者，共同探讨如何设计和建造更加智能、可持续的未来城市。参与者通过实践项目，运用最新技术和理念，提出了一系列创新的城市解决方案。",
        imageUrl: "imgs/future-city-workshop.jpg",
        participants: [
            {
                name: "陈明",
                briefIntro: "智能交通系统的设计与实施",
                detailedPresentation: "陈明博士介绍了他团队开发的新一代智能交通系统。该系统利用人工智能和物联网技术，实现了交通流的实时优化和预测。陈明强调，这个系统不仅能够显著提高城市交通效率，还能减少碳排放，为建设绿色智慧城市做出重要贡献。",
                papers: [
                    {
                        title: "基于AI的城市交通流优化模型研究",
                        abstract: "本文提出了一种新型的基于人工智能的城市交通流优化模型。通过结合深度学习和强化学习技术，我们开发了一个能够适应复杂城市环境的智能交通管理系统。实验结果表明，该模型能够有效减少交通拥堵，提高车辆通行效率，同时显著降低能源消耗和碳排放。",
                        url: "https://example.com/chen-ming-paper"
                    }
                ]
            },
            {
                name: "林秀",
                briefIntro: "垂直森林：城市生态系统的革新",
                detailedPresentation: "林秀教授展示了她在垂直森林项目上的最新成果。这个创新的建筑设计理念将大量植被集成到高层建筑中，不仅美化了城市景观，还能有效改善空气质量，降低城市热岛效应。林秀通过案例分析，详细讲解了垂直森林的设计原理、实施挑战及其对城市生态环境的积极影响。",
                papers: [
                    {
                        title: "垂直森林：城市生态修复的创新方案",
                        abstract: "本研究深入探讨了垂直森林在城市生态修复中的应用前景。通过对多个实施案例的分析，我们总结了垂直森林在改善空气质量、增加生物多样性和调节城市微气候方面的显著效果。同时，文章也讨论了实施垂直森林项目面临的技术挑战和解决方案，为未来大规模推广提供了理论基础。",
                        url: "https://example.com/lin-xiu-paper"
                    }
                ]
            },
            {
                name: "张伟",
                briefIntro: "智能建筑材料在未来城市中的应用",
                detailedPresentation: "张伟研究员介绍了一系列新型智能建筑材料及其在未来城市建设中的应用。这些材料包括自修复混凝土、光伏玻璃和相变材料等。张伟强调，这些创新材料不仅能够提高建筑的耐久性和能源效率，还能赋予建筑新的功能，如自动调节室内温度、吸收空气污染物等，从而创造更加舒适和环保的生活环境。",
                papers: [
                    {
                        title: "智能建筑材料在可持续城市发展中的角色",
                        abstract: "本文综述了最新智能建筑材料的研发进展及其在可持续城市建设中的应用潜力。我们重点分析了自修复材料、能源harvesting材料和环境响应材料三大类，讨论了它们在提高建筑性能、节能减排和改善居住体验方面的优势。研究结果表明，这些材料的广泛应用将显著提升城市的可持续性和宜居性。",
                        url: "https://example.com/zhang-wei-paper"
                    }
                ]
            }
        ]
    }
];


// 确保活动数据结构的一致性
activities.forEach(activity => {
    if (!activity.participants) {
        activity.participants = [];
    }
});

function createUserCardHTML(user) {
    const imageContent = user.imageUrl
        ? `<img src="${user.imageUrl}" alt="${user.name}的图片" class="user-image">`
        : `<div class="no-image-text">暂无图片/AI人物</div>`;

    return `
        <div class="card-wrapper">
            <div class="card ${user.department}" data-department="${user.department}">
                <h3 class="${user.gender}">${user.name}</h3>
                <p>系别：${user.department}</p>
                <p>年级：${user.grade}</p>
                <p>研究方向：${user.research}</p>
                <div class="details">
                    <div class="image-container">
                        ${imageContent}
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

function createActivityCardHTML(activity) {
    const participantsHTML = activity.participants && Array.isArray(activity.participants)
        ? activity.participants.map(createParticipantCardHTML).join('')
        : '';

    return `
        <div class="activity-card" data-type="${activity.type}">
            <div class="activity-brief">
                <h3>${activity.title}</h3>
                <p>日期：${activity.date}</p>
                <p>类型：${activity.type}</p>
                <p>${activity.briefIntro}</p>
            </div>
            <div class="activity-details" style="display: none;">
                <div class="image-container">
                    ${activity.imageUrl ? `<img src="${activity.imageUrl}" alt="${activity.title}的图片" class="activity-image">` : ''}
                </div>
                <p>${activity.description}</p>
                <div class="participants">
                    ${participantsHTML}
                </div>
            </div>
        </div>
    `;
}

function createParticipantCardHTML(participant) {
    if (!participant) return '';

    const papersHTML = participant.papers && Array.isArray(participant.papers)
        ? participant.papers.map(createPaperCardHTML).join('')
        : '';

    return `
        <div class="participant-card">
            <div class="participant-brief">
                <h4>${participant.name || '未知参与者'}</h4>
                <p>${participant.briefIntro || ''}</p>
            </div>
            <div class="participant-details" style="display: none;">
                <p>${participant.detailedPresentation || ''}</p>
                <div class="papers">
                    ${papersHTML}
                </div>
            </div>
        </div>
    `;
}

function createPaperCardHTML(paper) {
    if (!paper) return '';

    return `
        <div class="paper-card">
            <div class="paper-title">${paper.title || '未知论文'}</div>
            <div class="paper-details" style="display: none;">
                <p>${paper.abstract || ''}</p>
                ${paper.url ? `<a href="${paper.url}" target="_blank" rel="noopener noreferrer">查看论文</a>` : ''}
            </div>
        </div>
    `;
}

$(document).ready(function () {
    const $userCardContainer = $('#user-cards');
    const $activityCardContainer = $('#activity-cards');

    // 渲染所有用户卡片
    if (typeof users !== 'undefined' && Array.isArray(users)) {
        $userCardContainer.html(users.map(createUserCardHTML).join(''));
    }

    // 渲染所有活动卡片
    if (typeof activities !== 'undefined' && Array.isArray(activities)) {
        $activityCardContainer.html(activities.map(createActivityCardHTML).join(''));
    }

    // 主导航切换
    $('#main-nav').on('click', 'a', function (e) {
        e.preventDefault();
        const sectionId = $(this).attr('data-section');

        $('#main-nav a').removeClass('active');
        $(this).addClass('active');

        $('main > section').hide();
        $(`#${sectionId}-section`).show();
    });

    // 用户筛选功能
    $('#user-filters').on('click', 'a', function (e) {
        e.preventDefault();
        const filterValue = $(this).attr('data-filter');

        $('.card-wrapper').each(function () {
            const $card = $(this).find('.card');
            if (filterValue === 'all' || $card.attr('data-department') === filterValue) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        $('#user-filters a').removeClass('active');
        $(this).addClass('active');
    });

    // 活动筛选功能
    $('#activity-filters').on('click', 'a', function (e) {
        e.preventDefault();
        const filterValue = $(this).attr('data-filter');

        $('.activity-card').each(function () {
            if (filterValue === 'all' || $(this).attr('data-type') === filterValue) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });

        $('#activity-filters a').removeClass('active');
        $(this).addClass('active');
    });

    // 使用事件委托来处理卡片的展开/收起
    $('main').on('click', '.card', function (e) {
        const $clickedCard = $(this);
        $('.card.expanded').not(this).removeClass('expanded');
        $clickedCard.toggleClass('expanded');

        if ($clickedCard.hasClass('expanded')) {
            $('html, body').animate({
                scrollTop: $clickedCard.offset().top - 20
            }, 300);
        }
    });

    // 活动卡片展开/收起
    $activityCardContainer.on('click', '.activity-card', function(e) {
        if ($(e.target).closest('.participant-card, .paper-card').length === 0) {
            $(this).find('.activity-details').slideToggle();
        }
    });

    // 参与者卡片展开/收起
    $activityCardContainer.on('click', '.participant-card', function(e) {
        e.stopPropagation();
        if ($(e.target).closest('.paper-card').length === 0) {
            $(this).find('.participant-details').slideToggle();
        }
    });

    // 论文卡片展开/收起
    $activityCardContainer.on('click', '.paper-title', function(e) {
        e.stopPropagation();
        $(this).siblings('.paper-details').slideToggle();
    });
});