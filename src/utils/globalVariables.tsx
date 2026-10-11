export const colors = {
    background: '#0A0A0A',
    primary: '#EC5B13',
    primaryHover: '#D14B14',
    border: '#64748B',
    text: '#94A3B8',
    textHightlight: '#FFFFFF',
    black: '#000000',
    white: '#FFFFFF'
};

/** Shared responsive values used across sections. */
export const sectionSpacing = {
    mt: { md: '150px', sm: '100px', xs: '80px' },
    p: { md: '50px', sm: '25px', xs: '15px' },
};

/** Primary (orange) call-to-action button. */
export const primaryButtonSx = {
    bgcolor: colors.primary,
    color: colors.white,
    borderRadius: 0,
    px: { md: 4, xs: 3 },
    py: { md: 1.5, xs: 1.2 },
    fontSize: { md: '16px', sm: '14px', xs: '12px' },
    fontWeight: 'bold',
    width: 'fit-content',
    '&:hover': { bgcolor: colors.primaryHover },
};
