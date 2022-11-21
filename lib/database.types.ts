export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  public: {
    Tables: {
      notes: {
        Row: {
          id: number;
          created_at: string | null;
          general_state: string | null;
          anemic_state: string | null;
          skin: string | null;
          emesis: boolean | null;
          prosthesis: boolean | null;
          medicines: string | null;
          wandering: string | null;
          falls: string | null;
          deposition: string | null;
          dieresis: string | null;
          food: boolean | null;
          news: string | null;
          sleep: string | null;
          assistant: string | null;
          signs: number | null;
          code: number | null;
          patient: number | null;
          created_by: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          general_state?: string | null;
          anemic_state?: string | null;
          skin?: string | null;
          emesis?: boolean | null;
          prosthesis?: boolean | null;
          medicines?: string | null;
          wandering?: string | null;
          falls?: string | null;
          deposition?: string | null;
          dieresis?: string | null;
          food?: boolean | null;
          news?: string | null;
          sleep?: string | null;
          assistant?: string | null;
          signs?: number | null;
          code?: number | null;
          patient?: number | null;
          created_by?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          general_state?: string | null;
          anemic_state?: string | null;
          skin?: string | null;
          emesis?: boolean | null;
          prosthesis?: boolean | null;
          medicines?: string | null;
          wandering?: string | null;
          falls?: string | null;
          deposition?: string | null;
          dieresis?: string | null;
          food?: boolean | null;
          news?: string | null;
          sleep?: string | null;
          assistant?: string | null;
          signs?: number | null;
          code?: number | null;
          patient?: number | null;
          created_by?: string | null;
        };
      };
      patient: {
        Row: {
          id: number;
          created_at: string | null;
          name: string;
          date_of_birth: string | null;
          age: number | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          name: string;
          date_of_birth?: string | null;
          age?: number | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          name?: string;
          date_of_birth?: string | null;
          age?: number | null;
        };
      };
      user_roles: {
        Row: {
          id: number;
          created_at: string | null;
          user: string | null;
          role: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          user?: string | null;
          role?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          user?: string | null;
          role?: string | null;
        };
      };
      vital_signs: {
        Row: {
          id: number;
          created_at: string | null;
          sanguine_pressure: number | null;
          cardiac_frequency: number | null;
          saturation: number | null;
          temperature: number | null;
          news: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          sanguine_pressure?: number | null;
          cardiac_frequency?: number | null;
          saturation?: number | null;
          temperature?: number | null;
          news?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          sanguine_pressure?: number | null;
          cardiac_frequency?: number | null;
          saturation?: number | null;
          temperature?: number | null;
          news?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      increment: {
        Args: { notes_id: number };
        Returns: undefined;
      };
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
