// src/supabaseClient.ts
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

console.log("Check keys:", supabaseUrl, supabaseKey); // Проверь, не undefined ли они

export const supabase = createClient(supabaseUrl, supabaseKey);
