'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "2f2ce2890f9c5d0a276380f9bee432cd",
".git/config": "65ba4d2df626a9da1ac6da0f892b26b4",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "7b3ba18fbf53d12ef88ba54a6f1f8f48",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "93707ae5dfaefd4828cca790c341aa5e",
".git/logs/refs/heads/master": "93707ae5dfaefd4828cca790c341aa5e",
".git/logs/refs/remotes/origin/master": "7f84f471f25c3e406d465938bead0c8c",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0b/a9b802ec410f4c33de1df67315db185ab7d91c": "1f55fc10a7d48ee620e4773b3a190e63",
".git/objects/0b/e34cdf0bbb40e2c19f4332ec838e5cabff1441": "11d5ddd4c905c29fa5b04e1f4eb795e3",
".git/objects/0f/816fb5068fb5d0dc1623718a94d7a34c5edfe4": "48392ce692d6328aef69a753fa305233",
".git/objects/13/cd698afa86edb334bec59991cd113491a5a4f1": "01d69635e49925db17e7c32e26fc974f",
".git/objects/15/9b15011009e1e691b0761e5627dc3f3aa452ad": "822c0ced8e90203ed87ff7e0082d7945",
".git/objects/1e/a9f002ae4f2a79105fdf80d9d0a5d18d603cd8": "3287062319c721e921bff49d348d9648",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/20/d5f9f099a2596a1a26f8c5dfe07a08dce042c3": "87ae43ccebd66b2a11bf1ef90b7218e2",
".git/objects/33/325495637da4da1b7658e69d6f2c3e924e4161": "d7572db3c984f4f73fed80da281c60a5",
".git/objects/43/0028b3a9c34168a644cf98bb06e87edca6cdbf": "316344bc65e3ae97d08cf9606db3e052",
".git/objects/4c/decdcfada27789432e54e199c9ca92ec6b6946": "149c5ec4a78e6f0e66ece4348c4625c5",
".git/objects/58/72f836921297465a3458b9905cee72ab369970": "53f3aa83d9fe591ca6e45cdff01ccd92",
".git/objects/58/7c59a3696b1e294ff02bda1b76f76b1ba337e6": "fbe430aa8c03692dc06f7fa4cf9c05c5",
".git/objects/81/0337fcab9374ea7916511a5b9b59c1fe38c5fd": "cc99e87ef5a5ad26f76eb93e555d98fa",
".git/objects/81/73a27ab5b1735599074de87444ea5d87919a40": "e7c436ac5e3a0919c1080139d5b718b1",
".git/objects/81/8236ee819d87cec148adbdca9d440bc6d191aa": "d205534adb3c15675d5379c91ebea025",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/f1a666fdebbfc4ae059059740547a59ad03d0f": "3f971697ce237c8db1d4489e06052e6d",
".git/objects/95/19e1d75e8e60fc461d42dceff7162076484747": "87166efde232eca9c4f1ad4118b6d046",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/c4/13c1da648ff802e67410356e3eed39846bfca6": "37c2c024558311621458242a8df461f3",
".git/objects/c7/d37391fafe1fb1688ab60b908129eb71eb643b": "e2ad1dd99a1e4ff37c8da987374407eb",
".git/objects/dd/56eabbf298449db91bfa8644c6fbb20b8e6dda": "3fa6bb294070401dbba0b01792b84ce0",
".git/objects/ef/34cdb2385a717568819bf9030ee0b642fa84c6": "4a9038135d6db66494b9f6030dabb08c",
".git/objects/fc/565ec170b7fd55cbf422b8188a6f64eddda60e": "c1d5b622c8e63d1865785872c9d4a21d",
".git/refs/heads/master": "c68ff3d86609ca9a1c97d9bc660c3f86",
".git/refs/remotes/origin/master": "c68ff3d86609ca9a1c97d9bc660c3f86",
"assets/AssetManifest.json": "43fc5dcf71903313f08399de118e6932",
"assets/FontManifest.json": "baba99f42c80a9e150a05ca0afd4e12f",
"assets/fonts/MaterialIcons-Regular.ttf": "56d3ffdef7a25659eab6a68a3fbfaf16",
"assets/fonts/RobotoMono-Bold.ttf": "e72fdf1cca2cebcbe91325bbe9f9e5da",
"assets/fonts/RobotoMono-BoldItalic.ttf": "9f19015ac5913e03cdd542eb73d17d12",
"assets/fonts/RobotoMono-ExtraLight.ttf": "9bab8fe7af63fb4a1d536f0690799953",
"assets/fonts/RobotoMono-ExtraLightItalic.ttf": "2186a1bc18fe3a5b9d35b1f0a9661f97",
"assets/fonts/RobotoMono-Italic.ttf": "4e76966e85cfc4edb3db058576edcb1b",
"assets/fonts/RobotoMono-Light.ttf": "fa8ab495d494eccb28f4431f054ddbd4",
"assets/fonts/RobotoMono-LightItalic.ttf": "060d28a8c0576728842455c0a92641e0",
"assets/fonts/RobotoMono-Medium.ttf": "8ad82b1dc550319993a7d6c932b2656d",
"assets/fonts/RobotoMono-MediumItalic.ttf": "50fcbc561a338706746be330f2b7ef99",
"assets/fonts/RobotoMono-Regular.ttf": "e5ca8c0ac474df46fe45840707a0c483",
"assets/fonts/RobotoMono-SemiBold.ttf": "2a12618b6d46fd798157e4b9d29cdf06",
"assets/fonts/RobotoMono-SemiBoldItalic.ttf": "e0781b003f2cd1145518cc5f5f8d134c",
"assets/fonts/RobotoMono-Thin.ttf": "7cb58857d294ac1e09b72ea9403c690a",
"assets/fonts/RobotoMono-ThinItalic.ttf": "95e08d0c587d02c33914026841dd5e89",
"assets/NOTICES": "28eb89b9741326b1de0cb7eee5a5558d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "925f2bb84ef6ed41ae42e58355457b8c",
"/": "925f2bb84ef6ed41ae42e58355457b8c",
"main.dart.js": "cb8db8f3b75de07fa766ae5db8a02356",
"manifest.json": "f350cb66af29a892765f02614adc179b"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/LICENSE",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      // Provide a no-cache param to ensure the latest version is downloaded.
      return cache.addAll(CORE.map((value) => new Request(value, {'cache': 'no-cache'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');

      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }

      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#')) {
    key = '/';
  }
  // If the URL is not the the RESOURCE list, skip the cache.
  if (!RESOURCES[key]) {
    return event.respondWith(fetch(event.request));
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache. Ensure the resources are not cached
        // by the browser for longer than the service worker expects.
        var modifiedRequest = new Request(event.request, {'cache': 'no-cache'});
        return response || fetch(modifiedRequest).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.message == 'skipWaiting') {
    return self.skipWaiting();
  }

  if (event.message = 'downloadOffline') {
    downloadOffline();
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey in Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.add(resourceKey);
    }
  }
  return Cache.addAll(resources);
}
