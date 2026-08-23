import type Lenis from 'lenis';

export const lenisStore: { instance: Lenis | undefined } = $state({ instance: undefined });
