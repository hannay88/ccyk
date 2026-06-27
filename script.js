const content = document.getElementById("content");

function showPage(page){

  if(page==="home"){
    content.innerHTML=`
      <h2>🏠 Welcome to ချစ်ခြင်း ရင်ခုန်</h2>
      <p>💖 AI က ကိုယ့်အကြောင်းနဲ့ ကိုက်ညီတဲ့ လက်တွဲဖော်ကို ရှာပေးပါမယ်။</p>

      <div style="margin-top:20px;padding:15px;background:#ffe6f0;border-radius:12px">
        ❤️ Match Today: <b>87%</b><br><br>
        🌹 "အချစ်ဆိုတာ နားလည်ပေးနိုင်တဲ့ နှလုံးသားနှစ်ခု ဆုံတွေ့ခြင်းပါ။"
      </div>
    `;
  }

  if(page==="search"){
    content.innerHTML=`
      <h2>🔍 Search</h2>
      <input type="text"
      placeholder="နာမည်၊ အသက်၊ မြို့..."
      style="width:100%;padding:12px;border-radius:10px;border:1px solid #ccc">

      <p style="margin-top:20px">
      🔎 AI Match Search ကို V2.0 မှာ ထည့်ပေးပါမယ်။
      </p>
    `;
  }

  if(page==="post"){
    content.innerHTML=`
      <h2>➕ Create Profile</h2>

      <input placeholder="အမည် (Name)"
      style="width:100%;padding:10px;margin:8px 0">

      <input placeholder="အသက် (Age)"
      style="width:100%;padding:10px;margin:8px 0">

      <textarea
      placeholder="ကိုယ့်အကြောင်း..."
      style="width:100%;height:120px;padding:10px"></textarea>

      <br><br>

      <button style="
      width:100%;
      padding:14px;
      background:#ff2d75;
      color:white;
      border:none;
      border-radius:10px;">
      AI Profile Generate
      </button>
    `;
  }

  if(page==="games"){
    content.innerHTML=`
      <h2>🎮 Love Mini Games</h2>

      <button onclick="loveQuiz()"
      style="width:100%;padding:14px;margin-top:15px">
      ❤️ Love Quiz
      </button>

      <button onclick="heartTap()"
      style="width:100%;padding:14px;margin-top:15px">
      💓 Heart Tap
      </button>
    `;
  }

}

function loveQuiz(){
  alert("❤️ မင်းရဲ့အချစ်အဆင့် = 92%");
}

function heartTap(){
  alert("💓 Heart +1");
}

showPage("home");
