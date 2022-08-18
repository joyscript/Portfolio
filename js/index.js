import { clearLS } from './modules/services.js';
import { checkWebp } from './modules/services.js';
import { switchMenu } from './modules/switch-menu.js';
import { switchLang } from './modules/switch-lang.js';
import { switchTheme } from './modules/switch-theme.js';
import { switchPhotos } from './modules/switch-photos.js';
import { changeHeader } from './modules/change-header.js';
import { changeButtons } from './modules/change-buttons.js';
import { videoplayer } from './modules/videoplayer.js';
import { sendData } from './modules/send-data.js';

clearLS();
checkWebp();
switchMenu();
switchLang();
switchTheme();
switchPhotos();
changeHeader();
changeButtons();
videoplayer();
sendData();