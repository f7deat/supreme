import BraftEditor from "braft-editor";
import 'braft-editor/dist/index.css';
import React, { useEffect, useState } from "react";
import { useIntl } from "umi";

const ProBraftEditor: React.FC = (props) => {

    const intl = useIntl();
    const [language, setLanguage] = useState<'zh' | 'zh-hant' | 'en' | 'tr' | 'ru' | 'jpn' | 'kr' | 'pl' | 'fr' | 'vi-vn'>('en');

    useEffect(() => {
        switch (intl.locale) {
            case 'vi-VN':
                setLanguage('vi-vn')
                break;
            default:
                setLanguage('en')
                break;
        }
    }, [intl.locale])

    return (
        <BraftEditor {...props} language={language} style={{ border: '1px solid #d1d1d1' }} />
    )
}
export default ProBraftEditor
