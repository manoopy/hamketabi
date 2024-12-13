import type { UseFetchOptions } from "nuxt/app";
import { defu } from "defu";

export function useIFetch<T>(
  url: string | (() => string),
  options: UseFetchOptions<T> = {}
) {
  const config = useRuntimeConfig();
  const accessToken = useCookie("access_token");

  const defaults: UseFetchOptions<T> = {
    baseURL: config.public.baseURL,
    // this overrides the default key generation, which includes a hash of
    // url, method, headers, etc. - this should be used with care as the key
    // is how Nuxt decides how responses should be deduplicated between
    // client and server
    key: url,

    // set user token if connected
    headers: accessToken.value
      ? {
        Authorization: `Token ${accessToken.value}`,
      }
      : {},

    onRequest({ request, options }) {
      // Set the request headers
    },

    onRequestError({ request, options, error }) {
      // Handle the request errors
    },

    onResponse({ request, response, options }) {
      // Convert response data to camelCase
    },

    onResponseError({ request, response, options }) {
      // throw new myBusinessError()
      if (response.status === 401) {
        useRouter().push('/auth');
      }
    },
  };

  // for nice deep defaults, please use unjs/defu
  const params = defu(options, defaults);

  return useFetch(url, params);
}

// Use example
// const { data } = await useIFetch<object>('/beers')


