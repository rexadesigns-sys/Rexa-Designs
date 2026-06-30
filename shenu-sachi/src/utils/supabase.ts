import { createClient } from "@supabase/supabase-js";

let supabaseClient: ReturnType<typeof createClient> | null = null;

export function getSupabaseClient() {
  if (supabaseClient) return supabaseClient;

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || "";
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || "";


  const isConfigured = supabaseUrl && supabaseAnonKey && !supabaseUrl.includes("your-project-id");

  if (!isConfigured) {
    console.warn(
      "Supabase configuration missing or placeholder values detected. Real database interactions will fail until environment variables are updated in .env.local"
    );
  }

  // Fallback to avoid build-time errors when env variables are not yet set
  const url = isConfigured && supabaseUrl.startsWith("http") ? supabaseUrl : "https://placeholder-project.supabase.co";
  const key = isConfigured ? supabaseAnonKey : "placeholder-anon-key";

  supabaseClient = createClient(url, key);
  return supabaseClient;
}
