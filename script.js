document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.getElementById('nav-toggle');
  const menu = document.querySelector('.menu-bar');

  if (toggle && menu) {
    toggle.addEventListener('click', () => {
      document.body.classList.toggle('menu-open');
    });

    menu.querySelectorAll('button').forEach(btn => {
      btn.addEventListener('click', () => {
        document.body.classList.remove('menu-open');
      });
    });
  }

  const navToggle = document.getElementById('nav-toggle');
  function updateNavToggleVisibility() {
    // Only hide on mobile screens (≤600px)
    if (window.innerWidth <= 600) {
      if (window.scrollY > 5) {
        navToggle?.classList.add('hide-nav');
      } else {
        navToggle?.classList.remove('hide-nav');
      }
    } else {
      // Always show on desktop/tablet
      navToggle?.classList.remove('hide-nav');
    }
  }

  window.addEventListener('scroll', updateNavToggleVisibility);
  window.addEventListener('resize', updateNavToggleVisibility); 
  updateNavToggleVisibility();
  
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
  "2025-07-22": {
    img: "timeline/firstStop.JPG",
    text: "哇我们终于见面了 你不知道我在这几个月想了你多少次 虽然我们这段时间都有打电话 但我还是很想你 想要抱你亲你 我一直很期待这一次的中国旅行和你创造新的记忆 落地香港时候我就知道是个不寻常的trip 特别是我们在酒店时候重新建立connection 我就知道我们要在每个地方留痕迹 (香港的第一顿真好吃 😋)"
  },
  "2025-07-26": {
    img: "timeline/timeatGuiyang.JPG",
    text: "万万没想到我有一天会来到贵阳 去的路上我还在想这是不是真实的 我还记得我们刚开始时候说要去见一见体验一下 一转眼就到这个时刻了 更意想不到的是会见到阿姨然后住家里 但一切都好 阿姨喜欢我 猫小宝喜欢我 大家都喜欢我 :) 在贵阳的收获特别大 体验了你从小长大的环境还去了黔灵山公园, 黄瓜树瀑布, 喝茅台等等的 也吃了好多贵阳的美食! 在你家留了我们的痕迹 希望我后面还能再去很多次 p.s. 你不觉得这张像AI合照的长大版吗 "
  }
  ,
  "2025-07-29": {
    img: "timeline/xiaobaoBirthday.JPG",
    text: "其中一个愿望实现了! 能陪在你身边看着你长大 希望以后的生日都有机会陪在你身边陪你度过无数个生日瞬间 也希望我的生日时候你能陪在我身边 我的小宝要每天开心长得漂漂亮亮的 伤病远离你"  
  },
  "2025-08-02": {
    img: "timeline/timeinChongqing.JPG",
    text: "没想到在重庆的时光过的这么快 感觉3天探索重庆完全不够 但也在那里体验到最棒的几天 特别是有机会跟曾大哥聊天知道他是个非常好的人! 特别感谢他那几天带我们出去玩 希望他接下来都顺利 走时候特别舍不得感觉可以多待一会 特别是在酒店里和按摩店里体验一种不同的 😉"
  },
  "2025-08-14": {
    img: "timeline/shanghaiDisneyLand.JPG",
    text: "上海迪士尼! 很疯狂的一天在外面待了12个小时 远远超出我们的4个小时的极限 但特别值得在个童话般的的地方跟你创造更多回忆 想跟你去其他的迪士尼一起玩  #one of the best memory"  
  },
  "2025-08-18": {
    img: "timeline/timeinShanghai.JPG",
    text: "一个月的时间过的好快 在剩下的几天里我都希望时间能暂停 但可惜不能所以我都有好好的过完剩下的时间陪你 这段时间感觉经历了好多 体验到中国的热情和文化和更深入的了解你的家人 好玩好逛好吃再来 虽然下次可以不那么热时候来! 然后也恭喜宝宝 你肯定能在其他地方大放异彩 "
  },
  "2025-12-02": {
    img: "timeline/yearOne.JPG",
    text: "One Year Annivesary Babe! 虽然我们这期间有争吵和不愉快 但我们最后还是坚持下来了 只是因为我们太想对方了 所以我们的赶紧见面! 我们纪念日不在对方身边 但下次肯定会的 然后过其他的节日 我们一定要一起住 可以在我们的小家里过美好的生活 每天有physical touch和momo 这小日子肯定美滋滋 我们一起朝着这个方向努力! (不管怎么样你这笑容要一直存在!) "
  }
  ,
  "2025-12-02": {
    img: "timeline/yearOne.JPG",
    text: "One Year Annivesary Babe! 虽然我们这期间有争吵和不愉快 但我们最后还是坚持下来了 只是因为我们太想对方了 所以我们的赶紧见面! 我们纪念日不在对方身边 但下次肯定会的 然后过其他的节日 我们一定要一起住 可以在我们的小家里过美好的生活 每天有physical touch和momo 这小日子肯定美滋滋 我们一起朝着这个方向努力! (不管怎么样你这笑容要一直存在!) "
  },
  "2026-01-01": {
    img: "timeline/firstLondon.JPG",
    text: "四个月但感觉好长时间 我们终于见面了 来到伦敦一起迎接你人生中的下一章 我来的时候我就知道我们会有个美好的回忆 这次拍了好多照片和视频 感觉我们找到自己的节奏了更爱对方了 一次次的旅游让我意识到我们在慢慢磨合 习惯了彼此的存在 但不会 take for granted! 所以每次的相见我都特别珍惜想 "
  },
  "2026-01-16": {
    img: "timeline/timeinGreece.JPG",
    text: "雅典这是我万万没想到的 我一直以为会在英国附近 这个突然的决定带来意想不到的体验 我们在雅典尝试了好多kebab和yogurt 还看到了帕特农神庙和帕纳辛奈科体育场 这次旅行可以说是非常完美 在hotel momo 让我意识到我们应该在窗户面前做很多次 :)"
  }, 
  "2026-01-25": {
    img: "timeline/windsorCastle.JPG",
    text: "叮叮 打卡了你小时候的比耶的照片 很高兴又能更了解你的过去 希望你小时候去过的地方我能再陪你去一次 (这张照片很有人妻感 请继续留长头发)"
  }, 
  "2026-01-31": {
    img: "timeline/lastLondon.JPG",
    text: "呜呜 本来可以在伦敦待更久的 但某人赶我走 感觉每次我想要待久一点某人就要我走 后面又后悔了 奇奇怪怪的人类 能看见你在伦敦找到自己的节奏好好生活我就放心了 感觉体验了好多在这段时间 可惜的是没有在外面运动 但在家里运动很多次我就满意了 想要跟你去很多很多地方一起旅游！爱你小宝"
  }, 
  "2026-04-??": {
    img: "timeline/together.png",
    text: " "
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

  back.style.backgroundImage = `url('${catPaths[idx]}')`;
  back.style.opacity = 1;      // fade in
  front.style.opacity = 0;     // fade out
  current = current === 1 ? 2 : 1;
  idx = (idx + 1) % catPaths.length;
}

setInterval(crossfade, 5000);
crossfade();

firebase.auth().signInAnonymously()
  .catch((error) => {
    console.error(error);
  });

  