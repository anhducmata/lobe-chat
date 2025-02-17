'use client';

import { SiGithub } from '@icons-pack/react-simple-icons';
import { ActionIcon } from '@lobehub/ui';
import { createStyles } from 'antd-style';
import Link from 'next/link';
import { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { Flexbox } from 'react-layout-kit';

import { GITHUB } from '@/const/url';

const useStyles = createStyles(({ css, token }) => {
  return {
    icon: css`
      svg {
        fill: ${token.colorTextDescription};
      }

      &:hover {
        svg {
          fill: ${token.colorText};
        }
      }
    `,
  };
});

const Follow = memo(() => {
  const { styles } = useStyles();
  const { t } = useTranslation('common');
  return (
    <Flexbox gap={8} horizontal>
      <Link href={GITHUB} rel="noreferrer" target={'_blank'}>
        <ActionIcon
          className={styles.icon}
          icon={SiGithub as any}
          title={t('follow', { name: 'GitHub' })}
        />
      </Link>
    </Flexbox>
  );
});

Follow.displayName = 'Follow';

export default Follow;
