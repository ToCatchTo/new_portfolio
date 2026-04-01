import { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { colors } from '../utils/globalVariables';
import { useTranslation } from 'react-i18next';

const projectsData = [
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
  {
    title: 'DISCIT',
    descriptionKey: 'project_discit_desc',
    image: '/files/discit_mini.png',
    icons: ['/html.svg', '/react.svg', '/typescript.svg', '/mui.svg', '/firestore.svg'],
    src: 'https://disc-it.vercel.app',
  },
];

const ProjectsSection = () => {
  const { t } = useTranslation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % projectsData.length);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 500);
  };

  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + projectsData.length) % projectsData.length);
    timeoutRef.current = setTimeout(() => setIsAnimating(false), 500);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <Box id="projects" component="section" sx={{ border: `1px solid ${colors.border}`, mt: { md: '150px', sm: '100px', xs: '80px' }, position: 'relative', overflow: 'hidden' }}>
      <Box component="img" src="/projects_layers_top_right.svg" sx={{ position: 'absolute', right: 0, top: 0, height: { xl: '30%', lg: '25%', md: '16%', sm: '10%' }, zIndex: 0, pointerEvents: 'none', display: { sm: 'unset', xs: 'none' } }} />
      <Box component="img" src="/projects_layers_bottom_left.svg" sx={{ position: 'absolute', left: 0, bottom: 0, height: { lg: '70%', md: '45%', sm: '30%' }, zIndex: 0, pointerEvents: 'none', display: { sm: 'unset', xs: 'none' } }} />
      <Box sx={{ p: { md: '50px', sm: '25px', xs: '15px' }, borderBottom: `1px solid ${colors.border}`, position: 'relative', zIndex: 1 }}>
        <Typography variant="overline" sx={{ color: colors.primary, display: 'block', mb: { sm: '8px', xs: '0px' }, fontSize: '12px', letterSpacing: '1px' }}>
          {'>'} {t('projects_overline')}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: colors.white, fontSize: { lg: '64px', md: '54px', sm: '48px', xs: '44px' }, textTransform: 'uppercase', m: 0 }}>
          {t('projects_title')}
        </Typography>
      </Box>

      <Box sx={{ position: 'relative', height: { lg: '500px', xs: 'auto' } }}>
        <Box sx={{ display: 'flex', width: `${projectsData.length * 100}%`, transform: `translateX(-${(currentIndex * 100) / projectsData.length}%)`, transition: 'transform 0.5s ease-in-out' }}>
          {projectsData.map((project, index) => (
            <Box key={index} sx={{ width: `${100 / projectsData.length}%`, flexShrink: 0, p: { md: '50px', sm: '25px', xs: '15px' }, boxSizing: 'border-box' }}>
              <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, gap: { sm: '40px', xs: '20px' }, alignItems: 'center' }}>
                <Box sx={{ flex: 1.2, display: { lg: 'none', xs: 'flex' }, justifyContent: 'center' }}>
                  <Box component="img" src={project.image} alt={project.title} sx={{ width: { md: '80%', xs: '100%' }, height: 'auto', borderRadius: '4px' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: colors.white, mb: '24px', fontSize: { lg: '44px', md: '44px', sm: '40px', xs: '36px' } }}>{project.title}</Typography>
                  <Box sx={{ display: 'flex', gap: '16px', mb: { sm: '32px', xs: '20px' } }}>
                    {project.icons.map((icon, i) => (
                      <Box component="img" key={i} src={icon} sx={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    ))}
                  </Box>
                  <Typography sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' }, lineHeight: '1.8', textAlign: 'justify' }}>
                    {t(project.descriptionKey)}
                  </Typography>
                  <Button variant="contained" target="_blank" href={project.src} disableRipple sx={{ bgcolor: colors.primary, borderRadius: 0, px: { md: 4, xs: 3 }, py: { md: 1.5, xs: 1.2 }, fontSize: { md: '16px', sm: '14px', xs: '12px' }, width: 'fit-content', mt: { sm: '40px', xs: '20px' }, fontWeight: 'bold', '&:hover': { bgcolor: colors.primaryHover } }}>
                    {t('projects_view_btn')}
                  </Button>
                </Box>
                <Box sx={{ flex: 1.2, display: { lg: 'flex', xs: 'none' }, justifyContent: 'center' }}>
                  <Box component="img" src={project.image} alt={project.title} sx={{ width: '80%', height: 'auto', borderRadius: '4px' }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', mt: { sm: '20px', xs: '15px' }, pb: { md: '40px', sm: '25px', xs: '15px' }, position: 'relative', zIndex: 2 }}>
        <IconButton onClick={handlePrev} disableRipple sx={{ bgcolor: colors.primary, color: colors.white, borderRadius: 0, p: { lg: '12px', md: '8px', xs: '4px' }, '&:hover': { bgcolor: colors.primaryHover } }}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={handleNext} disableRipple sx={{ bgcolor: colors.primary, color: colors.white, borderRadius: 0, p: { lg: '12px', md: '8px', xs: '4px' }, '&:hover': { bgcolor: colors.primaryHover } }}>
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProjectsSection;