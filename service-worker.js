const CACHE_NAME = 'text-to-handwriting';
const baseURL = 'https://oceanofanythingofficial.github.io/text-to-handwriting'; // Base Url
const urlsToCache = [
    baseURL,
    // html files
    `${baseURL}/`,
    `${baseURL}/index.html`,
    `${baseURL}/404.html`,
    // css files
    `${baseURL}/css/404.css`,
    `${baseURL}/css/bootstrap.min.css`,
    `${baseURL}/css/style.css`,
    `${baseURL}/css/util.css`,
    // js files
    `${baseURL}/js/app.mjs`,
    `${baseURL}/js/generate-images.mjs`,
    `${baseURL}/js/script.js`,
    `${baseURL}/js/utils/draw.mjs`,
    `${baseURL}/js/utils/generate-utils.mjs`,
    `${baseURL}/js/utils/helpers.mjs`,
    `${baseURL}/js/vendors/html2canvas.min.js`,
    // images
    `${baseURL}/images/android-chrome-192x192.png`,
    `${baseURL}/images/android-chrome-512x512.png`,
    `${baseURL}/images/apple-touch-icon.png`,
    `${baseURL}/images/dropdown-white.svg`,
    `${baseURL}/images/dropdown.svg`,
    `${baseURL}/images/favicon-16x16.png`,
    `${baseURL}/images/favicon-32x32-3.png`,
    `${baseURL}/images/favicon-32x32.png`,
    `${baseURL}/images/favicon.ico`,
    `${baseURL}/images/icon.png`,
    `${baseURL}/images/moon.svg`,
    `${baseURL}/images/sun.svg`,
    // Paper Themes
    `${baseURL}/paper-themes/crumped-1.jpg`,
    `${baseURL}/paper-themes/crumped-2.jpg`,
    `${baseURL}/paper-themes/dewdrop.jpg`,
    `${baseURL}/paper-themes/flower-tiles.jpg`,
    `${baseURL}/paper-themes/mistsky.jpg`,
    `${baseURL}/paper-themes/old-1.jpg`,
    `${baseURL}/paper-themes/old-2.jpg`,
    `${baseURL}/paper-themes/old-newspaper.jpg`,
    `${baseURL}/paper-themes/paris.jpg`,
    `${baseURL}/paper-themes/waves.jpg`,
    // Fonts
    `${baseURL}/fonts/Hindi_Type.ttf`,
    `${baseURL}/fonts/QEAntonyLark.ttf`,
    `${baseURL}/fonts/QEBEV.ttf`,
    `${baseURL}/fonts/QEBradenHill.ttf`,
    `${baseURL}/fonts/QECarolineMutiboko.ttf`,
    `${baseURL}/fonts/QECursiveVersion.ttf`,
    `${baseURL}/fonts/QEDSFont.ttf`,
    `${baseURL}/fonts/QEDaveMergens.ttf`,
    `${baseURL}/fonts/QEDavidReid.ttf`,
    `${baseURL}/fonts/QEDavidReidCAP.ttf`,
    `${baseURL}/fonts/QEDonaldRoss.ttf`,
    `${baseURL}/fonts/QEGHHughes.ttf`,
    `${baseURL}/fonts/QEGarrettWMoretz.ttf`,
    `${baseURL}/fonts/QEHerbertCooper.ttf`,
    `${baseURL}/fonts/QEJER.ttf`,
    `${baseURL}/fonts/QEJeffDungan.ttf`,
    `${baseURL}/fonts/QEJohnCaplin.ttf`,
    `${baseURL}/fonts/QEJohnWilliams.ttf`,
    `${baseURL}/fonts/QEJulianDean.ttf`,
    `${baseURL}/fonts/QEKevinKnowles.ttf`,
    `${baseURL}/fonts/QEKevinShirley.ttf`,
    `${baseURL}/fonts/QEKunjarScript.ttf`,
    `${baseURL}/fonts/QEMamasAndPapas.ttf`,
    `${baseURL}/fonts/QEPamRosenberry.ttf`,
    `${baseURL}/fonts/QEPhilipBean.ttf`,
    `${baseURL}/fonts/QEPhillips.ttf`,
    `${baseURL}/fonts/QEPrintVersion.ttf`,
    `${baseURL}/fonts/QERoystonSuch.ttf`,
    `${baseURL}/fonts/QERoystonSuchCAP.ttf`,
    `${baseURL}/fonts/QERufus.ttf`,
    `${baseURL}/fonts/QERuthStafford.ttf`,
    `${baseURL}/fonts/QESamRoberts.ttf`,
    `${baseURL}/fonts/QESamRoberts2.ttf`,
    `${baseURL}/fonts/QEScottWilliams.ttf`,
    `${baseURL}/fonts/QETonyFlores.ttf`,
    `${baseURL}/fonts/QEVRead.ttf`,
    `${baseURL}/fonts/QEVickyCaulfield.ttf`,
    `${baseURL}/fonts/QEgeeKzoid.ttf`,

];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request);
            })
    );
});


