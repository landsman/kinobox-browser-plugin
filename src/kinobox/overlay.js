//import { kinoboxDesignSystem } from './design-system.js';

const overlayId = 'kinobox-overlay';

export function showOverlay() {
  const overlay = document.createElement('div');
  overlay.id = overlayId;
  overlay.style.position = 'fixed'
  overlay.style.top = 0
  overlay.style.left = 0
  overlay.style.width = '100%'
  overlay.style.height = '100%'
  overlay.style.backgroundColor = '#131314';
  overlay.style.zIndex = 9999

  document.body.appendChild(overlay);

  overlay.addEventListener('click', () => {
    document.body.removeChild(overlay)
  })
}

export function hideOverlay() {
  const overlay = document.getElementById(overlayId);
  if (overlay === null) {
    return;
  }
  overlay.parentNode.removeChild(overlay);
}
