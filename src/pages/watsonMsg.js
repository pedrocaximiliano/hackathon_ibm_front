
import React from 'react';

import { WebView } from 'react-native-webview';

export default function wastsonMsg() {

        return (
                <WebView
                    source={{ uri: 'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-east&integrationID=90cbf610-ed15-4142-82d2-1af28a913e0d&serviceInstanceID=d3441a71-48de-4218-a6ea-a38d5e69e42f' }}
                />
        );
}




