import { Box, Typography } from '@mui/material';
import { colors } from '../utils/globalVariables';

type HeaderCardProps = {
	miniText: string,
	title: string
}

const HeaderCard = ({ miniText, title }: HeaderCardProps) => {
	return (
		<Box sx={{ border: `1px solid ${colors.border}`, padding: { md: '25px', sm: '20px', xs: '15px' }, display: 'flex', flexDirection: 'column', gap: { md: '10px', sm: '5px', xs: '0px' }, width: '100%' }}>
			<Typography variant="overline" sx={{ color: colors.primary, letterSpacing: '0.1em' }}>{'>'} {miniText}</Typography>
			<Typography variant='h4' sx={{ fontSize: { md: '25px', sm: '22px', xs: '20px' }, fontWeight: '500', color: colors.textHightlight }}>{title}</Typography>
		</Box>
	);
}

export default HeaderCard;