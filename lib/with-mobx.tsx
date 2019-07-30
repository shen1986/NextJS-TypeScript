import React from 'react';
import { AppState } from '../stores/store';

const isServer = typeof window === 'undefined';
const __NEXT_REDUX_STORE__ = '__NEXT_REDUX_STORE__';

function getOrCreateStore(initialState? : any) {
    if (isServer) {
        return new AppState(initialState);
    }

    if (!window[__NEXT_REDUX_STORE__]) {
        window[__NEXT_REDUX_STORE__] = new AppState(initialState);
    }
    return window[__NEXT_REDUX_STORE__];
}

export default (Comp: any) => {
    class WithMobxApp extends React.Component {
        private mobxStore: any;
        constructor(props) {
            super(props);
            this.mobxStore = getOrCreateStore(
                props.initialMobxState,
            );
        }

        render() {
            const {
                Component,
                pageProps,
                ...rest
            } = (this.props as any);

            if (pageProps) {
                pageProps.test = '123';
            }

            console.log('this.mobxStore', this.mobxStore);
            return (
                <Comp
                    Component= { Component }
                    pageProps = { pageProps }
                    {...rest }
                    mobxStore = { this.mobxStore }
                />
            );
        }
    }

    (WithMobxApp as any).getInitialProps = async (ctx: any) => {
        let mobxStore;

        mobxStore = getOrCreateStore();

        ctx.mobxStore = mobxStore;

        let appProps = {};
        if (typeof Comp.getInitialProps === 'function') {
            appProps = await Comp.getInitialProps(ctx);
        }

        return {
            ...appProps,
            initialMobxState: mobxStore,
        };
    };

    return WithMobxApp;
};
