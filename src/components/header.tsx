import { Box } from '@mui/material';
import HeroSection from './heroSection';
import TechnologiesSmall from './technologiesSmall';
import HeaderCard from './headerCard';
import { useTranslation } from 'react-i18next';

const Header = () => {
  const { t } = useTranslation();

  return (
    <Box component="header" sx={{ mt: '30px' }}>
      <Box sx={{ display: 'flex', gap: '30px' }}>
        <HeroSection />
        <Box sx={{ display: { lg: 'unset', xs: 'none' }, width: '31%' }}>
          <TechnologiesSmall />
        </Box>
      </Box>
      <Box sx={{ display: 'flex', gap: '30px', mt: '30px', flexWrap: { md: 'nowrap', xs: 'wrap' } }}>
        <Box sx={{ display: { lg: 'none', xs: 'flex' }, width: '100%', justifyContent: 'center' }}>
          <TechnologiesSmall />
        </Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              lg: 'repeat(4, 1fr)',
              md: '1fr',
              sm: 'repeat(2, 1fr)',
              xs: '1fr'
            },
            gap: '30px',
            width: '100%'
          }}
        >
          <HeaderCard miniText={t('header_loc_label')} title={t('header_loc_value')} />
          <HeaderCard miniText={t('header_status_label')} title={t('header_status_value')} />
          <HeaderCard miniText={t('header_spec_label')} title={t('header_spec_value')} />
          <HeaderCard miniText={t('header_study_label')} title={t('header_study_value')} />
        </Box>
      </Box>
    </Box>
  );
};

export default Header;