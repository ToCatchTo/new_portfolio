import { Box, Typography, Button } from '@mui/material';
import { colors } from '../utils/globalVariables';
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
	const { t } = useTranslation();

	return (
		<Box sx={{ position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', border: `1px solid ${colors.border}`, backgroundColor: 'rgba(255, 255, 255, 0.05)', width: { lg: '70%', md: '100%' }, }}>
			<Box component="img" src="/hero_section_layers.svg" alt="Background Graphic" sx={{ position: 'absolute', right: { md: 0, xs: '-70px' }, bottom: 0, height: '100%', width: '60%', objectFit: 'cover', objectPosition: 'right bottom', zIndex: 0, pointerEvents: 'none', display: { sm: 'unset', xs: 'none' } }} />
			<Box sx={{ position: 'relative', zIndex: 1, padding: { md: '50px !important', sm: '30px !important', xs: '15px !important' } }}>
				<Box sx={{ maxWidth: { md: '50%', sm: '70%' } }}>
					<Typography variant="overline" sx={{ color: colors.primary, letterSpacing: '0.1em', fontSize: '12px' }}>{'>'} {t('hero_overline')}</Typography>
					<Typography variant="h1" sx={{ color: colors.textHightlight, fontWeight: 'bold', fontSize: { xl: '86px', lg: '72px', md: '68px', xs: '64px' }, mt: { md: '25px', xs: '15px' }, textWrap: { sm: 'nowrap', xs: 'wrap' } }}>{t('hero_name')}</Typography>
					<Typography variant="body1" sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' }, mt: { md: '25px', xs: '15px' }, lineHeight: 1.6 }}>
						{t('hero_desc_1')}
						<Box component="span" sx={{ color: colors.white, borderBottom: `1px solid ${colors.primary}` }}>
							{t('hero_desc_country')}
						</Box>
						{t('hero_desc_2')}
					</Typography>
					<Box sx={{ display: 'flex', gap: 2, mt: { md: '50px', xs: '30px' } }}>
						<Button href='#contact' variant="contained" disableRipple sx={{ bgcolor: colors.primary, color: colors.white, borderRadius: 0, px: { md: 4, xs: 3 }, py: { md: 1.5, xs: 1.2 }, fontWeight: 'bold', fontSize: { md: '16px', sm: '14px', xs: '12px' }, '&:hover': { bgcolor: colors.primaryHover } }}>
							{t('hero_contact_btn')}
						</Button>
						<Button href='#projects' variant="outlined" disableRipple sx={{ borderColor: colors.border, color: colors.textHightlight, borderRadius: 0, px: { md: 4, xs: 3 }, py: { md: 1.5, xs: 1.2 }, fontWeight: 'bold', fontSize: { md: '16px', sm: '14px', xs: '12px' }, '&:hover': { borderColor: colors.primary, bgcolor: 'transparent' } }}>
							{t('hero_work_btn')}
						</Button>
					</Box>
				</Box>
			</Box>
		</Box>
	);
}

export default HeroSection;