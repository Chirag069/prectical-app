// ─── Auth ────────────────────────────────────────────────────────────────────

export interface User {
  usr_id: number;
  usr_fname: string;
  usr_lname: string;
  usr_username: string;
  usr_email: string;
  usr_profile: string;
  usr_profile_img: string;
  usr_status: number;
  role: string;
}

export interface LoginResponse {
  success: boolean;
  message: string;
  data: {
    user: User;
    token: string;
  };
}

// ─── Events ──────────────────────────────────────────────────────────────────

export interface DanceStyle {
  ds_id: number;
  ds_name: string;
}

export interface Event {
  event_id: number;
  event_date_id: number;
  event_name: string;
  description: string;
  event_profile_img: string;
  event_url: string;
  event_price_from: number;
  event_price_to: number;
  readable_from_date: string;
  readable_to_date: string;
  isFavorite: number;
  city: string;
  country: string;
  keywords: string[];
  danceStyles: DanceStyle[];
}

export interface EventsResponse {
  success: boolean;
  message: string;
  data: {
    events: Event[];
    total: number;
  };
}
