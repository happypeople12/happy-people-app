const verses = [
  ["Ефесянам 2:10", "Мы — Его творение, созданные во Христе Иисусе на добрые дела.", "Ефесян 2:10", "Ми — Його творіння, створені в Христі Ісусі на добрі діла.", "Ephesians 2:10", "We are His workmanship, created in Christ Jesus for good works."],
  ["Исаия 41:10", "Не бойся, ибо Я с тобою.", "Ісая 41:10", "Не бійся, бо Я з тобою.", "Isaiah 41:10", "Do not fear, for I am with you."],
  ["Филиппийцам 4:13", "Всё могу в укрепляющем меня Иисусе Христе.", "Филип’ян 4:13", "Усе можу в Ісусі Христі, Який мене зміцнює.", "Philippians 4:13", "I can do all things through Christ who strengthens me."],
  ["Притчи 3:5", "Надейся на Господа всем сердцем твоим.", "Приповісті 3:5", "Надійся на Господа всім своїм серцем.", "Proverbs 3:5", "Trust in the Lord with all your heart."],
  ["Псалом 117:24", "Сей день сотворил Господь; возрадуемся в оный.", "Псалом 117:24", "Цей день створив Господь; радіймо в ньому.", "Psalm 118:24", "This is the day the Lord has made; let us rejoice in it."],
  ["Римлянам 8:28", "Любящим Бога всё содействует ко благу.", "Римлян 8:28", "Тим, хто любить Бога, усе сприяє на добро.", "Romans 8:28", "All things work together for good to those who love God."],
  ["Матфея 6:33", "Ищите прежде Царства Божия и правды Его.", "Матвія 6:33", "Шукайте ж найперше Царства Божого і правди Його.", "Matthew 6:33", "Seek first the kingdom of God and His righteousness."],
];

function makeItem(i) {
  const v = verses[(i - 1) % verses.length];
  const mm = i <= 31 ? "07" : "08";
  const dd = String(i <= 31 ? i : i - 31).padStart(2, "0");
  const themeRu = ["миссию", "мир", "силу", "доверие", "радость", "верность", "первенство Бога"][(i - 1) % 7];
  const themeUk = ["місію", "мир", "силу", "довіру", "радість", "вірність", "першість Бога"][(i - 1) % 7];
  const themeEn = ["mission", "peace", "strength", "trust", "joy", "faithfulness", "putting God first"][(i - 1) % 7];
  return {
    date: `${mm}-${dd}`,
    ru: {
      verse: v[0], verseText: v[1],
      prayer: `Господь, сегодня я прихожу к Тебе с открытым сердцем. Помоги мне жить не случайно, а осознанно, с верой и вниманием к Твоему голосу. Направь мои мысли, слова и решения. Укрепи меня там, где я слаб, и дай мне увидеть ${themeRu} не как далёкую идею, а как реальный шаг сегодняшнего дня. Пусть моя жизнь приносит свет, надежду и добрый плод. Во имя Иисуса Христа. Аминь.`,
      declaration: `Я выбираю жить с верой. Бог ведёт меня, укрепляет меня и помогает мне двигаться к моей миссии.`,
      step: `Сделай сегодня один конкретный шаг веры: помолись, напиши благодарность или поддержи человека рядом.`
    },
    uk: {
      verse: v[2], verseText: v[3],
      prayer: `Господи, сьогодні я приходжу до Тебе з відкритим серцем. Допоможи мені жити не випадково, а свідомо, з вірою і увагою до Твого голосу. Направ мої думки, слова і рішення. Зміцни мене там, де я слабкий, і допоможи побачити ${themeUk} не як далеку ідею, а як реальний крок сьогоднішнього дня. Нехай моє життя приносить світло, надію і добрий плід. В ім’я Ісуса Христа. Амінь.`,
      declaration: `Я обираю жити з вірою. Бог веде мене, зміцнює мене і допомагає рухатися до моєї місії.`,
      step: `Зроби сьогодні один конкретний крок віри: помолись, запиши подяку або підтримай людину поруч.`
    },
    en: {
      verse: v[4], verseText: v[5],
      prayer: `Lord, today I come to You with an open heart. Help me live intentionally, with faith and attention to Your voice. Guide my thoughts, words, and decisions. Strengthen me where I am weak, and help me see ${themeEn} not as a distant idea, but as a real step for today. Let my life carry light, hope, and good fruit. In the name of Jesus Christ. Amen.`,
      declaration: `I choose to live by faith. God leads me, strengthens me, and helps me move toward my mission.`,
      step: `Take one practical step of faith today: pray, write down gratitude, or encourage someone near you.`
    }
  };
}

export const dailyContent = Array.from({ length: 62 }, (_, idx) => makeItem(idx + 1));

export function getTodayContent() {
  const today = new Date();
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const day = String(today.getDate()).padStart(2, "0");
  const key = `${month}-${day}`;
  return dailyContent.find((item) => item.date === key) || dailyContent[0];
}
