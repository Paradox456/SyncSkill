import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.ffridakwqjppixlqfrjx.supabase.co;
const supabaseKey = process.env.eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZmcmlkYWt3cWpwcGl4bHFmcmp4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEzMzU4ODAsImV4cCI6MjA2NjkxMTg4MH0.BU0BjO8vhK4Cz3vRWVdg59tQIbKF4D6Yu41ru2gq92g;

export const supabase = createClient(supabaseUrl, supabaseKey);
        