const debugQueryKeys = [
  "debug",
  "noredir",
  "debugManifestsFile",
  "loadSPFX",
  "customActions",
];

export const withCurrentDebugQuery = (url: string): string => {
  try {
    const targetUrl = new URL(url, window.location.origin);
    const currentUrl = new URL(window.location.href);

    if (targetUrl.origin !== currentUrl.origin) {
      return url;
    }

    debugQueryKeys.forEach((key) => {
      const value = currentUrl.searchParams.get(key);

      if (value && !targetUrl.searchParams.has(key)) {
        targetUrl.searchParams.set(key, value);
      }
    });

    return targetUrl.toString();
  } catch {
    return url;
  }
};
