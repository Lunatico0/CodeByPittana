import CodeRoundedIcon from '@mui/icons-material/CodeRounded';
import ApiRoundedIcon from '@mui/icons-material/ApiRounded';
import RocketLaunchRoundedIcon from '@mui/icons-material/RocketLaunchRounded';
import { ComponentType } from 'react';
import { SvgIconProps } from '@mui/material';

export const VALUE_PILLAR_ICONS: Record<string, ComponentType<SvgIconProps>> = {
  code: CodeRoundedIcon,
  api: ApiRoundedIcon,
  rocket: RocketLaunchRoundedIcon,
};
