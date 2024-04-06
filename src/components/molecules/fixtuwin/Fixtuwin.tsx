import React from 'react';
import {
  Link,
  ContainerDownload,
  TextCV,
  IconFixtuwin,
} from './fixtuwin.style';
import Writing from '../../../copywriting/Writing';

const Fixtuwin: React.FC = () => {
  const texts = Writing();
  return (
    <Link href={'https://fixtuwin.com.ar/'} target='_blank'>
      <ContainerDownload>
        <IconFixtuwin src='https://firebasestorage.googleapis.com/v0/b/fixtuwin.appspot.com/o/logoPelota.png?alt=media&token=12977e31-9e3e-4b17-82f0-9dc496b1c08c' />
        <TextCV>Fixtuwin</TextCV>
        <span className='textMenu'>{texts.fixtuwin}</span>
      </ContainerDownload>
    </Link>
  );
};

export default Fixtuwin;
