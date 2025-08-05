document.getElementById('fortuneForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    
    if (!name || !birthdate) {
        alert('请填写所有字段');
        return;
    }
    
    const fortune = generateFortune(name, birthdate);
    document.getElementById('result').innerHTML = fortune;
    document.getElementById('result').classList.add('show');
});

function generateFortune(name, birthdate) {
    const date = new Date(birthdate);
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const year = date.getFullYear();
    
    // 计算生肖
    const zodiacAnimals = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪'];
    const zodiacAnimal = zodiacAnimals[(year - 4) % 12];
    
    // 计算星座
    const zodiacSigns = [
        { name: '摩羯座', symbol: '♑', dateRange: '12/22-1/19' },
        { name: '水瓶座', symbol: '♒', dateRange: '1/20-2/18' },
        { name: '双鱼座', symbol: '♓', dateRange: '2/19-3/20' },
        { name: '白羊座', symbol: '♈', dateRange: '3/21-4/19' },
        { name: '金牛座', symbol: '♉', dateRange: '4/20-5/20' },
        { name: '双子座', symbol: '♊', dateRange: '5/21-6/21' },
        { name: '巨蟹座', symbol: '♋', dateRange: '6/22-7/22' },
        { name: '狮子座', symbol: '♌', dateRange: '7/23-8/22' },
        { name: '处女座', symbol: '♍', dateRange: '8/23-9/22' },
        { name: '天秤座', symbol: '♎', dateRange: '9/23-10/23' },
        { name: '天蝎座', symbol: '♏', dateRange: '10/24-11/22' },
        { name: '射手座', symbol: '♐', dateRange: '11/23-12/21' }
    ];
    
    let zodiacSign = zodiacSigns[0];
    for (let i = 0; i < zodiacSigns.length; i++) {
        const [start, end] = zodiacSigns[i].dateRange.split('-');
        const [startMonth, startDay] = start.split('/').map(Number);
        const [endMonth, endDay] = end.split('/').map(Number);
        
        if ((month === startMonth && day >= startDay) || (month === endMonth && day <= endDay)) {
            zodiacSign = zodiacSigns[i];
            break;
        }
    }
    
    // 根据出生日期生成不同的算命结果
    const generalFortunes = [
        `你的创造力将会在今天得到充分发挥。保持开放的心态，新的机会正在向你招手。`,
        `今天适合与朋友聚会，会遇到有趣的人。社交活动将为你带来意想不到的收获。`,
        `工作上可能会遇到挑战，但你的坚持会带来成功。相信自己的能力，困难只是成长的垫脚石。`,
        `爱情方面会有好消息传来。单身者有机会遇到心仪的对象，有伴侣的人关系将更加稳固。`,
        `健康是最重要的，记得多休息。适当的运动和均衡的饮食将让你精力充沛。`,
        `财运不错，但要谨慎投资。避免冲动消费，理性规划财务将带来长期收益。`,
        `学习新技能的好时机，不要错过。知识的积累将为你打开新的可能性。`,
        `你的直觉很敏锐，今天要相信自己的第一感觉。它将在关键时刻为你指引方向。`,
        `家庭关系需要更多关注。花时间与家人沟通，温馨的家庭氛围将给你力量。`,
        `旅行运不错，如果有机会外出，将会收获满满。新的环境将激发你的灵感。`
    ];
    
    // 使用出生日期作为索引的一部分来选择算命结果
    const index = (month * day) % generalFortunes.length;
    const generalFortune = generalFortunes[index];
    
    // 事业运势
    const careerFortunes = [
        '今天在工作中会遇到一些挑战，但你的专业能力将帮助你克服困难。保持积极的态度，相信自己的能力。',
        '你的领导才能将得到认可，可能会有晋升的机会。要善于展示自己的成果，主动与上级沟通。',
        '适合学习新技能或参加培训，这将对你的职业发展有帮助。投资自己永远是最明智的选择。',
        '与同事的合作关系良好，团队项目有望取得成功。发挥你的协作精神，共同达成目标。',
        '可能会有意外的工作机会出现，保持开放的心态。机会总是留给有准备的人。',
        '工作压力较大，要注意劳逸结合。适当的休息能让你更好地面对挑战。',
        '你的创意想法很有价值，不要害怕提出新建议。创新是推动事业发展的关键。'
    ];
    
    // 财运分析
    const wealthFortunes = [
        '财运稳定，适合进行长期投资规划。稳健的理财策略将为你带来持续收益。',
        '可能会有意外的收入，但要谨慎理财。切勿因一时的幸运而冲动消费。',
        '消费欲望较强，建议制定预算避免不必要的支出。理性消费是财富积累的基础。',
        '适合咨询理财专家，获取专业的财务建议。专业的指导能帮你规避风险。',
        '有投资机会，但需要仔细评估风险。不要把鸡蛋放在一个篮子里。',
        '财务状况需要关注，建议重新审视你的支出计划。节流与开源同样重要。',
        '偏财运不错，可能会有意外的奖金或礼品。但要合理利用这些额外收入。'
    ];
    
    // 健康建议
    const healthFortunes = [
        '注意保持良好的作息习惯，充足的睡眠对健康很重要。规律的生活是健康的基石。',
        '适合进行户外运动，呼吸新鲜空气有助于放松心情。大自然是最好的治愈师。',
        '饮食方面要注意均衡营养，避免过度摄入油腻食物。健康的饮食习惯让你精力充沛。',
        '可能会感到压力较大，建议通过冥想或瑜伽来放松。心理健康与身体健康同样重要。',
        '身体状况良好，但要定期体检以预防潜在问题。预防胜于治疗。',
        '注意保护眼睛，避免长时间盯着屏幕。适当的休息能缓解眼部疲劳。',
        '情绪波动较大，建议多与朋友交流。良好的社交关系有助于心理健康。'
    ];
    
    // 人际关系指导
    const relationshipFortunes = [
        '与朋友的关系将更加紧密，适合组织聚会活动。真诚的交流能加深友谊。',
        '在家庭关系中需要更多的理解和包容。家是温暖的港湾，需要用心经营。',
        '可能会遇到志同道合的人，建立新的友谊。共同的兴趣爱好是友谊的桥梁。',
        '与伴侣之间的沟通很重要，坦诚相待能增进感情。理解与支持是爱情的养分。',
        '在工作中需要与他人协作，保持良好的沟通态度。团队合作能创造更大的价值。',
        '可能会有误解产生，要及时澄清避免矛盾升级。沟通是解决问题的最好方式。',
        '社交运不错，适合参加各种聚会活动。扩展人脉圈对个人发展有益。'
    ];
    
    // 爱情运势
    const loveFortunes = [
        '单身者有机会遇到心仪的对象，要保持开放的心态。缘分总在不经意间到来。',
        '有伴侣的人关系将更加稳固，彼此的理解和支持是感情的基石。',
        '适合与伴侣一起规划未来，共同的目标能让感情更加深厚。',
        '可能会有一些小摩擦，但只要相互理解就能化解。宽容是爱情的润滑剂。',
        '桃花运不错，可能会收到来自异性的关注。但要明确自己的心意。',
        '适合向心仪的人表达心意，勇敢的行动可能带来惊喜。',
        '感情需要用心经营，小小的惊喜能让对方感受到你的爱意。'
    ];
    
    // 学业运
    const studyFortunes = [
        '学习运不错，适合深入研究感兴趣的领域。专注是学习成功的关键。',
        '可能会遇到一些学习上的困难，但不要轻易放弃。坚持就是胜利。',
        '适合与同学交流学习心得，互相启发能带来新的思路。',
        '考试运较好，充分的准备将帮助你取得理想成绩。',
        '创造力强，适合进行创新性的学习项目。',
        '注意力容易分散，建议制定学习计划并严格执行。',
        '学习新技能的好时机，不要错过任何提升自己的机会。'
    ];
    
    // 家庭运
    const familyFortunes = [
        '家庭关系和谐，适合与家人一起享受温馨时光。',
        '可能会有一些家庭琐事需要处理，保持耐心是关键。',
        '与家人的沟通很重要，坦诚交流能增进理解。',
        '家庭财运不错，可能会有意外的收入。',
        '适合为家庭做一些改善，营造更舒适的居住环境。',
        '家人需要你的支持，多关心他们的需求。',
        '家庭聚会运不错，适合组织家庭活动增进感情。'
    ];
    
    // 旅行运
    const travelFortunes = [
        '旅行运不错，如果有机会外出，将会收获满满。新的环境将激发你的灵感。',
        '适合短途旅行，放松心情有助于缓解压力。',
        '可能会在旅途中遇到有趣的人，建立新的友谊。',
        '出行前要做好充分准备，确保旅途顺利。',
        '适合去有文化底蕴的地方旅行，能丰富你的见识。',
        '注意旅途安全，遵守当地的规章制度。',
        '可能会有意外的风景发现，保持开放的心态。'
    ];
    
    const careerFortune = careerFortunes[(month + day) % careerFortunes.length];
    const wealthFortune = wealthFortunes[(month + day) % wealthFortunes.length];
    const healthFortune = healthFortunes[(month + day) % healthFortunes.length];
    const relationshipFortune = relationshipFortunes[(month + day) % relationshipFortunes.length];
    const loveFortune = loveFortunes[(month + day) % loveFortunes.length];
    const studyFortune = studyFortunes[(month + day) % studyFortunes.length];
    const familyFortune = familyFortunes[(month + day) % familyFortunes.length];
    const travelFortune = travelFortunes[(month + day) % travelFortunes.length];
    
    // 生成详细的性格特点
    const personalityTraits = [
        '富有同情心', '创造力强', '领导能力', '善于沟通', '逻辑思维', 
        '适应性强', '好奇心重', '责任感强', '乐观积极', '细致入微'
    ];
    
    const strengths = [];
    const weakness = [];
    
    // 根据生肖选择性格特点
    const animalTraits = {
        '鼠': { strengths: [0, 2, 6], weakness: [4, 8] },
        '牛': { strengths: [1, 7, 9], weakness: [0, 5] },
        '虎': { strengths: [2, 8, 4], weakness: [1, 7] },
        '兔': { strengths: [0, 3, 9], weakness: [2, 6] },
        '龙': { strengths: [2, 1, 5], weakness: [3, 9] },
        '蛇': { strengths: [4, 6, 0], weakness: [2, 8] },
        '马': { strengths: [8, 3, 7], weakness: [1, 9] },
        '羊': { strengths: [1, 0, 9], weakness: [4, 8] },
        '猴': { strengths: [6, 2, 3], weakness: [7, 1] },
        '鸡': { strengths: [9, 7, 5], weakness: [0, 6] },
        '狗': { strengths: [7, 0, 8], weakness: [3, 1] },
        '猪': { strengths: [8, 1, 9], weakness: [2, 4] }
    };
    
    const traits = animalTraits[zodiacAnimal];
    traits.strengths.forEach(i => strengths.push(personalityTraits[i]));
    traits.weakness.forEach(i => weakness.push(personalityTraits[i]));
    
    // 生成幸运数字和颜色
    const luckyNumbers = [Math.floor(Math.random() * 10) + 1, Math.floor(Math.random() * 10) + 1];
    const luckyColors = ['红色', '蓝色', '绿色', '黄色', '紫色', '橙色', '粉色', '金色'];
    const luckyColor = luckyColors[(month + day) % luckyColors.length];
    
    // 黄历相关内容
    const dailyAdvice = [
        '诸事不宜，宜静不宜动',
        '宜出行、会友，忌开业、搬家',
        '宜开业、交易，忌诉讼、出行',
        '宜嫁娶、订盟，忌搬家、入宅',
        '宜祭祀、祈福，忌开业、交易',
        '宜修造、动土，忌嫁娶、出行',
        '宜纳采、订盟，忌诉讼、祭祀',
        '宜入宅、安床，忌开业、修造'
    ];
    
    const timeSlots = [
        { name: '子时', time: '23:00-00:59', description: '吉', activities: '宜祈福、求嗣、求财、嫁娶、安葬' },
        { name: '丑时', time: '01:00-02:59', description: '吉', activities: '宜出行、求财、见贵、订婚、嫁娶、修造、安葬、青龙' },
        { name: '寅时', time: '03:00-04:59', description: '平', activities: '宜嫁娶、移徙、入宅、开市、交易、修造、安葬' },
        { name: '卯时', time: '05:00-06:59', description: '吉', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '辰时', time: '07:00-08:59', description: '凶', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '巳时', time: '09:00-10:59', description: '吉', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '午时', time: '11:00-12:59', description: '凶', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '未时', time: '13:00-14:59', description: '吉', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '申时', time: '15:00-16:59', description: '平', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '酉时', time: '17:00-18:59', description: '吉', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '戌时', time: '19:00-20:59', description: '凶', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' },
        { name: '亥时', time: '21:00-22:59', description: '吉', activities: '宜祭祀、祈福、求嗣、开光、出行、解除、拆卸、动土、上梁、安床、纳畜' }
    ];
    
    const dailyAdviceIndex = (month + day) % dailyAdvice.length;
    const randomTimeSlot = timeSlots[Math.floor(Math.random() * timeSlots.length)];
    
    // 生成更详细的性格分析
    const detailedPersonality = {
        '鼠': '聪明机智，适应能力强，善于发现机会，但有时可能过于谨慎。你具有敏锐的观察力和快速学习的能力，能够在复杂的环境中迅速找到解决方案。',
        '牛': '勤奋踏实，有耐心，值得信赖，但有时可能过于固执。你做事稳重可靠，一旦确定目标就会坚持不懈地努力，是值得依靠的伙伴。',
        '虎': '勇敢自信，有领导能力，充满活力，但有时可能过于冲动。你天生具有领袖气质，敢于面对挑战，但要注意控制情绪避免鲁莽行事。',
        '兔': '温柔善良，有同情心，注重细节，但有时可能过于敏感。你具有艺术天赋和良好的审美能力，善于营造和谐的氛围。',
        '龙': '充满魅力，有创造力，自信强大，但有时可能过于自负。你具有远大的理想和卓越的才能，能够在各个领域取得成就。',
        '蛇': '智慧深邃，有洞察力，善于思考，但有时可能过于神秘。你具有敏锐的直觉和深刻的分析能力，能够看透事物的本质。',
        '马': '自由奔放，积极进取，善于交际，但有时可能缺乏耐心。你热爱自由，充满活力，喜欢尝试新事物，具有开拓精神。',
        '羊': '温和善良，有艺术天赋，体贴入微，但有时可能过于优柔寡断。你具有丰富的想象力和创造力，对美有着独特的感受力。',
        '猴': '机智灵活，聪明好学，善于创新，但有时可能不够专注。你思维敏捷，学习能力强，能够快速掌握新知识和技能。',
        '鸡': '勤奋有序，注重细节，有责任感，但有时可能过于挑剔。你做事认真负责，追求完美，具有很强的组织能力。',
        '狗': '忠诚可靠，正直诚实，有正义感，但有时可能过于严肃。你为人正直，值得信赖，具有强烈的道德观念和社会责任感。',
        '猪': '诚实善良，有包容心，乐观豁达，但有时可能过于懒散。你性格温和，待人真诚，具有很强的包容心和同理心。'
    };
    
    const personalityAnalysis = detailedPersonality[zodiacAnimal] || '性格特点分析不可用';
    
    // 每日建议
    const dailySuggestions = [
        '保持积极的心态，相信自己的能力。',
        '多与他人交流，分享你的想法和感受。',
        '尝试新的事物，扩展你的视野。',
        '关注身体健康，保持良好的作息习惯。',
        '制定明确的目标，并为之努力。',
        '学会放松，适当的休息能提高工作效率。',
        '多关心身边的人，建立良好的人际关系。'
    ];
    
    // 注意事项
    const precautions = [
        '避免冲动消费，理性规划财务。',
        '注意情绪管理，避免与他人发生冲突。',
        '不要过度劳累，适当的休息很重要。',
        '谨慎做出重要决定，多听取他人意见。',
        '避免拖延，及时完成该做的事情。',
        '注意饮食健康，避免暴饮暴食。',
        '保持谦逊，不要过于自负。'
    ];
    
    const dailySuggestion = dailySuggestions[(month + day) % dailySuggestions.length];
    const precaution = precautions[(month + day) % precautions.length];
    
    return `
        <div class="fortune-title">${name}的算命结果</div>
        <div class="zodiac-sign">${zodiacSign.symbol} ${zodiacSign.name} | ${zodiacAnimal}年</div>
        <div class="fortune-content">${generalFortune}</div>
        
        <div class="fortune-details">
            <h3>详细分析</h3>
            <p><strong>性格特点:</strong> ${personalityAnalysis}</p>
            <p><strong>性格优势:</strong> ${strengths.join('、')}</p>
            <p><strong>需要注意:</strong> ${weakness.join('、')}</p>
            <p><strong>幸运数字:</strong> ${luckyNumbers.join('、')}</p>
            <p><strong>幸运颜色:</strong> ${luckyColor}</p>
        </div>
        
        <div class="fortune-details">
            <h3>运势详情</h3>
            <p><strong>事业运势:</strong> ${careerFortune}</p>
            <p><strong>财运分析:</strong> ${wealthFortune}</p>
            <p><strong>健康建议:</strong> ${healthFortune}</p>
            <p><strong>人际关系:</strong> ${relationshipFortune}</p>
            <p><strong>爱情运势:</strong> ${loveFortune}</p>
            <p><strong>学业运:</strong> ${studyFortune}</p>
            <p><strong>家庭运:</strong> ${familyFortune}</p>
            <p><strong>旅行运:</strong> ${travelFortune}</p>
        </div>
        
        <div class="fortune-details">
            <h3>每日建议</h3>
            <p><strong>今日建议:</strong> ${dailySuggestion}</p>
            <p><strong>注意事项:</strong> ${precaution}</p>
        </div>
        
        <div class="fortune-details">
            <div class="lunar-fortune">
                <h3>黄历运势</h3>
                <p><strong>今日宜忌：</strong>${dailyAdvice[dailyAdviceIndex]}</p>
                <p><strong>吉时推荐：</strong>${randomTimeSlot.name} (${randomTimeSlot.time}) ${randomTimeSlot.description}</p>
                <p><strong>适宜活动：</strong>${randomTimeSlot.activities}</p>
            </div>
        </div>
    `;
}