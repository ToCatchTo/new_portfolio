import { useRef, useState } from 'react';
import { Box, Typography, Button, TextField, Alert, Snackbar } from '@mui/material';
import { colors } from '../utils/globalVariables';
import emailjs from '@emailjs/browser';
import { useTranslation } from 'react-i18next';

const Contact = () => {
    const { t } = useTranslation();
    const formRef = useRef<HTMLFormElement>(null);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
    const [emailValue, setEmailValue] = useState('');

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    const customStyles = {
        '& .MuiOutlinedInput-root': {
            borderRadius: 0,
            '& fieldset': { borderColor: colors.border },
            '&:hover fieldset': { borderColor: colors.primary },
            '&.Mui-focused fieldset': { borderColor: colors.primary }
        },
        '& .MuiInputBase-input': { color: colors.white, py: { sm: '18px', xs: '12px' } },
        '& .MuiInputBase-input::placeholder': { color: colors.text, opacity: 1 },
        mb: '24px',
        backgroundColor: 'rgba(255, 255, 255, 0.05)'
    };

    const sendEmail = (e: React.FormEvent) => {
        e.preventDefault();

        if (!emailRegex.test(emailValue)) {
            setStatus({ type: 'error', msg: t('contact_error_email') });
            return;
        }

        if (!formRef.current) return;

        setLoading(true);


        emailjs.sendForm(
            "service_bwo420b",
            "template_ki6mshj",
            formRef.current,
            "js8Epi8tSh9KyZwZr"
        )
            .then(() => {
                setStatus({ type: 'success', msg: t('contact_success') });
                formRef.current?.reset();
            })
            .catch((error) => {
                console.error(error);
                setStatus({ type: 'error', msg: t('contact_error') });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <Box id="contact" sx={{ border: `1px solid ${colors.border}`, p: { md: '40px', sm: '20px', xs: '15px' }, mt: { md: '150px', sm: '100px', xs: '80px' } }}>
            <Box sx={{ mb: { md: '40px', sm: '30px', xs: '20px' } }}>
                <Typography variant="overline" sx={{ color: colors.primary, display: 'block', mb: '8px', fontSize: '12px', letterSpacing: '1px' }}>{'>'} {t('contact_overline')}</Typography>
                <Typography variant="h2" sx={{ fontWeight: 800, color: colors.white, fontSize: { lg: '64px', md: '54px', sm: '48px', xs: '44px' }, textTransform: 'uppercase', m: 0 }}>{t('contact_title')}</Typography>
            </Box>
            <Box component="form" ref={formRef} onSubmit={sendEmail}>
                <Box sx={{ display: 'flex', gap: { md: '24px', xs: '0px' }, flexDirection: { xs: 'column', md: 'row' } }}>
                    {/* Důležité: Přidány 'name' atributy, které musí odpovídat tvé šabloně v EmailJS */}
                    <TextField fullWidth name="user_email" value={emailValue} onChange={(e) => setEmailValue(e.target.value)} placeholder={t('contact_email_placeholder')} variant="outlined" required sx={customStyles} />
                    <TextField fullWidth name="subject" placeholder={t('contact_subject_placeholder')} variant="outlined" required sx={customStyles} />
                </Box>
                <TextField fullWidth name="message" multiline rows={10} placeholder={t('contact_message_placeholder')} variant="outlined" required sx={customStyles} />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mt: { md: '16px', xs: '8px' }, flexDirection: { xs: 'column', md: 'row' }, gap: '24px' }}>
                    <Typography sx={{ color: colors.text, fontSize: '14px', lineHeight: '1.6', textAlign: { md: 'left', xs: 'center' } }}>
                        {t('contact_gdpr_text')} <Box component="span" sx={{ color: colors.primary, cursor: 'pointer', borderBottom: `1px solid ${colors.primary}` }}>{t('contact_more_info')}</Box>
                    </Typography>
                    <Button type="submit" disabled={loading} variant="contained" disableRipple sx={{ bgcolor: colors.primary, color: colors.white, borderRadius: 0, px: { md: 4, xs: 3.5 }, py: { md: 1.5, xs: 1.3 }, fontSize: { md: '16px', sm: '14px', xs: '12px' }, fontWeight: 800, '&:hover': { bgcolor: colors.primaryHover }, '&:disabled': { bgcolor: 'grey.700' } }}>
                        {loading ? t('contact_sending') : t('contact_send')}
                    </Button>
                </Box>
            </Box>
            {/* Snackbar pro potvrzení odeslání */}
            <Snackbar open={!!status} autoHideDuration={6000} onClose={() => setStatus(null)}>
                <Alert onClose={() => setStatus(null)} severity={status?.type} sx={{ width: '100%', borderRadius: 0 }}>
                    {status?.msg}
                </Alert>
            </Snackbar>
        </Box>
    );
};

export default Contact;