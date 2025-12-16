/**
 * Redirect root / to /login so the app opens in the login view.
 */

import { redirect } from 'next/navigation'

export default function HomeRedirect() {
  redirect('/login')
}
