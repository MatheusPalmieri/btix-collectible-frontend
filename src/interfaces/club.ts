interface Data {
  label: string;
  link: string;
}

export interface Club {
  id: string;

  image: string;
  name: string;
  description: string;

  events: Data[];
  links: Data[];
}
