import { useState, useEffect, useRef } from 'react';
import { Box, Typography, IconButton, Button } from '@mui/material';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { colors, sectionSpacing, primaryButtonSx } from '../utils/globalVariables';
import SectionHeading from './sectionHeading';
import { useTranslation } from 'react-i18next';

type Project = {
  title: string;
  descriptionKey: string;
  image: string;
  icons: string[];
  src: string;
};

const STACK = ['/react.svg', '/typescript.svg', '/mui.svg'];

const projectsData: Project[] = [
  {
    title: 'ZDRAVPO Pardubice',
    descriptionKey: 'project_zdravpo_desc',
    image: '/files/zdravpo.webp',
    icons: STACK,
    src: 'https://www.zdravpopardubice.cz',
  },
  {
    title: 'ePoukaz online',
    descriptionKey: 'project_epoukaz_desc',
    image: '/files/epoukaz.webp',
    icons: STACK,
    src: 'https://epoukazonline.cz/vydejna',
  },
  {
    title: 'UchovejLépe.cz',
    descriptionKey: 'project_uchovejlepe_desc',
    image: '/files/uchovejlepe.webp',
    icons: STACK,
    src: 'https://www.uchovejlepe.cz',
  },
  {
    title: 'Restaart',
    descriptionKey: 'project_restaart_desc',
    image: '/files/restaart.webp',
    icons: STACK,
    src: 'https://www.restaart.cz',
  },
];

const SLIDE_MS = 500;

const ProjectsSection = () => {
  const { t } = useTranslation();
  const count = projectsData.length;
  // Clone the last slide in front and the first slide at the end so the
  // carousel can loop seamlessly: after animating onto a clone we jump
  // (without transition) to the real slide at the other end.
  const slides = [projectsData[count - 1], ...projectsData, projectsData[0]];

  const [index, setIndex] = useState(1);
  const [animated, setAnimated] = useState(true);
  const indexRef = useRef(1);
  const animatingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const settle = () => {
    if (!animatingRef.current) return;
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    const current = indexRef.current;
    if (current === count + 1) {
      indexRef.current = 1;
      setAnimated(false);
      setIndex(1);
    } else if (current === 0) {
      indexRef.current = count;
      setAnimated(false);
      setIndex(count);
    }
    animatingRef.current = false;
  };

  const go = (direction: 1 | -1) => {
    if (animatingRef.current) return;
    animatingRef.current = true;
    indexRef.current += direction;
    setAnimated(true);
    setIndex(indexRef.current);
    // Fallback in case transitionend does not fire (e.g. background tab).
    timeoutRef.current = setTimeout(settle, SLIDE_MS + 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const arrowSx = { bgcolor: colors.primary, color: colors.white, borderRadius: 0, p: { lg: '12px', md: '8px', xs: '4px' }, '&:hover': { bgcolor: colors.primaryHover } };

  return (
    <Box id="projects" component="section" sx={{ border: `1px solid ${colors.border}`, mt: sectionSpacing.mt, position: 'relative', overflow: 'hidden' }}>
      <Box component="img" src="/projects_layers_top_right.svg" alt="" aria-hidden="true" loading="lazy" sx={{ position: 'absolute', right: 0, top: 0, height: { xl: '30%', lg: '25%', md: '16%', sm: '10%' }, zIndex: 0, pointerEvents: 'none', display: { sm: 'unset', xs: 'none' } }} />
      <Box component="img" src="/projects_layers_bottom_left.svg" alt="" aria-hidden="true" loading="lazy" sx={{ position: 'absolute', left: 0, bottom: 0, height: { lg: '70%', md: '45%', sm: '30%' }, zIndex: 0, pointerEvents: 'none', display: { sm: 'unset', xs: 'none' } }} />
      <SectionHeading overline={t('projects_overline')} title={t('projects_title')} sx={{ p: sectionSpacing.p, borderBottom: `1px solid ${colors.border}`, position: 'relative', zIndex: 1 }} />

      <Box sx={{ position: 'relative', overflow: 'hidden', zIndex: 1 }}>
        <Box
          onTransitionEnd={(e) => { if (e.target === e.currentTarget && e.propertyName === 'transform') settle(); }}
          sx={{ display: 'flex', width: `${slides.length * 100}%`, transform: `translateX(-${(index * 100) / slides.length}%)`, transition: animated ? `transform ${SLIDE_MS}ms ease-in-out` : 'none' }}
        >
          {slides.map((project, i) => (
            <Box key={i} aria-hidden={i !== index} sx={{ width: `${100 / slides.length}%`, flexShrink: 0, p: sectionSpacing.p, boxSizing: 'border-box' }}>
              <Box sx={{ display: 'flex', flexDirection: { lg: 'row', xs: 'column' }, gap: { sm: '40px', xs: '20px' }, alignItems: 'center' }}>
                <Box sx={{ flex: 1.2, display: { lg: 'none', xs: 'flex' }, justifyContent: 'center' }}>
                  <Box component="img" src={project.image} alt={project.title} width={1400} height={875} decoding="async" sx={{ width: { md: '80%', xs: '100%' }, height: 'auto', borderRadius: '4px' }} />
                </Box>
                <Box sx={{ flex: 1 }}>
                  <Typography variant="h3" sx={{ fontWeight: 'bold', color: colors.white, mb: '24px', fontSize: { lg: '44px', md: '44px', sm: '40px', xs: '36px' } }}>{project.title}</Typography>
                  <Box sx={{ display: 'flex', gap: '16px', mb: { sm: '32px', xs: '20px' } }}>
                    {project.icons.map((icon, j) => (
                      <Box component="img" key={j} src={icon} alt="" aria-hidden="true" width={32} height={32} loading="lazy" sx={{ width: '32px', height: '32px', objectFit: 'contain' }} />
                    ))}
                  </Box>
                  <Typography sx={{ color: colors.text, fontSize: { lg: '20px', md: '18px', sm: '16px', xs: '14px' }, lineHeight: '1.8', textAlign: 'justify' }}>
                    {t(project.descriptionKey)}
                  </Typography>
                  <Typography sx={{ color: colors.primary, fontSize: { lg: '16px', md: '15px', xs: '13px' }, lineHeight: '1.6', mt: '16px', fontStyle: 'italic' }}>
                    {'>'} {t('project_frontend_note')}
                  </Typography>
                  <Button variant="contained" target="_blank" rel="noopener noreferrer" href={project.src} disableRipple tabIndex={i === index ? 0 : -1} sx={[primaryButtonSx, { mt: { sm: '40px', xs: '20px' } }]}>
                    {t('projects_view_btn')}
                  </Button>
                </Box>
                <Box sx={{ flex: 1.2, display: { lg: 'flex', xs: 'none' }, justifyContent: 'center' }}>
                  <Box component="img" src={project.image} alt={project.title} width={1400} height={875} decoding="async" sx={{ width: '80%', height: 'auto', borderRadius: '4px' }} />
                </Box>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'center', gap: '16px', mt: { sm: '20px', xs: '15px' }, pb: { md: '40px', sm: '25px', xs: '15px' }, position: 'relative', zIndex: 2 }}>
        <IconButton onClick={() => go(-1)} disableRipple aria-label="Previous project" sx={arrowSx}>
          <KeyboardArrowLeftIcon fontSize="large" />
        </IconButton>
        <IconButton onClick={() => go(1)} disableRipple aria-label="Next project" sx={arrowSx}>
          <KeyboardArrowRightIcon fontSize="large" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default ProjectsSection;
