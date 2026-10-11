import { Box, Typography } from '@mui/material';
import type { SxProps, Theme } from '@mui/material';
import { colors } from '../utils/globalVariables';

type SectionHeadingProps = {
  overline: string;
  title: string;
  sx?: SxProps<Theme>;
  titleSx?: SxProps<Theme>;
};

/** Overline + large uppercase H2 used at the top of every section. */
const SectionHeading = ({ overline, title, sx, titleSx }: SectionHeadingProps) => (
  <Box sx={sx}>
    <Typography variant="overline" sx={{ color: colors.primary, display: 'block', mb: '8px', fontSize: '12px', letterSpacing: '1px' }}>
      {'>'} {overline}
    </Typography>
    <Typography variant="h2" sx={[{ fontWeight: 800, color: colors.white, fontSize: { lg: '64px', md: '54px', sm: '48px', xs: '44px' }, textTransform: 'uppercase', m: 0 }, ...(Array.isArray(titleSx) ? titleSx : [titleSx])]}>
      {title}
    </Typography>
  </Box>
);

export default SectionHeading;
