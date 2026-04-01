import { Box, Typography, Button, Stack, Divider } from '@mui/material';
import { colors } from '../utils/globalVariables';
import { useTranslation } from 'react-i18next';

const TECH_STACK = [
  { name: 'React', src: '/react.svg' },
  { name: 'TypeScript', src: '/typescript.svg' },
  { name: 'HTML', src: '/html.svg' },
  { name: 'CSS', src: '/css.svg' },
  { name: 'Java', src: '/java.svg' }
];

const TechnologiesSmall = () => {
  const { t } = useTranslation();

  return (
    <Box sx={{ padding: { sm: '25px', xs: '15px' }, border: `1px solid ${colors.border}`, position: 'relative', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
      <Typography variant="overline" sx={{ color: colors.primary, mb: { sm: '20px', xs: '10px' }, letterSpacing: '0.1em' }}>{'>'} {t('tech_small_overline')}</Typography>
      <Typography variant="h3" sx={{ fontWeight: 'bold', color: colors.white, mb: '15px', fontSize: { lg: '48px', md: '44px', sm: '40px', xs: '36px' }, letterSpacing: '1px' }}>{t('tech_small_title')}</Typography>
      <Stack direction={{ md: "column", sm: "row", xs: "column" }} useFlexGap spacing={{ sm: 2.5, xs: 1 }} divider={<Divider orientation="vertical" flexItem sx={{ backgroundColor: colors.border, display: { md: 'none', xs: 'unset' } }} />} sx={{ mb: { md: '50px', sm: '30px', xs: '20px' }, display: 'flex', flexDirection: { md: 'column', sm: 'row' }, alignItems: { md: 'flex-start', sm: 'center' }, flexWrap: 'wrap' }}>
        {TECH_STACK.map((tech) => (
          <Box key={tech.name} sx={{ display: 'flex', alignItems: 'center', gap: { md: 2.5, sm: 1, xs: 1.5 } }}>
            <Box component="img" src={tech.src} sx={{ width: '30px', height: 'auto' }} />
            <Typography sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px', xs: '16px' } }}>{tech.name}</Typography>
          </Box>
        ))}
        <Typography sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px' } }}>{t('tech_small_continue_text')}</Typography>
      </Stack>
      <Button variant="contained" disableRipple sx={{ bgcolor: colors.primary, borderRadius: 0, px: { md: 4, xs: 3 }, py: { md: 1.5, xs: 1.2 }, fontSize: { md: '16px', sm: '14px', xs: '12px' }, width: 'fit-content', '&:hover': { bgcolor: colors.primaryHover } }}>
        {t('tech_small_button')}
      </Button>
    </Box>
  );
};

export default TechnologiesSmall;