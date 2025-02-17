import { ModelProviderCard } from '@/types/llm';

// ref: https://docs.together.ai/docs/chat-models
// ref: https://www.together.ai/pricing
const TogetherAI: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 4096,
      description: 'DeepSeek R1 671B',
      displayName: 'DeepSeek R1 (671B) Deep thinking',
      enabled: true,
      id: 'deepseek-ai/DeepSeek-R1',
    },
    {
      contextWindowTokens: 4096,
      description: 'DeepSeek R1 671B',
      displayName: 'DeepSeek R1 (671B) Deep thinking',
      enabled: true,
      id: 'deepseek-ai/DeepSeek-R1',
    },
    {
      contextWindowTokens: 4096,
      description: 'DeepSeek R1 671B',
      displayName: 'DeepSeek R1 Distill Llama 70B Deep thinking',
      enabled: true,
      id: 'deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
    },
    {
      contextWindowTokens: 4096,
      description: 'DeepSeek V3',
      displayName: 'DeepSeek LLM Chat (671B)',
      enabled: true,
      id: 'deepseek-ai/DeepSeek-V3',
    },
  ],
  checkModel: 'deepseek-ai/DeepSeek-R1-Distill-Llama-70B',
  description:
    'Together AI 致力于通过创新的 AI 模型实现领先的性能，提供广泛的自定义能力，包括快速扩展支持和直观的部署流程，满足企业的各种需求。',
  enabled: true,
  id: 'togetherai',
  modelList: { showModelFetcher: true },
  modelsUrl: 'https://docs.together.ai/docs/chat-models',
  name: 'Chat Mata Others',
  settings: {
    sdkType: 'openai',
    showModelFetcher: true,
  },
  url: 'https://www.together.ai',
};

export default TogetherAI;
