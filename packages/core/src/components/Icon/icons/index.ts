export interface IconTree {
  paths: string[];
  attrs?: {
    [key: string]: string | number;
  }[];
  isMulticolor?: boolean;
  isMulticolor2?: boolean;
  grid: number;
  tags: string[];
}

export interface IconObject {
  metadata: {
    name: string;
    importSize: {
      width: number;
      height: number;
    };
  };
  icons: IconTree[];
}

export type Icons = {
  Add: IconTree;
  Back: IconTree;
  Behance: IconTree;
  Blank: IconTree;
  Calendar: IconTree;
  Camera: IconTree;
  Check: IconTree;
  Clock: IconTree;
  Close: IconTree;
  CloseRound: IconTree;
  Copy: IconTree;
  Danger: IconTree;
  Dashboard: IconTree;
  Delete: IconTree;
  Document: IconTree;
  Dollar: IconTree;
  DotsHorizontal: IconTree;
  DotsVertical: IconTree;
  Download: IconTree;
  Dribbble: IconTree;
  Edit: IconTree;
  Expand: IconTree;
  Eye: IconTree;
  Facebook: IconTree;
  Favorite: IconTree;
  Filter: IconTree;
  Forward: IconTree;
  Heading: IconTree;
  Image: IconTree;
  Info: IconTree;
  Instagram: IconTree;
  LineGrid: IconTree;
  Link: IconTree;
  LinkedIn: IconTree;
  List: IconTree;
  LoadingSpinner: IconTree;
  Location: IconTree;
  Lock: IconTree;
  Mail: IconTree;
  Map: IconTree;
  Medium: IconTree;
  Menu: IconTree;
  Notification: IconTree;
  Person: IconTree;
  Phone: IconTree;
  Print: IconTree;
  Refresh: IconTree;
  RoundArrow: IconTree;
  Save: IconTree;
  Search: IconTree;
  Settings: IconTree;
  Shrink: IconTree;
  SimpleArrowDown: IconTree;
  SimpleArrowUp: IconTree;
  Skype: IconTree;
  Slack: IconTree;
  Star: IconTree;
  Table: IconTree;
  Text: IconTree;
  Twitter: IconTree;
  Upload: IconTree;
  Video: IconTree;
  Vimeo: IconTree;
  Website: IconTree;
  Whatsapp: IconTree;
  YoutubeBlack: IconTree;
};

export default Icons;
