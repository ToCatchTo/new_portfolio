import { useState, useEffect } from 'react';
import { Typography, Button, Box, Stack, Divider, IconButton, Collapse, Backdrop } from '@mui/material';
import { colors } from '../utils/globalVariables';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const NAV_ITEMS = [
    { label: t('nav_about'), href: '#about' },
    { label: t('nav_experience'), href: '#experience' },
    { label: t('nav_projects'), href: '#projects' },
    { label: t('nav_contact'), href: '#contact' },
  ];

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setMobileMenuOpen(false);
  };

  const handleMobileNavClick = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  // Společný styl pro čáry hamburgeru
  const lineStyle = {
    width: '30px',
    height: '2px',
    backgroundColor: colors.textHightlight,
    transition: 'all 0.3s ease-in-out',
    position: 'absolute',
  };

  return (
    <>
      <Backdrop
        open={mobileMenuOpen}
        onClick={handleMobileNavClick}
        sx={{
          color: '#fff',
          zIndex: 99,
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(3px)'
        }}
      />

      <Box id='home' component="nav" sx={{ position: 'relative', zIndex: 100 }}>

        {/* HLAVNÍ LIŠTA NAVIGACE */}
        <Box sx={{
          backgroundColor: 'rgba(10, 10, 10, 0.95)',
          border: `1px solid ${colors.border}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: { sm: '20px 25px', xs: '20px 15px' },
          position: 'relative',
          zIndex: 101
        }}>

          {/* Brand/Logo */}
          <Box component="a" href="#home" onClick={handleMobileNavClick} sx={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <Box component="img" src='/logo.svg' sx={{ width: '35px', height: '35px' }} />
            <Typography variant="h6" sx={{ fontWeight: 'bold', color: colors.textHightlight, fontSize: { md: '25px', sm: '22px' }, display: { lg: 'unset', md: 'none', xs: 'unset' } }}>
              TT_SYSTEM
            </Typography>
          </Box>

          {/* --- DESKTOP ZOBRAZENÍ --- */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { lg: '40px', md: '20px' } }}>
            {NAV_ITEMS.map((item) => (
              <Button disableRipple key={item.href} href={item.href} sx={{ color: colors.textHightlight, fontSize: '16px', letterSpacing: '2.4px', textTransform: 'uppercase', transition: 'all 0.2s ease-in-out', '&:hover': { color: colors.primary, backgroundColor: 'transparent' } }}>
                {item.label}
              </Button>
            ))}
          </Box>

          {/* CV & Language Switcher */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: { lg: '30px', md: '20px' } }}>
            <Stack direction="row" spacing={1} divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: colors.text }} />}>
              <Button onClick={() => changeLanguage('cz')} disableRipple sx={{ color: i18n.language === 'cz' ? colors.textHightlight : colors.text, fontSize: '16px', fontWeight: 'bold', p: '0', minWidth: '30px', '&:hover': { color: colors.primary, backgroundColor: 'transparent' } }}>
                CZ
              </Button>
              <Button onClick={() => changeLanguage('en')} disableRipple sx={{ color: i18n.language.startsWith('en') ? colors.textHightlight : colors.text, fontSize: '16px', fontWeight: 'bold', p: '0', minWidth: '30px', '&:hover': { color: colors.primary, backgroundColor: 'transparent' } }}>
                EN
              </Button>
            </Stack>
            <Button href='/files/tomas_terc_zivotopis.pdf' download="tomas_terc_zivotopis.pdf" variant="contained" disableRipple sx={{ backgroundColor: colors.primary, color: colors.textHightlight, borderRadius: '0px', padding: '8px 20px', fontWeight: 'bold', fontSize: '16px', transition: 'all 0.2s ease-in-out', '&:hover': { backgroundColor: colors.primaryHover } }}>
              {t('cv_button')}
            </Button>
          </Box>

          {/* --- ANIMOVANÝ HAMBURGER (MOBIL) --- */}
          <IconButton
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            disableRipple
            sx={{
              display: { xs: 'flex', md: 'none' },
              width: '40px',
              height: '40px',
              position: 'relative',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Box sx={{ position: 'relative', width: '30px', height: '20px' }}>
              {/* Horní čára */}
              <Box sx={{
                ...lineStyle,
                top: mobileMenuOpen ? '9px' : '0',
                transform: mobileMenuOpen ? 'rotate(45deg)' : 'rotate(0)'
              }} />
              {/* Prostřední čára */}
              <Box sx={{
                ...lineStyle,
                top: '9px',
                opacity: mobileMenuOpen ? 0 : 1,
                transform: mobileMenuOpen ? 'translateX(-20px)' : 'translateX(0)'
              }} />
              {/* Spodní čára */}
              <Box sx={{
                ...lineStyle,
                top: mobileMenuOpen ? '9px' : '18px',
                transform: mobileMenuOpen ? 'rotate(-45deg)' : 'rotate(0)'
              }} />
            </Box>
          </IconButton>
        </Box>

        {/* ROZBALOVACÍ MOBILNÍ MENU */}
        <Box sx={{ display: { xs: 'block', md: 'none' }, position: 'absolute', top: '100%', left: 0, width: '100%', zIndex: 100 }}>
          <Collapse in={mobileMenuOpen} timeout="auto" unmountOnExit>
            <Box sx={{
              backgroundColor: colors.background,
              border: `1px solid ${colors.border}`,
              borderTop: 'none',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              padding: { sm: '40px 25px', xs: '25px 20px' },
              gap: { sm: '30px', xs: '20px' }
            }}>

              <Box sx={{ display: 'flex', flexDirection: 'column', gap: { sm: '20px', xs: '10px' }, alignItems: 'center' }}>
                {NAV_ITEMS.map((item) => (
                  <Button key={item.href} href={item.href} onClick={handleMobileNavClick} disableRipple sx={{ color: colors.textHightlight, fontSize: '18px', letterSpacing: '2.4px', textTransform: 'uppercase' }}>
                    {item.label}
                  </Button>
                ))}
              </Box>

              <Divider sx={{ width: '50%', bgcolor: colors.border }} />

              <Stack direction="row" spacing={3} divider={<Divider orientation="vertical" flexItem sx={{ bgcolor: colors.text }} />}>
                <Button onClick={() => changeLanguage('cz')} disableRipple sx={{ color: i18n.language === 'cz' ? colors.textHightlight : colors.text, fontSize: '18px', fontWeight: 'bold', p: '0', minWidth: '30px' }}>
                  CZ
                </Button>
                <Button onClick={() => changeLanguage('en')} disableRipple sx={{ color: i18n.language.startsWith('en') ? colors.textHightlight : colors.text, fontSize: '18px', fontWeight: 'bold', p: '0', minWidth: '30px' }}>
                  EN
                </Button>
              </Stack>

              <Button href='/files/tomas_terc_zivotopis.pdf' download="tomas_terc_zivotopis.pdf" variant="contained" onClick={handleMobileNavClick} disableRipple sx={{ backgroundColor: colors.primary, color: colors.textHightlight, borderRadius: '0px', padding: '12px 0', width: '100%', maxWidth: '300px', fontWeight: 'bold', fontSize: '16px', '&:hover': { backgroundColor: colors.primaryHover } }}>
                {t('cv_button')}
              </Button>

            </Box>
          </Collapse>
        </Box>
      </Box>
    </>
  );
};

export default Navbar;