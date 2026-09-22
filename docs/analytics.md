# Analytics setup

- Set `NUXT_PUBLIC_METRICA_ID` to the real numeric counter ID. Empty or invalid values disable all Metrica requests, even with consent.
- Consent is saved in `gidmed-analytics-v1` for 180 days. Only `accepted` permits loading the SDK. No tracking pixel, preconnect or SDK is emitted during SSR.
- Webvisor, clickmap, automatic link tracking and accurate bounce tracking are disabled. SPA page views use only origin + pathname, without query strings or hashes.
- Footer and privacy page provide settings. Declining after acceptance destroys the counter and reloads the page to unload the SDK. Previously transmitted data and existing analytics cookies are not automatically erased.
- Configure IP masking and appropriate retention in the counter dashboard. Do not enable extra features without updating disclosures and consent.
- Before publishing: supply legal operator details and privacy contact; verify hosting logs/retention and Google Fonts disclosures; have the policy reviewed. The current privacy page is explicitly a draft, not a legal compliance certification.

References: https://yandex.ru/support/metrica/ru/general/notification and https://yandex.ru/support/metrica/ru/code/counter-initialize
