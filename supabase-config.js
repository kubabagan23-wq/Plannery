const supabaseUrl = 'https://vuhjxzrhqhgjcgffrobd.supabase.co';
const supabaseKey = 'sb_publishable_dNTh3vhEnXldtlQI18DJ_w_tEdZ33o3';
const supabaseClient = window.supabase.createClient(supabaseUrl, supabaseKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});