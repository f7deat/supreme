import { queryAllParrentMenu } from "@/services/defzone/api";
import { Button, List } from "antd";
import type { DefaultOptionType } from "antd/lib/select";
import { useState, useEffect } from "react";

const CategoryListComponent: React.FC = () => {
    const [list, setList] = useState<DefaultOptionType[]>([]);

    useEffect(() => {
        queryAllParrentMenu().then(response => {
            setList(response);
        })
    }, []);

    return (
        <List
            itemLayout="horizontal"
            size="small"
            dataSource={list}
            renderItem={item => (
                <List.Item>
                    <Button type="link" size="small">{item.label}</Button>
                </List.Item>
            )}
        />
    )
}

export default CategoryListComponent