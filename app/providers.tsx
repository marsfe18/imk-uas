'use client'

import { ConfigProvider, theme } from 'antd';

export function Providers({ children }: { children: React.ReactNode }) {
    return <ConfigProvider
        theme={{
            token: {
                // Seed Token
                colorPrimary: '#00b96b',
                borderRadius: 2,
                // Alias Token
                // colorBgContainer: '#f6ffed',

            },
            // algorithm: theme.defaultAlgorithm,
        }}>{children}</ConfigProvider>
}