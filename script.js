// --- Hamburger menu logic (run on ALL pages) ---
document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.menu-bar');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });

    // Close the menu when a menu item is clicked (for mobile)
    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
      });
    });
  }
});

// --- Navigation with fade (globally available) ---
function navigateTo(page) {
  document.body.classList.remove('menu-open');
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = page;
  }, 800);
}

document.addEventListener('DOMContentLoaded', () => {
  const section = document.getElementById('timeline-section');
  if (!section) return;  // only run on timeline page


  // --- CONFIGURE YOUR IMAGE PATHS ---
  const timelinePaths = [];
  const totalImages = 14;  
  for (let i = 1; i <= totalImages; i++) {
    timelinePaths.push(`us/photo${i}.JPG`);
  }

  // optional: preload images
  timelinePaths.forEach(src => {
    const img = new Image();
    img.src = src;
  });

  // --- CROSSFADE STATE ---
  let idx = 0;
  let current = 1;

  function crossfadeTimeline() {
    const front = document.getElementById(`tl-bg${current}`);
    const back  = document.getElementById(`tl-bg${current === 1 ? 2 : 1}`);

    // set next image on the hidden layer
    back.style.backgroundImage = `url('${timelinePaths[idx]}')`;

    // fade it in/out
    back.style.opacity  = 1;
    front.style.opacity = 0;

    // advance pointers
    current = current === 1 ? 2 : 1;
    idx = (idx + 1) % timelinePaths.length;
  }

  // kick it off immediately, then every 5 seconds
  crossfadeTimeline();
  setInterval(crossfadeTimeline, 5000);
});


function calculateDaysTogether() {
  const startDate = new Date("2024-12-02");
  const today = new Date();
  const diffTime = today - startDate;
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  const daysCount = document.getElementById("days-count");
  if (daysCount) daysCount.innerText = `${diffDays} days`;
}

window.onload = calculateDaysTogether;

