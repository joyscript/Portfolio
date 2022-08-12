import { clearLS } from './js/services.js';
import { checkWebp } from './js/services.js';
import { switchMenu } from './js/switch-menu.js';
import { switchLang } from './js/switch-lang.js';
import { switchTheme } from './js/switch-theme.js';
import { switchPhotos } from './js/switch-photos.js';
import { changeHeader } from './js/change-header.js';
import { changeButtons } from './js/change-buttons.js';
import { sendData } from './js/send-data.js';

clearLS();
checkWebp();
switchMenu();
switchLang();
switchTheme();
switchPhotos();
changeHeader();
changeButtons();
sendData();
