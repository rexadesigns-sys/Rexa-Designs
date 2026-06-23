import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || '';

const isPlaceholder = !supabaseUrl || !supabaseAnonKey || supabaseUrl === 'your-supabase-url' || supabaseAnonKey === 'your-supabase-anon-key';

if (isPlaceholder) {
  if (typeof window !== 'undefined') {
    console.warn(
      'Supabase environment variables are missing or using default placeholders. ' +
      'Please configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY or NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY in your local environment.'
    );
  }
}

// Fallback to placeholder values to prevent crashes during initial compilation build
export const supabase = createClient(
  isPlaceholder ? 'https://placeholder-url.supabase.co' : supabaseUrl,
  isPlaceholder ? 'placeholder-anon-key' : supabaseAnonKey
);
