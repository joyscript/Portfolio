# Portfolio

https://joyscript.github.io/Portfolio/

**Учебный проект по фронтенд-разработке**

Выполнен по [заданию](https://github.com/rolling-scopes-school/tasks/blob/master/tasks/portfolio/portfolio.md) **Rolling Scopes School**

### Использованы технологии:

- Figma
- HTML5
- CSS3, препроцессор SCSS
- Методология БЭМ
- PerfectPixel
- Javascript (ES6)
- JS Модули

---

### Технические требования:

**HTML, CSS:**

- [x] Вёрстка валидная - нет ошибок и предупреждений в валидаторе.
- [x] Вёрстка семантическая - используются семантические теги `<header>`, `<main>`, `<footer>`, `<nav>` и другие.
- [x] Вёрстка соответствует дизайн-макетам.
      (Макеты в формате .jpg расположены в папке [mockups](https://github.com/joyscript/Portfolio/tree/main/mockups).)
- [x] Для построения сетки используются флексы или гриды; иконки добавлены в формате `.svg`; есть `favicon`.
- [x] Реализована плавная интерактивность кнопок, ссылок, полей ввода, а также плавная прокрутка по якорям.
- [x] Верстка адаптивная и отзывчивая, соответствует макетам на брейкпойнтах.
- [x] Ни на одном из разрешений до 320px включительно не появляется горизонтальная полоса прокрутки, весь контент страницы при этом сохраняется.

**JavaScript:**

- [x] Бургер-меню.
      На ширине экрана 1024рх и меньше реализовано адаптивное бургер-меню. Появление и скрытие меню плавное, происходит при нажатии на иконку бургер/крестик. Бургер-иконка при клике превращается в крестик при помощи css-анимаций, без использования изображений. Ссылки в адаптивном меню работают, обеспечивая плавную прокрутку по якорям. При клике по ссылке адаптивное меню плавно скрывается, происходит переход на нужный раздел. На ширине 768-1024px за пределами меню есть `overlay`, по клику на который меню закрывается.
- [x] Смена изображений в секции `portfolio`.
      При кликах по кнопкам `Winter`, `Spring`, `Summer`, `Autumn` в секции `portfolio` отображаются изображения из папки с соответствующим названием. Кнопка, по которой кликнули, становится активной, т.е. выделяется стилем.
- [x] Перевод страницы на два языка.
      При клике по надписи `ru` англоязычная страница переводится на русский язык, при клике по надписи `en` русскоязычная страница переводится на английский язык. Надписи `en` или `ru`, соответствующие текущему языку страницы, становятся активными т.е. выделяются стилем
- [x] Переключение светлой и тёмной темы.
      На страницу добавлен переключатель, при клике по которому тёмная тема приложения сменяется светлой и наоборот, после смены темы интерактивные элементы по-прежнему изменяют внешний вид при наведении и клике и при этом остаются видимыми на странице.
- [x] Выбранный пользователем язык, тема, время года сохраняются при перезагрузке страницы.
- [x] Анимация для кнопок при клике.

---

Все технические требования выполнены.

**Дополнительный функционал и особенности:**

- Предварительная очистка localStorage (для гарантии работоспособности).
- Отправка данных из формы на сервер jsonplaceholder (с предварительной валидацией; данные можно увидеть в консоли).
- Модальное окно благодарности после отправки формы.
- Фиксированный header, изменяющийся при скролле.
- Полноэкранные фоны в секции hero и contacts.
- Имеются незначительные отклонения от макета с целью улучшения проекта.
