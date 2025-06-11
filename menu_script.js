import {
  ref, push, remove,
  onChildAdded, onChildRemoved,
  serverTimestamp
} from "https://www.gstatic.com/firebasejs/10.12.0/firebase-database.js";

/* ─────────  NAV/UTILITY  ──────── */
function initNav() {
  const toggle = document.getElementById('nav-toggle');
  const menu   = document.querySelector('.menu-bar');
  if (!toggle || !menu) return;

  toggle.addEventListener('click', () =>
    document.body.classList.toggle('menu-open')
  );
  menu.querySelectorAll('button').forEach(btn =>
    btn.addEventListener('click', () =>
      document.body.classList.remove('menu-open')
    )
  );

  /* hide hamburger when scrolling on phones */
  function update() {
    toggle.classList.toggle('hide-nav', window.innerWidth <= 600 && window.scrollY > 5);
  }
  window.addEventListener('scroll', update);
  window.addEventListener('resize', update);
  update();
}

/* wait until the <script type="module"> in menu.html has stored db on window */
function waitForDB() {
  return new Promise(res => {
    const id = setInterval(() => {
      if (window._realtimeDB) { clearInterval(id); res(window._realtimeDB); }
    }, 40);
  });
}

/* ─────────  ORDERING  ──────── */
function initMenuOrdering(db) {
  const menuGrid   = document.getElementById('menu-items');
  const orderList  = document.getElementById('order-list');
  const orderTotal = document.getElementById('order-total');
  const reqList    = document.getElementById('addon-list');
  const reqForm    = document.getElementById('addon-form');
  const reqInput   = document.getElementById('addon-input');
  if (!menuGrid || !orderList || !orderTotal) return;

  /* ① Catalogue displayed as cards */
  const CATALOG = [
    { name:'Doggy', desc:'你最喜欢的动作', price:10.0 },
    { name:'Sideways',  desc:'你躺着把腿抬起来 然后我斜着插进去', price:10.0},
    { name:'Cowgirl', desc:'你在我上面 可以做深蹲',price:8.50},
    { name:'Reverse Cowgirl',desc:'你在我上面 但你的屁股对着我', price:8.50 },
    { name:'Butterfly',  desc:'我站着 你躺在床上被我插', price:7.0  },
    { name:'Modified Coital-Alignment',  desc:'插得很深的动作', price:9.0  },
    { name:'Happy Scissors',  desc:'我站着插你 然后你的腿像剪刀的形状',    price:6.50},
    { name:'Spooning',  desc:'我们一直想尝试的动作', price:5.0  },
    { name:'Lap Dance',  desc:'在椅子上 屁股面对我', price:6.0  },
    { name:'Yab-Yum',  desc:'在椅子上面对我', price:6.0  },
    { name:'Missionary',  desc:'另一个很喜欢的动作', price:9.50 },
    { name:'On the stomach',  desc:'doggy （你全身躺着）', price:7.25 },
    { name:'Froggie-style',  desc:'你的腿像青蛙一样蹲着', price:6.0 },
    { name:'The Yogi',  desc:'你起桥被我插', price:6.0},
    { name:'More to Come ',  desc:'If the customer want any additional items, please add this to the order and text the boss', price:0.0  },

  ];

  CATALOG.forEach(item => {
    const card = document.createElement('div');
    card.className = 'menu-card';
    card.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.desc}</p>
      <div class="price">$${item.price.toFixed(2)}</div>
      <button>Add</button>`;
    card.querySelector('button').onclick = () =>
      push(ref(db,'orders'), { ...item, timestamp: serverTimestamp() });
    menuGrid.appendChild(card);
  });

  /* ② Live-sync ORDERS */
  const ordersRef  = ref(db,'orders');
  const orderRows  = new Map();      

  onChildAdded (ordersRef, snap => {
    const { name, price } = snap.val();
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${name}</span>
      <span>$${(+price).toFixed(2)}</span>
      <button aria-label="remove">✕</button>`;
    li.querySelector('button').onclick = () => remove(snap.ref);
    orderList.appendChild(li);
    orderRows.set(snap.key, { li, price:+price });
    recalcTotal();
  });

  onChildRemoved(ordersRef, snap => {
    const row = orderRows.get(snap.key);
    if (row) row.li.remove();
    orderRows.delete(snap.key);
    recalcTotal();
  });

  function recalcTotal() {
    const total = [...orderRows.values()]
      .reduce((s, {price}) => s + price, 0);
    orderTotal.textContent = total.toFixed(2);
  }

  /* ③ Live-sync SPECIAL REQUESTS */
  const reqRef   = ref(db,'requests');
  const reqLines = new Map();

  onChildAdded(reqRef, snap => {
    const { text } = snap.val();
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${text}</span>
      <button aria-label="remove">✕</button>`;
    li.querySelector('button').onclick = () => remove(snap.ref);
    reqList.appendChild(li);
    reqLines.set(snap.key, li);
  });

  onChildRemoved(reqRef, snap => {
    const li = reqLines.get(snap.key);
    if (li) li.remove();
    reqLines.delete(snap.key);
  });

  reqForm.onsubmit = e => {
    e.preventDefault();
    const text = reqInput.value.trim();
    if (!text) return;
    push(reqRef, { text, timestamp: serverTimestamp() });
    reqInput.value = '';
  };
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();                          
  waitForDB().then(initMenuOrdering); 
});
