import { init, getLocaleFromNavigator, addMessages } from 'svelte-i18n';

import de from './locales/de.json'
import en from './locales/en.json'
import fr from './locales/fr.json'
import it from './locales/it.json'
import ja from './locales/ja.json'
import ko from './locales/ko.json'
import ru from './locales/ru.json'
import zh from './locales/zh.json'

addMessages("de", de);
addMessages("en", en);
addMessages("fr", fr);
addMessages("it", it);
addMessages("ja", ja);
addMessages("ko", ko);
addMessages("ru", ru);
addMessages("zh", zh);

init({
    fallbackLocale: 'en',
    initialLocale: getLocaleFromNavigator()
});