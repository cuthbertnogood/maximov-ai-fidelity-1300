const PptxGenJS = require("pptxgenjs");
const pres = new PptxGenJS();
pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pres.layout = "WIDE";
pres.author = "Разбор t.me/yury/1300";
pres.title = "Верность машины поручению — не гарантия";
pres.subject = "Разбор высказывания Юрия Максимова, 7 октября 2026";

const bg = "FFFFFF";
const ink = "1C1C1C";
const muted = "4E5964";
const accent = "1F4B6E";

function foot(slide, n) {
  slide.addText("t.me/yury/1300", {
    x: 0.7, y: 7.05, w: 6, h: 0.28,
    fontFace: "Calibri", fontSize: 13, color: muted, margin: 0
  });
  slide.addText(n + " / 10", {
    x: 9.8, y: 7.05, w: 2.8, h: 0.28,
    fontFace: "Calibri", fontSize: 13, color: muted, align: "right", margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 1);
  s.addText("Разбор высказывания", {
    x: 0.7, y: 1.9, w: 11.8, h: 0.36,
    fontFace: "Calibri", fontSize: 18, color: accent, margin: 0
  });
  s.addText("Верность машины поручению\nне гарантия", {
    x: 0.7, y: 2.4, w: 11.8, h: 1.8,
    fontFace: "Georgia", fontSize: 40, color: ink, margin: 0
  });
  s.addText("Юрий Максимов, канал «Максимов | ЗАПИСКИ», пост 1300.\nФорум «Цифровые решения», 7 октября 2026.", {
    x: 0.7, y: 4.5, w: 11.8, h: 0.8,
    fontFace: "Calibri", fontSize: 20, color: muted, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 2);
  s.addText("Высказывание", {
    x: 0.7, y: 0.45, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
  });
  s.addText("С приходом ИИ обновляется природа безопасности: появляется гарантия верности машины поручению и замыслу человека, который, в свою очередь, принимает ответственность за результат ее деятельности.", {
    x: 0.7, y: 1.3, w: 11.8, h: 2.4,
    fontFace: "Georgia", fontSize: 24, color: ink, margin: 0
  });
  s.addText("Подпись поста, дословно. Ролик 3:11 в превью недоступен: «Media is too big». Покадровой расшифровки нет.", {
    x: 0.7, y: 4.0, w: 11.8, h: 0.9,
    fontFace: "Calibri", fontSize: 18, color: muted, margin: 0
  });
  s.addText("Та же речь в тот же день процитирована РИА Новости.\nria.ru/20261007/ii-2122870824.html", {
    x: 0.7, y: 5.05, w: 11.8, h: 0.8,
    fontFace: "Calibri", fontSize: 18, color: accent, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 3);
  s.addText("Что сказано на сессии", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
  });
  const items = [
    ["1. Запреты не работают", "Агенту нельзя сказать «не делай это и это»: он не человек, начинает тупить и не делает работу."],
    ["2. Нужна верность поручению", "Делать соразмерное заданию и не выходить за разумные границы."],
    ["3. Смотреть должна машина", "Человек не разберёт все действия. Контур: учебный банк, атака, детектор. Наверху человек."],
    ["4. Вину не снять", "Если агент ошибся, оператор не должен говорить «это ИИ». Ни государству, ни бизнесу."]
  ];
  items.forEach((it, i) => {
    const y = 1.15 + i * 1.35;
    s.addText(it[0], {
      x: 0.7, y, w: 11.8, h: 0.38,
      fontFace: "Calibri", fontSize: 20, color: ink, margin: 0
    });
    s.addText(it[1], {
      x: 0.7, y: y + 0.4, w: 11.8, h: 0.7,
      fontFace: "Calibri", fontSize: 18, color: muted, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 4);
  s.addText("Три части утверждения", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
  });
  const cols = [
    ["Описание", "Природа безопасности обновляется. Верно как сдвиг: с запрета действия на соответствие задаче."],
    ["Техника", "Появляется гарантия верности. Слишком сильно. Это цель управления, не свойство модели."],
    ["Норма", "Человек принимает ответственность. Самый крепкий тезис. Модель не субъект права."]
  ];
  cols.forEach((c, i) => {
    const y = 1.3 + i * 1.7;
    s.addText(c[0], {
      x: 0.7, y, w: 11.8, h: 0.4,
      fontFace: "Calibri", fontSize: 20, color: accent, margin: 0
    });
    s.addText(c[1], {
      x: 0.7, y: y + 0.45, w: 11.8, h: 0.9,
      fontFace: "Calibri", fontSize: 20, color: ink, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 5);
  s.addText("Что в этом верно", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
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
      x: 0.7, y, w: 11.8, h: 0.38,
      fontFace: "Calibri", fontSize: 20, color: ink, margin: 0
    });
    s.addText(r[1], {
      x: 0.7, y: y + 0.42, w: 11.8, h: 0.7,
      fontFace: "Calibri", fontSize: 18, color: muted, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 6);
  s.addText("Где слово сильнее факта", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
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
      x: 0.7, y, w: 11.8, h: 0.34,
      fontFace: "Calibri", fontSize: 20, color: accent, margin: 0
    });
    s.addText(r[1], {
      x: 0.7, y: y + 0.36, w: 11.8, h: 0.4,
      fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 7);
  s.addText("Схема", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
  });
  const lines = [
    ["1. Человек", "Задаёт замысел и не снимает с себя результат."],
    ["2. Карточка поручения", "Цель, край, стоп, инструменты."],
    ["3. Исполнитель", "Делает соразмерное задаче."],
    ["4. Критик", "Смотрит шаг. Человек видит только стоп и необратимое."],
    ["5. Петля в песочнице", "ИИ строит цель, ИИ атакует, ИИ ловит атаку. Это проверка, не гарантия."]
  ];
  lines.forEach((r, i) => {
    const y = 1.15 + i * 1.08;
    s.addText(r[0], {
      x: 0.7, y, w: 11.8, h: 0.34,
      fontFace: "Calibri", fontSize: 20, color: accent, margin: 0
    });
    s.addText(r[1], {
      x: 0.7, y: y + 0.36, w: 11.8, h: 0.4,
      fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 8);
  s.addText("Проще", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
  });
  s.addText("Стажёру нельзя сказать только «не трогай кассу». Он сядет и не будет работать.", {
    x: 0.7, y: 1.3, w: 11.8, h: 1.0,
    fontFace: "Calibri", fontSize: 22, color: ink, margin: 0
  });
  s.addText("Ему говорят задачу и края. Второй смотрит, не вышел ли первый за края.", {
    x: 0.7, y: 2.45, w: 11.8, h: 1.0,
    fontFace: "Calibri", fontSize: 22, color: ink, margin: 0
  });
  s.addText("Если платёж ушёл не туда, виноват не стажёр. Виноват тот, кто его поставил и не поставил предел.", {
    x: 0.7, y: 3.6, w: 11.8, h: 1.1,
    fontFace: "Calibri", fontSize: 22, color: ink, margin: 0
  });
  s.addText("Второй снижает риск. Он не делает первого безошибочным.", {
    x: 0.7, y: 5.0, w: 11.8, h: 0.8,
    fontFace: "Calibri", fontSize: 22, color: muted, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 9);
  s.addText("План", {
    x: 0.7, y: 0.4, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
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
    const y = 1.15 + i * 0.9;
    s.addText((i + 1) + ".  " + t, {
      x: 0.7, y, w: 11.8, h: 0.7,
      fontFace: "Calibri", fontSize: 20, color: ink, margin: 0
    });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  foot(s, 10);
  s.addText("Вывод", {
    x: 0.7, y: 0.5, w: 11.8, h: 0.5,
    fontFace: "Georgia", fontSize: 32, color: ink, margin: 0
  });
  s.addText("Менять объект контроля с запрета на верность поручению — правильно.", {
    x: 0.7, y: 1.4, w: 11.8, h: 1.0,
    fontFace: "Georgia", fontSize: 26, color: ink, margin: 0
  });
  s.addText("Называть это гарантией — рано.", {
    x: 0.7, y: 2.55, w: 11.8, h: 0.7,
    fontFace: "Georgia", fontSize: 26, color: ink, margin: 0
  });
  s.addText("Ответственность человека пишется в контур, не в подпись к видео.", {
    x: 0.7, y: 3.4, w: 11.8, h: 1.0,
    fontFace: "Georgia", fontSize: 26, color: ink, margin: 0
  });
  s.addText("t.me/yury/1300\nria.ru/20261007/ii-2122870824.html", {
    x: 0.7, y: 5.0, w: 11.8, h: 0.8,
    fontFace: "Calibri", fontSize: 18, color: muted, margin: 0
  });
}

pres.writeFile({ fileName: "/workspace/artifacts/maximov-1300/presentation/maximov-1300.pptx" })
  .then(() => console.log("ok"))
  .catch((e) => { console.error(e); process.exit(1); });
