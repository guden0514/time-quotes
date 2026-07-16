// 최소한의 서비스 워커 — 설치 가능한 PWA로 인식되기 위한 용도
self.addEventListener('install', (e) => {
  self.skipWaiting();
});
self.addEventListener('activate', (e) => {
  self.clients.claim();
});
self.addEventListener('fetch', (e) => {
  // 캐싱 없이 그냥 네트워크로 통과 (오프라인 지원은 하지 않음)
  return;
});
