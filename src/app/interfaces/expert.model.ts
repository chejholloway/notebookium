export interface Expert {
  id: string;
  fk_user_id: string;
  title: string;
  slug: string;
  token: string;
  description: string;
  type: string;
  fk_category_id: string;
  fk_key_id: string;
  fk_cover_image_id: string;
  source_url?: any;
  views: string;
  likes: string;
  comments: string;
  visibility: string;
  order: string;
  strength: string;
  featured: string;
  spotlighted: string;
  expert: string;
  faculty_assigned: string;
  allow_comments: string;
  verified: string;
  submitted_at?: any;
  created_at: string;
  updated_at: string;
  category: string;
  category_slug: string;
  liked: string;
  Imedia: Media[];
  comment_list: any[];
  profile: Profile;
}

interface Profile {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  tagline: string;
  school: string;
  major: string;
  grad_year: string;
  percent: string;
  entries: string;
  connections: string;
  skills: string;
  avatar: Filename;
  cover: Filename;
  resume: string;
  privacy: string;
  src: string;
  connected: string;
  status?: any;
}

interface Media {
  id: string;
  fk_entry_id: string;
  Ifilename: Filename;
  video: string;
  default: string;
  created_at: string;
  updated_at: string;
}

interface Filename {
  url: string;
  url_https: string;
  dynamic: string;
  dynamic_https: string;
  dynamic_params: string;
  source: string;
}
