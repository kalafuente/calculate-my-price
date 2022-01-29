import Document, { Head, Html, Main, NextDocumentContext, NextScript } from 'next/document'
import * as React from 'react'
import { ServerStyleSheet } from 'styled-components'
type InterviewProps = {
    styles: any[],
} & DefaultDocumentIProps

export default class InterviewDocument extends Document<InterviewProps> {
    static async getInitialProps(ctx: NextDocumentContext) {
        const sheet = new ServerStyleSheet()
        const originalRenderPage = ctx.renderPage

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                })

            const initialProps = await Document.getInitialProps(ctx)

            return {
                ...initialProps,
                styles: [
                    ...initialProps.styles as any,
                    ...sheet.getStyleElement(),
                ]
            }
        } finally {
            sheet.seal()
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta name='robots' content='noindex' />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}