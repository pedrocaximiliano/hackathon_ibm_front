
import React, { useState, useEffect } from 'react';

import { WebView } from 'react-native-webview';

export default function wastsonMsg() {


        // const [loading, setLoading] = useState(true);
        // const [key, setKey] = useEffect();

        // useEffect(() => {
        //         //requisitar a chave para iniciar a conversa com o watson e salvar na variavel key e concatenar no link da webView
        //         try {
        //             fetch(`minha chamada`
        //             ).then(
        //                 response => response.json()
        //             ).then(
        //                 data => (setKey(data), setLoading(false)),
        //             )
        //         } catch (error) {
        //             alert('erro, verifique a conexão com a internet');
        //         }
        //     }, [])

        return (
                <WebView
                    source={{ uri: 'https://web-chat.global.assistant.watson.cloud.ibm.com/preview.html?region=us-east&integrationID=90cbf610-ed15-4142-82d2-1af28a913e0d&serviceInstanceID=d3441a71-48de-4218-a6ea-a38d5e69e42f' }}
                />
        );
}
