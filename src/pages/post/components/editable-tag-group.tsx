import { Input, Tag, Tooltip } from "antd";
import { useRef, useState } from "react";
import {
    PlusOutlined
} from '@ant-design/icons';

type EditableTagGroupProps = {
    tags: string[];
    setTags: any;
}

const EditableTagGroup: React.FC<EditableTagGroupProps> = (props) => {
    const { tags, setTags } = props;
    const [inputValue, setInputValue] = useState<string>('')
    const [inputVisible, setInputVisible] = useState<boolean>(false)
    const [editInputValue, setEditInputValue] = useState<string>('')
    const [editInputIndex, setEditInputIndex] = useState<number>(-1)
    const input = useRef<any>()

    const handleClose = (removedTag: string) => {
        const newTags = tags.filter(tag => tag !== removedTag);
        setTags(newTags)
    };

    const showInput = () => {
        setInputVisible(true)
        input.current?.focus()
    };

    const handleInputChange = (e: any) => {
        setInputValue(e.target.value)
    };

    const handleInputConfirm = () => {
        let newTags = tags;
        if (inputValue && tags.indexOf(inputValue) === -1) {
            newTags = [...tags, inputValue];
        }
        setInputValue('')
        setInputVisible(false)
        setTags(newTags)
    };

    const handleEditInputChange = (e: any) => {
        setEditInputValue(e.target.value)
    };

    const handleEditInputConfirm = () => {
        const newTags = [...tags];
        setTags(newTags)
        newTags[editInputIndex] = editInputValue;
        setEditInputIndex(-1)
        setEditInputValue('')
    };
    return (
        <>
            {tags.map((tag, index) => {
                if (editInputIndex === index) {
                    return (
                        <Input
                            ref={input}
                            key={tag}
                            size="small"
                            className="tag-input"
                            value={editInputValue}
                            onChange={handleEditInputChange}
                            onBlur={handleEditInputConfirm}
                            onPressEnter={handleEditInputConfirm}
                        />
                    );
                }

                const isLongTag = tag.length > 20;

                const tagElem = (
                    <Tag
                        key={tag}
                        closable={index !== 0}
                        onClose={() => handleClose(tag)}
                    >
                        <span
                            onDoubleClick={e => {
                                if (index !== 0) {
                                    input.current?.focus()
                                    e.preventDefault();
                                }
                            }}
                        >
                            {isLongTag ? `${tag.slice(0, 20)}...` : tag}
                        </span>
                    </Tag>
                );
                return isLongTag ? (
                    <Tooltip title={tag} key={tag}>
                        {tagElem}
                    </Tooltip>
                ) : (
                    tagElem
                );
            })}
            {inputVisible && (
                <Input
                    ref={input}
                    type="text"
                    width={78}
                    size="small"
                    value={inputValue}
                    onChange={handleInputChange}
                    onBlur={handleInputConfirm}
                    onPressEnter={handleInputConfirm}
                />
            )}
            {!inputVisible && (
                <Tag className="site-tag-plus" onClick={showInput}>
                    <PlusOutlined /> New Tag
                </Tag>
            )}
        </>
    )
}

export default EditableTagGroup