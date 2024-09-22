import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://cvbowvwmylginzdyuvfu.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN2Ym93dndteWxnaW56ZHl1dmZ1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjUyNDc3ODYsImV4cCI6MjA0MDgyMzc4Nn0.jj9L0R3rE2Xibx5UsgWmLhSf4qeq3QZyMXxgE-ZLg2g'
export const supabase = createClient(supabaseUrl, supabaseKey)