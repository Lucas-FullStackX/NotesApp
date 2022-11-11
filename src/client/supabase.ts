import { createClient } from '@supabase/supabase-js';
import { Database } from '../../lib/database.types';
import { SUPABASE_KEY, SUPABASE_URL } from '../constants/index';

// Create a single supabase client for interacting with your database
export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_KEY);
