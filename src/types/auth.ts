export interface AuthUser {
  id: string
  email: string
  name?: string | null
  avatar_url?: string | null
  email_verified: boolean
  created_at: string
  updated_at: string
}

export interface Session {
  user: AuthUser
  access_token: string
  refresh_token: string
  expires_at: number
}

export interface LoginCredentials {
  email: string
  password: string
}

export interface SignupCredentials extends LoginCredentials {
  name?: string
  confirm_password: string
}

export interface AuthError {
  code: string
  message: string
}

export interface AuthResponse {
  session?: Session
  error?: AuthError
}

export interface PasswordResetRequest {
  email: string
}

export interface PasswordResetConfirm {
  token: string
  password: string
  confirm_password: string
}