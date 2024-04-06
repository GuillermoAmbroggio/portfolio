import React from 'react';
import CV from './pdf/CVGuillermoAmbroggio.pdf';
import CVI from './pdf/CVGuillermoAmbroggioI.pdf';

import Icon from '../../atoms/icon/Icon';
import { Link, ContainerDownload, TextCV } from './downloadcv.style';
import Writing from '../../../copywriting/Writing';
import useStore from '../../../hooks/useStore';

const DownloadCV: React.FC = () => {
  const texts = Writing();
  const { language } = useStore();

  return (
    <Link
      href={language === 'en' ? CVI : CV}
      download='CVGuillermoAmbroggio.pdf'
    >
      <ContainerDownload>
        <Icon name='fas fa-file-download' size={30} />
        <TextCV>CV</TextCV>
        <span className='textMenu'>{texts.download}</span>
      </ContainerDownload>
    </Link>
  );
};

export default DownloadCV;
