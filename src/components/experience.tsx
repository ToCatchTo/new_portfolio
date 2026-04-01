import { Box, Typography } from '@mui/material';
import { colors } from '../utils/globalVariables';
import ExperienceColumn from './experienceColumn';
import { useTranslation } from 'react-i18next';

const programmingLanguages = [
  { name: 'HTML', icon: '/html.svg' },
  { name: 'CSS', icon: '/css.svg' },
  { name: 'JavaScript', icon: '/javascript.svg' },
  { name: 'TypeScript', icon: '/typescript.svg' },
  { name: 'Java', icon: '/java.svg' },
  { name: 'C#', icon: '/csharp.svg' },
  { name: 'SQL', icon: '/sql.svg' },
  { name: 'PHP', icon: '/php.svg' },
  { name: 'Python', icon: '/python.svg' }
];

const technologies = [
  { name: 'React', icon: '/react.svg' },
  { name: 'MUI', icon: '/mui.svg' },
  { name: 'Sass', icon: '/sass.svg' },
  { name: 'Latte', icon: '/latte.svg' },
  { name: 'Firestore', icon: '/firestore.svg' },
  { name: 'MongoDB', icon: '/mongodb.svg' },
  { name: 'Next.js', icon: '/nextjs.svg' },
  { name: 'Git', icon: '/git.svg' }
];

const tools = [
  { name: 'Visual Studio Code', icon: '/vscode.svg' },
  { name: 'IntelliJ Idea', icon: '/idea.svg' },
  { name: 'Adobe Illustrator', icon: '/adobe_illustrator.svg' },
  { name: 'Adobe XD', icon: '/adobe_xd.svg' },
  { name: 'Adobe Photoshop', icon: '/adobe_photoshop.svg' },
  { name: 'Figma', icon: '/figma.svg' }
];

const Experience = () => {
  const { t } = useTranslation();

  return (
    <Box id="experience" component="section" sx={{ border: `1px solid ${colors.border}`, mt: { md: '150px', sm: '100px', xs: '80px' } }}>
      <Box sx={{ p: { md: '50px', sm: '25px', xs: '15px' }, borderBottom: `1px solid ${colors.border}` }}>
        <Typography variant="overline" sx={{ color: colors.primary, display: 'block', mb: '8px', fontSize: '12px', letterSpacing: '1px' }}>
          {'>'} {t('experience_overline')}
        </Typography>
        <Typography variant="h2" sx={{ fontWeight: 800, color: colors.white, fontSize: { lg: '64px', md: '54px', sm: '48px', xs: '44px' }, textTransform: 'uppercase', m: 0 }}>
          {t('experience_title')}
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
        {/* Klíče pro titulky sloupců */}
        <ExperienceColumn title={t('exp_col_languages')} items={programmingLanguages} hasBorder={true} />
        <ExperienceColumn title={t('exp_col_tech')} items={technologies} hasBorder={true} />
        <ExperienceColumn title={t('exp_col_tools')} items={tools} hasBorder={false} />
      </Box>
    </Box>
  );
};

export default Experience;