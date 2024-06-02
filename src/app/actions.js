'use server';

import { cookies } from 'next/headers';

export async function setLocale(locale) {
  cookies().set('locale', locale);
}
