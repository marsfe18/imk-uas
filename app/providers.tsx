'use client'

import { ConfigProvider, theme } from 'antd';

export function Providers({ children }: { children: React.ReactNode }) {
    return <ConfigProvider
        theme={{
            token: {
                // Seed Token
                colorPrimary: '#6B8557',
                borderRadius: 2,
                // Alias Token
                // colorBgContainer: '#f6ffed',

            },
            components: {
                Table: {
                    headerBg: '#203510',
                    headerColor: '#ffffff',
                    headerSortHoverBg: '#3E4F32',
                    headerSortActiveBg: '#3E4F32',
                    headerBorderRadius: 8,
                    cellFontSize: 20,
                },
            },
            // algorithm: theme.defaultAlgorithm,
        }}>{children}</ConfigProvider>
}