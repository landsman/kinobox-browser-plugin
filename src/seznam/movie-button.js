import {kinoboxDesignSystem} from "../kinobox/design-system";

/**
 * Build button next to the other with Kinobox redirect.
 *
 * @param customURL
 * @param wrapperClassName {string}
 * @param linkClassName {string}
 * @returns {HTMLAnchorElement}
 */
export function buildMovieButton(customURL, wrapperClassName, linkClassName) {
    const btn = document.createElement('span');
    btn.innerText = 'Kinobox';
    btn.className = wrapperClassName;

    btn.style.display = 'block';
    btn.style.color = kinoboxDesignSystem.colorGlobalWhite;
    btn.style.fontFamily = kinoboxDesignSystem.fontFamily;
    btn.style.fontWeight = 500;

    const wrapper = document.createElement('div');
    wrapper.onclick = () => {
        window.location.href = customURL;
    };
    wrapper.className = linkClassName;
    wrapper.style.color = kinoboxDesignSystem.colorGlobalWhite;
    wrapper.style.backgroundColor = kinoboxDesignSystem.colorAccent;
    wrapper.style.borderColor = kinoboxDesignSystem.colorAccent;
    wrapper.appendChild(btn);

    return wrapper;
}