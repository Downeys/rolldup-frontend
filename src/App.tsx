import { ApplicationInsights } from '@microsoft/applicationinsights-web';
import { ReactPlugin, withAITracking } from '@microsoft/applicationinsights-react-js';
import { ClickAnalyticsPlugin } from '@microsoft/applicationinsights-clickanalytics-js';

import Router from "./Router/Router"
import config from './config/config';

function App() {
  return (
        <Router />
    )
}

let exportComponent;

if(config.EDGE.insightsConnectionString) {
    const reactPlugin = new ReactPlugin();
    const clickPluginInstance = new ClickAnalyticsPlugin();
    const clickPluginConfig = {
        autoCapture: true,
        useDefaultContentNameOrId: true,
    };
    const appInsights = new ApplicationInsights({
        config: {
            connectionString: config.EDGE.insightsConnectionString,
            enableAutoRouteTracking: true,
            extensions: [reactPlugin, clickPluginInstance],
            extensionConfig: {
                [clickPluginInstance.identifier]: clickPluginConfig
            },
            enableCorsCorrelation: true,
            enableRequestHeaderTracking: true,
            enableResponseHeaderTracking: true,
            autoTrackPageVisitTime: true,
        }
    });
    appInsights.loadAppInsights();
    
    exportComponent = withAITracking(reactPlugin, App);
} else {
    exportComponent = App;
}

export default exportComponent;
