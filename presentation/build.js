const PptxGenJS = require("pptxgenjs");
const pptxgen = PptxGenJS;
const pres = new pptxgen();
pres.defineLayout({ name: "WIDE", width: 13.333, height: 7.5 });
pres.layout = "WIDE";
pres.author = "Разбор t.me/yury/1300";
pres.title = "Верность машины поручению — не гарантия";
pres.subject = "Разбор высказывания Юрия Максимова, 7 октября 2026";

const bg = "12151C";
const ink = "F4F1EA";
const muted = "9AA3B2";
const sand = "E8C39E";
const line = "8EB6D9";
const card = "1C2430";

function chrome(slide, n, total = 10) {
  slide.addShape(pres.shapes.RECTANGLE, { x: 0, y: 0, w: 0.12, h: 7.5, fill: { color: sand } });
  slide.addText("t.me/yury/1300  ·  7 октября 2026", {
    x: 0.45, y: 7.12, w: 8, h: 0.24, fontFace: "Calibri", fontSize: 11, color: muted, margin: 0
  });
  slide.addText(String(n) + " / " + total, {
    x: 11.4, y: 7.12, w: 1.4, h: 0.24, fontFace: "Calibri", fontSize: 11, color: muted, align: "right", margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 1);
  s.addText("РАЗБОР ВЫСКАЗЫВАНИЯ", {
    x: 0.55, y: 1.55, w: 10, h: 0.3, fontFace: "Calibri", fontSize: 13, color: sand, margin: 0, charSpacing: 1.4
  });
  s.addText("Верность машины\nпоручению — не гарантия", {
    x: 0.55, y: 2.0, w: 11.5, h: 2.1, fontFace: "Georgia", fontSize: 40, color: ink, margin: 0
  });
  s.addText("Юрий Максимов, «Максимов | ЗАПИСКИ», пост 1300.\nФорум «Цифровые решения», пленарная сессия, 7 октября 2026.", {
    x: 0.55, y: 4.4, w: 10, h: 0.7, fontFace: "Calibri", fontSize: 16, color: muted, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 2);
  s.addText("Высказывание", { x: 0.5, y: 0.35, w: 10, h: 0.42, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 1.15, w: 12.3, h: 2.5, fill: { color: card }, rectRadius: 0.08 });
  s.addText("С приходом ИИ обновляется природа безопасности: появляется гарантия верности машины поручению и замыслу человека, который, в свою очередь, принимает ответственность за результат ее деятельности.", {
    x: 0.8, y: 1.4, w: 11.7, h: 2.0, fontFace: "Georgia", fontSize: 20, color: ink, margin: 0
  });
  s.addText("Подпись поста, дословно. Ролик 3:11 в превью помечен «Media is too big»: покадровой расшифровки нет.\n489 просмотров, реакции 16 / 10 / 7 на момент снятия. Канал @yury.", {
    x: 0.5, y: 3.95, w: 12.2, h: 0.8, fontFace: "Calibri", fontSize: 15, color: muted, margin: 0
  });
  s.addText("Та же позиция в тот же день процитирована РИА Новости по пленарной сессии. Подпись — сжатие речи автором.", {
    x: 0.5, y: 4.9, w: 12.2, h: 0.7, fontFace: "Calibri", fontSize: 15, color: line, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 3);
  s.addText("Что сказано на сессии", { x: 0.5, y: 0.32, w: 12, h: 0.42, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  const items = [
    ["01", "Запреты не работают", "Агенту нельзя сказать «не делай это и это»: он не человек, начинает тупить и не делает работу."],
    ["02", "Нужна верность поручению", "Делать соразмерное заданию и не выходить за разумные границы."],
    ["03", "Смотреть должна машина", "Человек не разберёт все действия. Контур: банк, атака, детектор. Наверху человек."],
    ["04", "Вину не снять", "Если агент ошибся, оператор не должен говорить «это ИИ». Ни государству, ни бизнесу."]
  ];
  items.forEach((it, i) => {
    const y = 1.05 + i * 1.4;
    s.addText(it[0], { x: 0.5, y: y, w: 0.8, h: 0.4, fontFace: "Calibri", fontSize: 18, color: sand, margin: 0 });
    s.addText(it[1], { x: 1.45, y: y, w: 10.5, h: 0.36, fontFace: "Calibri", fontSize: 18, color: ink, margin: 0 });
    s.addText(it[2], { x: 1.45, y: y + 0.4, w: 10.8, h: 0.7, fontFace: "Calibri", fontSize: 15, color: muted, margin: 0 });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 4);
  s.addText("Три части утверждения", { x: 0.5, y: 0.32, w: 12, h: 0.42, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  const cols = [
    ["Описание", "Природа безопасности обновляется", "Верно как сдвиг объекта: с запрета действия на соответствие задаче."],
    ["Техника", "Появляется гарантия верности", "Слишком сильно. Это цель управления, не свойство модели."],
    ["Норма", "Человек принимает ответственность", "Самый крепкий тезис. Модель не субъект права."]
  ];
  cols.forEach((c, i) => {
    const x = 0.45 + i * 4.2;
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x, y: 1.3, w: 3.95, h: 4.6, fill: { color: card }, rectRadius: 0.08 });
    s.addText(c[0], { x: x + 0.25, y: 1.55, w: 3.4, h: 0.35, fontFace: "Calibri", fontSize: 13, color: sand, margin: 0 });
    s.addText(c[1], { x: x + 0.25, y: 2.1, w: 3.45, h: 1.5, fontFace: "Georgia", fontSize: 22, color: ink, margin: 0 });
    s.addText(c[2], { x: x + 0.25, y: 3.9, w: 3.45, h: 1.5, fontFace: "Calibri", fontSize: 15, color: muted, margin: 0 });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 5);
  s.addText("Что в этом верно", { x: 0.5, y: 0.32, w: 12, h: 0.42, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  const rows = [
    ["Запретный список ломает агента", "Открытая цель плюс «нельзя класс действий» часто равна отказу от задачи, а не удержанию в ней."],
    ["Человек не масштабируется", "Журнал действий агента больше, чем внимание владельца. Второй контур нужен."],
    ["Петля — рабочий метод", "Строитель, атакующий и детектор в песочнице — это purple team, не лозунг."],
    ["Ответственность не делегируется", "Совпадает с линией форума 6 октября: границы полномочий агентов ещё не заданы, но вина уже не на модели."]
  ];
  rows.forEach((r, i) => {
    const y = 1.1 + i * 1.35;
    s.addText(r[0], { x: 0.55, y, w: 12, h: 0.36, fontFace: "Calibri", fontSize: 18, color: ink, margin: 0 });
    s.addText(r[1], { x: 0.55, y: y + 0.4, w: 12, h: 0.6, fontFace: "Calibri", fontSize: 15, color: muted, margin: 0 });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 6);
  s.addText("Где слово сильнее факта", { x: 0.5, y: 0.32, w: 12, h: 0.42, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  const rows = [
    ["Гарантия", "Нет предиката верности. Есть остаточный риск."],
    ["Замысел", "Человек его не формализует. Модель достраивает."],
    ["Чужое поручение", "Агент может быть верен отравленному письму, а не вам."],
    ["Критик из той же ткани", "Вторая модель ловит не всё и врёт в ту же сторону."],
    ["Человек наверху", "Без порога эскалации превращается в кнопку «согласовано»."]
  ];
  rows.forEach((r, i) => {
    const y = 1.15 + i * 1.05;
    s.addText(r[0], { x: 0.55, y, w: 3.3, h: 0.7, fontFace: "Georgia", fontSize: 18, color: sand, margin: 0 });
    s.addText(r[1], { x: 4.0, y, w: 8.5, h: 0.7, fontFace: "Calibri", fontSize: 18, color: ink, margin: 0 });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 7);
  s.addText("Схема", { x: 0.5, y: 0.28, w: 8, h: 0.4, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  const boxes = [
    [4.3, 0.9, "Человек", "замысел и ответственность", sand],
    [4.3, 2.15, "Карточка поручения", "цель, край, стоп, инструменты", line],
    [0.7, 3.55, "Исполнитель", "соразмерное задаче", "D7DBE3"],
    [8.3, 3.55, "Критик", "не каждый шаг человеку", "D7DBE3"]
  ];
  boxes.forEach((b) => {
    s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: b[0], y: b[1], w: 4.2, h: 1.0, fill: { color: card }, rectRadius: 0.06 });
    s.addText(b[2], { x: b[0] + 0.2, y: b[1] + 0.14, w: 3.8, h: 0.36, fontFace: "Calibri", fontSize: 16, color: ink, align: "center", margin: 0 });
    s.addText(b[3], { x: b[0] + 0.2, y: b[1] + 0.5, w: 3.8, h: 0.32, fontFace: "Calibri", fontSize: 13, color: b[4], align: "center", margin: 0 });
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.7, y: 5.0, w: 11.9, h: 1.7, fill: { color: "181E28" }, rectRadius: 0.06 });
  s.addText("Петля в песочнице: ИИ-1 строит цель  →  ИИ-2 атакует  →  ИИ-3 учится ловить  →  человек обновляет карточку", {
    x: 0.95, y: 5.25, w: 11.4, h: 0.7, fontFace: "Calibri", fontSize: 16, color: ink, margin: 0
  });
  s.addText("Это тренировка. Блока «гарантия» на схеме нет.", {
    x: 0.95, y: 5.95, w: 11.4, h: 0.4, fontFace: "Calibri", fontSize: 14, color: sand, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 8);
  s.addText("Проще", { x: 0.5, y: 0.32, w: 12, h: 0.42, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  s.addText("Стажёру нельзя сказать только «не трогай кассу». Он сядет и не будет работать.\nЕму говорят задачу и края. Рядом сидит второй, который смотрит, не вышел ли первый за края.\nЕсли платёж ушёл не туда, виноват не стажёр. Виноват тот, кто его поставил и не поставил предел.", {
    x: 0.5, y: 1.15, w: 12.2, h: 2.1, fontFace: "Calibri", fontSize: 20, color: ink, margin: 0
  });
  s.addShape(pres.shapes.ROUNDED_RECTANGLE, { x: 0.5, y: 3.6, w: 12.3, h: 2.3, fill: { color: card }, rectRadius: 0.08 });
  s.addText("Где преувеличение", {
    x: 0.8, y: 3.85, w: 11, h: 0.35, fontFace: "Calibri", fontSize: 14, color: sand, margin: 0
  });
  s.addText("Второй стажёр снижает риск. Он не делает первого безошибочным.\nПисьмо мошенника первый может принять за ваше поручение и честно его выполнить.", {
    x: 0.8, y: 4.35, w: 11.6, h: 1.1, fontFace: "Calibri", fontSize: 18, color: ink, margin: 0
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 9);
  s.addText("План", { x: 0.5, y: 0.32, w: 12, h: 0.4, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  const steps = [
    ["1", "Разобрать агентов по вреду: необратимое наружу не отдавать без второго подтверждения."],
    ["2", "Карточка поручения вместо запретного списка внутри задачи."],
    ["3", "Критик на каждый шаг, человек — на стоп и необратимое."],
    ["4", "Петля строитель / атакующий / детектор только в песочнице."],
    ["5", "Имя владельца в журнале. «Это нейросеть» не снимает обязанность."],
    ["6", "Мерить выход за карточку и ложные остановки, не факт внедрения."]
  ];
  steps.forEach((st, i) => {
    const y = 1.0 + i * 0.9;
    s.addText(st[0], { x: 0.5, y, w: 0.5, h: 0.4, fontFace: "Calibri", fontSize: 18, color: sand, margin: 0 });
    s.addText(st[1], { x: 1.15, y, w: 11.4, h: 0.6, fontFace: "Calibri", fontSize: 16, color: ink, margin: 0 });
  });
}

{
  const s = pres.addSlide();
  s.background = { color: bg };
  chrome(s, 10);
  s.addText("Вывод", { x: 0.5, y: 0.4, w: 12, h: 0.45, fontFace: "Georgia", fontSize: 28, color: ink, margin: 0 });
  s.addText("Менять объект контроля с запрета на верность поручению — правильно.\nНазывать это гарантией — рано.\nОставлять ответственность на человеке — обязательно, и это пишется в контур, не в подпись к видео.", {
    x: 0.5, y: 1.4, w: 12.2, h: 2.4, fontFace: "Georgia", fontSize: 24, color: ink, margin: 0
  });
  s.addText("Источники: t.me/yury/1300 · ria.ru/20261007/ii-2122870824.html · форум «Цифровые решения», 6–10 октября 2026.", {
    x: 0.5, y: 5.3, w: 12.2, h: 0.6, fontFace: "Calibri", fontSize: 14, color: muted, margin: 0
  });
}

pres.writeFile({ fileName: "/workspace/artifacts/maximov-1300/presentation/maximov-1300.pptx" })
  .then(() => console.log("ok"))
  .catch((e) => { console.error(e); process.exit(1); });
