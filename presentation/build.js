const PptxGenJS = require("pptxgenjs");
const pres = new PptxGenJS();
pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pres.layout = "WIDE";
pres.author = "Разбор t.me/yury/1300";
pres.title = "Верность машины поручению — не гарантия";
pres.subject = "Разбор высказывания Юрия Максимова, 7 октября 2026";

const bg = "FFFFFF";
const ink = "1C1C1C";
const muted = "5E6670";
const rule = "D9D4CC";
const paper = "F6F4F0";
const accent = "1F4B6E";

function foot(slide, n) {
  slide.addShape(pres.shapes.RECTANGLE, {
    x: 0.55, y: 7.05, w: 12.2, h: 0.01, fill: { color: rule }
  });
  slide.addText("t.me/yury/1300", {
    x: 0.55, y: 7.12, w: 6, h: 0.24,
    fontFace: "Calibri", fontSize: 12, color: muted, margin: 0
  });
  slide.addText(n + " / 10", {
    x: 10.3, y: 7.12, w: 2.45, h: 0.24,
    fontFace: "Calibri", fontSize: 12, color: muted, align: "right", margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 1);
  s.addText("Разбор высказывания", {
    x: 0.7, y: 1.85, w: 11, h: 0.32,
    fontFace: "Calibri", fontSize: 16, color: accent, margin: 0
  });
  s.addText("Верность машины поручению\nне гарантия", {
    x: 0.7, y: 2.3, w: 11.5, h: 1.9,
    fontFace: "Georgia", fontSize: 40, color: ink, margin: 0
  });
  s.addText("Юрий Максимов, канал «Максимов | ЗАПИСКИ», пост 1300.\nФорум «Цифровые решения», 7 октября 2026.", {
    x: 0.7, y: 4.5, w: 10, h: 0.7,
    fontFace: "Calibri", fontSize: 18, color: muted, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 2);
  s.addText("Высказывание", {
    x: 0.7, y: 0.4, w: 11, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 1.2, w: 11.9, h: 2.35,
    fill: { color: paper }, rectRadius: 0.06
  });
  s.addText("С приходом ИИ обновляется природа безопасности: появляется гарантия верности машины поручению и замыслу человека, который, в свою очередь, принимает ответственность за результат ее деятельности.", {
    x: 0.95, y: 1.42, w: 11.4, h: 1.9,
    fontFace: "Georgia", fontSize: 20, color: ink, margin: 0
  });
  s.addText("Подпись поста, дословно. Ролик 3:11 в превью недоступен: «Media is too big». Покадровой расшифровки нет.\n489 просмотров на момент снятия. Та же речь в тот же день процитирована РИА Новости.", {
    x: 0.7, y: 3.85, w: 11.9, h: 0.85,
    fontFace: "Calibri", fontSize: 16, color: muted, margin: 0
  });
  s.addText("Источник сессии: ria.ru/20261007/ii-2122870824.html", {
    x: 0.7, y: 4.85, w: 11.9, h: 0.35,
    fontFace: "Calibri", fontSize: 15, color: accent, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 3);
  s.addText("Что сказано на сессии", {
    x: 0.7, y: 0.38, w: 12, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  const items = [
    ["1", "Запреты не работают", "Агенту нельзя сказать «не делай это и это»: он не человек, начинает тупить и не делает работу."],
    ["2", "Нужна верность поручению", "Делать соразмерное заданию и не выходить за разумные границы."],
    ["3", "Смотреть должна машина", "Человек не разберёт все действия. Контур: учебный банк, атака, детектор. Наверху человек."],
    ["4", "Вину не снять", "Если агент ошибся, оператор не должен говорить «это ИИ». Ни государству, ни бизнесу."]
  ];
  items.forEach((it, i) => {
    const y = 1.15 + i * 1.35;
    s.addText(it[0], {
      x: 0.7, y: y, w: 0.45, h: 0.36,
      fontFace: "Calibri", fontSize: 18, color: accent, margin: 0
    });
    s.addText(it[1], {
      x: 1.3, y: y, w: 11, h: 0.36,
      fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
    });
    s.addText(it[2], {
      x: 1.3, y: y + 0.4, w: 11, h: 0.6,
      fontFace: "Calibri", fontSize: 16, color: muted, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 4);
  s.addText("Три части утверждения", {
    x: 0.7, y: 0.38, w: 12, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  const cols = [
    ["Описание", "Природа безопасности обновляется", "Верно как сдвиг: с запрета действия на соответствие задаче."],
    ["Техника", "Появляется гарантия верности", "Слишком сильно. Это цель управления, не свойство модели."],
    ["Норма", "Человек принимает ответственность", "Самый крепкий тезис. Модель не субъект права."]
  ];
  cols.forEach((c, i) => {
    const x = 0.7 + i * 4.1;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y: 1.25, w: 3.85, h: 4.85,
      fill: { color: paper }, rectRadius: 0.06
    });
    s.addText(c[0], {
      x: x + 0.25, y: 1.5, w: 3.35, h: 0.35,
      fontFace: "Calibri", fontSize: 14, color: accent, margin: 0
    });
    s.addText(c[1], {
      x: x + 0.25, y: 2.05, w: 3.35, h: 1.7,
      fontFace: "Georgia", fontSize: 22, color: ink, margin: 0
    });
    s.addText(c[2], {
      x: x + 0.25, y: 4.0, w: 3.35, h: 1.6,
      fontFace: "Calibri", fontSize: 16, color: muted, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 5);
  s.addText("Что в этом верно", {
    x: 0.7, y: 0.38, w: 12, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  const rows = [
    ["Запретный список ломает агента", "Открытая цель плюс «нельзя класс действий» часто равна отказу от задачи, а не удержанию в ней."],
    ["Человек не масштабируется", "Журнал действий агента больше, чем внимание владельца. Второй контур нужен."],
    ["Петля — рабочий метод", "Строитель, атакующий и детектор в песочнице — проверка, не доказательство."],
    ["Ответственность не делегируется", "6 октября на том же форуме границы полномочий агентов названы задачей. Вина уже не на модели."]
  ];
  rows.forEach((r, i) => {
    const y = 1.15 + i * 1.35;
    s.addText(r[0], {
      x: 0.7, y, w: 12, h: 0.36,
      fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
    });
    s.addText(r[1], {
      x: 0.7, y: y + 0.4, w: 12, h: 0.55,
      fontFace: "Calibri", fontSize: 16, color: muted, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 6);
  s.addText("Где слово сильнее факта", {
    x: 0.7, y: 0.38, w: 12, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  const rows = [
    ["Гарантия", "Нет предиката верности. Есть остаточный риск."],
    ["Замысел", "Человек его не формализует. Модель достраивает."],
    ["Чужое поручение", "Агент может быть верен отравленному письму, а не вам."],
    ["Критик из той же ткани", "Вторая модель ловит не всё и ошибается в ту же сторону."],
    ["Человек наверху", "Без порога эскалации превращается в кнопку «согласовано»."]
  ];
  rows.forEach((r, i) => {
    const y = 1.2 + i * 1.05;
    s.addText(r[0], {
      x: 0.7, y, w: 3.6, h: 0.55,
      fontFace: "Georgia", fontSize: 18, color: accent, margin: 0
    });
    s.addText(r[1], {
      x: 4.5, y, w: 8, h: 0.55,
      fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 7);
  s.addText("Схема", {
    x: 0.7, y: 0.32, w: 8, h: 0.4,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  function box(x, y, w, h, title, sub) {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
      x, y, w, h, fill: { color: paper }, rectRadius: 0.05,
      line: { color: "E4DFD6", width: 1 }
    });
    s.addText(title, {
      x: x + 0.15, y: y + 0.12, w: w - 0.3, h: 0.32,
      fontFace: "Calibri", fontSize: 15, color: ink, align: "center", margin: 0
    });
    s.addText(sub, {
      x: x + 0.15, y: y + 0.44, w: w - 0.3, h: 0.28,
      fontFace: "Calibri", fontSize: 12, color: muted, align: "center", margin: 0
    });
  }
  box(4.55, 0.9, 4.2, 0.85, "Человек", "замысел и ответственность");
  box(4.55, 2.05, 4.2, 0.85, "Карточка поручения", "цель, край, стоп, инструменты");
  box(0.7, 3.3, 3.7, 0.85, "Исполнитель", "соразмерное задаче");
  box(8.9, 3.3, 3.7, 0.85, "Критик", "человек не читает каждый шаг");
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 4.55, w: 11.9, h: 2.05,
    fill: { color: "FFFFFF" },
    line: { color: "E4DFD6", width: 1 },
    rectRadius: 0.05
  });
  s.addText("Петля только в песочнице", {
    x: 0.9, y: 4.7, w: 11.5, h: 0.3,
    fontFace: "Calibri", fontSize: 13, color: accent, margin: 0
  });
  box(0.95, 5.15, 3.5, 0.85, "ИИ-1 строит цель", "пример: виртуальный банк");
  box(4.9, 5.15, 3.5, 0.85, "ИИ-2 атакует", "ищет выход за край");
  box(8.85, 5.15, 3.5, 0.85, "ИИ-3 ловит атаку", "правила обновляет человек");
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 8);
  s.addText("Проще", {
    x: 0.7, y: 0.4, w: 12, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  s.addText("Стажёру нельзя сказать только «не трогай кассу». Он сядет и не будет работать.\nЕму говорят задачу и края. Второй смотрит, не вышел ли первый за края.\nЕсли платёж ушёл не туда, виноват не стажёр. Виноват тот, кто его поставил и не поставил предел.", {
    x: 0.7, y: 1.25, w: 12, h: 2.0,
    fontFace: "Calibri", fontSize: 20, color: ink, margin: 0
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, {
    x: 0.7, y: 3.6, w: 11.9, h: 2.15,
    fill: { color: paper }, rectRadius: 0.06
  });
  s.addText("Где преувеличение", {
    x: 0.95, y: 3.85, w: 11.4, h: 0.32,
    fontFace: "Calibri", fontSize: 14, color: accent, margin: 0
  });
  s.addText("Второй стажёр снижает риск. Он не делает первого безошибочным.\nПисьмо мошенника первый может принять за ваше поручение и честно его выполнить.", {
    x: 0.95, y: 4.3, w: 11.4, h: 1.1,
    fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 9);
  s.addText("План", {
    x: 0.7, y: 0.38, w: 12, h: 0.42,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  const steps = [
    "Необратимое наружу не отдавать без второго подтверждения.",
    "Карточка поручения вместо запретного списка внутри задачи.",
    "Критик на каждый шаг, человек — на стоп и необратимое.",
    "Петля строитель / атакующий / детектор только в песочнице.",
    "Имя владельца в журнале. «Это нейросеть» не снимает обязанность.",
    "Мерить выход за карточку и ложные остановки, не факт внедрения."
  ];
  steps.forEach((t, i) => {
    const y = 1.1 + i * 0.9;
    s.addText(String(i + 1), {
      x: 0.7, y, w: 0.45, h: 0.4,
      fontFace: "Calibri", fontSize: 18, color: accent, margin: 0
    });
    s.addText(t, {
      x: 1.3, y, w: 11.2, h: 0.5,
      fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 10);
  s.addText("Вывод", {
    x: 0.7, y: 0.5, w: 12, h: 0.45,
    fontFace: "Georgia", fontSize: 28, color: ink, margin: 0
  });
  s.addText("Менять объект контроля с запрета на верность поручению — правильно.\nНазывать это гарантией — рано.\nОтветственность человека пишется в контур, не в подпись к видео.", {
    x: 0.7, y: 1.5, w: 12, h: 2.4,
    fontFace: "Georgia", fontSize: 24, color: ink, margin: 0
  });
  s.addText("t.me/yury/1300\nria.ru/20261007/ii-2122870824.html\nФорум «Цифровые решения», 6–10 октября 2026", {
    x: 0.7, y: 4.4, w: 12, h: 1.2,
    fontFace: "Calibri", fontSize: 16, color: muted, margin: 0
  });
}

pres.writeFile({ fileName: "/workspace/artifacts/maximov-1300/presentation/maximov-1300.pptx" })
  .then(() => console.log("ok"))
  .catch((e) => { console.error(e); process.exit(1); });