const details = {
  "2024-11-25": {
    img: "timeline/firstDinner.JPG",
    text: "我们第一次一起吃饭 也是我开始对你产生兴趣的一天 我们聊得很同频 感觉氛围挺好的 我想要多了解你 但是你后面付了饭钱 我以为你对我没意思呢。。。"
  },
  "2024-11-26": {
    img: "timeline/yourDish.JPG",
    text: "还记得你当时给我发你做饭的照片 我随口说了一句很饿 你就邀请我去你那吃 这是我第一次去你那边 也是我第一次尝试你的手艺 但我没想到这会成为我的second home 然后可以一直吃到！"
  },
  "2024-11-30": {
    img: "timeline/firstDate.JPG",
    text: "这算是我们第一次的约会 我还记得看着你下车时候有一种莫名的紧张哈哈哈 然后我们过马路时候我牵起了你的手 后面你提出去 New York Transit Musuem 在这里我们第一次亲亲和确认了对方的心意 还记得你的嘴巴很软 这导致我后面一直在亲你 当时想着要一直和你约会一直亲你 😜"
  },
  "2024-12-01": {
    img: "timeline/firstPic.JPG",
    text: "这是你第一次发自己的照片给我 好美😍 觉得我好幸运有这么漂亮的女朋友 希望你以后多发 特别是我们不在彼此的身边时 看到这里还不发一张吗 🥹"
  },
  "2024-12-02": {
    img: "timeline/love.JPG",
    text: "这天我回到波士顿 然后我们正式的确认exclusive 以男女朋友的关系相处 我希望我们的关系至少能维持1年 然后我想要跟你走得更远 组建我们自己的家庭 有可爱的小孩和一只猫叫momo 我好不容易进入个关系 - going all in - 所以有什么不妥的地方请多多包容 我亲爱的合作伙伴 我会在这个关系里一直学习怎么让你变得开心和幸福 然后你也可以无数次向我确认爱意 我的答案都会是我爱你 \n 👈🏼 我的合作伙伴 aka Honorable Bae"
  },
  "2024-12-04": {
    img: "timeline/workVisit.JPG",
    text: "第一次陪你去工作 看着你认真的样子很迷人 这也是我第一次拍下你的照片 但只能偷偷的哈哈哈哈 后面我就正大光明的拍你了 很高兴你能让我多了解你 希望也能看到你其他不同且有魅力的一面"
  },
  "2024-12-07": {
    img: "timeline/firstDrink.JPG",
    text: "我们第一次单独的喝酒 虽然我后面喝醉了 但我一定会把我的酒量加强 下次争取喝倒你！ 我一直幻想我们在晚上喝酒 进行deep talk 然后亲亲抱抱 我去中国时候希望有机会实现"
  },
  "2024-12-08": {
    img: "timeline/bostonSnow.JPG",
    text: "记得这一天你说要是能在走之前看到波士顿下雪就好了 帮你destress后 我回去的路上就下雪了 立马拍照给你看 太好了能在你走之前体验波士顿的第一场雪 我希望有机会跟你在其他的地方体验不同的天气和生活"
  },
  "2024-12-09": {
    img: "timeline/firstPhoto.JPG",
    text: "我们的第一张合照 真得好喜欢你啊 后面也拍了好多合照 但这一张我特别喜欢 因为它代表了我们关系的进展 我想要以后的合照至少有上百张好不好乖乖"
  },
  "2025-01-24": {
    img: "timeline/snowWalk.JPG",
    text: "波士顿的1月份还在下雪 我们突发奇想去了散步 然后聊了一些话题 我特别喜欢这样的moment 让我更了解你了 我们以后也要一起散步聊天哦"
  },
  "2025-01-27": {
    img: "timeline/firstDineout.JPG",
    text: "我忘了这是不是我们第一次一起出去吃饭 但这是第一次吃饭时候拍你 看着好认真呢 越看越美 这也是我开始喜欢吃辣的时候 因为有你陪着"
  },
  "2025-02-14": {
    img: "timeline/valentine.JPG",
    text: "我们过的第一个情人节！首先要说一声 sorry 当时没有好好规划 确实是我的不好 我在学习怎么更好的规划 选一些你感兴趣的项目 一直在学习一定不会让你失望的 非常感谢你像个英雄一样拯救了这一天 让我们拍了很多合照留下珍贵的回忆"
  },
  "2025-02-21": {
    img: "timeline/firstConcert.JPG",
    text: "今天陪你看了你喜欢的歌手 谢谢你让我了解你更多一点 我后面也喜欢上了这个歌手 我的歌单里都有他的歌了 我们后面也要一起看更多的演唱会哦"
  },
  "2025-02-23": {
    img: "timeline/firstClimbing.JPG",
    text: "我们第一次一起攀岩 没想到后面会变成固定项目 你真得好厉害啊 第一次就解锁v1了 为你感到骄傲 去中国时候可以一起再攀岩和试试crossfit!"
  },
  "2025-03-02": {
    img: "timeline/holdingHands.JPG",
    text: "我们一起去看电影 然后随手拍的 这好像是我们的第一张牵手照 记录一下 手真得好小啊 很适合一直被我牵"
  },
  "2025-03-18": {
    img: "timeline/firstLetter.JPG",
    text: "你去夏威夷时候给我写的信 一定有机会去夏威夷走你走过的路 或许有机会我们可以一起去夏威夷还有很多其他地方 也祝乖乖一切顺利 得到心仪的offer活出自己想要的人生 我永远是你身后最大的支持者！"
  },
  "2025-03-29": {
    img: "timeline/rhodeIsland.JPG",
    text: "我们第一个trip 去了rhode island 在这里和你度过愉快的时光 感觉更了解你了 虽然有一些摩擦 但我对我们的1 year anniversary多了一份信心 我希望有机会在中国和你去更多的day trip \n我想要和你一起去探索这个世界 你愿意加入我吗"
  },
  "2025-03-31": {
    img: "timeline/firstPerformance.JPG",
    text: "这是你music课的第一个表演 恭喜你圆满完成 真得好棒啊 看到你付出的努力每天3个小时的课没有白上 很完美的一起表演 希望你有机会可以在我面前唱歌 多发发语音和我视频 看看你美丽的脸和听听你的声音（叫声）😏"
  },
  "2025-04-04": {
    img: "timeline/chicagoTrip.JPG",
    text: "我们去芝加哥那次 我是有点担心因为要见你的朋友 同时这是真正的overnight trip会考验我们的感情 在这个trip上发现我们的确需要磨合 但我觉得这不是个坏事 因为本身就没有完美契合的伴侣 都是需要沟通和改变来变得“完美” 我觉得这个trip让我们变得更会沟通然后也让我们的感情变得更坚固 我也意识到我享受你的陪伴 我可以跟你呆一整天也不会感觉无聊或烦 我希望你也是这么觉得 \n插播一句 momo真得很爽 感觉我们如果单独去可能一整天都会在momo哈哈哈"
  },
  "2025-04-11": {
    img: "timeline/aquariumDate.JPG",
    text: "我们去水族馆约会了 在这里发现我的拍照技术不是很好 我决定回去学习把你的美丽都拍出来 在中国一定要去一次水族馆让我重新拍照！"
  },
  "2025-04-13": {
    img: "timeline/workout.JPG",
    text: "这次锻炼时候终于拍照了 很喜欢跟你锻炼 一起进步的感觉真好 下次还找我当私教哦 去中国时候也要延续这个习惯 可以一起健身和crossfit想想就很美 "
  },
  "2025-04-28": {
    img: "timeline/lastPerformance.JPG",
    text: "你这个学期最后一场表演 我有记得给你买花呢 恭喜乖乖 很开心能见证你这些重要的时刻 以后你每一个重要的moment 我都想参与！"
  },
  "2025-05-02": {
    img: "timeline/fiveMonths.JPG",
    text: "没想到转眼就5个月了 时间过得好快 希望它慢一点这样我们就有更多的时间呆在一起 但我同时也很期待我们的6个月和 1 year anniversary 祝我们的感情越来越好"
  },
  "2025-05-10": {
    img: "timeline/nyDay1.JPG",
    text: "带你来visit我长大的地方 希望你喜欢这一天的经历 我们这天拍了好多照片 这是我最喜欢的照片之一 我们看起来好幸福 一定要幸福下去哦 不管怎么样记得我爱你"
  },
  "2025-05-12": {
    img: "timeline/nyDay2.JPG",
    text: "纽约冒险记第二弹 今天吃了好吃的bagel还逛了博物馆 让我想起我们第一次去的transit museum 我们还吃了好吃的食物和拍了美美的照片 没想到在我们走之前还遇到个摄影师 他记录了我们幸福的模样 新的回忆添加"
  },
  "2025-05-18": {
    img: "timeline/yourGraduation.JPG",
    text: "恭喜乖乖毕业了 太棒了还拿到那么多cord 很高兴能在你毕业时候给你拍美美的照和留下更多的回忆 I'm so proud of you! You deserve it! 祝你在Sciences Po继续闪耀成为最亮眼的星星 我相信你不管在哪里在做什么都能成功的 我知道你当时对以后比较迷茫 但一切都是最好的安排 everything work out in the end! 你是一个很优秀的人 这不是安慰话是我打心里觉得 因此我相信你可以的 记住你有挫折时候可以来找我的 我会听的 在我这里是safe space 我希望我是你第一个找的人 I'm your #1 supporter \n I know that you will always succeed and live the life that you want!"
  }
};


