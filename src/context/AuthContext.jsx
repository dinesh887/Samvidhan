import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

// Development-only account boundary. Replace this with Supabase Auth or Firebase Authentication
// before using real accounts, subscriptions, or personal data.
const INITIAL_USER = { id: 'demo-user', name: 'Constitution learner', email: 'demo@samvidhan.local', plan: 'free' }

export function AuthProvider({ children }) {
  const [user, setUser] = useState(INITIAL_USER)
  const isPremium = user?.plan === 'premium'
  const upgradeToPremium = () => setUser((current) => ({ ...current, plan: 'premium' }))
  return <AuthContext.Provider value={{ user, isPremium, upgradeToPremium }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (!context) throw new Error('useAuth must be used within AuthProvider')
  return context
}