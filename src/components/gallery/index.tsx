import { queryPhotos, querySearchPhotos } from "@/services/defzone/api";
import ProForm, { ModalForm } from "@ant-design/pro-form";
import { Card, Image, Input } from "antd";
import { useEffect, useState } from "react";

interface IUrls {
    small_s3: string;
}

interface IResult {
    id: string;
    urls: IUrls
}

interface IPhotos {
    total: number;
    results: IResult[]
}

type IGalleryProps = {
    visible: boolean;
}

const Gallery: React.FC<IGalleryProps> = (props) => {

    const [photos, setPhotos] = useState<IPhotos>();

    useEffect(() => {
        queryPhotos().then(response => {
            const data: IPhotos = {
                total: 10,
                results: response
            }
            setPhotos(data)
        })
    }, [])

    const onSearch = (value: string) => {
        querySearchPhotos(value, 1).then(response => {
            setPhotos(response)
        })
    }

    return (
        <ModalForm visible={props.visible} size="large" title="Gallery">
            <ProForm.Item>
                <Input.Search allowClear onSearch={onSearch} />
            </ProForm.Item>
            <div className="flex justify-end">{photos?.total}</div>
            <Card>
                {photos?.results.map(photo => (
                    <Card.Grid key={photo.id} style={{ width: '20%' }}>
                        <Image src={photo.urls.small_s3} />
                    </Card.Grid>
                ))}
            </Card>
        </ModalForm>
    )
}

export default Gallery