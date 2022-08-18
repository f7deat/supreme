import BraftEditor from "braft-editor";
import 'braft-editor/dist/index.css';
import 'braft-extensions/dist/table.css'
import React, { useEffect, useState } from "react";
import { useIntl } from "umi";
import Table from 'braft-extensions/dist/table';

BraftEditor.use(Table({
    includeEditors: ['pro-braft-editor']
}))

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

    // @ts-ignore
    return <BraftEditor {...props} language={language} id="pro-braft-editor" />
}

export default ProBraftEditor
