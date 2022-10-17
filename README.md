Игорь Михайличенко
  10:29 PM
Загалом реакту всетаки я вас навчив. На деяких моїх проектах код був враз гірший чим ваш. Ну але щоб ви не зазнавались, то виписав декілька зауважень, проте я би навіть назвав це придирки, а не зауваженнями
Створювати такий обʼєкт перед експортом не обовязково. Можна прописувати імпорти наступним чином. В данному випадку результат буде такий самий
// file-one.js

export const getToken = state => state.auth.token;
export const getIsLoading = state => state.auth.isLoading;
export const getError = state => state.auth.error;

// file-two.js
import * as authSelectors from './file-one.js';

authSelectors.getToken(...)
https://github.com/serovsergey/react-team-project/blob/15f68c249091587c824063a7681c9a65c43b0577/src/redux/auth/selector.auth.js#L1-L11
2. Цей index.js файл тут не несе багато користі і по суті краще його не додавати в редакс. Це доречно для компонентів щоб позбутися наступних імпортів.
import { MyComponent } from './MyComponent/MyComponent'
https://github.com/serovsergey/react-team-project/blob/main/src/redux/auth/index.js
3. Тут можна позбутися від одного if . Краще це записати так
const isAuthError =  isRejectedWithValue(action) && getState().auth.token && action.payload.status === 401
            
if (isAuthError) {
   console.warn('Wrong token! Cleared.');
   dispatch(authActions.resetToken());
}
https://github.com/serovsergey/react-team-project/blob/15f68c249091587c824063a7681c9a65c43b0577/src/redux/auth/middleware.auth.js#L8-L13
4. .split('T')[0] Не самий надійний варіант отримати дату, багато чого може піти не так
https://github.com/serovsergey/react-team-project/blob/15f68c249091587c824063a7681c9a65c43b0577/src/redux/common/initial-state.common.js#L4
5. Ці функції багато де повторюються, краще їх винести в окремий файл з утілітами і не дублювати код
https://github.com/serovsergey/react-team-project/blob/15f68c249091587c824063a7681c9a65c43b0577/src/redux/gifts/gifts.slice.js#L5-L13
6. Закоментований код вважається дурним тоном. У вас може виникати помилкова думка, що якийсь код краще закоментувати ніж видалити, але це не так. Якщо коментувати код замість того щоб видалити то в якийсь момент його стане дуже багато і ви зрозумієте що вже не памятаєте, а чи важливий цей код чи він вже взагалі непотрібен. Крім того, інших колег це теж буде плутати, наврядчи хтось буде видаляти чужий коментар, бо можливо там щось важливе, а сісти розібратись буде лінь. В результаті проект стане купою закоментованого коду. [Вов, ви то все прочитали, ну ви даєта! Читайте до кінця, там цікаво] Тому краще привчити себе завжи чистити за собою коментарі. Крім того, старий код завжди можна відновити завдяки гіту.
https://github.com/serovsergey/react-team-project/blob/15f68c249091587c824063a7681c9a65c43b0577/src/redux/tasks/operations.tasks.js#L4-L9
7. Важливо завжди бути консистентним, якщо більшість селекторів названі з приставкою select то треба слідувати цьому правилу
https://github.com/serovsergey/react-team-project/blob/166be4598eaf711dbbc7102a74e446c664ab4bf0/src/redux/tasks/selector.tasks.js#L5
8. Це не хуки, краще перенести це в папку components
https://github.com/serovsergey/react-team-project/blob/main/src/hooks/useMediaQuery.jsx
9. тут не потрібен await i unwrap
https://github.com/serovsergey/react-team-project/blob/166be4598eaf711dbbc7102a74e446c664ab4bf0/src/components/CardList/CardList.jsx#L29-L34
10. Для такого краще використовувати бібліотеку classNames або clsx
https://github.com/serovsergey/react-team-project/blob/166be4598eaf711dbbc7102a74e446c664ab4bf0/src/components/ChangeLanguage/ChangeLanguage.jsx#L18
https://github.com/serovsergey/react-team-project/blob/166be4598eaf711dbbc7102a74e446c664ab4bf0/src/components/ProgressBar/ProgressBar.jsx#L12-L14
11. Декілька раз бачив цей код, щоб не дублювати його, краще створити функцію утіліту яка буде повертати індекс
https://github.com/serovsergey/react-team-project/blob/166be4598eaf711dbbc7102a74e446c664ab4bf0/src/components/CustomTaskBox/CustomTaskBox.jsx#L[…]1
http://images.shoutwiki.com/ytp/thumb/2/20/%D0%A1%D0%B2%D0%B8%D0%B4%D0%B5%D1%82%D0%B5%[…]D0%B8%D0%B7_%D0%A4%D1%80%D1%8F%D0%B7%D0%B8%D0%BD%D0%BE.png
12. Тут непотрібна шаблонна строка, просто `const addTask = t('Add task...')` і загалом це значення використовується лише один раз, не обовʼязково створювати константу [Ви точно все перечитали?]
https://github.com/serovsergey/react-team-project/blob/166be4598eaf711dbbc7102a74e446c664ab4bf0/src/components/CustomTaskBox/CustomTaskBox.jsx#L[…]1 (edited) 
## Как это работает

![How it works](./assets/how-it-works.png)

1. После каждого пуша в ветку `main` GitHub-репозитория, запускается специальный
   скрипт (GitHub Action) из файла `.github/workflows/deploy.yml`.
2. Все файлы репозитория копируются на сервер, где проект инициализируется и
   проходит линтинг и сборку перед деплоем.
3. Если все шаги прошли успешно, собранная продакшн версия файлов проекта
   отправляется в ветку `gh-pages`. В противном случае, в логе выполнения
   скрипта будет указано в чем проблема.
