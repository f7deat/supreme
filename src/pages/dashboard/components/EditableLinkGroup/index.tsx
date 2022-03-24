import React, { useState } from 'react';
import { FacebookOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import FacebookSetting from '@/pages/settings/components/facebook';

export type EditableLink = {
  title: string;
  href: string;
  id?: string;
};

type EditableLinkGroupProps = {
  onAdd: () => void;
  links: EditableLink[];
  linkElement: any;
};

const EditableLinkGroup: React.FC<EditableLinkGroupProps> = () => {
  const [facebookSettingVisible, setFacebookSettingVisible] = useState<any>(false);
  return (
    <div className="p-2">
      <Button size="small" type="primary" ghost onClick={() => setFacebookSettingVisible(true)}>
        <FacebookOutlined /> Facebook
      </Button>
      <FacebookSetting visible={facebookSettingVisible} onClose={setFacebookSettingVisible} />
    </div>
  );
};

EditableLinkGroup.defaultProps = {
  links: [],
  onAdd: () => {},
  linkElement: 'a',
};

export default EditableLinkGroup;
