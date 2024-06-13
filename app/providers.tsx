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
            components: {
                Table: {
                    headerBg: '#203510',
                    headerColor: '#ffffff',
                    headerSortHoverBg: '#3E4F32',
                    headerSortActiveBg: '#3E4F32',
                },
            },
            // algorithm: theme.defaultAlgorithm,
        }}>{children}</ConfigProvider>
}

{/* <ConfigProvider
theme={{
    components: {
        Table: {
            headerBg: '#203510',
            headerColor: '#ffffff',
            headerSortHoverBg: '#3E4F32',
            headerSortActiveBg: '#3E4F32',
        },
    },
    token: {
        // colorText: '#ffffff'
        colorTextHeading: '#ffffff'
    },
}}
> */}