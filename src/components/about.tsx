import { Box, Typography } from '@mui/material';
import { colors } from '../utils/globalVariables';
import { useTranslation } from 'react-i18next';

const About = () => {
  const { t } = useTranslation();

  return (
    <Box id="about" sx={{ position: 'relative', overflow: 'hidden', border: `1px solid ${colors.border}`, backgroundColor: 'rgba(255, 255, 255, 0.05)', py: { md: '80px', sm: '40px', xs: '20px' }, mt: { md: '150px', sm: '100px', xs: '80px' } }}>
      <Box component="img" src="/about_layers.svg" alt="" sx={{ position: 'absolute', right: 0, top: { xl: -3, lg: -50, md: -70, sm: -60 }, height: '100%', width: { lg: '90%', md: '100%' }, zIndex: 0, pointerEvents: 'none', display: { sm: 'unset', xs: 'none' } }} />
      <Box sx={{ p: { md: '0px 50px', sm: '0px 25px', xs: '0px 15px' } }}>
        <Box sx={{ width: { md: '70%', sm: '90%' } }}>
          <Typography variant="overline" sx={{ color: colors.primary, display: 'block', mb: '8px', fontSize: '12px', letterSpacing: '1px' }}>
            {'>'} {t('about_overline')}
          </Typography>
          <Typography variant="h2" sx={{ fontWeight: 800, color: colors.white, mb: { md: '40px', sm: '20px', xs: '15px' }, fontSize: { lg: '64px', md: '54px', sm: '48px', xs: '44px' }, textTransform: 'uppercase' }}>
            {t('about_title')}
          </Typography>
          <Typography sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' }, lineHeight: '1.6', textAlign: 'justify' }}>
            {t('about_description')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default About;