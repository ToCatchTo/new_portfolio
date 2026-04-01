import { Box, Typography, Link } from '@mui/material';
import { colors } from '../utils/globalVariables';
import { useTranslation } from 'react-i18next';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <Box component="footer" sx={{ border: `1px solid ${colors.border}`, p: { md: '25px 50px', sm: '20px 25px', xs: '20px 15px' }, mt: '50px' }}>
            <Box sx={{ display: 'flex', justifyContent: { sm: 'space-between', xs: 'center' }, alignItems: 'center', flexWrap: 'wrap', rowGap: '10px', columnGap: '64px' }}>
                <Typography sx={{ color: colors.text, fontSize: { xl: '20px', lg: '18px', md: '16px' }, fontWeight: 400 }}>© 2026 Tomáš Terč</Typography>
                <Box sx={{ display: 'flex', gap: { sm: '32px', xs: '16px' } }}>
                    <Link href="mailto:tomas@terc.cz" underline="none" sx={{ color: colors.text, fontSize: { xl: '20px', lg: '18px', md: '16px' }, fontWeight: 400, transition: '0.2s', '&:hover': { color: colors.primary } }}>
                        {t('footer_email')}
                    </Link>
                    <Link component="a" href="https://www.linkedin.com/in/tomas-terc" target="_blank" underline="none" sx={{ color: colors.text, fontSize: { xl: '20px', lg: '18px', md: '16px' }, fontWeight: 400, transition: '0.2s', '&:hover': { color: colors.primary } }}>
                        {t('footer_linkedin')}
                    </Link>
                </Box>
            </Box>
        </Box>
    );
}

export default Footer;