import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface AboutPillar {
  id: string;
  title: string;
  description: string;
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
}

export interface AboutData {
  heading: string;
  paragraphs: string[];
  pillars: AboutPillar[];
}