function openDetail(date) {
  const detail = details[date];
  const imgEl  = document.getElementById("detail-img");
  const txtEl  = document.getElementById("detail-text");

  imgEl.src = detail.img;
  txtEl.innerHTML = "";           // clear out old content

  detail.text.split('\n').forEach(line => {
    const p = document.createElement('p');
    p.textContent = line;
    txtEl.appendChild(p);
  });

  document.getElementById("detail-view").classList.add("visible");
}
function closeDetail() {
  document.getElementById("detail-view").classList.remove("visible");
}

function navigateTo(page) {
  document.body.classList.add('fade-out');
  setTimeout(() => {
    window.location.href = page;
  }, 800);
}

const catPaths = [];
const totalCats = 8;  // adjust to your count
for (let i = 1; i <= totalCats; i++) {
  catPaths.push(`cats/cat${i}.JPG`);
}
catPaths.forEach(src => { const img = new Image(); img.src = src; });

// 2) Crossfade logic
let idx = 0, current = 1;
function crossfade() {
  const front = document.getElementById(`bg${current}`);
  const back  = document.getElementById(`bg${current === 1 ? 2 : 1}`);

  // prepare the hidden layer
  back.style.backgroundImage = `url('${catPaths[idx]}')`;
  back.style.opacity = 1;      // fade in
  front.style.opacity = 0;     // fade out

  // flip which layer is “current”
  current = current === 1 ? 2 : 1;
  idx = (idx + 1) % catPaths.length;
}

// 3) Kick it off
setInterval(crossfade, 5000);
crossfade();
