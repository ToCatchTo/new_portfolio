import { Box, Typography } from '@mui/material';
import { colors } from '../utils/globalVariables';

type SkillItem = {
  name: string;
  icon: string;
};
type ExperienceColumnProps = {
  title: string;
  items: SkillItem[];
  hasBorder?: boolean;
}

const ExperienceColumn = ({ title, items, hasBorder }: ExperienceColumnProps) => (
  <Box sx={{ flex: 1, p: { md: '50px', sm: '25px', xs: '15px' }, borderRight: { xs: 'none', md: hasBorder ? `1px solid ${colors.border}` : 'none' }, borderBottom: { xs: hasBorder ? `1px solid ${colors.border}` : 'none', md: 'none' } }}>
    <Typography variant="overline" sx={{ color: colors.border, display: 'block', mb: '8px', fontSize: '12px', letterSpacing: '1px' }}>{title}</Typography>
    <Box sx={{ height: '1px', bgcolor: colors.border, mb: '32px', width: '100%', opacity: 0.5 }} />
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      {items.map(item => (
        <Box key={item.name} sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Box component="img" src={item.icon} sx={{ width: { lg: '30px', md: '27px' }, height: 'auto' }} />
          <Typography sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px' } }}>{item.name}</Typography>
        </Box>
      ))}
    </Box>
  </Box>
);

export default ExperienceColumn;