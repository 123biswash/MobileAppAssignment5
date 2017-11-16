/**
Licensed to the Apache Software Foundation (ASF) under one
or more contributor license agreements.  See the NOTICE file
distributed with this work for additional information
regarding copyright ownership.  The ASF licenses this file
to you under the Apache License, Version 2.0 (the
'License'); you may not use this file except in compliance
with the License.  You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing,
software distributed under the License is distributed on an
'AS IS' BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, either express or implied.  See the License for the
specific language governing permissions and limitations
under the License.
*/

// Note, these will be updated automatically at build time
var CACHE_VERSION = '1510808199233';
var CACHE_LIST = [
    "/assets/css/images/ic_action_add.png",
    "/assets/css/images/ic_action_arrow_left.png",
    "/assets/css/images/ic_action_book.png",
    "/assets/css/images/ic_action_bookmark.png",
    "/assets/css/images/ic_action_dialog.png",
    "/assets/css/images/ic_action_download.png",
    "/assets/css/images/ic_action_goleft.png",
    "/assets/css/images/ic_action_location.png",
    "/assets/css/images/ic_action_mail.png",
    "/assets/css/images/ic_action_monolog.png",
    "/assets/css/images/ic_action_phone_outgoing.png",
    "/assets/css/images/ic_action_search.png",
    "/assets/css/images/ic_action_user.png",
    "/assets/css/images/ic_action_users.png",
    "/assets/css/pageslider.css",
    "/assets/css/styles.css",
    "/assets/pics/Amy_Jones.jpg",
    "/assets/pics/Amy_Jones50.jpg",
    "/assets/pics/Eugene_Lee.jpg",
    "/assets/pics/Eugene_Lee50.jpg",
    "/assets/pics/Gary_Donovan.jpg",
    "/assets/pics/Gary_Donovan50.jpg",
    "/assets/pics/James_King.jpg",
    "/assets/pics/James_King50.jpg",
    "/assets/pics/John_Williams.jpg",
    "/assets/pics/John_Williams50.jpg",
    "/assets/pics/Julie_Taylor.jpg",
    "/assets/pics/Julie_Taylor50.jpg",
    "/assets/pics/Kathleen_Byrne.jpg",
    "/assets/pics/Kathleen_Byrne50.jpg",
    "/assets/pics/Lisa_Wong.jpg",
    "/assets/pics/Lisa_Wong50.jpg",
    "/assets/pics/Paul_Jones.jpg",
    "/assets/pics/Paul_Jones50.jpg",
    "/assets/pics/Paula_Gates.jpg",
    "/assets/pics/Paula_Gates50.jpg",
    "/assets/pics/Ray_Moore.jpg",
    "/assets/pics/Ray_Moore50.jpg",
    "/assets/pics/Steven_Wells.jpg",
    "/assets/pics/Steven_Wells50.jpg",
    "/assets/ratchet/css/ratchet-theme-android.css",
    "/assets/ratchet/css/ratchet-theme-android.min.css",
    "/assets/ratchet/css/ratchet-theme-ios.css",
    "/assets/ratchet/css/ratchet-theme-ios.min.css",
    "/assets/ratchet/css/ratchet.css",
    "/assets/ratchet/css/ratchet.min.css",
    "/assets/ratchet/fonts/ratchicons.eot",
    "/assets/ratchet/fonts/ratchicons.svg",
    "/assets/ratchet/fonts/ratchicons.ttf",
    "/assets/ratchet/fonts/ratchicons.woff",
    "/config.xml",
    "/cordova-sw.js",
    "/cordova.js",
    "/cordova_plugins.js",
    "/favicon.ico",
    "/index.html",
    "/js/.DS_Store",
    "/js/app.js",
    "/js/services/.DS_Store",
    "/js/services/json/EmployeeService.js",
    "/js/services/localstorage/EmployeeService.js",
    "/js/services/memory/EmployeeService.js",
    "/js/services/websql/EmployeeService.js",
    "/lib/fastclick.js",
    "/lib/handlebars.js",
    "/lib/jquery.js",
    "/lib/pageslider.js",
    "/lib/router.js",
    "/manifest.json",
    "/plugins/cordova-plugin-device/src/browser/DeviceProxy.js",
    "/plugins/cordova-plugin-device/www/device.js",
    "/plugins/cordova-plugin-dialogs/www/browser/notification.js",
    "/plugins/cordova-plugin-dialogs/www/notification.js"
];

this.addEventListener('install', function (event) {
    // Perform install steps
    console.log('cordova service worker is installing.');
    event.waitUntil(caches.open(CACHE_VERSION) /* eslint no-undef : 0 */
        .then(function (cache) {
            return cache.addAll(CACHE_LIST);
        }));
});

this.addEventListener('activate', function (event) {
    // Perform activate steps
    console.log('cordova service worker is activated.');
});

this.addEventListener('fetch', function (event) {
    console.log('cordova service worker : fetch : ' + event.request.url);

    event.respondWith(caches.match(event.request).then(function (response) { /* eslint no-undef : 0 */
        // Cache hit? return response else fetch it
        return response || fetch(event.request); /* eslint no-undef : 0 */
    }));
});
