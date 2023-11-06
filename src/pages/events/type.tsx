interface Tag {
    id: number;
    name: string;
  }
  
interface MyEvent {
    id: number;
    tags: Tag[];
    name: string;
    poster: string;
    description: string;
    mode: string;
    location: string;
    application_deadline: string;
    event_date_time: string;
    team_size: string;
    registration_link: string;
    rulebook_link: string;
  }
  
interface EventData {
    [category: string]: MyEvent[];
}

export type { MyEvent, EventData, Tag };