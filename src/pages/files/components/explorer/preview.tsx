import { Empty, Image } from 'antd';

type PreviewFileProps = {
  src?: API.FileListItem;
};

const PreviewFile: React.FC<PreviewFileProps> = (props) => {
  if (props.src?.url && 'image/jpeg'.includes(props.src?.type.toLowerCase())) {
    return <Image src={props.src.url} />;
  }
  return <Empty />;
};

export default PreviewFile;
