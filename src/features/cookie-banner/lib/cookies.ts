export function removeCookies(cookies: string[]) {
  const date = new Date();
  const expires = "expires=" + date.toUTCString();

  cookies.forEach((name) => (document.cookie = `${name}=;${expires};path=/`));
}
