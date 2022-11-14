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
        };
      };
      patient: {
        Row: {
          id: number;
          created_at: string | null;
          name: string;
          date_of_birth: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          name: string;
          date_of_birth?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          name?: string;
          date_of_birth?: string | null;
        };
      };
      'vitalis signa': {
        Row: {
          id: number;
          created_at: string | null;
          sanguinem_pressura: number | null;
          ratus_cordis: number | null;
          satietatem: number | null;
          temperature: number | null;
          news: string | null;
        };
        Insert: {
          id?: number;
          created_at?: string | null;
          sanguinem_pressura?: number | null;
          ratus_cordis?: number | null;
          satietatem?: number | null;
          temperature?: number | null;
          news?: string | null;
        };
        Update: {
          id?: number;
          created_at?: string | null;
          sanguinem_pressura?: number | null;
          ratus_cordis?: number | null;
          satietatem?: number | null;
          temperature?: number | null;
          news?: string | null;
        };
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      [_ in never]: never;
    };
  };
}
