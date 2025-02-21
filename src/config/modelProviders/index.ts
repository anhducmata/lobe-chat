import { ChatModelCard, ModelProviderCard } from '@/types/llm';

import OpenAIProvider from './openai';
import TogetherAIProvider from './togetherai';
import XAIProvider from './xai';

/**
 * @deprecated
 */
export const LOBE_DEFAULT_MODEL_LIST: ChatModelCard[] = [
  OpenAIProvider.chatModels,
  TogetherAIProvider.chatModels,
  XAIProvider.chatModels
].flat();

export const DEFAULT_MODEL_PROVIDER_LIST = [
  OpenAIProvider,
  TogetherAIProvider,
  XAIProvider
];

export const filterEnabledModels = (provider: ModelProviderCard) => {
  return provider.chatModels.filter((v) => v.enabled).map((m) => m.id);
};

export const isProviderDisableBroswerRequest = (id: string) => {
  const provider = DEFAULT_MODEL_PROVIDER_LIST.find((v) => v.id === id && v.disableBrowserRequest);
  return !!provider;
};

export { default as OpenAIProviderCard } from './openai';
export { default as TogetherAIProviderCard } from './togetherai';
export { default as XAIProviderCard } from './xai';