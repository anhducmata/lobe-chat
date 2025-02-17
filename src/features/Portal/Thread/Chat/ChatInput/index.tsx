'use client';

import { memo } from 'react';

import { ActionKeys } from '@/features/ChatInput/ActionBar/config';
import DesktopChatInput, { FooterRender } from '@/features/ChatInput/Desktop';
import { useGlobalStore } from '@/store/global';
import { systemStatusSelectors } from '@/store/global/selectors';

import Footer from './Footer';
import TextArea from './TextArea';

const leftActions = ['stt', 'portalToken'] as ActionKeys[];

const rightActions = [] as ActionKeys[];

const renderTextArea = (onSend: () => void) => <TextArea onSend={onSend} />;
const renderFooter: FooterRender = (props) => <Footer {...props} />;

const Desktop = memo(() => {
  const [inputHeight, hideThreadLimitAlert, updateSystemStatus] = useGlobalStore((s) => [
    systemStatusSelectors.threadInputHeight(s),
    systemStatusSelectors.systemStatus(s).hideThreadLimitAlert,
    s.updateSystemStatus,
  ]);

  return (
    <>
      {!hideThreadLimitAlert}
      <DesktopChatInput
        inputHeight={inputHeight}
        leftActions={leftActions}
        onInputHeightChange={(height) => {
          updateSystemStatus({ threadInputHeight: height });
        }}
        renderFooter={renderFooter}
        renderTextArea={renderTextArea}
        rightActions={rightActions}
      />
    </>
  );
});

export default Desktop;
