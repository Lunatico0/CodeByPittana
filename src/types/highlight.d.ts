import type { SvgIconTypeMap } from '@mui/material';
import type { OverridableComponent } from '@mui/material/OverridableComponent';

export interface HighlightItem {
  Icon: OverridableComponent<SvgIconTypeMap<object, "svg">>;
  title: string;
  paragraph: string;
}
