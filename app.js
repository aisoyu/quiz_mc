//javascriptを学ぶために作りました
const quiz = [
    {
        question: "金床を作るのに鉄の延べ棒は何個必要？",
        answers: ["28", "30", "31", "33"],
        correct: "31"
    },
    {
        question: "次のうち、最も体力が高いのは？",
        answers: ["オウム", "ブタ", "スノウゴーレム", "羊"],
        correct: "ブタ"
    },
    {
        question: "四種類の部分の防具を作るのに必要な素材の合計は？",
        answers: ["21", "24", "27", "32"],
        correct: "24"
    },
    {
        question: "次のうち、最も体力が高いモブは？",
        answers: ["ウィザー", "エンダードラゴン", "ラヴェジャー", "エルダーガーディアン"],
        correct: "ウィザー"
    }, {
        question: "マイクラの生みの親は？",
        answers: ["イェンス・バーゲンステン", "アグネス・ラーソン", "ヘンリック・ニバーグ", "マルクス・ペルソン"],
        correct: "マルクス・ペルソン"
    }, {
        question: "マイクラの開発元であるMojang Studiosはどこの国にある？",
        answers: ["ノルウェー", "スウェーデン", "フィンランド", "デンマーク"],
        correct: "スウェーデン"
    }, {
        question: "ネザーアップデートのバージョンは？",
        answers: ["1.15", "1.16", "1.17", "1.19"],
        correct: "1.16"
    }, {
        question: "釣りで次のうち、最もレアなのは？",
        answers: ["生鱈", "生鮭", "熱帯魚", "フグ"],
        correct: "熱帯魚"
    }, {
        question: "次のうち、エンチャント台で出るものは？",
        answers: ["修繕", "消滅の呪い", "魂の速度", "無限"],
        correct: "無限"
    }, {
        question: "タンポポを用いて怪しいシチューを作ると付く効果は？",
        answers: ["再生能力", "満腹度回復", "盲目", "耐性"],
        correct: "満腹度回復"
    }, {
        question: "次のうち、最も身長が高いモブは？",
        answers: ["村人", "アイアンゴーレム", "エンダーマン", "ウィザースケルトン"],
        correct: "エンダーマン"
    }, {
        question: "次のうち、別のモブに変わることができないのは？",
        answers: ["ウィッチ", "豚", "村人", "スケルトン"],
        correct: "ウィッチ"
    }, {
        question: "虫殺しでダメージが増加するモブは何種？",
        answers: ["3種", "4種", "5種", "6種"],
        correct: "5種"
    }, {
        question: "次のうち、エンチャントされたリンゴがチェストに出ない構造物は？",
        answers: ["ダンジョン", "廃坑", "森の洋館", "沈没船"],
        correct: "沈没船"
    }, {
        question: "次のうち、最も満腹度が回復するのは？",
        answers: ["パンプキンパイ", "金のニンジン", "ウサギシチュー", "焼き豚"],
        correct: "ウサギシチュー"
    }, {
        question: "次のうち、友好的なモブは？",
        answers: ["フグ", "パンダ", "オオカミ", "イルカ"],
        correct: "フグ"
    }, {
        question: "ビーコンの最大効果を出すには何個の鉱石ブロックが必要？",
        answers: ["133", "164", "178", "192"],
        correct: "164"
    }, {
        question: "シュルカーボックスは何色ある？",
        answers: ["15", "16", "17", "18"],
        correct: "17"
    }, {
        question: "オーバーワールドの全てのバイオームでスポーンできるモブは何？",
        answers: ["エンダーマン", "コウモリ", "ゾンビ", "そんなものはいない"],
        correct: "そんなものはいない"
    }, {
        question: "マイクラ正式版のリリース日？",
        answers: ["2010年12月11日", "2011年10月23日", "2011年11月18日", "2012年10月19日"],
        correct: "2011年11月18日"
    },
]

const quizLength = quiz.length;
let quizIndex = 0;
let score = 0;

const $button = document.getElementsByTagName("button");
const buttonLength = $button.length;

//クイズの問題文、選択肢を表示
const setQuiz = () => {
    document.getElementById("js-question").textContent = quiz[quizIndex].question;
    let buttonIndex = 0;
    while (buttonIndex < buttonLength) {
        $button[buttonIndex].textContent = quiz[quizIndex].answers[buttonIndex];
        buttonIndex++;
    }
}
setQuiz();

const click = (e) => {
    if (quiz[quizIndex].correct === e.target.textContent) {
        window.alert("正解！");
        score++;
    } else {
        window.alert("不正解！")
    }

    quizIndex++;

    if (quizIndex < quizLength) {
        setQuiz();
    } else {
        if (score >= quizLength) {
            document.getElementById("js-question").textContent = "おめでとう！あなたの正解数は" + score + "/" + quizLength + "です！"
        } else {
            document.getElementById("js-question").textContent = "終了！あなたの正解数は" + score + "/" + quizLength + "です！"
        }
        $button[0].textContent = " "
        $button[1].textContent = " "
        $button[2].textContent = " "
        $button[3].textContent = " "
    }

};

let clickIndex = 0;
while (clickIndex < buttonLength) {
    $button[clickIndex].addEventListener("click", (e) => {
        click(e);
    });
    clickIndex++;
}